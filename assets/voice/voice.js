var audio = document.getElementById('audio'); 
    var button = document.getElementById('button'); 
    button.addEventListener('click', playPause, false); 
    function playPause() { 
     if (!audio.paused) { 
     audio.pause(); 
     audio.currentTime = 0; // Uncomment this line for stop 
     button.classList.remove('pause'); 
     button.classList.add('play');
     } else { 
     audio.play(); 
     button.classList.remove('play'); 
     button.classList.add('pause'); 
     } 
    } 