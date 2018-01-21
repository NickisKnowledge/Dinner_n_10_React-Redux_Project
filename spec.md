[X] The code should be written in ES6 as much as possible
  <br />
  -Used ES6 syntax with importing & creating components and writing functions

[X] Use the create-react-app generator to start your project.
  <br />
  -ran command: `create-react-app client` to create the client side of my application

[X] Your app should have one HTML page to render your react-redux application
  <br />
  -create-react-app generated the index.html file in the public folder

[X] There should be 2 container components
  <br />
  -1) DinnerShow
  <br />
  -2) Dinners

[X] There should be 5 stateless components
  <br />
  -1) SideNavBar
  <br />
  -2) DinnerCard
  <br />
  -3) DinnerList
  <br />
  -4) DirectionInput
  <br />
  -5) Home
  <br />
  -6) Image
  <br />
  -7) ImageUploader
  <br />
  -8) IngredientInput

[X] There should be 3 routes
  <br />
  -1) '/dinners'
  <br />
  -2) '/dinners/new'
  <br />
  -3) '/dinners/:dinnerId'

[X] The Application must make use of react-router
  <br />
  -Imported BrowserRouter as Router, Route, Switch to create navigation system

[X] The Application must use proper RESTful routing
  <br />
  -1) '/dinners' connects to the dinner#index
  <br />
  -2) '/dinners/new' connects to the dinner#new
  <br />
  -3) '/dinners/:dinnerId' connects to the dinner#show

[X] Use Redux middleware to respond to and modify state change
  <br />
  -1) Used Thunk as a middleware

[X] Make use of async actions to send data to and receive data from a server
  <br />
  -1) fetchDinners(), fetch dinners from the API and upon success dispatches the setDinners(), which adds the dinners to the state array
  <br />
  -2) createDinner(), posts form input to the API and upon success dispatches the addDinner(), which adds the new dinner to the state array & redirects the user to the new dinner
  <br />
  -3) deleteDinner(), sends a delete request with the dinner id to the API and upon success dispatches the removeDinner(), which removes the dinner from the state array & redirects user to the dinners index page

[X] Your Rails API should handle the data persistence.
  <br />
  -API is set up to accept client form data in the format of a nested attribute, which will allow it to be persisted to db
  <br />
  -API renders json responses, which are sent back to the client for each index, show, and create actions

[X] You should be using fetch() within your actions to GET and POST data from your API
  <br />
  -1) fetchDinners(), gets dinners from the API
  <br />
  -2) createDinner(), posts form input to the API
  <br />
  -3) deleteDinner(), sends a delete request with the dinner id to the API

[X] Your client-side application should handle the display of data with minimal data manipulation
  <br />
  -1) Dinners, DinnerList, DinnerShow & DinnerCard only add css to make the dinners display attractively

[X] Your application should have some minimal styling
<br />
  -Used:
  <br />
    -React-Bootstrap
    <br />
    -Bootstrap
    <br />
    -Custom styling (my own css)

ADDITIONAL FEATURES:
<br />
[X] Model specs test suite
<br />
[X] Dynamic form fields
<br />
[X] Integrated Image uploading system
<br />
[X] Form error handling
<br />
[X] Used nested attributes
