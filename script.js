console.log("Welome To  Spotify");
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgress=document.getElementById('myProgress');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Dhokha",filePath:"songs/1.mp3" ,coverPath:"dhokha.jpg"},
    {songName:"Happier",filePath:"songs/2.mp3" ,coverPath:"happier.jpg"},
    {songName:"Dil Galti",filePath:"songs/3.mp3" ,coverPath:"dil glti.jpg"},
    {songName:"Kesriya",filePath:"songs/4.mp3" ,coverPath:"kesariya.jpg"},
    {songName:"Mehbooba",filePath:"songs/5.mp3" ,coverPath:"meha.jpg"},
    {songName:"Puspa",filePath:"songs/6.mp3" ,coverPath:"puspa.jpg"},
    {songName:"Sami",filePath:"songs/7.mp3" ,coverPath:"sami.jpg"},
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

//audioElement.play();
//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    
    } 
    
})
//events
audioElement.addEventListener('timeupdate',()=>{
     //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgress.value=progress;
})

myProgress.addEventListener('change',()=>{
    audioElement.currentTime=myProgress.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
       element.classList.remove('fa-circle-pause');
       element.classList.add('fa-circle-play');
    

    })   
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        
        audioElement.src='songs/${songIndex+1}.mp3';
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
       if(songIndex>=6){
        songIndex=0
       }
       else{
           songIndex +=1;
       }
       audioElement.src='songs/${songIndex+1}.mp3';
       masterSongName.innerText=songs[songIndex].songName;
       audioElement.currentTime=0;
       audioElement.play();
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -=1;
    }
    audioElement.src='songs/${songIndex+1}.mp3';
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})