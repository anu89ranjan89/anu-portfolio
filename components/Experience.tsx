"use client";

import { experiences } from "@/data/experience";
import PremiumCard from "./PremiumCard";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section"
    >
      <div className="container">

        {/* Section Header */}

        <div className="text-center mb-16">

          <p
            className="
            text-cyan-400
            uppercase
            tracking-[0.3em]
            text-sm
            "
          >
            Leadership & Experience
          </p>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            mt-4
            "
          >
            Experience
          </h2>

          <p
            className="
            text-gray-400
            mt-4
            max-w-2xl
            mx-auto
            "
          >
            Leadership roles, AI fellowships, hackathons, and real-world
            engineering experiences that have shaped my technical journey.
          </p>

        </div>

        {/* Experience Cards */}

        <div
          className="
          grid
          lg:grid-cols-3
          gap-6
          "
        >

          {experiences.map((item, index) => (

            <PremiumCard key={index}>

              <div className="flex justify-between items-start gap-4">

                <div>

                  <h3
                    className="
                    text-2xl
                    font-bold
                    "
                  >
                    {item.role}
                  </h3>

                  <p
                    className="
                    text-cyan-300
                    mt-2
                    "
                  >
                    {item.organization}
                  </p>

                </div>

                <span
                  className="
                  text-xs
                  px-3
                  py-1
                  rounded-full
                  bg-cyan-500/10
                  border
                  border-cyan-400/20
                  text-cyan-300
                  whitespace-nowrap
                  "
                >
                  {item.type}
                </span>

              </div>

              <p
                className="
                text-gray-500
                text-sm
                mt-3
                "
              >
                {item.duration}
              </p>

              <p
                className="
                text-gray-400
                mt-6
                leading-relaxed
                "
              >
                {item.description}
              </p>

            </PremiumCard>

          ))}

        </div>

      </div>
    </section>
  );
}