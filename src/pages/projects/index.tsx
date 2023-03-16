import { useState, useCallback } from "react";
import ProjecCard from "@/components/ProjectCard";
import { IProject, Projects as projects } from "@/utils/projects";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [indexOpened, setIndexOpened] = useState<number | null>(null);

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const handleIndexOpened = useCallback((id: number | null): boolean => {
    console.log(id);
    return !!projects.find((project) => project.id === id)?.id;
  }, []);

  return (
    <motion.div
      variants={variants}
      className="grid grid-cols-3 gap-4 min-w-[600px]"
    >
      {projects.map((project: IProject, key: number) => (
        <ProjecCard
          {...project}
          handleClick={(id) => setIndexOpened(id)}
          isOpened={indexOpened === project.id}
          key={key}
        />
      ))}
    </motion.div>
  );
}
