$('#experience').on('click',function(){
    $('.experience').show(300);
    $('.skills').hide(300);
    $('.education').hide(300);
    $('.interest').hide(300);
})
$('#skills').on('click',function(){
    $('.experience').hide(300);
    $('.skills').show(300);
    $('.education').hide(300);
    $('.interest').hide(300);
})
$('#education').on('click',function(){
    $('.experience').hide(300);
    $('.skills').hide(300);
    $('.education').show(300);
    $('.interest').hide(300);
})

$('#interest').on('click',function(){
    $('.experience').hide(300);
    $('.skills').hide(300);
    $('.education').hide(300);
    $('.interest').show(300);
})

$('#show1').on('click',function(){
    $('.shadow1').show();
})

$('.fa-times').on('click',function(){
    $('.shadow1').hide();
})

$('#show2').on('click',function(){
    $('.shadow2').show();
})

$('.fa-times').on('click',function(){
    $('.shadow2').hide();
})

$('#show3').on('click',function(){
    $('.shadow3').show();
})

$('.fa-times').on('click',function(){
    $('.shadow3').hide();
})

$('#show4').on('click',function(){
    $('.shadow4').show();
})

$('.fa-times').on('click',function(){
    $('.shadow4').hide();
})

$('#show5').on('click',function(){
    $('.shadow5').show();
})

$('.fa-times').on('click',function(){
    $('.shadow5').hide();
})

$('#show6').on('click',function(){
    $('.shadow6').show();
})

$('.fa-times').on('click',function(){
    $('.shadow6').hide();
})

$('#show7').on('click',function(){
    $('.shadow7').show();
})

$('.fa-times').on('click',function(){
    $('.shadow7').hide();
})

$('#show8').on('click',function(){
    $('.shadow8').show();
})

$('.fa-times').on('click',function(){
    $('.shadow8').hide();
})
const toTop=document.querySelector(".nav_bar");
window.addEventListener("scroll",function(){
    if(window.pageYOffset > 50){
        toTop.classList.add("active");
    }
    else
    {
    toTop.classList.remove("active");
    }
})

/*mobile view*/

$('.fa-bars').on('click',function(){
    $('.nav_bar').show(300);
})

$('.fa-times').on('click',function(){
    $('.nav_bar').hide(300);
})




