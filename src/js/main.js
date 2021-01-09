import './helpers/postDate';
import scrollSmooth from './helpers/smooth-scroll.js';
import banner from './modules/banner';
import header from './modules/header';
import reviews from './modules/reviews.js';
import promo from './modules/promo';

function main() {
  promo();
  scrollSmooth();
  banner();
  header();
  reviews();
}

if (document.documentElement.clientWidth < 480) {
  window.addEventListener('scroll',
    function () {
      return setTimeout(main, 1000);
    }, {
      once: true
    });
} else {
  main();
};
