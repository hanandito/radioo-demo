// Page
  $(document).ready(function() {
    AOS.init({
      duration: 1200
    });
    $('nav .burger').click(function() {
      $('.sideNav').addClass("active");
    })
    $('.closeSideNav').click(function() {
      $('.sideNav').removeClass("active");
    })
    $('.menu-icon').click(function() {
      $('.side-menu').addClass("active");
    })
    $('.close-menu-icon').click(function() {
      $('.side-menu').removeClass("active");
    })
  });

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

 function fetchCFI() {
    fetch('https://zenoplay.zenomedia.com/api/zenofm/nowplaying/ev290deb2c9uv')
      .then(response => {
        if (!response.ok) {
          throw Error('ERROR');
        }
        return response.json();
      })
      .then(dataWrapCFI => {
        console.log(dataWrapCFI);

        // ============ Display Indonesia Covid 19 Cases 1 ============
        const getDataCFI1 = dataWrapCFI;
        const displayDataCFI1 = `${getDataCFI1.title}`;
        document.querySelector('#iCFI1').insertAdjacentHTML('afterbegin', displayDataCFI1);
        
      })
      .catch(error => {
        console.log(error);
      });
  }
  fetchCFI();