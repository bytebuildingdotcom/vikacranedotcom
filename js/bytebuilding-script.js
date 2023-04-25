function sendContactEmail() {
  var name = document.getElementById('bb-contact-name');
  var subject = document.getElementById('bb-contact-subject');
  var message = document.getElementById('bb-contact-message');

  var email = 'bytebuilding@gmail.com';

   message.value = message.value + '%0D%0A%0D%0A' + ',' + name.value;

  window.open('mailto:'+email+'?subject='+subject.value+'&body='+message.value);

  document.getElementById('bb-contact-name').value = '';
  document.getElementById('bb-contact-email').value = '';
  document.getElementById('bb-contact-subject').value = '';
  document.getElementById('bb-contact-message').value = '';
}