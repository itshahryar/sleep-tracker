import { SignInButton } from '@clerk/nextjs';

const Guest = () => {
  return (
    <div className='font-sans bg-slate-50 text-slate-800'>
      {/* Hero Section */}
      <div className='flex flex-col md:flex-row items-center justify-between p-3 md:p-12 relative overflow-hidden bg-gradient-to-r from-slate-800 to-indigo-900 border border-indigo-950 pt-16'>
        <div className='absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4' />
        <div className='flex-1 mb-8 xl:pl-10 relative'>
          <h1 className='text-2xl md:text-4xl font-bold mb-4 text-white'>
            Welcome to SleepTracker
          </h1>
          <p className='md:text-xl mb-6 text-indigo-200'>
            Track your sleep, improve your health, and wake up feeling refreshed
            with SleepTracker.
          </p>
          <SignInButton>
            <button className='w-full md:w-auto bg-white text-indigo-600 hover:text-indigo-700 px-4 py-2 rounded-lg font-medium cursor-pointer shadow-sm transition'>
              Get Started
            </button>
          </SignInButton>
        </div>
        <div className='flex-1 flex justify-center items-center'>
          <img
            src='sleep-tracker.png'
            alt='SleepTracker Illustration'
            className='w-full md:max-w-md rounded-tl-3xl rounded-br-3xl shadow-lg'
          />
        </div>
      </div>

      {/* Divider */}
      <div className='h-px bg-slate-200'></div>

      {/* Frequently Asked Questions Section */}
      <div className='py-12 px-8 bg-white'>
        <h2 className='text-2xl md:text-3xl font-bold text-center mb-8 text-slate-800'>
          Frequently Asked Questions
        </h2>
        <div className='max-w-3xl mx-auto space-y-8'>
          <div>
            <h3 className='text-xl font-bold text-slate-800'>What is SleepTracker?</h3>
            <p className='text-slate-600'>
              SleepTracker is a powerful tool designed to help you monitor your
              sleep patterns and improve your overall health.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-bold text-slate-800'>How does it work?</h3>
            <p className='text-slate-600'>
              SleepTracker analyzes your sleep data and provides personalized
              insights to help you achieve better sleep.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-bold text-slate-800'>Is SleepTracker free?</h3>
            <p className='text-slate-600'>
              Yes, SleepTracker offers a free plan with basic features. Premium
              plans are available for advanced insights and analytics.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className='h-px bg-slate-200'></div>

      {/* Testimonials Section */}
      <div className='py-12 px-8 bg-slate-50'>
        <h2 className='text-2xl md:text-3xl font-bold text-center mb-8 text-slate-800'>
          What Our Users Say
        </h2>
        <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='relative overflow-hidden bg-gradient-to-r from-slate-800 to-indigo-900 border border-indigo-950 rounded-xl shadow-md p-5'>
            <div className='absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4' />
            <div className='relative'>
              <p className='text-indigo-100 mb-4 text-sm'>
                &quot;SleepTracker has completely transformed my sleep schedule. I
                feel more energized every day!&quot;
              </p>
              <p className='text-indigo-300 font-bold text-sm'>- Sarah L.</p>
            </div>
          </div>
          <div className='relative overflow-hidden bg-gradient-to-r from-slate-800 to-indigo-900 border border-indigo-950 rounded-xl shadow-md p-5'>
            <div className='absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4' />
            <div className='relative'>
              <p className='text-indigo-100 mb-4 text-sm'>
                &quot;The insights from SleepTracker have helped me identify and
                fix my sleep issues. Highly recommend it!&quot;
              </p>
              <p className='text-indigo-300 font-bold text-sm'>- John D.</p>
            </div>
          </div>
          <div className='relative overflow-hidden bg-gradient-to-r from-slate-800 to-indigo-900 border border-indigo-950 rounded-xl shadow-md p-5'>
            <div className='absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4' />
            <div className='relative'>
              <p className='text-indigo-100 mb-4 text-sm'>
                &quot;SleepTracker is so easy to use and provides accurate data.
                It&#39;s a must-have for anyone looking to improve their
                sleep!&quot;
              </p>
              <p className='text-indigo-300 font-bold text-sm'>- Emily R.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guest;
