import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Innovaly Services',
  description: 'Privacy Policy for Innovaly Services OÜ - How we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="antialiased font-[Inter] bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-indigo-500/20 selection:text-indigo-500">
      <Header />
      
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">
            Privacy Policy
          </h1>
          
          <div className="text-sm text-zinc-600 dark:text-zinc-400 mb-8">
            <p><strong>Effective Date:</strong> October 6, 2024</p>
            <p><strong>Last Updated:</strong> October 6, 2024</p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">1. Introduction</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Innovaly Services OÜ is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">2. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-2">Personal Information</h3>
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    We may collect personal information such as:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-zinc-700 dark:text-zinc-300 mt-2">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Company information and job title</li>
                    <li>Communication preferences</li>
                    <li>Information provided through contact forms or consultations</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-2">Technical Information</h3>
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    We automatically collect certain technical information including:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-zinc-700 dark:text-zinc-300 mt-2">
                    <li>IP address and browser information</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Referring website information</li>
                    <li>Device and operating system information</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">3. How We Use Your Information</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
                <li>Provide and improve our services</li>
                <li>Communicate with you about our services</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Send you relevant updates and marketing communications (with your consent)</li>
                <li>Comply with legal obligations</li>
                <li>Analyze website usage to improve user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">4. Information Sharing</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300 mt-4">
                <li>With trusted service providers who assist us in operating our business</li>
                <li>When required by law or to protect our rights</li>
                <li>With your explicit consent</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">5. Data Security</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">6. Your Rights</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                Under applicable data protection laws, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Delete your personal information</li>
                <li>Restrict or object to processing of your information</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">7. Cookies and Tracking</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">8. Data Retention</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">9. International Transfers</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">10. Changes to This Policy</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">11. Contact Us</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at{' '}
                <a 
                  href="mailto:legal@innovaly.services" 
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                  style={{ 
                    unicodeBidi: 'bidi-override',
                    direction: 'rtl'
                  }}
                >
                  moc.ssecivniylavonni@lagel
                </a>
                {' '}or through our website.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
