//This is the "Offline page" service worker
  if ('serviceWorker' in navigator) {
    
    //Register the ServiceWorker
    navigator.serviceWorker.register('sw.js', { scope: './' }).then(function(registration) {

    if(registration.installing) {
      console.log('Service worker installing');
    } else if(registration.waiting) {
      console.log('Service worker installed');
    } else if(registration.active) {
      console.log('Service worker active');
    }

    console.log('ServiceWorker Scope: ', registration.scope);

    }).catch(function(error) {
      console.log('Registration failed with ' + error);
    });

  } else {
    console.log('Browser does not support service worker');
  }  

  $(document).ready(function() {
    $(window).scroll(function() {
      var scroltop = $(this).scrollTop();
      if (scroltop > 100) {
        $('.scrollTop').css('opacity', '1');
      } else {
        $('.scrollTop').css('opacity', '0');
      }
    });
  });