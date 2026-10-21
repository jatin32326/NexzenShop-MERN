# NexzenShop-MERN

A full-stack MERN eCommerce application built for modern online shopping experiences. This project includes a React frontend for the user-facing storefront and a Node.js + Express backend for APIs, authentication, product management, cart logic, and user flows.

This project is currently in active development. The core backend and major frontend flows are already in place, while final UI refinements, full order flow completion, and payment integration are still being developed.

## Overview

NexzenShop is designed as a scalable eCommerce platform with:

- User authentication and authorization
- Product listing and detail pages
- Wishlist / saved items
- Cart and checkout flow
- User account management
- Order-related backend logic
- API-driven architecture suitable for future admin features and payment integration

The project is intentionally split into two main parts:

- Frontend: React app for the storefront experience
- Backend: Express server for REST APIs and business logic

---

## Tech Stack

### Frontend
- React.js
- Vite
- CSS / component-based UI styling
- Axios for API communication
- React Router DOM
- Toast notifications
- Swiper / banner slider support

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer for image uploads
- Nodemailer for email features
- Cloudinary support for media handling

### Tools
- Postman for API testing
- Git and GitHub
- VS Code

---

## Current Features

### Implemented / Working
- User registration and login
- JWT-based authentication
- Product creation, fetching, update, and delete APIs
- Product listing and detail views
- Cart management APIs
- Wishlist / MyList flow
- User profile support
- Email verification related logic
- Password reset functionality
- MongoDB integration

### In Progress
- Final frontend polishing
- More complete checkout journey
- Payment gateway integration
- Full order workflow refinement
- Better user experience improvements

### Planned Features
- Admin dashboard
- Add product images from UI
- Stripe or Razorpay payment integration
- Order tracking
- User address management improvements
- Product filters and search enhancement
- Deployment setup for production

---

## Repository Structure

```bash
NexzenShop-MERN/
├── Mern-app/                  # Frontend React application
│   ├── .env
│   ├── .gitignore
│   ├── README.md
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── public/
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── index.css
│       ├── assets/
│       ├── components/
│       │   ├── headers/
│       │   ├── Footer/
│       │   ├── ProductItem/
│       │   ├── ProductListing/
│       │   ├── ProductDetails/
│       │   ├── ProductSlider/
│       │   ├── AdsBannerSlider/
│       │   ├── Sidebar/
│       │   └── ...
│       ├── pages/
│       │   ├── Home.jsx
│       │   ├── Login/
│       │   ├── Register/
│       │   ├── Cart/
│       │   ├── Checkout/
│       │   ├── MyAccount/
│       │   ├── MyList/
│       │   ├── OrderPage/
│       │   ├── ForgotPassword/
│       │   └── verify/
│       └── utils/
│           └── api.js
│
├── Server/                    # Backend Express application
│   ├── .gitignore
│   ├── package.json
│   ├── index.js
│   ├── config/
│   │   ├── Db.js
│   │   ├── emailService.js
│   │   └── sendEmail.js
│   ├── controller/
│   │   ├── cart.controller.js
│   │   ├── category.controller.js
│   │   ├── mylist.controller.js
│   │   ├── product.controller.js
│   │   └── user.controller.js
│   ├── middlewares/
│   │   ├── auth.js
│   │   └── multer.js
│   ├── models/
│   │   ├── address.model.js
│   │   ├── cartProduct.model.js
│   │   ├── category.model.js
│   │   ├── myList.model.js
│   │   ├── order.model.js
│   │   ├── product.model.js
│   │   └── userModels.js
│   ├── routes/
│   │   ├── cart.router.js
│   │   ├── category.router.js
│   │   ├── mylist.router.js
│   │   ├── product.router.js
│   │   └── user.router.js
│   └── utils/
│       ├── generateAccessToken.js
│       ├── generateRefreshToken.js
│       └── verifyEmailTemplate.js
│
└── README.md                 # Project documentation
```

---

## Frontend Structure Explained

The frontend inside `Mern-app` is a complete React storefront with route-based pages such as:

- Home page
- Product listing page
- Product details page
- Login / Register
- Cart page
- Checkout page
- My account page
- Wishlist page
- Orders page
- Email verification and forgot password flow

The main app is controlled through `Mern-app/src/App.jsx`, where routes are registered and global values such as login state and cart panel visibility are managed using React context.

---

## Backend Structure Explained

The backend is located in `Server/` and uses Express to expose modular REST APIs.

Core backend areas:

- `index.js` — server startup and route mounting
- `routes/` — API route definitions
- `controller/` — business logic for user, product, cart, and wishlist modules
- `models/` — MongoDB schema definitions
- `middlewares/` — authentication and upload support
- `config/` — database and email-related configuration

The server currently exposes APIs for:

- User authentication and profile handling
- Product management
- Category management
- Cart operations
- Wishlist operations

---

## How the App Works

The overall flow of the application is:

1. User opens the frontend storefront
2. User interacts with Home, product pages, wishlist, cart, and account pages
3. Frontend sends requests to the backend API
4. Backend verifies JWT tokens for protected routes
5. MongoDB stores and retrieves application data
6. Response is returned to the frontend and displayed to the user

This makes the application architecture clean, modular, and scalable for future improvements.

---

## Installation

### Prerequisites

Make sure the following are installed:

- Node.js (recommended v18+)
- MongoDB
- npm or yarn
- Git

### 1. Clone the repository

```bash
git clone https://github.com/jatin32326/NexzenShop-MERN.git
cd NexzenShop-MERN
```

### 2. Install frontend dependencies

```bash
cd Mern-app
npm install
```

### 3. Install backend dependencies

```bash
cd ../Server
npm install
```

### 4. Environment Setup

#### Frontend `.env`
Create a `.env` file inside `Mern-app/` with:

```env
VITE_API_URL=http://localhost:8000
```

#### Backend `.env`
Create a `.env` file inside `Server/` with values such as:

```env
PORT=8000
MONGO_URL=mongodb://localhost:27017/nexzenshop
JWT_SECRET=your_jwt_secret_key
CLIENT_URL=http://localhost:3000
```

---

## Running the Project

### Run Backend

```bash
cd Server
node index.js
```

### Run Frontend

```bash
cd Mern-app
npm run dev
```

The frontend typically runs on a local port like `http://localhost:3000` and the backend on `http://localhost:8000` depending on your environment configuration.

---

## API Examples

### User Registration

```http
POST /api/user/register
```

Request body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

### User Login

```http
POST /api/user/login
```

### Get Products

```http
GET /api/product/getAllproducts
```

### Create Product

```http
POST /api/product/create
```

### Product Detail

```http
GET /api/product/:id
```

> Protected routes require a valid JWT token in the Authorization header.

---

## Postman Usage

This project is currently being tested with Postman, especially during development. You can use Postman to:

- create products
- update/delete products
- test auth endpoints
- validate cart behavior
- test user profile operations
- check wishlist and order APIs

This makes development easier before the frontend admin panel is fully built.

---

## Current Status Summary

This project is not finished yet, but the foundation is strong and the architecture is clean. The app already contains most major ecommerce building blocks, and the remaining work is centered around:

- frontend polish
- order completion
- payment gateway integration
- final checkout flow
- admin panel creation

---

## Roadmap

### Phase 1: Core Functionalities
- Authentication
- Product management
- Wishlist and cart
- User profile features

### Phase 2: Frontend & UX
- Product filters and improved experience
- Better checkout flow
- UI polish

### Phase 3: Payment & Orders
- Payment gateway integration
- Final order flow
- Order tracking

### Phase 4: Admin Panel
- Product dashboard
- User management
- Order management
- Analytics

### Phase 5: Production Ready
- Deployment
- Performance optimization
- Security enhancements
- Production-level environment setup

---

## Developer Note

This project is designed as a scalable and real-world eCommerce solution. The backend and frontend are separated clearly, which makes future expansion easier and more maintainable.

---

## License

This project does not currently include a specific license. If you want, you can add an open-source license later such as MIT.

---

## Author

- Project: NexzenShop-MERN
- Developer: Jatin Kumar
- GitHub: https://github.com/jatin32326

---

## Final Note

NexzenShop-MERN is a strong MERN stack eCommerce project in progress. It already has a solid foundation for real online shopping features, and it is well-structured for future upgrades into a production-ready marketplace or ecommerce platform.


