# College Club Portal

A full-stack web application for managing club events and members. Built with **Angular** on the frontend and **Spring Boot** on the backend.

---

## 🧱 Tech Stack

### Frontend
- Angular
- TypeScript
- SCSS
- Proxy configuration for API routing

### Backend
- Java (Spring Boot)
- Spring Security
- REST API architecture
- Maven for build management
- JPA for database interactions

---

## 📁 Project Structure
club-portal/<br>
├── portal_frontend/ # Angular Frontend<br>
│ ├── src/ # Angular source files<br>
│ ├── angular.json # Angular configuration<br>
│ ├── package.json # Node dependencies<br>
│ └── proxy.conf.json # API proxy for development<br>
├── portal_backend/ # Spring Boot Backend<br>
│ ├── src/ # Java source files<br>
│ ├── pom.xml # Maven dependencies<br>
│ └── HELP.md # Spring-generated help file<br>



---

## 🚀 Getting Started

### Prerequisites

Make sure the following are installed:

- Node.js (v16 or later)
- Angular CLI (`npm install -g @angular/cli`)
- Java 17 or higher
- Maven (v3.8 or higher)

---

### 🔧 Running the Frontend

```bash
cd portal_frontend
npm install
ng serve
```
- App will be available at: http://localhost:4200

- API calls are proxied to the backend via proxy.conf.json
  
---

### ⚙️ Running the Backend
```bash
cd portal_backend
./mvnw spring-boot:run
```
- Backend API available at: http://localhost:8080

- Spring Security handles authentication

- Controllers available under /api/

---

📌 Features

    🧑‍💻 Admin and Member Access

    🔐 User Authentication (Login system via Spring Security)

    📅 Event Creation and Registration

    📦 RESTful API for integration with frontend

---

## Authors
Yashaswini M R<br>
Lakshmi H Siddaveer<br>
Sandeep C R<br>
G S Vismaya
