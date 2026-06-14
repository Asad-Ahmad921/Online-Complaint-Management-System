# 🚀 Online Complaint Management System

A modern web-based Complaint Management System designed to streamline the process of registering, tracking, managing, and resolving complaints through a centralized digital platform.

The system enables users to submit complaints online while providing administrators with powerful tools to monitor, update, and resolve issues efficiently. This project aims to improve transparency, reduce manual paperwork, and enhance communication between users and authorities.

## 🌐 Live Demo

**Frontend + Backend Integrated Deployment**

* Live Application: https://complaint-tracker-system.netlify.app
* Backend API: https://online-complaint-management-system-qzcf.onrender.com

This project is fully deployed with a live frontend hosted on Netlify and a backend API hosted on Render, connected to MongoDB Atlas.

## 📖 Overview

The Online Complaint Management System is developed to automate the traditional complaint handling process. Users can register complaints, monitor their progress, and receive updates, while administrators can efficiently manage and resolve complaints through a dedicated dashboard.

This solution is suitable for educational institutions, organizations, government departments, residential societies, and customer support environments.

## ✨ Key Features

### 👤 User Features

* Secure User Registration & Authentication
* Login & Account Management
* Submit New Complaints
* Track Complaint Status in Real-Time
* View Complaint History
* Update User Profile
* Responsive User Interface

### 🛡️ Administrator Features

* Secure Admin Dashboard
* View and Manage Complaints
* Update Complaint Status
* Assign and Resolve Complaints
* Monitor Complaint Statistics
* Manage User Accounts
* Improve Complaint Resolution Workflow

## 🏗️ System Architecture

```text
Frontend (HTML, CSS, JavaScript)
            │
            ▼
Backend API (Node.js, Express.js)
            │
            ▼
Database (MongoDB Atlas)
```

## 🛠️ Technology Stack

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose ODM

### Development Tools

* Git
* GitHub
* MongoDB Atlas
* Postman
* Render
* Netlify

## 📂 Project Structure

```text
Online-Complaint-Management-System
│
├── frontend/
│   ├── index.html
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/Asad-Ahmad921/Online-Complaint-Management-System.git
```

### Navigate to Project Directory

```bash
cd Online-Complaint-Management-System
```

### Install Dependencies

```bash
cd backend
npm install
```

### Configure Environment Variables

Create a `.env` file inside the backend directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Run Application

```bash
npm start
```

Application will run at:

```text
http://localhost:5000
```

## 🔄 Workflow

1. User creates an account.
2. User logs into the system.
3. Complaint is submitted through the portal.
4. Complaint data is stored in MongoDB Atlas.
5. Administrator reviews the complaint.
6. Status is updated (Pending, In Progress, Resolved).
7. User tracks progress through the dashboard.
8. Complaint is resolved and archived.

## 🔐 Security Features

* Authentication & Authorization
* Protected Routes
* Password Encryption using bcrypt
* Secure Database Connectivity
* Environment Variable Protection
* Role-Based Access Control (RBAC)
* JWT Authentication

## 📈 Future Enhancements

* Email Notifications
* SMS Alerts
* Complaint Priority Management
* Document & Image Uploads
* Analytics Dashboard
* AI-Based Complaint Classification
* Real-Time Notification System
* Mobile Application Support

## 🎯 Project Objectives

* Digitize the complaint management process.
* Improve transparency and accountability.
* Reduce response and resolution time.
* Provide centralized complaint tracking.
* Enhance user experience through automation.

## 📸 Screenshots

Add screenshots of:

* Login Page
* Registration Page
* User Dashboard
* Complaint Submission Form
* Admin Dashboard

## 👨‍💻 Developer

**Asad Ahmad**
B.Tech – Computer Science & Engineering (Artificial Intelligence & Machine Learning)

## ⭐ Support

If you find this project useful, consider giving it a ⭐ on GitHub.

## 📄 License

This project is developed for academic and educational purposes.
