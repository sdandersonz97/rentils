# Rentils

React and Redux web-app designed to: keep track of all the rentals, rent apartments, register payments, assign aparments to employes and more!
Use Firebase for a auth and save the data.
## Important
When you create an company account you get access to your own space in the database, other companies registered don't have access to it
## Run Rentils
`git clone https://github.com/sdandersonz97/rentils.git` 

`cd rentils`

`npm install`

`npm start`

## Test Account
company account: 
  email: test@test.com
  Password: test@test.com
## How it works
Rentils is an app designed to make easy the hard task of magnament rentals.
First you need to signup as admin of your company, then you will get access to you own dashboard, also you have access to admin features like:
* Rentals list
* Employees list
* Create new rentals
* Assign rentals to employee
* Create new employee
* Rent new rental and assign a employee
* Rental info (earned, expended, basic info, rent info)
* Employee info (earned, expended, rented, assigned rentals, activity)

When you create a account for you employee, he can access to his dashboard from the main page just typing his email and password assigned by the admin
The employee has access own features:
* Register rent
* Register rental expenses  
* Register rent payment
* Register rent Payment note (This features allow to the employee divide a rent bills in two payments)
* Assigned Rentals
* profile (earned, expended, rented, assigned rentals, activity)

## Issues
* When you access from a mobile device is necesary refresh the page to se items in the menu
* Don't have the features to pagination for big lists