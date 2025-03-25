document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      document.getElementById('formStatus').innerHTML = "Thank you for your message!";
      document.getElementById('formStatus').style.color = 'green';
      document.getElementById('contactForm').reset();
    } else {
      document.getElementById('formStatus').innerHTML = "Please fill in all fields.";
      document.getElementById('formStatus').style.color = 'red';
    }
  });

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {

  navLinks.classList.toggle('active');
});

document.addEventListener('scroll', function() {
  const scrollButton = document.querySelector('.scroll-to-top');
  if (window.pageYOffset > 100) { 
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
});

// Smooth scrolling to top
document.querySelector('.scroll-to-top').addEventListener('click', function(event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});