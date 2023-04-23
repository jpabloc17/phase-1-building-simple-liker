// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//getting and hiding error message when page is first loaded
const modal = document.getElementById("modal");
modal.classList.add("hidden")

// getting all the heart buttons and adding an event to them with a callback function
const hearts = document.querySelectorAll(".like-glyph");
hearts.forEach((item) => item.addEventListener("click", handleFunction))


function handleFunction(heart){
  // Invoke mimicServerCall to simulate making a server request
  mimicServerCall()
    .then(() => {
      // Checking the post was liked and Change the heart 
      if(heart.target.innerText === EMPTY_HEART){
        heart.target.innerText = FULL_HEART;
        heart.target.className = "activated-heart"
      } else {
        // heart.target.innerText === FULL_HEART
        heart.target.innerText = EMPTY_HEART
        heart.target.className = "like-glyph"
      }
      console.log(heart.target.innerText)
    })
    // Display an error message in the DOM for three seconds 
    .catch((error) => {
      modal.className = "";
      modal.innerText = error;
      setTimeout(() => modal.className = "hidden", 3000);
    })
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
