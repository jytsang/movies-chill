## Evaluation project for Indorse

This project was created to fetch movies and people from [The Movie Database API](https://www.themoviedb.org/documentation/api). It uses the React Javascript framework to render content and Redux for state control. Default [Bootstrap 4](https://getbootstrap.com/) styles are used to keep the project focused on React.

In the project directory, you can run:

### `npm start`

This will run the app and make it available on localhost.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

**Note:** API key is in a universal .env file for convenience in running this project. For production projects the API key should be hidden with .env.local/development and .env.production files.

## Core Modules

### Create React App

[Create React App](https://github.com/facebook/create-react-app) is used to quickly scaffold the project with React and setup run scripts.

### React Router

[React Router](https://github.com/ReactTraining/react-router) is used for route control in the application.

### axios

[axios](https://github.com/axios/axios) is used to fetch data from the API.

### Redux

[Redux](https://redux.js.org/) is used for state control.

### Redux Thunk

[Redux Thunk](https://github.com/reduxjs/redux-thunk) is used as a middleware to control AJAX requests and dispatch actions.

### Redux Form

[Redux Form](https://redux-form.com/8.1.0/) is used to create the search box and connect the form to the redux state.

### React Paginate

[React Paginate](https://github.com/AdeleD/react-paginate) component is used for pagination in the movie listing pages.