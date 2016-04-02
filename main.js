;(function($) {
  $(document).ready(function() {
    $('.project a').on('click', function(e) {
      $(this).parent().next().slideDown(500);
    });
  });
})(jQuery);
