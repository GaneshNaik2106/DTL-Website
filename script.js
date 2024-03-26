// Sample data for levels (can be replaced with actual data from backend)
const levels = [
    { name: "Level 1: Introduction to Optical Fibres", description: "In this module, you will get an introduction to optical fibres." },
    { name: "Level 2: Working of Optical Fibres", description: "In this level, you'll learn about the math of Optic Fibers and the very core principles of its working." },
    { name: "Level 3: Types of Optical Fibres", description: "In this level, you will explore the various types of optical fibres." },
    { name: "Level 4: Application of Optical fibres", description: "This level dives deeper into the applications of fibre optics." }
  ];
  
  // Function to dynamically generate level sections
  function generateLevels() {
    const levelsSection = document.getElementById("levels");
    levels.forEach((level, index) => {
      const levelSection = document.createElement("section");
      levelSection.classList.add("level");
      levelSection.innerHTML = `
        <h2>${level.name}</h2>
        <p>${level.description}</p>
        <button class="start-button" data-level="${index}">Start Level</button>
      `;
      levelsSection.appendChild(levelSection);
    });
  }
  
  // Function to start level
  function startLevel(levelIndex) {
    // Perform actions to start the level
    //alert(`Starting level ${levelIndex + 1}: ${levels[levelIndex].name}`);
    window.location.href = `level${levelIndex + 1}.html`;
  }
  
  // Generate levels on page load
  document.addEventListener("DOMContentLoaded", () => {
    generateLevels();
  
    // Add event listener to start buttons
    const startButtons = document.querySelectorAll(".start-button");
    startButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        startLevel(index);
      });
    });
  });
  