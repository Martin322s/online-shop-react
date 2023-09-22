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

## Register User (10 pts)
- Users can register with a valid email and password.
- Send a POST request to /users/register with user registration data.
- Upon successful registration, store the session token using sessionStorage or localStorage.
- Redirect the user to the Dashboard page.
- Display error messages using system dialog (window.alert) for validation and issues.

- ## Logout (5 pts)
- Available to logged-in users.
- Send a GET request to /users/logout.
- Clear session information stored in browser storage upon success.
- Redirect the user to the Dashboard page upon successful logout.

## Dashboard (15 pts)
- Display a list of all shoes in the system.
- Clicking on the details button in a shoe card leads to the details page for that shoe.
- Accessible to both guests and logged-in users.
- If there are no shoes, display a specific view.
- Send a GET request to /data/shoes?sortBy=_createdOn%20desc to retrieve the list of shoes.

- ## Adding New Item (15 pts)
- Available to logged-in users.
- Implement a form for adding a new shoe.
- Check that all fields are filled before sending the request.
- Send a POST request to /data/shoes to create a new shoe.
- Redirect the user to the Dashboard page upon success.

## Item Details (10 pts)
- All users can view details about shoes.
- Display Edit and Delete buttons for the creator of the shoe.
- Send a GET request to /data/shoes/:id to retrieve details about a specific shoe.

- ## Edit Item Screen (15 pts)
- Available to logged-in users for editing their own items.
- Implement a form with input fields for editing properties.
- Check that all fields are filled before sending the request.
- Send a PUT request to /data/shoes/:id to edit a shoe.
- Redirect the user to the Details page upon success.
