const tl = gsap.timeline();
tl.from(".menu, .social-links",{
    skewY: 10,
    y: 200,
    duration:1,
    opacity: 0
})
tl.from(".h1mainh1, .collabh1",{
    duration: 1,
    delay: 1,
    opacity: 0
})
tl.from(".h1main-contact",{
    y: "100%",
    opacity: 0,
    duration: .5,
    stagger: {
        amount: .25
    }
},"-=.25");
tl.from(".gif",{
    y: "-100%",
    opacity: 0,
    duration: 1
})