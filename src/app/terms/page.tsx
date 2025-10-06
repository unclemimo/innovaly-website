import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service | Innovaly Services',
  description: 'Terms of Service for Innovaly Services OÜ - Business Architects who build web, growth, platforms, and automation.',
};

export default function TermsPage() {
  return (
    <div className="antialiased font-[Inter] bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-indigo-500/20 selection:text-indigo-500">
      <Header />
      
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">
            Terms of Service
          </h1>
          
          <div className="text-sm text-zinc-600 dark:text-zinc-400 mb-8">
            <p><strong>Effective Date:</strong> October 6, 2024</p>
            <p><strong>Last Updated:</strong> October 6, 2024</p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">1. Introduction</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Welcome to Innovaly Services OÜ. By accessing or using our website and services, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">2. Services</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                We provide business architecture services including web development, growth strategies, platform development, and automation solutions. Our services are tailored to help businesses scale and optimize their operations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">3. User Responsibilities</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                Users agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
                <li>Use our services lawfully and in accordance with applicable laws</li>
                <li>Not engage in activities that harm the company or other users</li>
                <li>Provide accurate and complete information when required</li>
                <li>Respect intellectual property rights</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">4. Intellectual Property</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                All content, trademarks, and intellectual property on our website and in our services are owned by Innovaly Services OÜ or our licensors. You may not use, reproduce, or distribute our content without written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">5. Limitation of Liability</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Innovaly Services OÜ is not liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">6. Termination</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                We may terminate or suspend your access to our services at any time, with or without notice, for any reason, including breach of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">7. Governing Law</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                These terms are governed by the laws of Estonia. Any disputes shall be resolved in the courts of Estonia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">8. Changes to Terms</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">9. Contact Information</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at{' '}
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
