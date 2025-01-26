import React from 'react'

export default function BorderGradient({children}) {
  return (
    <div className="relative mx-auto rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
      <div className="bg-gray-50 p-7 rounded-md">{children}</div>
    </div>
  );
}
