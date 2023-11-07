///
NAME OF PROJECT: 
The Black Artist Project

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
BADGES:
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

///
VISUALS:
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

///
INSTALLATION:
Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.


REQUIREMENTS:
-Installation of Chrome

///
USAGE:
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

///
SUPPORT:
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

///
ROADMAP:
If you have ideas for releases in the future, it is a good idea to list them in the README.

///
CONTRIBUTING:
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

///
AUTHORS & ACKNOWLEDGEMENT:
Show your appreciation to those who have contributed to the project.

///
LICENSING:
For open source projects, say how it is licensed.

///
PROJECT STATUS:
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.

///
From NN of FLIRN:
1. Description of App
2. Url of page
3. How to run it!



