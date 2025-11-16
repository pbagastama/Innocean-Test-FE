$(function () {
  // Smooth scroll for elements with .js-scroll
  $('.js-scroll').on('click', function (e) {
    e.preventDefault();

    var target = $(this).data('target') || $(this).attr('href');

    if (!target) return;

    var $el = target === 'body' ? $('body, html') : $(target);

    if ($el.length) {
      $('html, body').animate(
        {
          scrollTop: $el.offset().top - 70,
        },
        600
      );
    }
  });

  // Contact form fake submit handler
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();

    var $form = $(this);
    var name = $.trim($form.find('#name').val());
    var email = $.trim($form.find('#email').val());
    var message = $.trim($form.find('#message').val());

    $('#contactSuccess').addClass('d-none');
    $('#contactError').addClass('d-none');

    if (!name || !email || !message) {
      $('#contactError')
        .removeClass('d-none')
        .text('Please fill in all required fields.');
      return;
    }

    // Simulasi submit sukses
    $('#contactSuccess')
      .removeClass('d-none')
      .text('Thank you! Your submission has been received.');

    $form[0].reset();
  });
});
