import Image from "next/image"
import Link from "next/link"
import LinkCustom from "@/components/ui/link"

export default function CourseSection() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Your Cambridge EdVenture starts now
            </h1>
            <LinkCustom href="#register">Contacteaza-ne</LinkCustom>
          </div>
        </div>

        {/* Right Column - Course Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Adult English Courses */}
          <Link
            href="#adult-courses"
            className="group relative overflow-hidden rounded-lg aspect-[4/3]"
          >
            <Image
              src="/assets/cursuri-1-4.png"
              alt="Adult English Courses"
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
              width={300}
              height={400}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 group-hover:from-black/80 transition-colors">
              <div className="absolute bottom-0 p-4 text-white">
                <h2 className="text-xl font-bold mb-2">
                  Cursuri de Engleză pentru Adulți
                </h2>
                <p className="text-sm opacity-90">
                  Descoperă cursurile de engleză online pentru adulți, foarte
                  apreciate pentru interactivitate și conversații
                </p>
              </div>
            </div>
          </Link>

          {/* Children English Courses */}
          <Link
            href="#children-courses"
            className="group relative overflow-hidden rounded-lg aspect-[4/3]"
          >
            <Image
              src="/assets/cursuri-5-8.jpg"
              alt="Children English Courses"
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
              width={300}
              height={400}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 group-hover:from-black/80 transition-colors">
              <div className="absolute bottom-0 p-4 text-white">
                <h2 className="text-xl font-bold mb-2">
                  Cursuri de Engleză pentru Copii
                </h2>
                <p className="text-sm opacity-90">
                  Descoperă cursurile de engleză pentru copii. Cel mai mult ne
                  dorim să devină copiilor o experiență de învățare plăcută
                </p>
              </div>
            </div>
          </Link>

          {/* IELTS Preparation Courses */}
          <Link
            href="#ielts-courses"
            className="group relative overflow-hidden rounded-lg aspect-[4/3]"
          >
            <Image
              src="/assets/cursuri-liceu.jpg"
              alt="IELTS Preparation Courses"
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
              width={300}
              height={400}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 group-hover:from-black/80 transition-colors">
              <div className="absolute bottom-0 p-4 text-white">
                <h2 className="text-xl font-bold mb-2">
                  Cursuri de Pregătire pentru IELTS
                </h2>
                <p className="text-sm opacity-90">
                  Alege pregătirea completă pentru testul IELTS alături de o
                  echipă de profesori specialiști
                </p>
              </div>
            </div>
          </Link>

          {/* Cambridge English Courses */}
          <Link
            href="#cambridge-courses"
            className="group relative overflow-hidden rounded-lg aspect-[4/3]"
          >
            <Image
              src="/assets/cursuri-adulti.jpg"
              alt="Cambridge English Courses"
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
              width={300}
              height={400}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 group-hover:from-black/80 transition-colors">
              <div className="absolute bottom-0 p-4 text-white">
                <h2 className="text-xl font-bold mb-2">
                  Cursuri de Engleză Cambridge
                </h2>
                <p className="text-sm opacity-90">
                  Cel mai complet program de învățare a limbii engleze prin
                  metoda Cambridge pentru copii și adolescenți
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

