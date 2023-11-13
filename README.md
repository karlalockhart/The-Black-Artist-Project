///
NAME OF PROJECT: 
The Black Artist Project

///
URL
https://karlalockhart.github.io/The-Black-Artist-Project/


///
DESCRIPTION:
This single page application (SPA) is about providing easier access in finding and curating black artist artwork. It's a site that gathers a collection of black artist artwork from other art sites including the MET (Metropolitan Museum) and The Art Institute of Chicago, thus utilizing their api via db.json. This SPA will include HTML, CSS, & JavaScript.

///
HOW TO RUN THE APP
>Runs as a Single Page Application (SPA). Single HTML, CSS, JavaScript files.
>Communicates via either an external public API or db.json using json-server --watch db.json
>All interactions between the client and the API are handled asynchronously and use JSON as the communication format. No API key is required as it is an open API.
>No redirects. No page reloads.
>

1. Upon opening web site/application > begin typing into the search field (i.e. Name of Artwork - "After La Negresse, 1872"; Artist Name - "Kehinde Wiley"; or Category of Artwork - "Sculpture, Drawings or Painting")

2. A list of his artwork will filter out from other artist artwork

3. You can then click on the artwork card for more artwork details/information

4. You can switch between light mode/dark mode

5. To receive more information and sign up on the email list, click on "sign up!" button and input your name and email and click submit.

Page Organization:
>top: Header > Title of Project > The Black Artist Project or B.A.P.
>top: navigation area > search bar, dark mode and contact form
>container: content

Open API to utilize:
db.json - http://localhost:3000/data

The MET - https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID]
AIC - https://api.artic.edu/api/v1/artworks


///
LIST OF FEATURES:
The core MVP/site features will include the following (.addEventListener):

1. DOMContentLoaded - to make sure everything loads correctly
2. Search Input Field - to type in (keyup & filter) the name of black artist or title of artwork or category of artwork (i.e. paintings, scultpures, drawings)
3. Dark Mode - to (click) between light and dark modes
4. 'like' - to (click) on the 'like' button and keeping count
4. Contact Form - to (submit) name and email to be added to the email list

Each piece of work with include the following attributes:
1. Title:
2. Artist:
3. Medium:
4. Price:

As a user, I want to be able to "Search" specifically for a particular black art and/or black artists in order quickly curate.
As a user, I want to be able to "classify" and view only the artwork that pertains to a specific medium.
As a user, I want to be able to "filter" a specific price range of black art and black artist to view.


///
VISUALS:
Here's the link to Youtube video: https://youtu.be/mW0M8KD7oDA?si=o-iA-CQo7LLPPbY4

///
INSTALLATION:

REQUIREMENTS:
-Installation of Chrome

///
USAGE:


///
SUPPORT:


///
PROJECT STATUS:
Development has slowed down. I will continue making efforts on this project.




