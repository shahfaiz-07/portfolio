"use client"

import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

export default function MyNumber({finalCount} : {finalCount:number;}) {
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, finalCount, { duration: 3 })
        return () => controls.stop()
    }, [count, finalCount])

    return <div className="text-4xl md:text-6xl font-bold text-primary flex"><motion.pre className="">{rounded}</motion.pre>+</div>
}
