[X] The code should be written in ES6 as much as possible
  -Used ES6 syntax with importing & creating components and writing functions

[X] Use the create-react-app generator to start your project.
  -ran command: `create-react-app client` to create the client side of my application

[X] Your app should have one HTML page to render your react-redux application
  -create-react-app generated the index.html file in the public folder

[X] There should be 2 container components
  -1) DinnerShow
  -2) Dinners

[X] There should be 5 stateless components
  -1) SideNavBar
  -2) DinnerCard
  -3) DinnerList
  -4) DirectionInput
  -5) Home
  -6) Image
  -7) ImageUploader
  -8) IngredientInput

[X] There should be 3 routes
  -1) '/dinners'
  -2) '/dinners/new'
  -3) '/dinners/:dinnerId'

[X] The Application must make use of react-router
  -Imported BrowserRouter as Router, Route, Switch to create navigation system

[X] The Application must use proper RESTful routing
  -1) '/dinners' connects to the dinner#index
  -2) '/dinners/new' connects to the dinner#new
  -3) '/dinners/:dinnerId' connects to the dinner#show

[X] Use Redux middleware to respond to and modify state change
  -1) Used Thunk as a middleware

[X] Make use of async actions to send data to and receive data from a server
  -1) fetchDinners(), fetch dinners from the API and upon success dispatches the setDinners(), which adds the dinners to the state array
  -2) createDinner(), posts form input to the API and upon success dispatches the addDinner(), which adds the new dinner to the state array & redirects the user to the new dinner
  -3) deleteDinner(), sends a delete request with the dinner id to the API and upon success dispatches the removeDinner(), which removes the dinner from the state array & redirects user to the dinners index page

[X] Your Rails API should handle the data persistence.
  -API is set up to accept client form data in the format of a nested attribute, which will allow it to be persisted to db
  -API renders json responses, which are sent back to the client for each index, show, and create actions

[X] You should be using fetch() within your actions to GET and POST data from your API
  -1) fetchDinners(), gets dinners from the API
  -2) createDinner(), posts form input to the API
  -3) deleteDinner(), sends a delete request with the dinner id to the API

[X] Your client-side application should handle the display of data with minimal data manipulation
  -1) Dinners, DinnerList, DinnerShow & DinnerCard only add css to make the dinners display attractively

[X] Your application should have some minimal styling
  -Used:
    -React-Bootstrap
    -Bootstrap
    -Custom styling (my own css)

ADDITIONAL FEATURES:
[X] Model specs test suite
[X] Dynamic form fields
[X] Integrated Image uploading system
[X] Form error handling
[X] Used nested attributes
