export default () => {
  $(".reviews-content").on("afterChange", function (
    event,
    slick,
    currentSlide
  ) {
    $(this)
      .find(".slick-slide.text-open")
      .not(".slick-active")
      .removeClass("text-open");
  });
  $(".reviews-text__btn").on("click", function () {
    this.parentElement.classList.toggle("text-open");
    $(".reviews-content").find(".slick-slide.slick-active").height("auto");
    $(".reviews-content").find(".slick-list").height("auto");
  });
  $(".reviews-content").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: true,
    prevArrow: '<svg class="slider-arrow arrow-left" xmlns="http://www.w3.org/2000/svg" width="34" height="28" viewBox="0 0 34 28"><g><g><path d="M.444 13.203L9.721.473a1.087 1.087 0 0 1 1.61 0 1.267 1.267 0 0 1 0 1.712L3.997 12.85h28.865c.628 0 1.138.539 1.138 1.208 0 .67-.51 1.212-1.138 1.212H3.997l7.333 10.662c.445.472.445 1.24 0 1.712a1.1 1.1 0 0 1-.804.355 1.1 1.1 0 0 1-.805-.355L.444 14.917a1.268 1.268 0 0 1 0-1.714z"/></g></g></svg>',
    nextArrow: '<svg class="slider-arrow arrow-right" xmlns="http://www.w3.org/2000/svg" width="34" height="28" viewBox="0 0 34 28"><g><g><path d="M33.686 13.154L24.373.386a1.092 1.092 0 0 0-1.616 0 1.268 1.268 0 0 0 0 1.716l7.362 10.699H1.143C.512 12.8 0 13.343 0 14.013c0 .672.512 1.216 1.143 1.216h28.976l-7.362 10.695a1.27 1.27 0 0 0 0 1.719c.223.236.516.355.808.355.293 0 .585-.119.808-.355l9.313-12.769a1.273 1.273 0 0 0 0-1.72z"/></g></g></svg>',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // adaptiveHeight: true
        },
      },
    ],
  });
  var inputFile = $(".input-file");
  var labelFile = $(".reviews-form__file");
  var fileText = $(".reviews-form__file-text");
  var fileImg = $(".reviews-form__file-img img");
  var fileIcon = $(".reviews-form__checkmark-icon");
  var fileFlag = true;
  inputFile.change(function (e) {
    if (inputFile.val() && fileFlag) {
      fileText.html("Фото загружено!");
      fileImg.hide();
      fileIcon.show();
      labelFile.addClass("rloaded");
      fileFlag = false;
    }
  });
  inputFile.click(function () {
    if (!fileFlag) {
      return false;
    }
  });

  $(".reviews__btn").click(function () {
    $('.think').addClass('active-feed');
    $(this).removeClass('active-feed');
  });

  $('.think__btn').click(function (event) {
    let iName = $(".name__input").val();
    let iSname = $(".age__input").val();
    let iCity = $(".city__input").val();
    let iMassage = $(".inputText").val();
    if (iName == "" || iSname == "" || iCity == "" || iMassage == "") {} else {
      event.preventDefault();
      $('.feedback-modal').addClass('active-feed');
      setTimeout(function () {
        $('.feedback-modal').hide();
        $('.reviews-content').css('margin-bottom', '0');
      }, 3000);
      fileText.html('Загрузить ваше фото');
      labelFile.removeClass('rloaded');
      $('.think__input').val('');
      $('.inputText').val('');
      $('.think').removeClass('active-feed');
      $('.reviews-form__checkmark-icon').hide()
    }
  });

  function addEmptyBtn() {
    const slides = document.querySelectorAll(".reviews-box");
    for (let i = 0; i < slides.length; i++) {
      const slidesBody = slides[i].querySelector(".reviews-text-body");
      const slidesItem = slides[i].querySelector(".reviews-text__item");
      if (slidesBody.offsetHeight > slidesItem.offsetHeight) {
        slides[i].classList.add("empty-box");
      } else {
        slides[i].classList.remove("empty-box");
      }
    }
  }
  addEmptyBtn();
  window.addEventListener('resize', addEmptyBtn);
};
