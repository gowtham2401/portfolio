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

  // Get references to the hamburger icon and the nav links
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Add a click event listener to the hamburger icon
hamburger.addEventListener('click', () => {
  // Toggle the "active" class on the nav-links to show or hide them
  navLinks.classList.toggle('active');
});

//scroll
document.addEventListener('scroll', function() {
  const scrollButton = document.querySelector('.scroll-to-top');
  if (window.pageYOffset > 100) { // Show the button after scrolling down 100px
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