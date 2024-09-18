"use client"
import Lottie from 'lottie-react';
import siteUnderConstructionAnimation from '../../public/animations/site-under-construction.json';

export default function Home() {
  return (
    <main className="flex justify-center items-center h-[100vh]">
      <Lottie
        autoplay={true}
        loop={true}
        animationData={siteUnderConstructionAnimation}
        className="w-[100vw] h-[100vh]"
      />
    </main>
  );
}
