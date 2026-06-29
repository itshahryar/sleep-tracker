import getRecords from '@/app/actions/getRecords';
import RecordItem from './RecordItem';
import { Record } from '@/types/Record';

const RecordHistory = async () => {
  const { records, error } = await getRecords();

  if (error) {
    return (
      <div className="card-base p-5">
        <div className="flex items-center gap-2 text-red-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    );
  }

  if (!records || records.length === 0) {
    return (
      <div className="card-base p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <h3 className="text-base font-semibold text-slate-800 mb-1">
          No Sleep Records Found
        </h3>
        <p className="text-sm text-slate-500">
          Start tracking your sleep to see your history here.
        </p>
      </div>
    );
  }

  return (
    <div className="card-base p-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
          <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            Sleep History
          </h3>
          <p className="text-xs text-slate-500">
            Track & Manage your sleep records
          </p>
        </div>
      </div>
      <ul className="space-y-0">
        {records.map((record: Record) => (
          <RecordItem key={record.id} record={record} />
        ))}
      </ul>
    </div>
  );
};

export default RecordHistory;
