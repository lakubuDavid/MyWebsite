// let menu;
import "./barba/core.js"
import { gsap, MotionPathPlugin } from "./gsap/esm/all.js"


import "./components/SkillCard.js"
import "./components/SkillList.js"
import "./components/HomeMenu.js"
import "./components/MenuToggle.js"


let menuShown = false;
let cursorScaling = 1.0;

gsap.registerPlugin(MotionPathPlugin)

addEventListener("load", (_) => {
  barba.init({
    // sync: true,
    // debug: true,
    transitions: [
      {
        name: "page-transition",
        beforeLeave(data) {
          document.querySelector("#blob")?.setAttribute("hidden", "true");
          toggleMenu()
        },
        leave(data) {
          return gsap.to(data.current.container, {
            x: "100vw",
            duration:0.5
            // opacity:0
          });
        },
        beforeEnter(data){
          return gsap.from(data.next.container, {
            x: "-100vw",
            duration:0.5
            // filter: "blur(8px)",
            // opacity:0
          });
        },
        enter(data) {
          // return gsap.from(data.next.container, {
          //   x: -500,
          //   // opacity:0
          // });
        },
        afterEnter(data) {
          document.querySelector("#blob")?.removeAttribute("hidden");
          return gsap.from(data.next.container, {
            x: -500,
            duration:0.5
          //   // opacity:0
          });
        }
      },
    ],
  });

  barba.hooks.beforeEnter((data) => {
    onPageUnload();

  });
  barba.hooks.afterEnter((data) => {
    onPageLoad();
  });

  onPageLoad();

  followCursor({
      x:window.innerWidth/2,
      y:window.innerWidth/2,
      target:null
    })
  document.querySelector("#menu-toggle").addEventListener("click", toggleMenu);
});

function onPageLoad() {
  window.addEventListener("mousemove", followCursor);
  // window.addEventListener("mousemove", moveMagneticLinks);

  menuShown = false;

}
function onPageUnload() {
  window.removeEventListener("mousemove", followCursor);
  // window.removeEventListener("mousemove", moveMagneticLinks);
  console.log("unload");
}

function moveMagneticLinks(ev) {
  // return
  const { x, y, target } = ev;

  const el = target?.closest(".menu-link")
  if (!el)
    return

  // moveMagneticLinks(screenX, screenY);
  const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  const MOVE_RADIUS = 1;

  // const offsetFromcenter = {
  //   x: (x - center.x) / window.innerWidth,
  //   y: (y - center.y) / window.innerHeight,
  // };

  // gsap.to(el, {
  //   // x: x - el.left,
  //   y: y - el.top
  // })

  el?.addEventListener('mouseleave', function () {
    gsap.to(el, {
      x: 0,
      y:0
    })
  })
}

function followCursor(ev) {
  const followCursor = document.querySelector(".follow-cursor");
  const cursor = document.querySelector("#cursor");
  const { x, y, target } = ev;
  // cursorScaling = document.querySelector(".menu-link:hover") ? 5 : 1;
  cursorScaling = target?.closest(".menu-link") ? 5 : 1;

  gsap.to(followCursor, {
    x: x - 10,
    y: y - 10,
    duration: 0.3,
    ease: "sine.inOut",
  });

  gsap.to(cursor, {
    x: x - 10,
    y: y - 10,
    transform: `scale(${cursorScaling})`,
    duration: 0.1,
    ease: "sine.inOut",
  });
}

function toggleMenu() {
  console.log("Clicked");
  const menu = document.querySelector("#menu");

  menuShown = !menuShown;

  if (menuShown) menu?.classList.add("show");
  else menu?.classList.remove("show");

  console.log(menuShown);
  console.log(menu);
}
