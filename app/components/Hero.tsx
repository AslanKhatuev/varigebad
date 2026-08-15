import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      aria-label="Introduksjon: Eksperter på bad og våtrom i Oslo"
      className="px-4 pb-10 pt-10 sm:px-6 sm:pb-16 sm:pt-14 md:pb-20 md:pt-16 lg:px-8 xl:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-4 max-w-3xl text-[28px] font-light leading-tight tracking-tight text-[#1A3A4A] sm:mb-5 sm:text-[40px] md:text-[48px] lg:text-[60px]">
          Ekspertise på bad og våtrom
        </h1>

        <div className="mb-6 sm:mb-8">
          <p className="mb-3 text-[14px] font-semibold text-[#1A3A4A] sm:text-[15px]">
            Det som kjennetegner oss best:
          </p>
          <ul className="flex flex-wrap gap-2.5 sm:gap-3">
            {["Fast pris", "Ingen skjulte kostnader", "Autoriserte håndverkere"].map(
              (item) => (
                <li
                  key={item}
                  className="flex items-center gap-1.5 rounded-full bg-[#DCF2F9] px-4 py-2 text-[13px] font-medium text-[#1A3A4A] sm:text-[14px]"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="shrink-0 text-[#3A9AB5]"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-black shadow-[0_20px_60px_rgba(77,174,200,0.15)] sm:aspect-[16/10] md:aspect-[16/9]">
          <Image
            src="/varigebad.png"
            alt="Ferdigstilt baderom levert av Varige Bad"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 md:p-10">
            <p className="mb-6 max-w-xl text-[15px] leading-relaxed text-white sm:mb-8 sm:text-[16px] md:text-[18px]">
              Vi leverer komplette baderom fra start til slutt – med solide
              våtromsløsninger, rørleggerarbeid, innredning og profesjonell
              flislegging. Vi kombinerer høy kvalitet med effektiv gjennomføring
              og forutsigbar fremdrift – hver gang.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="rounded-full bg-[#4DAEC8] px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-[#3A9AB5] sm:px-7 sm:py-3.5 sm:text-[15px]"
              >
                Book gratis befaring
              </Link>
              <Link
                href="/tjenester/totaloppussing-av-bad"
                className="rounded-full border border-white/70 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-white/10 sm:px-7 sm:py-3.5 sm:text-[15px]"
              >
                Se alle våre tjenester
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
