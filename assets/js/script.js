alert('이 페이지는 포트폴리오로 제작되었습니다.')

// faq accordion
$(function(){
     $(".question").on('click', function(){
        const $item = $(this).closest('.faq-item');
                

        $item.toggleClass('is-open')
        $item.find(".answer").slideToggle(300);
        })
    })

    // Initialize Swiper
    var swiper = new Swiper(".review-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        414: {
              slidesPerView: 1,
            },

        541: {
                slidesPerView: 2,
                spaceBetween: 16,
            }
      }
    });

    // review pagination
    document.querySelector('.right-pgnav').addEventListener('click', () => {
        swiper.slideNext();
    })
    document.querySelector('.left-pgnav').addEventListener('click', () => {
        swiper.slidePrev();
    })

    function updateNavButtons(swiper) {
        const prev = document.querySelector('.left-pgnav');
        const next = document.querySelector('.right-pgnav')

        // left
        if (swiper.isBeginning) {
            prev.classList.remove('is-active');
        } else {
            prev.classList.add('is-active');
        }

        // right
        if (swiper.isEnd) {
            next.classList.remove('is-active');
        } else {
            next.classList.add('is-active')
        }
    }

    updateNavButtons(swiper)

    // 슬라이드 변경 시
    swiper.on('slideChange', () => {
        updateNavButtons(swiper);
    });


    // aos 
    AOS.init();



