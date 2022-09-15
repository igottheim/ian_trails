IanTrails

The IanTrails app is a social media interface for displaying hikes that one has been on. It has been set up to have similar css styling to instagram, so that it is enjoyable to read through the information.

Current Functionality:

The app loads with a db.json file (http://localhost:4000/hiking). 

The app has a nav bar with three components: About, HikingForm, HikingPage

About: This page acts as an introduction to the site. It has hiking images and shows a list of the benefits of hiking.

HikingPage: Hiking information from the db.json file is displayed. The information shows the name, location, an image, as well as hike distance. There is also a like button that persists with each click. The hiking cards also show if a trail is dog friendly or not.

HikingForm: Users can submit a new hike through the hiking form, where they can input new hikes as they complete them. Once submitted, the hike will move to the hiking page. The submission only persists if the user types in all of the information (name, location, distance, and image URL).

Future Functionality:

Once the site has a backend (with future Flatiron phases) users will have the ability to create their own profiles. This current site has only one profile to add to. Individuals will be able to see who has completed similar hikes to them once a full backend server is up and running.

Component Tree
App
    NavBar (links to About, HikingForm, HikingPage)
    About
    HikingForm
    HikingPage
        Hiking List
            Hiking Card
    

Open the db.json file at....
json-server -p 4000 db.json


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
