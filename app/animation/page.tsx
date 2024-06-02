import React from "react";
import Animation from "../components/Animation";
import Btns from "../components/Btn";


const AnimationPage = () => {
  return (
    <>
      <div className="gradi w-screen h-screen flex justify-center items-center">
        <Animation />
        <Btns path='/' name='Go Home' btnPosition=' bottom-5 left-5'  />
        
      </div>
    </>
  );
};

export default AnimationPage;
