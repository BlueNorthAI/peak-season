import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-primary">Supply Chain Guru</h3>
            <p className="mt-2 text-sm text-muted-foreground">Supply chain intelligence for e-commerce merchants</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Expertise</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>ML & Optimization Models</li>
              <li>Demand Forecasting</li>
              <li>Inventory Optimization</li>
              <li>Control Tower Systems</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>info@supply-chain.guru</li>
              <li>Schedule a call</li>
              <li>Case studies</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-center gap-4 text-sm text-muted-foreground sm:flex-row sm:justify-between">
            <p>© 2025 Supply Chain Guru. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
