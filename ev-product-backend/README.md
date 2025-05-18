# Full-Stack Developer Technical Task: EV Product Page 1.0.0 Backend
This repository contains the backend code for an EV (Electric Vehicle) product showcase platform. The backend is built with **Node.js**, **Express.js**, and **MongoDB**, providing a set of APIs to manage EV products, serve images, and accept user product requests.# EV Product Page

## Project Overview
This project implements a full-stack web page for an electric vehicle (EV) product, replicating the design of https://ecozaar.in/ather-energy/ather-450x-3-7kwh/. It includes a dynamic product detail page, related products section, and an API to add new products.

## Finalized Technology Stack
- **Frontend**: React.js, Bootstrap, React Router, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose (Atlas)
- **API**: RESTful API
- **Multer** – Image upload handling
- **dotenv** – Environment variable management

## 🛠️ Setup Instructions

1. **Clone the repository**

  git clone https://github.com/Pavan728267/EV-Product-Page.git
  cd ev-product-backend.

2. **Install dependencies**
  npm install

3. **.env file**
  HTTP_PORT=3001
  MONGODB_URI=your-mongodb-connection-string // recommend using the existing .env

4. **Start the backend server**
  npm start


# API Documentation Use POSTMan to insert the Product

1. **POST /api/products/insertProduct**
    **Description**: Uploads an image and full product data to the database.
    **Content-Type**: multipart/form-data
    **Required Fields**:image: product image file
                        productData: JSON string with product details

**Example Request (Postman or curl)**: POST http://localhost:3001/api/products/insertProduct 
  -F "image=@/path/to/image.jpg" 
  -F "productData={
                      "id": 5, // give new id on every new entry
                      "title": "Ultraviolette F77",
                      "price": "₹2,99,000.00",
                      "emi": "EMI starts at ₹9231 per month",
                      "description": "",
                      "longDescription": "The Ultravilote EV Bike price hovers around ₹1,68,719. It is priced competitively for those seeking performance, comfort, and smart commuting...",
                      "brand": "Ultraviolette Electric Scooter",
                      "category": "Electric Vehicle",
                      "color": "Cosmic Black",
                      "colors": ["Hyper Sand", "Space Gray", "Lunar White"],
                      "addOns": [],
                      "kwhBattery": "3",
                      "kmRange": "143",
                      "chargingTime": "7:45",
                      "image": "", 
                      "specification": {
                        "exShowroomPrice": "154,999",
                        "certifiedRange": "150 km",
                        "trueRange": "110 km",
                        "motorPowerNominalPeak": "6.4 kW",
                        "chargingTime": "5h 45m",
                        "fastCharging": "0-50% SOC ( 1.5 km/min ) 50-80% SOC ( 1 km/min )",
                        "motorType": "PMSM",
                        "batteryType": "Lithium-ion",
                        "batteryCapacity": "3.7 kWh",
                        "keyType": "-",
                        "chargerType": "-",
                        "ignition": "Push Button Start",
                        "frontTyreSize": "90/90-12 tubeless tyres",
                        "rearTyreSize": "100/80-12 tubeless tyres",
                        "brakingSystem": "Combined braking system & regenerative braking",
                        "frontBrakeDiameter": "-",
                        "rearBrakeDiameter": "-",
                        "frontBrakeType": "Hydraulically actuated triple-piston calliper disc",
                        "rearBrakeType": "Hydraulically actuated single-piston calliper disc",
                        "frameType": "-",
                        "transmission": "Belt drive",
                        "topSpeed": "90 km/h",
                        "ridingModes": "Smart Eco, Eco Ride & Sport",
                        "acceleration0To40kmh": "3.3 s",
                        "maxTorque": "26 Nm",
                        "instrumentCluster": "17.7 cm (7”) TFT touchscreen",
                        "reverseAssist": "Yes",
                        "chargingStationLocator": "Yes",
                        "sideStandMotorCutoff": "Yes",
                        "music": "Yes",
                        "weight": "111.6 kg",
                        "length": "189.1 cm",
                        "width": "73.9 cm",
                        "height": "111.4 cm",
                        "gradeability": "15 Degree",
                        "wheelbase": "129.6 cm",
                        "seatHeight": "78 cm",
                        "waterWade": "30 cm",
                        "headlight": "LED",
                        "tailLight": "LED",
                        "indicators": "LED",
                        "underSeatStorage": "22L",
                        "batteryIpRating": "IP67",
                        "motorIpRating": "IP66",
                        "controllerIpRating": "IP65",
                        "chassisType": "Precision machined hybrid chassis",
                        "frontSuspension": "Telescopic forks",
                        "rearSuspension": "Symmetrically mounted progressive monoshock",
                        "bagHook": "Yes",
                        "vehicleWarranty": "3 years/30,000 km whichever is earlier",
                        "batteryWarranty": "3 years/30,000 km whichever is earlier"
                      },
                      "subscription": {
                        "plan1": {
                          "title": "Ather 450X 3.7kWh (With Ather Pro and Extended Warranty)",
                          "data": [
                            { "duration": "36 months", "subscription": "5249", "deposit": "12999" },
                            { "duration": "24 months", "subscription": "6799", "deposit": "12999" },
                            { "duration": "12 months", "subscription": "9999", "deposit": "12999" }
                          ]
                        },
                        "plan2": {
                          "title": "Monthly Subscription as per Exchange Vehicle Age",
                          "data": [
                            { "duration": "36 months", "upto2": "3499", "y3to4": "3699", "y5to6": "-", "deposit": "-" },
                            { "duration": "24 months", "upto2": "4299", "y3to4": "4599", "y5to6": "-", "deposit": "-" },
                            { "duration": "12 months", "upto2": "5249", "y3to4": "5599", "y5to6": "-", "deposit": "-" }
                          ]
                        }
                      }
                    }"


2. **GET /api/products/getProductinfo?id=1**
    **Description**:Fetches detailed information for a single product.
    **Required Fields**:need to pass the Product id in parms.

3. **GET /api/products/getAllProducts** 
    **Description**:Returns a list of all basic product entries.

4. **POST /api/products/requestProduct**
    Submit a product suggestion or request, this is implemented for product adding request since this is an user page Add product access need to be only with admin so i have designed this api for User to request product.
    Content Type: application/x-www-form-urlencoded or application/json

5. **GET /api/products/getRequestedProduct**
    Returns all user-requested product submissions.


# Database Schema Overview

1. **Product Collection (Product)**
    Stores basic product data for listing.

    {
      "id": Number,
      "name": String,
      "price": String,
      "image": String (file path)
    }

2. **ProductDetails Collection (ProductDetails)**
    Stores full product specifications, subscription plans, and metadata.

    {
      "id": Number,
      "title": String,
      "price": String,
      "description": String,
      "specification": { ... },
      "subscription": {
        "plan1": { title, data: [...] },
        "plan2": { title, data: [...] }
      },
      "image": String
    }

3. **RequestedProduct Collection**
    Captures user requests for unavailable EVs.

    {
      "name": String,
      "desc": String
    }


## 📘 Design Decisions

### 1. Separation of Concerns
Used separate models (`Product` and `ProductDetails`) for optimized queries and flexibility.

### 2. File Upload Handling
Multer middleware is used to handle image uploads.

### 3. Static File Serving
Express serves image files from `/uploads` via `express.static`.

### 4. Admin-Controlled Product Addition
(Your add-product design decision paragraph)


# Design Decision – Handling "Add Product" Functionality:

Although the requirement included an "Add Product" feature, I considered that allowing users to directly add products would typically fall under administrative privileges rather than general user interactions. To maintain proper access control and data integrity, I implemented a workaround where users can submit product requests through a dedicated endpoint **/requestProduct**. These requests are stored and can be reviewed by an admin via the **/getRequestedProduct** API. If approved, the admin can then use tools like Postman to add the product using the **/insertProduct** endpoint. This approach keeps the user flow clean while respecting typical application permission boundaries.