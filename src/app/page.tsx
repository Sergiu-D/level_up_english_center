"use client"
import Lottie from 'lottie-react';
import siteUnderConstructionAnimation from '../../public/animations/site-under-construction.json';

export default function Home() {
  const environment = process.env.NEXT_PUBLIC_NODE_ENVIRONMENT;
  return (
    <main className="flex flex-col justify-center items-center min-h-[100vh]">
      <h1>Environment: {environment}</h1>
      <Lottie
        autoplay={true}
        loop={true}
        animationData={siteUnderConstructionAnimation}
        className="w-[100vw] h-[100vh]"
      />
    </main>
  );
}
