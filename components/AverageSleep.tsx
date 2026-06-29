import React from 'react';
import getUserRecord from '@/app/actions/getUserRecord';

const AverageSleep = async () => {
  try {
    const { record, daysWithRecords } = await getUserRecord();

    const validRecord = record || 0;
    const validDays = daysWithRecords && daysWithRecords > 0 ? daysWithRecords : 1;

    const averageSleep = validRecord / validDays;

    const hours = Math.floor(averageSleep);
    const minutes = Math.round((averageSleep - hours) * 60);

    return (
      <div className="card-base p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xs font-medium text-slate-600">
            Average Sleep (Last Month)
          </h3>
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-2xl font-bold text-slate-800">
            {hours}
          </span>
          <span className="text-sm text-slate-600">h</span>
          <span className="text-2xl font-bold text-slate-800">
            {minutes}
          </span>
          <span className="text-sm text-slate-600">m</span>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching user record:', error);
    return (
      <div className="card-base p-4">
        <div className="flex items-center gap-2 text-red-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <p className="text-sm">Unable to calculate average sleep.</p>
        </div>
      </div>
    );
  }
};

export default AverageSleep;
