"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Sparkles,
  Brain,
  Cpu,
  Layers,
  Code2
} from "lucide-react";


import Image from "next/image";



export default function Hero() {


  return (

    <section
      id="home"
      className="
min-h-screen
flex
items-center
pt-28
"
    >


      <div
        className="
container
grid
lg:grid-cols-2
gap-12
items-center
"
      >



        {/* LEFT */}

        <motion.div

          initial={{
            opacity: 0,
            x: -50
          }}

          animate={{
            opacity: 1,
            x: 0
          }}

          transition={{
            duration: .8
          }}

        >



          <div
            className="
inline-flex
items-center
gap-2
glass
px-5
py-2
rounded-full
text-cyan-300
text-sm
mb-8
"
          >

            <Sparkles size={16} />

            <span>🚀 Building Production-Ready AI Products</span>

          </div>





          <h1
            className="
text-5xl
md:text-7xl
font-extrabold
leading-tight
"
          >

            Anupriya

            <span
              className="
gradient-text
"
            >

              {" "}Ranjan

            </span>


          </h1>




          <h2
            className="
mt-6
text-3xl
md:text-4xl
font-bold
"
          >

            Generative AI Engineer

            <br />

            <span
              className="
text-gray-400
"
            >

              Full-Stack AI Developer

            </span>


          </h2>





          <p
            className="
mt-6
max-w-xl
text-gray-400
text-lg
leading-relaxed
"
          >

            I build production-ready AI applications powered by Large Language Models, Retrieval-Augmented Generation (RAG), Machine Learning, Computer Vision, and modern Full-Stack technologies. My focus is on transforming complex ideas into intelligent products that solve real-world problems.

          </p>






          <div
            className="
flex
gap-5
mt-10
flex-wrap
"
          >



            <a

              href="#projects"

              className="
btn
btn-primary
flex
items-center
gap-2
"

            >

              Explore My Work

              <ArrowRight size={18} />

            </a>

            <a
              href="/resume.pdf"
              download
              className="
  px-8
  py-4
  rounded-xl
  border
  border-cyan-400/40
  hover:bg-cyan-400
  hover:text-black
  transition-all
  duration-300
  "
            >
              Download CV 
            </a>

            <a

              href="#contact"

              className="
btn
btn-secondary
flex
items-center
gap-2
"

            >

              Let's Connect

              <ArrowRight size={18} />

            </a>



          </div>






          {/* Quick Stats */}


          <div

            className="
grid
grid-cols-3
gap-4
mt-12
max-w-lg
"

          >


            <Stat
              number="10+"
              text="Projects"
            />


            <Stat
              number="AI"
              text="Focused"
            />


            <Stat
              number="∞"
              text="Learning"
            />


          </div>




        </motion.div>







        {/* RIGHT SIDE */}



        <motion.div


          initial={{
            opacity: 0,
            scale: .8
          }}


          animate={{
            opacity: 1,
            scale: 1
          }}


          transition={{
            duration: 1
          }}


          className="
relative
"



        >



          <div

            className="
absolute
inset-0
bg-cyan-400/20
blur-[120px]
rounded-full
"

          />





          <div

            className="
relative
glass
rounded-[40px]
p-8
min-h-[550px]
flex
items-center
justify-center
overflow-hidden
"

          >



            {/* IMAGE PLACEHOLDER */}

            <div
              className="
  relative
  w-[360px]
  h-[360px]
  rounded-full
  overflow-hidden
  border
  border-cyan-400/30
  shadow-[0_0_60px_rgba(34,211,238,0.15)]
"
            >

              <Image
                src="/images/profile.png"
                alt="Anupriya Ranjan"
                fill
                priority
                className="object-cover"
              />

            </div>




            {/* Floating Panels */}



            <FloatingCard

              icon={<Cpu size={18} />}

              title="Expertise"

              value="LLMs • RAG • GenAI"

              position="top-8 left-8"

            />





            <FloatingCard

              icon={<Layers size={18} />}

              title="Building"

              value="AI Products"

              position="bottom-28 right-8"

            />





            <FloatingCard

              icon={<Code2 size={18} />}

              title="Focus"

              value="Full-Stack AI"

              position="bottom-8 left-10"

            />





          </div>


        </motion.div>



      </div>



    </section>

  )

}







function Stat({

  number,

  text

}: {

  number: string;

  text: string;

}) {


  return (

    <div
      className="
glass
rounded-xl
p-4
text-center
"
    >


      <h3
        className="
text-2xl
font-bold
text-cyan-300
"
      >

        {number}

      </h3>


      <p
        className="
text-xs
text-gray-400
"
      >

        {text}

      </p>


    </div>

  )

}








function FloatingCard({

  icon,

  title,

  value,

  position

}: {

  icon: React.ReactNode;

  title: string;

  value: string;

  position: string;

}) {


  return (

    <motion.div

      animate={{

        y: [0, -10, 0]

      }}

      transition={{

        duration: 4,

        repeat: Infinity

      }}


      className={`
absolute
${position}
glass
rounded-xl
p-4
flex
items-center
gap-3
text-sm
`}
    >


      <div
        className="
text-cyan-300
"
      >

        {icon}

      </div>


      <div>

        <p
          className="
text-gray-400
text-xs
"
        >

          {title}

        </p>


        <p
          className="
font-semibold
"
        >

          {value}

        </p>


      </div>


    </motion.div>

  )

}