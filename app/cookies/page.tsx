import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | Supply Chain Guru',
  description: 'Cookie Policy for Supply Chain Guru - Learn about how we use cookies and tracking technologies.',
}

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Cookie Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last Updated: January 2025</p>

        <div className="mt-8 space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold">1. What Are Cookies?</h2>
            <p className="mt-4 text-muted-foreground">
              Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">2. How We Use Cookies</h2>
            <p className="mt-4 text-muted-foreground">
              Supply Chain Guru uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors are coming from. We use cookies for the following purposes:
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3. Types of Cookies We Use</h2>
            <div className="mt-4 space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground">3.1 Strictly Necessary Cookies</h3>
                <p className="mt-2 text-muted-foreground">
                  These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
                  <li>Session management</li>
                  <li>Security features</li>
                  <li>Authentication</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground">3.2 Analytics and Performance Cookies</h3>
                <p className="mt-2 text-muted-foreground">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website&apos;s performance.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
                  <li><strong>Vercel Analytics:</strong> Tracks page views, user sessions, and website performance</li>
                  <li>Usage statistics and traffic patterns</li>
                  <li>Error tracking and debugging</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground">3.3 Functionality Cookies</h3>
                <p className="mt-2 text-muted-foreground">
                  These cookies allow the website to remember choices you make (such as your language preference) and provide enhanced, more personalized features.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
                  <li>User preferences</li>
                  <li>Language and regional settings</li>
                  <li>Theme preferences (light/dark mode)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground">3.4 Third-Party Cookies</h3>
                <p className="mt-2 text-muted-foreground">
                  We use third-party services that may set cookies on your device:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
                  <li><strong>Calendly:</strong> For scheduling meetings and appointments</li>
                  <li><strong>Razorpay:</strong> For secure payment processing</li>
                  <li><strong>Vercel:</strong> For website hosting and analytics</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">4. Cookie Duration</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-medium text-foreground">Session Cookies</h3>
                <p className="mt-2">
                  These are temporary cookies that expire when you close your browser. They help us remember your actions during a single browsing session.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground">Persistent Cookies</h3>
                <p className="mt-2">
                  These cookies remain on your device for a set period or until you delete them. They help us recognize you as a returning visitor and remember your preferences.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">5. Managing Cookies</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences in several ways:
              </p>

              <div>
                <h3 className="text-lg font-medium text-foreground">Browser Settings</h3>
                <p className="mt-2">
                  Most web browsers allow you to control cookies through their settings. You can set your browser to:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>Block all cookies</li>
                  <li>Allow only first-party cookies</li>
                  <li>Delete cookies when you close your browser</li>
                  <li>Notify you when a website tries to set a cookie</li>
                </ul>
                <p className="mt-4">
                  Please note that blocking or deleting cookies may impact your experience on our website and limit certain functionality.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground">Browser-Specific Instructions</h3>
                <ul className="mt-2 space-y-2 pl-6">
                  <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                  <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                  <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">6. Third-Party Cookie Policies</h2>
            <div className="mt-4 text-muted-foreground">
              <p>
                For more information about how third-party services use cookies, please refer to their privacy and cookie policies:
              </p>
              <ul className="mt-4 space-y-2 pl-6">
                <li><strong>Vercel Analytics:</strong> <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Vercel Privacy Policy</a></li>
                <li><strong>Calendly:</strong> <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Calendly Privacy Policy</a></li>
                <li><strong>Razorpay:</strong> <a href="https://razorpay.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Razorpay Privacy Policy</a></li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">7. Do Not Track (DNT)</h2>
            <p className="mt-4 text-muted-foreground">
              Some browsers include a &quot;Do Not Track&quot; (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. We respect DNT signals, though tracking for essential cookies may still occur to ensure website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">8. Updates to This Cookie Policy</h2>
            <p className="mt-4 text-muted-foreground">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. Please check this page periodically for updates. The &quot;Last Updated&quot; date at the top indicates when the policy was last revised.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">9. Contact Us</h2>
            <div className="mt-4 text-muted-foreground">
              <p>If you have any questions about our use of cookies, please contact us:</p>
              <ul className="mt-4 space-y-2">
                <li><strong>Email:</strong> info@supply-chain.guru</li>
                <li><strong>Company:</strong> Supply Chain Guru</li>
              </ul>
            </div>
          </section>

          <section className="rounded-lg border border-border bg-muted/50 p-6">
            <h2 className="text-xl font-semibold">Your Consent</h2>
            <p className="mt-4 text-muted-foreground">
              By using our website, you consent to our use of cookies in accordance with this Cookie Policy. If you do not agree to our use of cookies, please adjust your browser settings or do not use our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
