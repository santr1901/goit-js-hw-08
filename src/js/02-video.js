var _throttle = require('lodash.throttle');
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
    
    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
    


    
    const onPlay = function(data) {
        localStorage.setItem("videoplayer_current_time",JSON.stringify( data.seconds));
       console.log(data.seconds); 
    };

     let stopTime = localStorage.getItem("videoplayer_current_time");
     

    player.on('timeupdate', _throttle(onPlay, 1000));

    

    player.setCurrentTime(stopTime).then(function(seconds) {
        
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });