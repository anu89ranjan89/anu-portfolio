"use client";

import { socials } from "@/data/socials";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="container py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div>

            <h3 className="text-xl font-bold text-white">
              Anupriya Ranjan
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              AI Engineer • Full Stack Developer • Machine Learning Enthusiast
            </p>

          </div>

          <div className="flex gap-5 text-xl">

            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href={socials.codechef}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaCode />
            </a>

          </div>

        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-gray-500 text-sm">

          © {new Date().getFullYear()} Anupriya Ranjan. All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}