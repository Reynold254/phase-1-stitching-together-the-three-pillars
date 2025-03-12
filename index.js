// Define testVar so the test recognizes it
const testVar = {};

// Export testVar properly for Node.js test environments (Mocha)
if (typeof module !== "undefined" && module.exports) {
  module.exports = testVar;
}

// Step 1: Select all heart elements
const articleHearts = document.querySelectorAll(".like-glyph");

// Step 2: Mock server function
function mimicServerCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a random failure (20% chance)
      Math.random() < 0.2 ? reject("Server Error") : resolve("Success");
    }, 300);
  });
}

// Step 3: Add event listeners to each heart element
articleHearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        // Toggle between empty and full heart
        if (heart.innerText === "♡") {
          heart.innerText = "♥";
          heart.style.color = "red";
        } else {
          heart.innerText = "♡";
          heart.style.color = "black";
        }
      })
      .catch((error) => {
        alert(error); // Notify user of server failure
      });
  });
});
