import Image from "next/image";
import AboutImage from "@/images/about_photo.jpg";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex justify-center items-center flex-col h-full gap-7">
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        <Image
          src={AboutImage}
          width={150}
          height={150}
          alt="Leonardo Jordano"
          className="rounded-full"
        />
      </motion.div>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="w-full"
      >
        <div className="bg-slate-200 w-full min-h-hr"></div>
      </motion.div>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.7, delay: 1.3 }}
      >
        <div className="px-5">
          <p className="max-w-content text-center text-slate-200 mb-1">
            Sou um desenvolvedor com 2 ano de experiência e apaixonado pelo
            Front End e JavaScript!! Tenho conhecimentos com as seguintes
            tecnologias:
          </p>

          <ul className="text-slate-200 w-full justify-center items-center my-2 flex gap-2 py-3">
            <li>ReactJS</li>
            <li className="w-1 h-1 rounded-full bg-slate-200"></li>
            <li>VueJS</li>
            <li className="w-1 h-1 rounded-full bg-slate-200"></li>
            <li>PHP</li>
          </ul>

          <p className="max-w-content text-center text-slate-200">
            Atualmente estou estudando melhorando os meus conhecimentos para o
            backend, com C# utilizando Dot.net Core.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.7, delay: 1.6 }}
        className="w-full"
      >
        <div className="bg-slate-200 w-full min-h-hr"></div>
      </motion.div>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.7, delay: 1.9 }}
      >
        <div className="flex justify-center items-center gap-10">
          <a
            href="https://www.instagram.com/__jordanoo/"
            target={"_blank"}
            className="text-slate-200 text-3xl hover:text-slate-400"
          >
            <BsInstagram />
          </a>

          <a
            href="https://github.com/leojordano"
            target={"_blank"}
            className="text-slate-200 text-3xl hover:text-slate-400"
          >
            <BsGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/leojordano/"
            target={"_blank"}
            className="text-slate-200 text-3xl hover:text-slate-400"
          >
            <BsLinkedin />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
