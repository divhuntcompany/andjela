gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".fadeInLeft",
  {
    opacity: 0,
    x: 100,
  },
  {
    opacity: 1,
    duration: 1.5,
    x: 0,
  }
);
let scroll = $(window).scrollTop();
if (scroll < 100) {
  gsap.fromTo(
    ".navbar",
    {
      opacity: 0,
      y: "-100%",
    },
    {
      opacity: 1,
      duration: 1,
      y: 0,
    }
  );
}

let header = $(".fadeInChildern");
let delay = 0;
$.each(header.children(), function () {
  gsap.fromTo(
    this,
    {
      opacity: 0,
      y: "-100%",
    },
    {
      delay: delay,
      opacity: 1,
      duration: 1,
      y: 0,
    }
  );
  delay = delay + 0.5;
});

let sections = $("section:not(.ignore)");

$.each(sections, function () {
  gsap.fromTo(
    this,
    {
      opacity: 0,
      y: 200,
    },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: this,
        start: "top bottom",
        end: "center bottom",

        scrub: true,
      },
    }
  );
});
