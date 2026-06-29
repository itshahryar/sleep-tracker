import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className='font-sans bg-slate-50 text-slate-700 min-h-screen selection:bg-indigo-100'>
      {/* Hero Section */}
      <section className='relative flex flex-col items-center justify-center text-center py-20 px-6 overflow-hidden bg-white border-b border-slate-100'>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[350px] bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent blur-3xl pointer-events-none' />
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70' />
        
        <div className='relative max-w-2xl z-10'>
          <h1 className='text-3xl md:text-4xl font-extrabold mb-3 text-slate-900 tracking-tight bg-clip-text bg-gradient-to-b from-slate-900 via-slate-800 to-slate-600'>
            About SleepTracker
          </h1>
          <p className='text-sm md:text-base text-slate-500 font-normal leading-relaxed max-w-xl mx-auto'>
            Your ultimate companion for decoding sleep architecture, cultivating mindfulness, and optimizing long-term vitality.
          </p>
        </div>
      </section>

      {/* Narrative & Mission Sections (Combined Grid) */}
      <section className='py-16 px-6 max-w-5xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>
          <div className='space-y-3 border-l border-indigo-500/30 pl-5'>
            <h2 className='text-xs font-semibold tracking-widest uppercase text-indigo-600'>
              Our Mission
            </h2>
            <p className='text-xs md:text-[13px] text-slate-500 leading-relaxed'>
              At SleepTracker, we aim to help individuals achieve restorative rest and overall well-being by providing clear insights into daily habits. Better sleep drives a healthier, more focused lifestyle, and we are built to support your progression every step of the way.
            </p>
          </div>
          
          <div className='space-y-3 border-l border-slate-200 pl-5'>
            <h2 className='text-xs font-semibold tracking-widest uppercase text-slate-400'>
              Our Story
            </h2>
            <p className='text-xs md:text-[13px] text-slate-500 leading-relaxed'>
              SleepTracker emerged to simplify sleep management without intrusive telemetry. Engineered by a distributed collection of technologists, we offer an interface combining atomic data capture with actionable retrospectives to assist countless users globally.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 px-6 bg-slate-100/60 border-y border-slate-200/60'>
        <div className='max-w-5xl mx-auto'>
          <div className='text-center mb-10'>
            <h2 className='text-xl font-bold text-slate-900 tracking-tight mb-2'>
              Why Choose SleepTracker?
            </h2>
            <p className='text-xs text-slate-500 max-w-md mx-auto'>
              A minimal ecosystem built completely around performance diagnostics and user utility.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {/* Feature 1 */}
            <div className='group relative rounded-xl p-5 bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:border-indigo-500/30 hover:shadow-md'>
              <div className='absolute top-0 right-0 w-24 h-24 bg-indigo-500/[0.02] rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/[0.05] transition-all' />
              <div className='relative space-y-2'>
                <h3 className='text-[13px] font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors'>
                  Comprehensive Tracking
                </h3>
                <p className='text-xs text-slate-500 leading-relaxed'>
                  Monitor sleep metrics easily and contextually record quality markers over time to build reliable datasets.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className='group relative rounded-xl p-5 bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:border-indigo-500/30 hover:shadow-md'>
              <div className='absolute top-0 right-0 w-24 h-24 bg-indigo-500/[0.02] rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/[0.05] transition-all' />
              <div className='relative space-y-2'>
                <h3 className='text-[13px] font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors'>
                  Personalized Insights
                </h3>
                <p className='text-xs text-slate-500 leading-relaxed'>
                  Isolate behavior trends and obtain straightforward evaluations to confidently enhance your dynamic sleep schedule.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className='group relative rounded-xl p-5 bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:border-indigo-500/30 hover:shadow-md'>
              <div className='absolute top-0 right-0 w-24 h-24 bg-indigo-500/[0.02] rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/[0.05] transition-all' />
              <div className='relative space-y-2'>
                <h3 className='text-[13px] font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors'>
                  User-Friendly Design
                </h3>
                <p className='text-xs text-slate-500 leading-relaxed'>
                  Navigate a highly polished, responsive interface fine-tuned for rapid interactions across device formats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className='relative py-20 px-6 text-center overflow-hidden bg-white'>
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[250px] bg-indigo-500/[0.03] blur-3xl pointer-events-none' />
        <div className='relative max-w-md mx-auto space-y-5 z-10'>
          <div className='space-y-2'>
            <h2 className='text-xl font-bold text-slate-900 tracking-tight'>
              Ready to Sleep Better?
            </h2>
            <p className='text-xs text-slate-500 leading-relaxed'>
              Join SleepTracker today and establish ownership of your nights for a sharper tomorrow.
            </p>
          </div>
          <div>
            <Link
              href='/sign-up'
              className='inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98]'
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
