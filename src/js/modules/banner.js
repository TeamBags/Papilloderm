export default () => {
  let flag = false;

  $('.js-scroll').on('click', function () {
    const bannerScroll = $('.banner');
    flag = true;
    bannerScroll.fadeIn();
    setTimeout(function () {
      flag = false;
    }, 1000);
  });

  $(window).on("scroll resize", function () {
    if (flag === false) {
      hideBannerScroll('.x_order_form', '.footer', '.deliver');
    }
  });

  function hideBannerScroll() {
    const bannerScroll = $('.banner'),
      bannerDelivery = $('.main-banner'),
      dT = $(window).scrollTop(),
      dB = dT + $(window).height(),
      dW = $(window).width();
    let cnt = 0;

    for (let iArr = 0; iArr < arguments.length; iArr++) {
      $(arguments[iArr]).each(function (i, hi) {
        let eT = $(hi).offset().top,
          eB = eT + $(hi).outerHeight(),
          eL = $(hi).offset().left,
          eR = eL + $(hi).width();
        if ((eT <= dB) && (eB >= dT) && (eL <= dW) && (eR >= 0)) {
          cnt += +1
        }
      });
    }
    if (dT <= 100 || cnt > 0) {
      bannerScroll.fadeOut();
    } else {
      bannerScroll.fadeIn().css({
        'bottom': bannerDelivery.outerHeight()
      });
    }
  };
};

// var timeout = false;

// $(window).on("scroll resize", function () {
//   if (timeout !== false) {
//     clearTimeout(timeout);
//   }

//   timeout = setTimeout(function () {
//     hideBannerScroll('.x_order_form', '.footer', '.delivery');
//   }, 100);
// });

// function hideBannerScroll() {
//   var bannerScroll = $('.banner'),
//     bannerDelivery = $('.main-banner'),
//     dT = $(window).scrollTop(),
//     dB = dT + $(window).height(),
//     dW = $(window).width();
//   let cnt = 0;

//   for (let iArr = 0; iArr < arguments.length; iArr++) {
//     $(arguments[iArr]).each(function (i, hi) {
//       let eT = $(hi).offset().top,
//         eB = eT + $(hi).outerHeight(),
//         eL = $(hi).offset().left,
//         eR = eL + $(hi).width();

//       if ((eT <= dB) && (eB >= dT) && (eL <= dW) && (eR >= 0)) {
//         cnt += +1;
//       }
//     });
//   }
//   if (dT <= 100 || cnt) {
//     bannerScroll.fadeOut();
//   } else {
//     bannerScroll.fadeIn().css({
//       'bottom': bannerDelivery.outerHeight()
//     });
//   }
// }