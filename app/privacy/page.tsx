import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Supply Chain Guru',
  description: 'Privacy Policy for Supply Chain Guru- Learn how we collect, use, and protect your information.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last Updated: January 2025</p>

        <div className="mt-8 space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
            <p className="mt-4 text-muted-foreground">
              Supply Chain Guru (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-medium text-foreground">2.1 Personal Information</h3>
                <p className="mt-2">
                  We may collect personal information that you provide directly to us, including:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Business information (company name, role)</li>
                  <li>Payment information (processed securely through Razorpay)</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground">2.2 Automatically Collected Information</h3>
                <p className="mt-2">
                  When you access our website, we may automatically collect:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>Device and browser information</li>
                  <li>IP address and location data</li>
                  <li>Usage data and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
            <div className="mt-4 space-y-2 text-muted-foreground">
              <p>We use the information we collect to:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Provide, maintain, and improve our services</li>
                <li>Process payments and transactions</li>
                <li>Communicate with you about our services</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Analyze usage patterns and optimize our website</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">4. Information Sharing and Disclosure</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>We may share your information with:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our website and services (e.g., Razorpay for payment processing, Calendly for scheduling)</li>
                <li><strong>Analytics Partners:</strong> Vercel Analytics and similar services to understand website usage</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
              <p className="mt-4">
                We do not sell your personal information to third parties.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">5. Data Security</h2>
            <p className="mt-4 text-muted-foreground">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">6. Your Rights</h2>
            <div className="mt-4 space-y-2 text-muted-foreground">
              <p>Depending on your location, you may have the following rights:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate or incomplete information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction or objection to processing</li>
                <li>Data portability</li>
                <li>Withdrawal of consent</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at info@supply-chain.guru
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">7. Cookies and Tracking Technologies</h2>
            <p className="mt-4 text-muted-foreground">
              We use cookies and similar tracking technologies to enhance your experience on our website. For more information, please see our <a href="/cookies" className="text-primary hover:underline">Cookie Policy</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">8. Third-Party Links</h2>
            <p className="mt-4 text-muted-foreground">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">9. Children&apos;s Privacy</h2>
            <p className="mt-4 text-muted-foreground">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">10. International Data Transfers</h2>
            <p className="mt-4 text-muted-foreground">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">11. Changes to This Privacy Policy</h2>
            <p className="mt-4 text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">12. Contact Us</h2>
            <div className="mt-4 text-muted-foreground">
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <ul className="mt-4 space-y-2">
                <li><strong>Email:</strong> info@supply-chain.guru</li>
                <li><strong>Company:</strong> Supply Chain Guru</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
