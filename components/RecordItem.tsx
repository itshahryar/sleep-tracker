'use client';

import { useState } from 'react';
import { Record } from '@/types/Record';
import deleteRecord from '@/app/actions/deleteRecord';

const RecordItem = ({ record }: { record: Record }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteRecord = async (recordId: string) => {
    setIsLoading(true);
    await deleteRecord(recordId);
    setIsLoading(false);
  };

  const isGood = record?.amount >= 7;

  const getQualityIcon = (text: string) => {
    switch (text) {
      case 'Refreshed':
        return <svg className='w-4 h-4 text-amber-500' fill='currentColor' viewBox='0 0 20 20'>
          <path fillRule='evenodd' d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z' clipRule='evenodd' />
        </svg>;
      case 'Tired':
        return <svg className='w-4 h-4 text-slate-400' fill='currentColor' viewBox='0 0 20 20'>
          <path d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z' />
        </svg>;
      case 'Neutral':
        return <svg className='w-4 h-4 text-blue-400' fill='currentColor' viewBox='0 0 20 20'>
          <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 1.415 3 3 0 004.242 0 1 1 0 10-1.415-1.415 1 1 0 01-1.414 0 1 1 0 00-1.415-1.414 1 1 0 00-1.414 1.414z' clipRule='evenodd' />
        </svg>;
      case 'Exhausted':
        return <svg className='w-4 h-4 text-red-500' fill='currentColor' viewBox='0 0 20 20'>
          <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z' clipRule='evenodd' />
        </svg>;
      case 'Energetic':
        return <svg className='w-4 h-4 text-amber-500' fill='currentColor' viewBox='0 0 20 20'>
          <path fillRule='evenodd' d='M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z' clipRule='evenodd' />
        </svg>;
      default:
        return null;
    }
  };

  return (
    <li className="card-base p-4 mb-3 transition-all hover:shadow-md">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className={`w-2 h-2 rounded-full flex-shrink-0 ${isGood ? 'bg-emerald-500' : 'bg-red-500'}`} />
          
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <span className="text-sm font-medium text-slate-800">
              {record?.amount}h
            </span>
            <span className="text-xs text-slate-500">
              {new Date(record?.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            {getQualityIcon(record?.text || '')}
            <span className="text-xs text-slate-600">
              {record?.text}
            </span>
          </div>

          <button
            onClick={() => handleDeleteRecord(record.id)}
            disabled={isLoading}
            aria-label="Delete record"
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </li>
  );
};

export default RecordItem;
