export default () => {
$(document).ready(function () {
  $('.reviews__slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1220,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          speed: 600,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      }
    ]
  });
});


  $(document).ready(function () {

  var toggleFormBtn = $('.toggle-form-btn');
  var reviewsBottom = $('.reviews__bottom');
  var reviewsCta = $('.reviews-cta');
  var reviewsInputsWrap = $('.reviews-form__field-wrap');
  var inputFile = $('.input-file');
  var labelFile = $('.reviews-form__file');
  var reviewsInput = $('.reviews-input');
  var reviewsInputText = $('.reviews-input-text');
  var reviewsInputTextarea = $('.reviews-form__textarea');
  var reviewsInputTextareaJS = document.querySelector('.reviews-form__textarea');
  var reviewsInputName = $('.reviews-form__input-name');
  var reviewsPopup = $('.reviews-popup');
  var fileText = $('.reviews-form__file-text');
  var fileImg = $('.reviews-form__file-img img');
  var fileIcon = $('.reviews-form__checkmark-icon');
  var fileFlag = true;

  reviewsInputTextareaJS.value = '';
  reviewsInputTextarea.on('input', function () {
    if ($(this).val().trim().length > 0) {
      $(this).addClass('o-auto');
    } else {
      $(this).removeClass('o-auto');
    }
  });
  inputFile.change(function (e) {
    if (inputFile.val() && fileFlag) {
      fileText.html('Фото загружено!');
      fileImg.hide();
      fileIcon.show();
      labelFile.addClass('rloaded');
      fileFlag = false;
    }
  });
  reviewsInputText.on('input', function () {
    var that = this;
    setTimeout(function () {
      var res = /[^a-zA-Zа-яА-ЯїЇєЄіІёЁ ]/g.exec(that.value);
      that.value = that.value.replace(res, '');

      if (that.value.replace(res, '').length === 0) {
        that.parentElement.classList.add('invalid');
        that.parentElement.classList.remove('valid');
      } else {
        that.parentElement.classList.remove('invalid');
        that.parentElement.classList.add('valid');
      }
    }, 0);
  });
  reviewsInputTextareaJS.addEventListener('input', function () {
    var that = this;
    if (that.value.length === 0) {
      that.parentElement.classList.add('invalid');
      that.parentElement.classList.remove('valid');
    } else {
      that.parentElement.classList.remove('invalid');
      that.parentElement.classList.add('valid');
    }
  });
  inputFile.click(function () {
    if (!fileFlag) {
      return false;
    }
  });

  toggleFormBtn.on('click', function () {
    toggleFormBtn.hide();
    reviewsCta.show();
  });

  $('.reviews-form').submit(function () {
    if (reviewsInputTextarea.val().length !== 0 && reviewsInputName.val().length !== 0) {
      reviewsCta.hide();
      toggleFormBtn.show();
      reviewsPopup.fadeIn();
      event.preventDefault();
      setTimeout(function () {
        reviewsPopup.fadeOut();
      }, 2000);
      fileFlag = true;
      reviewsInput.val('');
      fileText.html('Загрузить ваше фото');
      $('.feedback__star').removeClass('hover');
      $('.feedback__star').removeClass('selected');
      fileImg.show();
      fileIcon.hide();
      labelFile.removeClass('rloaded');
      reviewsInputsWrap.removeClass('invalid');
      reviewsInputsWrap.removeClass('valid');
      $('.reviews-form__star').removeClass('filled');

    } else {
      reviewsInputsWrap.each(function (i) {
        if (!reviewsInputsWrap[i].classList.contains('valid')) {
          reviewsInputsWrap[i].classList.add('invalid');
        }
      });
      event.preventDefault();
    }
  });
});

var starE = $('.feedback__star'),
          stars = document.querySelectorAll('.feedback__star'); //  Stars on mouse over

      starE.on('mouseover', function (e) {
        var onStar = parseInt($(e.target).data('value'), 10);

        for (var i = 0; i < stars.length; i++) {
          $(stars[i]).removeClass('hover');
        }

        for (var _i = 0; _i < onStar; _i++) {
          $(stars[_i]).addClass('hover');
        }
      }).on('mouseout', function () {
        for (var i = 0; i < stars.length; i++) {
          $(stars[i]).removeClass('hover');
        }
      }); //  Stars on click

      starE.on('click', function (e) {
        var onStar = parseInt($(e.target).data('value'), 10);

        for (var i = 0; i < stars.length; i++) {
          $(stars[i]).removeClass('selected');
        }

        for (var _i2 = 0; _i2 < onStar; _i2++) {
          $(stars[_i2]).addClass('selected');
        }
      });
    };
