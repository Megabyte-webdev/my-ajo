import React, { useEffect, useRef } from "react";
import searcherAnim from "../assets/anim/searcher-anim.json";
import Lottie from "lottie-react";
import type { LottieRefCurrentProps } from "lottie-react";
import logo from "../assets/myajoimg.jpg";

const Fallback: React.FC = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(1.5);
    }
  }, []);

  return (
    <main className="w-screen h-screen bg-[#f0d9b5]/80 flex flex-col justify-center items-center">
      <Lottie
        lottieRef={lottieRef}
        className="w-[40%] md:w-[25%]"
        animationData={searcherAnim}
      />
      <img src={logo} className="w-[15%]" alt="Main Logo" />
    </main>
  );
};

export default Fallback;
