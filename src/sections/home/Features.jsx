import Image from "next/image";
import BorderGradient from "@/components/BorderGradient";

export default function Features() {
  return (
    <section className="w-full pb-6 md:pb-24 lg:pb-32">
      <div className="container px-4 md:px-6 relative">
        <div className="grid items-start lg:grid-cols-2">
          {/* Left side - Image (now overlapping) */}
          <div className="relative z-10 lg:absolute  lg:top-1/2 lg:transform lg:-translate-y-1/2">
            {/* <div class="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-0">
              <svg
                class="w-16 h-auto text-orange-500"
                width="121"
                height="135"
                viewBox="0 0 121 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                  stroke="currentColor"
                  stroke-width="10"
                  stroke-linecap="round"
                />
                <path
                  d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                  stroke="currentColor"
                  stroke-width="10"
                  stroke-linecap="round"
                />
                <path
                  d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                  stroke="currentColor"
                  stroke-width="10"
                  stroke-linecap="round"
                />
              </svg>
            </div> */}
            <Image
              src="/assets/books.jpg"
              alt="Product screenshot showing an e-commerce interface"
              className="rounded-2xl shadow-lg ml-12"
              width={700}
              height={400}
            />
          </div>

          {/* Right side - Content (now with background) */}
          <div className="lg:col-start-2 bg-white rounded-3xl pr-8 lg:pr-12 pl-8 lg:pl-20 py-8 lg:py-12 shadow-lg relative z-0">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem] leading-tight">
                De ce sa ne alegi?
              </h2>
              <p>
                Misiunea noastră este să cultivăm pasiunea pentru învățarea
                limbilor străine și să pregătim cursanți pentru a deveni
                cetățeni globali, informați și responsabili.
              </p>
              <div className="space-y-6">
                {/* Feature Cards */}
                <BorderGradient>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 6V12M12 12V18M12 12H18M12 12H6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        Advanced tools
                      </h3>
                      <p className="text-gray-600">
                        Use Preline thoroughly thought and automated libraries
                        to manage your businesses.
                      </p>
                    </div>
                  </div>
                </BorderGradient>
                <BorderGradient>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 5a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1v-5zM14 15a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1h-4a1 1 0 01-1-1v-5z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        Smart dashboards
                      </h3>
                      <p className="text-gray-600">
                        Quickly Preline sample components, copy-paste codes, and
                        start right off.
                      </p>
                    </div>
                  </div>
                </BorderGradient>
                <BorderGradient>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        Powerful features
                      </h3>
                      <p className="text-gray-600">
                        Reduce time and effort on building modern look design
                        with Preline only.
                      </p>
                    </div>
                  </div>
                </BorderGradient>
                <BorderGradient>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        Powerful features
                      </h3>
                      <p className="text-gray-600">
                        Reduce time and effort on building modern look design
                        with Preline only.
                      </p>
                    </div>
                  </div>
                </BorderGradient>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
