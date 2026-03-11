# Wrangler Homes Website

A professional real estate website built with HTML, CSS, and JavaScript.

## 📁 Project Structure

```
wrangler-homes/
├── index.html                 # Home page
├── about.html                 # About page
├── buy.html                   # Property listings page
├── privacy-policy.html        # Privacy Policy page
├── terms-conditions.html      # Terms & Conditions page
├── css/
│   └── style.css             # Main stylesheet
├── js/
│   └── script.js             # JavaScript functionality
├── LICENSE                    # License file
└── README.md                 # This file
```

## 🎯 Pages Included

1. **Home** (`index.html`) - Landing page with hero section and features overview
2. **About** (`about.html`) - Company information, mission, and values
3. **Buy** (`buy.html`) - Property listings with filtering capabilities
4. **Privacy Policy** (`privacy-policy.html`) - Privacy policy document
5. **Terms & Conditions** (`terms-conditions.html`) - Terms and conditions document

## ✨ Features

### Navigation
- Sticky navigation bar with gradient background
- Mobile-responsive hamburger menu
- Active page highlighting
- Smooth transitions

### Responsive Design
- Mobile-first approach
- Works on desktop, tablet, and mobile devices
- Flexible grid layouts
- Touch-friendly buttons

### Interactive Elements
- Property filtering by location, price, and bedrooms
- Smooth scrolling
- Hover effects on cards and buttons
- Contact buttons on property listings
- Form validation utilities

### Professional Styling
- Gradient backgrounds
- Card-based layouts
- Consistent color scheme (Purple: #667eea, #764ba2)
- Smooth animations and transitions
- Professional typography

## 🚀 Getting Started

1. **Open the website:**
   - Double-click `index.html` to open in your default browser
   - Or use a local server for better performance

2. **Using a Local Server (Recommended):**
   
   **For Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **For Node.js:**
   ```bash
   npx http-server
   ```
   
   Then navigate to `http://localhost:8000` in your browser.

## 🎨 Customization

### Colors
Edit the color values in `css/style.css`:
- Primary gradient: `#667eea` to `#764ba2`
- Dark background: `#222`
- Text color: `#333`

### Company Information
Update the following in all HTML files:
- Company name: "Wrangler Homes"
- Email: "info@wranglerhomes.com"
- Phone: "(555) 123-4567"
- Address: "123 Real Estate Lane, Property City, PC 12345"

### Properties
Add/edit properties in `js/script.js` in the `properties` array:
```javascript
const properties = [
    {
        id: 1,
        title: 'Property Name',
        price: '$XXX,XXX',
        location: 'Location',
        bedrooms: 3,
        bathrooms: 2,
        sqft: 1500
    }
];
```

## 📱 Responsive Breakpoints

- **Desktop:** 1200px and above
- **Tablet:** 768px to 1199px
- **Mobile:** Below 768px
- **Small Mobile:** Below 480px

## 🔧 Browser Compatibility

- Chrome/Chromium (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- IE 11+ (with limited support)

## 📄 File Descriptions

### HTML Files
- **index.html**: Hero section, features grid, call-to-action
- **about.html**: Company story, mission, values, and benefits
- **buy.html**: Property listings with interactive filters
- **privacy-policy.html**: Comprehensive privacy policy
- **terms-conditions.html**: Terms and conditions document

### CSS (style.css)
- Global styles and resets
- Navigation bar styling
- Hero and page header styles
- Button and card components
- Grid-based layouts
- Media queries for responsive design
- Animations and transitions

### JavaScript (script.js)
- Mobile menu toggle
- Active navigation highlighting
- Property filtering logic
- Event listeners setup
- Form validation utilities
- Lazy loading implementation
- Intersection Observer support

## 🔒 Security Notes

- All forms should be connected to a backend server
- Implement proper form validation on the server
- Use HTTPS in production
- Sanitize all user inputs
- Keep JavaScript dependencies updated

## 📝 Future Enhancements

1. Add property detail pages
2. Implement contact form with email notifications
3. Add property image galleries
4. Create user accounts and favorites system
5. Integrate property search API
6. Add testimonials/reviews section
7. Implement blog section
8. Add Google Maps integration

## 📞 Support

For support or questions, contact:
- Email: info@wranglerhomes.com
- Phone: (555) 123-4567

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Last Updated:** March 2026
