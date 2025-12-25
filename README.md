# Grocery Delivery Website

A simple grocery delivery website built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application allows admins to manage products and orders, and users to register, browse products by categories, search, add to cart, place orders with payment options (Cash on Delivery or Online Payment via Stripe), and view their order history.


## Demo

Click the link below to see the demonstration of the Grocery Delivery Website.

Link 👉 https://drive.google.com/file/d/1glrMCI1UIVDyOFaAtlOeHYBpF-KP9fwq/view?usp=sharing 👈


## Features

### Admin
- Admin Login: Log in to the admin panel using predefined email and password.
- Add Product: Upload products with details including images, name, description, category (vegetables, fruits, drinks, instant, dairy, bakery, grains), price, and offer price.
- Product List: View all added products with details.
- Orders: View all received orders from users.

### User
- User Registration & Login: Register with name, email, and password, or log in with email and password.
- Browse Products: View products under various categories and search by name.
- All Products: Display all available products.
- Cart Management: Add products to cart, update quantity, or remove items.
- Place Order: Provide delivery address (first name, last name, email, street, city, state, zip code, country, phone number), select payment method (Cash on Delivery or Online Payment), and place the order.
- My Orders: View details of all placed orders.

### Authentication & Access Control
- Admin Access: Admins can access the seller panel for product and order management.
- User Access: Users can browse, search, cart, and order products but cannot manage products or orders.


## Technologies Used

### Frontend
- React with Vite
- Tailwind CSS for styling
- Axios for API calls
- React Hot Toast for notifications

### Backend
- Node.js with Express.js
- MongoDB for the database
- Multer for handling product image uploads
- Cloudinary for image storage
- Stripe for payment gateway
- dotenv for environment variables


## Installation

Clone the repository and navigate to each project folder to install dependencies.
```bash
  git clone https://github.com/MrTharinduDasantha/Grocery-Delivery-Website.git
  cd Grocery-Delivery-Website
```
#### Folder Setup
The project is divided into two main folders: client (frontend) and server (backend). You will need to install dependencies for each.
- Navigate to each folder (client, server) and run.
```bash
npm install
```
#### Environment Variables
Before running the app, configure the .env files in the client and server folders with the necessary environment variables.
- Create a .env file in the client folder.
- Replace the placeholders with your actual values ​​or leave these values ​​as they are if you prefer:
```bash
VITE_CURRENCY = "$"
VITE_BACKEND_URL = "http://localhost:4000"
```
- Create a .env file in the server folder.
- Replace placeholders with your actual values:
```bash
PORT = 4000
JWT_SECRET = "grocery_delivery_website_secret_key"
NODE_ENV = "development"

# Mongodb setup
MONGODB_URI = "Enter your mongodb uri"

# Cloudinary setup
CLOUDINARY_CLOUD_NAME = "Enter your cloudinary cloud name"
CLOUDINARY_API_KEY = "Enter your cloudinary api key"
CLOUDINARY_API_SECRET = "Enter your cloudinary api secret"

# Stripe setup
STRIPE_PUBLISHABLE_KEY = "Enter your stripe publishable key"
STRIPE_SECRET_KEY = "Enter your stripe secret key"
STRIPE_WEBHOOK_SECRET = "Enter your stripe webhook secret"

# Admin credentials
SELLER_EMAIL = "admin@gmail.com"
SELLER_PASSWORD = "admin123"
```
#### Run the Project.
- Start the backend server
```bash
cd server
npm run server
```
- Start the frontend
```bash
cd ../client
npm run dev
```


## Usage
1. Admin
- Navigate to the Admin Dashboard (http://localhost:5173/seller).
2. Client
- Open the Frontend Interface (http://localhost:5173).


## Screenshots

![image alt](https://github.com/MrTharinduDasantha/Grocery-Delivery-Website/blob/041aab2cff8135872aa6c9eb0d1a53f209289e1a/Img%20-%201.png)
![image alt](https://github.com/MrTharinduDasantha/Grocery-Delivery-Website/blob/041aab2cff8135872aa6c9eb0d1a53f209289e1a/Img%20-%202.png)
![image alt](https://github.com/MrTharinduDasantha/Grocery-Delivery-Website/blob/041aab2cff8135872aa6c9eb0d1a53f209289e1a/Img%20-%203.png)
![image alt](https://github.com/MrTharinduDasantha/Grocery-Delivery-Website/blob/041aab2cff8135872aa6c9eb0d1a53f209289e1a/Img%20-%204.png)
![image alt](https://github.com/MrTharinduDasantha/Grocery-Delivery-Website/blob/041aab2cff8135872aa6c9eb0d1a53f209289e1a/Img%20-%205.png)
![image alt](https://github.com/MrTharinduDasantha/Grocery-Delivery-Website/blob/041aab2cff8135872aa6c9eb0d1a53f209289e1a/Img%20-%206.png)
![image alt](https://github.com/MrTharinduDasantha/Grocery-Delivery-Website/blob/041aab2cff8135872aa6c9eb0d1a53f209289e1a/Img%20-%207.png)
![image alt](https://github.com/MrTharinduDasantha/Grocery-Delivery-Website/blob/041aab2cff8135872aa6c9eb0d1a53f209289e1a/Img%20-%208.png)
![image alt](https://github.com/MrTharinduDasantha/Grocery-Delivery-Website/blob/041aab2cff8135872aa6c9eb0d1a53f209289e1a/Img%20-%209.png)
![image alt](https://github.com/MrTharinduDasantha/Grocery-Delivery-Website/blob/041aab2cff8135872aa6c9eb0d1a53f209289e1a/Img%20-%2010.png)
![image alt](https://github.com/MrTharinduDasantha/Grocery-Delivery-Website/blob/041aab2cff8135872aa6c9eb0d1a53f209289e1a/Img%20-%2011.png)
![image alt](https://github.com/MrTharinduDasantha/Grocery-Delivery-Website/blob/041aab2cff8135872aa6c9eb0d1a53f209289e1a/Img%20-%2012.png)

<h4 align="center"> Don't forget to leave a star ⭐️ </h4>

