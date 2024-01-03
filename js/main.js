const myCarouselElement = document.querySelector('#myCarousel');
const myReviewsCarousel = document.querySelector('#carouselReviews');
const myGalleryCarousel = document.querySelector('#galleryCarousel')

// Needed for Home Page Gallery to initialize
const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: false
})

const reviewsCarousel = new bootstrap.Carousel(myReviewsCarousel, {
    interval: 2000,
    touch: false
})

const galleryCarousel = new bootstrap.Carousel(myGalleryCarousel, {
    interval: 2000,
    touch: false
})