const song1 = document.getElementById("song1");
const song2 = document.getElementById("song2");
const song3 = document.getElementById("song3");
var play_List = document.getElementById("play-List");
function _play(){	
	return song1.play();
}
var playList = [];

function Audio(title, artist, song){
	this.title = title;
	this.artist = artist;
	this.song = song;
	this.duracion = function(){
		return parseInt(song.duration);
	};
}

const audio1 = new Audio("Love Love Love","Of Monsters and Men",song1);
const audio2 = new Audio("Yellow Light","Of Monsters and Men",song2);
const audio3 = new Audio("Flowers","Emmilie Simon",song3);

playList = [audio1,audio2,audio3];

var lista = "";
for(var i=0; i<playList.length; i++){
	
	lista += "<tr><td>"+playList[i].title+" - "+playList[i].artist+"    	Duracion: "+playList[i].duracion()+"</td></tr>";
	
}
play_List.innerHTML=lista;
/*
	<ul>
		<li>
			<audio id="myAudio" src="assets/mp3/LoveLoveLove-OMAM.mp3"></audio>
			Love Love Love - Of Monsters And Men
		</li>
		<li>
			<audio id="song2" src="assets/mp3/OfMonstersandMen-YellowLight.mp3">Audio2</audio>
			Yellow Light - Of Monsters And Men
		</li>
		<li>
			<audio id="song3" src="assets/mp3/EmilieSimon-Flowers.mp3">Audio3</audio>
			Flowers - Emmilie Simon
		</li>
	</ul>
*/