import Image from 'next/image'

export function Credentials() {
  return (
    <section className="border-y bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-extrabold leading-[1.1] tracking-[-0.02em] text-gray-900 sm:text-6xl lg:text-5xl">
            World-Class Expertise Meets{" "}
            <span className="text-transparent bg-clip-text" style={{backgroundImage: 'linear-gradient(90deg, rgba(8, 65, 29, 1) 0%, rgba(36, 139, 47, 1) 70%, rgba(235, 174, 45, 1) 100%)'}}>
              AI Innovation
            </span>
          </h2>
          <p className="mt-6 text-balance text-xl leading-relaxed text-muted-foreground">
            Our team of supply chain experts have worked at and been certified by leading global organizations
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:gap-12">
          {/* McKinsey & Company */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-20 w-full items-center justify-center rounded-lg border bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
              <Image src="/mckinsey.png" alt="McKinsey & Company" width={600} height={200} className="h-15 w-auto" />
              {/* <svg className="h-12 w-auto" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text
                  x="10"
                  y="28"
                  fontFamily="Arial, sans-serif"
                  fontSize="20"
                  fontWeight="bold"
                  fill="#000000"
                  letterSpacing="-0.5"
                >
                  McKinsey & Company
                </text>
              </svg> */}
            </div>
            <p className="text-center text-xs text-muted-foreground">Strategy & Operations</p>
          </div>

          {/* MIT */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-20 w-full items-center justify-center rounded-lg border bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
              <Image src="/MIT-Logo.png" alt="MIT" width={600} height={200} className="h-30 w-auto" />
              {/* <svg className="h-16 w-auto" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="8" width="20" height="24" fill="#A31F34" />
                <rect x="35" y="8" width="20" height="24" fill="#A31F34" />
                <rect x="60" y="8" width="20" height="24" fill="#A31F34" />
                <text x="15" y="26" fontFamily="serif" fontSize="18" fontWeight="bold" fill="white">
                  M
                </text>
                <text x="42" y="26" fontFamily="serif" fontSize="18" fontWeight="bold" fill="white">
                  I
                </text>
              <text x="66" y="26" fontFamily="serif" fontSize="18" fontWeight="bold" fill="white">
                T
              </text>
            </svg> */}
          </div>
            <p className="text-center text-xs text-muted-foreground">Supply Chain Management</p>
          </div>

          {/* Blue Yonder */}
          <div className="col-span-2 flex flex-col items-center gap-3 sm:col-span-1">
                <div className="flex h-20 w-full items-center justify-center rounded-lg border bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
              <Image src="/Blue_Yonder.png" alt="Blue Yonder" width={600} height={200} className="h-20 w-auto object-contain" />
              {/* <svg className="h-10 w-auto" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="12" fill="#0066CC" />
                <text
                  x="38"
                  y="26"
                  fontFamily="Arial, sans-serif"
                  fontSize="16"
                  fontWeight="600"
                  fill="#0066CC"
                  letterSpacing="0.5"
                >
                  Blue Yonder
                </text>
              </svg> */}
            </div>
            <p className="text-center text-xs text-muted-foreground">Supply Chain Platform</p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-6">
          <p className="text-center text-pretty leading-relaxed text-muted-foreground">
            Our experts bring decades of combined experience from{" "}
            <span className="font-semibold text-primary">McKinsey & Company's</span> strategy consulting,{" "}
            <span className="font-semibold text-primary">MIT's</span> supply chain research programs, and{" "}
            <span className="font-semibold  text-primary ">Blue Yonder's</span> enterprise supply chain solutions. This
            deep expertise, combined with our proprietary AI models, delivers unmatched results for e-commerce merchants
            merchants.
          </p>
        </div>
      </div>
    </section>
  )
}
