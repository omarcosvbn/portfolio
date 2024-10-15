import Theme from "../../components/Theme";
import style from "./Homepage.module.scss";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export default function Homepage() {
  return (
    <>
      <Theme />

      <div className={style.type}>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} 
          transition={{ type: "spring" }}  
        />
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Marcos").start();
          }}
        />
      </div>

      <img
        src="/assets/arrow.svg"
        alt=""
        width="100px"
        className={style.arrow}
      />
      <p>(scroll just a bit more)</p>
      <div>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>
        <h2>projects</h2>

      </div>
    </>
  );
}
