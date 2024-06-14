# Data View Pro

Welcome to the repository for **Data View Pro**, the ultimate database management solution that allows users to store connection strings for all their databases in one place and manage them effortlessly.

## Table of Contents

- [Project Overview](#project-overview)
- [Functionalities](#functionalities)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

## Project Overview

The Data View Pro project provides a full-stack solution to manage multiple database connections from a single interface. It supports user authentication, database connection management, CRUD operations on tables, and provides meta information about databases.

## Functionalities

- User authentication (sign up, login, logout)
- Database connection management (store and retrieve connection strings)
- Review data like size, table count, and database type
- View meta information like title and description
- CRUD operations on database tables
- Admin functionalities for managing user profiles
- Notifications for database updates

## Technologies

### Backend

- **Framework**: Node.js, Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt
- **Environment Variables**: dotenv

### Frontend

- **Framework**: React
- **State Management**: Redux, React-Redux
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Forms**: React-Hook-Form
- **UI Libraries**: Radix UI, Lucide Icons, React Icons
- **Styling**: TailwindCSS
- **Build Tool**: Vite
- **Linting and Formatting**: Eslint
- **TypeScript**: Superset of JavaScript for static typing

## Installation

To set up the Data View Pro project locally, follow these steps:

### Backend

1. **Clone the repository:**

   ```bash
   git clone https://github.com/WalidAra/data-view-pro-app.git
   cd DataViewPro/backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure the environment variables:**
   Create a `.env` file in the `backend` directory and add the necessary configurations:

   ```plaintext
   PORT=3000
   DATABASE_URL=your_database_url
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the application:**

   ```bash
   npm start
   ```

### Frontend

1. **Navigate to the frontend directory:**

   ```bash
   cd ../frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the application:**

   ```bash
   npm start
   ```

## Usage

1. **Run the backend server**: Start the backend server using `npm start` in the `backend` directory.
2. **Run the frontend application**: Start the frontend application using `npm start` in the `frontend` directory.

## Contributors

- [Walid ARAAR](arawalid90@gmail.com)

## Contributing

1. Create a new branch (`git checkout -b feature/improve-feature`).
2. Make the appropriate changes in the files.
3. Commit your changes (`git commit -am 'Improve feature'`).
4. Push to the branch (`git push origin feature/improve-feature`).
5. Create a Pull Request.

## Acknowledgements

- [Express](https://www.npmjs.com/package/express)
- [Prisma](https://www.npmjs.com/package/prisma)
- [PostgreSQL](https://www.postgresql.org/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Axios](https://www.npmjs.com/package/axios)
- [React](https://www.npmjs.com/package/react)
- [React Router DOM](https://www.npmjs.com/package/react-router-dom)
- [Redux](https://www.npmjs.com/package/redux)
- [TailwindCSS](https://www.npmjs.com/package/tailwindcss)
- [Vite](https://www.npmjs.com/package/vite)
- [Eslint](https://www.npmjs.com/package/eslint)
- [Typescript](https://www.npmjs.com/package/typescript)