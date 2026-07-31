"use client";

import { achievements } from "@/data/achievements";
import PremiumCard from "./PremiumCard";
import { ExternalLink } from "lucide-react";

export default function CodingJourney() {
  return (
    <section id="coding" className="section">
      <div className="container">

        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Continuous Learning
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Coding Journey
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My journey of continuously improving problem-solving,
            competitive programming, open-source contributions,
            and software engineering through consistent practice.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {achievements.map((item, index) => (

            <PremiumCard key={index}>

              <div className="flex justify-between items-center">

                <div>

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-cyan-300 text-sm mt-1">
                    {item.subtitle}
                  </p>

                </div>

                <span
                  className="
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  bg-cyan-500/10
                  border
                  border-cyan-400/20
                  text-cyan-300
                  "
                >
                  {item.value}
                </span>

              </div>

              <p className="mt-6 text-gray-400 leading-relaxed text-sm">
                {item.description}
              </p>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                mt-8
                inline-flex
                items-center
                gap-2
                text-cyan-300
                hover:text-white
                transition
                "
              >
                Visit Profile
                <ExternalLink size={16} />
              </a>

            </PremiumCard>

          ))}

        </div>

      </div>
    </section>
  );
}