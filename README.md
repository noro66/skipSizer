# ReWaste Skip Selector

## Project Overview
This React + Vite redesign of WeWantWaste's "Choose Your Skip Size" page offers a modern, responsive UI for selecting the ideal skip size for waste collection.

## Features
- Responsive layout for mobile, tablet, and desktop
- Real API integration with error handling and fallback sample data
- Interactive skip selection with visual feedback
- Detailed skip cards showing:
  - Size (yards and bin bag equivalents)
  - Hire period
  - Placement restrictions (road vs. private property)
  - Heavy waste acceptance
  - VAT-inclusive pricing
- Selection summary with key details
- Loading states during data fetch
- Graceful error handling with sample data fallback

## Tech Stack
- React
- Vite
- Tailwind CSS
- Lucide React (SVG icons)
- Functional components with hooks
- Accessibility best practices

## Development Approach
1. Component-based architecture for maintainability
2. API integration with loading and error states
3. Responsive design via Tailwind utilities
4. Subtle animations and transitions
5. Sample-data fallback for offline or API failures

## Getting Started

```bash
git clone http://github.com/noro66/skipSizer.git
npm install
npm run dev