import React from 'react';
import { ArrowRight, Calendar, CheckCircle2, Truck, Clock } from 'lucide-react';

const SelectionSummary = ({ selectedSkip, calculateTotalPrice }) => {
  if (!selectedSkip) return null;

  const imageUrl = `https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${selectedSkip.size}-yarder-skip.jpg`;
  const totalPrice = calculateTotalPrice(selectedSkip.price_before_vat, selectedSkip.vat);

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-xl p-6 sm:p-8 border-l-4 border-green-600 transform transition-all duration-500 animate-fadeIn mt-12 mb-10">
      <div className="flex flex-col sm:flex-row gap-8">
        <div className="w-full sm:w-1/4 md:w-1/5">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={imageUrl}
              alt={`${selectedSkip.size} yard skip`}
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/default-skip.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-green-800/70 to-green-600/10"></div>
            <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm text-green-700 dark:text-green-500 font-bold px-3 py-1 text-sm rounded-full shadow-md">
              {selectedSkip.size} YARD
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-2xl font-black tracking-tight text-neutral-900 dark:text-white">Your Selection</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700 p-5 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Truck className="w-4 h-4 text-green-600" />
                <p className="text-xs uppercase tracking-wider font-semibold text-neutral-500 dark:text-neutral-400">Skip Size</p>
              </div>
              <p className="font-black text-neutral-900 dark:text-white text-xl tracking-tight">{selectedSkip.size} Yard</p>
            </div>

            <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700 p-5 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-green-600" />
                <p className="text-xs uppercase tracking-wider font-semibold text-neutral-500 dark:text-neutral-400">Hire Period</p>
              </div>
              <p className="font-black text-neutral-900 dark:text-white text-xl tracking-tight">{selectedSkip.hire_period_days} Days</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/20 p-5 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <p className="text-xs uppercase tracking-wider font-semibold text-green-700 dark:text-green-400">Total Price</p>
              </div>
              <div className="flex items-baseline gap-2">
                <p className="font-black text-green-800 dark:text-green-400 text-xl tracking-tight">£{totalPrice}</p>
                <span className="text-xs text-green-600/70 dark:text-green-500/70">
                  (£{selectedSkip.price_before_vat} + VAT)
                </span>
              </div>
            </div>
          </div>

          <button className="group w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3.5 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
            Continue to Booking
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectionSummary;