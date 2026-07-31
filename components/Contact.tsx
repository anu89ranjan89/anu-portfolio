"use client";

import { socials } from "@/data/socials";
import { Mail, ArrowRight, Sparkles } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaFilePdf,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiGeeksforgeeks,
} from "react-icons/si";
import PremiumCard from "./PremiumCard";

const contacts = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={22} />,
    link: socials.linkedin,
  },

  {
    name: "GitHub",
    icon: <FaGithub size={22} />,
    link: socials.github,
  },

  {
    name: "Email",
    icon: <Mail size={22} />,
    link: `mailto:${socials.email}`,
  },
  {
    name: "CodeChef",
    icon: <FaCode size={22} />,
    link: socials.codechef,
  },

  {
    name: "LeetCode",
    icon: <SiLeetcode size={22} />,
    link: socials.leetcode,
  },

  {
    name: "GeeksforGeeks",
    icon: <SiGeeksforgeeks size={22} />,
    link: socials.geeksforgeeks,
  },

  {
    name: "Resume",
    icon: <FaFilePdf size={22} />,
    link: socials.resume,
  },







];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Heading */}

        <div className="text-center mb-14">
          <p className="text-cyan-400 uppercase tracking-widest text-sm">
            Connect
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Let's Build Something Intelligent
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            I'm currently open to AI Engineering, Machine Learning,
            Full-Stack Development, internships, placements,
            collaborations, and exciting opportunities.
          </p>
        </div>

        <PremiumCard className="max-w-4xl mx-auto">
          {/* Header */}

          <div className="flex items-center gap-3 mb-8">
            <div
              className="
              h-10
              w-10
              rounded-xl
              bg-cyan-400/20
              flex
              items-center
              justify-center
              text-cyan-300
              "
            >
              <Sparkles size={20} />
            </div>

            <div>
              <p className="font-semibold">
                ANUPRIYA AI TERMINAL
              </p>

              <p className="text-xs text-gray-400">
                Available for Opportunities
              </p>
            </div>
          </div>

          {/* Terminal */}

          <div
            className="
            bg-black/40
            rounded-2xl
            p-6
            border
            border-white/10
            font-mono
            text-sm
            space-y-3
            "
          >
            <p>
              <span className="text-cyan-400">&gt;</span>
              {" "}Role :
              <span className="text-gray-300">
                {" "}AI Engineer & Full-Stack Developer
              </span>
            </p>

            <p>
              <span className="text-cyan-400">&gt;</span>
              {" "}Specialization :
              <span className="text-gray-300">
                {" "}Generative AI • LLMs • RAG • FastAPI
              </span>
            </p>

            <p>
              <span className="text-cyan-400">&gt;</span>
              {" "}Location :
              <span className="text-gray-300">
                {" "}{socials.location}
              </span>
            </p>

            <p>
              <span className="text-cyan-400">&gt;</span>
              {" "}Email :
              <span className="text-gray-300">
                {" "}{socials.email}
              </span>
            </p>

            <p>
              <span className="text-cyan-400">&gt;</span>
              {" "}Status :
              <span className="text-green-400">
                {" "}Available for Opportunities
              </span>
            </p>
          </div>

          {/* Social Links */}

          <div className="flex flex-wrap justify-center gap-5 mt-8">
            {contacts.map((item, index) => (
              <a
                download={item.name === "Resume"}
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex
                items-center
                gap-3
                px-5
                py-3
                rounded-xl
                bg-white/5
                border
                border-white/10
                hover:border-cyan-400/50
                hover:bg-white/10
                transition-all
                duration-300
                "
              >
                {item.icon}

                <span>{item.name}</span>

                <ArrowRight size={15} />
              </a>
            ))}
          </div>
        </PremiumCard>
      </div>
    </section>
  );
}