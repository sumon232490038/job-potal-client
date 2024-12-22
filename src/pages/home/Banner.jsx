import { motion } from "motion/react";
import teamImg from "../../assets/lottie/team.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={teamImg}
            animate={{ y: [50, 150, 50] }}
            transition={{ duration: 8, repeat: Infinity }}
            className=" w-80 rounded-t-[40px] rounded-br-[40px] bord border-l-8 border-b-8 border-sky-500"
          />
          <motion.img
            src={teamImg}
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 8, repeat: Infinity }}
            className=" w-80 rounded-t-[40px] rounded-br-[40px] bord border-l-8 border-b-8 border-sky-500"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: 100 }}
            transition={{ repeat: Infinity, duration: 2, delay: 1 }}
            className="text-5xl font-bold"
          >
            Job{" "}
            <motion.span
              animate={{ color: ["yello", "blue", "green"] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
            >
              portal
            </motion.span>{" "}
            bangladesh
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
