//pagination의 이름 동적 생성
const menu = ["About", "Portfolio"];

//swiper 속성 정하기
const swiper = new Swiper("main", {
    loop : true,
    grabCursor : true, 
    direction: "vertical",
    mousewheel:true,
    pagination : {
        el : ".swiper-pagination",
        clickable: true,
        renderBullet: function(index, claNam){
            return `<li class="${claNam}">${menu[index]}</li>`
        }
    },

    effect:"cube",
    cubeEffect : {
        shadow : false,
        shadowOffset : 100,
        shadowScale : 1,
        slideShadows : true,
    }
})