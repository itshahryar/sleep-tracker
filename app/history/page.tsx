import RecordHistory from '@/components/RecordHistory';
import { currentUser } from '@clerk/nextjs/server';

export default async function HistoryPage() {
  const user = await currentUser();
  if (!user) {
    return (
      <div className='bg-slate-50 text-slate-800 font-sans min-h-screen flex items-center justify-center'>
        <p className='text-slate-600'>Please sign in to view your sleep history.</p>
      </div>
    );
  }

  return (
    <main className='bg-slate-50 text-slate-800 font-sans min-h-screen'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
        <RecordHistory />
      </div>
    </main>
  );
}
