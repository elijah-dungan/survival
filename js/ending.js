'use strict'
var divEL_endingText = document.getElementById('endingText');
let story = localStorage.getItem('story');

function endingChoices(){
  
  let pEl = document.createElement('p');
  pEl.textContent = story;
  divEL_endingText.appendChild(pEl);
}

endingChoices();

