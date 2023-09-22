# This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 1.	Overview
Implement a front-end app (SPA) for creating and managing shoes. The application allows visitors to browse through the shoes catalog. Users may register with an email and password which allows them to create their own shoe card. Item authors can also edit or delete their own publications at any time.

# Application Requirements

## Navigation Bar (5 pts)
- Implement a NavBar for the app with the following navigation links:
  - Home page
  - Search page
  - Dashboard page
  - Login (for guests)
  - Register (for guests)
  - Add Pair (for logged-in users)
  - Logout (for logged-in users)

## Home Page (10 pts)
- Implement a static Home page using the provided structure.

## Login User (5 pts)
- Users can log in using email and password.
- Send a POST request to /users/login with the provided user credentials.
- Upon successful login, store the session token using sessionStorage or localStorage.
- Redirect the user to the Dashboard page.
- Display error messages using system dialog (window.alert) if there are any issues.
