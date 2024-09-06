console.log("hello world");
$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow:'<i class="fa-solid fa-chevron-left prev"></i>',
    nextArrow:'<i class="fa-solid fa-chevron-right next"></i>',
    dots:true,
    
  });



// $('.slider').slick({
//   centerMode: true,
//   centerPadding: '100px',
//   slidesToShow: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   prevArrow:'<i class="fa-solid fa-chevron-left prev"></i>',
//   nextArrow:'<i class="fa-solid fa-chevron-right next"></i>',
//   dots:true,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: true,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: true,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });