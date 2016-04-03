;(function($) {
  $(document).ready(function() {
    $('.project p').hide();

    $('.project h3').on('click', function() {
      $('.project p').slideUp(300);
      $(this).next().slideDown(300);
    });
  });
})(jQuery);
