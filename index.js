AOS.init();

  var text = "We're not just adopting AI, we're shaping what AI makes possible.";
    let i = 0;
    const speed = 50;
    function typeWriter() {
      if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    
    // Only run typewriter effect on larger screens
    if (window.innerWidth > 800) {
      typeWriter();
    } else {
      document.getElementById("typewriter").innerHTML = text;
    }

   
    //tools
     // Add animation on scroll
     document.addEventListener('DOMContentLoaded', () => {
        const toolCards = document.querySelectorAll('.tool-card');
        
        toolCards.forEach((card, index) => {
            // Add delay based on index for staggered animation
            card.style.animationDelay = `${index * 0.1}s`;
            
            // Add pulse effect on hover
            card.addEventListener('mouseenter', () => {
                card.style.boxShadow = '0 0 20px rgba(0, 162, 255, 0.7)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.boxShadow = '0 10px 25px rgba(0, 98, 255, 0.3)';
            });
        });
        
        // Add ripple effect to cards
        toolCards.forEach(card => {
            card.addEventListener('click', function(e) {
                const x = e.clientX - e.target.getBoundingClientRect().left;
                const y = e.clientY - e.target.getBoundingClientRect().top;
                
                const ripple = document.createElement('span');
                ripple.classList.add('ripple');
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 1000);
            });
        });
    });
    //nav
    // Add this JavaScript to handle the mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  });

  const upBtn = document.getElementById("upBtn");

// Show button when user scrolls down 100px
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
};

// Scroll to top smoothly
upBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
