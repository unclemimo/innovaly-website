import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Impressum | Innovaly Services',
  description: 'Legal information and company details for Innovaly Services OÜ.',
};

export default function ImpressumPage() {
  return (
    <div className="antialiased font-[Inter] bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-indigo-500/20 selection:text-indigo-500">
      <Header />
      
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">
            Impressum
          </h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Company Information</h2>
              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
                  <div>
                    <span className="font-medium">Company Name:</span>
                    <span className="ml-2 select-none" style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}>
                      Innovaly Services OÜ
                    </span>
                  </div>
                  <div>
                    <span className="font-medium">Registration Number:</span>
                    <span className="ml-2 select-none" style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}>
                      14935651
                    </span>
                  </div>
                  <div>
                    <span className="font-medium">Legal Form:</span>
                    <span className="ml-2">Private Limited Company (OÜ)</span>
                  </div>
                  <div>
                    <span className="font-medium">Registered in:</span>
                    <span className="ml-2">Estonia</span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Registered Address</h2>
              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <div className="text-zinc-700 dark:text-zinc-300">
                  <div className="select-none" style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}>
                    Harju maakond<br />
                    Tallinn<br />
                    Kesklinna linnaosa<br />
                    Tornimäe tn 3<br />
                    Estonia
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Contact Information</h2>
              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
                  <div>
                    <span className="font-medium">Email:</span>
                    <span className="ml-2">
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
                    </span>
                  </div>
                  <div>
                    <span className="font-medium">Website:</span>
                    <span className="ml-2">
                      <a 
                        href="https://innovaly.com" 
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        innovaly.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Business Activities</h2>
              <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                <p>
                  We provide business architecture services including:
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-3">
                  <li>Web development and growth-engine websites</li>
                  <li>Authority building and brand development</li>
                  <li>Innovation and platform development</li>
                  <li>AI and process automation solutions</li>
                  <li>Business consulting and strategic planning</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Regulatory Information</h2>
              <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                <p>
                  Innovaly Services OÜ is registered with the Estonian Commercial Register and operates under Estonian law. 
                  We are subject to Estonian tax regulations and business compliance requirements.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Responsible for Content</h2>
              <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                <p>
                  The content of this website is managed by Innovaly Services OÜ. 
                  We are responsible for ensuring the accuracy and timeliness of the information provided.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Disclaimer</h2>
              <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                <p>
                  While we strive to provide accurate and up-to-date information, we make no warranties about the completeness, 
                  reliability, or accuracy of the information on this website. Any reliance you place on such information is strictly at your own risk.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Last Updated</h2>
              <div className="text-zinc-700 dark:text-zinc-300">
                <p>This Impressum was last updated on October 6, 2024.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
