# SEI Project 3: Earthbnb


## Overview

Group members:

Aaron Zahl: https://github.com/Zahlsky  
Flora Stocks: https://github.com/florastocks  
Arianna Giordano: https://github.com/silverjana  

### Timeframe: 

 9 days

### The Brief:

Build a full-stack application by making your own backend and your own frontend
Use an Express API to serve your data from a Mongo database
Consume your API with a separate frontend built with React
Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut
Be deployed online so it's publicly accessible.

Our Idea:
A platform where users can register, create a personal profile, add Properties to rent or leave reviews on other’s properties. 
Deployed project: 
https://project3-earthbnb.netlify.app/

Please feel free to log in using the following credentials: 
Username: Jane
Password: 1234

### Technologies used: 
Back-end:
Node.js
Mongodb
Express
Bcrypt
Mongoose
jsonwebtoken
Frontend:
React
HTML
JavaScript
SCSS
Axios
Nodemon
React Router Dom
MaterialUI React Library
Development tools:
Excalidraw (wireframing)
VSCode
NPM
Insomnia
Git
Github
Google Chrome dev tools
Heroku (back end deployment)
Netlify (front end deployment)
Trello Board (planning and timeline)
 
## Process

#### Day 1 
We started with a wireframe planning on Excalidraw for both front and back end  
I set up a Trello Board to coordinate with my teammates  
Project approval by course instructor  
Initial look at new React libraries - I felt like we could take advantage of this project to practice with new material
![excalidraw sketch](https://i.imgur.com/vSijeF1.png)  
![excalidraw sketch](https://i.imgur.com/gF0Mn3C.png)
![excalidraw sketch](https://i.imgur.com/kFX1FbJ.png)
![trello board](https://i.imgur.com/RHS4Nwg.png)


#### Day 2
Collaboration on Github and MongoDB Atlas setup.
Setup of Cloudinary account
Front-end: I created the React app through the terminal, added some basic components to check router functionality,  and installed some packages like axios, bcrypt and jwt. Group added navbar, React-bootstrap and SASS. 
Backend - Group created dB, started on seedingData, server.js, app.js. 
I wrote a first version of the models (property and user) and added the middleware: logger, auth, errorHandler
![user schema](https://i.imgur.com/FdXGiva.png)  
![error handler](https://i.imgur.com/Jg3CEP8.png)  

#### Day 3
Frontend: We created route paths and components pages, connected the pages together with navigate() and buttons, and successfully deployed to Netlify
Backend: I coded the review controller
![create review](https://i.imgur.com/4Axxwk5.png)  
, linked it to the router, and debugged some errors that prevented db access from the browser. We then attempted to deploy backend to heroku with some errors



#### Day 4-5 (weekend)
Frontend: Group added carousel with buttons to landing page and navbar dropdown. We changed it so that it fetched data from the deployed backend and added endpoints for GetAll, Register, Login and GetIndividual.
Heroku deployment: I cleaned some minor coding mistakes and helped fix a deployment error (error 8000, {handshake} issue) - we needed to update the connection string with a new username and password (no numbers) on Atlas.  


#### Day 6

Front-end: Group added carousel images on property cards on the main page.
I worked on creating and styling the Login and Register pages and started on the User profile page.
![register](https://i.imgur.com/QRCnNnL.png)  
![register return](https://i.imgur.com/ySJXjTf.png)  
Backend:Group created Seeding data with images stored in Cloudinary and continued on CRUD functionality for reviews.
Deployed latest version and connected frontend and backend


#### Day 7 

Frontend: Group started the AddProperty form page, worked on the image layout on the single property page. I finished the User profile page.

Backend: 
I started writing the userData function in the User controller for the data to display correctly on the User profile page, which was really difficult until I realised that the user model did not have reviews. So I modified the user model to have embedded reviews too, and then had to modify the review controller in order to add and modify the reviews in both arrays ( property and user) when created or updated.
![update review](https://i.imgur.com/nWRtq3E.png)      
I also added some reviews to the seeding data to test functionality. We fixed the endpoint to match the front end and be uniform and clearer
Group updated review and property models and seeding data following front end necessities


#### Day 8
Frontend: 
Group added the filter to the main page and split the single property page into components for clarity.
I finished the User profile page: added a ternary to display only a button to log in if the user is not logged in and added navigate buttons to see or create a property.
I then created the Add review page and the Update review page, the corresponding routes, and added the ‘leave a review’ button to the single property page. 
I also added a smooth scroll to top effect, image lazy loading and loading bar to pages needing it.
I then started on styling, setting SASS variables for background, buttons, title and footer colours, the user profile page cards, the forms, submit and navigate buttons with hover effect, and the error display messages. 
![CSS variables](https://i.imgur.com/oBHMGzX.png)   
![CSS button](https://i.imgur.com/7P6Qz8z.png)   
Backend:
We solved an UserData return issue by adding Method Lean to it.
Group added amenities to property model and seeding data



#### Day 9 
Frontend:
Group implemented update image option for add property page and finished styling main page 
Realising we were severely behind on schedule with the styling, I concentrated on that even if the back end was not perfect: 
- created and styled the sticky footer with links to our github pages. Then I put  the treehouse logo together in Canvas and added it to navbar. I downloaded a font file, imported it to main.scss with @font-face and styled the title. 
- styled drop down menus for navbar and main page filter, the error and submitted messages for forms, and added a  “go back” button after a successful login that navigates to the previous page.
- updated the router paths and names for readability and coherence, and changed the connection string from hardcoded to an environmental constant.
- finished the Update review page, adding a new axios request to pre-populate the fields.
![get old review req](https://i.imgur.com/GWsNwf2.png)   

Backend:
I added the property id to the reviews in user model (always the same issue of embedded data, before could not access property from user profile)
Added a function in userController to get a single user review back (after some issues with the endpoint because of wrong request data and an Id mix up)


#### Deployment day - last minute fixes:

Backend:
Delete endpoint updated to search property reviews by user and not id, as the id from the request is the review Id in the user model, not the property model (after my advice, as teammate did not understand the issue)
![delete review](https://i.imgur.com/KadHmzD.png)   
What I did: Deleted review endpoint was still not working completely, as it was only deleting data from the user and not the property. Had to add a filter to the property reviews to complete functionality.
![delete review 2](https://i.imgur.com/TB1aTRB.png)   
Front end: Netlify deployment.


## Final Product
![landing](https://i.imgur.com/BgG2isl.png)  

### Wins and Blockers: 
#### Wins:

Apart from the db setup and cloudinary use, I participated in most of the coding and helped others with their issues, so I have direct experience with all the different components needed to build an app and the relationships between them. We also managed to create a working website with most of the functionalities we wanted, and even if we realised too late that the embedded relationship for the reviews was not ideal, we worked around it.

#### Blockers: 

I think one of the main issues as a team was that we did not spend enough time at the planning stage and did not coordinate well. 
We did not think in detail about what data was to be displayed in each page, especially the two more information dense ones (User profile and single property), and we did not take into account that the reviews were to be added in the single property page but also displayed, edited and deleted from the user profile, so we chose the wrong kind of relationship. Had we stored the reviews as a reference, we would have had simpler controllers (no need to create or update in two different places) and no mix ups with two review IDs for the “same” review.

I tried setting up a trello board, but it was never used, and there was no other project management apart from a checklist on my notebook and very short standups when I asked what we did until that point, so it happened that a teammate did not check the commits from the day before and in the morning started on something I did the previous afternoon or that we missed something until the last minute.

There was also a teammate that offered to work on the front end from the start, and while they did a lot of work on the seeding data and the image display, I also think that they did not manage well the resources (I do not like at all the hardcoded images in the single property page that could have been displayed faster and more dynamically using a library, not spending days on something that is nor graceful nor adaptable to the different image sizes) or their time, as I had to step in at the last minute to get a simple but finished product. 
There are probably things that are styled twice in the CSS, but I unfortunately had no time to try and understand 300 lines of uncommented code by that point, so I just built on top of what was already there. 







#### Key Learnings
- Github: setup, collaboration, branches, merging.
- differences between reference and embedded DB relationships, and when to use which.
- the importance of detailed planning beforehand  and of splitting the project between the group members in a clear way 



#### Future improvements

Needed:
Better images display on single property page ( Not hardcoded like now)
Add a logout button and logic
Add 404 page not found component and path 

Quick fixes:
Add username on reviews
Add user profile image
More difficult but nice to have:
Average ratings for properties
Search bar in all properties

Really complicated but would solve a lot of issues: 
Reviews not embedded but as reference.

