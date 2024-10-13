

import Navigation from  "@/components/Navigation";

export default function Home() {
  return (
    <>
      <header className="max-w-8xl mx-auto">
        <Navigation />
      </header>
      <main className="flex flex-col items-center [&_>_*]:max-w-7xl [&_>_*]:w-full">
        <section className="bg-slate-200 !max-w-8xl">First section</section>
        <section className="bg-slate-500">Second section</section>
        <section className="bg-slate-700">Third section</section>
      </main>
      <footer className="max-w-8xl mx-auto">Footer section</footer>
    </>
  );
}
