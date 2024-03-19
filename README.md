
# Project Title

  

## Overview
Keeping a catalogue of Gundam models is essential for any enthusiast. It not only serves as a source of inspiration but also acts as a roadmap for your collection journey. With a comprehensive list, you can easily keep track of the models you own and the ones you've assembled, ensuring you don't miss any in your quest to conquer the Gundam universe. Whether meticulously organizing by series, scale, or grade, a well-maintained catalogue is the ultimate tool for any Gundam builder, ensuring no mobile suit is left behind.

### Problem
Maintaining a catalogue of Gundam models offers several practical benefits for enthusiasts. Firstly, it serves as a personal inventory, allowing you to keep track of the models you own, which can be particularly helpful if you have a sizable collection. This prevents accidentally purchasing duplicates and ensures you can quickly reference which models you already possess.

Secondly, keeping track of the models you've assembled provides a sense of accomplishment and progress in your hobby. It allows you to reflect on your building skills and the diversity of your collection. Additionally, if you enjoy customizing or modifying your models, a catalogue helps you remember which ones you've already worked on and which designs you still want to explore.

Furthermore, a catalogue can be a valuable reference tool when discussing Gundam with fellow enthusiasts. Whether online or in-person, being able to easily reference your collection helps facilitate conversations about specific models, techniques, or favorite designs.

Overall, maintaining a catalogue of Gundam models enhances organization, facilitates personal reflection, and enriches the enjoyment of the hobby for enthusiasts of all levels.

### User Profile
The target users for my Gundam model catalogue app would primarily be Gundam enthusiasts, hobbyists, and collectors. These individuals may vary in their level of expertise, ranging from beginners who are just starting their collection to seasoned veterans with extensive experience in building and customizing Gundam models.

The app would be designed to cater to the diverse needs of these users. Here's how they might use it:

**Cataloguing Collection**: Users can input details of the Gundam models they own, including the model name, series, scale, grade, and any additional notes or customizations they've made. They can easily browse and search through their collection, making it convenient to reference which models they already possess.

**Building Progress Tracker**: For models that users are currently building or plan to build in the future, the app can include a feature to track the progress of each build. Users can mark off completed steps, set reminders for upcoming stages, and record any challenges or modifications encountered during the build process.

**Wishlist Management**: The app can include a wishlist feature where users can add Gundam models they aspire to own or build in the future. This could include upcoming releases, rare models, or designs they find particularly appealing.

**Community Interaction**: To foster a sense of community among Gundam enthusiasts, the app can include social features such as forums, chatrooms, or a photo-sharing platform where users can showcase their builds, exchange tips and techniques, and engage in discussions about their favorite Gundam models and series.

Special considerations that our app must take into account include:

**User-Friendly Interface**: The app should have an intuitive and easy-to-navigate interface, especially for users who may not be tech-savvy. Clear categorization and labeling of features are essential to ensure users can quickly access the functionalities they need.

**Customization Options**: Since Gundam enthusiasts often enjoy personalizing their models, the app should allow users to customize their profile, organize their collection in various ways, and add personalized notes or tags to each model entry.

**Offline Access**: While an internet connection may not always be available, especially during Gundam-building sessions in workshops or conventions, the app should offer offline access to ensure users can still reference their collection and track their progress without interruption.

**Compatibility Across Devices**: The app should be compatible with a range of devices, including smartphones, tablets, and desktop computers, to accommodate different user preferences and ensure seamless access to the catalogue and its features regardless of the device being used.

### Features

**User Registration and Profile Creation:**
 - Users should be able to input basic information such as username, email, and password.
 - Optional profile customization options such as profile picture and bio should be available.

**Catalogue Gundam Models**:
 - Include fields for model name, series, scale, grade, and any additional notes.
 - Users should be able to categorize models by series, scale and grade.

  **Track Building Progress**:
 - Include a checklist or progress bar for each model, allowing users to mark completed steps.
 - Allow users to record any modifications or challenges encountered during the build process.

**Manage Wishlist**:
 - Allow users to add models to their wishlist with details such as model name and series.
   
 **Browse and Search Functionality**:
 - Include a search bar for users to quickly find specific models by name or keyword.
 - Implement filters and sorting options by series, scale, grade, and custom tags.


**Nice to Have Features**
- Offline Access
- Customization Options
- Community Interaction 
- Note Function in Tracking building progress

## Implementation

### Tech Stack

- React
- MySQL
- Express
- Client libraries: 
    - react
    - react-router
    - axios
- Server libraries:
    - knex
    - express
    - bcrypt for password hashing

### APIs

To gather information to create a database - 
[Planet Gundam](https://www.gundamplanet.com/)
[Bandai Hobby](https://satellite.bandai-hobby.net/tips/assemble.php)
[Bandai Gundam Instructions](https://manual.bandai-hobby.net/)

### Sitemap
![site map](./proposal_images/sitemap.png)

### Mockups
- product detail page ![product detail page](./proposal_images/mobile%20product%20detail.png)
- user profile page ![user profile welcome page](./proposal_images/mobile%20user%20profile.png)
- user sign up ![user sign up](./proposal_images/mobile%20user%20sign-up.png)
- user log in ![user log in](./proposal_images/mobile%20user%20log%20in.png)
- catalog logged in ![catalog logged in](./proposal_images/mobile%20catelog%20-signed%20in.png)
- in progress page ![in progress](./proposal_images/mobile%20in%20progress.png)
- completed page ![completed](./proposal_images/mobile%20completed.png)

### Data
![relationship in data](./proposal_images/drawSQL-image-export-2024-03-19.png)

### Endpoints
**For user**

- .get /login
- .post /register

- user profile
    - .get /profile/:id
    - .put /profile/:id (update profile)
    - .delete /profile/:id

- model status 
    - .post /user/:id/modelstatus (set status to eith wishlist or own)
    - .get /user/:id/modelstatus
    - .get /user/:id/modelstatus/gundam/:id
    - .put /user/:id/modelstatus/gundam/:id (updating status to either wishlist, own, in-progress or completed )

**For Catalog**

- .get /gundam
- .get /gundam/:id

- search 
    - .get /gundam/search

- filter
    - .get /gundam?(filter type)

**example of response**

{

    name: 'SD GUNDAM EX-STANDARD RISING FREEDOM GUNDAM',

    brand: 'Bandai',

    series: 'Mobile Suit Gundam SEED',

    grade: 'SD EX-Standard',

    product_number: '249392",

    image: '',

    description:'The "Rising Freedom Gundam" that appears in "Mobile Suit Gundam SEED FREEDOM" is made into a three-dimensional SD Gundam EX Standard! Design arrangement unique to SD Gundam EX Standard. Simple transformation to MA form is possible by replacing some parts. Ensures a range of motion that allows for bold action poses. Beam rifle, beam saber, and shield are included. You can customize play with the HG series by combining equipment. Accessories: Beam rifle x1, Beam saber x2, Shield x1, Seal x 1'
}

### Auth
A simple sign-up form to create an account. 

## Roadmap

- creating database of information
    - limiting to about 25 gundams (5 per grade)

- creating catalog section 
    - displaying gundams
    - displaying gundam details
    - filtering grades

- creating user section
    - creating one user
    - profile 
    - wish list, own, completed, in progress - displaying the right information
    - in progress detail page

- save gundams to wish list or own list

## Nice-to-haves
- being responsive to different screen sizes
- note function in in-progress 
- search function in catalog
- sign-up and log-in function for different users
- creating an admin log in section