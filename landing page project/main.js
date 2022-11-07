$(document).ready(function () {
    $(".customer-logos").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        }
      ]
    });
  });

  
  $('.single-item').slick({
   autoplay: true,
   autoplaySpeed: 1500,
  
   pauseOnHover: true,
   swipe: true,
   arrows: false,
   dots: true,
   responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          /* Remove dots: false to show dots between 740px - 1024px */
          /* dots: false */
        }
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],

  })


  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
 
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
  if (slideIndex > slides.length) {slideIndex = 1}{
  slides[slideIndex-1].style.display = "block";
  setinterval(showSlides, 3000); // Change image every 2 seconds
}








  
  