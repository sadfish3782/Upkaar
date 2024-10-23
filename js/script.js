document.querySelectorAll('#offcanvasNavbar .nav-link').forEach(link => {
  link.addEventListener('click', function () {
    var offcanvasElement = document.querySelector('#offcanvasNavbar');
    var offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
    offcanvasInstance.hide();
  });
});
(function($) {
  "use strict";

  $(document).ready(function() {
    
    // Masonry
    initIsotope();

    // Lightbox
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'fitImagesInViewport': true
    });
    
    // Swiper
    var testimonialSwiper = new Swiper(".testimonial-swiper", {
      spaceBetween: 20,
      pagination: {
        el: ".testimonial-swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        800: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        }
      },
    });

  }); // End of document ready

  // Init Isotope
  var initIsotope = function() {
    $('.grid').each(function() {
      var $buttonGroup = $('.button-group');
      var $checked = $buttonGroup.find('.is-checked');
      var filterValue = $checked.attr('data-filter');

      var $grid = $('.grid').isotope({
        itemSelector: '.portfolio-item',
        filter: filterValue
      });

      // Bind filter button click
      $('.button-group').on('click', 'a', function(e) {
        e.preventDefault();
        filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });

      // Change is-checked class on buttons
      $buttonGroup.on('click', 'a', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
      });
    });
  }
})(jQuery);
