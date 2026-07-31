"use client";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import PremiumCard from "./PremiumCard";

export default function Projects() {

  return (

    <section
      id="projects"
      className="
section
"
    >


      <div
        className="
container
"
      >


        <div
          className="
text-center
mb-16
"
        >


          <p
            className="
text-cyan-400
uppercase
tracking-widest
text-sm
"
          >

            Innovation Lab

          </p>


          <h2
            className="
text-4xl
md:text-5xl
font-bold
mt-4
"
          >

            AI Products & Projects

          </h2>


          <p
            className="
text-gray-400
mt-4
max-w-2xl
mx-auto
"
          >

            Building intelligent solutions by combining
            Artificial Intelligence, Machine Learning and
            modern software engineering.

          </p>


        </div>






        <div
          className="
grid
lg:grid-cols-3
gap-6
"
        >


          {

            projects.map((project, index) => (


              <PremiumCard

                key={index}

              >


                <div
                  className="
flex
justify-between
items-start
"
                >


                  <div
                    className="
text-cyan-300
"
                  >

                    {project.icon}

                  </div>


                  <span
                    className="
text-xs
px-3
py-1
rounded-full
bg-white/10
text-gray-300
"
                  >

                    {project.status}

                  </span>


                </div>




                <h3
                  className="
text-2xl
font-bold
mt-6
"
                >

                  {project.title}

                </h3>



                <p
                  className="
text-cyan-300
text-sm
mt-2
"
                >

                  {project.category}

                </p>





                <p
                  className="
text-gray-400
mt-5
text-sm
leading-relaxed
"
                >

                  {project.description}

                </p>





                <div
                  className="
flex
flex-wrap
gap-2
mt-6
"
                >


                  {

                    project.tech.map((item, i) => (

                      <span

                        key={i}

                        className="
text-xs
px-3
py-1
rounded-full
border
border-white/10
bg-white/5
"

                      >

                        {item}

                      </span>

                    ))

                  }


                </div>




                <div className="mt-8 flex gap-3">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
      flex-1
      text-center
      py-2
      rounded-lg
      border
      border-cyan-400/40
      text-cyan-300
      hover:bg-cyan-400
      hover:text-black
      transition-all
      duration-300
      font-medium
    "
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
      flex-1
      text-center
      py-2
      rounded-lg
      bg-cyan-400
      text-black
      hover:scale-105
      transition-all
      duration-300
      font-medium
    "
                  >
                    Live Demo
                  </a>

                </div>




              </PremiumCard>



            ))

          }


        </div>


      </div>


    </section>

  )

}