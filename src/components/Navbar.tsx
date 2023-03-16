import Image from "next/image";
import Perfil from "@/images/perfil.png";
import Link from "next/link";
import { BiHomeAlt, BiUser, BiCog } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const router = useRouter();

  const menus = [
    {
      icon: <BiHomeAlt />,
      path: "/",
    },
    {
      icon: <BiUser />,
      path: "/about",
    },
    {
      icon: <FiGithub />,
      path: "/projects",
    },
  ];

  return (
    <nav className="bg-slate-800 p-5 rounded-md min-h-[600px] flex flex-col justify-between items-center w-fit">
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src={Perfil}
          alt="foto de perfil"
          width={50}
          height={50}
          className="rounded-full"
        />
      </motion.div>

      <AnimatePresence>
        <ul className="flex flex-col justify-center items-center gap-5">
          {menus.map((menu, index) => (
            <motion.div
              key={index}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.7, delay: index / 20 }}
            >
              <li
                className={`text-3xl hover:text-slate-200 cursor-pointer ${
                  menu.path == router.pathname
                    ? "text-slate-200"
                    : "text-slate-400"
                }`}
              >
                <Link href={menu.path}>{menu.icon}</Link>
              </li>
            </motion.div>
          ))}
        </ul>
      </AnimatePresence>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <BiCog className="text-3xl hover:text-slate-200 cursor-pointer text-slate-400" />
      </motion.div>
    </nav>
  );
}
