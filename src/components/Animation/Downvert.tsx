import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
    height?: "fit-content"
}

export const Downvert = ({children, width = "fit-content"}: Props) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
      if(isInView) {
        console.log("i can see it")
        mainControls.start("visible")
        slideControls.start("visible")
      }else {
        console.log("cant find it")
      }
    }, [isInView])
    return (
        <div style={{ position: "relative",width, overflow: "hidden"}}>
        <motion.div 
        variants={{
            hidden: { opacity: 0, y: -100},
            visible: { opacity: 1, y: 0},
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.25}}
        >
        {children}
        </motion.div>
        <motion.div 
        variants={{
            hidden: { top: 0 },
            visible: { top: '120%'}
        }}
        initial= 'hidden'
        animate= "visible"
        transition={{ duration: 0.4, delay:0.2, ease: "easeIn"}}
        style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: 'transparent',
            zIndex: 20,
            height: "100%"
        }}
        ></motion.div>
        </div>
    )
}