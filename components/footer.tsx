export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-primary">BlueNorth AI</h3>
            <p className="mt-2 text-sm text-muted-foreground">Supply chain intelligence for Shopify Plus merchants</p>
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
              <li>hello@bluenorth.ai</li>
              <li>Schedule a call</li>
              <li>Case studies</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 BlueNorth AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
