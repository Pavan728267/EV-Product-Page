
# Full-Stack Developer Technical Task: EV Product Page 1.0.0 Frontend
The frontend is a React.js application that provides a dynamic product detail page for electric vehicles, fetching data from a backend API. It features a responsive layout mimicking the provided design reference, with sections for product specifications, subscription/EMI options, related products, and a product request form. The application is built to be user-friendly, with smooth navigation and loading states.

**Setup Instructions**
1.    Clone the repo: git clone https://github.com/Pavan728267/EV-Product-Page.git
2.    Navigate to frontend: cd ev-product-page
3.    Install dependencies: npm install
4.    Run: npm start (opens at http://localhost:3000)


**Ensure backend is running (see backend README).**

# Technology Stack
1.  React.js: For UI components and state management.
2.  Axios: For API requests.
3.  Bootstrap/Custom CSS: For responsive design and styling.

# Key Features


**ProductDetails**
    Displays vehicle specs (battery, range, charging time), description, and EMI/subscription options.
    Fetches data via /api/products/getProductinfo?id={id}.
    Features expandable description and color/add-on selection with mock data.

**RelatedProducts**
    Shows related vehicles as cards with image, title, and price.
    Clicking a card fetches new product data and updates the page.
    Uses lazy-loaded images for performance.

**ProductRequestCard**
    Form to request a vehicle not in the catalog.
    Submits data to /api/products/request (assumed) with client-side validation.

**Design Decisions**
    Used Bootstrap for responsive layout and custom CSS to match design reference.
    State-based navigation instead of routing for simplicity.
    Added loading overlay for better UX during API calls.

**Usage**
View product details and toggle EMI/subscription options.
Click related products to navigate to their detail pages.
Submit vehicle requests via the request form.

**Challenges**
    Approximated design reference styling with placeholders due to limited assets & limited time.
    Optimized image loading for related products with lazy loading.

