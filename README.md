A full-stack URL Shortener application built using Node.js, Express.js, MongoDB, Mongoose, and EJS following the MVC (Model-View-Controller) architecture. The application allows users to register, log in, generate short URLs, track URL visits, and manage their own shortened links through a secure dashboard.

Features
User Registration and Login
Cookie-Based Authentication
Custom Session Management
Protected Routes
Generate Short URLs
Redirect to Original URLs
Track URL Visit History
User-Specific Dashboard
MongoDB Database Integration
MVC Architecture
Server-Side Rendering using EJS

## Project Structure

```text
URL-Shortener/
│
├── controllers/
│   ├── url.js
│   └── user.js
│
├── middleware/
│   └── auth.js
│
├── model/
│   ├── url.js
│   └── user.js
│
├── routes/
│   ├── staticRouter.js
│   ├── url.js
│   └── user.js
│
├── service/
│   └── auth.js
│
├── views/
│   ├── home.ejs
│   ├── login.ejs
│   └── signup.ejs
│
├── connect.js
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```


Authentication Flow
User signs up.
User logs in.
A session ID is generated.
Session ID is stored in memory using a JavaScript Map.
Session ID is stored in browser cookies.
Middleware verifies the session on protected routes.
Authenticated users can create and manage URLs.

This project demonstrates:

MVC Architecture
RESTful Routing
Authentication & Authorization
Session Management
Cookie Handling
MongoDB CRUD Operations
Mongoose Relationships
URL Analytics Tracking
Server-Side Rendering

Tech Stack
Backend
Node.js
Express.js
Database
MongoDB
Mongoose
Frontend
EJS
HTML
CSS
Authentication
Cookie Parser
Custom Session-Based Authentication
