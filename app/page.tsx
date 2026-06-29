import AddNewRecord from '@/components/AddNewRecord';
import AverageSleep from '@/components/AverageSleep';
import BestWorstSleep from '@/components/BestWorstSleep';
import Guest from '@/components/Guest';
import RecordChart from '@/components/RecordChart';
import { currentUser } from '@clerk/nextjs/server';

export default async function HomePage() {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }
  return (
    <main className="page-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Welcome Card */}
        <div className="card-base p-5">
          <div className="flex items-center gap-4">
            <div className="relative shrink-0">
              <img
                src={user.imageUrl}
                alt={`${user.firstName}'s profile`}
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-xs text-slate-500 mb-0.5">
                Member since {new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
              </p>
              <h2 className="text-lg font-semibold text-slate-800">
                Welcome back, {user.firstName}
              </h2>
            </div>

            <div className="hidden sm:flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-2 border border-slate-200">
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs text-slate-600">
                {user.lastActiveAt
                  ? new Date(user.lastActiveAt).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })
                  : 'N/A'}
              </span>
            </div>
          </div>
        </div>

        {/* Grid for other components */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-5">
            <AddNewRecord />
            <RecordChart />
          </div>

          <div className="space-y-5">
            <AverageSleep />
            <BestWorstSleep />
          </div>
        </div>
      </div>
    </main>
  );
}

