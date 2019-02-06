##### WELCOME TO FastFOODFast-React
------------

[![Build Status](https://travis-ci.org/ekumamait/FastFOODFast-React.svg?branch=develop)](https://travis-ci.org/ekumamait/FastFOODFast-React)
------------

##### TABLE OF CONTENT;

------------

- [x] **DESCRIPTION**
- [x] **PROJECT SETUP**
- [] **AVAILABLE ROUTES**
- [] **TESTS**
- [] **PROJECT DEMO**

------------

###### :page_facing_up: DESCRIPTION;

This is an online food order and delivery service app for a restaurant where registered customers can order daily meals from the famous menu and have the meals delivered to them at home or office. The main focus of this build in its present is the re-implementation of the frontend of the FastFOODFast application using ReactJs.

------------

##### PROJECT SETUP

------------

1. Clone the Repository
`https://github.com/ekumamait/FastFOODFast`

2. Navigate to the application directory
` cd FastFOODFast `

3. install all dependencies
` yarn `

4. source all environment variables
` source .env `

5. Run the application
` yarn start `

------------

###### AVAILABLE ROUTES;

| EndPoint                | Methods | Functionality                       |
| ----------------------- | ------- | ----------------------------------- |
| /api/v2/auth/sign_up    | POST    | `signs up a user `                  |
| /api/v2/auth/login      | POST    | `Logs in a user`                    |
| /api/v2/users/orders    | POST    | `place a new order`                 |
| /api/v2/users/orders    | GET     | `Fetch all logged in user's orders` |
| /api/v2/orders          | GET     | `Fetch all users orders`            |
| /api/v2/orders/order_id | GET     | `Fetch specific order`              |
| /api/v2/orders/order_id | PUT     | `Update the status of an order`     |
| /api/v2/menu            | GET     | `Fetch Menu`                        |
| /api/v2/menu            | POST    | `Add meal to the Menu`              |
| /api/v2/users/user_id   | PUT     | `Promote user role to admin`        |

------------

###### :microscope: TESTS;

- [] Tests for components
- [] Tests for reducers
- [] Tests for actions 

- command to run tests:
    ` yarn test -u `

- command to run tests with coverage:
    ` yarn test -u --coverage ` 
      
------------

###### Project Demo;

Here is the link to the Demo:


------------

