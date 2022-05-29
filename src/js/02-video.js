    import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
    
    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
    


    //Відстежування і запис поточного часу відео до локального сховища
    const onPlay = function(data) {
        localStorage.setItem("videoplayer_current_time",JSON.stringify( data.seconds));
       console.log(data.seconds); 
    };

     let stopTime = localStorage.getItem("videoplayer_current_time");
     

    player.on('timeupdate', throttle(onPlay, 1000));

    //Запуск відео з моменту зупинки 

    player.setCurrentTime(stopTime).then(function(seconds) {
        
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':   
                break;

            default:
            
                break;
        }
    });