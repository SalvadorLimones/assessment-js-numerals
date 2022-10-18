# JS-USERS APP

This repository contains a react app frontend which renders user data from the server https://assessment-users-backend.herokuapp.com.

It uses get, post and put requests:

On startup, the user data is fetched and displayed with a 10 entries / page pagination.
User first name and last name can be modified with an edit button.
User attribute "locked" can be modified with a differend button.
By clicking on the add user button, new users can be added to the database.

The below image is a shapshot of the app's main page:

<p align="center">
  <img src="./public/snapshots/userlist.JPG " width="700">
</p>

The app was created with the use of Vite and the test cases use Vitest. The app communicates with the server using axios. Packeges used for the design are bootstrap and material icons.

### Starting the app

The app can be fired up using these commands:

- npm i
- npm run dev

### Run tests

- npm test
