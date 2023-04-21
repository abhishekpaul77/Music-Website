const music=new Audio('audio/1.mp3');
//   music.play();

const songs=[
    {
        id:1,
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"img/1.jpg" 
    },
    {
        id:2,
        songName:`Faded <br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"img/2.jpg" 
    },
    {
        id:3,
        songName:`CArtoon-on & on <br>
        <div class="subtitle">Daniel Levi</div>`,
        poster:"img/3.jpg" 
    },
    {
        id:4,
        songName:`Marriyo - Mortals <br>
        <div class="subtitle">Mortals</div>`,
        poster:"img/4.jpg" 
    },
    {
        id:5,
        songName:`Ertugul Gazi <br>
        <div class="subtitle">Ertugul</div>`,
        poster:"img/5.jpg" 
    },
    {
        id:6,
        songName:`Electronic Music <br>
        <div class="subtitle">Electro</div>`,
        poster:"img/6.jpg" 
    },
    {
        id:7,
        songName:`Tum sath ho <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/7.jpg" 
    },
    {
        id:8,
        songName:`Suna hai <br>
        <div class="subtitle">Neha Kakkar</div>`,
        poster:"img/8.jpg" 
    },
    {
        id:9,
        songName:`Dilbar <br>
        <div class="subtitle">Neha Kakkar</div>`,
        poster:"img/9.jpg" 
    },
    {
        id:10,
        songName:`Duniya <br>
        <div class="subtitle">Akhil ft.Dhvani Bhanushali
        </div>`,
        poster:"img/10.jpg" 
    },
    {
        id:11,
        songName:`Lagdi Lahore Di <br>
        <div class="subtitle">Guru Randhwa</div>`,
        poster:"img/11.jpg" 
    },
    {
        id:12,
        songName:`Putt Jatt Da <br>
        <div class="subtitle"> Diljit Dosanjh
        </div>`,
        poster:"img/12.jpg" 
    },
    {
        id:13,
        songName:`Baarishein <br>
        <div class="subtitle">Atif Aslam</div>`,
        poster:"img/13.jpg" 
    },
    {
        id:14,
        songName:`Vaste <br>
        <div class="subtitle">Dhvani Bhanushali</div>`,
        poster:"img/14.jpg" 
    },
    {
        id:15,
        songName:`Lut Gaye <br>
        <div class="subtitle">Jubin Nautyal</div>`,
        poster:"img/15.jpg" 
    },
    {
        id:16,
        songName:`Tu meri zindagi hai <br>
        <div class="subtitle">Jubin Nautyal</div>`,
        poster:"img/16.jpg" 
    },
    {
        id:17,
        songName:`Zaroori Tha <br>
        <div class="subtitle">Rahat Fateh Ali Khan</div>`,
        poster:"img/17.jpg" 
    },
    {
        id:18,
        songName:`mere dhol judaiyan <br>
        <div class="subtitle">Mehmood J</div>`,
        poster:"img/18.jpg" 
    },
    {
        id:19,
        songName:`Excuses <br>
        <div class="subtitle">Ap Dhillon</div>`,
        poster:"img/19.jpg" 
    },
    
]

Array.from(document.getElementsByClassName('songItem')).forEach((e,i) => {
    e.getElementsByTagName('img')[0].src= songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML= songs[i].songName;
});

// search data start
let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const {id,songName,poster} = element;  
    let card=document.createElement('a');
    card.classList.add('card');
    card.href="#"+id;
    card.innerHTML=`<img src="${poster}" alt="">
    <div class="content">
        ${songName}
    </div>`;
    search_results.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup',()=>{
    let input_value=input.value.toUpperCase();
    let items=search_results.getElementsByTagName('a');
    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value= as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value)>-1) {
            items[index].style.display="flex";
        } else {
            items[index].style.display="none";
        }
        
        if(input.value==0){
            search_results.style.display="none";
        }
        else{
            search_results.style.display="";
        }
        
    }
})
// search data end

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
    music.src= `audio/${index}.mp3`;
        poster_master_play.src=`img/${index}.jpg`; 
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
    music.src= `audio/${index}.mp3`;
        poster_master_play.src=`img/${index}.jpg`;
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

let menu_list_active_button=document.getElementById('menu_list_active_button');
let menu_side=document.getElementsByClassName('menu_side')[0];

menu_list_active_button.addEventListener('click',()=>{
    menu_side.style.transform ='unset';
    menu_list_active_button.style.opacity=0;
})

let song_side=document.getElementsByClassName('song_side')[0];

song_side.addEventListener('click',()=>{
    menu_side.style.transform ='translateX(-100%)';
    menu_list_active_button.style.opacity=1;
})