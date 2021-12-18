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
    fetch('https://pass-prox.herokuapp.com/https://data.covid19.go.id/public/api/update.json')
      .then(response => {
        if (!response.ok) {
          throw Error('ERROR');
        }
        return response.json();
      })
      .then(dataWrapCFI => {
        console.log(dataWrapCFI);

        // ============ Display Indonesia Covid 19 Cases 1 ============
        const getDataCFI1 = dataWrapCFI.update.harian[0];
        const displayDataCFI1 = `${getDataCFI1.jumlah_positif_kum.value}`;
        document.querySelector('#iCFI1').insertAdjacentHTML('afterbegin', displayDataCFI1);
        
        // ============ Display Indonesia Covid 19 Cases 2 ============
        const getDataCFI2 = dataWrapCFI.update.harian[18];
        const displayDataCFI2 = `${getDataCFI2.jumlah_positif_kum.value}`;
        document.querySelector('#iCFI2').insertAdjacentHTML('afterbegin', displayDataCFI2);
        
        // ============ Display Indonesia Covid 19 Cases 3 ============
        const getDataCFI3 = dataWrapCFI.update.harian[44];
        const displayDataCFI3 = `${getDataCFI3.jumlah_positif_kum.value}`;
        document.querySelector('#iCFI3').insertAdjacentHTML('afterbegin', displayDataCFI3);
        
        // ============ Display Indonesia Covid 19 Cases 4 ============
        const getDataCFI4 = dataWrapCFI.update;
        const displayDataCFI4 = `${getDataCFI4.total.jumlah_positif}`;
        document.querySelector('#iCFI4').insertAdjacentHTML('afterbegin', displayDataCFI4);
      })
      .catch(error => {
        console.log(error);
      });
  }
  fetchCFI();