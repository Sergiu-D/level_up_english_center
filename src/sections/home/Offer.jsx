import { Trophy, Heart, Puzzle, Layers } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Main heading */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-base sm:text-lg md:text-xl text-center mb-4">
          De ce sa ne alegi?
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Misiunea noastră este să cultivăm pasiunea pentru învățarea limbilor
          străine și să pregătim cursanți pentru a deveni cetățeni globali,
          informați și responsabili.
        </p>
      </div>

      {/* Grid of features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">
        {/* Professionalism */}
        <div className="flex flex-col items-center text-center md:border-r md:border-b border-gray-200 p-6">
          <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-orange-50">
            <Trophy className="w-8 h-8 text-orange-500" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Profesionalism</h3>
          <p className="text-sm text-muted-foreground">
            Ne înconjurăm de oameni entuziaști, profesioniști în domeniile lor
            de activitate, de la profesori la coordonatori de cursuri
          </p>
        </div>

        {/* Passion and involvement */}
        <div className="flex flex-col items-center text-center md:border-b border-gray-200 p-6">
          <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-orange-50">
            <Heart className="w-8 h-8 text-orange-500" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Pasiune și implicare</h3>
          <p className="text-sm text-muted-foreground">
            Punem multă pasiune și ne implicăm activ în procesul educațional,
            motivând și inspirând cursanții să își atingă potențialul
          </p>
        </div>

        {/* Student needs focus */}
        <div className="flex flex-col items-center text-center md:border-r border-gray-200 p-6">
          <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-orange-50">
            <Puzzle className="w-8 h-8 text-orange-500" />
          </div>
          <h3 className="text-xl font-semibold mb-3">
            Focus pe nevoile cursantului
          </h3>
          <p className="text-sm text-muted-foreground">
            Înțelegem nevoile fiecărui cursant și personalizăm experiența de
            învățare pentru a face cursurile cât mai eficiente
          </p>
        </div>

        {/* Respect */}
        <div className="flex flex-col items-center text-center p-6">
          <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-orange-50">
            <Layers className="w-8 h-8 text-orange-500" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Respect</h3>
          <p className="text-sm text-muted-foreground">
            Promovăm un mediu bazat pe sprijin și respect, esențiale pentru
            dezvoltarea personală și succesul academic
          </p>
        </div>
      </div>
    </section>
  );
}
