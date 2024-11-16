"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

export default function Home() {
  const secondRef = useRef(null);
  const isSecondInView = useInView(secondRef, { margin: "0px 0px -5% 0px" });
  const firstRef = useRef(null);
  const isFirstInView = useInView(firstRef, { margin: "0px 0px 5% 0px" });

  const fade = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <>
      {/* First Section */}
      <motion.div
        className={styles.thirds__first}
        initial="visible"
        animate={isSecondInView ? "hidden" : "visible"}
        variants={fade}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h1 className={styles.thirds__first__hi}>Hello, my name is</h1>
          <TypeAnimation
            className={styles.thirds__first__name}
            sequence={["Matcos", 200, "Marcos"]}
            speed={{
              type: "keyStrokeDelayInMs",
              value: 250,
            }}
            preRenderFirstString={true}
          />
        </div>
        <Image src="/images/arrow.svg" alt="" width={200} height={200} className={styles.thirds__first__arrow}/>
      </motion.div>

      {/* Second Section */}
      <motion.div
        ref={secondRef}
        className={styles.thirds__second}
        initial="hidden"
        animate={isSecondInView ? "visible" : "hidden"}
        variants={fade}
        transition={{ duration: 0.5 }}
      >
        <h2>projects</h2>
        <h2>projects</h2>
      </motion.div>
    </>
  );
}
