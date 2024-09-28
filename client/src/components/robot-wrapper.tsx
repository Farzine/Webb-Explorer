'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the Robot component for client-side rendering
const RobotClient = dynamic(() => import('./robot-client'), {
  ssr: false,
});

export default function RobotWrapper() {
  // State to manage loading
  const [isLoading, setIsLoading] = useState(true);

  // Simulate an async operation (like fetching data or heavy computation)
  useEffect(() => {
    const loadData = async () => {
      // Simulate delay (e.g., for async data fetching)
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay
      setIsLoading(false); // Stop loading
    };

    loadData();
  }, []);

  return (
    <div>
      {/* Show loading spinner while loading */}
      {isLoading ? (
        <div className="flex justify-center items-end h-48 ml-28 mt-48">
          {/* Tailwind CSS spinner */}
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
        </div>
      ) : (
        <RobotClient />
      )}
    </div>
  );
}
