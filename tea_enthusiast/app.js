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
//====Clicking NEXT (left) button=====
  $next.on('click', () => {

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

//====Clicking PREVIOUS (right) button====
  $previous.on('click', () => {

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

              for (i=0; i < 20; i++) {
                // console.log(data.items[i]);
                //types of data called items
                //1. Title
                const $title = data.items[i].volumeInfo.title;
                $('#title').append($title + " / ");

                //2. Did more jQuery to get imageLink to be clicked from app
                const $img = $('<img>');
                $('#imageLink').append($img);
                const $seeImage = data.items[i].volumeInfo.imageLinks.smallThumbnail;
                $img.attr('src', $seeImage);
                $img.append($seeImage);

                //3. Appended title with authors for easy read.
                $('#authors').append($title + ":  " + data.items[i].volumeInfo.authors + " / ");

                //4. Appended title with publishedDate for easy read.
                $('#publishedDate').append($title + ":  " + data.items[i].volumeInfo.publishedDate + " / ");

                //5. Created an unordered list for the descriptions.
                const $ul = $('<ul>');
                $('#description').append($ul);
                const $li = $('<li>');
                $ul.append($li);
                const $decript = data.items[i].volumeInfo.description
                //5a. Appended title with description for easy read.
                $li.append($title + ":  " + $decript);

                //6. Appended title with retailPrice for easy read.
                $('#retailPrice').append($title + ":  " + "$" + data.items[i].saleInfo.retailPrice.amount + " / ");

                //7. Did more jquery to get the buyLink to be clicked from app
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
// console.log('tea enthusiast');
