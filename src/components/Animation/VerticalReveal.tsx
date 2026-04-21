import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
    height?: "fit-content"
}

export const Reveal = ({children, width = "100%"}: Props) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
      if(isInView) {
        mainControls.start("visible")
        slideControls.start("visible")
      }
    }, [isInView])
    return (
        <div style={{ position: "relative",width, overflow: "hidden"}}>
        <motion.div 
        variants={{
            hidden: { opacity: 0, x: 100},
            visible: { opacity: 1, x: 0},
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.15}}
        >
        {children}
        </motion.div>
        <motion.div 
        variants={{
            hidden: { left: 0 },
            visible: { left: '120%', width: "0px"}
        }}
        initial= 'hidden'
        animate= 'visible'
        transition={{ duration: 0.9, ease: "easeIn"}}
        style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: '#51237E',
            zIndex: 20,
            height: "100%"
        }}
        ></motion.div>
        </div>
    )
}