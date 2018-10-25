$(document).ready(function(){
	setTimeout( function() { init(); }, 500);
});

function init() {

	Number.isInteger = Number.isInteger || function(value) {
    return typeof value === "number" &&
           isFinite(value) &&
           Math.floor(value) === value;
	};

	var isMobile = (function () {
		var check = false;
		(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
		return check;
	})();

	function initAudio() {
		bgSound = new Howl({
			src : ['https://c1.undertonevideo.com/clients/Airheads/sounds/bg-sound.mp3'],
			volume: 0.5,
			loop: true,
		});
		flapSound = new Howl({
			src : ['https://c1.undertonevideo.com/clients/Airheads/sounds/jump-sound.mp3'],
			volume: 0.5
		});
		buttonSound = new Howl({
			src : ['https://c1.undertonevideo.com/clients/Airheads/sounds/button-sound.mp3'],
			volume: 0.5
		});
		eatSound = new Howl({
			src : ['https://c1.undertonevideo.com/clients/Airheads/sounds/eat-sound.mp3'],
			volume: 0.5
		});
		loseSound = new Howl({
			src : ['https://c1.undertonevideo.com/clients/Airheads/sounds/lose-sound.mp3'],
			volume: 0.5
		});
		winSound = new Howl({
			src : ['https://c1.undertonevideo.com/clients/Airheads/sounds/win-sound.mp3'],
			volume: 0.5
		});
		overSound = new Howl({
			src : ['https://c1.undertonevideo.com/clients/Airheads/sounds/over-sound.mp3'],
			volume: 0.5
		});
		var audioCount = 0;
		function updateAudioProgress() {
			audioCount += 1;
			//log(audioCount);
			if (audioCount === 7) {
				//setTimeout( function() { bgSound.play(); }, 500);
				//setTimeout( function() { bgSound.play(); ticker.start(); playing = true;}, 500);
				//intro.alpha = 0.0;
				//intro.destroy();
			}
		}
		bgSound.once('load', updateAudioProgress());
		flapSound.once('load', updateAudioProgress());
		buttonSound.once('load', updateAudioProgress());
		eatSound.once('load', updateAudioProgress());
		loseSound.once('load', updateAudioProgress());
		winSound.once('load', updateAudioProgress());
		overSound.once('load', updateAudioProgress());
	} // initAudio

	function initStage() {

	} // initStage

	function buildStage() {

	} // buildStage

	function setPosition() {

	} // setPosition

	function setUp() {

	} // setUp

	function loadProgressHandler() {
		loadingText.setText( 'LOADING ' + Math.round(loader.progress) + '%');
	}

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
		'introAirHeadLogo.png',
		'introInstructionsB.png',
		'introInstructionsBMobile.png',

		'endframeBackground.jpg'

	]).on('progress', loadProgressHandler).load(setUp);






} // closes init