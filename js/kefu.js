var mySwiper=new Swiper(".swiper-container",{
    slidesPerView:"auto",
    centeredSlides:true,//活动块居中
    watchSlidesProgress:true,//计算porgress值
    loop:true,
    loopedSlides :3,
    onProgress:
        function(a){
            var b,c,d;
            for(b=0;b<a.slides.length;b++)
                c=a.slides[b],
                    d=c.progress,
                    scale=1-Math.min(Math.abs(.2*d),1),
                    es=c.style,
                    es.opacity=1-Math.min(Math.abs(d/2),1),
                    es.webkitTransform=es.MsTransform=es.msTransform
                        =es.MozTransform=es.OTransform=es.transform="translate3d(0,-10px,"+-Math.abs(-10*d)+"px) "+"rotate("+-5*d+"deg)"},
    onSetTransition:
        function(a,b){
            for(var c=0;c<a.slides.length;c++)
                es=a.slides[c].style,
                    es.webkitTransitionDuration=es.MsTransitionDuration
                        =es.msTransitionDuration=es.MozTransitionDuration=es.OTransitionDuration=es.transitionDuration=b+"ms"},
    onTap:
        function active(){
            activekefu();
        }
}
);

function activekefu(){
    var index = mySwiper.activeIndex;
    var ms=mySwiper.slides[index];
    var myphoto = $(ms).find("figure");
    $(ms).siblings().css("opacity","0");
    $(".mykf").css("opacity","0");
    $("#but").css("opacity","0");
    $(myphoto).addClass("kefuphoto").siblings("div.bg").addClass("bg1");
    $("#lanuage").fadeOut(1800);
    $(myphoto).siblings("div.backGround").addClass("img-wave");

    setTimeout(function locationhref(index){
        window.location.href="kefuindex.html";
    },3500);
}
function bgfunction(myphoto){
    $(myphoto).siblings("div.backGround").addClass("img-wave");
}
$(function(){
    $("#but").click(function(){
        activekefu();
    });

})



