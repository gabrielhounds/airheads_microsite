//initLoader() closeBtn t. mraid volume TweenMax pixi your score ticker letterSpacing head handleScore() enemy2 gamePlaying ticker startGame delta is close ticker enemy enemies setupReplay candy1 enemy2 enemies setupReplay screenSize global getMousePosition .add stageHit alert candies buildings introLogoC instructions enemy2 enemy3B.png enemy1 enemy2 enemy scale 1.25 .click startGame ad.add .interactive t. default rotateAlertOverlay alert autoPreventDefault .click  android

//        rotateAlertOverlay = $('<div id="rotateAlert"><p></p></div>').prependTo(game); ie  console.log  .click tap

var isMobile = (function () {
	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
})();

$(document).ready(function(){
    //sparkflowSetup();
	init();
});




function init() {


	var log = console.log;
	// log('init');

	// IE polyfill
  	Number.isInteger = Number.isInteger || function(value) {
    return typeof value === "number" &&
           isFinite(value) &&
           Math.floor(value) === value;
	};
	var testTime = 0;

	var Utils = {};
	var Game = {}; //?
	var Sounds = {};
	var Sprites = {};//?
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
			letterSpacing: 1,
			fill: '0xFFFFFF',
		});
		var ctaTextStyle = new PIXI.TextStyle({
			align : 'center',
			fontFamily: 'uniform_roundedbold',
			fontSize: '28px',
			letterSpacing: 1,
			fill: '0xFFFFFF',
		});
		var subHeadTextStyle = new PIXI.TextStyle({
			align : 'center',
			fontSize: '36px',
			//fontFamily:'uniform_roundedblack',
			fontFamily:'uniform_roundedbold',
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

  window.addEventListener('touchstart', function() {
    // alert("Touched")
    touchDevice = true;
  });



    var touchDevice = false;
	//Interface
	var loadingText, scoreText, timerText, scoreIcon, timerIcon, timerBg;
	var interfaceHolder, heartHolder, timerHolder, scoreHolder;
	var timerSectors, timerSectorLength, beginAngle;
	var heart1, heart2, heart3;
    var rotateAlert;
    var stageHit;
	// NEW
	var bgHoler, sky, buildings, street, cloudsFront, cloudsMid, cloudsBack, trees, bgNebula, starsFront, starsBack;

	var airHead, airBody, leftLeg, rightLeg, leftArm, rightArm, headTextures, head, braid, torso, lowerLeftLeg, lowerRightLeg, upperLeftLeg, upperRightLeg, lowerRightArm, lowerLeftArm, upperRightArm, upperLeftArm, airHeadMouthCollision;

var timePlayed = 0;

var gamePlaying = false;
var gamePlayTimerIncrease = false;
	// INTRO
	var ctaBg, ctaText, ctaHolder, overlay, ahLogo, logoTextures, instructionText, cabLogo, cabCatch, cabA, cabBite, cabBg, cabCandy1, cabCandy2, cabCandy3, cabCandy4, intro;
	//MAIN
	var main, bgHolder, candyHolder, fgHolder, airheadHolder, hitRect;
	var sky_bg, buildings, trees, hedges, street, lightpoles;
	var candy0, candy1, candy2, candy3, candy4, candy5, candy6, candy7;
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
			hit = false;
			ab = r1.getBounds();
			bb = r2.getBounds();
			if (  ab.x + (ab.width / 1.5) > bb.x && ab.x < bb.x + bb.width && ab.y + (ab.height / 1.5)> bb.y && ab.y < bb.y + bb.height) {
				hit = true;
			} else {
				hit = false;
			}
			return hit;
		}

		var enemyTest = function(r1, r2) {
			hit = false;
			ab = r1.getBounds();
			bb = r2.getBounds();
			if (  ab.x + (ab.width / 1.5) > bb.x && ab.x < bb.x + bb.width && ab.y + (ab.height / 1.5)> bb.y && ab.y < bb.y + bb.height) {
				hit = true;
			} else {
				hit = false;
			}
			return hit;
		}
		return {
			random : random,
			hitTest : hitTest,
			enemyTest : enemyTest,
			getMousePosition : getMousePosition
		}

}());

	ticker.add( function(delta){
	//	handleTimer(delta);
	//	handleObjects(delta);
    //	handleBg(delta);
	//	handleAirHead(delta);
	});

	initStage();
	initLoader();
	//  setUp() called after initLoader is done
	//	setPosition() called in setup;
	//	buildStage();
	//	setUpGame();


	function initStage() {
	//	console.log("initStage()")

        var gameHolder = $('.gameHolder');
		var gameHolderShadow = $('.gameHolderShadow');

		var gameContainer = $('#gameContainer');


		var ghWidth = $(gameContainer).width();
		var ghsWidth = $(gameHolderShadow).width();

		var game = $('<div>', {id:'game'}).appendTo(gameContainer);

		if (_width >= 1280 ) {
			screenSize = 'desktop';
			$(game).css({width:ghWidth, height:500});
			app = new Application({width : ghWidth, height : 500, legacy : true});
			log(screenSize);
		} else if (_width < 1280 && _width >= 768 ) {
			screenSize = 'tablet';
			$(game).css({width:'100%', height:500});
			app = new Application({width : ghWidth, height : 500});
			log(screenSize);
		} else if ( _width < 768 ) {

		if(isMobile === true) {
			screenSize = 'mobile';
			$(game).css({width:'100%', height:'100%'});
			$(gameHolder).css({width:'100%', height:'100%', top:0, left:0});
			$(gameContainer).css({width:'100%', height:'100%', top:0, left:0, transform:'translate(0)'});
			app = new Application({width : _width, height : _height, forceCanvas : true});

		if (_height < 600) {
			screenHeight = 'small';
		} else {
			screenHeight = 'normal';
		}
		}
		if (isMobile === false && _height > 608 ) {
			screenSize = 'tablet';
			$(game).css({width:'100%', height:500});
			app = new Application({width : ghWidth, height : 500});
		}
		}


		app.renderer.backgroundColor = 0x0040A3;

        var ua = navigator.userAgent.toLowerCase();
        var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
        if(isAndroid) {
          // Do something!
          // Redirect to Android-site?
          app.renderer.plugins.interaction.autoPreventDefault=false;
          app.renderer.view.style['touch-action'] = 'auto';
        }

		$(app.view).appendTo(game);
		stageW = app.renderer.view.width;
		stageH = app.renderer.view.height;
		loadingText = new PIXI.Text('LOADING      ');
		loadingText.style = {fill: 'WHITE', font:'20px uniform_roundedbold, Arial'};
		loadingText.position.set(stageW / 2 - loadingText.width / 2, stageH / 2);
		app.stage.addChild(loadingText);
	}

	function initLoader() {
		// console.log("initLoader()")
		loader.add([
			'bg_sky_@2x.jpg',
			'bg_nebula.png',
			'bg_stars_back.png',
			'bg_stars_front.png',
			'bg_buildings.png',
			'bg_clouds_front.png',
			'bg_clouds_mid.png',
			'bg_clouds_back.png',
			'bg_street.png',
			'bg_trees.png',

			'ah_head_00.png',
			'ah_head_01.png',

			'ah_lower_left_arm.png',
			'ah_lower_left_leg.png',
			'ah_lower_right_arm.png',
			'ah_lower_right_leg.png',
			'ah_braid.png',
			'ah_torso.png',
			'ah_upper_left_arm.png',
			'ah_upper_left_leg.png',
			'ah_upper_right_arm.png',
			'ah_upper_right_leg.png',

			'candy_00.png',
			'candy_01.png',
			'candy_02.png',
			'candy_03.png',
			'candy_04.png',
			'candy_05.png',
			'candy_06.png',
			'candy_07.png',
			'enemy1.png',
			'enemy2.png',
			'enemy3B.png',
			'enemy4.png',
			'heart.png',
			'candy_scoreIcon.png',

			'cta_bg.png',
			'introScreen.jpg',
			'introCandy.png',
			'introLogoC.png',
			'introBG.jpg',
			'endframeScreen.jpg',
			'introSideBG.png',
			'overlayBg_@2x.png',
			'introAirHeadLogo.png',
			'introInstructionsB.png',
			'introInstructionsBMobile.png',

			'endframeBackground.jpg',


		]).on('progress', loadProgressHandler).load(setUp); // setup()
	}

	function setUp() {
		// console.log("setUp()")
		stageHit = new PIXI.Graphics();
		stageHit.beginFill(0xFF3300);
		stageHit.drawRect(0, 0, stageW, stageH);
		stageHit.endFill();
		stageHit.alpha = 0.0;
		stageHit.interactive = true;
		stageHit.buttonMode = true;
		stageHit.hitArea = new PIXI.Rectangle(0, 0, stageHit.width, stageHit.height);

		// -----------
		//  INTRO
		// -----------

		intro 			= new PIXI.Container({width: stageW, height: stageH});

		ctaHolder 		= new PIXI.Container();
		ctaBg 			= new PIXI.Sprite(resources['cta_bg.png'].texture);
		ctaText 		= new PIXI.Text(' Play now ');
		ctaText.style = Text.ctaTextStyle;



		introBG 		= new PIXI.Sprite(resources['introBG.jpg'].texture);
		introCandy 		= new PIXI.Sprite(resources['introCandy.png'].texture);
		introLogo 		= new PIXI.Sprite(resources['introLogoC.png'].texture);

		//overlay = new PIXI.Sprite(resources['overlayBg_@2X.png'].texture);

		introSideBG = new PIXI.Sprite(resources['overlayBg_@2x.png'].texture);

		//introSideBG 		= new PIXI.Sprite(resources['introSideBG.png'].texture);


		introAirHeadLogo 		= new PIXI.Sprite(resources['introAirHeadLogo.png'].texture);

		instructionText = new PIXI.Text(" Drag your mouse.\nCatch some candy.\nIt's that easy. ");
		instructionText.style = Text.interfaceTextStyle;

        /*if(isMobile) {
          introInstructions 		= new PIXI.Sprite(resources['introInstructionsBMobile.png'].texture);
        } else {
          introInstructions 		= new PIXI.Sprite(resources['introInstructionsB.png'].texture);
        }*/

        introClicked 		= new PIXI.Sprite();
        introClicked.width = stageW;
        introClicked.height = stageH;

        introClicked.interactive = true;
        introClicked.buttonMode = true;
        introClicked.on('tap', function(e){
          $('#bg_clickthrough').click();
          e.preventDefault();

        });

        introClicked.on('click', function(e){
          $('#bg_clickthrough').click();
        });


      	if(screenSize == "desktop") {
          introBG.anchor.set(0.5);
          introBG.position.set(stageW / 2, stageH / 2);

          introCandy.anchor.set(0.5);
          introCandy.position.set(450,225);


          introLogo.anchor.set(0.5);
          t.to(introLogo, 0, {pixi:{scale:.8}});
		  t.to(introCandy, 0, {pixi:{scale:.8}});

          introLogo.position.set(450,225);
          //introSideBG.anchor.set(0.5);
          introSideBG.position.set(860,0);

          introAirHeadLogo.anchor.set(0.5);
          introAirHeadLogo.position.set(1080,170);

          //introInstructions.anchor.set(0.5);
          //introInstructions.position.set(1080,390);

          instructionText.position.set((introBG.x + introBG.width / 2) - instructionText.width / 2, stageH - instructionText.height - 60);

          instructionText.alpha = 0;


          ctaHolder.position.set(440, 420);

          //introInstructions.alpha = 0;

		  ctaHolder.position.set(stageW / 2, 420);
		  introSideBG.alpha = 0;
		  introAirHeadLogo.alpha = 0;

		  introLogo.position.set(650, 215);
		  introCandy.position.set(650, 215);



        } else if (screenSize == "tablet") {

          t.to(introCandy, 0, {pixi:{scale:.65}});
          introCandy.anchor.set(0.5);
          introCandy.position.set(255,stageH/2);

          t.to(introLogo, 0, {pixi:{scale:.6}});
          introLogo.anchor.set(0.5);
          introLogo.position.set(105 + introLogo.width*.5, stageH/2);

          introSideBG.anchor.set(0.0);
          introSideBG.position.set(500,0);


         // introAirHeadLogo.scale = .5;
          t.to(introAirHeadLogo, 0, {pixi:{scale:'.63'},ease:Elastic.easeOut});
          introAirHeadLogo.anchor.set(0.5);
          introAirHeadLogo.position.set(645, 215);

          //introInstructions.anchor.set(0.5);
          //introInstructions.position.set(650,350);
          //t.to(introInstructions, 0, {pixi:{scale:.65, }});

          instructionText.style.fontSize = '20px';
		  instructionText.style.letterSpacing = 1;
		  instructionText.position.set( ((stageW - introSideBG.x) / 2 ) + introSideBG.x - instructionText.width / 2, stageH - instructionText.height - 60);


          ctaHolder.position.set(240, 380);
          t.to(ctaHolder, 0, {pixi:{scale:.65, }});

        } else if (screenSize == "mobile") {

		  instructionText.setText(" Drag your finger.\nCatch some candy.\nIt's that easy. ")


          t.to(introCandy, 0, {pixi:{scale:.45}});

          introCandy.anchor.set(0.5);
          introCandy.position.set(stageW/2,stageH/4 -40);

          t.to(introLogo, 0, {pixi:{scale:.5}});

          introLogo.anchor.set(0.5);
          introLogo.position.set(stageW/2,stageH/4 - 40);


          //t.to(introSideBG, 0, {pixi:{rotation:90}});
          //introSideBG.anchor.set(0,0);
          //introSideBG.position.set(stageW, stageH/2 + 25);

          introSideBG.anchor.set(0.5);
		  introSideBG.width = stageW;
		  introSideBG.rotation = (Math.PI / 180) * 90;
		  introSideBG.position.set(stageW - introSideBG.width / 2, stageH - 80);



		  //introSideBG.anchor.set(0,0);
          //introSideBG.rotation = (Math.PI / 180) * 90;
		  //introSideBG.width = stageW;
		  //introSideBG.position.set(stageW - introSideBG.width / 2, stageH - 80);
		  //introSideBG.scale.x = introSideBG.scale.y = stageW / 1000;


          //t.to(introInstructions, 0, {pixi:{scale:.65}});
          //introInstructions.anchor.set(0.5);
          //introInstructions.position.set(stageW/2,stageH-introInstructions.height/2 - 10);

          instructionText.style.fontSize = '18px';
		  instructionText.style.letterSpacing = 1;
		  instructionText.style.lineHeight = 20;
		  instructionText.position.set( stageW / 2 - instructionText.width / 2, stageH - instructionText.height - 20);


          //t.to(introAirHeadLogo, 0, {pixi:{scale:.55}});

          introAirHeadLogo.scale.set(0.535);
          introAirHeadLogo.anchor.set(0.5);
          //introAirHeadLogo.position.set(stageW/2,stageH - introAirHeadLogo.height);
		  introAirHeadLogo.position.set( stageW / 2 - 3, stageH / 2 + introAirHeadLogo.height / 2 + 40);


          //t.to(ctaHolder, 0, {pixi:{scale:.65, }});
          //ctaHolder.position.set(stageW/2, stageH/2 - 20);

          ctaHolder.scale.set(0.8);
		  ctaHolder.position.set( stageW / 2, stageH / 2 - ctaHolder.height / 2 - 30);
		  ctaText.position.set(0, -2);
        }



		ctaBg.anchor.set(0.5);
		ctaText.anchor.set(0.5);

		//ctaText.position.set(ctaBg.width / 2, ctaBg.height / 2);
		intro.addChild(introBG);
		intro.addChild(introClicked);
		intro.addChild(introSideBG);

		intro.addChild(introCandy);
		intro.addChild(introLogo);
		intro.addChild(ctaHolder);
		intro.addChild(introAirHeadLogo);
		//intro.addChild(introInstructions);
		intro.addChild(instructionText);

        ctaHolder.addChild(ctaBg);
		ctaHolder.addChild(ctaText);
		ctaHolder.interactive = true;
		ctaHolder.buttonMode = true;

        introAirHeadLogo.interactive = true;
        introAirHeadLogo.buttonMode = true;
        introAirHeadLogo.on('tap', function(e){
          $('#airheads_logo_clickthrough').click();
          e.preventDefault();
        });

        introAirHeadLogo.on('click', function(e){
          $('#airheads_logo_clickthrough').click();
        });

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

      if(screenSize == "desktop") {
        t.from(ctaHolder, .5, {pixi:{y:'600'},ease: Power2.easeOut,delay:.5});
        t.from(introLogo, 1.5, {pixi:{scale:'0'},ease:Elastic.easeOut, delay:.25});
        t.from(introCandy, 1.5, {pixi:{scale:'0'},ease:Elastic.easeOut});
        t.from(introSideBG, .5, {pixi:{y:'600'},ease: Power2.easeOut,delay:1});
        t.from(introAirHeadLogo, 1.5, {pixi:{scale:'0'},ease:Elastic.easeOut, delay:1.25});
        //t.from(introInstructions, 1, {pixi:{y:'600'},ease: Power2.easeOut, delay:1.5});
		t.from(instructionText, 	0.4, {pixi:{x:'+=300', alpha:0.0}, ease:Power3.easeOut})

      } else if (screenSize == "tablet") {
        t.from(ctaHolder, .5, {pixi:{y:'600'},ease: Power2.easeOut,delay:.5});
        t.from(introLogo, 1.5, {pixi:{scale:'0'},ease:Elastic.easeOut, delay:.25});
        t.from(introCandy, 1.5, {pixi:{scale:'0'},ease:Elastic.easeOut});
        t.from(introSideBG, .5, {pixi:{y:'600'},ease: Power2.easeOut,delay:1});
        // t.to(introAirHeadLogo, 0, {pixi:{scale:'.75'},ease:Elastic.easeOut});
        t.from(introAirHeadLogo, 1.5, {pixi:{scale:'0'},ease:Elastic.easeOut, delay:1.25});
        //t.from(introInstructions, 1, {pixi:{y:'600'},ease: Power2.easeOut, delay:1.5});
        t.from(instructionText, 	0.4, {pixi:{x:'+=300', alpha:0.0}, ease:Power3.easeOut})

      }


      	ctaHolder.on('tap', startGame);
      	ctaHolder.on('click', startGame);

      setInterval(function(){
        // console.log("timePlayed is " + timePlayed);
       if(gamePlayTimerIncrease == true) {
	     timePlayed++;
       }
      }, 1000);


      	function startGame() {
            timePlayed = 0
            gamePlayTimerIncrease = true;
			gamePlaying = true;
			ticker.add( function(delta){
				handleTimer(delta);
				handleObjects(delta);
		    	handleBg(delta);
                handleAirHead(delta);
			});
 //           t.to(enemy, 0, {pixi:{rotation:'0'}});






            t.to(enemy, .5, {pixi:{rotation:'15'}, yoyo:true, repeat:-1,ease:Power1.easeInOut});
           t.to(enemy4, .2, {pixi:{rotation:'5'}, yoyo:true, repeat:-1,ease:Power1.easeInOut});
          //  t.to(enemy4, .25, {pixi:{y:'-5'}, yoyo:true, repeat:-1,ease:Power1.easeInOut});
//enemies

          t.to(intro, 1, {pixi:{alpha:0.0}, ease:Power3.easeOut})
			ctaHolder.interactive = false;
			ctaHolder.buttonMode = false;
			introClicked.interactive = false;
			introClicked.buttonMode = false;
			introAirHeadLogo.interactive = false;
			introAirHeadLogo.buttonMode = false;
			bgSound.play();

           // ad.customEvent('Game Started', true);

      	}








// endframe stuff

		endframe 		= new PIXI.Container({width: stageW, height: stageH});
		endframe.visible = false;

		endframeBG 		= new PIXI.Sprite(resources['endframeBackground.jpg'].texture);
		endframeBG.anchor.set(0.5);
		endframeBG.position.set(stageW / 2, stageH / 2);

		endframeLogo 		= new PIXI.Sprite(resources['introLogoC.png'].texture);
		endframeLogo.anchor.set(0.5);
		endframeLogo.position.set(stageW / 3, stageH / 4.5);
        t.set(endframeLogo, {pixi:{scale:.5}})

		endframeCandy 		= new PIXI.Sprite(resources['introCandy.png'].texture);
		endframeCandy.anchor.set(0.5);
		endframeCandy.position.set(stageW / 3, stageH / 4.5);
        t.set(endframeCandy, {pixi:{scale:.5}})



		ctaHolderEndframe1 		= new PIXI.Container();
		ctaBgEndFrame1 			= new PIXI.Sprite(resources['cta_bg.png'].texture);
		ctaBgEndFrame1.anchor.set(0.5);
		ctaEndframe1Text 		= new PIXI.Text(' Play again ');
		ctaEndframe1Text.style = Text.ctaTextStyle;
		ctaEndframe1Text.anchor.set(0.5);

        endframeAirheadLogo 		= new PIXI.Sprite(resources['introAirHeadLogo.png'].texture);
		endframeAirheadLogo.anchor.set(0.5);
		endframeAirheadLogo.position.set(1050, stageH / 2);
        t.set(endframeAirheadLogo, {pixi:{scale:1}})

        endframeAirheadLogo.interactive = true;
        endframeAirheadLogo.buttonMode = true;
        endframeAirheadLogo.on('tap', function(e){
          $('#airheads_logo_clickthrough').click();
          e.preventDefault();
        });
        endframeAirheadLogo.on('click', function(e){
          $('#airheads_logo_clickthrough').click();
        });

        endframeClicked 		= new PIXI.Sprite();
        endframeClicked.width = stageW;
        endframeClicked.height = stageH;

        endframeClicked.interactive = true;
        endframeClicked.buttonMode = true;
        endframeClicked.on('tap', function(e){
          $('#bg_clickthrough').click();
          e.preventDefault();
        });
        endframeClicked.on('click', function(e){
          $('#bg_clickthrough').click();
        });

		ctaHolderEndframe1.addChild(ctaBgEndFrame1);
		ctaHolderEndframe1.addChild(ctaEndframe1Text);
		ctaHolderEndframe1.interactive = true;
		ctaHolderEndframe1.buttonMode = true;

		ctaHolderEndframe1.on('mouseover', function(e){
			t.to(ctaBgEndFrame1, 0.6, {pixi:{scale:1.2}, ease:Elastic.easeOut});
			t.to(ctaEndframe1Text, 0.2, {pixi:{y:'+=10', alpha:0}, ease:Power3.easeOut});
			t.set(ctaEndframe1Text, {pixi:{y:'-=30'}, delay:0.2})
			t.to(ctaEndframe1Text, 0.6, {pixi:{y:'+=20', alpha:1, scale:1.0}, ease:Elastic.easeOut, delay:0.21});
            t.to(ctaEndframe1Text, 0.1, {pixi:{y:0}, delay:0.25});
		}).on('mouseout', function(e){
			t.to(ctaBgEndFrame1, 0.6, {pixi:{scale:1.0}, ease:Elastic.easeOut});
			t.to(ctaEndframe1Text, 0.6, {pixi:{scale:1.0, y:0}, ease:Elastic.easeOut});
		});

      	ctaHolderEndframe1.on('tap', setUpReplay);
      	ctaHolderEndframe1.on('click', setUpReplay);

		endframe.addChild(endframeBG);
		endframe.addChild(endframeClicked);
		endframe.addChild(ctaHolderEndframe1);
		endframe.addChild(endframeCandy);
		endframe.addChild(endframeLogo);
		endframe.addChild(endframeAirheadLogo);



		ctaHolderEndframe2 		= new PIXI.Container();
		ctaBgEndFrame2 			= new PIXI.Sprite(resources['cta_bg.png'].texture);

		ctaBgEndFrame2.anchor.set(0.5);
		ctaEndframe2Text 		= new PIXI.Text(' Find a pack ');

		ctaEndframe2Text.style = Text.ctaTextStyle;
		ctaEndframe2Text.anchor.set(0.5);

		//ctaHolderEndframe1.position.set(stageW/5,    stageH - (ctaHolderEndframe1.height) );
		//ctaHolderEndframe2.position.set(stageW/2.15, stageH - (ctaHolderEndframe1.height) );

		ctaHolderEndframe2.addChild(ctaBgEndFrame2);
		ctaHolderEndframe2.addChild(ctaEndframe2Text);
		ctaHolderEndframe2.interactive = true;
		ctaHolderEndframe2.buttonMode = true;

		ctaHolderEndframe2.on('mouseover', function(e){
			t.to(ctaBgEndFrame2, 0.6, {pixi:{scale:1.2}, ease:Elastic.easeOut});
			t.to(ctaEndframe2Text, 0.2, {pixi:{y:'+=10', alpha:0}, ease:Power3.easeOut});
			t.set(ctaEndframe2Text, {pixi:{y:'-=30'}, delay:0.2})
			t.to(ctaEndframe2Text, 0.6, {pixi:{y:'+=20', alpha:1, scale:1.0}, ease:Elastic.easeOut, delay:0.21});
            t.to(ctaEndframe2Text, 0.1, {pixi:{y:0}, delay:0.25});
		}).on('mouseout', function(e){
			t.to(ctaBgEndFrame2, 0.6, {pixi:{scale:1.0}, ease:Elastic.easeOut});
			t.to(ctaEndframe2Text, 0.6, {pixi:{scale:1.0, y:0}, ease:Elastic.easeOut});
		}).on('tap', function(){
              window.open('http://airheads.com/', '_blank');
            e.preventDefault();
        }).on('click', function(){
            //$('#find_a_pack_clickThrough').click();
            window.open('http://airheads.com/', '_blank');
        });





  //    	ctaHolderEndframe2.on('tap', startGame);



		endframe.addChild(ctaHolderEndframe2);

		yourScoreText 	= new PIXI.Text('Your score: 0 ');
		yourScoreText.style 	= Text.yourScoreTextStyle;
		//yourScoreText.position.set(stageW / 3.25 - yourScoreText.width / 2, 200);


		endframe.addChild(yourScoreText);

		endSubhead 		= new PIXI.Text(' Great job! ' );
		endSubhead.style 		= Text.subHeadTextStyle;
		//endSubhead.position.set(stageW / 3.2 - endSubhead.width / 2, 310);


		endframe.addChild(endSubhead);


		if(screenSize == "desktop") {
          endframeBG.anchor.set(0.5);
          endframeBG.position.set(stageW / 2, stageH / 2);

          endframeLogo.anchor.set(0.5);
          endframeLogo.position.set(stageW / 3, stageH / 4.5);
          t.set(endframeLogo, {pixi:{scale:.4}})

          endframeCandy.anchor.set(0.5);
          endframeCandy.position.set(stageW / 3, stageH / 4.5);
          t.set(endframeCandy, {pixi:{scale:.4}})

          ctaBgEndFrame1.anchor.set(0.5);

          ctaEndframe1Text.anchor.set(0.5);

          endframeAirheadLogo.anchor.set(0.5);
          endframeAirheadLogo.position.set(1033, (stageH / 2) - 17);
          t.set(endframeAirheadLogo, {pixi:{scale:0.98}});

          ctaBgEndFrame2.anchor.set(0.5);
          ctaEndframe2Text.anchor.set(0.5);

          //ctaHolderEndframe1.position.set(stageW/5, stageH - (ctaHolderEndframe1.height) );
          //ctaHolderEndframe2.position.set(stageW/2.15, stageH - (ctaHolderEndframe1.height) );

          ctaHolderEndframe1.position.set(stageW / 3 - ctaHolderEndframe1.width / 2 - 40, stageH / 2 + 160);
		  ctaHolderEndframe2.position.set(stageW / 3 + ctaHolderEndframe2.width / 2 + 40, stageH / 2 + 160);


          //yourScoreText.position.set(stageW / 3.25 - yourScoreText.width / 2, 200);
          //endSubhead.position.set(stageW / 3.2 - endSubhead.width / 2, 310);

		  yourScoreText.position.set(stageW / 3 - yourScoreText.width / 2, 168);
		  endSubhead.position.set(stageW / 3 - endSubhead.width / 2, 284);



        } else if (screenSize == "tablet") {
          endframeLogo.anchor.set(0.5);
          endframeLogo.position.set(260, 130);
          t.set(endframeLogo, {pixi:{scale:.4}})

          endframeCandy.anchor.set(0.5);
          endframeCandy.position.set(260, 130);
          t.set(endframeCandy, {pixi:{scale:.35}})

          endframeAirheadLogo.anchor.set(0.5);
          endframeAirheadLogo.position.set(630, stageH / 2);
          t.set(endframeAirheadLogo, {pixi:{scale:.65}})

          ctaHolderEndframe1.position.set(140,400);
          t.set(ctaHolderEndframe1, {pixi:{scale:.65}})


          ctaHolderEndframe2.position.set(360, 400);
          t.set(ctaHolderEndframe2, {pixi:{scale:.65}})

          yourScoreText.position.set(15, 225);
          t.set(yourScoreText, {pixi:{scale:.60}})


          endSubhead.position.set(170, 295);
          t.set(endSubhead, {pixi:{scale:.65}})


        } else {


	      if (screenHeight === 'small') {

		     // alert('small');

		  	  endframeLogo.anchor.set(0.5);
	          t.set(endframeLogo, {pixi:{scale:.35}});
	          endframeLogo.position.set(stageW/2, endframeLogo.height/2 + 45);

	          endframeCandy.anchor.set(0.5);
	          endframeCandy.position.set(stageW/2, endframeLogo.height/2 + 45);
	          t.set(endframeCandy, {pixi:{scale:.35}})

	          //t.set(endframeAirheadLogo, {pixi:{scale:.55}})
	          //endframeAirheadLogo.anchor.set(0.5);
	          //endframeAirheadLogo.position.set(stageW/2, stageH - endframeAirheadLogo.height/2 - 35);


	          endframeAirheadLogo.scale.set(0.58);
              endframeAirheadLogo.position.set( (stageW / 2) - 4  , (stageH - 25) - endframeAirheadLogo.height / 2 );


	          //t.set(ctaHolderEndframe1, {pixi:{scale:.55}})
	          //ctaHolderEndframe1.position.set(ctaHolderEndframe1.width/2 + 15, stageH - endframeAirheadLogo.height - ctaHolderEndframe1.height - 26);

	          //t.set(ctaHolderEndframe2, {pixi:{scale:.55}})
	          //ctaHolderEndframe2.position.set(stageW-ctaHolderEndframe2.width/2 - 15, stageH - endframeAirheadLogo.height - ctaHolderEndframe2.height - 26);


	          ctaHolderEndframe1.scale.set(0.50);
              ctaHolderEndframe2.scale.set(0.50);

              ctaHolderEndframe1.position.set(stageW / 2 - ctaHolderEndframe1.width / 2 - 10, stageH / 2 + 60);
              ctaHolderEndframe2.position.set(stageW / 2 + ctaHolderEndframe2.width / 2 + 10, stageH / 2 + 60);

			  yourScoreText.style.fontSize = '40px';
	          yourScoreText.style.letterSpacing = 0.25;
			  //yourScoreText.position.set(stageW / 2 - yourScoreText.width / 2, stageH / 2 - yourScoreText.height * 2    );
			  //yourScoreText.position.set((stageW / 2) - (yourScoreText.width / 3), stageH / 2 - yourScoreText.height * 2    );
			  yourScoreText.position.set(35, stageH / 2 - yourScoreText.height * 2    );


	          //t.set(endSubhead, {pixi:{scale:.65}})
	          //endSubhead.anchor.set(0.5);
	          //endSubhead.position.set(stageW / 2, endframeLogo.height + yourScoreText.height * 2);
	          //endSubhead.position.set(stageW / 2, stageH / 2 - endSubhead.height + 5 );

	          endSubhead.style.fontSize = '28px'
              endSubhead.position.set(stageW / 2 - endSubhead.width / 2, stageH / 2 - endSubhead.height );



	          endframeBG.anchor.set(0.5);
	          endframeBG.position.set(stageW / 2, stageH / 2);
	          t.set(endframeBG, {pixi:{scale:1.25}})

		  } else {

			 // alert('normal');

			  endframeLogo.anchor.set(0.5);
	          t.set(endframeLogo, {pixi:{scale:.4}})

	          endframeLogo.position.set(stageW/2, endframeLogo.height/2 + 60);

	          endframeCandy.anchor.set(0.5);
	          endframeCandy.position.set(stageW/2, endframeLogo.height/2 + 60);

	          t.set(endframeCandy, {pixi:{scale:.35}})

	          //t.set(endframeAirheadLogo, {pixi:{scale:.55}})
	          //endframeAirheadLogo.anchor.set(0.5);
	          //endframeAirheadLogo.position.set(stageW/2, stageH - endframeAirheadLogo.height/2 - 35);

	          endframeAirheadLogo.scale.set(0.58);
              endframeAirheadLogo.position.set( (stageW / 2) - 4  , (stageH - 25) - endframeAirheadLogo.height / 2 );


			  ctaHolderEndframe1.scale.set(0.55);
              ctaHolderEndframe2.scale.set(0.55);

              ctaHolderEndframe1.position.set(stageW / 2 - ctaHolderEndframe1.width / 2 - 10, stageH / 2 + 60);
              ctaHolderEndframe2.position.set(stageW / 2 + ctaHolderEndframe2.width / 2 + 10, stageH / 2 + 60);


	          //t.set(ctaHolderEndframe1, {pixi:{scale:.55}})
	          //ctaHolderEndframe1.position.set(ctaHolderEndframe1.width/2 + 35, stageH - endframeAirheadLogo.height - ctaHolderEndframe1.height - 26);

	          //t.set(ctaHolderEndframe2, {pixi:{scale:.55}})
	          //ctaHolderEndframe2.position.set(stageW-ctaHolderEndframe2.width/2 - 35, stageH - endframeAirheadLogo.height - ctaHolderEndframe2.height - 26);


	          //endCtaHolder1.position.set(stageW / 2 - endCtaHolder1.width / 2 - 10, stageH / 2 + 60);
	          //endCtaHolder2.position.set(stageW / 2 + endCtaHolder2.width / 2 + 10, stageH / 2 + 60);

			  yourScoreText.style.fontSize = '40px';
	          yourScoreText.style.letterSpacing = 0.25;

	          //t.set(yourScoreText, {pixi:{scale:.45}})
	          //yourScoreText.position.set(stageW / 2 - yourScoreText.width/2 - 2, endframeLogo.height + yourScoreText.height - 20);

			  yourScoreText.position.set(stageW / 2 - yourScoreText.width / 2, stageH / 2 - yourScoreText.height * 2 );


	          //t.set(endSubhead, {pixi:{scale:.65}})
	          //endSubhead.anchor.set(0.5);
	          //endSubhead.position.set(stageW / 2, endframeLogo.height + yourScoreText.height * 2);
	          //endSubhead.position.set(stageW / 2, stageH / 2 - endSubhead.height + 20 );

	          endSubhead.style.fontSize = '28px'
              endSubhead.position.set(stageW / 2 - endSubhead.width / 2, stageH / 2 - endSubhead.height );



	          endframeBG.anchor.set(0.5);
	          endframeBG.position.set(stageW / 2, stageH / 2);
	          t.set(endframeBG, {pixi:{scale:1.25}})
		  }





        }



		/*
		//ahLogo  		= new PIXI.extras.AnimatedSprite(logoTextures);
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
		//overlay 		= new PIXI.Sprite(resources['images/cab/overlayBg_@2x.png'].texture);
		//instructionText = new PIXI.Text(' Keep clicking to catch \n all the Airheads! ');
		ctaText.style 			= Text.ctaTextStyle;
		//instructionText.style 	= Text.interfaceTextStyle;

*/

/*

		ctaHolder.interactive = true;
		ctaHolder.buttonMode = true;
		ctaHolder.addChild(ctaBg);
		ctaHolder.addChild(ctaText);



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
		//.from(overlay, 		0.7, {pixi:{x:'+=40', alpha:0}, ease:Elastic.easeOut}, '-=0.55')
		//.from(instructionText, 0.4, {pixi:{y:'+=40', alpha:0},ease:Elastic.easeOut}, '-=0.6')
		//.from(ahLogo, 		0.8, {pixi:{scale:0.7, alpha:0}, ease:Power3.easeOut}, '-=0.2')
		//.addCallback(function() { ahLogo.play() }, '-=0.85')
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

      	ctaHolder.on('tap', setUpGame);
      	//ctaHolder.on('click', setUpGame);




      	tlIntro.play();
		introTicker.start();

      	introPlaying = true;
*/

		// -----------
		//  BACKGROUND
		// -----------
		bgHolder = new PIXI.Container();
		starsFront = new PIXI.Sprite(resources['bg_stars_front.png'].texture);
		starsBack = new PIXI.Sprite(resources['bg_stars_back.png'].texture);
		bgNebula = new PIXI.Sprite(resources['bg_nebula.png'].texture);
		sky = new PIXI.Sprite(resources['bg_sky_@2x.jpg'].texture);
		street = new PIXI.Sprite(resources['bg_street.png'].texture);
		trees = new PIXI.Sprite(resources['bg_trees.png'].texture);
		buildings = new PIXI.Sprite(resources['bg_buildings.png'].texture);
		cloudsFront = new PIXI.Sprite(resources['bg_clouds_front.png'].texture);
		cloudsBack = new PIXI.Sprite(resources['bg_clouds_back.png'].texture);
		cloudsMid = new PIXI.Sprite(resources['bg_clouds_mid.png'].texture);

		// -----------
		//  AIRHEAD
		// -----------
		airHead = new PIXI.Container();
		airBody = new PIXI.Container();
		leftLeg = new PIXI.Container();
		rightLeg = new PIXI.Container();
		leftArm = new PIXI.Container();
		rightArm = new PIXI.Container();
		airHeadMouthCollision = new PIXI.Sprite(PIXI.Texture.WHITE);



		headTextures = [resources['ah_head_00.png'].texture, resources['ah_head_01.png'].texture, ];
		head = new PIXI.extras.AnimatedSprite(headTextures);

		braid = new PIXI.Sprite(resources['ah_braid.png'].texture);
		torso = new PIXI.Sprite(resources['ah_torso.png'].texture);

		lowerLeftLeg = new PIXI.Sprite(resources['ah_lower_left_leg.png'].texture);
		lowerRightLeg = new PIXI.Sprite(resources['ah_lower_right_leg.png'].texture);
		upperLeftLeg = new PIXI.Sprite(resources['ah_upper_left_leg.png'].texture);
		upperRightLeg = new PIXI.Sprite(resources['ah_upper_right_leg.png'].texture);
		lowerRightArm = new PIXI.Sprite(resources['ah_lower_right_arm.png'].texture);
		lowerLeftArm = new PIXI.Sprite(resources['ah_lower_left_arm.png'].texture);
		upperRightArm = new PIXI.Sprite(resources['ah_upper_right_arm.png'].texture);
		upperLeftArm = new PIXI.Sprite(resources['ah_upper_left_arm.png'].texture);



		// -----------
		//  INTERFACE
		// -----------
		interfaceHolder 	= new PIXI.Container();
		scoreText 	= new PIXI.Text('0');
		scoreIcon 	= new PIXI.Sprite(resources['candy_scoreIcon.png'].texture);
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
		heart1 		= new PIXI.Sprite(resources['heart.png'].texture);
		heart2 		= new PIXI.Sprite(resources['heart.png'].texture);
		heart3 		= new PIXI.Sprite(resources['heart.png'].texture);
		hitRect 	= new PIXI.Graphics();
		hitRect.beginFill(0xFF3300);
		hitRect.drawRect(0, 0, stageW, stageH);
		hitRect.endFill();
		hitRect.alpha = 0.0;
		hitRect.interactive = true;
		hitRect.buttonMode = true;
		hitRect.hitArea = new PIXI.Rectangle(0, 0, stageW, stageH);

		// -----------
		//  OBJECTS
		// -----------

		// - Candy
		candyHolder 	= new PIXI.Container();

		candy0 			= new PIXI.Sprite(resources['candy_00.png'].texture);
		candy1 			= new PIXI.Sprite(resources['candy_01.png'].texture);
		candy2 			= new PIXI.Sprite(resources['candy_02.png'].texture);
		candy3 			= new PIXI.Sprite(resources['candy_03.png'].texture);
		candy4 			= new PIXI.Sprite(resources['candy_04.png'].texture);
		candy5 			= new PIXI.Sprite(resources['candy_05.png'].texture);
		candy6 			= new PIXI.Sprite(resources['candy_06.png'].texture);
		candy7 			= new PIXI.Sprite(resources['candy_07.png'].texture);
		enemy 			= new PIXI.Sprite(resources['enemy1.png'].texture);
		enemy2 			= new PIXI.Sprite(resources['enemy2.png'].texture);
		enemy3 			= new PIXI.Sprite(resources['enemy3B.png'].texture);
		enemy4 			= new PIXI.Sprite(resources['enemy4.png'].texture);
		// -----------
		//  ENDFRAME
		// -----------


		setPosition();


	}

	function setPosition() {
		// console.log("setPosition()")

		head.pivot.set(138, 368);
		head.position.set(head.width - 138, head.height - 308);

        head.loop = false;
		head.animationSpeed = 0.6;

		torso.position.set(116, 16);

		braid.position.set(116, -30);

		lowerRightArm.position.set(0, 47);
		lowerLeftArm.position.set(6, 45);

		leftArm.pivot.set(-4, 20);
		rightArm.pivot.set(20, 9);

		leftArm.position.set(160 - 4, 18 + 20);
		rightArm.position.set(102 + 20, 18 + 9);

		lowerLeftLeg.position.set(24, 73);
		lowerRightLeg.position.set(-3, 71);


		leftLeg.pivot.set(14, 18);
		rightLeg.pivot.set(20, 12);

		leftLeg.position.set(132 + 14, 68 + 18);
		rightLeg.position.set(114 + 20, 70 + 12);


		airHeadMouthCollision.width = 80;
		airHeadMouthCollision.height = 50;
		airHeadMouthCollision.visible = false;
		airHeadMouthCollision.position.set(100, -80);



		rightArm.addChild(lowerRightArm);
		rightArm.addChild(upperRightArm);
		leftArm.addChild(lowerLeftArm);
		leftArm.addChild(upperLeftArm);

		rightLeg.addChild(lowerRightLeg);
		rightLeg.addChild(upperRightLeg);
		leftLeg.addChild(lowerLeftLeg);
		leftLeg.addChild(upperLeftLeg);

		airBody.addChild(torso);

		airBody.addChild(leftLeg);
		airBody.addChild(rightLeg);

		airBody.addChild(leftArm);
		airBody.addChild(rightArm);

		airHead.addChild(braid);

		airHead.addChild(head);
		airHead.addChild(airBody);

		airHead.addChild(airHeadMouthCollision);


		airHead.scale.set(0.6);
		airHead.position.set(stageW / 2 - airHead.width / 2, stageH / 2);



		sky.position.set(0, -sky.height + stageH);
		street.position.set(0, stageH - street.height);
		trees.position.set(0, 290);
		buildings.position.set(0, 220);

        if(screenSize == "mobile") {
          buildings.position.set(0, 420);
          trees.position.set(0, 5000);
        }

		cloudsFront.position.set(0, 200);
		cloudsBack.position.set(0, -200);
		cloudsMid.position.set(0, -1100);
		bgNebula.position.set(0, sky.y + 700);
		starsBack.position.set(0, sky.y + 500);
		starsFront.position.set(0, sky.y - 420);

		bgHolder.addChild(sky);
		bgHolder.addChild(bgNebula);
		bgHolder.addChild(starsBack);
		bgHolder.addChild(starsFront);
		bgHolder.addChild(cloudsBack);
		bgHolder.addChild(cloudsMid);
		bgHolder.addChild(cloudsFront);
		bgHolder.addChild(buildings);
		bgHolder.addChild(trees);
		bgHolder.addChild(street);
		candyHolder.addChild(candy0);
		candyHolder.addChild(candy1);
		candyHolder.addChild(candy2);
		candyHolder.addChild(candy3);
		candyHolder.addChild(candy4);
		candyHolder.addChild(candy5);
		candyHolder.addChild(candy6);
		candyHolder.addChild(candy7);
		candyHolder.addChild(enemy);
		candyHolder.addChild(enemy2);
		candyHolder.addChild(enemy3);
		candyHolder.addChild(enemy4);
        t.to(enemy3, 0, {pixi:{scale:.85}});
		candies = [candy0, candy1, candy2, candy3, candy4, candy5, candy6, candy7];
		enemies = [enemy, enemy2, enemy3, enemy4];


      	for ( var i = 0; i < candies.length; i++ ) {
            t.to(candies[i], 0, {pixi:{scale:1.2}});

			if (screenSize === 'mobile') {
				candies[i].y = Utils.random(-100, -600);
				candies[i].x = Utils.random(0, stageW);

			} else {
				candies[i].y = Utils.random(-100, -600);
				candies[i].x = Utils.random(0, stageW);
			}
		}

      	for ( var i = 0; i < enemies.length; i++ ) {
          		enemies[i].anchor.set(0.5, 0);

			if (screenSize === 'mobile') {
				enemies[i].y = Utils.random(-100, -600);
				enemies[i].x = Utils.random(0, stageW);

			} else {
				enemies[i].y = Utils.random(-100, -600);
				enemies[i].x = Utils.random(0, stageW);
			}
		}

        enemy.x = 10000;
        resetBirdPosition()


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

		buildStage();
		setUpGame();

	}

	function buildStage() {
		// console.log("buildStage()")
		app.stage.addChild(bgHolder);
        app.stage.addChild(stageHit);
		app.stage.addChild(airHead);
		app.stage.addChild(candyHolder);
		app.stage.addChild(interfaceHolder);

		app.stage.addChild(intro);
		app.stage.addChild(endframe);

	}

	function setUpGame() {
		// console.log("setUpGame()")
		initAudio()
		setTimeout( function() { ticker.start(); }, 1000);



	}

	//NOTE Need to switch these to cdn when in SF
	function initAudio() {
		// console.log("initAudio()")
		bgSound = new Howl({
			src : ['https://c1.undertonevideo.com/clients/Airheads/sounds/bg-sound.mp3'],
			volume: 0.3,
			loop: true,
		});
		flapSound = new Howl({
			src : ['https://c1.undertonevideo.com/clients/Airheads/sounds/jump-sound.mp3'],
			volume: 0.3
		});
		buttonSound = new Howl({
			src : ['https://c1.undertonevideo.com/clients/Airheads/sounds/button-sound.mp3'],
			volume: 0.3
		});
		eatSound = new Howl({
			src : ['https://c1.undertonevideo.com/clients/Airheads/sounds/eat-sound.mp3'],
			volume: 0.3
		});
		loseSound = new Howl({
			src : ['https://c1.undertonevideo.com/clients/Airheads/sounds/lose-sound.mp3'],
			volume: 0.3
		});
		winSound = new Howl({
			src : ['https://c1.undertonevideo.com/clients/Airheads/sounds/win-sound.mp3'],
			volume: 0.3
		});
		overSound = new Howl({
			src : ['https://c1.undertonevideo.com/clients/Airheads/sounds/over-sound.mp3'],
			volume: 0.3
		});

		var audioCount = 0;
		function updateAudioProgress() {
			audioCount += 1;
			//log(audioCount);
			if (audioCount === 7) {

			//	setTimeout( function() { bgSound.play(); ticker.start(); playing = true;}, 500);
			//	intro.alpha = 0.0;
			//	intro.destroy();

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


// ticker animation stuff

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
//			ticker.stop();
			handleGameOver(true);
		}
	}

  function resetBirdPosition() {
    t.to(enemy2, 0, {pixi:{rotation:"0", overwrite:"all"}});

    if(enemy2.x > stageW/2) {
      t.to(enemy2, 6, {pixi:{x:0, rotation:"-30", overwrite:"all"}});
    } else {
      t.to(enemy2, 6, {pixi:{x:stageW, rotation:"30", overwrite:"all"}});
    }

  }

  	// Deals with the scrolling of the candy and checks for collisoin between character and the candy. Called by the ticker every frame
	function handleObjects(delta) {
          enemy.y += candySpeed;
          enemy2.y += candySpeed;
         enemy3.x += candySpeed*.1;

          enemy3.y += candySpeed;

     // console.log("delta is " + delta);
 /*
      	if(timePlayed < 15) {
          enemies[1].y += candySpeed;
        } else {
          enemies[0].y += candySpeed;
        }

          */
        if(timePlayed > 15) {
          enemy4.y += candySpeed*.5;
          enemy4.x -= candySpeed;
			if(enemy4.x < -100) {
              enemy4.x = stageW + 250;
            }
        }

		for ( var i = 0; i < enemies.length; i++ ) {
   //       enemies[i].y += candySpeed;
   //       enemies[2].x += candySpeed*.1;
   //       enemies[2].y -= .3;

   //       enemies[3].y -= candySpeed;

        if(timePlayed > 15 && enemies[1].y > stageH) {
          enemies[1].x = 10000;
          enemies[1].y = -10000;
        }


        if(timePlayed > 10 && enemies[2].y > stageH) {
          enemies[2].x = 10000;
          enemies[2].y = -10000;
        }

        if(timePlayed < 10 && enemies[2].x > stageW) {
          enemies[2].x = -100;
        }





          if (enemies[i].y > stageH + enemies[i].height) {
				if ( screenSize === 'mobile' ) {
					enemies[i].y = Utils.random(-100, -600);
				} else {
					enemies[i].y = Utils.random(-100, -600);
				}
				enemies[i].x = Utils.random(0, stageW);

            	if(timePlayed < 15 ) {
                  enemies[0].x = 10000;
                }

              if (i == 1) {
              //   t.to(enemy2, 0, {pixi:{rotation:'0'}});
                //alert(enemy2.x)
                resetBirdPosition();
              }

			}



			if (Utils.hitTest(enemies[i], airHeadMouthCollision)) {
				//log('CANDY COLLISION');
				//enemies[i].y = stageH + Utils.random(200, 400);
				if ( screenSize === 'mobile' ) {
					enemies[i].y = Utils.random(-100, -600);
				} else {
					enemies[i].y = Utils.random(-100, -600);
				}
				enemies[i].x = Utils.random(0, stageW);
              handleEnemyHit();
              loseSound.play();

              if (i == 1) {
                resetBirdPosition()
              }

			}


		}



		candy5.rotation -= 0.01;
		candy6.rotation -= 0.005;
		candy7.rotation += 0.005;


		for ( var i = 0; i < candies.length; i++ ) {
			candies[i].y += candySpeed;
			if (candies[i].y > stageH + candies[i].height) {
				if ( screenSize === 'mobile' ) {
					candies[i].y = Utils.random(-100, -600);
				} else {
					candies[i].y = Utils.random(-100, -600);
				}
				candies[i].x = Utils.random(0, stageW);
			}

			if (Utils.hitTest(candies[i], airHeadMouthCollision)) {
				//log('CANDY COLLISION');
				//candies[i].y = stageH + Utils.random(200, 400);
				if ( screenSize === 'mobile' ) {
					candies[i].y = Utils.random(-100, -600);
				} else {
					candies[i].y = Utils.random(-100, -600);
				}
				candies[i].x = Utils.random(0, stageW);
				handleScore();
				eatSound.play();
			}
		}
	}

	function handleBg() {
		street.y += 1.37;
		trees.y += 1.17;
		buildings.y += 1.05;
		cloudsFront.y += 0.6;
		cloudsBack.y += 0.4;
		cloudsMid.y += 0.8;
		starsBack.y += 1.6;
		starsFront.y += 2.0;
		bgNebula.y += 1.30;
		sky.y += 1.75;
		/*
		testTime += (1 / Math.round(ticker.FPS));

		if(testTime > 30) {
			ticker.stop();
		}
		*/
	}


  /*
	function handleAirHead() {

		if(touchDevice == false) {
			mousePos = Utils.getMousePosition();
			if (mousePos.y > 0 && mousePos.y < stageH ) {
				dy = ((mousePos.y - 120 ) - (airHead.y)) * easing
			} else {
				if (mousePos.y < 0) {
					dy = ((0 - 120 ) - (airHead.y)) * easing;
				} else if( mousePos.y > stageH + 30 ) {
					dy = ((stageH - 120 ) - (airHead.y)) * easing;
				}
			}
			if (mousePos.x > 0 && mousePos.x < stageW ) {
				dx = (mousePos.x - airHead.x) * easing;
			} else {
				if (mousePos.x < 0) {
					dx = (0 - airHead.x) * easing;;
				} else if( mousePos.x > stageW ) {
					dx = (stageW - airHead.x) * easing;
				}
			}
			ax = dx * spring;
			ay = dy * spring;
			vx += ax;
			vy += ay;
			vx *= friction;
			vy *= friction;
			airHead.y += vy + 30;
			airHead.x += vx;
			head.rotation = (-dx / flopRate * (Math.PI / 180));
			airBody.rotation = (dx / 8.5 * (Math.PI / 180));
			rightLeg.rotation = (dx / 10.5 * (Math.PI / 180));
			lowerRightLeg.rotation = (dx / 4.5 * (Math.PI / 180));
			leftLeg.rotation = (dx / 10.5 * (Math.PI / 180)) + 0.25;
			lowerLeftLeg.rotation = (dx / 4.5 * (Math.PI / 180));
			upperLeftArm.rotation = (dx / 10 * (Math.PI / 180));
			lowerLeftArm.rotation = (dx / 1.5 * (Math.PI / 180));
			upperRightArm.rotation = (dx / 10 * (Math.PI / 180));
			lowerRightArm.rotation = (dx / 2.5 * (Math.PI / 180));
		} else {
          	if (touchDevice === true) {
              stageHit.on('pointermove', handleTouch);
              head.rotation = (-dx / 4 * (Math.PI / 180));
              airBody.rotation = (dx / 8 * (Math.PI / 180));
              rightLeg.rotation = (dx / 5.5 * (Math.PI / 180));
              lowerRightLeg.rotation = (dx / 2.5 * (Math.PI / 180));
              leftLeg.rotation = (dx / 5.5 * (Math.PI / 180)) + 0.25;
              lowerLeftLeg.rotation = (dx / 2.5 * (Math.PI / 180));
              upperLeftArm.rotation = (dx / 5 * (Math.PI / 180));
              lowerLeftArm.rotation = (dx / 1.5 * (Math.PI / 180));
              upperRightArm.rotation = (dx / 5 * (Math.PI / 180));
              lowerRightArm.rotation = (dx / 2.5 * (Math.PI / 180));
              airHead.y += vy + 10;
              airHead.x += vx;
            }
		}
	}
	var mSpring = 0.03;
	function handleTouch(e) {
		ex = e.data.global.x;
		ey = e.data.global.y;
		dx = (ex - airHead.x) * easing;
		dy = ((ey - 120 ) - (airHead.y)) * easing;
		ax = dx * mSpring;
		ay = dy * mSpring;
		vx += ax;
		vy += ay;
		vx *= friction;
		vy *= friction;
	}

  */

  var mSpring = 0.03;
  var yFix = 0;

  // this is working ok but not perfect
	function handleAirHead() {
      if(touchDevice) {

	      function initTouchAirheadFix() {
		  	yFix = 30;

	      }

		//ragdoll stuff
		function handleTouch(e) {
			ex = e.data.global.x - 110;
			ey = e.data.global.y - 90;
			dx = (ex - airHead.x) * easing;
			dy = ((ey - 120 ) - (airHead.y)) * easing;
			ax = dx * mSpring;
			ay = dy * mSpring;
			vx += ax;
			vy += ay;
			vx *= friction;
			vy *= friction;
		}

		t.to(head, .75, {pixi:{rotation: ax*-6}});
		t.to(leftLeg, .3, {pixi:{rotation: (ax*4) + ((ay+5.3)*-2)}});
		t.to(rightLeg, .3, {pixi:{rotation: (ax*4) + ((ay+5.3)*2)}});
		t.to(leftArm, .1, {pixi:{rotation: (ax*4) + ((ay+5.3)*-2)}});
		t.to(rightArm, .1, {pixi:{rotation: (ax*4) + ((ay+5.3)*2)}});
		t.to(lowerLeftArm, .1, {pixi:{rotation: (ax*4) + ((ay+5.3)*-2)}});
		t.to(lowerRightArm, .1, {pixi:{rotation: (ax*4) + ((ay+5.3)*2)}});
		t.to(lowerLeftLeg, .1, {pixi:{rotation: (ax*4) + ((ay+5.3)*-2)}});
		t.to(lowerRightLeg, .1, {pixi:{rotation: (ax*4) + ((ay+5.3)*2)}});
		t.to(braid, 1, {pixi:{rotation: (ax*15) + ((ay+5.3)*15)}});



		airHead.x += vx;
		airHead.y += vy + yFix;


        stageHit.on('pointermove', handleTouch);
		stageHit.on('pointerdown', initTouchAirheadFix);


      } else {

		mousePos = Utils.getMousePosition();
		dy = (mousePos.y - airHead.y - 150) * easing;
		dx = (mousePos.x - airHead.x - 90) * easing;
		ax = dx * spring;
		ay = dy * spring;
		vx += ax;
		vy += ay;
		vx *= friction;
		vy *= friction;

		t.to(head, .75, {pixi:{rotation: ax*-6}});
		t.to(leftLeg, .3, {pixi:{rotation: (ax*4) + ((ay+5.3)*-2)}});
		t.to(rightLeg, .3, {pixi:{rotation: (ax*4) + ((ay+5.3)*2)}});
		t.to(leftArm, .1, {pixi:{rotation: (ax*4) + ((ay+5.3)*-2)}});
		t.to(rightArm, .1, {pixi:{rotation: (ax*4) + ((ay+5.3)*2)}});
		t.to(lowerLeftArm, .1, {pixi:{rotation: (ax*4) + ((ay+5.3)*-2)}});
		t.to(lowerRightArm, .1, {pixi:{rotation: (ax*4) + ((ay+5.3)*2)}});
		t.to(lowerLeftLeg, .1, {pixi:{rotation: (ax*4) + ((ay+5.3)*-2)}});
		t.to(lowerRightLeg, .1, {pixi:{rotation: (ax*4) + ((ay+5.3)*2)}});
		t.to(braid, 1, {pixi:{rotation: (ax*15) + ((ay+5.3)*15)}});

		airHead.y += vy + 30;
		airHead.x += vx;

      }
		//ragdoll stuff
		/*
		t.to(head, .75, {pixi:{rotation: ax*-6}});
		t.to(leftLeg, .3, {pixi:{rotation: (ax*4) + ((ay+5.3)*-2)}});
		t.to(rightLeg, .3, {pixi:{rotation: (ax*4) + ((ay+5.3)*2)}});
		t.to(leftArm, .1, {pixi:{rotation: (ax*4) + ((ay+5.3)*-2)}});
		t.to(rightArm, .1, {pixi:{rotation: (ax*4) + ((ay+5.3)*2)}});
		t.to(lowerLeftArm, .1, {pixi:{rotation: (ax*4) + ((ay+5.3)*-2)}});
		t.to(lowerRightArm, .1, {pixi:{rotation: (ax*4) + ((ay+5.3)*2)}});
		t.to(lowerLeftLeg, .1, {pixi:{rotation: (ax*4) + ((ay+5.3)*-2)}});
		t.to(lowerRightLeg, .1, {pixi:{rotation: (ax*4) + ((ay+5.3)*2)}});
		t.to(braid, 1, {pixi:{rotation: (ax*15) + ((ay+5.3)*15)}});
		*/
        //airHead.y += vy + 30;
		//airHead.x += vx;

      /*
      console.log("dx is " + dx);
      console.log("dy is " + dy);
      console.log("ax is " + ax);
      console.log("ay is " + ay);
      console.log("vx is " + vx);
      console.log("vy is " + vy);
      */

	}


	function handleTouch_(e) {
		ex = e.data.global.x - 110;
		ey = e.data.global.y - 90;
		dx = (ex - airHead.x) * easing;
		dy = ((ey - 120 ) - (airHead.y)) * easing;
		ax = dx * mSpring;
		ay = dy * mSpring;
		vx += ax;
		vy += ay;
		vx *= friction;
		vy *= friction;
	}




	var lives = 3;
	function handleEnemyHit() {
		// console.log("handleEnemyHit()")
        //ad.customEvent('Life Lost', true);
		lives --;
		// console.log("lives is " + lives)
		if(lives == 2) {
			t.to(heart3, 0.05, {pixi:{alpha:0}, ease:Power3.easeOut, yoyo:true, repeat:4});
		} else if (lives == 1) {
			t.to(heart2, 0.05, {pixi:{alpha:0}, ease:Power3.easeOut, yoyo:true, repeat:4});
		} else {
	    	heart1.alpha = 0;
			handleGameOver(false);
		}

/*
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
*/

	}

	function handleScore() {
		score += 1;
		scoreText.setText(score);
		candySpeed += 0.15;
//		eatSound.play();
		// console.log(score);
       // ad.customEvent('Piece of Candy Eaten', true);

        head.play();
		head.onComplete = function() {
            setTimeout(function(){
              head.gotoAndStop(0);
            }, 500);
		}

	}

	function handleGameOver(won) {
		//palert("handleGameOver()")
        gamePlaying = false;
        gamePlayTimerIncrease = false;
        timePlayed = 0;

		// console.log("handleGameOver")

       // ad.customEvent('Game Completed');

		endframe.visible = true;

		//yourScoreText.setText('Your score: ' + score + ' ');

		yourScoreText.setText(' Your score: ' + score + ' ');

		if (screenSize === 'desktop') {
			yourScoreText.position.set(stageW / 3 - yourScoreText.width / 2, 168);
		} else if ( screenSize === 'tablet' ) {
			yourScoreText.position.set(stageW / 3 - yourScoreText.width / 2, stageH / 2 - yourScoreText.height );
		} else if ( screenSize === 'mobile') {
			yourScoreText.position.set(stageW / 2 - yourScoreText.width / 2, stageH / 2 - yourScoreText.height * 2 );
		}





		ticker.stop()

		if(won == true) {
			winSound.play();
		}

		if(won == false) {
			overSound.play();
		}
		bgSound.stop();


       t.from(endframeLogo, 1.5, {pixi:{scale:0},delay:0, ease: Elastic.easeOut})
       t.from(endframeCandy, 1.5, {pixi:{scale:0},delay:.15, ease: Elastic.easeOut})
       t.from(yourScoreText, 0.4, {pixi:{y:'+=400', alpha:0},delay:.3, ease:Power3.easeOut})
       t.from(endSubhead, 0.4, {pixi:{y:'+=400', alpha:0},delay:.45, ease:Power3.easeOut})
       t.from(ctaHolderEndframe1, 0.4, {pixi:{y:'+=400', alpha:0},delay:.6, ease:Power3.easeOut})
       t.from(ctaHolderEndframe2, 0.4, {pixi:{y:'+=400', alpha:0},delay:.75, ease:Power3.easeOut})
       t.from(endframeAirheadLogo, 1.5,  {pixi:{scale:0},delay:.9, ease: Elastic.easeOut})






	//	app.stage.addChild(endframe);

		/*
      	hitRect.off('tap');
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
			}).on('tap', setUpReplay);

			endCtaHolder2.on('mouseover', function(e){
				t.to(endCtaBg2, 0.6, {pixi:{scale:1.2}, ease:Elastic.easeOut});
				t.to(endCtaText2, 0.2, {pixi:{y:'+=10', alpha:0}, ease:Power3.easeOut});
				t.set(endCtaText2, {pixi:{y:'-=30'}, delay:0.2})
				t.to(endCtaText2, 0.6, {pixi:{y:'+=20', alpha:1, scale:1.1}, ease:Elastic.easeOut, delay:0.20});
              	t.to(endCtaText2, 0.1, {pixi:{y:0}, delay:0.25});
			}).on('mouseout', function(e){
				t.to(endCtaBg2, 0.6, {pixi:{scale:1.0}, ease:Elastic.easeOut});
				t.to(endCtaText2, 0.6, {pixi:{scale:1.0, y:0}, ease:Elastic.easeOut});
			}).on('tap', function(){
            	$('#find_a_pack_clickThrough').click();
            });

          	ahLogoEnd.interactive = true;
          	ahLogoEnd.buttonMode = true;
          	overlayEnd.interactive = true;
          	overlayEnd.buttonMode = true;

          	overlayEnd.on('tap', function() {
        		$('#bg_clickthrough').click();
        	});

          	ahLogoEnd.on('tap', function() {
        		$('#airheads_logo_clickthrough').click();
        	});

		}

		endFrame.position.set(0, 0);
		tlGameOver.play();


		/*
		log('You Died');
		loseSound.play();
		ticker.stop();
		bottomHits = 0;

		//airHead.y = -airHead.height;
		t.set(airHead, {pixi:{y:-200}});

		*/
	}




  	//Handles the 30 second clock
	/*
	 - - - - - - - - - - - - - - - - - -
	 = = = = = = = = = = = = = = = = = =
	 = = = = = BEGIN GAME PLAY = = = = =
	 = = = = = = = = = = = = = = = = = =
	 - - - - - - - - - - - - - - - - - -
	*/



	function loadProgressHandler() {
		loadingText.setText( 'LOADING ' + Math.round(loader.progress) + '%');
	}



	/*
	loader.add([
		'images/cab/buildings.png', 'images/cab/hedge.png', 'images/cab/lightpost_foreground.png', 'images/cab/road.png', 'images/cab/sky.png', 'images/cab/trees.png', 'images/cab/overlayBg_@2x.png', 'images/cab/ah_body.png', 'images/cab/ah_head_00.png', 'images/cab/ah_head_01.png', 'images/cab/ah_head_02.png', 'images/cab/ah_leftArm.png', 'images/cab/ah_leftLeg.png', 'images/cab/ah_pelvis.png', 'images/cab/ah_rightArm.png', 'images/cab/ah_rightLeg.png', 'images/cab/candy_00.png', 'images/cab/candy_01.png', 'images/cab/candy_02.png', 'images/cab/candy_03.png', 'images/cab/candy_04.png', 'images/cab/candy_05.png', 'images/cab/candy_06.png', 'images/cab/heart.png', 'images/cab/cta_bg.png', 'images/cab/logo00.png', 'images/cab/logo01.png', 'images/cab/logo02.png', 'images/cab/logo03.png', 'images/cab/logo04.png', 'images/cab/logo05.png', 'images/cab/logo06.png', 'images/cab/logo07.png', 'images/cab/logo08.png', 'images/cab/logo09.png', 'images/cab/logo10.png', 'images/cab/logo11.png', 'images/cab/logo12.png', 'images/cab/cab_catch.png', 'images/cab/cab_a.png', 'images/cab/cab_bite.png', 'images/cab/cab_bg.png', 'images/cab/cab_candy1.png', 'images/cab/cab_candy2.png', 'images/cab/cab_candy3.png', 'images/cab/cab_candy4.png', 'images/cab/endOverlay.png', 'images/cab/ashleigh.png'
	]).on('progress', loadProgressHandler).load(setUp);
*/













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
//	var friction = 0.7;
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


	function setUpReplay() {
		// console.log("setupReplay()")
		//log('SET REPLAY');
        resetBirdPosition();
        gamePlayTimerIncrease = true;
        timePlayed = 0;
		endframe.visible = false;
      	// ad.customEvent('Game Replayed', true);

    	heart1.alpha = 1;
    	heart2.alpha = 1;
    	heart3.alpha = 1;
		bgSound.play();


		ticker.start();
// reset candy position
      	for ( var i = 0; i < candies.length; i++ ) {
			if (screenSize === 'mobile') {
				candies[i].y = Utils.random(-100, -600);
				candies[i].x = Utils.random(0, stageW);

			} else {
				candies[i].y = Utils.random(-100, -600);
				candies[i].x = Utils.random(0, stageW);
			}
		}

      	for ( var i = 0; i < enemies.length; i++ ) {
          		enemies[i].anchor.set(0.5, 0);

			if (screenSize === 'mobile') {
				enemies[i].y = Utils.random(-100, -600);
				enemies[i].x = Utils.random(0, stageW);

			} else {
				enemies[i].y = Utils.random(-100, -600);
				enemies[i].x = Utils.random(0, stageW);
			}
		}

        enemy.x = 10000;

// reset background position
		sky.position.set(0, -sky.height + stageH);
		street.position.set(0, stageH - street.height);
		trees.position.set(0, 290);
		buildings.position.set(0, 220);
        if(screenSize == "mobile") {
          buildings.position.set(0, 420);
          trees.position.set(0, 5000);
        }



		cloudsFront.position.set(0, 200);
		cloudsBack.position.set(0, -200);
		cloudsMid.position.set(0, -1100);
		bgNebula.position.set(0, sky.y + 700);
		starsBack.position.set(0, sky.y + 500);
		starsFront.position.set(0, sky.y - 420);


// reset animation speed
		candySpeed = 3;

// restart tickers
// reset timer
		gameTime = 30;
		elapsedTime = 0;
// reset score
		score = 0;
		scoreText.setText(score);
		lives = 3;
/*
		buttonSound.play();
        gameFinished = false;

		endCtaHolder1.off('tap');
      	endCtaHolder2.off('tap');
      	overlayEnd.off('tap');
      	ahLogoEnd.off('tap');

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
          	hitRect.on('tap', handleFlap);
		}
		*/
	}

  	/*  = = = = = = = = = = = =

    All the SparkFlow stuff

    = = = = = = = = = = = =  */




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




}
































//