# ABC Company - Professional Cleaning Services Website

A modern, responsive website for ABC Company's professional cleaning services business.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Interactive Quote Calculator**: Real-time pricing estimates for services
- **Service Showcase**: Detailed information about residential, commercial, and specialty cleaning
- **Customer Testimonials**: Rotating testimonial slider with customer reviews
- **Contact Forms**: Multiple contact points with form validation
- **Modern UI/UX**: Clean design with smooth animations and transitions
- **SEO Optimized**: Structured markup and meta tags for better search visibility
- **Performance Optimized**: Lazy loading, optimized images, and minimal JavaScript

## 🚀 Quick Start

1. **Download or Clone** the project files to your local machine
2. **Open in a Web Server** - The website can be run in several ways:

### Option 1: Live Server (VS Code)
- Install the "Live Server" extension in VS Code
- Right-click on `index.html` and select "Open with Live Server"

### Option 2: Local HTTP Server
```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed)
npx http-server

# Using PHP (if installed)
php -S localhost:8000
```

### Option 3: Direct File Opening
- Simply double-click `index.html` to open in your browser
- Note: Some features may be limited without a web server

## 📁 Project Structure

```
cleaning-website/
├── index.html              # Main homepage
├── services.html           # Detailed services page
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js            # JavaScript functionality
└── assets/
    └── images/            # Image assets (placeholder)
```

## 🎨 Design Features

### Color Palette
- **Primary**: #4ecdc4 (Teal)
- **Secondary**: #44a08d (Sea Green)
- **Accent**: #f8f9fa (Light Gray)
- **Text**: #2c3e50 (Dark Blue)

### Typography
- **Font Family**: Montserrat (Google Fonts)
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)

### Key Components
- Navigation with mobile hamburger menu
- Hero section with call-to-action buttons
- Service cards with hover effects
- Interactive quote calculator
- Testimonial carousel
- Contact forms with validation
- Sticky mobile CTA buttons

## 🛠️ Customization

### Adding Your Own Images
Replace placeholder images in the `assets/images/` folder:
- `hero-cleaning.jpg` - Main hero image
- `team-photo.jpg` - About section team photo
- `customer1.jpg`, `customer2.jpg`, `customer3.jpg` - Testimonial photos
- `residential-cleaning.jpg` - Residential service image
- `commercial-cleaning.jpg` - Commercial service image
- `move-cleaning.jpg` - Move-in/out service image
- `specialty-cleaning.jpg` - Specialty services image

### Updating Contact Information
Edit the following in `index.html` and `services.html`:
- Phone numbers: Search for `(123) 456-7890`
- Email addresses: Search for `info@abccleaning.com`
- Service area: Update location references
- Social media links: Update href attributes in footer

### Modifying Services & Pricing
- Edit service descriptions in `index.html` (services overview section)
- Update detailed service information in `services.html`
- Modify pricing in the quote calculator (`js/main.js` - pricing object)

### Customizing Colors & Fonts
- Update CSS variables in `css/styles.css` (`:root` section)
- Change Google Fonts link in HTML head sections
- Modify color scheme throughout the stylesheet

## 📧 Contact Form Integration

The contact forms are set up with frontend validation. To make them functional:

1. **Email Service Integration**:
   - Replace the console.log statements in `js/main.js`
   - Integrate with services like EmailJS, Formspree, or Netlify Forms
   - Add backend API endpoint for form submission

2. **Quote Calculator**:
   - Currently calculates estimates client-side
   - Can be connected to CRM systems or email services
   - Pricing structure is configurable in `js/main.js`

## 🔧 Technical Details

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ with some feature degradation
- Mobile browsers (iOS Safari, Android Chrome)

### Dependencies
- Font Awesome 6.4.0 (icons)
- Google Fonts (Montserrat)
- No JavaScript frameworks required

### Performance Features
- CSS minification ready
- Image lazy loading
- Smooth scrolling
- Intersection Observer for animations
- Optimized CSS with utility classes

## 📱 Mobile Features

- Responsive breakpoints: 768px, 480px
- Mobile-first CSS approach
- Touch-friendly buttons and navigation
- Sticky call-to-action bar on mobile
- Swipeable testimonial carousel
- Collapsible mobile navigation menu

## 🎯 SEO & Analytics Ready

- Semantic HTML structure
- Meta tags and descriptions
- Schema markup ready
- Google Analytics integration ready
- Social media meta tags
- Accessible design (WCAG guidelines)

## 🚀 Deployment Options

### Static Hosting (Recommended)
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect to Git repository
- **GitHub Pages**: Upload to repository
- **AWS S3**: Static website hosting

### Traditional Web Hosting
- Upload files via FTP to web host
- Ensure index.html is in root directory
- Configure custom domain if needed

## 📞 Support & Customization

This is a complete, production-ready website template. For additional customization or support:

1. Check the comments in the code files
2. Refer to the CSS utility classes for quick styling
3. Use browser developer tools for testing and debugging
4. Consider adding a content management system for easy updates

## 📄 License

This template is provided as-is for ABC Company. Modify and use according to your business needs.

---

**Ready to launch your cleaning business website!** 🧽✨
