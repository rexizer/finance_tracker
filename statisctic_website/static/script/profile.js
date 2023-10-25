window.onload = function() {
  animateProfile();
}

function animateProfile() {
  var profile = document.querySelector('.profile');

  profile.style.opacity = 0;
  profile.style.transform = 'translateY(50px)';
  profile.style.transition = 'opacity 1s, transform 1s';

  setTimeout(function() {
    profile.style.opacity = 1;
    profile.style.transform = 'translateY(0)';
  }, 500);
}