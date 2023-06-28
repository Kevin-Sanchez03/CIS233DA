// necessary DOM elements
const navLinks = document.querySelectorAll(".navObj");
const citySelect = document.getElementById("city-select");
const cityContainers = document.querySelectorAll(".main-container");

//event listeners to navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    // target city ID from the clicked link's ID
    const targetCity = link.id.slice(3); // Remove 'obj' from the ID

    // Show the target city's container and hide others
    cityContainers.forEach((container) => {
      if (container.id === targetCity) {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      }
    });
  });
});

// event listener to city select dropdown
citySelect.addEventListener("change", (event) => {
  // Get the selected city value
  const selectedCity = event.target.value;

  // Show the selected city's container and hide others
  cityContainers.forEach((container) => {
    if (container.id === selectedCity) {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  });
});
