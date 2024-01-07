//src/app/page.tsx
'use client'
import React from 'react';
import { motion } from 'framer-motion';
import HomeHeading from '@/components/ui/Heading';

export default function Home() {
  // Animation settings for Framer Motion
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col justify-center items-center text-xl font-sans p-5">
      <HomeHeading title = "Welcome to Meal Planner" />
      <p className="text-lg mb-10 max-w-md text-center">
        Your ultimate solution for organizing weekly meals for your family.
        Explore new recipes, plan your meals, and enjoy stress-free cooking.
      </p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 min-h-screen">
        <motion.div
          className="border border-gray-200 p-6 mb-4 rounded-lg shadow-lg"
          transition={{ duration: 0.5 }}
        >
            <h2 className="font-semibold text-lg mb-2">This Week&apos;s Plan</h2>
          <p>Get a quick overview of your weekly meal plan.</p>
          {/* Add more content or links here */}
        </motion.div>
        <motion.div
          className="border border-gray-200 p-6 mb-4 rounded-lg shadow-lg"
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-semibold text-lg mb-2">Explore Recipes</h2>
          <p>Discover new and exciting recipes for your family.</p>
          {/* Add more content or links here */}
        </motion.div>
        {/* Add more grid items as needed for other features */}
      </div>
    </div>
  );
}
