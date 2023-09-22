// Get all the navigation links
const links = document.querySelectorAll('.nav-link');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Loop through each section
  document.querySelectorAll('section').forEach((section, index) => {
    // Get the offset top position of the section
    const sectionTop = section.offsetTop - 50; // Adjust for any fixed header

    // Determine the height of the section
    const sectionHeight = section.clientHeight;

    // Check if the current scroll position is within the section
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Add the 'active' class to the corresponding link
      links[index].classList.add('active');
    } else {
      // Remove the 'active' class from other links
      links[index].classList.remove('active');
    }
  });
});
