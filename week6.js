// ======================
// 🎉 Part 1: Event Handling
// ======================

// Click event: show hidden message
document.getElementById("showMsgBtn").addEventListener("click", function () {
  const msg = document.getElementById("message");
  msg.style.display = "block";
});

// Mouseover event: change button color temporarily
document.getElementById("showMsgBtn").addEventListener("mouseover", function () {
  this.style.backgroundColor = "lightgreen";
});
document.getElementById("showMsgBtn").addEventListener("mouseout", function () {
  this.style.backgroundColor = "";
});


// ======================
// 🎮 Part 2: Interactive Elements
// ======================

// Feature 1: Light/Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Feature 2: Counter Game
let counter = 0;
document.getElementById("increaseBtn").addEventListener("click", function () {
  counter++;
  document.getElementById("counterValue").textContent = "Counter: " + counter;
});
document.getElementById("decreaseBtn").addEventListener("click", function () {
  counter--;
  document.getElementById("counterValue").textContent = "Counter: " + counter;
});


// ======================
// 📋✅ Part 3: Form Validation
// ======================

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop form from refreshing the page

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let feedback = document.getElementById("formFeedback");

  let errors = [];

  // Validate name (not empty)
  if (name.length < 2) {
    errors.push("Name must be at least 2 characters long.");
  }

  // Validate email with regex
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    errors.push("Please enter a valid email address.");
  }

  // Validate password (minimum 6 chars)
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  // Show results
  if (errors.length > 0) {
    feedback.style.color = "red";
    feedback.innerHTML = errors.join("<br>");
  } else {
    feedback.style.color = "green";
    feedback.innerHTML = "✅ Registration successful!";
  }
});
