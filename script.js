// about page

let navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}

function openPopup() {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("thankYouMessage").style.display = "none";
  document.getElementById("inquiryForm").reset();
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function submitForm(event) {
  event.preventDefault(); // form reload na ho
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // Basic validation (already handled by 'required' in HTML)
  if (email && phone) {
    document.getElementById("inquiryForm").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";
  }
}
