import { Avatar, Card, CardBody, CardHeader, Divider } from '@heroui/react'
import React from 'react'

const Github = () => {
    return (
        <div>
            <div className='flex flex-row flex-wrap items-center gap-2 justify-center'>
                <img
                    alt="heroui logo"
                    src="https://github-readme-stats.vercel.app/api?username=shahfaiz-07&show_icons=true&hide=contribs&theme=transparent"
                />
                <img
                    alt="heroui logo"
                    src="https://github-readme-stats.vercel.app/api/top-langs?username=shahfaiz-07&layout=compact&theme=transparent"
                />
            </div>
        </div>
    )
}

export default Github