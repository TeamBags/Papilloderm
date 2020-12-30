export default () => {
  function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  var counter = 1;
  setInterval(function () {
    var randNum = randomInteger(27, 47);

    if (counter == 1) {
      $(".form__visitors p")
        .fadeOut(1100, function () {
          $(this).html('<span class="text-red text-bold">116</span> продаж за последний час');
        })
        .fadeIn();
      counter = 0;
    } else {
      $(".form__visitors p")
        .fadeOut(1100, function () {
          $(this).html('Сейчас на сайте <span class="text-red text-bold">' + randNum + '</span> человек');
        })
        .fadeIn();
      counter = 1;
    }
  }, 6000);

};
