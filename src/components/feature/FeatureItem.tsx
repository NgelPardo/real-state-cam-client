import React from 'react'

type Props = {
  icon: string;
  title: string;
  text: string;
};

export default function FeatureItem({ icon, title, text }: Props) {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-purple-100 text-purple-600 text-2xl p-3 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-md font-semibold text-blue-950">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{text}</p>
      </div>
    </div>        
  )
}
