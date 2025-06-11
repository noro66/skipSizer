import { Calendar, Home, Car, HeartHandshake } from 'lucide-react';
import React from 'react';

// Features rendering function
export const renderFeatures = (skip) => (
  <>
    <div className="flex items-center gap-3">
      <Calendar className="w-4 h-4 text-green-600 dark:text-green-500" />
      <span className="text-sm text-neutral-700 dark:text-neutral-300 font-medium">{skip.hire_period_days} days hire period</span>
    </div>

    <div className="flex items-center gap-3">
      {skip.allowed_on_road ? (
        <>
          <Car className="w-4 h-4 text-green-600 dark:text-green-500" />
          <span className="text-sm text-neutral-700 dark:text-neutral-300 font-medium">Road placement allowed</span>
        </>
      ) : (
        <>
          <Home className="w-4 h-4 text-amber-500" />
          <span className="text-sm text-neutral-700 dark:text-neutral-300 font-medium">Private property only</span>
        </>
      )}
    </div>

    {skip.allows_heavy_waste && (
      <div className="flex items-center gap-3">
        <HeartHandshake className="w-4 h-4 text-blue-600 dark:text-blue-500" />
        <span className="text-sm text-neutral-700 dark:text-neutral-300 font-medium">Heavy waste accepted</span>
      </div>
    )}
  </>
);