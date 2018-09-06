$(document).ready(function(){
	init();
});

function init() {
	//var log = console.log;




	// IE polyfill
  	Number.isInteger = Number.isInteger || function(value) {
    return typeof value === "number" &&
           isFinite(value) &&
           Math.floor(value) === value;
	};

	//log('init');
	var Utils = {};
	var Game = {};
	var Sounds = {};
	var Sprites = {};
	var Text = {};
	var t = TweenMax;
	var tlIntro 	= new TimelineMax({paused:true});
	var tlOutro 	= new TimelineMax({paused:true});
	var tlEndOut 	= new TimelineMax({paused:true});
	var tlGameOver 	= new TimelineMax({paused:true});
	Text = (function() {
		var interfaceTextStyle = new PIXI.TextStyle({
			align : 'center',
			fontFamily: 'uniform_roundedbold',
			fontSize: '28px',
			letterSpacing: -1,
			fill: '0xFFFFFF',
		});
		var ctaTextStyle = new PIXI.TextStyle({
			align : 'center',
			fontFamily: 'uniform_roundedbold',
			fontSize: '28px',
			letterSpacing: -2,
			fill: '0xFFFFFF',
		});
		var subHeadTextStyle = new PIXI.TextStyle({
			align : 'center',
			fontSize: '36px',
			fontFamily:'uniform_roundedblack',
			fill: '0xFFFFFF',
			letterSpacing:1
		});
		var yourScoreTextStyle = new PIXI.TextStyle({
			align : 'center',
			fontSize: '100px',
			fontFamily:'uniform_roundedultra',
			fill: '0xFFFFFF',
			letterSpacing: -4,
           	lineHeight: 10
		});
		return {
			interfaceTextStyle 	: interfaceTextStyle,
			ctaTextStyle 		: ctaTextStyle,
			subHeadTextStyle 	: subHeadTextStyle,
			yourScoreTextStyle 	: yourScoreTextStyle,
		}
	}());
	//Interface
	var loadingText, scoreText, timerText, scoreIcon, timerIcon, timerBg;
	var interfaceHolder, heartHolder, timerHolder, scoreHolder;
	var timerSectors, timerSectorLength, beginAngle;
	var heart1, heart2, heart3;
    var rotateAlert;
	// INTRO
	var ctaBg, ctaText, ctaHolder, overlay, ahLogo, logoTextures, instructionText, cabLogo, cabCatch, cabA, cabBite, cabBg, cabCandy1, cabCandy2, cabCandy3, cabCandy4, intro;
	//MAIN
	var main, bgHolder, candyHolder, fgHolder, airheadHolder, hitRect;
	var sky_bg, buildings, trees, hedges, street, lightpoles;
	var candy0, candy1, candy2, candy3, candy4, candy5, candy6;
	var airHead, airBody, leftArm, rightArm, leftLeg, rightLeg, torso, head, pelvis, headTextures, ashleigh;
	var candies = [];
	//ENDFRAME
	var endFrame, overlayEnd, endCtaBg1, endCtaBg2, endCtaHolder1, endCtaHolder2, endCtaText1, endCtaText2, ahLogoEnd, yourScoreText, endSubhead;
	var cabLogoEnd, cabCatchEnd, cabAEnd, cabBiteEnd, cabBgEnd, cabCandy1End, cabCandy2End, cabCandy3End, cabCandy4End;
	//Sounds
	var bgSound, flapSound, buttonSound, eatSound, loseSound, winSound, overSound;
	//GAME
	var Application = PIXI.Application,
	loader 			= PIXI.loader,
	resources 		= PIXI.loader.resources,
	Sprite 			= PIXI.Sprite,
	gameTime 		= 30,
	elapsedTime 	= 0,
	timerSectors 	= 30,
	timerSectorLength = Math.PI * 2 / timerSectors,
	beginAngle 		= 0 / timerSectors * Math.PI * 2,
	lives 			= 3,
	mainBlurAmount 	= 10,
	topHits 		= 0,
	bottomHits 		= 0,
	score 			= 0,
	flapBoost 		= 0.0,
	sinkRate 		= 4.0,
	candySpeed 		= 3,
	skyScrollRate 		= 0.3,
	buildingScrollRate 	= 0.6,
	treesScrollRate 	= 0.7,
	hedgesScrollRate 	= 0.8,
	streetScrollRate 	= 1.0,
	fgScrollRate 		= 1.5,
	bgSpeedMod 			= 0.0,
	candySpeedMod 		= 0.0,
	won, lost, app,
	playing 			= false,
    introPlaying 		= false,
    gameFinished    	= false,
	_width 				= window.innerWidth,
	_height 			= window.innerHeight;
  	var clickCount = 0;
	var screenSize;
    var screenHeight;
	var ticker 			= new PIXI.ticker.Ticker({ autoStart : false});
	var introTicker 	= new PIXI.ticker.Ticker({ autoStart : false})
	ticker.autoStart = false;
	introTicker.autoStart = false;
	ticker.stop();
	introTicker.stop();
	Utils = (function(){

		var getMousePosition = function() {
			return app.renderer.plugins.interaction.mouse.global;
		}
		var random = function(min, max) {
			if (max == null) { max = min; min = 0; }
			return Math.round(Math.random() * (max - min) + min);
		}
		var hitTest = function(r1, r2) {
			var hit, combinedHalfWidths ,combinedHalfHeights, vx, vy;
			hit = false;
			r1.centerX = r1.x;
			r1.centerY = r1.y;
			r2.centerX = (r2.x + 40);
			r2.centerY = (r2.y - 10);
			r1.halfWidth = r1.width / 2;
			r1.halfHeight = r1.height / 2;
			r2.halfWidth = 20;
			r2.halfHeight = 60;
			vx = r1.centerX - r2.centerX;
			vy = r1.centerY - r2.centerY;
			combinedHalfWidths = r1.halfWidth + r2.halfWidth;
			combinedHalfHeights = r1.halfHeight + r2.halfHeight;
			if (Math.abs(vx) < combinedHalfWidths) {
				//Collision X
				if (Math.abs(vy) < combinedHalfHeights) {
					//There's definitely a collision happening
					hit = true;
	    		} else {
					//no collision on the y axis
					hit = false;
	    		}
			} else {
				//There's no collision on the x axis
				hit = false;
			}
			return hit;
			}
			return {
				random : random,
				hitTest : hitTest,
				getMousePosition : getMousePosition
		}
	}());

	/*
  	* * * * * * * * * * * * * * *
    = = = SET UP THE STAGE  = = =
    * * * * * * * * * * * * * * *
    */

    var isMobile = (function () {
      var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
  })();

    function isTouchDevice() {
		return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
	};

	var gameHolder = $('.game');
	var gameHolderShadow = $('.gameHolderShadow');
	var gameContainer = $('#gameContainer');


	var ghWidth = $(gameContainer).width();
	var ghsWidth = $(gameHolderShadow).width();

	var game = $('<div>', {id:'game'}).appendTo(gameContainer);

  	//var closeBtn = $('<div>', {id : 'closeBtn'}).appendTo(game);
  	//$('#close_hitArea').appendTo(closeBtn);
  	//$('#close_hitArea').css({ width : '100%', height : '100%', top : 0, left : 0});
    //var rotateAlertOverlay = $('<div id="rotateAlert"><p></p></div>').prependTo(game);
  	//t.set(rotateAlertOverlay, {autoAlpha:0});

	if (_width >= 1280 ) {
		screenSize = 'desktop';
		$(game).css({width:ghWidth, height:500});
		app = new Application({width : ghWidth, height : 500, legacy : true});
		//log(screenSize);
	} else if (_width < 1280 && _width >= 768 ) {
      	screenSize = 'tablet';
      	$(game).css({width:'100%', height:500});
       	app = new Application({width : ghWidth, height : 500});
       	//log(screenSize);
	} else if ( _width < 768 ) {
		if(isMobile === true) {
			screenSize = 'mobile';
			$(game).css({width:'100%', height:'100%'});
			$(gameHolder).css({width:'100%', height:'100%', top:0, left:0});
			$(gameContainer).css({width:'100%', height:'100%', top:0, left:0, transform:'translate(0)'});
			app = new Application({width : _width, height : _height, forceCanvas : true});

			if (_height < 500) {
				screenHeight = 'small';
			} else {
         		screenHeight = 'normal';
        	}
		}


		if(Math.abs(window.orientation) === 90) {
          	screenSize = 'tablet';
          	$(game).css({width:'100%', height:'100%'});
        	app = new Application({width : _width, height : _height, forceCanvas : true});
        }


		/*if (isMobile === false && _height > 608 ) {
			screenSize = 'tablet';
			$(game).css({width:'100%', height:500});
			app = new Application({width : ghWidth, height : 500});
		}*/
    }

	app.renderer.backgroundColor = 0x0040A3;
	//app.renderer.view.width = 1280;
	//app.renderer.view.height = 500;
	$(app.view).appendTo(game);

	var stageW = app.renderer.view.width;
	var stageH = app.renderer.view.height;
	loadingText = new PIXI.Text('LOADING      ');
  	//loadingText = new PIXI.extras.BitmapText('LOADING      ');

	//loadingText.style = Text.interfaceTextStyle;
    loadingText.style = {fill: '0xFFFFFF', fontSize:'20px', fontFamily:'uniform_roundedbold, sans-serif'};

  	loadingText.position.set(stageW / 2 - loadingText.width / 2, stageH / 2);

	app.stage.addChild(loadingText);
	function initAudio() {
		bgSound = new Howl({
			src : ['sounds/bg-sound.webm',
                   'sounds/bg-sound.mp3'],
			volume: 0.4,
			loop: true,
		});
		flapSound = new Howl({
			src : ['sounds/jump-sound.webm',
                   'sounds/jump-sound.mp3'],
			volume: 0.5
		});
		buttonSound = new Howl({
			src : ['sounds/button-sound.webm',
                   'sounds/button-sound.mp3'],
			volume: 0.5
		});
		eatSound = new Howl({
			src : ['sounds/eat-sound.webm',
                   'sounds/eat-sound.mp3'],
			volume: 0.5
		});
		loseSound = new Howl({
			src : ['sounds/lose-sound.webm',
                   'sounds/lose-sound.mp3'],
			volume: 0.5
		});
		winSound = new Howl({
			src : ['sounds/win-sound.webm',
                   'sounds/win-sound.mp3'],
			volume: 0.5
		});
		overSound = new Howl({
			src : ['sounds/over-sound.webm',
                   'sounds/over-sound.mp3'],
			volume: 0.5
		});
		var audioCount = 0;
		function updateAudioProgress() {
			audioCount += 1;
			//log(audioCount);
			if (audioCount === 7) {

				setTimeout( function() { bgSound.play(); ticker.start(); playing = true;}, 500);
				intro.alpha = 0.0;
				intro.destroy();


			}
		}
		bgSound.once('load', updateAudioProgress());
		flapSound.once('load', updateAudioProgress());
		buttonSound.once('load', updateAudioProgress());
		eatSound.once('load', updateAudioProgress());
		loseSound.once('load', updateAudioProgress());
		winSound.once('load', updateAudioProgress());
		overSound.once('load', updateAudioProgress());
	}
	function setUpReplay() {
		//log('SET REPLAY');

		buttonSound.play();
        gameFinished = false;

		endCtaHolder1.off('pointerup');
      	endCtaHolder2.off('pointerup');
      	overlayEnd.off('pointerup');
      	ahLogoEnd.off('pointerup');

      	airBody.alpha = (0.0);
        head.alpha = (0.0);
        ashleigh.alpha = (1.0);

      	//airHead.y = stageH - 140;
      	airHead.y = stageH - 200;

		if (playing === false) {
			score = 0;
			scoreText.setText(score);
			lives = 3;
			ahLogoEnd.gotoAndStop(0);
			bgSpeedMod 			= 0.0;
			candySpeedMod 		= 0.0;
			skyScrollRate 		= 0.3;
			buildingScrollRate 	= 0.6;
			treesScrollRate 	= 0.7;
			hedgesScrollRate 	= 0.8;
			streetScrollRate 	= 1.0;
			fgScrollRate 		= 1.5;
			candySpeed 			= 3.0;
			gameTime 			= 30;
			elapsedTime 		= 0;
			bottomHits 			= 0;
            clickCount 			= 0;
			for ( var i = 0; i < candies.length; i++ ) {
              	if (screenSize === 'mobile') {
					t.set(candies[i], {pixi:{x:Utils.random(stageW, stageW * 4), y:Utils.random(50, stageH - 100)}} );
				} else {
					t.set(candies[i], {pixi:{x:Utils.random(stageW / 2, stageW * 2), y:Utils.random(50, stageH - 100)}} );
				}

				//t.set(candies[i], {pixi:{x:Utils.random(stageW / 2, stageW * 2), y:Utils.random(50, stageH - 100)}} );
			}
			t.set([heart1, heart2, heart3], {pixi:{alpha:1}});
			mainBlur.blur = 0.0;
			endFrame.position.set(0, stageH);
			setTimeout( function() { bgSound.play(); }, 500);
			t.to(bgSound, 1.0, {volume:0.4});
			playing = true;
			ticker.start();
          	hitRect.on('pointerup', handleFlap);
		}
	}

	function handleDeath() {
		//log('You Died');
		loseSound.play();
		ticker.stop();
		bottomHits = 0;

		//airHead.y = -airHead.height;
		t.set(airHead, {pixi:{y:-200}});
		if (lives === 3 ) {
			t.to(heart1, 0.05, {pixi:{alpha:0}, ease:Power3.easeOut, yoyo:true, repeat:4});
			lives = 2;
			setTimeout( function() {
				ticker.start();
				t.to(airHead, 0.1, {pixi:{alpha:0.1}, ease:Power0.easeNone, yoyo:true, repeat:11, delay:0.0});
			}, 500);
		} else if ( lives === 2) {
			t.to(heart2, 0.05, {pixi:{alpha:0}, ease:Power3.easeOut, yoyo:true, repeat:4});
			lives = 1;
			setTimeout( function() {
				ticker.start();
				t.to(airHead, 0.1, {pixi:{alpha:0.1}, ease:Power0.easeNone, yoyo:true, repeat:11, delay:0.0});
				}, 500);
		} else if ( lives === 1 ) {
			t.to(heart3, 0.05, {pixi:{alpha:0}, ease:Power3.easeOut, yoyo:true, repeat:4});
			lives = 0;
			handleGameOver(false);
		}
	}
	function handleGameOver( won ) {
      	hitRect.off('pointerup');
		playing = false;
      	gameFinished = true;
      	if ( adClose === false) {

        }

		if (won === true ) {
			//log('you win');
			t.to(bgSound, 1.0, {volume:0, onComplete:function() {
				setTimeout( function() { winSound.play(); }, 300);
				bgSound.stop();
			} });
			endSubhead.setText(' Great job! ' );
		} else {
			//log('You Lost');
			t.to(bgSound, 1.0, {volume:0, onComplete:function() {
				setTimeout( function() { overSound.play(); }, 300);
				bgSound.stop();
			} });
			endSubhead.setText(' Nice Try! ' );
		}
		yourScoreText.setText(' Your score: ' + score + ' ');

      	if (screenSize === 'desktop') {
			yourScoreText.position.set(stageW / 3 - yourScoreText.width / 2, 168);
		} else if ( screenSize === 'tablet' ) {
			yourScoreText.position.set(stageW / 3 - yourScoreText.width / 2, stageH / 2 - yourScoreText.height );
		} else if ( screenSize === 'mobile') {
			yourScoreText.position.set(stageW / 2 - yourScoreText.width / 2, stageH / 2 - yourScoreText.height * 2 );
		}

      	tlGameOver.add('begin')
		.to(main, 				0.3, {pixi:{blurX:10.0, blurY:10.0}}, '+=1.0')
		.from(overlayEnd, 		0.4, {pixi:{y:'-=400', alpha:0}, ease:Power3.easeOut})
		.from(cabCatchEnd, 		0.8, {pixi:{scale:0.3, alpha:0}, ease:Elastic.easeOut})
		.from(cabAEnd, 			0.8, {pixi:{scale:0.3, alpha:0}, ease:Elastic.easeOut}, '-=0.7')
		.from(cabBiteEnd, 		0.8, {pixi:{scale:0.3, alpha:0}, ease:Elastic.easeOut}, '-=0.7')
		.from(cabBgEnd, 		0.2, {pixi:{scale:0,   alpha:0}, ease:Power3.easeOut}, '-=0.7')
		.from(cabCandy4End, 	0.6, {pixi:{scale:0.5, alpha:0}, ease:Elastic.easeOut}, '-=0.6')
		.from(cabCandy1End, 	0.6, {pixi:{scale:1.2, alpha:0}, ease:Elastic.easeOut}, '-=0.55')
		.from(cabCandy2End, 	0.6, {pixi:{scale:1.2, alpha:0}, ease:Elastic.easeOut}, '-=0.55')
		.from(cabCandy3End, 	0.6, {pixi:{scale:1.2, alpha:0}, ease:Elastic.easeOut}, '-=0.55')
		.from(yourScoreText, 	0.6, {pixi:{y:'+=40',  alpha:0}, ease:Elastic.easeOut}, '-=0.55')
		.from(endSubhead, 		0.6, {pixi:{y:'+=40',  alpha:0}, ease:Elastic.easeOut}, '-=0.55')
		.from(ahLogoEnd, 		0.6, {pixi:{scale:0.7, alpha:0}, ease:Power3.easeOut}, '+=0.1')
		.addCallback(function() { ahLogoEnd.play(); }, '-=0.65')
		.from(endCtaHolder1, 	0.6, {pixi:{y:'+=40',  alpha:0}, ease:Elastic.easeOut}, '-=0.55')
		.from(endCtaHolder2, 	0.6, {pixi:{y:'+=40',  alpha:0}, ease:Elastic.easeOut}, '-=0.55')
		.addCallback(function() { setUpEndCta(); })
		.add('end');
		//, onComplete:setUpEndCta
		function setUpEndCta() {
			//log('end cta');
			endCtaHolder1.on('mouseover', function(e){
				t.to(endCtaBg1, 0.6, {pixi:{scale:1.2}, ease:Elastic.easeOut});
				t.to(endCtaText1, 0.2, {pixi:{y:'+=10', alpha:0}, ease:Power3.easeOut});
				t.set(endCtaText1, {pixi:{y:'-=30'}, delay:0.2})
				t.to(endCtaText1, 0.6, {pixi:{y:'+=20', alpha:1, scale:1.1}, ease:Elastic.easeOut, delay:0.20});
              	t.to(endCtaText1, 0.1, {pixi:{y:0}, delay:0.25});
			}).on('mouseout', function(e){
				t.to(endCtaBg1, 0.6, {pixi:{scale:1.0}, ease:Elastic.easeOut});
				t.to(endCtaText1, 0.6, {pixi:{scale:1.0, y:0}, ease:Elastic.easeOut});
			}).on('pointerup', setUpReplay);

			endCtaHolder2.on('mouseover', function(e){
				t.to(endCtaBg2, 0.6, {pixi:{scale:1.2}, ease:Elastic.easeOut});
				t.to(endCtaText2, 0.2, {pixi:{y:'+=10', alpha:0}, ease:Power3.easeOut});
				t.set(endCtaText2, {pixi:{y:'-=30'}, delay:0.2})
				t.to(endCtaText2, 0.6, {pixi:{y:'+=20', alpha:1, scale:1.1}, ease:Elastic.easeOut, delay:0.20});
              	t.to(endCtaText2, 0.1, {pixi:{y:0}, delay:0.25});
			}).on('mouseout', function(e){
				t.to(endCtaBg2, 0.6, {pixi:{scale:1.0}, ease:Elastic.easeOut});
				t.to(endCtaText2, 0.6, {pixi:{scale:1.0, y:0}, ease:Elastic.easeOut});
			}).on('pointerup', function(){
            	//$('#find_a_pack_clickThrough').click();
            	window.open('http://airheads.com/', '_blank');
            });

          	ahLogoEnd.interactive = true;
          	ahLogoEnd.buttonMode = true;
          	overlayEnd.interactive = true;
          	overlayEnd.buttonMode = true;

          	overlayEnd.on('pointerup', function() {
        		//$('#bg_clickthrough').click();
        	});

          	ahLogoEnd.on('pointerup', function() {
        		//$('#airheads_logo_clickthrough').click();
        	});

		}

		endFrame.position.set(0, 0);
		tlGameOver.play();
	}
	function handleFlap() {
		//log('HANDLE FLAP');
		if (playing === true) {
          //log('FLAP');
          	clickCount += 1;
			flapSound.play();
			t.to(rightLeg, 	0.3, {pixi:{rotation:20}});
			t.to(leftLeg, 	0.3, {pixi:{rotation:40}});
			t.to(rightArm, 	0.3, {pixi:{rotation:60}});
			t.to(leftArm, 	0.3, {pixi:{rotation:60}});
			t.to(head, 		0.6, {pixi:{rotation:-10}});
			t.to([rightLeg,leftLeg, head, rightArm, leftArm, airBody], 0.9, {pixi:{rotation:0}, delay:1.0, ease:Elastic.easeOut});
			if (airHead.y < stageH / 2 ) {
				flapBoost += 2.5;
			} else {
				flapBoost += 8.5;
			}
		}
	}

  	// Deals with character positon as you play. Called by the game ticker every frame
	function handleAirHead(delta) {
      	if (score > 0 || clickCount > 1) {
          airHead.y += sinkRate;
        }
      	//
		airHead.y -= flapBoost;
		if ( flapBoost > 0) {
			if ( airHead.y < stageH / 3 ) {
				flapBoost -= 0.35;
			} else if ( airHead.y < stageH / 2 ) {
				flapBoost -= 0.25;
			} else {
				flapBoost -= 0.10;
				t.set(head, {pixi:{rotation:0}});
			}
		} else {
			flapBoost = 0;
		}
		if (airHead.y + (airHead.height - head.height * 1.5) > stageH ) {
			sinkRate = 0.0;
			bottomHits += 1;
			if ( bottomHits > 20 ) {
				handleDeath();
			}
		} else {
			sinkRate = 4.0;
		}
		if (airHead.y < 0 ) {
			flapBoost = 0;
			topHits += 1;
			handleTopHit();
		}
	}

  	// Handles the BackGround Parallax scrolling. Uses PIXI Tiling Sprite. Called by the ticker every frame
	function bgScroll(delta) {
		sky_bg.tilePosition.x 		-= skyScrollRate;
		buildings.tilePosition.x  	-= buildingScrollRate;
		trees.tilePosition.x 		-= treesScrollRate;
		hedges.tilePosition.x 		-= hedgesScrollRate;
		street.tilePosition.x 		-= streetScrollRate;
		lightpoles.tilePosition.x 	-= fgScrollRate;
		skyScrollRate 				+= bgSpeedMod;
		buildingScrollRate 			+= bgSpeedMod;
		treesScrollRate 			+= bgSpeedMod;
		hedgesScrollRate 			+= bgSpeedMod;
		streetScrollRate 			+= bgSpeedMod;
		fgScrollRate 				+= bgSpeedMod;
		candySpeed 					+= candySpeedMod;
	}

  	// Deals with the scrolling of the candy and checks for collisoin between character and the candy. Called by the ticker every frame
	function candyScroll(delta) {
		candy5.rotation -= 0.01;
		candy6.rotation -= 0.005;
		for ( var i = 0; i < candies.length; i++ ) {
			candies[i].x -= candySpeed;
			if (candies[i].x < 0 - candies[i].width) {
				if ( screenSize === 'mobile' ) {
					candies[i].x = stageW + Utils.random(0, stageW * 4);
				} else {
					candies[i].x = stageW + candies[i].width;
				}
				candies[i].y = Utils.random(50, stageH - 100);
			}
			if (Utils.hitTest(candies[i], airHead)) {
				//log('CANDY COLLISION');
				//candies[i].x = stageW + Utils.random(200, 400);
				if ( screenSize === 'mobile' ) {
					candies[i].x = stageW + Utils.random(0, stageW * 4);
				} else {
					candies[i].x = stageW + Utils.random(200, 400);
				}
				candies[i].y = Utils.random(50, stageH - 100);
				handleScore();
			}
		}
	}

	function handleScore() {
		if (score === 0) {
			airBody.alpha = (1.0);
			head.alpha = (1.0);
			ashleigh.alpha = (0.0);
          	flapBoost += 15;

		}
		head.play();
		head.onComplete = function() {
			head.gotoAndStop(0);
		}
		score += 1;
		scoreText.setText(score);
		bgSpeedMod += 0.0001;
		candySpeedMod += 0.0003;
		eatSound.play();
	}

  	// when the character hits the top of the Stage.
	function handleTopHit() {
		t.to(rightLeg, 	0.10, {pixi:{rotation: 40}});
		t.to(leftLeg, 	0.10, {pixi:{rotation: 10}});
		t.to(rightArm, 	0.10, {pixi:{rotation: 90}});
		t.to(leftArm, 	0.10, {pixi:{rotation:-20}});
		t.to(airBody, 	0.15, {pixi:{rotation: 20}});
		t.to([rightLeg,leftLeg, head, rightArm, leftArm, airBody], 0.9, {pixi:{rotation:0}, delay:0.2, ease:Elastic.easeOut});
	}

  	//Handles the 30 second clock
	function handleTimer(delta) {
		gameTime -= (1 / Math.round(ticker.FPS));
		timerText.setText( Math.ceil(gameTime) );
		elapsedTime += (1 / Math.round(ticker.FPS));
		timerSectorLength = ((Math.PI / 180) * 360 / timerSectors) * elapsedTime;
		interfaceHolder.removeChild(timerIcon);
		timerIcon = new PIXI.Graphics();
		timerIcon.lineStyle(6, 0xFF3300, 1);
		timerIcon.arc(stageW - 80, stageH - 40, 10, 0 , timerSectorLength, false);
		interfaceHolder.addChild(timerIcon);
		if (Math.ceil(gameTime)  <= 0 ) {
			ticker.stop();
			handleGameOver(true);
		}
	}
	/*
	 - - - - - - - - - - - - - - - - - -
	 = = = = = = = = = = = = = = = = = =
	 = = = = = BEGIN GAME PLAY = = = = =
	 = = = = = = = = = = = = = = = = = =
	 - - - - - - - - - - - - - - - - - -
	*/
	function setUpGame() {
		//log('SET UP GAME');
		initAudio();
      	introTicker.stop();
		introTicker.remove();
		introTicker.destroy();
      	airHead.y = stageH - 200;
		//airHead.y = -200;
		tlOutro.add('begin')
		.to(main, 				0.6, {pixi:{blurX:0.0, blurY:0.0}, ease:Power2.easeOut})
		.to(cabLogo, 			0.4, {pixi:{y:'-=100', alpha:0.0}, ease:Power3.easeOut}, '-=0.55')
		.to(cabLogo.children, 	0.4, {pixi:{scale:0.5, alpha:0.0}, ease:Power2.easeOut}, '-=0.55')
		.to(ctaHolder, 			0.4, {pixi:{y:'+=100', alpha:0.0}, ease:Power3.easeOut}, '-=0.40')
		.to(instructionText, 	0.4, {pixi:{x:'+=300', alpha:0.0}, ease:Power3.easeOut}, '-=0.40')
		.to(overlay, 			0.4, {pixi:{x:'+=300', alpha:0.0}, ease:Power3.easeOut}, '-=0.40')
		.to(ahLogo, 			0.4, {pixi:{x:'+=300', alpha:0.0,  scale:0}, ease:Power3.easeOut}, '-=0.40')
		.addCallback(destroyIntro)
		.add('end');
		function destroyIntro() {
			// Blah
        }
		tlOutro.play();
		hitRect.on('pointerup', handleFlap);
	}
	function buildStage() {
		//log('BUILD STAGE');
		tlIntro.add('begin')
		.from(main, 		0.5, {pixi:{alpha:0}}, '+=1.0')
		.from(cabCatch, 	0.8, {pixi:{scale:0.3, alpha:0}, ease:Elastic.easeOut})
		.from(cabCandy4, 	0.6, {pixi:{scale:0.5, alpha:0}, ease:Elastic.easeOut}, '-=0.7')
		.from(cabA, 		0.8, {pixi:{scale:0.3, alpha:0}, ease:Elastic.easeOut}, '-=0.7')
		.from(cabCandy3, 	0.6, {pixi:{scale:1.2, alpha:0}, ease:Elastic.easeOut}, '-=0.75')
		.from(cabBite, 		0.8, {pixi:{scale:0.3, alpha:0}, ease:Elastic.easeOut}, '-=0.7')
		.from(cabCandy2, 	0.6, {pixi:{scale:1.2, alpha:0}, ease:Elastic.easeOut}, '-=0.75')
		.from(cabBg, 		0.2, {pixi:{scale:0, alpha:0}, ease:Power3.easeOut}, '-=0.7')
		.from(cabCandy1, 	0.6, {pixi:{scale:1.2, alpha:0}, ease:Elastic.easeOut}, '-=0.75')

		.from(overlay, 			0.7, {pixi:{x:'+=40', alpha:0}, ease:Elastic.easeOut}, '-=0.55')
		.from(instructionText, 0.4, {pixi:{y:'+=40', alpha:0},ease:Elastic.easeOut}, '-=0.6')
		.from(ahLogo, 		0.8, {pixi:{scale:0.7, alpha:0}, ease:Power3.easeOut}, '-=0.2')
		.addCallback(function() { ahLogo.play() }, '-=0.85')

		.from(ctaHolder, 	0.6, {pixi:{y:'+=40', alpha:0, scale:0.5}, ease:Elastic.easeOut}, '-=0.6')
		.add('end');
		app.stage.addChild(main);
		app.stage.addChild(intro);
		app.stage.addChild(endFrame);
		endFrame.position.set(0, stageH);

       app.stage.addChild(rotateAlert);

		ctaHolder.on('mouseover', function(e){
			t.to(ctaBg, 0.6, {pixi:{scale:1.2}, ease:Elastic.easeOut});
			t.to(ctaText, 0.2, {pixi:{y:'+=10', alpha:0}, ease:Power3.easeOut});
			t.set(ctaText, {pixi:{y:'-=30'}, delay:0.2})
			t.to(ctaText, 0.6, {pixi:{y:'+=20', alpha:1, scale:1.1}, ease:Elastic.easeOut, delay:0.21});
            t.to(ctaText, 0.1, {pixi:{y:0}, delay:0.25});
		}).on('mouseout', function(e){
			t.to(ctaBg, 0.6, {pixi:{scale:1.0}, ease:Elastic.easeOut});
			t.to(ctaText, 0.6, {pixi:{scale:1.0, y:0}, ease:Elastic.easeOut});
		});

      	ctaHolder.on('pointerup', setUpGame);
      	//ctaHolder.on('click', setUpGame);

      	/*ahLogo.on('pointerup', function() {
        	$('#airheads_logo_clickthrough').click();
        });*/



      	tlIntro.play();
		introTicker.start();

      	introPlaying = true;
	}
	function setPosition() {
		//log('SET POSITION');
		// -------
		//  INTRO
		// -------
		// - overlay
		// - CAB Logo
		cabCatch.anchor.set(0.5)
		cabA.anchor.set(0.5)
		cabBite.anchor.set(0.5)
		cabBg.anchor.set(0.5)
		cabCandy1.anchor.set(0.5)
		cabCandy2.anchor.set(0.5)
		cabCandy3.anchor.set(0.5)
		cabCandy4.anchor.set(0.5)
		cabCatch.position.set(cabCatch.width / 2, cabCatch.height / 2);
		cabA.position.set(cabA.width / 2, cabA.height / 2);
		cabBite.position.set(cabBite.width / 2, cabBite.height / 2);
		cabBg.position.set(cabBg.width / 2, cabBg.height / 2);
		cabCandy1.position.set(cabBg.width / 2, cabBg.height / 2);
		cabCandy2.position.set(cabBg.width / 2, cabBg.height / 2);
		cabCandy3.position.set(cabBg.width / 2, cabBg.height / 2);
		cabCandy4.position.set(cabBg.width / 2, cabBg.height / 2);
		cabLogo.addChild(cabCandy4);
		cabLogo.addChild(cabBg);
		cabLogo.addChild(cabCatch);
		cabLogo.addChild(cabA);
		cabLogo.addChild(cabBite);
		cabLogo.addChild(cabCandy1);
		cabLogo.addChild(cabCandy2);
		cabLogo.addChild(cabCandy3);
		// - CTA
		ctaBg.anchor.set(0.5);
		ctaText.anchor.set(0.5);
		ctaHolder.interactive = true;
		ctaHolder.buttonMode = true;
		ctaHolder.addChild(ctaBg);
		ctaHolder.addChild(ctaText);
		// - Airheads Logo
		ahLogo.anchor.set(0.5);
		ahLogo.animationSpeed = 0.3;
		ahLogo.loop = false;

      	ahLogo.interactive = true;
        ahLogo.buttonMode = true;

		// - Instruction Text
		if (screenSize === 'desktop') {
			//log('Position Desktop');
			overlay.alpha = 0;
			ahLogo.alpha = 0;
			instructionText.alpha = 0;
			overlay.position.set(stageW - overlay.width, 0);
			cabLogo.position.set(stageW / 2 - cabLogo.width / 2 - 20, 20);
			ctaHolder.position.set( stageW / 2, stageH / 2 + 160);
			ahLogo.position.set(stageW - ahLogo.width / 2, 160);
			instructionText.position.set((overlay.x + overlay.width / 2) - instructionText.width / 2, stageH - instructionText.height - 60);
		} else if ( screenSize === 'tablet' ) {
			//log('Position Tablet');

			overlay.position.set( (stageW / 3) * 1.75, 0);
			cabLogo.scale.set(0.6);
			cabLogo.position.set(stageW / 3 - cabLogo.width / 2 - 20, 60);
			ctaHolder.position.set( stageW / 3, stageH / 2 + 160);
			ahLogo.scale.set(0.70);
			ahLogo.position.set(stageW - ahLogo.width / 2 + 20, 160);
			instructionText.style.fontSize = '20px';
			instructionText.style.letterSpacing = 1;
			instructionText.position.set( ((stageW - overlay.x) / 2 ) + overlay.x - instructionText.width / 2, stageH - instructionText.height - 60);


			/*overlay.position.set( (stageW / 3) * 1.75, 0);
			cabLogo.scale.set(0.6);
			cabLogo.position.set(stageW / 2 - cabLogo.width / 2 - 20, 60);
			ctaHolder.position.set( stageW / 2, stageH / 2 + 160);
			ahLogo.scale.set(0.70);
			ahLogo.position.set(stageW - ahLogo.width / 2 + 20, 160);
			instructionText.style.fontSize = '20px';
			instructionText.style.letterSpacing = 1;
			instructionText.position.set( ((stageW - overlay.x) / 2 ) + overlay.x - instructionText.width / 2, stageH - instructionText.height - 60);*/
		} else if ( screenSize === 'mobile') {
			//log ('position mobile');

          	if (screenHeight === 'small') {

              overlay.anchor.set(0.5);
              overlay.width = stageW;
              overlay.rotation = (Math.PI / 180) * 90;
              overlay.position.set(stageW - overlay.width / 2, stageH - 80);

              cabLogo.scale.set(0.3);
			  cabLogo.position.set(stageW / 2 - cabLogo.width / 2 - 20, 60);

              ctaHolder.scale.set(0.6);
              ctaHolder.position.set( stageW / 2, stageH / 2 - ctaHolder.height / 2 );

               ahLogo.scale.set(0.5);
               ahLogo.position.set( stageW / 2, stageH / 2 + ahLogo.height / 2 - 20);

               instructionText.style.fontSize = '16px';
               instructionText.style.letterSpacing = 1;
               instructionText.position.set( stageW / 2 - instructionText.width / 2, stageH - instructionText.height - 20);
            } else {

               overlay.anchor.set(0.5);
               overlay.width = stageW;
               overlay.rotation = (Math.PI / 180) * 90;
               overlay.position.set(stageW - overlay.width / 2, stageH - 80);

              cabLogo.scale.set(0.4);
              cabLogo.position.set(stageW / 2 - cabLogo.width / 2 - 20, 60);
              ctaHolder.scale.set(0.8);
              ctaHolder.position.set( stageW / 2, stageH / 2 - ctaHolder.height / 2);

               ahLogo.scale.set(0.60);
               ahLogo.position.set( stageW / 2, stageH / 2 + ahLogo.height / 2 - 20);

               instructionText.style.fontSize = '20px';
               instructionText.style.letterSpacing = 1;
               instructionText.position.set( stageW / 2 - instructionText.width / 2, stageH - instructionText.height - 20);

            }

		}

      	intro.addChild(overlay);
		intro.addChild(instructionText);
		intro.addChild(ahLogo);

		intro.addChild(ctaHolder);
		intro.addChild(cabLogo);

		// -------
		//  MAIN
		// -------
		// - Interface
		main.filters = [mainBlur];
        rotateAlert.position.set(stageW / 2 - rotateAlert.width / 2, stageH / 2 - rotateAlert.height / 2);
        rotateAlert.alpha = 0.0;
		scoreText.position.set(76, stageH - scoreText.height - 26);
		scoreIcon.anchor.set(0.5);
		scoreIcon.scale.set(0.8);
		scoreIcon.position.set(42, stageH - ((scoreIcon.height / 2) + 20));
		timerText.position.set(stageW - timerText.width - 20, stageH - timerText.height - 26);
		heart1.position.set(0, 0);
		heart2.position.set(40, 0);
		heart3.position.set(80, 0);
		heartHolder.addChild(heart1);
		heartHolder.addChild(heart2);
		heartHolder.addChild(heart3);
		heartHolder.position.set(30, 20);
		interfaceHolder.addChild(heartHolder);
		interfaceHolder.addChild(timerBg);
		interfaceHolder.addChild(timerIcon);
		interfaceHolder.addChild(timerText);
		interfaceHolder.addChild(scoreIcon);
		interfaceHolder.addChild(scoreText);
		bgHolder.addChild(sky_bg);
		bgHolder.addChild(buildings);
		bgHolder.addChild(trees);
		bgHolder.addChild(hedges);
		bgHolder.addChild(street);
		airBody.addChild(leftArm);
		airBody.addChild(rightLeg);
		airBody.addChild(leftLeg);
		airBody.addChild(torso);
		airBody.addChild(rightArm);
		airHead.addChild(airBody);
		airHead.addChild(head);
		airHead.addChild(ashleigh);

		airHead.position.set(stageW / 3, stageH - 200);

		airBody.alpha = (0.0);
		head.alpha = (0.0);

		candy0.anchor.set(0.5);
		candy1.anchor.set(0.5);
		candy2.anchor.set(0.5);
		candy3.anchor.set(0.5);
		candy4.anchor.set(0.5);
		candy5.anchor.set(0.5);
		candy6.anchor.set(0.5);
		candyHolder.addChild(candy0);
		candyHolder.addChild(candy1);
		candyHolder.addChild(candy2);
		candyHolder.addChild(candy3);
		candyHolder.addChild(candy4);
		candyHolder.addChild(candy5);
		candyHolder.addChild(candy6);
		candies = [candy0, candy1, candy2, candy3, candy4, candy5, candy6];

      	for ( var i = 0; i < candies.length; i++ ) {
			if (screenSize === 'mobile') {
				t.set(candies[i], {pixi:{x:Utils.random(stageW, stageW * 4), y:Utils.random(50, stageH - 100)}} );
			} else {
				t.set(candies[i], {pixi:{x:Utils.random(stageW, stageW * 2), y:Utils.random(50, stageH - 100)}} );
			}
		}

      if (screenSize === 'mobile') {
          	buildings.position.set(0, 64);
			trees.position.set(0, 202);
			hedges.position.set(0, 0);
			street.position.set(0, 360);
			lightpoles.position.set(0, 0);
          	//bgHolder.scale.set(stageH / 500);
            //bgHolder.scale.set(window.innerHeight / 500);
        	bgHolder.scale.y = window.innerHeight / 500;
        	lightpoles.alpha = 0;
		} else {
			buildings.position.set(0, 64);
			trees.position.set(0, 202);
			hedges.position.set(0, 0);
			street.position.set(0, 362);
			lightpoles.position.set(0, 0);
			lightpoles.tilePosition.x -= 200;
		}
		main.addChild(bgHolder);
		main.addChild(candyHolder);
		main.addChild(airHead);
		main.addChild(lightpoles);
		main.addChild(interfaceHolder);
		main.addChild(hitRect);
		// -------
		//  END FRAME
		// -------
		endCtaBg1.anchor.set(0.5);
		endCtaBg2.anchor.set(0.5);
		endCtaText1.anchor.set(0.5);
		endCtaText2.anchor.set(0.5);
		endCtaHolder1.addChild(endCtaBg1);
		endCtaHolder1.addChild(endCtaText1);
		endCtaHolder2.addChild(endCtaBg2);
		endCtaHolder2.addChild(endCtaText2);
		endCtaHolder1.interactive = true;
		endCtaHolder1.buttonMode = true;
		endCtaHolder2.interactive = true;
		endCtaHolder2.buttonMode = true;
		cabCatchEnd.anchor.set(0.5)
		cabCatchEnd.position.set(cabCatch.width/2, cabCatch.height / 2);
		cabAEnd.anchor.set(0.5)
		cabAEnd.position.set(cabA.width/2, cabA.height / 2);
		cabBiteEnd.anchor.set(0.5)
		cabBiteEnd.position.set(cabBite.width/2, cabBite.height / 2);
		cabBgEnd.anchor.set(0.5)
		cabBgEnd.position.set(cabBg.width/2, cabBg.height / 2);
		cabCandy1End.anchor.set(0.5)
		cabCandy1End.position.set(cabBg.width/2, cabBg.height / 2);
		cabCandy2End.anchor.set(0.5)
		cabCandy2End.position.set(cabBg.width/2, cabBg.height / 2);
		cabCandy3End.anchor.set(0.5)
		cabCandy3End.position.set(cabBg.width/2, cabBg.height / 2);
		cabCandy4End.anchor.set(0.5)
		cabCandy4End.position.set(cabBg.width/2, cabBg.height / 2);
		cabLogoEnd.addChild(cabCandy4End);
		cabLogoEnd.addChild(cabBgEnd);
		cabLogoEnd.addChild(cabCatchEnd);
		cabLogoEnd.addChild(cabAEnd);
		cabLogoEnd.addChild(cabBiteEnd);
		cabLogoEnd.addChild(cabCandy1End);
		cabLogoEnd.addChild(cabCandy2End);
		cabLogoEnd.addChild(cabCandy3End);
		ahLogoEnd.anchor.set(0.5);
		ahLogoEnd.animationSpeed = 0.3;
		ahLogoEnd.loop = false;
		if (screenSize === 'desktop') {
			//log('Position Desktop EndFrame');
			cabLogoEnd.scale.set(0.42);
			cabLogoEnd.position.set(stageW / 3 - cabLogoEnd.width / 2 - 10, 26);
			yourScoreText.position.set(stageW / 3 - yourScoreText.width / 2, 168);
			endSubhead.position.set(stageW / 3 - endSubhead.width / 2, 284);
			//endCtaHolder1.position.set(stageW / 3 , stageH / 2 + 180);
			//endCtaHolder2.position.set( (stageW / 2 +  stageW / 5) + endCtaHolder2.width / 2, stageH / 2 + 180);
            endCtaHolder1.position.set(stageW / 3 - endCtaHolder1.width / 2 - 40, stageH / 2 + 180);
			endCtaHolder2.position.set(stageW / 3 + endCtaHolder2.width / 2 + 40, stageH / 2 + 180);
			ahLogoEnd.position.set(stageW - ahLogoEnd.width / 2, 220);
		} else if ( screenSize === 'tablet' ) {
			//log('Position Tablet EndFrame');
			cabLogoEnd.scale.set(0.42);
			cabLogoEnd.position.set(stageW / 3 - cabLogoEnd.width / 2 - 10, stageH / 4 - cabLogoEnd.height / 2);
			yourScoreText.style.fontSize = '60px';
			yourScoreText.style.letterSpacing = 0.25;
			yourScoreText.position.set(stageW / 3 - yourScoreText.width / 2, stageH / 2 - yourScoreText.height );
			endSubhead.style.fontSize = '28px'
			endSubhead.position.set(stageW / 3 - endSubhead.width / 2, stageH / 2 + endSubhead.height );
			endCtaHolder1.scale.set(0.75);
			endCtaHolder2.scale.set(0.75);
			endCtaHolder1.position.set(stageW / 3 - endCtaHolder1.width / 2 - 10, stageH / 2 + 180);
			endCtaHolder2.position.set(stageW / 3 + endCtaHolder2.width / 2 + 10, stageH / 2 + 180);
			//endCtaHolder1.position.set(stageW / 3 , stageH / 2 + 180);
			//endCtaHolder2.position.set( (stageW / 2 +  stageW / 5) + endCtaHolder2.width / 2, stageH / 2 + 180);
			ahLogoEnd.scale.set(0.60);
			ahLogoEnd.position.set( stageW - ahLogoEnd.width / 2 + 40, stageH / 2 );
		} else if ( screenSize === 'mobile') {

          	if (screenHeight === 'small') {
              cabLogoEnd.scale.set(0.3);
              cabLogoEnd.position.set(stageW / 2 - cabLogoEnd.width / 2 - 20, 20);

              yourScoreText.style.fontSize = '40px';
              yourScoreText.style.letterSpacing = 0.25;
              yourScoreText.position.set(stageW / 2 - yourScoreText.width / 2, stageH / 2 - yourScoreText.height * 2 );

              endSubhead.style.fontSize = '28px'
              endSubhead.position.set(stageW / 2 - endSubhead.width / 2, stageH / 2 - endSubhead.height );

              endCtaHolder1.scale.set(0.50);
              endCtaHolder2.scale.set(0.50);

              endCtaHolder1.position.set(stageW / 2 - endCtaHolder1.width / 2 - 10, stageH / 2 + 60);
              endCtaHolder2.position.set(stageW / 2 + endCtaHolder2.width / 2 + 10, stageH / 2 + 60);

              ahLogoEnd.scale.set(0.40);
              ahLogoEnd.position.set( stageW / 2  , stageH - ahLogoEnd.height / 2 );

            } else {
              //log ('position mobile EndFrame');
              overlayEnd.width = stageW;
              overlayEnd.height = stageH;

              cabLogoEnd.scale.set(0.42);
              cabLogoEnd.position.set(stageW / 2 - cabLogoEnd.width / 2 - 20, 60);

              yourScoreText.style.fontSize = '40px';
              yourScoreText.style.letterSpacing = 0.25;
              yourScoreText.position.set(stageW / 2 - yourScoreText.width / 2, stageH / 2 - yourScoreText.height * 2 );

              endSubhead.style.fontSize = '28px'
              endSubhead.position.set(stageW / 2 - endSubhead.width / 2, stageH / 2 - endSubhead.height );

              endCtaHolder1.scale.set(0.55);
              endCtaHolder2.scale.set(0.55);

              endCtaHolder1.position.set(stageW / 2 - endCtaHolder1.width / 2 - 10, stageH / 2 + 60);
              endCtaHolder2.position.set(stageW / 2 + endCtaHolder2.width / 2 + 10, stageH / 2 + 60);

              ahLogoEnd.scale.set(0.60);
              ahLogoEnd.position.set( stageW / 2  , stageH - ahLogoEnd.height / 2 );
            }
		}
		endFrame.addChild(overlayEnd);
      	endFrame.addChild(ahLogoEnd);
		endFrame.addChild(cabLogoEnd);
		endFrame.addChild(endSubhead);
		endFrame.addChild(endCtaHolder1);
		endFrame.addChild(endCtaHolder2);

		endFrame.addChild(yourScoreText);
		buildStage();
	}
	function loadProgressHandler() {
		loadingText.setText( 'LOADING ' + Math.round(loader.progress) + '%');
	}
	function setUp() {
		//log('SETUP')
		t.to(loadingText, 0.3, {pixi:{alpha:0, y:'+=10'}, ease:Power3.easeOut, delay:0.5});
		// Filters
		mainBlur = new PIXI.filters.BlurFilter();
		mainBlur.blur = 10;
		mainBlur.quality = 4;
		//Textures
		logoTextures = [resources['images/cab/logo00.png'].texture, resources['images/cab/logo01.png'].texture, resources['images/cab/logo02.png'].texture, resources['images/cab/logo03.png'].texture, resources['images/cab/logo04.png'].texture, resources['images/cab/logo05.png'].texture, resources['images/cab/logo06.png'].texture, resources['images/cab/logo07.png'].texture, resources['images/cab/logo08.png'].texture, resources['images/cab/logo09.png'].texture, resources['images/cab/logo10.png'].texture, resources['images/cab/logo11.png'].texture, resources['images/cab/logo12.png'].texture ];
		headTextures = [resources['images/cab/ah_head_00.png'].texture, resources['images/cab/ah_head_01.png'].texture, resources['images/cab/ah_head_02.png'].texture, resources['images/cab/ah_head_02.png'].texture, resources['images/cab/ah_head_02.png'].texture, resources['images/cab/ah_head_01.png'].texture, resources['images/cab/ah_head_00.png'].texture];
		// Intro
		intro 			= new PIXI.Container({width: stageW, height: stageH});
		cabLogo 		= new PIXI.Container();
		ctaHolder 		= new PIXI.Container();
		ahLogo  		= new PIXI.extras.AnimatedSprite(logoTextures);
		cabCatch 		= new PIXI.Sprite(resources['images/cab/cab_catch.png'].texture);
		cabA 			= new PIXI.Sprite(resources['images/cab/cab_a.png'].texture);
		cabBite 		= new PIXI.Sprite(resources['images/cab/cab_bite.png'].texture);
		cabBg 			= new PIXI.Sprite(resources['images/cab/cab_bg.png'].texture);
		cabCandy1 		= new PIXI.Sprite(resources['images/cab/cab_candy1.png'].texture);
		cabCandy2 		= new PIXI.Sprite(resources['images/cab/cab_candy2.png'].texture);
		cabCandy3		= new PIXI.Sprite(resources['images/cab/cab_candy3.png'].texture);
		cabCandy4 		= new PIXI.Sprite(resources['images/cab/cab_candy4.png'].texture);
		ctaBg 			= new PIXI.Sprite(resources['images/cab/cta_bg.png'].texture);
		ctaText 		= new PIXI.Text(' Play now ');
		overlay 		= new PIXI.Sprite(resources['images/cab/overlayBg_@2x.png'].texture);
		instructionText = new PIXI.Text(' Keep clicking to catch \n all the Airheads! ');
		ctaText.style 			= Text.ctaTextStyle;
		instructionText.style 	= Text.interfaceTextStyle;

		// Main Game
		main 				= new PIXI.Container();
		interfaceHolder 	= new PIXI.Container();
		// - interface
      	// -- mob rotate alert

      	rotateAlert 		= new PIXI.Text(' Please Rotate Your Device ');
		rotateAlert.style 	= Text.interfaceTextStyle;


		// -- score
		scoreText 	= new PIXI.Text('00');
		scoreIcon 	= new PIXI.Sprite(resources['images/cab/candy_00.png'].texture);
		scoreText.style = Text.interfaceTextStyle;
		// -- Timer
		timerSectors 		= 30;
		timerSectorLength 	= ((Math.PI / 180) * 360/ timerSectors) * 15;
		beginAngle 			= 0 / timerSectors * Math.PI * 2;
		timerText			= new PIXI.Text('00');
		timerBg 			= new PIXI.Graphics();
		timerIcon 			= new PIXI.Graphics();
		timerText.style 	= Text.interfaceTextStyle;
		timerBg.lineStyle(6, 0xFFFFFF, 1);
		timerIcon.lineStyle(6, 0xFF3300, 1);
		timerBg.arc(stageW - 80, stageH - 40, 10, (Math.PI / 180) * 0 , (Math.PI / 180) * 360, false);
		timerIcon.arc(stageW - 80, stageH - 40, 10, (Math.PI / 180) * 0 , (Math.PI / 180) * 180, false);
		// -- Hearts
		heartHolder = new PIXI.Container();
		heart1 		= new PIXI.Sprite(resources['images/cab/heart.png'].texture);
		heart2 		= new PIXI.Sprite(resources['images/cab/heart.png'].texture);
		heart3 		= new PIXI.Sprite(resources['images/cab/heart.png'].texture);
		hitRect 	= new PIXI.Graphics();
		hitRect.beginFill(0xFF3300);
		hitRect.drawRect(0, 0, stageW, stageH);
		hitRect.endFill();
		hitRect.alpha = 0.0;
		hitRect.interactive = true;
		hitRect.buttonMode = true;
		hitRect.hitArea = new PIXI.Rectangle(0, 0, stageW, stageH);
		// - BackGround
		bgHolder 		= new PIXI.Container();
		sky_bg 			= new PIXI.extras.TilingSprite(resources['images/cab/sky.png'].texture, stageW, stageH);
		buildings 		= new PIXI.extras.TilingSprite(resources['images/cab/buildings.png'].texture, stageW, 490 / 2);
		trees 			= new PIXI.extras.TilingSprite(resources['images/cab/trees.png'].texture, stageW, 235 / 2);
		hedges 			= new PIXI.extras.TilingSprite(resources['images/cab/hedge.png'].texture, stageW, stageH);
		street 			= new PIXI.extras.TilingSprite(resources['images/cab/road.png'].texture, stageW, 278 / 2);
		lightpoles 		= new PIXI.extras.TilingSprite(resources['images/cab/lightpost_foreground.png'].texture, 3600 / 2, stageH);
		// - AIRHEAD
		airHead 		= new PIXI.Container();
		// -- Head
		head 			= new PIXI.extras.AnimatedSprite(headTextures);
		head.pivot.set(55, 178);
		head.position.set(0, 0);
		head.loop = false;
		head.animationSpeed = 0.6;
		// -- Body
		airBody 		= new PIXI.Container();
		torso 			= new PIXI.Sprite(resources['images/cab/ah_body.png'].texture);
		leftLeg 		= new PIXI.Sprite(resources['images/cab/ah_leftLeg.png'].texture);
		rightLeg 		= new PIXI.Sprite(resources['images/cab/ah_rightLeg.png'].texture);
		rightArm 		= new PIXI.Sprite(resources['images/cab/ah_rightArm.png'].texture);
		leftArm 		= new PIXI.Sprite(resources['images/cab/ah_leftArm.png'].texture);
		ashleigh	    = new PIXI.Sprite(resources['images/cab/ashleigh.png'].texture);
		rightArm.pivot.set(6, 4);
		rightArm.position.set(43-55+6, 181-178+4);
		rightLeg.pivot.set(22, 0);
		rightLeg.position.set(27-55+22, 210-178+0);
		leftLeg.pivot.set(8, 4);
		leftLeg.position.set(48-55+8, 207-178+4);
		torso.pivot.set(16, 6);
		torso.position.set(40-55+16, 175-178+6);
		leftArm.pivot.set(0, 6);
		leftArm.position.set(62-55+0, 180-178+6);
		ashleigh.pivot.set(0, 75);
		ashleigh.anchor.set(0.5);
      	ashleigh.position.set(0, 80);
		// - Candy
		candyHolder 	= new PIXI.Container();
		candy0 			= new PIXI.Sprite(resources['images/cab/candy_00.png'].texture);
		candy1 			= new PIXI.Sprite(resources['images/cab/candy_01.png'].texture);
		candy2 			= new PIXI.Sprite(resources['images/cab/candy_02.png'].texture);
		candy3 			= new PIXI.Sprite(resources['images/cab/candy_03.png'].texture);
		candy4 			= new PIXI.Sprite(resources['images/cab/candy_04.png'].texture);
		candy5 			= new PIXI.Sprite(resources['images/cab/candy_05.png'].texture);
		candy6 			= new PIXI.Sprite(resources['images/cab/candy_06.png'].texture);
		// Endframe
		endFrame 		= new PIXI.Container();
		endCtaHolder1	= new PIXI.Container();
		endCtaHolder2	= new PIXI.Container();
		cabLogoEnd 		= new PIXI.Container();
		yourScoreText 	= new PIXI.Text('Your score: 0 ');
		endSubhead 		= new PIXI.Text(' Great job! ' );
		cabCatchEnd  	= new PIXI.Sprite(resources['images/cab/cab_catch.png'].texture);
		cabAEnd 	 	= new PIXI.Sprite(resources['images/cab/cab_a.png'].texture);
		cabBiteEnd   	= new PIXI.Sprite(resources['images/cab/cab_bite.png'].texture);
		cabBgEnd 	 	= new PIXI.Sprite(resources['images/cab/cab_bg.png'].texture);
		cabCandy1End 	= new PIXI.Sprite(resources['images/cab/cab_candy1.png'].texture);
		cabCandy2End 	= new PIXI.Sprite(resources['images/cab/cab_candy2.png'].texture);
		cabCandy3End	= new PIXI.Sprite(resources['images/cab/cab_candy3.png'].texture);
		cabCandy4End 	= new PIXI.Sprite(resources['images/cab/cab_candy4.png'].texture);
		endCtaBg1 		= new PIXI.Sprite(resources['images/cab/cta_bg.png'].texture);
		endCtaBg2 		= new PIXI.Sprite(resources['images/cab/cta_bg.png'].texture);
		endCtaText1 	= new PIXI.Text(' Play again ');
		endCtaText2 	= new PIXI.Text(' Find a pack ');
		ahLogoEnd 		= new PIXI.extras.AnimatedSprite(logoTextures);
		overlayEnd 		= new PIXI.Sprite(resources['images/cab/endOverlay.png'].texture);
		yourScoreText.style 	= Text.yourScoreTextStyle;
		endSubhead.style 		= Text.subHeadTextStyle;
		endCtaText1.style 		= Text.ctaTextStyle;
		endCtaText2.style 		= Text.ctaTextStyle;
		setPosition();
	}
	loader.add([
		'images/cab/buildings.png', 'images/cab/hedge.png', 'images/cab/lightpost_foreground.png', 'images/cab/road.png', 'images/cab/sky.png', 'images/cab/trees.png', 'images/cab/overlayBg_@2x.png', 'images/cab/ah_body.png', 'images/cab/ah_head_00.png', 'images/cab/ah_head_01.png', 'images/cab/ah_head_02.png', 'images/cab/ah_leftArm.png', 'images/cab/ah_leftLeg.png', 'images/cab/ah_pelvis.png', 'images/cab/ah_rightArm.png', 'images/cab/ah_rightLeg.png', 'images/cab/candy_00.png', 'images/cab/candy_01.png', 'images/cab/candy_02.png', 'images/cab/candy_03.png', 'images/cab/candy_04.png', 'images/cab/candy_05.png', 'images/cab/candy_06.png', 'images/cab/heart.png', 'images/cab/cta_bg.png', 'images/cab/logo00.png', 'images/cab/logo01.png', 'images/cab/logo02.png', 'images/cab/logo03.png', 'images/cab/logo04.png', 'images/cab/logo05.png', 'images/cab/logo06.png', 'images/cab/logo07.png', 'images/cab/logo08.png', 'images/cab/logo09.png', 'images/cab/logo10.png', 'images/cab/logo11.png', 'images/cab/logo12.png', 'images/cab/cab_catch.png', 'images/cab/cab_a.png', 'images/cab/cab_bite.png', 'images/cab/cab_bg.png', 'images/cab/cab_candy1.png', 'images/cab/cab_candy2.png', 'images/cab/cab_candy3.png', 'images/cab/cab_candy4.png', 'images/cab/endOverlay.png', 'images/cab/ashleigh.png'
	]).on('progress', loadProgressHandler).load(setUp);

  ticker.add( function(delta){
		handleTimer(delta);
		candyScroll(delta);
    	handleAirHead(delta);
   		bgScroll(delta);
	});

  //Just for the Intro
  function candyIntro(delta) {
		for ( var i = 0; i < candies.length; i++ ) {
			candies[i].x -= candySpeed;
			if (candies[i].x < 0 - candies[i].width) {
				candies[i].x = stageW + candies[i].width;
				candies[i].y = Utils.random(150, stageH - 100);
			}
		}
	}

	var speed = 20;
	var angle = 45;
	var dx, dy, ax, ay;
	var vx = 0;
	var vy = 0;
	var zx = 0, zy = 0;
	var easing = 1.0;
	var spring = 0.04;
	var friction = 0.85;
	var gravity = 2;
	var bodySpring = 2;
	var bodyFriction = 0.95;
	var flopRate =  2.5;  //4.625;
	var bodyFlopRate = 1.5;

  	//Just for the Inro
	introTicker.add( function(delta){
		//mousePos = Utils.getMousePosition();
		/*dx = (mousePos.x - airHead.x) * easing;
		dy = ((mousePos.y - 120 )- (airHead.y)) * easing;
		ax = dx * spring;
		ay = dy * spring;
		vx += ax;
		vy += ay;
		vx *= friction;
		vy *= friction;

      	if (screenSize === 'desktop') {
			airHead.y += vy + 30;

			//head.rotation = (-dx / flopRate * (Math.PI / 180));
			rightLeg.rotation = (dx / 1.5 * (Math.PI / 180));
			leftLeg.rotation = (dx / 2.5 * (Math.PI / 180));
			leftArm.rotation = (dx / flopRate * (Math.PI / 180));
			rightArm.rotation = (dx / flopRate * (Math.PI / 180));
			airBody.rotation = (dx / 20.5 * (Math.PI / 180));

		} else {
          airHead.y = -200;
        }

		gx = (airHead.x - head.x) * easing;
		gy = (airHead.y - head.y) * easing;
		jx = gx * bodySpring;
		jy = gy * bodySpring;
		zx += jx;
		zy += jy;
		zx *= bodyFriction;
		zy *= bodyFriction;*/
		bgScroll();
		candyIntro(delta);
	});


  	/*  = = = = = = = = = = = =

    All the SparkFlow stuff

    = = = = = = = = = = = =  */


	if  (isMobile === true &&  Math.abs(window.orientation) === 90 ) {
		//alert('landscape view');
      	//t.set(rotateAlertOverlay, {autoAlpha:1});
    }


  	var adClose = false;
  	var n_width, n_height, n_orientation;
  	var resized = false;
  	var resizeTimer;
    var orientation = Math.abs(window.orientation);


  	function resetResizeTimer() {
      setTimeout( function() {
          clearTimeout(resizeTimer);
          resized = false;
      }, 1000);
    }

    $( window ).resize(function() {

		$(gameContainer).css({width:ghWidth});
		$(gameHolderShadow).css({width:ghsWidth});

	});



/*

	$( window ).resize(function() {



		//$(gameHolder).css({width:ghWidth});
		//$(gameHolderShadow).css({width:ghsWidth});

		resizeTimer = setTimeout( function() {

	        if (!resized) {
				resized = true;

				resetResizeTimer();

				ghWidth = $(gameContainer).width();
				ghsWidth = $(gameHolderShadow).width();

				$(game).css({width:ghWidth});


				if (_width >= 1280 ) {
					screenSize = 'desktop';
					app.renderer.view.width = ghWidth;
					app.renderer.view.height = 500;

					app.renderer.view.style.width = ghWidth;
					app.renderer.view.style.height = 500;
					stageW = ghWidth;
					stageH = 500;

					} else if (_width < 1280 && _width >= 768 ) {

						screenSize = 'tablet';

						app.renderer.view.width = ghWidth;
						app.renderer.view.height = 500;

						app.renderer.view.style.width = ghWidth;
						app.renderer.view.style.height = 500;
						stageW = ghWidth;
						stageH = 500;

					} else if ( _width < 768 ) {
						if (_height > 736 && isMobile === false) {
							screenSize = 'tablet';
					} else {
						screenSize = 'mobile';
						if (_height < 500) {
							screenHeight = 'small';
						} else {
							screenHeight = 'normal';
						}
					}
				}
				setUp();
	        }
        }, 500);

	});

/*

	$( window ).resize(function() {

		resizeTimer = setTimeout( function() {

			//$(gameHolder).css({width:ghWidth});
			$(gameHolderShadow).css({width:ghsWidth});

			if (_width >= 1280 ) {
				screenSize = 'desktop';
				//$(game).css({width:ghWidth, height:500});
				app.renderer.view.width = ghWidth;
				app.renderer.view.height = 500;

				app.renderer.view.style.width = ghWidth;
				app.renderer.view.style.height = 500;
				} else if (_width < 1280 && _width >= 768 ) {
					screenSize = 'tablet';
					//$(game).css({width:'100%', height:500});
					app.renderer.view.width = ghWidth;
					app.renderer.view.height = 500;

					app.renderer.view.style.width = ghWidth;
					app.renderer.view.style.height = 500;
				} else if ( _width < 768 ) {
					if (_height > 736 && isMobile === false) {
						screenSize = 'tablet';
						//$(game).css({width:'100%', height:500});
				} else {
					screenSize = 'mobile';
					//$(game).css({width:'100%', height:'100%'});
					if (_height < 500) {
						screenHeight = 'small';
					} else {
						screenHeight = 'normal';
					}
				}
			}



			setUp();

		}, 500);

	});

	*/

	/*
	$( window ).resize(function() {

		$(gameHolder).css({width:ghWidth});
		$(gameHolderShadow).css({width:ghsWidth});

	});
	*/


  	window.addEventListener("orientationchange", function() {
      	n_orientation = Math.abs(window.orientation);
      	if  (isMobile === true &&  Math.abs(window.orientation) === 90 ) {
			//alert('landscape view');
      		//t.set(rotateAlertOverlay, {autoAlpha:1});
        	if (playing === true) {
         		ticker.stop();
              	Howler.volume(0.0);
        	}
    	}
      	if (isMobile === true && window.orientation === 0) {
          //t.set(rotateAlertOverlay, {autoAlpha:0});
          if (playing === true) {
			setTimeout( function() {
              ticker.start();
              Howler.volume(0.5);
              bgSound.volume(0.4);
            }, 500);
          }
        }
    });
}






























/**/
