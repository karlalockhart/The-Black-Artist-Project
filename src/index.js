document.addEventListener('DOMContentLoaded', () => {
    console.log('The DOM has Landed!')
    //console.log('got art')
    //Get All Artwork upon loading - #cards
  fetch("http://localhost:3000/data")
    .then((response) => response.json())
    .then((data) => {
      //console.log(data, 'Got Art!')
      displayFilteredCards(data); // Display all cards on page load
})


//***SEARCH INPUT***
const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");

//***CARD***
const cardsContainer = document.getElementById("cards");

//***CARD DETAILS***
const cardDetailsContainer = document.getElementById("cardDetails");
const cardArtist = document.getElementById("cardArtist");
const cardMedium = document.getElementById("cardMedium");
const cardPrice = document.getElementById("cardPrice");


//***CONTACT FORM***
const contactButton = document.getElementById("contactButton");
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

//***DARK MODE***
const toggleDarkModeButton = document.getElementById("toggleDarkMode");

let darkModeEnabled = false;



//***DARK MODE***
//Toggle dark mode
toggleDarkModeButton.addEventListener("click", () => {
  darkModeEnabled = !darkModeEnabled;
  document.body.classList.toggle("dark-mode", darkModeEnabled);
  cardsContainer.querySelectorAll(".card").forEach((card) => {
    card.classList.toggle("dark-mode", darkModeEnabled);
  });
});

 //***LIKE***
 function handleLike(cardId) {
  const likeCountElement = document.getElementById(`like-count-${cardId}`);
  let currentLikes = parseInt(likeCountElement.textContent, 10);
  currentLikes++;
  likeCountElement.textContent = currentLikes;

  // Store the like count in local storage
  localStorage.setItem(`like-count-${cardId}`, currentLikes.toString());
}

//***CARD DETAILS*** 
//Function to display card details
function showCardDetails(artist, medium, price) {
    cardArtist.textContent = `Artist: ${artist}`;
    cardMedium.textContent = `Medium: ${medium}`;
    cardPrice.textContent = `Price: $${price}`;
    cardDetailsContainer.style.display = "block";
  }

//***CONTACT FORM***
// Show contact form when the "Contact" button is clicked
contactButton.addEventListener("click", () => {
    contactForm.style.display = "block";
  });

//***CONTACT FORM***
// Handle form submission
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const contactData = {
      name: nameInput.value,
      email: emailInput.value,
    };

//***CONTACT FORM***
//send the contact data to a server or process it as needed
console.log("Contact Form Data:", contactData);
contactForm.reset(); // Clear the form
contactForm.style.display = "none"; // Hide the form
});


//***SEARCH INPUT***
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();


//***FETCH DB.JSON & CARD***
/*
  Here we are calling `fetch()` and passing a URL to a data source as the
  argument. The function call returns a Promise object that represents what the data
  source sent back. It does NOT return the actual content.
*/
    fetch("http://localhost:3000/data")
      .then((response) => response.json())
      .then((data) => {
        // Upon loading, get all artwork attributes
        console.log(data, 'got art!')
        // Filter the cards based on the search term
        const filteredCards = data.filter((card) => {
          return card.name.toLowerCase().includes(searchTerm) || card.artist.toLowerCase().includes(searchTerm) || card.category.toLowerCase().includes(searchTerm);;
        });
  
        displayFilteredCards(filteredCards);
        
      })
      .catch((error) => console.error("Error fetching data:", error));
  });


//***CARD***
  function displayFilteredCards(filteredCards) {
    results.innerHTML = ""; // Clear previous results
    cardDetailsContainer.style.display = "none"; // Hide card details
//***CONTACT FORM***
    contactForm.style.display = "none"; // Hide contact form
  
//***CARD***
    if (filteredCards.length === 0) {
      results.innerHTML = "<p>No results found</p>";
    } else {
      cardsContainer.innerHTML = ""; // Clear previous card elements
  
//***CARD***
      filteredCards.forEach((card) => {
        const cardElement = document.createElement("div");
        cardElement.className = "card"; // You can define CSS styles for your cards
        cardElement.innerHTML = `
              <img src="${card.image}" alt="">
              <h3>${card.name}</h3>
              <button class="like-btn">Like</button>
              <span class="like-count" id="like-count-${card.id}">0</span>
        `;
//***DARK MODE***
          cardElement.classList.toggle("dark-mode", darkModeEnabled);
  
//***CARD DETAILS***     
      // Add click event to show card details
        cardElement.addEventListener("click", () => {
          showCardDetails(card.artist, card.medium, card.price);
        });

 //***LIKE***
const likeButton = cardElement.querySelector(".like-btn");
const likeCountElement = cardElement.querySelector(`#like-count-${card.id}`);

      // Add click event to show like button
        likeButton.addEventListener("click", () => {
          handleLike(card.id);
        });

        // Retrieve and set the like count from local storage
        const storedLikes = localStorage.getItem(`like-count-${card.id}`);
        likeCountElement.textContent = storedLikes ? storedLikes : "0";
        
        cardsContainer.appendChild(cardElement);
      });
    }
  }
   
//***CARD***
  console.log(document.querySelector('#cards'))
  document.querySelector('#cards').addEventListener('mouseover', () => console.log('Curate Me!'))
})


/*
document.addEventListener("DOMContentLoaded", () => fetchData)

function fetchData(){
    fetch("http://localhost:3000/data")
    .then(res => res.json)
    .then(data => console.log(data))
}
*/