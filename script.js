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
    }, 3000);
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        showToast('Thank you! Your message has been sent.');
    });
}

const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        showToast('Booking Successful!. We will contact you soon to confirm your reservation.');
    });
}