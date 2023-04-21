const music=new Audio('audio/1.mp3');
//   music.play();

const songs=[
    {
        id:1,
        songName:`Naina ashiq na ho <br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"arijit/1.jpg" 
    },
    {
        id:2,
        songName:`Khairiyat <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"arijit/2.jpg" 
    },
    {
        id:3,
        songName:`Desh Mere <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"arijit/3.jpg" 
    },
    {
        id:4,
        songName:`Dhoka <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"arijit/4.jpg" 
    },
    {
        id:5,
        songName:`Tera yaar hu mai <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"arijit/5.jpg" 
    },
    {
        id:6,
        songName:`sun sathiya <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"arijit/6.jpg" 
    },
    {
        id:7,
        songName:`Galti se mistake <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"arijit/7.jpg" 
    },
    {
        id:8,
        songName:`Hamri adhuri khani <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"arijit/8.jpg" 
    },
    {
        id:9,
        songName:`Traffic <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"arijit/9.jpg" 
    },
    {
        id:10,
        songName:`Villain <br>
        <div class="subtitle">Arijit Singh
        </div>`,
        poster:"arijit/10.jpg" 
    },
    {
        id:11,
        songName:`Mere yaara <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"arijit/11.jpg" 
    },
    {
        id:12,
        songName:`Befikre <br>
        <div class="subtitle"> Arijit Singh
        </div>`,
        poster:"arijit/12.jpg" 
    },
    {
        id:13,
        songName:`Raazi <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster:"arijit/13.jpg" 
    },
    {
        id:14,
        songName:`Tamasha <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"arijit/14.jpg" 
    },
    {
        id:15,
        songName:`Pachtaoge <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"arijit/15.jpg" 
    },   
]

Array.from(document.getElementsByClassName('songItem')).forEach((e,i) => {
    e.getElementsByTagName('img')[0].src= songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML= songs[i].songName;
});

let masterPlay=document.getElementById('masterPlay');
let wave=document.getElementById('wave');
masterPlay.addEventListener('click',() =>{
    if(music.paused || music.currentTime<=0){
        music.play(); 
        wave.classList.add('active1');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
    }
})

const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el) =>{
        el.style.background = `rgb(105,105,105,0)`;
    })
}
const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) =>{
        el.classList.add('fa-circle-play');
        el.classList.remove('fa-circle-pause');
    })
}

let index=0;
let poster_master_play=document.getElementById('poster_master_play');
let download_music=document.getElementById('download_music');
let title=document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) =>{
    e.addEventListener('click',(el) =>{
        index=el.target.id;
        // console.log(index);
        music.src= `arijit2/${index}.mp3`;
        poster_master_play.src=`arijit/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        download_music.href = `arijit2/${index}.mp3`;

        let songTitle = songs.filter((els) =>{
            return els.id==index;
        });
        songTitle.forEach(elss =>{
            let {songName} =elss;
            title.innerHTML= songName;
            // Correction later
            download_music.setAttribute('download',songName);
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105,0.1";
        makeAllPlays();
        el.target.classList.remove('fa-circle-play');
        el.target.classList.add('fa-circle-pause');
        wave.classList.add('active1');
    })
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',() =>{
    let music_curr=music.currentTime;
    let music_dur=music.duration;
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if (sec1<10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText=`${min1}:${sec1}`;

    let min2= Math.floor(music_curr / 60);
    let sec2= Math.floor(music_curr % 60);

    if (sec2<10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText=`${min2}:${sec2}`;

    let progressBar=parseInt((music_curr / music_dur)*100);
    seek.value=progressBar;
    let seekbar=seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left=`${seekbar}%`;
})
 
seek.addEventListener('change',()=>{
    music.currentTime=seek.value * music.duration/100;
})

let vol_icon=document.getElementById('vol_icon');
let vol=document.getElementById('vol');
let vol_bar=document.getElementsByClassName('vol_bar')[0];
let vol_dot=document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
    if(vol.value==0){
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.add('fa-volume-off');
    }
    if(vol.value>0){
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.add('fa-volume-low');
        vol_icon.classList.remove('fa-volume-off');
    }
    if(vol.value>50){
        vol_icon.classList.add('fa-volume-high');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.remove('fa-volume-off');
    }
    let vol_a=vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;
    music.volume=vol_a/100;
})

let back=document.getElementById('back');
let next=document.getElementById('next');

back.addEventListener('click',()=>{
    index -= 1;
    if(index<1){
        index=Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src= `arijit2/${index}.mp3`;
        poster_master_play.src=`arijit/${index}.jpg`; 
        music.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');

        let songTitle = songs.filter((els) =>{
            return els.id==index;
        });
        songTitle.forEach(elss =>{
            let {songName} =elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105,0.1";
        makeAllPlays();
        el.target.classList.remove('fa-circle-play');
        el.target.classList.add('fa-circle-pause');
        wave.classList.add('active1');
})

next.addEventListener('click',()=>{
    index += 1;
    if(index>Array.from(document.getElementsByClassName('songItem')).length){
        index=1;
    }
    music.src= `arijit2/${index}.mp3`;
        poster_master_play.src=`arijit/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');

        let songTitle = songs.filter((els) =>{
            return els.id==index;
        });
        songTitle.forEach(elss =>{
            let {songName} =elss;
            title.innerHTML= songName;
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105,0.1";
        makeAllPlays();
        el.target.classList.remove('fa-circle-play');
        el.target.classList.add('fa-circle-pause');
        wave.classList.add('active1');
})

let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop_song=document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330;
})

let pop_art_left=document.getElementById('pop_art_left');
let pop_art_right=document.getElementById('pop_art_right');
let Artists_bx=document.getElementsByClassName('Artists_bx')[0];

pop_art_right.addEventListener('click',()=>{
    Artists_bx.scrollLeft += 330;
})
pop_art_left.addEventListener('click',()=>{
    Artists_bx.scrollLeft -= 330;
});

let shuffle=document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click',()=>{
    let a=shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('fa-repeat');
            shuffle.classList.remove('fa-music');
            shuffle.classList.remove('fa-shuffle');
            shuffle.innerHTML='repeat';
            break;
    
        case "repeat":
            shuffle.classList.remove('fa-repeat');
            shuffle.classList.remove('fa-music');
            shuffle.classList.add('fa-shuffle');
            shuffle.innerHTML='random';
            break;
        case  "random":
            shuffle.classList.remove('fa-repeat');
            shuffle.classList.add('fa-music');
            shuffle.classList.remove('fa-shuffle');
            shuffle.innerHTML='next';
            break;
    }
});


const next_music=()=>{
    if (index==songs.length) {
        index=1;
    } else {
        index++;
    }
    music.src= `arijit2/${index}.mp3`;
    poster_master_play.src=`arijit/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    download_music.href = `arijit2/${index}.mp3`;

    let songTitle = songs.filter((els) =>{
        return els.id==index;
    });
    songTitle.forEach(elss =>{
        let {songName} =elss;
        title.innerHTML= songName;
        // Correction later
        download_music.setAttribute('download',songName);
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105,0.1";
    makeAllPlays();
    el.target.classList.remove('fa-circle-play');
    el.target.classList.add('fa-circle-pause');
    wave.classList.add('active1');
}
const repeat_music=()=>{
    index;
    music.src= `audio/${index}.mp3`;
    poster_master_play.src=`img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    download_music.href = `audio/${index}.mp3`;

    let songTitle = songs.filter((els) =>{
        return els.id==index;
    });
    songTitle.forEach(elss =>{
        let {songName} =elss;
        title.innerHTML= songName;
        // Correction later
        download_music.setAttribute('download',songName);
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105,0.1";
    makeAllPlays();
    el.target.classList.remove('fa-circle-play');
    el.target.classList.add('fa-circle-pause');
    wave.classList.add('active1');
}
const random_music=()=>{
    if (index==songs.length) {
        index=1;
    } else {
        index=Math.floor((Math.random()*songs.length)+1);
    }
    music.src= `arijit2/${index}.mp3`;
    poster_master_play.src=`arijit/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    download_music.href = `arijit2/${index}.mp3`;

    let songTitle = songs.filter((els) =>{
        return els.id==index;
    });
    songTitle.forEach(elss =>{
        let {songName} =elss;
        title.innerHTML= songName;
        // Correction later
        download_music.setAttribute('download',songName);
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105,0.1";
    makeAllPlays();
    el.target.classList.remove('fa-circle-play');
    el.target.classList.add('fa-circle-pause');
    wave.classList.add('active1');
}

music.addEventListener('ended',()=>{
   let b=shuffle.innerHTML;
   switch (b) {
    case 'repeat':
        repeat_music();
        break;
   
    case 'next': 
        next_music();
        break;
    case 'random':
        random_music();
        break;
   }
})