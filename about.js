// about.js
document.addEventListener('DOMContentLoaded', function() {
    // Page navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const exploreBtn = document.getElementById('explore-btn');
    
    // Set initial active page
    setActivePage('home');
    
    // Add click event listeners to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            setActivePage(page);
        });
    });
    
    // Explore button click handler
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            setActivePage('all-tools');
        });
    }
    
    // Function to set active page
    function setActivePage(pageId) {
        // Hide all pages
        pages.forEach(page => {
            page.classList.remove('active');
        });
        
        // Show selected page
        document.getElementById(pageId).classList.add('active');
        
        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            }
        });
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
});

// Add this script to handle mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuButton.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Close menu when a nav link is clicked (optional)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
});
