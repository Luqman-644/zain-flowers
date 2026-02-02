# Zain Flowers - Online Flower Shop

A modern, responsive flower delivery website built with React and Vite.

## Features

- Responsive Design: Works beautifully on desktop, tablet, and mobile devices
- Product Showcase: Elegant display of flower bouquets with filtering by category
- Cake Delivery Service: Dedicated section for cake orders with location-based delivery
- WhatsApp Integration: Direct ordering via WhatsApp with pre-filled messages
- Modern UI/UX: Clean design with smooth animations and transitions
- Mobile Navigation: Hamburger menu with dropdowns for mobile users

## Technologies Used

- React 19 - Frontend library
- Vite - Build tool and development server
- React Router DOM - Client-side routing
- Tailwind CSS - Utility-first CSS framework
- Lucide React - Beautiful SVG icons
- Motion - Animation library
- Swiper - Touch-enabled sliders

## Project Structure

```
src/
├── Components/
│   ├── CategoryGrid.jsx    # Product category display
│   ├── Footer.jsx          # Site footer with links
│   ├── ImageSlider.jsx     # Homepage image carousel
│   ├── Navbar.jsx          # Responsive navigation bar
│   └── WhatsappButton.jsx  # Floating WhatsApp button
├── pages/
│   ├── About.jsx           # About us page
│   ├── Cakes.jsx           # Cake delivery page
│   ├── Contact.jsx         # Contact information
│   ├── Delivery.jsx        # Delivery policy page
│   ├── Home.jsx            # Homepage
│   └── Products.jsx        # Product listing page
├── assets/
│   ├── logo/               # Logo images
│   └── products/           # Product images
├── App.jsx                 # Main app component with routes
├── main.jsx                # Entry point
└── index.css               # Global styles
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "Flower Website"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Key Pages

### Home Page (`/`)
- Hero section with image slider
- Featured products showcase
- Quick navigation to popular categories

### Products (`/flower-bouquets` or `/shop`)
- Filterable product gallery
- Categories: Anniversary, For Her, For Him, Birthday, Valentine, Cakes & Choco
- WhatsApp ordering for each product

### Cakes (`/cakes`)
- Cake delivery service information
- Available locations: Islamabad, Rawalpindi, Gujar Khan, Attock
- Occasion-based cake options
- Packing and decoration services

### Contact (`/contact`)
- Business contact information
- WhatsApp ordering option
- Business hours and address

## Color Palette

- Primary Red: `#893941`
- Secondary Pink: `#CB7885`
- Light Green: `#D4D994`
- Dark Green: `#5E6623`
- Background: `#F7F6F2`

## WhatsApp Integration

All product cards and service pages include direct WhatsApp ordering buttons with pre-filled messages containing:
- Product/service details
- Category information
- Ready-to-send inquiry templates

## Delivery Information

Currently delivers to:
- Islamabad
- Rawalpindi
- Gujar Khan
- Attock

Delivery charges vary by location.

## Customization

### Update WhatsApp Number
Edit the `WHATSAPP_NUMBER` constant in:
- `src/pages/Products.jsx` (line 11)

### Add New Products
Add new product objects to the `products` array in `Products.jsx`:
```javascript
{
  id: 5,
  key: "category-key",
  category: "Category Name",
  name: "Product Name",
  img: importImagePath
}
```

### Modify Routes
Update routes in `App.jsx`:
```javascript
<Route path="/your-page" element={<YourComponent />} />
```

## License

This project is proprietary to Zain Flowers.

## Support

For support, contact:
- Email: zainflowers@gmail.com
- Phone: +923107949463
- Address: Shop 11, F-6 Flowers Market, Islamabad

---
*Built with love for beautiful moments*