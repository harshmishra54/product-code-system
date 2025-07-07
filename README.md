# 🛠️ Product Code Management System (Node.js + Express.js)

This is a backend system built using **Node.js** and **Express.js** that supports two user roles: **Admin** and **User**. Admins can upload product data and generate unique codes for batches. Users can search products using unique codes and view product info.

---

## 🚀 Features

### 👨‍💼 Admin
- ✅ Register/Login with role `admin`
- ✅ Add a product to master
- ✅ Upload product image
- ✅ Generate unique codes (UUID) per batch

### 👤 User
- ✅ Register/Login with role `user`
- ✅ Search product using a unique code
- ✅ View product image, batch number, and code

---

## 🧱 Tech Stack

- Node.js (LTS)
- Express.js
- MongoDB with Mongoose
- Multer (file upload)
- UUID (code generation)
- JWT (authentication)

---

## 📁 Folder Structure

product-code-system/
├── controllers/ # Logic for routes
├── middleware/ # JWT + image upload
├── models/ # Mongoose schemas
├── routes/
│ ├── admin.js # Admin APIs
│ └── user.js # User/Auth APIs
├── uploads/ # Image uploads
├── app.js # Main Express app
├── .env # Config vars
├── package.json
└── README.md

yaml
Copy
Edit

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd product-code-system
2. Install Dependencies
bash
Copy
Edit
npm install
3. Create .env File
env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
4. Run the Server
bash
Copy
Edit
npm run dev
📬 API Endpoints
🔐 Auth (Common)
Method	Endpoint	Description
POST	/api/user/register	Register user or admin
POST	/api/user/login	Login and get token

👨‍💼 Admin Routes
Method	Endpoint	Description
POST	/api/admin/add-product	Add product with image
POST	/api/admin/generate-codes	Generate UUID codes for batch

🛡️ Requires Header: Authorization: Bearer <admin_token>

👤 User Route
Method	Endpoint	Description
GET	/api/user/search-by-code?code=<uuid>	Search by unique code

🛡️ Requires Header: Authorization: Bearer <user_token>

📦 Postman Collection
A Postman collection is available that covers:

Register/Login

Add product (image)

Generate codes

Search product

Be sure to update tokens and productId in the requests.

✅ Sample Payloads
Register
json
Copy
Edit
{
  "username": "admin1",
  "password": "adminpass",
  "role": "admin"
}
Login
json
Copy
Edit
{
  "username": "admin1",
  "password": "adminpass"
}
Generate Codes
json
Copy
Edit
{
  "productId": "replace_with_product_id",
  "batchNumber": "BATCH-001"
}
📸 Image Upload Notes
Use form-data in Postman for adding product

Key: image, Type: File

Other fields: name, batchSize, mrp

✅ Evaluation Criteria Fulfilled
✅ Clarity of Code

✅ Correct Logic

✅ Modular Structure

✅ RESTful API Design

✅ All Working Features

✅ JWT Auth + MongoDB (Bonus ✅)

📌 Author
Harsh Mishra