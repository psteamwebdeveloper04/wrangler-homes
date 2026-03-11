// ============================================
// NAVIGATION MENU TOGGLE
// ============================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ============================================
// UPDATE ACTIVE NAV LINK
// ============================================
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage || 
            (currentPage === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Run on page load
document.addEventListener('DOMContentLoaded', updateActiveNavLink);

// ============================================
// SAMPLE PROPERTIES DATA
// ============================================
const properties = [
    {
        id: 1,
        title: 'Modern Downtown Apartment',
        price: '$450,000',
        location: 'Downtown',
        bedrooms: 2,
        bathrooms: 2,
        sqft: 1200
    },
    {
        id: 2,
        title: 'Suburban Family Home',
        price: '$650,000',
        location: 'Suburbs',
        bedrooms: 4,
        bathrooms: 3,
        sqft: 2500
    },
    {
        id: 3,
        title: 'Luxury Penthouse',
        price: '$1,500,000',
        location: 'Downtown',
        bedrooms: 3,
        bathrooms: 3,
        sqft: 3000
    },
    {
        id: 4,
        title: 'Cozy Studio',
        price: '$250,000',
        location: 'City Center',
        bedrooms: 1,
        bathrooms: 1,
        sqft: 500
    },
    {
        id: 5,
        title: 'Waterfront Villa',
        price: '$2,000,000',
        location: 'Beachfront',
        bedrooms: 5,
        bathrooms: 4,
        sqft: 4500
    },
    {
        id: 6,
        title: 'Historic Townhouse',
        price: '$550,000',
        location: 'Old Town',
        bedrooms: 3,
        bathrooms: 2,
        sqft: 1800
    }
];

// ============================================
// LOAD PROPERTIES ON BUY PAGE
// ============================================
function loadProperties(filteredProperties = properties) {
    const propertiesList = document.getElementById('propertiesList');
    
    if (!propertiesList) return;

    propertiesList.innerHTML = '';

    if (filteredProperties.length === 0) {
        propertiesList.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: #666; font-size: 1.1rem;">No properties found. Please adjust your filters.</p>';
        return;
    }

    filteredProperties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'property-card';
        propertyCard.innerHTML = `
            <div class="property-image">🏠</div>
            <div class="property-info">
                <div class="property-title">${property.title}</div>
                <div class="property-price">${property.price}</div>
                <div class="property-details">
                    <span>📍 ${property.location}</span><br>
                    <span>🛏️ ${property.bedrooms} Beds</span>
                    <span>🚿 ${property.bathrooms} Baths</span><br>
                    <span>📐 ${property.sqft} sqft</span>
                </div>
                <button class="property-btn" onclick="contactAboutProperty('${property.title}')">Contact Agent</button>
            </div>
        `;
        propertiesList.appendChild(propertyCard);
    });
}

// ============================================
// FILTER PROPERTIES
// ============================================
function filterProperties() {
    const searchInput = document.getElementById('searchInput');
    const priceFilter = document.getElementById('priceFilter');
    const bedroomFilter = document.getElementById('bedroomFilter');

    if (!searchInput || !priceFilter || !bedroomFilter) return;

    const searchTerm = searchInput.value.toLowerCase();
    const priceRange = priceFilter.value;
    const bedrooms = bedroomFilter.value;

    let filtered = properties.filter(prop => {
        // Search filter
        if (searchTerm && !prop.location.toLowerCase().includes(searchTerm) && !prop.title.toLowerCase().includes(searchTerm)) {
            return false;
        }

        // Price filter
        if (priceRange) {
            const priceValue = parseInt(prop.price.replace(/[$,]/g, ''));
            const [min, max] = priceRange.split('-').map(p => parseInt(p) || Infinity);
            if (priceValue < min || priceValue > max) {
                return false;
            }
        }

        // Bedroom filter
        if (bedrooms && prop.bedrooms != bedrooms) {
            return false;
        }

        return true;
    });

    loadProperties(filtered);
}

// ============================================
// ADD EVENT LISTENERS FOR FILTERS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const priceFilter = document.getElementById('priceFilter');
    const bedroomFilter = document.getElementById('bedroomFilter');

    if (searchInput) {
        searchInput.addEventListener('input', filterProperties);
    }
    if (priceFilter) {
        priceFilter.addEventListener('change', filterProperties);
    }
    if (bedroomFilter) {
        bedroomFilter.addEventListener('change', filterProperties);
    }

    // Load all properties initially
    if (document.getElementById('propertiesList')) {
        loadProperties();
    }
});

// ============================================
// CONTACT ABOUT PROPERTY
// ============================================
function contactAboutProperty(propertyTitle) {
    alert(`Thank you for your interest in "${propertyTitle}"!\n\nOur agent will contact you soon.\n\nEmail: sales@wranglerhomes.com\nPhone: (555) 123-4567`);
}

// ============================================
// SMOOTH SCROLL FOR BUTTONS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.onclick && this.onclick.toString().includes('window.location')) {
                return;
            }
        });
    });
});

// ============================================
// FORM VALIDATION (Future use)
// ============================================
function validateForm(formData) {
    const errors = [];
    
    if (!formData.name || formData.name.trim() === '') {
        errors.push('Name is required');
    }
    
    if (!formData.email || !isValidEmail(formData.email)) {
        errors.push('Valid email is required');
    }
    
    if (!formData.phone || formData.phone.trim() === '') {
        errors.push('Phone number is required');
    }
    
    return errors;
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ============================================
// SCROLL TO TOP BUTTON (Optional)
// ============================================
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        // Near end of page
    }
});

// ============================================
// LAZY LOAD CONTENT (Optional)
// ============================================
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    });

    // Optional: apply to cards
    const cards = document.querySelectorAll('.feature-card, .property-card, .value-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transition = 'opacity 0.6s ease';
        observer.observe(card);
    });
}

console.log('Wrangler Homes website loaded successfully!');
