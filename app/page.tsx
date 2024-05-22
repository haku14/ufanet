"use client";

import Header from "@/components/Header";
import CameraIcons from "@/public/icons/camera.svg";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    if (ref.current) {
      // @ts-ignore
      const top = ref.current.getBoundingClientRect().top;
      setIsVisible(top < window.innerHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const animationVariants = {
    hidden: { x: -1000 },
    visible: { x: 0 },
    hiddenBottom: { opacity: 0 },
    visibleBottom: { opacity: 1, transition: { duration: 1, delay: 0.6 } },
  };
  return (
    <>
      <Header />
      <div className="flex gap-20 mt-20 overflow-hidden">
        <div className="w-full">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="text-4xl mt-10 text-right w-full"
          >
            Видеонаблюдение Уфанет
          </motion.h1>
          <ul className="text-xl font-medium list-disc mt-5 pl-5 flex flex-col items-end gap-3">
            <motion.li
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Цена ниже при подключении двух и более камер
            </motion.li>
            <motion.li
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              Камеры можно смотреть в приложении отовсюду, где есть интернет
            </motion.li>
            <motion.li
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Работает в сети любого интернет-провайдера
            </motion.li>
            <motion.li
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              Записи в безопасности на облачном сервере
            </motion.li>
            <motion.li
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Бесплатная установка при покупке камеры
            </motion.li>
          </ul>
        </div>
        <motion.div
          className="h-[500px]"
          initial={{ x: 500 }}
          animate={{ x: 0 }}
        >
          <Image width={500} height={500} src={CameraIcons} alt="camera" />
        </motion.div>
      </div>
      <div className="h-screen w-full bg-[url('/images/camera-banner.jpg')] bg-cover bg-no-repeat mt-20 flex items-center relative">
        <div className="container">
          <motion.h1
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={animationVariants}
            className="text-6xl text-white"
          >
            Безопасность
          </motion.h1>
          <motion.h1
            initial="hiddenBottom"
            animate={isVisible ? "visibleBottom" : "hiddenBottom"}
            variants={animationVariants}
            className="text-7xl text-white font-bold border-b-4 border-white pb-3 mt-5"
          >
            можно купить
          </motion.h1>
        </div>
        <div ref={ref} className="absolute bottom-0 left-0 w-full h-[200px]" />
      </div>
      <div className="max-w-[1200px] px-4 pt-[200px] mx-auto">
        <div className="flex justify-between items-center">
          <Image
            width={500}
            height={400}
            src={
              "https://www.ufanet.ru/media/core/img/blocks/image.psd_-_2023-06-19T162740.280.png"
            }
            alt="qwe"
          />
          <div>
            <h1>Просмотр камер со смартфона</h1>
            <p className="mt-5">
              Установите приложение «Мой умный дом» на смартфон или планшет и
              наблюдайте за тем, что важно и ценно, из любой точки мира, где
              есть интернет. Наши камеры записывают звук и отмечают моменты
              движения в кадре на временной шкале архива.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-20">
          <Image
            width={500}
            height={400}
            src={
              "https://www.ufanet.ru/media/core/img/blocks/image.psd_-_2023-06-19T155816.517.png"
            }
            alt="qwe"
          />
          <div>
            <h1>Все камеры в одном приложении!</h1>
            <p className="mt-5">
              Если у вас установлено несколько камер в разных местах (дом, дача,
              подъезд и др.), их все можно добавить на одну вкладку в мобильном
              приложении «Мой умный дом», А еще для пользователей приложения
              доступны бесплатные городские камеры на улицах и перекрестках
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-20">
          <Image
            width={500}
            height={400}
            src={
              "https://www.ufanet.ru/media/core/img/blocks/image.psd_-_2023-06-19T163324.114.png"
            }
            alt="qwe"
          />
          <div>
            <h1>Архив записей в безопасности</h1>
            <p className="mt-5">
              Даже если злоумышленники проникли на охраняемую территорию, они не
              смогут похитить или уничтожить записи, ведь они хранятся на
              защищенном облачном сервере.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
