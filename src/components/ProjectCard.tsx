import { FC, useEffect } from "react";
import { IProject } from "@/utils/projects";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { RxOpenInNewWindow } from "react-icons/rx";
import { BsGithub } from "react-icons/bs";

interface IProjectComponent extends IProject {
  handleClick: (id: number | null) => void;
  isOpened: boolean;
}

const ProjecCard: FC<IProjectComponent> = (props) => {
  const {
    name,
    image,
    id,
    isOpened,
    handleClick,
    description,
    features,
    url,
    tecnologies,
    githubUrl,
  } = props;

  const variant = {
    hidden: {
      opacity: 0,
      z: -50,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  useEffect(() => {
    window.addEventListener("keyup", (e) => {
      const ESC_KEYCODE = 27;
      if (e.keyCode == ESC_KEYCODE) {
        handleClick(null);
      }
    });

    return () => {
      window.removeEventListener("keyup", () => {});
    };
  }, [handleClick, id]);

  return (
    <>
      <motion.div
        initial="hidden"
        animate="show"
        layoutId={`card-${id}`}
        variants={variant}
        onClick={() => handleClick(id)}
      >
        <div className="h-[200px] relative rounded-md cursor-pointer group overflow-hidden bg-slate-600 flex-col flex justify-center items-center">
          <Image
            src={image}
            alt="name"
            className="w-20 h-20 bg-slate-400 opacity-60 object-cover top-0 left-0 rounded-full z-10 group-hover:scale-110 group-hover:opacity-100 ease-linear duration-200"
          />
          <span className="text-slate-200 font-semibold tracking-wider py-5 relative z-20">
            {name}
          </span>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="cursor-pointer w-screen h-screen bg-slate-800/60 absolute top-0 left-0 z-40 flex justify-center items-center"
          >
            <motion.div
              layoutId={`card-${id}`}
              className="max-w-[600px] p-5 rounded-md bg-slate-500 absolute z-50 cursor-default"
            >
              <motion.div className="flex justify-end items-center">
                <IoClose
                  className="cursor-pointer text-slate-200 mb-2 font-semibold text-2xl"
                  onClick={() => handleClick(null)}
                />
              </motion.div>
              <motion.div className="w-fit h-fit bg-slate-400 rounded-md">
                <Image
                  src={image}
                  alt={`thumbnail ${name}`}
                  className="w-[600px] max-h-[260px] h-30 rounded-md mb-3 object-contain"
                />
              </motion.div>
              <motion.h5 className="text-xl font-semibold tracking-wider flex justify-center">
                <motion.a
                  href={url}
                  target="_blank"
                  className="w-fit flex items-center text-slate-200 hover:text-slate-300"
                >
                  {name} <RxOpenInNewWindow className="ml-1" />
                </motion.a>
              </motion.h5>
              {githubUrl && (
                <motion.div className="flex justify-center py-3">
                  <motion.a
                    href={githubUrl}
                    className="text-slate-200 hover:text-slate-300 text-2xl"
                  >
                    <BsGithub />
                  </motion.a>
                </motion.div>
              )}
              <motion.p className="max-w-100 text-slate-200">
                {description}
              </motion.p>

              {features && (
                <>
                  <motion.p className="text-slate-200 mt-3">
                    Aqui estão algumas funcionalidades:
                  </motion.p>
                  <motion.ul className="pl-3 text-[15px] text-slate-200">
                    {features.map((feature, key) => (
                      <motion.li key={key}>- {feature}</motion.li>
                    ))}
                  </motion.ul>
                  <motion.div className="bg-slate-200/60 w-full min-h-hr my-3"></motion.div>
                </>
              )}

              <motion.h4 className="text-slate-200 text-[15px]">
                Tecnologias usadas:
              </motion.h4>
              <motion.div className="flex items-center justify-center gap-5">
                {tecnologies?.map((tecnology, key) => (
                  <motion.a
                    key={key}
                    href={tecnology.url}
                    target="_blank"
                    className="text-slate-200 hover:text-slate-300 text-2xl"
                  >
                    <tecnology.icon />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjecCard;
