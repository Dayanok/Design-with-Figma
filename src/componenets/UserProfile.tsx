import React from 'react'

interface UserProfileProps {
    name: string;
}

export function UserProfile({ name }: UserProfileProps) {
  return (
    <>
    <div className="flex lg-mt-[78px] lg:py-3 h-[400px] lg:pl-6 lg:items-start bg-[#F08700]">
        
        <img className="object-cover aspect-auto" src="/images/Ellipse1.png" alt="Ellipse 1" />
        <div className="flex lg:flex-col lg:px-3">
        <div className="text-md">jyse</div>
        <div className="text-md text-gray-500">{name}</div>
    </div>
    </div>
    </>
  )
}
