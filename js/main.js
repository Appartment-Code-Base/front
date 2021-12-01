$(document).ready(function () {
  $('.selectpicker').selectpicker();

  if ($('.advantage-mobile-slider').length > 0) {
    $('.advantage-mobile-slider').slick({
      arrows: true,
      focusOnSelect: true
    });
  }

  if ($('.solutions .slider-for').length > 0) {
    $('.solutions .slider-for').slick({
      slidesToShow: 1,
      arrows: false,
      slide: '.featured-slide',
      asNavFor: '.slider-nav',
      fade: true,
      autoplay: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: true,
            dots: true
          }
        }
      ]
    });

    $('.solutions .slider-nav').slick({
      slidesToShow: 4,
      slide: '.slide-link',
      asNavFor: '.slider-for',
      arrows: false,
      autoplay: false,
      dots: false,
      focusOnSelect: true
    });

    var static = 0;

    $('.solutions .slider-for').on('beforeChange', function () {
      var count = $('.slide-link').length - 1;
      static = (static == count) ? 0 : static + 1;
      $('.news .slider-nav').find('.slick-slide').removeClass('slick-current').not('.slick-cloned').eq(static).addClass('slick-current');
    });

    $('.solutions .slider-nav').on('click', '.slick-slide', function (e) {
      var $currTarget = $(e.currentTarget),
        index = $currTarget.data('slick-index'),
        slickObj = $('.slider-for').slick('getSlick');
      slickObj.slickGoTo(index);
    });

    $(".solutions .slider-nav .white-block").click(function () {
      $(".solutions .slider-nav .white-block").removeClass("active");
      $(this).addClass("active");
    });
  }

  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active");
    $('.menu').toggleClass("show");
    $('.navbar').toggleClass("gray-bg fixed");
  });

  $(".show-pass").click(function () {
    $(this).toggleClass("close-eye")
    let input = $(this).parent().find(".form-control");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('.replace-avatar').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    } else {
      alert('select a file to see preview');
      $('.replace-avatar').attr('src', '');
    }
  }

  $('.load-file').on('change', function () {
    readURL(this);
  });

  $('.shortcut').click(function () {
    $('.shortcut').addClass('btn-gray');
    $(this).removeClass('btn-gray');
    $('.textarea-label').find('textarea').val($(this).attr('data-text'));
  });

  $('.print').click(function () {
    window.print();
  });

  function checkForInput(element) {
    const $result = $(element).parents('.search-form').find('.search-result');
    if ($(element).val().length > 0) {
      $result.removeClass('d-none');
    } else {
      $result.addClass('d-none');
    }
  }

  var $input = $('.top-search .form-control');

  $input.each(function () {
    checkForInput(this);
  });

  $input.on('change keyup', function () {
    checkForInput(this);
  });
  $input.on('blur', function () {
    checkForInput(this);
  })

  $('.search-form .text').click(function () {
    const $text = $(this).text();
    $(this).parents('.search-form').find('.form-control').val($text);
    checkForInput(this);
  });

  $(".clickable-row").click(function () {
    window.location = $(this).data("href");
  });

  $('.selectAll').click(function (e) {
    $(this).closest('table').find('td input:checkbox').prop('checked', this.checked);
  });

  if ($('.datepicker').length > 0) {
    $('.datepicker').datepicker({
      autoclose: true,
      format: 'dd.mm.yyyy'
    });
  }

  $(".scrollTo").on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: ($(target).offset().top)
    }, 1000);
  });

  AOS.init();

  $('.add-new-tr').click(function () {
    $(this).parents('.modal-body').find('table tbody').append(
      '<tr>\n' +
      '                            <td>\n' +
      '                                <label class="check-button form-control-label">\n' +
      '                                    <input type="checkbox">\n' +
      '                                    <span class="checkmark"></span>\n' +
      '                                </label>\n' +
      '                            </td>\n' +
      '                            <td>Gelir Faturası</td>\n' +
      '                            <td><input type="text" class="form-control border-0 p-0" placeholder="Giriniz"></td>\n' +
      '                            <td>\n' +
      '                                <label class="date position-relative">\n' +
      '                                    <input type="text" class="form-control border-0 p-0 datepicker"\n' +
      '                                           data-date-format="dd.mm.yyyy" placeholder="Tarih Giriniz">\n' +
      '                                </label>\n' +
      '                            </td>\n' +
      '                            <td>112</td>\n' +
      '                            <td><input type="text" class="form-control border-0 p-0" placeholder="Seçiniz"></td>\n' +
      '                            <td><label class="form-control-label position-relative mb-0 w-100">\n' +
      '                                <select class="selectpicker form-control border-0" title="Seçiniz">\n' +
      '                                    <option>No</option>\n' +
      '                                    <option>Yes</option>\n' +
      '                                </select>\n' +
      '                            </label></td>\n' +
      '                            <td><label class="form-control-label position-relative mb-0 w-100">\n' +
      '                                <select class="selectpicker form-control border-0" title="Seçiniz">\n' +
      '                                    <option>No</option>\n' +
      '                                    <option>Yes</option>\n' +
      '                                </select>\n' +
      '                            </label></td>\n' +
      '                            <td>0.00 TL</td>\n' +
      '                            <td><input type="text" class="form-control border-0 p-0" placeholder="Ekle"></td>\n' +
      '                            <td>\n' +
      '                                <div class="nav-item mini-dropdown dropdown">\n' +
      '                                    <a class="nav-link mr-0 user dropdown-toggle"\n' +
      '                                       role="button"\n' +
      '                                       data-toggle="dropdown" aria-haspopup="true"\n' +
      '                                       aria-expanded="false">\n' +
      '                                        <i class="fas fa-ellipsis-h"></i>\n' +
      '                                    </a>\n' +
      '                                    <div class="dropdown-menu block bg-white">\n' +
      '                                        <div class="d-block">\n' +
      '                                            <a class="dropdown-item" href="#">\n' +
      '                                                <h4 class="mb-0">Borçlandır</h4>\n' +
      '                                            </a>\n' +
      '                                            <a class="dropdown-item" href="#">\n' +
      '                                                <h4 class="mb-0">Tahsil et</h4>\n' +
      '                                            </a>\n' +
      '                                            <a class="dropdown-item" href="#">\n' +
      '                                                <h4 class="mb-0">E-Posta Gönder</h4>\n' +
      '                                            </a>\n' +
      '                                            <a class="dropdown-item" href="#">\n' +
      '                                                <h4 class="mb-0">SMS Gönder</h4>\n' +
      '                                            </a>\n' +
      '                                            <a class="dropdown-item" href="#">\n' +
      '                                                <h4 class="mb-0 red">Sil</h4>\n' +
      '                                            </a>\n' +
      '                                        </div>\n' +
      '                                    </div>\n' +
      '                                </div>\n' +
      '                            </td>\n' +
      '                        </tr>'
    );


    $('.selectpicker').selectpicker();

  })
});