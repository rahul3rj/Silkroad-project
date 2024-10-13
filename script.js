const LocomotiveJs = () => {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
      // lerp: "3",
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    
  
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    ScrollTrigger.refresh();
  };
LocomotiveJs();
function cursorEffect1() {
  var pageContent = document.querySelectorAll(".gf");
  var cursor = document.querySelector("#cursor");
  
  pageContent.forEach(function (div) {
    div.addEventListener("mousemove", function (val) {
      gsap.to(cursor, {
        x: val.clientX,
        y: val.clientY,
      });
    });
    div.addEventListener("mouseenter", function () {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
      });
    });
    div.addEventListener("mouseleave", function () {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
      });
    });
  });
  }
cursorEffect1();
function cursorEffect2() {
  var pageContent = document.querySelectorAll(".gf2");
  var cursor = document.querySelector("#cursor2");
  
  pageContent.forEach(function (div) {
    div.addEventListener("mousemove", function (val) {
      gsap.to(cursor, {
        x: val.clientX,
        y: val.clientY,
      });
    });
    div.addEventListener("mouseenter", function () {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
      });
    });
    div.addEventListener("mouseleave", function () {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
      });
    });
  });
  }
cursorEffect2();

function rotate(){
    const text = document.querySelector('#rotate');
    text.innerHTML = text.innerText.split("").map(
        (char, i) =>
            `<span style="transform:rotate(${i * 20}deg)">${char}</span>`
    ).join("")
}
rotate();

function videoplay(){
    const videos = document.querySelectorAll('.hover-video');
    
    videos.forEach(video => {
        video.addEventListener('mouseenter', () => {
            video.play();
        });
        video.addEventListener('mouseleave', () => {
            video.pause();
            // video.currentTime = 0; 
        });
    });
}
videoplay();

const GsapAnimation1 = () => {
      gsap.to("#hor1", {
          left: "0%",
          scrollTrigger: {
              trigger: "#page2",
              scroller: "#main", // If main is the correct scroller; otherwise remove this
              start: "top 160%",  // Adjusted start
              end: "top -80%",  // Adjusted end
              // markers: true,
              scrub: 3,
          }
      }),
      gsap.to("#hor2", {
          left: "-10%",
          scrollTrigger: {
              trigger: "#page2",
              scroller: "#main",
              start: "top 160%%",  // Slight stagger for second element
              end: "top -80%",
            //   markers: true,
              scrub: 3,
          }
      }),
      gsap.to("#hor3", {
          left: "-20%",
          scrollTrigger: {
              trigger: "#page2",
              scroller: "#main",
              start: "top 160%",  // Slight stagger for third element
              end: "top -80%",
            //   markers: true,
              scrub: 3,
          }
      });
};
GsapAnimation1();
  
const GsapAnimation2 = () => {
    gsap.to("#pg4hor1", {
        left: "0%",
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main", // If main is the correct scroller; otherwise remove this
            start: "top 160%",  // Adjusted start
            end: "top -80%",  // Adjusted end
            // markers: true,
            scrub: 3,
        }
    }),
    gsap.to("#pg4hor2", {
        left: "-10%",
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 160%%",  // Slight stagger for second element
            end: "top -80%",
            // markers: true,
            scrub: 3,
        }
    }),
    gsap.to("#pg4hor3", {
        left: "-20%",
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 160%",  // Slight stagger for third element
            end: "top -80%",
            // markers: true,
            scrub: 3,
        }
    });
};
GsapAnimation2();
  
function gooye(){
    Shery.imageEffect("#frame", {
    style: 1,
    // debug: true,
    config: {
      a:{value:0,range:[0,30]},
      b:{value:-0.91,range:[-1,1]},
      zindex:{value:-9996999,range:[-9999999,9999999]},
      aspect:{value:1},
      ignoreShapeAspect:{value:true},
      shapePosition:{value:{x:0,y:0}},
      shapeScale:{value:{x:0.5,y:0.5}},
      shapeEdgeSoftness:{value:0.03,range:[0,0.5]},
      shapeRadius:{value:0.5,range:[0,2]},
      currentScroll:{value:0},
      scrollLerp:{value:0.07},
      gooey:{value:true},
      infiniteGooey:{value:false},
      growSize:{value:4,range:[1,15]},
      durationOut:{value:1,range:[0.1,5]},
      durationIn:{value:1.5,range:[0.1,5]},
      displaceAmount:{value:0.5},
      masker:{value:false},
      maskVal:{value:1,range:[1,5]},
      scrollType:{value:0},
      geoVertex:{range:[1,64],value:1},
      noEffectGooey:{value:true},
      onMouse:{value:1},
      noise_speed:{value:0,range:[0,10]},
      metaball:{value:0.44,range:[0,2]},
      discard_threshold:{value:0.5,range:[0,1]},
      antialias_threshold:{value:0,range:[0,0.1]},
      noise_height:{value:0.4,range:[0,2]},
      noise_scale:{value:7.63,range:[0,100]},
      resolutionXY:{value:100},
      distortion:{value:true},
      mode:{value:-10},
      mousemove:{value:3},
      modeA:{value:1},
      modeN:{value:3},
      speed:{value:1,range:[-500,500],rangep:[-10,10]},
      frequency:{value:50,range:[-800,800],rangep:[-50,50]},
      angle:{value:0.5,range:[0,3.141592653589793]},
      waveFactor:{value:1.4,range:[-3,3]},
      color:{value:10212607},
      pixelStrength:{value:3,range:[-20,100],rangep:[-20,20]},
      quality:{value:5,range:[0,10]},
      contrast:{value:1,range:[-25,25]},
      brightness:{value:1,range:[-1,25]},
      colorExposer:{value:0.18,range:[-5,5]},
      strength:{value:0.2,range:[-40,40],rangep:[-5,5]},
      exposer:{value:8,range:[-100,100]}
    },
  
    gooey: true,
  });
}
gooye();

function btn(){
  const ANIMATEDCLASSNAME = "animated";
  const ELEMENTS = document.querySelectorAll(".pg3_btn");
  const ELEMENTS_SPAN = [];

ELEMENTS.forEach((element, index) => {
	let addAnimation = false;
	// Elements that contain the "FLASH" class, add a listener to remove
	// animation-class when the animation ends
	// if (element.classList[1] == "FLASH") {
	// 	element.addEventListener("animationend", e => {
	// 		element.classList.remove(ANIMATEDCLASSNAME);
	// 	});
	// 	addAnimation = true;
	// }

	// If The span element for this element does not exist in the array, add it.
	if (!ELEMENTS_SPAN[index])
		ELEMENTS_SPAN[index] = element.querySelector("span");

	element.addEventListener("mouseover", e => {
		ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
		ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";

		// Add an animation-class to animate via CSS.
		if (addAnimation) element.classList.add(ANIMATEDCLASSNAME);
	});

	element.addEventListener("mouseout", e => {
		ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
		ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
	});
});
}
btn();

function loaderimg(){
   gsap.from("#loadfront",{
    y:9,
    stagger: 0.25,
    duration: 0.3,
    // delay:0.5
    scale: 1.1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut", 
      duration: 2 
   });
}
loaderimg();

function load(){
  var timer = document.querySelector("#time")
var grow = 0;
setInterval(function(){
  if(grow<100){
    timer.innerHTML = grow++
  }else{
    timer.innerHTML = grow
  }
  },45)
}
load();

function svgAnimate(){
  gsap.from("#svganime",{
    y:150,
    stagger: 0.25,
    duration: 1,
    onComplete: () => {
      gsap.to("#svganime", {
          duration: 5,
          x: -600,
          stagger: 0.25,
          // duration: 0.3,
      })
    }
  })
}
svgAnimate()

function up (){
  gsap.from("#loader h1",{
    y:150,
    // stagger: 0.25,
    duration: 1,
    onComplete: () => {
      gsap.to("#time",{
        duration: 0.7,
        delay: 3,
        opacity: 0,
        yoyo: true,
        repeat: -1
      })
    }
  })
}
up()

function textrot (){
  gsap.to("#ring", {
    duration: 5,
    // x: 100,
    // y: 100,
    rotation: 180,
    scale: 1.1,
    scrub:  true,

});
}
textrot()

function loadend (){
  gsap.to("#loader",{
    opacity: 0,
    y:-200,
    duration:0.7, 
    delay:7,
    onEnd: () => {
      gsap.to("#loader", {
      display: "none",
      delay: 0
      })
    }
  });
  

  // gsap.from("#main",{
  //   opacity:0,
  //   y:200,
  //   delay: 3
  // })
  // gsap.to("#loader", {
  //   display: "none"
  // })
}
loadend()