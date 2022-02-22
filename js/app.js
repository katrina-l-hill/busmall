'use strict'

// Glbal variables
let votesAllowed = 25;

// Product storage
let allProducts = [];

// DOM references

let myContainer = document.getElementById('container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
// let imgFour = document.getElementById('img-four');
// let imgFive = document.getElementById('img-five');
// let imgSix = document.getElementById('img-six');
// let imgSeven = document.getElementById('img-seven');
// let imgEight = document.getElementById('img-eight');
// let imgNine = document.getElementById('img-nine');
// let imgTen = document.getElementById('img-ten');
// let imgEleven = document.getElementById('img-eleven');
// let imgTwelve = document.getElementById('img-twelve');
// let imgThirteen = document.getElementById('img-thirteen');
// let imgFourteen = document.getElementById('img-fourteen');
// let imgFifteen = document.getElementById('img-fifteen');
// let imgSixteen = document.getElementById('img-sixteen');
// let imgSeventeen = document.getElementById('img-seventeen');
// let imgEighteen = document.getElementById('img-eighteen');
// let imgNineteen = document.getElementById('img-nineteen');
// let imgTwenty = document.getElementById('img-twenty');

let resultsBtn = document.getElementById('show-results-button');
let showResults = document.getElementById('display-results-list');

// Create a constructor function that creates an object associated with each product, and has the following properties:

//     Name of the product
//     File path of image
//     Times the image has been shown

// Constructor function.
function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.views = 0;
  this.clicks = 0;
  this.src = `img/${name}.${fileExtension}`;

  allProducts.push(this);
}

// Instantiation

new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('sweep', 'png');
new Product('tauntaun');
new Product('unicorn');
new Product('water-can');
new Product('wine-glass');
new Product('wireframe', 'png');

console.log(allProducts);


// Executable code


// Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.

function getRandomIndex() {
  return Math.floor(Math.random() * allProducts.length);
}

function contains(array, item){
  for(let i = 0; i < array.length; i++)
  {
    if(array[i] === item)
      return true;
  }
  return false;
}

// render images
function renderImgs() {
  let indexes = [];
  for(let i = 0; i < 3; i++)
  {
    let randomIndex = getRandomIndex();
    //ensure index is unique
    while(contains(indexes, randomIndex))
    {
      randomIndex = getRandomIndex();
    }
    indexes.push(randomIndex);
  }
  
  // For each of the three images, increment its property of times it has been shown by one.

  imgOne.src = allProducts[indexes[0]].src;
  imgOne.alt = allProducts[indexes[0]].name;
  allProducts[indexes[0]].views++;

  imgTwo.src = allProducts[indexes[1]].src;
  imgTwo.alt = allProducts[indexes[1]].name;
  allProducts[indexes[1]].views++;

  imgThree.src = allProducts[indexes[2]].src;
  imgThree.alt = allProducts[indexes[2]].name;
  allProducts[indexes[2]].views++;
}

renderImgs();

// Attach an event listener to the section of the HTML page where the images are going to be displayed.

function handleClick(event) {
  votesAllowed--;

  let imgClicked = event.target.alt; {

    for (let i = 0; i < allProducts.length; i++) {
      if (imgClicked === allProducts[i].name) {
        allProducts[i].clicks++;
      }
    }

    // Once the users ‘clicks’ a product, generate three new products for the user to pick from.
    // re-render 3 new Product images

    renderImgs();


    // By default, the user should be presented with 25 rounds of voting before ending the session. After voting rounds have been completed, remove the event listeners on the product.
    if (votesAllowed === 0) {
      myContainer.removeEventListener('click', handleClick);
    }
  }
}

// Button to show results, render list items. Create a property attached to the constructor function itself that keeps track of all the products that are currently being considered.

function handleShowResults(event) {
  // if no more results, then render a list

  if (votesAllowed === 0) {
    for (let i = 0; i < allProducts.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${allProducts[i].name} was viewed ${allProducts[i].views} times, and was voted for ${allProducts[i].clicks} times.`;
      showResults.appendChild(li);
    }
  }
}

// What you want to grab to listen to
myContainer.addEventListener('click', handleClick);
resultsBtn.addEventListener('click', handleShowResults);