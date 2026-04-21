import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

export const Popletter = ({children, width = "fit-content"}: Props) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    useEffect(() => {
    }, [isInView])
    return (
        <div style={{ position: "relative",width, overflow: "hidden"}}>
        <motion.div 
        variants={{
            pop: { opacity: 0, scale: 0.7},
            popped: { opacity: 1, scale: 1}
        }}
        initial="pop"
        animate="popped"
        transition={{ duration: 0.5, delay: 0.25}}
        >
        {children}
        </motion.div>
        </div>
    )
}