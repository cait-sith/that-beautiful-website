//var currentBackground = 0;
var backgrounds = [];

backgrounds[0] = 'static/img/10.jpg';
backgrounds[1] = 'static/img/11.jpg';
backgrounds[2] = 'static/img/30.jpg';
backgrounds[3] = 'static/img/31.jpg';
backgrounds[4] = 'static/img/100.jpg';
backgrounds[5] = 'static/img/101.jpg';
backgrounds[6] = 'static/img/102.jpg';
backgrounds[7] = 'static/img/103.jpg';
backgrounds[8] = 'static/img/104.jpg';
backgrounds[9] = 'static/img/105.jpg';
backgrounds[10] = 'static/img/106.jpg';
backgrounds[11] = 'static/img/107.jpg';
backgrounds[12] = 'static/img/108.jpg';
backgrounds[13] = 'static/img/109.jpg';
backgrounds[14] = 'static/img/110.jpg';
backgrounds[15] = 'static/img/111.jpg';
backgrounds[16] = 'static/img/112.jpg';
backgrounds[17] = 'static/img/113.jpg';
backgrounds[18] = 'static/img/114.jpg';
backgrounds[19] = 'static/img/115.jpg';
backgrounds[20] = 'static/img/116.jpg';
backgrounds[21] = 'static/img/117.jpg';
backgrounds[22] = 'static/img/118.jpg';
backgrounds[23] = 'static/img/119.jpg';
backgrounds[24] = 'static/img/120.jpg';
backgrounds[25] = 'static/img/121.jpg';
backgrounds[26] = 'static/img/122.jpg';
backgrounds[27] = 'static/img/123.jpg';
backgrounds[28] = 'static/img/124.jpg';
backgrounds[29] = 'static/img/125.jpg';
backgrounds[30] = 'static/img/126.jpg';
backgrounds[31] = 'static/img/127.jpg';
backgrounds[32] = 'static/img/128.jpg';
backgrounds[33] = 'static/img/129.jpg';
backgrounds[34] = 'static/img/130.jpg';
backgrounds[35] = 'static/img/131.jpg';
backgrounds[36] = 'static/img/132.jpg';
backgrounds[37] = 'static/img/133.jpg';
backgrounds[38] = 'static/img/134.jpg';
backgrounds[39] = 'static/img/135.jpg';
backgrounds[40] = 'static/img/136.jpg';
backgrounds[41] = 'static/img/137.jpg';
backgrounds[42] = 'static/img/138.jpg';
backgrounds[43] = 'static/img/139.jpg';
backgrounds[44] = 'static/img/140.jpg';
backgrounds[45] = 'static/img/141.jpg';
backgrounds[46] = 'static/img/142.jpg';
backgrounds[47] = 'static/img/143.jpg';
backgrounds[48] = 'static/img/144.jpg';
backgrounds[49] = 'static/img/145.jpg';
backgrounds[50] = 'static/img/146.jpg';
backgrounds[51] = 'static/img/147.jpg';
backgrounds[52] = 'static/img/148.jpg';
backgrounds[53] = 'static/img/149.jpg';
backgrounds[54] = 'static/img/150.jpg';
backgrounds[55] = 'static/img/151.jpg';
backgrounds[56] = 'static/img/152.jpg';
backgrounds[57] = 'static/img/153.jpg';
backgrounds[58] = 'static/img/154.jpg';
backgrounds[59] = 'static/img/155.jpg';
backgrounds[60] = 'static/img/156.jpg';
backgrounds[61] = 'static/img/157.jpg';
backgrounds[62] = 'static/img/158.jpg';
backgrounds[63] = 'static/img/159.jpg';
backgrounds[64] = 'static/img/160.jpg';
backgrounds[65] = 'static/img/161.jpg';
backgrounds[66] = 'static/img/162.jpg';
backgrounds[67] = 'static/img/163.jpg';
backgrounds[68] = 'static/img/164.jpg';
backgrounds[69] = 'static/img/165.jpg';
backgrounds[70] = 'static/img/166.jpg';
backgrounds[71] = 'static/img/167.jpg';
backgrounds[72] = 'static/img/168.jpg';
backgrounds[73] = 'static/img/169.jpg';
backgrounds[74] = 'static/img/170.jpg';
backgrounds[75] = 'static/img/171.jpg';
backgrounds[76] = 'static/img/172.jpg';
backgrounds[77] = 'static/img/173.jpg';
backgrounds[78] = 'static/img/174.jpg';
backgrounds[79] = 'static/img/175.jpg';
backgrounds[80] = 'static/img/176.jpg';
backgrounds[81] = 'static/img/177.jpg';
backgrounds[82] = 'static/img/178.jpg';
backgrounds[83] = 'static/img/179.jpg';
backgrounds[84] = 'static/img/180.jpg';
backgrounds[85] = 'static/img/181.jpg';
backgrounds[86] = 'static/img/182.jpg';
backgrounds[87] = 'static/img/183.jpg';

function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function changeBackground() {
	var minimum = 0;
	var maximum = 83;
	currentbackground = (Math.random() * (maximum - minimum + 1) ) << 0;
	
    $('img').fadeOut(3000,function() {
		$('img').attr('src', backgrounds[Math.floor(Math.random() * backgrounds.length)]);
/*        $('img').attr("src", backgrounds[currentBackground]);*/
        $('img').fadeIn(2000);
    });

    setTimeout(changeBackground, 10000);
}

$(document).ready(function() {
    setTimeout(changeBackground, 12000);  
	shuffle(backgrounds);	
});

// music player
var randInterval = 0;
var songList = ["Adria_No_Umibe",
				"Aqua",
				"Aqua_Alta_Hiyori",
				"Aqua_-Reprise-",
				"Aria",
				"Gondola_No_Yume",
				"Koi_To_Wa_Donna_Mono",
				"Mangetsu_No_Dolche",
				"Mizu_No_Kagami",
				"Natsu_Tayori",
				"Soshite_Fune_Wa_Iku",
				"Aqua-GuitarSolo-",
				"AriaNoYuuutsu",
				"HanaHie",
				"HaruIchiban",
				"HoshiMadeTsudzukuOmoi",
				"KakaribiNoNocturne",
				"KodomoNoJikan",
				"NatsuNoYousei",
				"NeoVeneziaNoSuisaiga",
				"OkashiNaFutari",
				"SambaDeAqua",
				"SantaClausNoSoraHe~RiversideChristmasMix~",
				"SecondSeasonDeai",
				"TooiKobune",
				"TooriAmeGaYandara",
				"UngaWaMeguru",
				"Yuunagi"
				];
var myAudio = new Audio("static/mu/" + songList[Math.floor(Math.random()*songList.length)] + ".mp3");

//Generates a random song, sets it attributes/properties, and 
		//appends a file extension that works with the browser.
		function getRandomSong(){
			var randSong = songList[Math.floor(Math.random()*songList.length)]
			myAudio.src="static/mu/" + randSong + ".mp3";
			myAudio.id="myAudio";
			myAudio.volume=0.1;
			myAudio.load();
			myAudio.controls=false
			myAudio.preload=false;
		}

		//Sets a random interval for the setTimeout Function with the
		//'variation' parameter being a random amount of time in 
		//seconds, and the 'range' parameter being a set amount of time 
		//in seconds.
		function getRandomInterval(variation, range){
			randInterval = Math.floor((Math.random()*1000*variation)+(1000*range)); 
			return randInterval;
		}   

		//Gets a random song and plays that song.
		function playMusic(){
			getRandomSong();
			myAudio.play();
		}
	
//Plays music on page load.
playMusic();

//Event Listener that will start a new song after a pause
//of randomly determined length.
myAudio.addEventListener('ended', function(){setTimeout(function(){playMusic();}, getRandomInterval(2,2));}, false);