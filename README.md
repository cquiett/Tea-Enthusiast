# cquiett.github.io
# THE TEA ENTHUSIAST
☕ Tea Enthusiast — Interactive Book Discovery App

## Overview
Tea Enthusiast is a front-end web application that allows users to search for books about tea using the Google Books API. The app was designed as both an educational and interactive experience, combining a themed UI with real-time data fetching and dynamic content rendering.

Users can search for topics related to tea (such as “tea history” or “herbal tea”) and receive up to five relevant book results displayed as responsive cards.

## Features
### 🔎 Live Book Search
Fetches real-time data from the Google Books API
Displays up to 5 results per search query
### 📱 Dynamic UI Rendering
Books are displayed as responsive cards
Includes title, author(s), description, price, and purchase link
### 🎠 Interactive Image Carousel
Custom-built carousel for showcasing tea-related images
Navigation using previous/next controls
### ⚡ Rate-Limited API Protection
Debounce logic prevents excessive API calls
Improves performance and avoids quota overuse
### 🧠 Error Handling & Edge Cases
Handles missing API data (images, prices, descriptions)
Displays fallback messages when no results are found

## Technologies Used
HTML5
CSS3 (Flexbox & Grid layout)
JavaScript (ES6+)
jQuery
Google Books API

## Key Learning Outcomes

### Through this project, I strengthened my skills in:
Working with third-party REST APIs
DOM manipulation and dynamic rendering
Handling asynchronous JavaScript (AJAX)
Debugging real-world API errors (including rate limits)
Structuring interactive UI components using vanilla JavaScript and jQuery

## Challenges Solved
Managed inconsistent API data (missing fields such as images, pricing, and descriptions)
Resolved UI-breaking issues caused by duplicate files and incorrect DOM structure
Implemented a debounce mechanism to prevent API quota exhaustion
Refactored legacy jQuery-heavy logic into a more modular and maintainable structure

## Future Improvements
Convert project to React for improved component structure
Add filtering by book category or author
Improve UI styling with a modern design system (e.g., Tailwind CSS)
Add favorites or saved books feature

## Live Demo

Link to my live site: https://cquiett.github.io/ 
Link to my Github page: https://github.com/cquiett/cquiett.github.io.git

## Notes
This project originally began as a class assignment and was later refactored into a more modern, API-driven web application with improved UI/UX, error handling, and performance considerations.
