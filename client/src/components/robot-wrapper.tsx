// robot-wrapper.tsx (Server Component)

import dynamic from 'next/dynamic';

// Dynamically import the Robot component for client-side rendering
const RobotClient = dynamic(() => import('./robot-client'), {
  ssr: false, // Ensure it's not server-rendered
});

export default async function RobotWrapper() {
  // Any async logic can go here if you need to fetch data
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Example async operation

  return (
    <div>
      {/* This component is only rendered on the client side */}
      <RobotClient />
    </div>
  );
}
