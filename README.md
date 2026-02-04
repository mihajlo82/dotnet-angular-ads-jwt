# Ads Platform: Full-Stack .NET Core + Angular + PostgreSQL with Docker & CI/CD

## 🚀 Project Overview

This is a **full-stack advertisement management platform** built using **.NET 8 Web API**, **Angular JS**, and **PostgreSQL**. The project is fully **containerized with Docker**, deployed on **AWS EC2**, and follows **DevOps best practices** including CI/CD, multi-environment branches, and secure JWT authentication.  

It simulates a real-world production application with modern development, deployment, and infrastructure patterns.

---

# 📢 Ad Cards Web Application

A responsive web application developed with **.NET Core**, **Angular**, and **PostgreSQL**, designed to display and manage advertisement cards. This project demonstrates a modern **full-stack architecture** with secure authentication, clean separation of concerns, and a responsive user interface suitable for real-world applications.

---


## 🚀 Features

- **Home Page** – Public view of advertisement cards  
- **Login Page** – Secure authentication for authorized users  
- **Dashboard** – Restricted area for managing ads  
- **CRUD Operations** – Create, update, and delete advertisement cards  
- **Authorization** – Only authenticated users can access management features  
- **Responsive Design** – Optimized for mobile and desktop screens  

---

## 🛠 Tech Stack

- **Backend:** .NET Core Web API  
- **Frontend:** Angular  
- **Database:** PostgreSQL  

---

## 🔧 Technologies & Services Used

| Layer | Technology | Why it’s awesome |
|-------|------------|----------------|
| Backend | .NET 8 Web API | Modern, high-performance, strongly typed REST API with async database calls |
| Frontend | Angular 17 | Single Page Application with TypeScript, modular components, and routing |
| Database | PostgreSQL 16 | Production-grade relational database with EF Core migrations |
| Authentication | JWT | Secure token-based authentication with role-based authorization |
| Containerization | Docker | Each service runs in isolated, portable containers |
| Orchestration | Docker Compose | Manage multi-container setups locally and in production |
| Cloud Hosting | AWS EC2 | Publicly accessible environment simulating real-world deployment |
| CI/CD | GitHub Actions | Automated build, test, and deployment pipeline for Dev and Prod branches |
| Web Server | Nginx | Serves Angular frontend and proxies API requests |
| SSL | Let's Encrypt | HTTPS with automated certificate renewal for secure connections |

---

## 🏗 Architecture


- **Angular Client**: Consumes API endpoints, handles authentication, and displays ads.
- **Nginx**: Serves frontend, handles HTTPS termination, and routes API requests.
- **.NET API**: Handles business logic, JWT authentication, and database CRUD operations.
- **PostgreSQL**: Persistent storage with proper migration tracking.

---

## ⚙️ Features

- **CRUD operations** for Ads (Create, Read, Update, Delete)
- **JWT authentication** with secure key handling
- **EF Core migrations** to version and update database schema
- **Multi-container Dockerized setup**:
  - `ads-api` (.NET)
  - `ads-client` (Angular + Nginx)
  - `ads-postgres` (PostgreSQL)
- **CI/CD pipeline** with GitHub Actions:
  - Auto-deploy on push to `main`
  - Separate `dev` and `prod` branches
- **Cloud deployment**: Running live on AWS EC2 instance
- **HTTPS** with Nginx and Let's Encrypt

---

