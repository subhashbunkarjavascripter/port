 var text = document.querySelector(".text");
 var text1 = document.querySelector(".text1");
 text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>");
 text1.innerHTML = text1.textContent.replace(/\S/g,"<span>$&</span>");
 var imagecontainer1 = document.querySelector(".imagecontaier1");
 var imagecontainer2 = document.querySelector(".imagecontaier2");

 const Letters =document.querySelectorAll('span'); 

 for(let i=0; i<Letters.length; i++){
     Letters[i].addEventListener("mouseover",function(){
        Letters[i].classList.add('active');

        setTimeout(function () {
            Letters[i].classList.remove('active');
            Letters[i].classList.add('reset');
            
            // Reset text to original state using resetAnimation
            setTimeout(function () {
                Letters[i].classList.remove('reset');
                Letters[i].style.animation = "resetAnimation 1s forwards";
                
                // Ensure the animation resets so it can be repeated on hover again
                setTimeout(function () {
                    Letters[i].style.animation = "";
                }, 1000);  // Wait for resetAnimation to complete
            }, 100);  // Slight delay for smooth transition
        }, 1500); 
     })                                                       
 }  

 var tl = gsap.timeline({scrollTrigger :{
    trigger:".third",
    starts:"top top",
    // end:"bottom 70%",
    scrub:3,
    pin:true,
    // markers:true

}});

tl
.to(".third .imagecontaier1",{
    left:"15%",
    top:"40%",
    rotate:"-5deg",
    ease:Power1,
    
},'a')

.to(".third .imagecontaier2",{
    top:"40%",
    left:"85%",
    rotate:"5deg",

    ease:Power1,
    
},'a')
.to(".center h2",{
    opacity:1,
    ease:Power1
},'a')

var tl2 = gsap.timeline({scrollTrigger :{
    trigger:".four",
    starts:"top top",
    end:"bottom 70%",
    pin:true,
    scrub:3,

}});
tl2
.to(".four .imagecontaier1",{
    left:"15%",
    top:"40%",
    rotate:"-5deg",
    ease:Power1,
    
},'a')

.to(".four .imagecontaier2",{
    top:"40%",
    left:"85%",
    rotate:"5deg",

    ease:Power1,
    
},'a')

var tl3 = gsap.timeline({scrollTrigger :{
    trigger:".five",
    starts:"top top",
    end:"bottom 70%",
    pin:true,
    scrub:3,

}});
tl3
.to(".five .imagecontaier1",{
    left:"15%",
    top:"40%",
    rotate:"-5deg",
    ease:Power1,
    
},'a')

.to(".five .imagecontaier2",{
    top:"40%",
    left:"85%",
    rotate:"5deg",

    ease:Power1,
    
},'a')


var tl4 = gsap.timeline({scrollTrigger :{
    trigger:".six",
    starts:"top top",
    pin:true,
    scrub:3,
}});

tl4
.to(".boxes:nth-child(1)",{
    top: "20%",
    backgroundColor: "red",
})

.to(".boxes:nth-child(2)",{
    top: "30%",
})

.to(".boxes:nth-child(3)",{
    top: "40%",
})

.to(".boxes:nth-child(4)",{
    top: "50%",
})

.to(".boxes:nth-child(5)",{
    top: "60%",
})

.to(".boxes",{
    top: "20%",
})

 
 