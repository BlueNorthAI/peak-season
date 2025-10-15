import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f612_1px,transparent_1px),linear-gradient(to_bottom,#3b82f612_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-white/80 px-6 py-3 shadow-sm backdrop-blur-sm">
              <svg className="h-8 w-8" viewBox="0 0 109 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M95.8851 24.6855C95.7849 24.5852 95.6346 24.5352 95.4843 24.5352C95.434 24.5352 93.3297 24.3848 93.3297 24.3848C93.3297 24.3848 81.6187 12.8745 80.9672 12.223C80.3157 11.5715 79.0627 11.7218 78.5615 11.8721C78.5615 11.8721 77.5591 12.1727 75.7055 12.7239C75.2043 11.3206 74.4025 9.76697 73.1495 8.21333C70.4929 4.90564 66.9845 3.15173 63.0753 3.10161C63.0753 3.10161 63.0753 3.10161 63.0251 3.10161C62.8748 2.95126 62.7245 2.85103 62.5742 2.70068C60.9203 1.09692 58.8661 0.295044 56.5113 0.345167C51.0495 0.445413 45.6378 4.45493 41.0774 11.7218C37.9201 16.9844 35.4149 23.4326 34.6632 28.1436C28.7997 29.9975 24.6399 31.3006 24.5396 31.3507C21.9832 32.1525 21.8831 32.2527 21.5825 34.6577C21.3822 36.4113 15.3181 88.0544 15.3181 88.0544L74.7534 98.5798L99.4434 92.5658C99.4434 92.5658 95.9853 24.7858 95.8851 24.6855ZM73.3499 13.3757C72.0969 13.7766 70.6435 14.2277 69.0397 14.7289C69.0397 11.2708 68.3882 6.60998 66.2338 3.10161C70.0427 3.75313 72.2472 9.01559 73.3499 13.3757ZM64.0275 15.7807C60.6696 16.8333 57.0109 18.0362 53.3021 19.2391C54.3547 14.8791 56.6093 10.5692 59.3161 7.71197C60.3186 6.55986 61.6718 5.30693 63.3257 4.45493C65.5803 7.51149 64.0777 13.2754 64.0275 15.7807ZM56.4612 1.79873C57.5138 1.79873 58.4661 2.04914 59.3161 2.54997C57.7624 3.45219 56.2588 4.75528 54.9557 6.20868C51.5477 9.96732 48.8911 15.8309 47.8385 21.4945C44.6311 22.5471 41.5244 23.5496 38.6672 24.4518C40.7214 15.6304 47.4876 2.04914 56.4612 1.79873Z"
                  fill="#95BF47"
                />
                <path
                  d="M95.4843 24.5352C95.434 24.5352 93.3297 24.3848 93.3297 24.3848C93.3297 24.3848 81.6187 12.8745 80.9672 12.223C80.6666 11.9224 80.2657 11.7721 79.8648 11.7721V98.5798L99.4434 92.5658C99.4434 92.5658 95.9853 24.7858 95.8851 24.6855C95.7849 24.5852 95.6346 24.5352 95.4843 24.5352Z"
                  fill="#5E8E3E"
                />
                <path
                  d="M63.0251 40.6672L59.9686 51.5938C59.9686 51.5938 56.9622 50.0401 53.3035 50.2405C48.1913 50.5411 48.1411 53.6478 48.1913 54.6002C48.4417 58.8099 60.0524 59.9621 60.6537 71.0717C61.1046 79.8429 56.3434 86.0413 49.1266 86.4422C40.7214 86.9434 36.3112 81.9471 36.3112 81.9471L37.9651 75.0806C37.9651 75.0806 42.4254 78.7894 46.1843 78.5891C48.5391 78.4889 49.3409 76.5347 49.2908 75.2817C48.9401 69.6181 39.0168 70.2195 38.4656 60.0132C37.9651 51.4435 43.2275 42.8738 55.3393 42.0219C60.3527 41.6711 63.0251 40.6672 63.0251 40.6672Z"
                  fill="white"
                />
                <path
                  d="M79.8648 11.7721C79.8648 11.7721 78.8623 12.0727 77.3587 12.5238L77.3085 12.5739C77.3085 12.5739 77.3085 12.5739 77.3587 12.5238C75.8049 11.1205 73.9513 9.41663 71.6967 7.51149C68.9399 4.95505 65.5803 2.04914 61.5206 0.896149C61.5206 0.896149 61.5206 0.896149 61.5707 0.896149C61.6208 0.946272 61.6208 0.946272 61.671 0.996395C65.5803 7.51149 64.0777 13.2754 64.0275 15.7807C60.6696 16.8333 57.0109 18.0362 53.3021 19.2391C54.3547 14.8791 56.6093 10.5692 59.3161 7.71197C60.3186 6.55986 61.6718 5.30693 63.3257 4.45493C65.5803 7.51149 64.0777 13.2754 64.0275 15.7807C60.6696 16.8333 57.0109 18.0362 53.3021 19.2391C54.3547 14.8791 56.6093 10.5692 59.3161 7.71197C60.3186 6.55986 61.6718 5.30693 63.3257 4.45493C57.7624 3.45219 56.2588 4.75528 54.9557 6.20868C51.5477 9.96732 48.8911 15.8309 47.8385 21.4945C44.6311 22.5471 41.5244 23.5496 38.6672 24.4518C40.7214 15.6304 47.4876 2.04914 56.4612 1.79873C57.5138 1.79873 58.4661 2.04914 59.3161 2.54997C57.7624 3.45219 56.2588 4.75528 54.9557 6.20868C51.5477 9.96732 48.8911 15.8309 47.8385 21.4945L38.6672 24.4518C40.7214 15.6304 47.4876 2.04914 56.4612 1.79873C63.0753 3.10161 63.0753 3.10161 63.0251 3.10161C62.8748 2.95126 62.7245 2.85103 62.5742 2.70068C60.9203 1.09692 58.8661 0.295044 56.5113 0.345167C51.0495 0.445413 45.6378 4.45493 41.0774 11.7218C37.9201 16.9844 35.4149 23.4326 34.6632 28.1436C28.7997 29.9975 24.6399 31.3006 24.5396 31.3507C21.9832 32.1525 21.8831 32.2527 21.5825 34.6577C21.3822 36.4113 15.3181 88.0544 15.3181 88.0544L74.7534 98.5798L79.8648 97.0261V11.7721Z"
                  fill="#95BF47"
                  fillOpacity="0.1"
                />
              </svg>
              <div className="h-6 w-px bg-primary/20" />
              <span className="text-sm font-semibold text-foreground">Shopify Plus Certified Partner</span>
            </div>
          </div>

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="font-medium text-primary">Peak Season 2025: Nov-Dec BFCM Readiness</span>
          </div>

          <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Don't Lose $1.2T to Stockouts This Holiday Season
          </h1>

          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            <span className="font-semibold text-primary">BlueNorth AI</span> delivers ML-powered supply chain
            intelligence that guarantees 5X ROI on inventory optimization. Custom Shopify Plus app + expert consulting
            to eliminate stockouts, reduce excess inventory, and maximize peak season revenue.
          </p>

          <div className="mt-6 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/10 to-secondary/10 p-4">
            <p className="text-pretty text-base font-medium leading-relaxed">
              <span className="text-primary">Expert Supply Chain Team + AI-Powered Monitoring</span> watching your
              operations 24/7 throughout peak season
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="group w-full sm:w-auto bg-primary hover:bg-primary/90">
              Get Your Peak Season Assessment
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-primary/30 text-primary hover:bg-primary/10 bg-transparent"
            >
              View Case Studies
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">5X</div>
              <div className="mt-2 text-sm text-muted-foreground">Guaranteed ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary">30-50%</div>
              <div className="mt-2 text-sm text-muted-foreground">Reduction in Supply Chain Errors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent">$10K</div>
              <div className="mt-2 text-sm text-muted-foreground">Fixed Investment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
