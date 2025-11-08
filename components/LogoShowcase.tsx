import Image from "next/image";
import { LINKS } from '@/config/links';

export default function LogoShowcase() {
  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto w-full max-w-5xl rounded-3xl bg-white p-4 sm:p-6 md:p-10 shadow-xl dark:bg-gray-900">
        <Image
          src="/brand/justine-logo.png"
          alt="Justine Longla T. — DevSecOps · Cloud · Sustainability"
          width={1200}
          height={900}
          priority
          className="w-full h-auto"
        />
        <div className="mt-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">JUSTINE LONGLA T.</h3>
          <p className="text-gray-600 dark:text-gray-300">DevSecOps · Cloud · Sustainability</p>
        </div>
      </div>
    </section>
  );
}

