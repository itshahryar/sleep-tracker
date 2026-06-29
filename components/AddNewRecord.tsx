'use client';
import { useRef, useState } from 'react';
import addSleepRecord from '@/app/actions/addSleepRecord';

const AddRecord = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [amount, setAmount] = useState(6);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<'success' | 'error' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sleepQuality, setSleepQuality] = useState('');

  const clientAction = async (formData: FormData) => {
    setIsLoading(true);
    setAlertMessage(null);

    formData.set('amount', amount.toString());
    formData.set('text', sleepQuality);

    const { error } = await addSleepRecord(formData);

    if (error) {
      setAlertMessage(`Error: ${error}`);
      setAlertType('error');
    } else {
      setAlertMessage('Sleep record added successfully!');
      setAlertType('success');
      formRef.current?.reset();
      setAmount(6);
      setSleepQuality('');
    }

    setIsLoading(false);
  };

  return (
    <div className="card-base p-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
          <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-800">
          Track Your Sleep
        </h3>
      </div>

      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(formRef.current!);
          clientAction(formData);
        }}
        className="space-y-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="text" className="block text-sm font-medium text-slate-700 mb-1.5">
              Sleep Quality
            </label>
            <select
              id="text"
              name="text"
              value={sleepQuality}
              onChange={(e) => setSleepQuality(e.target.value)}
              className="block w-full border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow bg-white"
              required
            >
              <option value="" disabled>
                Select quality...
              </option>
              <option value="Refreshed">🌞 Refreshed</option>
              <option value="Tired">😴 Tired</option>
              <option value="Neutral">😐 Neutral</option>
              <option value="Exhausted">😫 Exhausted</option>
              <option value="Energetic">⚡ Energetic</option>
            </select>
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-1.5">
              Sleep Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="block w-full border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow bg-white"
              required
              onFocus={(e) => e.target.showPicker()}
            />
          </div>
        </div>

        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-slate-700 mb-1.5">
            Hours Slept
            <span className="text-xs text-slate-500 font-normal ml-1">(0-12 hours)</span>
          </label>
          <div className="relative">
            <input
              type="range"
              name="amount"
              id="amount"
              min="0"
              max="12"
              step="0.5"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              className="w-full"
              style={{ '--range-progress': `${(amount / 12) * 100}%` } as React.CSSProperties}
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>0h</span>
              <span className="font-medium text-blue-600">{amount}h</span>
              <span>12h</span>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2.5 rounded-lg font-medium transition-colors shadow-sm hover:shadow flex items-center justify-center text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? (
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
            </svg>
          ) : (
            'Add Sleep Record'
          )}
        </button>
      </form>

      {alertMessage && (
        <div
          className={`mt-4 p-3 rounded-lg text-sm flex items-center gap-2 ${
            alertType === 'success'
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}
        >
          {alertType === 'success' ? (
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          )}
          {alertMessage}
        </div>
      )}
    </div>
  );
};

export default AddRecord;

