# IanTrails

The IanTrails app is a social media interface for displaying hikes that one has been on. It has been set up to have similar styling to instagram, so that it is enjoyable to read through the information.

## Current Functionality:

The app loads with a db.json file http://localhost:4000/hiking. 

The app has a nav bar with three components: About, HikingForm, HikingPage

- About: This page acts as an introduction to the site. It has hiking images and shows a list of the benefits of hiking.

- HikingPage: Hiking information from the db.json file is displayed. The information shows the name, location, an image, as well as hike distance. There is also a like button that persists with each click. The hiking cards also show if a trail is dog friendly or not.

- HikingForm: Users can submit a new hike through the hiking form, where they can input new hikes as they complete them. Once submitted, the hike will move to the hiking page. The submission only persists if the user types in all of the information (name, location, distance, and image URL).

## Future Functionality:

Once the site has a backend (with future Flatiron phases) users will have the ability to create their own profiles. This current site has only one profile to add to. Individuals will be able to see who has completed similar hikes to them once a full backend server is up and running.

## Component Tree
- App
    - NavBar (links to About, HikingForm, HikingPage)
    - About
    - HikingForm
    - HikingPage
        - Hiking List
            - Hiking Card
    

## Usage
Install the dependencies
```bash
npm install
```

Open the db.json file at....
```bash
json-server -p 4000 db.json
```

Then run the app
```bash
npm start
```
Tadaaa!!! The app should be running on http://localhost:3001