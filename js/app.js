// Page
  $(document).ready(function() {
    AOS.init({
      duration: 1200
    });
    $('.menu-icon .fa-bars').click(function() {
      $('.sideNav').addClass("active");
    })
    $('.close-nav').click(function() {
      $('.sideNav').removeClass("active");
    })
  });
  
   
  $('.carousel-homebanner').addClass('owl-carousel owl-theme').owlCarousel({
    navText: ["<i class='fal fa-chevron-left text-white'></i>","<i class='fal fa-chevron-right text-white'></i>"],
    autoplay:false,
    autoplayTimeout: 5000,
    loop: true,
    responsive:{
     0: {
       items: 1,
       dots: true,
       nav: false
     },
     600: {
       items: 1,
       nav: false
     },
     1000: {
       items: 1,
       dots: true,
       nav: true
     }
   }
 })
  
 

  var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.image-header').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();


$(window).scroll(function(){
  var scroll =  $(document).height() - $(window).height() - $(window).scrollTop();
  $(".ninth-section").css({
    backgroundSize:(100 + scroll/5) + "%"
  })
}
)

 function fetchNOW() {
    fetch('https://pass-prox.herokuapp.com/https://zenoplay.zenomedia.com/api/zenofm/nowplaying/8h3495u5n48uv')
      .then(response => {
        if (!response.ok) {
          throw Error('ERROR');
        }
        return response.json();
      })
      .then(dataWrapNOW => {
        console.log(dataWrapNOW);

        // ============ Display Details ============
        const getDataNow = dataWrapNOW;
        const displayDataNow = `${getDataNow.title}`;
        document.querySelector('#title_header').insertAdjacentHTML('afterbegin', displayDataNow);

        const displayDataArtist = `${getDataNow.artist}`;
        document.querySelector('#artist_header').insertAdjacentHTML('afterbegin', displayDataArtist);
        
      })
      .catch(error => {
        console.log(error);
      });
  }
  fetchNOW();

  
  //Create classOnScroll function
  function classOnScroll(){
    let $box = $('.menu-wrap'),
        $scroll = $(window).scrollTop();
    
    if($scroll > 40){
      if(!$box.hasClass('scrolled')) 
        $box.addClass('scrolled');
    }
    else
      $box.removeClass('scrolled');
  
  }
  
  //Run on first site run
  classOnScroll();
  
  //Run on scroll and resize
  $(window).on('scroll resize',classOnScroll);

  $(document).ready(function() {
    var playing = false;

    $('a#button_player').click(function() {
        $(this).toggleClass("down-play");

        if (playing == false) {
            document.getElementById('player-audio').play();
            playing = true;
            $(this).html("<i class='fas fa-pause'></i>");

        } else {
            document.getElementById('player-audio').pause();
            playing = false;
            $(this).html("<i class='fas fa-play'></i>");
        }


    });
});

