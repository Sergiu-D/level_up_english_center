import Image from "next/image";
// Components
import LinkCustom from "@/components/ui/link";

export default function Hero() {
  return (
    <div className="relative overflow-hidden w-full h-full flex flex-col justify-center">
      <div className="relative z-10 w-full xl:w-1/2 h-1/2 flex flex-col justify-center items-center xl:ml-32">
        <div className="gap-4 p-4 md:gap-10">
          <div className="flex flex-col gap-10 justify-center items-center text-center xl:text-left xl:items-start">
            <h1 className="font-bold text-5xl flex flex-col">
              Învață engleza într-un mod{" "}
              <span className="from-primary from-0% to-secondary to-80% bg-clip-text text-transparent bg-gradient-to-r leading-[60px]">
                distractiv, simplu și ușor!
              </span>
            </h1>
            <p className="text-3xl">
              Pregatire Cambridge pentru copii de gimnaziu, liceu dar si cursuri
              de engleza pentru adulti.
            </p>
            <LinkCustom href="/contact">Contact</LinkCustom>
          </div>
        </div>
      </div>
      {/* <div className="w-full xl:w-1/2 h-1/2"> */}
      <Image
        src="/assets/placeholder.svg"
        alt="Hero"
        className="absolute inset-0 object-cover w-full h-full z-0"
        width={800}
        height={500}
      />
      {/* </div> */}
    </div>
  );
}
