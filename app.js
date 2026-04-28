//PICTURE CAROUSEL for the UI Module requirement.
//I originally used Jerrica Bobadilla's example from class.
//The carousel code is now updated, 04282026.

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
  const $images = $('.carousel-images img');

  $images.eq(currentImgIndex).hide();

  currentImgIndex = (currentImgIndex + 1) % $images.length;

  $images.eq(currentImgIndex).show();
});

//====Clicking PREVIOUS (right) button====
  $previous.on('click', () => {
  const $images = $('.carousel-images img');

  $images.eq(currentImgIndex).hide();

  currentImgIndex =
    (currentImgIndex - 1 + $images.length) % $images.length;

  $images.eq(currentImgIndex).show();
});

//====AJAX AND JQUERY FOR GOOGLE API=====
//==NOTE: I used the AJAX example Matt Huntington showed us in class.
  let canSearch = true;
  
  $('form').on('submit', (event) => {
  event.preventDefault();

  if (!canSearch) return;

  canSearch = false;

  setTimeout(() => {
    canSearch = true;
  }, 2000);

  const userInput = $('input[type="text"]').val();

  $('#results').html("<p>Searching books...</p>");

  $.ajax({
    url: 'https://www.googleapis.com/books/v1/volumes?q=' + userInput,
  })
  .then((data) => {

    $('#results').empty();

    if (!data.items) {
      $('#results').html("<p>No results found. Try another search.</p>");
      return;
    }

    for (let i = 0; i < Math.min(5, data.items.length); i++) {

      const book = data.items[i];

      const title = book.volumeInfo?.title || "No title available";
      const authors = (book.volumeInfo?.authors || ["Unknown"]).join(", ");
      const image = book.volumeInfo?.imageLinks?.thumbnail || "";
      const description = book.volumeInfo?.description || "No description available";
      const price = book.saleInfo?.retailPrice?.amount
        ? "$" + book.saleInfo.retailPrice.amount
        : "N/A";
      const buyLink = book.saleInfo?.buyLink || "#";

      const card = `
        <div class="book-card">
          ${image ? `<img src="${image}" alt="book cover"/>` : ""}
          <h3>${title}</h3>
          <p><strong>Author:</strong> ${authors}</p>
          <p>${description}</p>
          <p><strong>Price:</strong> ${price}</p>
          ${buyLink !== "#" ? `<a href="${buyLink}" target="_blank">Buy Book</a>` : ""}
        </div>
      `;

      $('#results').append(card);
    }

  })
  .catch((error) => {
  console.error(error);

  if (error.status === 429) {
    $('#results').html("<p>API limit reached. Please try again later.</p>");
  } else {
    $('#results').html("<p>Something went wrong. Try again.</p>");
  }
});
  
});
});
