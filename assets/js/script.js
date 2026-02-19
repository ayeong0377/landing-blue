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

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.484392, 126.936484), // 지도의 중심좌표
        level: 1 // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption); 

var imageSrc = './assets/images/map-icon.svg', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      
// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.484392, 126.936484); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition, 
    image: markerImage // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map); 

// aos 
AOS.init();