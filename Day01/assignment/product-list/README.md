# Product List Application

A modern React e-commerce product listing application built with Vite and styled with Tailwind CSS. This project demonstrates core React concepts including component composition, state management, and event handling.

## 📋 Project Overview

This is a responsive product catalog application that displays a collection of products in an organized grid layout. Users can view product details and interact with add-to-cart functionality.

## 🚀 Features

- **Product Display**: Grid layout showcasing multiple products with images, names, and prices
- **Product Cards**: Interactive cards with hover effects using Tailwind CSS
- **Add to Cart**: Click functionality to add products to cart with alert notifications
- **Responsive Design**: Mobile-friendly layout using Tailwind CSS utilities
- **Static Product Data**: JSON-based product database for easy management

## 📁 Project Structure

```
product-list/
├── src/
│   ├── Components/
│   │   └── ProductCard/
│   │       └── ProductCard.jsx      # Reusable product card component
│   ├── Data/
│   │   └── Products.js              # Product data and imports
│   ├── assets/                       # Product images
│   ├── App.jsx                       # Main application component
│   ├── App.css                       # Application styles
│   ├── main.jsx                      # Application entry point
│   └── index.css                     # Global styles
├── public/                           # Static files
├── package.json                      # Project dependencies
├── vite.config.js                    # Vite configuration
├── eslint.config.js                  # ESLint rules
└── index.html                        # HTML entry point
```

## 🛠️ Tech Stack

- **React** - UI library for building interactive components
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **JavaScript ES6+** - Modern JavaScript features

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd product-list
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` (or the URL shown in terminal)

## 🎮 Usage

### Running the Application

**Development Mode:**
```bash
npm run dev
```

**Build for Production:**
```bash
npm run build
```

**Preview Production Build:**
```bash
npm run preview
```

## 🧩 Components

### ProductCard Component
Located in `src/Components/ProductCard/ProductCard.jsx`

A reusable component that displays individual product information:
- **Props:**
  - `name` (string) - Product name
  - `price` (number) - Product price in LE (Egyptian Pounds)
  - `image` (string) - Image source path

- **Features:**
  - Product image with fixed dimensions
  - Product name and price display
  - "Look at Cart" button with click handler
  - Alert notification on button click

## 📊 Data Structure

Products are stored in `src/Data/Products.js` as an array of objects:

```javascript
{
  id: number,
  name: string,
  price: number,
  image: import path
}
```

## 🎨 Styling

The project uses **Tailwind CSS** for styling with:
- Responsive grid layouts
- Card-based design with shadows and rounded corners
- Hover states for interactive feedback
- Color scheme using blue tones

## 📝 Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview production build locally

## 🔧 Configuration

- **Vite Config**: `vite.config.js` - Build and dev server configuration
- **ESLint**: `eslint.config.js` - Code quality rules
- **Tailwind**: Configured through `package.json` or `tailwind.config.js`

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)

## 🌟 Future Enhancements

- Shopping cart state management (useState/Context API)
- Product filtering and search functionality
- Product detail page
- Cart quantity management
- Checkout flow
- API integration for dynamic product loading

## 📄 License

This project is part of an educational curriculum and is available for learning purposes.

