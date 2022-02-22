'use strict'

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


function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.views = 0;
  this.src = `img/${name}.${file.Extension}`;

  allProducts.push(this);
}

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
new Product('sweep');
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

// render images
function renderImgs() {
  let productOneIndex = getRandomIndex();
  let productTwoIndex = getRandomIndex();
  let productThreeIndex = getRandomIndex();
  // let productFourIndex = getRandomIndex();
  // let productFiveIndex = getRandomIndex();
  // let productSixIndex = getRandomIndex();
  // let productSevenIndex = getRandomIndex();
  // let productEightIndex = getRandomIndex();
  // let productNineIndex = getRandomIndex();
  // let productTenIndex = getRandomIndex();
  // let productElevenIndex = getRandomIndex();
  // let productTwelveIndex = getRandomIndex();
  // let productThirteenIndex = getRandomIndex();
  // let productFourteenIndex = getRandomIndex();
  // let productFifteenIndex = getRandomIndex();
  // let productSixteenIndex = getRandomIndex();
  // let productSeventeenIndex = getRandomIndex();
  // let productEighteenIndex = getRandomIndex();
  // let productNineteenIndex = getRandomIndex();
  // let productTwentyIndex = getRandomIndex();


// For each of the three images, increment its property of times it has been shown by one.

while(productOneIndex === productTwoIndex) {
  productTwoIndex = getRandomIndex();
}

while(productTwoIndex === productThreeIndex) {
productThreeIndex = getRandomIndex();
}

imgOne.src = allProducts[productOneIndex].src;
imgOne.alt = allProducts[productOneIndex].name;
allProducts[productOneIndex].views++;

imgTwo.src = allProducts[productTwoIndex].src;
imgTwo.alt = allProducts[productTwoIndex].name;
allProducts[productTwoIndex].views++;

imgThree.src = allProducts[productThreeIndex].src;
imgThree.alt = allProducts[productThreeIndex].name;
allProducts[productThreeIndex].views++;

}

renderImgs();

// Attach an event listener to the section of the HTML page where the images are going to be displayed.

function handleClick(event) {
  votesAllowed--;

  let imgClicked = event.target.alt; {
    if(imgClicked === allProducts[i].name) {
      allProducts[i].clicks++;
    }
  }

// Once the users ‘clicks’ a product, generate three new products for the user to pick from.
// re-render 3 new Product images

renderImgs();


// User can only vote in 25 rounds - stop clicks
 if(votesAllowed === 0) {
   myContainer.removeEventListener('click', handleClick);
 }
}

// Button to show results, render list items
function handleShowResults(event) {

  if(votesAllowed === 0) {
    for(let i = 0; i < allProducts.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${allProducts[i].name} was viewed ${allProducts[i].views} times, and was voted for ${allProducts[i].clicks} times.`;
    }
  }
}
