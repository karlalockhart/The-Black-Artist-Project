/*
document.addEventListener("DOMContentLoaded", () => fetchData)

function fetchData(){
    fetch("http://localhost:3000/data")
    .then(res => res.json)
    .then(data => console.log(data))
}
*/

document.addEventListener('DOMContentLoaded', () => {
    console.log('The DOM has Landed!')

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

//***CARD DETAILS*** 
//Function to display card details
function showCardDetails(artist, medium, price) {
    cardArtist.textContent = `Artist: ${artist}`;
    cardMedium.textContent = `Medium: ${medium}`;
    cardPrice.textContent = `Price: $${price}`;
    cardDetailsContainer.style.display = "block";
  }


//***SEARCH INPUT***
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
  //***FETCH DB.JSON & CARD***
    fetch("http://localhost:3000/data")
      .then((response) => response.json())
      .then((data) => {
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
        `;
        //***DARK MODE***
          cardElement.classList.toggle("dark-mode", darkModeEnabled);
  
      //***CARD DETAILS***     
      // Add click event to show card details
        cardElement.addEventListener("click", () => {
          showCardDetails(card.artist, card.medium, card.price);
        });
  
        cardsContainer.appendChild(cardElement);
      });
    }
  }
  //***CARD***
  //console.log(document.querySelector('#cards'))
  document.querySelector('#cards').addEventListener('mouseover', () => console.log('Curate Me!'))
  })