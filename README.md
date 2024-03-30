
# Gundam Galaxy

Keeping a catalogue of Gundam models is essential for any enthusiast. It not only serves as a source of inspiration but also acts as a roadmap for your collection journey. With a comprehensive list, you can easily keep track of the models you own and the ones you've assembled, ensuring you don't miss any in your quest to conquer the Gundam universe. Whether meticulously organizing by series, scale, or grade, a well-maintained catalogue is the ultimate tool for any Gundam builder, ensuring no mobile suit is left behind.

This web app is currently set to be used on a mobile device. It has been created using React.js and SASS on the front end, Node and Express for the back-end server, and Knex for querying a MySQL database.
##

![completed](./src/assets/screen%20shots/Group%2013.png)

## Features

**Catalogue Gundam Models**:
 - Users are able to categorize models by grade.

**Manage Wishlist**:
 - Allow users to add and delete models to their wishlist.

**Manage Profile Section**:
 - Allow users to add models that they have already bought, and keep track of the ones they are in the process of making and the ones they have already completed.  

## Run Locally
Clone the project client and server repos

    https://github.com/NadiaDiTrapani/nadia-ditrapani-GundamGalaxy
    https://github.com/NadiaDiTrapani/nadia-ditrapani-backend-gundamgalaxy

## Server Set-Up
Go to server project and install dependencies.

    $ cd nadia-ditrapani-backend-gundamgalaxy
    $ npm install
Run migrations

    $ npx knex migrate:latest

Run seeds

    $ npx knex seed:run

Set environment variables - rename .env.sample to .env and replace values

    PORT=<PORT_NUMBER>
    DB_HOST=<HOST_ADDRESS>
    DB_LOCAL_NAME=<DB_NAME>
    DB_LOCAL_USER=<username>
    DB_LOCAL_PASSWORD=<password>
    JWT_SECRET=<SECRET_KEY>

Start the server

    $ npm run dev
  

## Client Set-Up
Go to client project and install dependencies.

    $ cd nadia-ditrapani-GundamGalxy
    $ npm install

Set environment variables - rename .env.sample to .env and replace values

    VITE-BASE_URL=http://localhost:<PORT SET IN SERVER .ENV>

Start the app

    $ npm run dev

  
## Next-Steps
- Making it responsive to all screen-sizes.
- Getting the buttons to work like they should.
- Search Function.
- In-progress Page.
- Sign-up and log-in function for different users.
- Getting the instructions add to details page.