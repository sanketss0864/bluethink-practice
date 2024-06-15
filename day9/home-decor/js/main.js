window.onload=()=>{
   new Swiper('.swiper', {
    
        direction: 'horizontal',
        loop: true,
      
     
        pagination: {
          el: '.swiper-pagination',
        },
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
     new Swiper('.offerslider', {
    
        direction: 'horizontal',
        loop: true,
        slidesPerView: 4,
        spaceBetween:4 ,
        // pagination: {
        //   el: '.swiper-pagination',
        // },
      
        navigation: {
          nextEl: '#offer-next',
          prevEl: '#offer-prev',
        },
      
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        breakpoints: {
        
          320: {
            slidesPerView: 2,
            spaceBetween: 10
          },
         
          480: {
            slidesPerView: 2,
            spaceBetween: 10
          },
         
          640: {
            slidesPerView: 4,
            spaceBetween: 10
          }
        }
      });
      new Swiper('.trendslider', {
    
        direction: 'horizontal',
        loop: true,
        slidesPerView: 4,
        spaceBetween:4 ,
        // pagination: {
        //   el: '.swiper-pagination',
        // },
      
        navigation: {
          nextEl: '#trend-next',
          prevEl: '#trend-prev',
        },
      
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        breakpoints: {
        
          320: {
            slidesPerView: 2,
            spaceBetween: 5
          },
         
          480: {
            slidesPerView: 2,
            spaceBetween: 5
          },
         
          640: {
            slidesPerView: 4,
            spaceBetween: 10
          }
        }
      });
}