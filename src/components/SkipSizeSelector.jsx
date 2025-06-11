import React, { useState, useEffect } from 'react';
import { AlertCircle, Recycle } from 'lucide-react';
import SkipCard from './SkipCard';
import SelectionSummary from './SelectionSummary';
import { SKIP_DESCRIPTIONS, CAPACITY_EQUIVALENTS, calculateTotalPrice } from '../utils/constants';
import {renderFeatures} from '../utils/helpers/renderFeatures.jsx';
import { fetchSkipsByLocation } from '../services/api';


const SkipSizeSelector = () => {
const [selectedSkip, setSelectedSkip] = useState(null);
const [skips, setSkips] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [retryCount, setRetryCount] = useState(0);

  const defaultPostcode = import.meta.env.VITE_DEFAULT_POSTCODE || 'LE10 1SH';
  const defaultArea = import.meta.env.VITE_DEFAULT_AREA || 'Lowestoft';

  useEffect(() => {
    const loadSkips = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchSkipsByLocation(defaultPostcode, defaultArea);
        setSkips(data);
      } catch (err) {
        console.error('Error fetching skip data:', err);
        setError(`Failed to load skip options: ${err.message}. Try refreshing the page.`);
      } finally {
        setLoading(false);
      }
    };

    loadSkips();
  }, [retryCount, defaultPostcode, defaultArea]);

const handleRetry = () => {
setRetryCount(prev => prev + 1);
};


  const getSkipDescription = (size) => SKIP_DESCRIPTIONS[size] || "Suitable for various waste disposal needs";
  const getCapacityEquivalent = (size) => CAPACITY_EQUIVALENTS[size] || "";

if (loading) {
return (
  <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center p-4">
    <div className="text-center">
      <div className="animate-spin w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full mx-auto mb-4"></div>
      <p className="text-neutral-600 font-medium">Loading skip options...</p>
    </div>
  </div>
);
}

if (error) {
return (
<div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800 pb-12">    <div className="text-center bg-white p-8 rounded-xl shadow-lg max-w-md">
      <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
      <h2 className="text-xl font-bold text-neutral-900 mb-2">Unable to Load Skip Options</h2>
      <p className="text-neutral-600 mb-6">{error}</p>
      <button
        onClick={handleRetry}
        className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
      >
        Try Again
      </button>
    </div>
  </div>
);
}

return (
  <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800 pb-12">
  {/* Header */}
 <div className="bg-gradient-to-r from-white to-green-50 dark:from-neutral-900 dark:to-green-950/30 backdrop-blur-lg backdrop-saturate-150 border-b border-neutral-200 dark:border-neutral-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
              <Recycle className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-900 dark:text-white">Skip Selector</h1>
          </div>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base font-light">
            Garden waste collection for LE10 1SH • <span className="font-medium text-green-600 dark:text-green-400">Select your size</span>
          </p>
        </div>

        <div className="inline-flex mt-3 sm:mt-0">
          <span className="inline-flex rounded-md overflow-hidden">
            <button className="relative inline-flex items-center gap-1 bg-white dark:bg-neutral-800 py-2 px-4 border border-neutral-200 dark:border-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Skip sizes available
            </button>
            <button className="relative -ml-px inline-flex items-center bg-white dark:bg-neutral-800 py-2 px-4 border border-neutral-200 dark:border-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700">
              Help
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {skips.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            isSelected={selectedSkip?.id === skip.id}
            onSelect={setSelectedSkip}
            renderFeatures={renderFeatures}
            calculateTotalPrice={calculateTotalPrice}
            getCapacityEquivalent={getCapacityEquivalent}
            getSkipDescription={getSkipDescription}
          />
        ))}
      </div>

      <SelectionSummary
        selectedSkip={selectedSkip}
        calculateTotalPrice={calculateTotalPrice}
      />

    {/* Info Panel */}
    <div className="mt-8 bg-blue-50 dark:bg-blue-950/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-900/30">
      <h3 className="text-lg font-bold text-blue-900 dark:text-blue-400 mb-3">Need Help Choosing?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800 dark:text-blue-300">
        <div>
          <h4 className="font-medium mb-2">Small Projects (4-8 yards)</h4>
          <p className="text-neutral-600 dark:text-neutral-400">Garden clearance, bathroom renovation, small DIY projects</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Large Projects (10-20 yards)</h4>
          <p className="text-neutral-600 dark:text-neutral-400">House clearance, major renovations, construction work</p>
        </div>
      </div>
    </div>
  </div>
</div>
);
};

export default SkipSizeSelector;