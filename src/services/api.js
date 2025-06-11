const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://app.wewantwaste.co.uk/api';
const STORAGE_URL = import.meta.env.VITE_STORAGE_URL || 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips';

export const getSkipImageUrl = (size) => {
  return `${STORAGE_URL}/skip-sizes/${size}-yarder-skip.jpg`;
};

export const getDefaultSkipImage = () => {
  return `${STORAGE_URL}/skip-sizes/default-skip.jpg`;
};

export const fetchSkipsByLocation = async (postcode, area) => {
  const response = await fetch(`${API_BASE_URL}/skips/by-location?postcode=${postcode}&area=${area}`);

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  const data = await response.json();

  if (!data || !Array.isArray(data) || data.length === 0) {
    throw new Error('No skip data available for this location');
  }

  return data;
};