import React, { ReactElement } from 'react'

const TechnologyIcon = ({icon, name}: {icon: ReactElement, name: string}) => {
  return (
    <div className='group flex flex-col gap-2 items-center justify-center'>
        {icon}
        <p className='duration-500 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'>{name}</p>
    </div>
  )
}

export default TechnologyIcon