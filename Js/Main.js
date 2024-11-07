// Modern Loading Animation Handler
document.addEventListener('DOMContentLoaded', function() {
    const loadingContainer = document.getElementById('loading-container');
    const dots = document.querySelector('.dots');
    let dotCount = 0;

    // Animate loading dots
    const animateDots = setInterval(() => {
        dotCount = (dotCount + 1) % 4;
        dots.textContent = '.'.repeat(dotCount);
    }, 500);

    // Hide loading animation after content loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            clearInterval(animateDots);
            loadingContainer.classList.add('loading-hidden');
            setTimeout(() => {
                loadingContainer.style.display = 'none';
            }, 800);
        }, 1500);
    });

    // Fallback: Hide loader after timeout
    setTimeout(() => {
        if (loadingContainer.style.display !== 'none') {
            clearInterval(animateDots);
            loadingContainer.classList.add('loading-hidden');
            setTimeout(() => {
                loadingContainer.style.display = 'none';
            }, 800);
        }
    }, 5000);
});




// Close the navbar on clicking outside or on a link
document.addEventListener('click', function (event) {
    const navbar = document.querySelector('.navbar-collapse');
    const isClickInside = navbar.contains(event.target) || event.target.classList.contains('navbar-toggler');
    
    if (!isClickInside && navbar.classList.contains('show')) {
        // If clicked outside, collapse the menu
        bootstrap.Collapse.getInstance(navbar).hide();
    }
});

// Close the menu on link click
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar-collapse');
        if (navbar.classList.contains('show')) {
            bootstrap.Collapse.getInstance(navbar).hide();
        }
    });
});



// navbar home active animation
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelector('.navbar-nav .nav-link.active')?.classList.remove('active');
        this.classList.add('active');
    });
});



//Skills %
document.addEventListener("DOMContentLoaded", function () {
    const skillCards = document.querySelectorAll(".skill-card");

    skillCards.forEach(card => {
        const percent = card.getAttribute("data-percent");
        const circularProgress = card.querySelector(".circular-progress");

        // Set the --percent CSS variable based on the data-percent attribute
        circularProgress.style.setProperty("--percent", percent);
    });
});



//Mouse Scrolling Active
// Select all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Function to remove 'active' class from all links
function removeActiveClass() {
    navLinks.forEach(link => link.classList.remove('active'));
}

// Function to add 'active' class to the relevant link
function addActiveClass() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50; // adjust offset if needed
        const sectionHeight = section.offsetHeight;
        const scrollPos = window.scrollY;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            removeActiveClass();
            document.querySelector(`a[href="#${section.id}"]`).classList.add('active');
        }
    });
}

// Call addActiveClass on scroll
window.addEventListener('scroll', addActiveClass);


// Function to open the modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

// Function to close the modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modal when clicking outside of modal-content
window.onclick = function(event) {
    const projectModal = document.getElementById("projectModal");
    const certificateModal1 = document.getElementById("certificateModal1");
    const certificateModal2 = document.getElementById("certificateModal2");
    const certificateModal3 = document.getElementById("certificateModal3");
    if (event.target === projectModal) {
        closeModal("projectModal");
    } if (event.target === projectModal1) {
        closeModal("projectModal1");
    } if (event.target === projectModal2) {
        closeModal("projectModal2");
    } if (event.target === projectModal3) {
        closeModal("projectModal3");
    } if (event.target === projectModal4) {
        closeModal("projectModal4");
    } if (event.target === projectModal5) {
        closeModal("projectModal5");
    } else if (event.target === certificateModal1) {
        closeModal("certificateModal1");
    } else if (event.target === certificateModal2) {
        closeModal("certificateModal2");
    } else if (event.target === certificateModal3) {
        closeModal("certificateModal3");
    }
};


//CV download
function openCv() {
    window.open('Assets/Tharuka New CV 2024.pdf', '_blank');
}



window.onload = function() {
    const nameElement = document.getElementById('nameElement');
    nameElement.classList.add('fade-in'); // Add fade-in class for effect

    const dynamicText = document.getElementById('dynamicText'); // Get the dynamic text element
    const textLines = [
        "Web Developer |", // First line
        "Web Designer |", // Second line
        ",Crafting the Future of the Web..." // Third line
    ];
    
    let index = 0; // Current index of the character in the line
    let currentLine = 0; // Track which line is being typed
    let isDeleting = false; // Track whether we're deleting text or typing

    // Typing effect function
    function typeEffect() {
        const fullText = textLines[currentLine]; // Get the current line to type

        if (!isDeleting && index < fullText.length) {
            // Typing effect
            dynamicText.textContent += fullText.charAt(index);
            index++;
            setTimeout(typeEffect, 60); // Typing speed
        } else if (isDeleting && index > 0) {
            // Deleting effect
            dynamicText.textContent = fullText.substring(0, index - 1);
            index--;
            setTimeout(typeEffect, 50); // Deleting speed
        } else {
            // Pause before switching to typing or deleting
            setTimeout(() => {
                isDeleting = !isDeleting; // Switch between typing and deleting
                if (!isDeleting) {
                    // Move to the next line when deleting is complete
                    currentLine = (currentLine + 1) % textLines.length;
                }
                typeEffect(); // Start typing or deleting again
            }, 1000); // Pause time between typing and deleting
        }
    }

    // Start the typing effect after a slight delay for the fade-in
    setTimeout(() => {
        dynamicText.style.opacity = 1; // Make dynamic text visible
        typeEffect(); // Start the typing effect
    }, 2000); // Delay for the fade-in effect of the name
};



// Initialize EmailJS with your User ID
  emailjs.init("CFM5E0Bf8yzRk_3Md");

  // Function to handle form submission
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Send form data via EmailJS
    emailjs.sendForm("2003TS24pp", "template_nrpfzhs", this)
      .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!"); // Success notification
      }, function(error) {
        console.error("FAILED...", error);
        alert("Oops! Something went wrong."); // Error notification
      });
  });
