Product Management Portal

Welcome to the Product Management Portal, a React-based web application designed to manage products across multiple stores and generate invoices for store owners. This application features a responsive design, a consistent Material-UI-based styling system, and full CRUD (Create, Read, Update, Delete) functionality for products.

Table of Contents
Features
Technologies Used
Installation
Usage
Styling and Design
Deployment
File Structure
Contributing
License
Contact

Features
Product Management: View, add, edit, and delete products for all stores.
Store Filtering: Filter products by store using a dropdown menu.
Search Functionality: Search products by name.
Product Details: View detailed information about individual products in a dialog.
Invoice Dashboard: Generate and view invoices for the logged-in store (requires login).
Responsive Design: Adapts to various screen sizes (mobile, tablet, desktop).
Login System: Store owners can log in to access their invoices.
Custom Styling: Consistent design system with Material-UI, including a custom color palette and typography.

Technologies Used
React: JavaScript library for building the user interface.
React Router: For client-side routing.
Material-UI (MUI): For pre-built components and custom theming.
jsPDF & html2canvas: For generating PDF invoices.
Create React App (CRA): For project scaffolding and build process.
Node.js & npm: For package management and runtime environment.

Installation
Prerequisites
Node.js (v16.x or later recommended)
npm (comes with Node.js)

Steps
Clone the Repository
git clone https://github.com/your-username/product-management-portal.git
cd product-management-portal

Install Dependencies
npm install

Start the Development Server
npm start
Open http://localhost:3000 in your browser to see the app.

Build for Production
npm run build
This generates a build folder with optimized static files.
Serve the Build Locally (for Testing)

Install serve globally:
npm install -g serve

Serve the build:
serve -s build

Visit http://localhost:3000 to test the production build.

Usage
Landing Page (/ and /products): Displays all products from all stores. Use the "Filter by Store" dropdown and "Search by Product Name" input to refine the list. Add, edit, or delete products using the action buttons.
Login: Click the "Login" button at the top right to navigate to the login page. Use store credentials (e.g., techtrend / pass123 for TechTrove) to log in.
Invoice Dashboard (/invoices): After logging in, view invoices for your store and generate a PDF using the "Generate PDF" button.

Styling and Design
Approach: Material-UI (MUI) with a custom theme.
Color Palette:
Primary: #1976d2 (blue for headers, buttons)
Secondary: #dc004e (pink for accents)
Background: #f9f9f9 (light gray)
Text: #333333 (dark gray)
Success: #2e7d32 (green for totals)
Error: #d32f2f (red for delete actions)
Typography: Roboto font, 24px for headings (h4), 20px for subtitles (h6), 16px for body text.
Spacing: Multiples of 8px for consistent margins and padding.
Responsive Design: Uses MUI breakpoints (xs, sm, md, lg, xl) to adapt layouts for mobile, tablet, and desktop screens.

Deployment
The build folder is ready for deployment to a static hosting service. Follow these steps:

Configure homepage in package.json
For root deployment: "homepage": "."
For subdirectory (e.g., /my-app): "homepage": "/my-app"
For custom domain (e.g., https://myapp.com): "homepage": "https://myapp.com"

Build the Project
npm run build
Deploy to a Hosting Service

GitHub Pages:
Install gh-pages: npm install --save-dev gh-pages
Add scripts: "predeploy": "npm run build", "deploy": "gh-pages -d build"
Run: npm run deploy
Netlify:
Build and deploy: netlify deploy --prod (after initial setup)
Or drag the build folder to the Netlify dashboard.
Vercel:
Run: vercel --prod after installing the Vercel CLI.
Custom Server (e.g., Apache/Nginx):
Copy the build folder to your web root and configure static file serving.
Verify Deployment
Visit the deployed URL and ensure all features (products, invoices, login) work as expected.

File Structure

product-management-portal/
├── node_modules/         # Dependency files
├── public/              # Static assets
│   ├── index.html       # Main HTML file
│   ├── manifest.json    # App manifest
│   └── favicon.ico      # Favicon
├── src/                 # Source code
│   ├── components/      # React components
│   │   ├── InvoiceDashboard.jsx
│   │   ├── Login.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── ProductForm.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductManagement.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── SearchBar.jsx
│   │   └── StoreFilter.jsx
│   ├── data/            # Mock data
│   │   └── sampleData.js
│   ├── theme.js         # Custom MUI theme
│   ├── App.jsx          # Main App component
│   ├── index.js         # Entry point
│   └── index.css        # Global styles (optional)
├── .gitignore           # Git ignore file
├── package.json         # Project metadata and scripts
├── README.md            # This file
└── build/               # Production build output (generated)
Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch: git checkout -b feature/your-feature-name.
Make your changes and commit: git commit -m "Add your message".
Push to the branch: git push origin feature/your-feature-name.
Open a pull request.
Please ensure your code follows the existing style guidelines and passes the build process (npm run build).

License
This project is licensed under the MIT License. See the LICENSE file for details (if you create one).
