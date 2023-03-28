var video = document.querySelector("#player1");
var slowRate = 0;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	video.load();
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.getElementById("volume").innerHTML = (video.volume*100)+"%";
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	slowRate += 1;
	let speed = 1;
	if (slowRate > 0){
		for (let i = 0; i < slowRate; i++){
			speed *= 0.95;
		}
	} else {
		for (let i = 0; i > slowRate; i--){
			speed *= (100/95);
		}
	}
	video.playbackRate = speed;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up video");
	slowRate -= 1;
	let speed = 1;
	if (slowRate > 0){
		for (let i = 0; i < slowRate; i++){
			speed *= 0.95;
		}
	} else {
		for (let i = 0; i > slowRate; i--){
			speed *= (100/95);
		}
	}
	video.playbackRate = speed;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip ahead 15 sec");
	if (video.currentTime > video.duration - 15){
		video.currentTime = 0;
	}else{
		video.currentTime += 15;
	}
})

document.querySelector("#mute").addEventListener("click",function(){
	if(video.muted){
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}else{
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}
	console.log("status: " + video.muted);
})

document.querySelector("#slider").addEventListener("change", function(){
	console.log("Change volume");
	video.volume = (this.value/100);
	document.getElementById("volume").innerHTML = (video.volume*100)+"%";
	console.log(video.volume);
})

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("In old school");    
    if (video.classList.contains("oldSchool")){
    }else{
		console.log("Not old school!");    
        video.classList.add("oldSchool");
    }
})

document.querySelector("#orig").addEventListener("click", function(){
	console.log("In original");    
    if (video.classList.contains("oldSchool")){
		console.log("Not old school!");    
        video.classList.remove("oldSchool");
    }
})


