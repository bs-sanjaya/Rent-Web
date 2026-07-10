/*Mobile hamburger*/
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-links');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}


function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-text').textContent = message;
    toast.classList.add('show');

    setTimeout(function() {
        toast.classList.remove('show');
    }, 3500);
}

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  let valid = true;

  this.querySelectorAll('[required]').forEach(function (input) {
    if (input.value.trim() === '') {
      input.closest('.field').classList.add('invalid');
      valid = false;
    } else {
      input.closest('.field').classList.remove('invalid');
    }
  });

  if (valid) {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        showToast('Thank you! Your message has been sent.');
    });
}
}});

document.getElementById('booking-form').addEventListener('submit', function (e) {
  e.preventDefault();
  let valid = true;

  this.querySelectorAll('[required]').forEach(function (input) {
    if (input.value.trim() === '') {
      input.closest('.field').classList.add('invalid');
      valid = false;
    } else {
      input.closest('.field').classList.remove('invalid');
    }
  });

  if (valid) {
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        showToast('Booking Successful!. We will contact you soon to confirm your reservation.');
    });
}

  }
});
