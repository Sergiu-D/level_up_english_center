/**
 * v0 by Vercel.
 * @see https://v0.dev/t/I834dw7Bvdu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div className="relative w-full h-screen flex">
      <Image
        src="/assets/placeholder.svg"
        alt="Hero"
        className="absolute inset-0 object-cover w-full h-full"
        width={1000}
        height={1000}
      />
      <div className="relative z-10 lg:min-w-section">
        <div className="gap-4 p-4 md:gap-10">
          <div className="flex flex-col justify-center items-start">
            <div className="grid gap-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 dark:text-gray-50">
                Welcome to the Team
              </h1>
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
                Your one-stop shop for all employee resources. From onboarding
                to professional development, we&apos;ve got you covered.
              </p>
            </div>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white text-sm font-medium shadow-sm w-24 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
