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
    prevArrow:
      '<svg class="arrow-left" xmlns="http://www.w3.org/2000/svg" width="17" height="29" viewBox="0 0 17 29"><defs><linearGradient id="sppxa" x1="17.02" x2=".02" y1="15.01" y2="14.01" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#12a89e"/><stop offset="1" stop-color="#86bf40"/></linearGradient></defs><g><g ><path  d="M13.216 28.374L.666 16.05a2.15 2.15 0 0 1 0-3.08L13.216.647a2.246 2.246 0 0 1 3.138 0 2.15 2.15 0 0 1 0 3.08L5.372 14.51l10.982 10.783a2.15 2.15 0 0 1 0 3.08 2.25 2.25 0 0 1-3.138 0z"/><path  d="M13.216 28.374L.666 16.05a2.15 2.15 0 0 1 0-3.08L13.216.647a2.246 2.246 0 0 1 3.138 0 2.15 2.15 0 0 1 0 3.08L5.372 14.51l10.982 10.783a2.15 2.15 0 0 1 0 3.08 2.25 2.25 0 0 1-3.138 0z"/><path  d="M13.216 28.374L.666 16.05a2.15 2.15 0 0 1 0-3.08L13.216.647a2.246 2.246 0 0 1 3.138 0 2.15 2.15 0 0 1 0 3.08L5.372 14.51l10.982 10.783a2.15 2.15 0 0 1 0 3.08 2.25 2.25 0 0 1-3.138 0z"/></g></g></svg>',
    nextArrow:
      '<svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" width="17" height="29" viewBox="0 0 17 29"><g><g><path  d="M3.79.62l12.57 12.32c.002 0 .003.002.004.003.868.85.868 2.23 0 3.08L3.791 28.347a2.258 2.258 0 0 1-3.144 0 2.149 2.149 0 0 1 0-3.082L11.65 14.483.647 3.7a2.147 2.147 0 0 1 0-3.08 2.252 2.252 0 0 1 3.144 0z"/></g></g></svg>',
    responsive: [
      {
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
          adaptiveHeight: true
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
	
	$( ".reviews__btn" ).click(function() {
		$('.think').addClass('active-feed');
		$(this).removeClass('active-feed');
	});
	$('.think__btn').click(function (event) {
    let iName = $(".name__input").val();
    let iSname = $(".age__input").val();
    let iCity = $(".city__input").val();
    let iMassage = $(".inputText").val();
    if (iName == "" || iSname == "" || iCity == "" || iMassage == "") {
    } else {
			event.preventDefault();
			$('.feedback-modal').addClass('active-feed');
			setTimeout(function() {

			$('.feedback-modal').removeClass('active-feed');
			}, 3000);
			fileText.html('Загрузить ваше фото');
			labelFile.removeClass('rloaded');
			$('.think__input').val('');
			$('.inputText').val('');
			$('.think').removeClass('active-feed');
			$('.reviews-form__checkmark-icon').hide()
    }



});
};
