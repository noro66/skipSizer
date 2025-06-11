import React from 'react';
import { Truck, Check, ArrowRight, Shield } from 'lucide-react';

const SkipCard = ({
  skip,
  isSelected,
  onSelect,
  renderFeatures,
  calculateTotalPrice,
  getCapacityEquivalent,
  getSkipDescription
}) => {
  const totalPrice = calculateTotalPrice(skip.price_before_vat, skip.vat);
  const imageUrl = `https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`;

  return (
   <div
      onClick={() => onSelect(skip)}
      className={`relative w-full sm:w-80 md:w-96 lg:w-[24rem] cursor-pointer group perspective-1000 transform transition-all duration-500 ease-out
        ${isSelected
          ? 'ring-4 ring-primary-500 ring-offset-6 shadow-2xl scale-[1.05]'
          : 'hover:scale-[1.07] hover:-translate-y-2 hover:shadow-2xl hover:rotate-1'
        }
      `}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onSelect(skip)}
      aria-selected={isSelected}
    >
      {isSelected && (
        <div className="absolute -top-5 -right-5 z-10 bg-primary-500 text-white rounded-full p-2 sm:p-3 shadow-xl animate-pulse">
          <Check className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
        </div>
      )}

      <div className="bg-gradient-to-br from-white to-neutral-100 dark:from-neutral-800/80 dark:to-neutral-700/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg h-full flex flex-col border-2 border-transparent group-hover:border-primary-300/50">
        {/* Skip Image with Gradient Overlay */}
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <div
            className={`absolute inset-0 ${
              isSelected
                ? 'bg-gradient-to-tr from-purple-600/60 via-pink-500/40 to-transparent'
                : 'bg-gradient-to-tr from-black/60 via-neutral-800/30 to-transparent group-hover:from-primary-600/50 group-hover:via-primary-400/30'
            } z-10 transition-all duration-700`}
          ></div>
          <img
            src={imageUrl}
            alt={`${skip.size} yard skip`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter group-hover:brightness-125"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/default-skip.jpg";
            }}
          />
          <div className="absolute inset-x-0 bottom-0 flex justify-between items-end p-3 sm:p-4 z-20">
            <span className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm text-primary-600 dark:text-primary-400 text-xs sm:text-sm tracking-wider font-bold px-3 py-1.5 sm:px-5 sm:py-2 rounded-full shadow-lg">
              {skip.size} YARD
            </span>
            {skip.allows_heavy_waste && (
              <span className="bg-secondary-500/90 backdrop-blur-sm text-white text-xs sm:text-sm font-medium tracking-wide px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg flex items-center gap-1.5 sm:gap-2">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                Heavy Waste
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 lg:p-8 flex-1 flex flex-col">
          <div className="mb-2 sm:mb-4">
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-400 dark:from-primary-400 dark:to-secondary-300 group-hover:from-purple-600 group-hover:to-pink-500 transition-all duration-500">
              {skip.size} Yard Skip
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm font-medium mt-1 sm:mt-2">
              {getCapacityEquivalent(skip.size)}
            </p>
          </div>

          <p className="text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm my-3 sm:my-4 leading-relaxed font-light">
            {getSkipDescription(skip.size)}
          </p>

          {/* Features */}
          <div className="space-y-3 sm:space-y-4 my-4 sm:my-5 flex-1">
            {renderFeatures(skip)}
          </div>

          {/* Pricing */}
          <div className={`mt-auto pt-6 border-t ${
            isSelected ? 'border-primary-200 dark:border-primary-800' : 'border-neutral-200 dark:border-neutral-700'
          }`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium uppercase tracking-wider">
                  Total inc. VAT
                </p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white group-hover:text-secondary-500 transition-colors">
                    £{totalPrice}
                  </p>
                  <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-light">
                    (£{skip.price_before_vat} + VAT)
                  </span>
                </div>
              </div>
              <button
                className={`${isSelected
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-400 text-white'
                  : 'bg-purple-100 dark:bg-purple-700 text-purple-500 dark:text-purple-300 group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-secondary-400 group-hover:text-white'
                } rounded-full p-3 sm:p-4 transition-all duration-500 shadow-xl hover:shadow-2xl`}
                aria-label="Select skip"
              >
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkipCard;