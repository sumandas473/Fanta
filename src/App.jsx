import React, { useRef } from "react";
import Navbar from "./components/navbar/Navbar";
import sprite from "./assets/sprite.webp";
import Green from "./assets/green-lemon.png";
import lemonsplash from "./assets/lemon-splash.png";
import lemonleaf from "./assets/lemon-leaf.png";
import fanta from "./assets/Fanta.png";
import roundlemon from "./assets/lemon-slice.webp";
import coke from "./assets/Coke.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  const box = useRef();
  useGSAP(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#main",
          start: "10% 50%",
          end: "50% 50%",
          scrub: 1,
          // pin: true,
          // markers: true,
        },
      });

 
      tl.to(
        "#sprite",
        {
          top: "110%",
          left: "8%",
          duration: 0.6,
          ease: "power1.inOut",
        },
        "sprite"
      ),
        tl.to(
          "#green-lemon",
          {
            top: "160%",
            left: "10%",

            duration: 0.6,
            ease: "power1.inOut",
          },
          "sprite"
        ),
        tl.to(
          "#leaf",
          {
            top: "120%",
            // left: "8%",
            rotate: "80deg",
            duration: 0.4,
            ease: "power1.inOut",

            // ease:'power1.inOut'
          },
          "sprite"
        ),
        tl.to(
          "#leaf-1",
          {
            top: "50%",
            // left: "8%",
            rotate: "80deg",
            duration: 0.6,
            ease: "power1.inOut",

            // ease:'power1.inOut'
          },
          "sprite"
        ),
        tl.to(
          "#leaf-2",
          {
            top: "110%",
            // right: "8%",
            rotate: "80deg",
            duration: 0.6,
            ease: "power1.inOut",

            // ease:'power1.inOut'
          },
          "sprite"
        );

    
        let tl2 = gsap.timeline({
          scrollTrigger: {
          trigger: "#second",
          start: "53% 50%",
          end: "85% 50%",
          scrub: 1,
          pin: true,
          markers: true
        }
      });
      tl2.to(
        "#sprite",
        {
          top: "223%",
          left: "28%",
          width: '44%',
          height:'60%',
          duration: 0.4,
          ease: "power1.inOut",
        },
        
      )
        
    },
    { scope: box }
  );
  

  return (
    <>
      <div
        className="bg-gradient-to-r from-[#547a42] to-[#385a25] h-screen w-full "
        ref={box}
        id="main"
      >
        <Navbar />
        <div className="container flex items-center justify-center ">
          <h1 className="text-[20rem] font-bold text-white absolute z-10  top-28  left-[20%]">
            Sprite
          </h1>
          <img
            src={lemonsplash}
            alt=""
            className=" w-[30%] absolute top-0 left-80 blur-[.5px]"
          />
          <img
            id="sprite"
            src={sprite}
            alt=""
            className="sptite w-[40%] left-[30%] top-30 z-20 absolute "
          />
          <img
            id="green-lemon"
            src={Green}
            alt=""
            className=" w-[15%] bottom-[50%] z-30 absolute left-[45%] "
          />
          <img
            id="leaf"
            src={lemonleaf}
            alt=""
            className=" w-[10%] z-40 absolute rotate-[-95deg] top-[10%] left-10 "
          />
          <img
            id="leaf-1"
            src={lemonleaf}
            alt=""
            className=" w-[15%] z-40 absolute rotate-[-45deg] top-72 left-20 "
          />
          <img
            src={lemonleaf}
            alt=""
            className=" w-[10%] z-40 absolute rotate-[-95deg] top-30 right-60 blur-sm "
          />
          <img
            id="leaf-2"
            src={lemonleaf}
            alt=""
            className=" w-[15%] z-40 absolute rotate-[-5deg] bottom-20 right-40 "
          />
        </div>
      </div>
      <div id="second" className="flex  bg-gradient-to-r from-[#547a42] to-[#385a25]  h-screen w-full " >
        <div className="w-[45%] h-full flex items-end">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg "
            className="w-[100%] ml-60 opacity-10"
          >
            <path
              fill="#ffff"
              d="M22.1,-22.4C36,-20.4,59.6,-23.7,67,-17.8C74.4,-11.9,65.5,3.2,56.5,14.5C47.6,25.8,38.6,33.2,29.1,36.4C19.7,39.7,9.8,38.7,0.5,38C-8.8,37.3,-17.7,36.9,-29.2,34.3C-40.7,31.8,-55,27.2,-61.5,17.5C-67.9,7.9,-66.6,-6.6,-60.3,-17.7C-54.1,-28.7,-42.9,-36.2,-32.1,-39.2C-21.2,-42.2,-10.6,-40.6,-3.2,-36.2C4.1,-31.7,8.3,-24.4,22.1,-22.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="w-[55%] h-full flex flex-col justify-center items-start px-20">
          <h1 className="text-white font-bold text-7xl  capitalize">
            Flavor updated
          </h1>
          <p className="pt-10 text-white capitalize ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            sit corrupti facere tempora sed eligendi unde at, quod eos id
            deleniti ex explicabo aliquid ad nihil quis. Accusamus quibusdam
            soluta voluptatum exercitationem recusandae? Necessitatibus
            reprehenderit, dolore non placeat expedita, veritatis nemo quod,
            dolorum sunt eveniet natus amet? Eum esse accusantium saepe, rem
            ratione in, et corporis voluptatum magnam a repellat ab laboriosam!
            Temporibus fuga laudantium rerum ipsum consectetur quis, ullam
            quibusdam dolorum dolore esse eveniet necessitatibus qui! Eaque
            vitae quasi sapiente. Doloribus, sunt alias tenetur, iste
            perferendis nulla quasi ducimus incidunt modi, nostrum laboriosam ex
            rem perspiciatis sequi sint. Molestiae.
          </p>
        </div>
      </div>
      <div className="flex items-end justify-around  bg-gradient-to-r from-[#547a42] to-[#385a25]  h-screen w-full py-10" >
        <div className="h-[55%] w-[20%] bg-white rounded-xl flex items-end justify-center ">
          <img 
            src={roundlemon}
            alt=""
            className="z-0  mb-64 absolute w-[30%]"
            id="roundlemon1"
          />
          <img 
            src={fanta}
            alt=""
            className="w-[17%] absolute ml-2 mb-28 z-10"
          />

          <div className="py-4 flex flex-col items-center">
            <h1 className="text-[#eb5600] text-4xl font-bold mb-4">Fanta</h1>
            <button className="px-10 py-2 bg-[#eb5600] rounded-2xl text-white font-semibold">
              Buy Now
            </button>
          </div>
        </div>


        <div className="h-[55%] w-[20%] bg-white rounded-xl flex items-end justify-center ">
          <img
            src={roundlemon}
            alt=""
            className="z-0  mb-64 absolute w-[30%]"
          />
          {/* <img
            src={fanta}
            alt=""
            className="w-[17%] absolute ml-2 mb-28 z-10"
          /> */}

          <div className="py-4 flex flex-col items-center">
            <h1 className="text-[#37a332] text-4xl font-bold mb-4">Sprite</h1>
            <button className="px-10 py-2 bg-[#1d6d21] rounded-2xl text-white font-semibold">
              Buy Now
            </button>
          </div>
        </div>

        <div className="h-[55%] w-[20%] bg-white rounded-xl flex items-end justify-center ">
          <img
            src={roundlemon}
            alt=""
            className="z-0 mb-64 absolute w-[30%]"
          />
          <img
            src={coke}
            alt=""
            className="w-[16%] absolute mb-28 z-10"
          />

          <div className="py-4 flex flex-col items-center">
            <h1 className="text-[#a52828] text-4xl font-bold mb-4">Cocacola</h1>
            <button className="px-10 py-2 bg-[#eb5600] rounded-2xl text-white font-semibold">
              Buy Now
            </button>
          </div>
        </div>
        


      </div>
    </>
  );
}

export default App;
