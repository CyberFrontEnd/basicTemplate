$(document).ready(function () {
  $('.input-container input').each(function () {
    $(this).on('focus blur', function (e) {
      $(this).siblings('label').toggleClass('active', e.type === 'focus' || this.value.length > 0);
    }).trigger('blur'); // Trigger blur to handle pre-filled inputs
  });
});