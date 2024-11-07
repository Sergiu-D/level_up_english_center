import { Check, Trophy, Banknote, Book } from "lucide-react";

export default function Component() {
  return (
    <section className="bg-[#F5F5F5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#5751E1] mb-8">
          De ce să ne alegi?
        </h1>
        <div className="flex flex-wrap justify-center -mx-3">
          {[
            {
              icon: <Check className="w-6 h-6 text-white" />,
              title: "Avem 100% promovabilitate la examenele CAMBRIDGE",
              description:
                "De 11 ani avem 100% promovabilitate la examenele CAMBRIDGE.",
              bgColor: "bg-[#F1D058]",
            },
            {
              icon: <Trophy className="w-6 h-6 text-white" />,
              title:
                "Suntem cel mai bun centru de pregătire CAMBRIDGE PET din lume",
              description:
                "Conform raportului emis de Cambridge Assessment English din anul școlar 2022 - 2023.",
              bgColor: "bg-[#F3686A]",
            },
            {
              icon: <Banknote className="w-6 h-6 text-white" />,
              title: "Oferim integral banii înapoi",
              description:
                "În cazul în care copilul dvs. nu promovează examenul CAMBRIDGE, vă oferim integral banii înapoi (conform regulamentului).",
              bgColor: "bg-[#F3686A]",
            },
            {
              icon: <Book className="w-6 h-6 text-white" />,
              title: "Ședințele de curs nu se pierd",
              description:
                "În cazul absentării, ședințele de curs nu se pierd. Profesorul va transmite pe mail-ul părintelui informația pierdută și se va asigura la întoarcerea cursantului că acesta a asimilat corect informația.",
              bgColor: "bg-[#5751E1]",
            },
          ].map((item, index) => (
            <div key={index} className="w-full md:w-1/2 px-3 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="flex items-start">
                  <div className={`mr-4 p-2 rounded-lg ${item.bgColor}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#5751E1] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
