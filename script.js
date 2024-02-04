console.log("Welcome to Musify")

// Intialize the variables
let songIndex = 0;
let audioElement = new Audio('project\songaudio.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');


let songs = [
    {songName: "Phir Aur Kya Chahiye", filePath: "project\songaudio.mp3", coverPath: "project/posterphiraur.jpg"},
    {songName: "Phir Aur Kya Chahiye", filePath: "project/songaudio.mp3", coverPath: "project/posterphiraur.jpg"},
    {songName: "Phir Aur Kya Chahiye", filePath: "project/songaudio.mp3", coverPath: "project/posterphiraur.jpg"},
    {songName: "Phir Aur Kya Chahiye", filePath: "project/songaudio.mp3", coverPath: "project/posterphiraur.jpg"},
    {songName: "Phir Aur Kya Chahiye", filePath: "project/songaudio.mp3", coverPath: "project/posterphiraur.jpg"},
]

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.paused();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 0;
    }
})
// Listen To Events
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // Update Seekbar
})