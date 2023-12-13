const myCarouselElement = document.querySelector('#myCarousel');
const myReviewsCarousel = document.querySelector('#carouselReviews');

// Needed for Home Page Gallery to initialize
const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: false
})

const reviewsCarousel = new bootstrap.Carousel(myReviewsCarousel, {
    interval: 2000,
    touch: false
})