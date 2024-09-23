// Navbar Script

let mobNav = document.getElementById("mob-nav");
let ham = document.getElementById("ham");
let close = document.getElementById("close");

ham.addEventListener("click", () => {
  if (mobNav.style.right === "0px") {
    mobNav.style.right = "-481px";
  } else {
    mobNav.style.right = "0px";
  }
});

close.addEventListener("click", closeNav);

function closeNav() {
  mobNav.style.right = "-481px";
}

// bg video Script

let video = document.getElementById("hero-video");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    video.pause();
  } else {
    video.play();
  }
});

let year = (document.getElementById("year").textContent =
  new Date().getFullYear());

function sendWhatsAppMessage() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("msg").value;

  if (!firstName && !email && !phone) alert("Fill all the required fields");
  else {
    const whatsappNumber = "+919141878023";
    const url = `https://wa.me/${whatsappNumber}?text=Name:%20${firstName}%20${lastName}%0AEmail:%20${email}%0APhone:%20${phone}%0AMessage:%20${message}`;

    window.open(url, "_blank");
  }
}

document.getElementById("phoneButton").addEventListener("click", () => {
  const phoneNumber = "9141878023";
  window.location.href = `tel:${phoneNumber}`;
});

// Loader Script

// window.addEventListener("load", () => {
//   setTimeout(() => {
//     document.querySelector(".loader-container").style.display = "none";
//     document.body.style.overflow = "auto";
//   }, 500);
// });


window.addEventListener("load", () => {
  // Hide loader after 500ms
  setTimeout(() => {
    document.querySelector(".loader-container").style.display = "none";
    document.body.style.overflow = "auto";  // Enable scroll after loader disappears

    // Show the popup after loader disappears
    document.getElementById("popup").style.display = "block";  // Show popup
    document.body.style.overflow = "hidden";  // Disable scroll when popup is visible
  }, 500);

  // Automatically close the popup after 5 seconds
  setTimeout(() => {
    document.getElementById("popup").style.display = "none";
    document.body.style.overflow = "auto";  // Re-enable scrolling after popup closes
  }, 5500); // 500ms (loader time) + 5000ms (popup display time)

  // Close popup when close button is clicked
  document.querySelector('.close-btn').onclick = function() {
    document.getElementById("popup").style.display = "none";
    document.body.style.overflow = "auto";  // Re-enable scrolling after popup is manually closed
  };
});
