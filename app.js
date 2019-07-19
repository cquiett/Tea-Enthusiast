$(() => {
//=====================
//GRABBING ALL ELEMENTS
//=====================
//counter variable to keep track of the current image index
let currentImgIndex = 0
//current image element
let $currentImg = $('.carousel-images').children().eq(currentImgIndex)
// number of images
let numOfImages = $('.carousel-images').children().length-1
//=====================
//GRABBING ALL ELEMENTS
//=====================
//next button
const $next = $('.next')
//previous button
const $previous = $('.previous')

//======================
//EVENT LISTENER/HANDLER
//======================
$next.on('click', () => {
  // console.log('clicking next');
//we want the current image to hide
//grabbing all carousel images
  // console.log($('.carousel-images').children());
//then show the next image
//hiding the current image
$currentImg.hide()
//check if the currentImgIndex is less than the amount of images we have
if(currentImgIndex < numOfImages) {
  //Increment current image index
  currentImgIndex++
} else {//if the currentImgIndex > the amount of images we have reset the currentImgIndex to 0, so we cycle back
  currentImgIndex = 0
}
//change the currentImg
$currentImg = $('.carousel-images').children().eq(currentImgIndex)
//show the new currentImg
$currentImg.show()
  })

//previous button
$previous.on('click', () => {
  console.log('previous button');
//hide the current image
$currentImg.hide()
//check if the currentImgIndex > 0
if (currentImgIndex > 0) {
//decrement the current image index
  currentImgIndex--
} else {// if the currentImgIndex < 0, reset the currentImgIndex to the numOfImages
  currentImgIndex = numOfImages
}
//change the currentImg
$currentImg = $('.carousel-images').children().eq(currentImgIndex)
//show the new currentImg
$currentImg.show()
  })

  $('form').on('submit', (event) => {
          event.preventDefault();
          const userInput = $('input[type="text"]').val();
          $.ajax({
            url:'https://www.googleapis.com/books/v1/volumes?q=' + userInput,
          }).then(
            (data) => {
              console.log(data);
              $('#title').html(data.Title);
              $('#authors').html(data.Author);
              $('#publishedDate').html(data.Published_Date);
              $('#description').html(data.Description);
              $('#retailPrice').html(data.Retail_Price);
              $('#buyLink').html(data.Buy_Link);
            },
            (error) => {
              console.log(error);
            }
          );

  });
})
console.log('tea enthusiast');
