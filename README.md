# Zevrin

<table border="0">
<tr>
<td width="120">
  <img src="https://raw.githubusercontent.com/Aswajith7077/Zevrin/main/frontend/public/Zevrin.svg" alt="Zevrin Logo" width="120"/>
</td>
<td>
  <b>A scalable backend for trading consumer goods with dealer connections and credit score integration.</b>
</td>
</tr>
</table>

[![Repo Type](https://img.shields.io/badge/Repo-Monorepo-blue)](#)
[![Frontend](https://img.shields.io/badge/Frontend-React-%2361DAFB)](#)
[![Backend](https://img.shields.io/badge/Backend-FastAPI-%23009688)](#)
[![Database](https://img.shields.io/badge/Database-MongoDB-%2347A248)](#)
[![Containerized](https://img.shields.io/badge/Container-Docker-%232496ED)](#)
[![License](https://img.shields.io/badge/License-Proprietary-red)](#license)


---

## Overview

**Zevrin** is a **mono repository** containing both the backend and frontend codebases for an online marketplace where buyers, sellers, and dealers can trade consumer goods on a common platform.

The system integrates **credit scores** to enable trust-based transactions and provides dealer profiles so users can connect with top-rated dealers.

Built with **FastAPI**, it follows the **MVC architecture** for maintainability, uses **MongoDB** for storage, and **JWT authentication** for secure access.
Fully containerized with **Docker**, it can be deployed easily on any compatible environment.

---

## Features

* **Trading Platform** – Connect buyers, sellers, and dealers.
* **Credit Score Integration** – Trust-based transactions.
* **Dealer Profiles** – View top dealers and their details.
* **MVC Architecture** – Clean and scalable project structure.
* **JWT Authentication** – Secure login and access control.

---

## Tech Stack

* **Frontend**: React
* **Backend**: FastAPI
* **Database**: MongoDB
* **Containerization**: Docker

---

## Project Structure

```
Zevrin/
│── frontend/           # React frontend
│── backend/            # FastAPI backend
│   ├── app/            # Application code (MVC)
│   ├── models/         # Data models
│   ├── services/       # Business logic
│   ├── requirements.txt
│   ├── Dockerfile
│   ├── .env.example
```

---

## Author

Developed by [Aswajith S](https://github.com/Aswajith7077)

---

## License
© 2025 Aswajith S. All rights reserved.  
This project is proprietary software. Unauthorized use, copying, modification, or distribution is prohibited.


