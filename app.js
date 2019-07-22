//PICTURE CAROUSEL for the UI Module requirement.
//I used Jerrica Bobadilla's example from class. I will tweek the CSS
  //to fit my app.

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

//====AJAX AND JQUERY FOR GOOGLE API=====
//==NOTE: I used the AJAX example Matt Huntington showed us in class.

  $('form').on('submit', (event) => {
          event.preventDefault();
          const userInput = $('input[type="text"]').val();
          $.ajax({
            url:'https://www.googleapis.com/books/v1/volumes?q=' + userInput,
          }).then(
            (data) => {
              console.log(data.items[0]);
              for (i=0; i < 5; i++) {
                //types of data
                //did more jQuery to get imageLink to be clicked from app
                const $img = $('<img>');
                $('#imageLink').append($img);
                const $seeImage = data.items[i].volumeInfo.imageLinks.smallThumbnail;
                $img.attr('src', $seeImage);
                $img.append($seeImage);
                // $('#imageLink').append();
                $('#title').append(data.items[i].volumeInfo.title);
                $('#authors').append(data.items[i].volumeInfo.authors);
                $('#publishedDate').append(data.items[i].volumeInfo.publishedDate);
                $('#description').append(data.items[i].volumeInfo.description);
                $('#retailPrice').append(data.items[i].saleInfo.retailPrice.amount);
                //did more jquery to get the buyLink to be clicked from app
                const $a = $('<a>');
                $('#buyLink').append($a);
                const $buyBook = data.items[i].saleInfo.buyLink;
                $a.attr('href', $buyBook);
                $a.append($buyBook);

              }
            },
            (error) => {
              alert("Something went wrong. Did you type in a search term? Or is your internet down? Please click the reload button and try again. Thanks");
            }
          );

  });
})
console.log('tea enthusiast');
