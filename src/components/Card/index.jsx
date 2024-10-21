import Image from "next/image";
import LinkCustom from "@/components/ui/link"

export default function Card({ title, description, imageSrc, linkLabel }) {
  return (
    <div className=" flex justify-center items-center">
      <div className="max-w-[350px] mx-auto rounded-xl bg-gradient-to-tr from-primary-dark via-primary-light to-secondary-light hover:from-primary hover:via-secondary hover:to-secondary-light p-0.5 transition-all group">
        <div className="relative flex flex-col text-gray-700 bg-white bg-clip-border rounded-xl">
          <div className="relative mx-4 -mt-6 overflow-hidden text-white bg-clip-border rounded-xl bg-blue-gray-500">
            <Image
              width={500}
              height={100}
              className="group-hover:scale-110 transition-all duration-300 ease-in-out aspect-[3/2] object-cover"
              src="/assets/cursuri-1-4.png"
              alt="card-image"
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              alias repudiandae repellendus necessitatibus fugiat, vel impedit
              culpa a blanditiis velit.
            </p>
          </div>
          <div className="p-6 pt-0">
            <LinkCustom href="#">Afla mai multe informatii</LinkCustom>
          </div>
        </div>
      </div>
    </div>
  );
}