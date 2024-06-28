function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

// console.log(document.querySelector(".textpara").textContent.split(""));

function textParaAnimation(){
    // split text into span tags
    var clutter = "";
    document.querySelector(".textpara")
    .textContent.split("")
    .forEach(function(e){
        // if(e === " ") clutter += `<span>&nbsp;</span>`;
        clutter += `<span>${e}</span>`;
    })
    document.querySelector(".textpara").innerHTML = clutter;
    
    // intially set opacity .1
    gsap.set(".textpara span", { 
        opacity: .1,
    })
    
    // animate on scrollTrigger by opacity 1
    gsap.to(".textpara span", { 
        scrollTrigger: {
            trigger: "#page2",
            start: "top 45%",
            end: "bottom 80%",
            scrub: .2,
        },
        opacity: 1,
        stagger: .05,
        ease: Power4,
    })
}
loco();
textParaAnimation();