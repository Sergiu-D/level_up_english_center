import Image from "next/image";
import LinkCustom from "@/components/ui/link"

export default function Card({ title, description, image, link }) {
  const {label, href} = link;
  const {alt, src} = image
  return (
    <div className=" flex justify-center items-center">
      <div className="w-[20vw] max-w-[330px] mx-auto rounded-xl bg-gradient-to-tr from-primary-dark via-primary-light to-secondary-light hover:from-primary hover:via-secondary hover:to-secondary-light p-0.5 transition-all group">
        <div className="relative flex flex-col text-gray-700 bg-white bg-clip-border rounded-xl">
          <div className="relative mx-4 -mt-6 overflow-hidden text-white bg-clip-border rounded-xl bg-blue-gray-500">
            <Image
              width={500}
              height={100}
              className="group-hover:scale-110 transition-all duration-300 ease-in-out aspect-[3/2] object-cover"
              src={src}
              alt={alt}
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
              {title}
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              {description}
            </p>
          </div>
          <div className="p-6 pt-0">
            <LinkCustom href={href}>{label}</LinkCustom>
          </div>
        </div>
      </div>
    </div>
  );
}