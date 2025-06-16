import React from 'react'

export default function SearchTabs() {
  return (
    <div className="flex sm:flex-row gap-4 space-x-4 bg-white rounded-t-xl shadow-md w-fit mb-1 text-sm">
      {['Comprar', 'Vender'].map((label, idx) => (
        <button
          key={label}
          className={`px-6 py-2 font-medium ${
            idx === 0
              ? 'text-purple-600 border-b-2 border-purple-600'
              : 'text-gray-600'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
