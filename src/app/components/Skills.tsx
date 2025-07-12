import React, { ReactNode } from 'react'
import { iconMap } from './DisplayProject'
import { Tooltip } from '@heroui/react'
const Skills = () => {
  return (
    <div className='flex flex-wrap gap-5'>
      {
        Object.entries(iconMap).sort().map(([skill, icon]) => <Tooltip key={skill} content={skill.toUpperCase().replace("_", "-")}><div className='aspect-square w-15 h-15 grid place-content-center bg-gray-900 rounded text-3xl'>
          {icon}
        </div></Tooltip>)
      }
    </div>
  )
}

export default Skills