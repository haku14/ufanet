"use client";

import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Vidi() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header />
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8 mt-10">
          Виды камер
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Внутренняя</h3>
            <Image
              src={"https://www.ufanet.ru/media/uploads/2022/03/29/inside.png"}
              alt="er"
              width={500}
              height={300}
            />
            <p className="text-gray-600 mt-3">
              Благодаря встроенному микрофону может записывать видео со звуком.
            </p>
            <div className="flex gap-4 items-center mt-3">
              <div>
                <p className="font-bold text-2xl">4 400 ₽</p>
                <p className="text-gray-600 text-sm">Камера</p>
              </div>
              <p className="font-bold text-2xl">+</p>
              <div>
                <p className="font-bold text-2xl">1 500 ₽</p>
                <p className="text-gray-600 text-sm">Инжектор PoE</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Антивандальная</h3>
            <Image
              src={
                "https://www.ufanet.ru/media/uploads/2022/03/29/antivandal_9Aga6wC.png"
              }
              alt="er"
              width={500}
              height={300}
            />
            <p className="text-gray-600 mt-3">
              Надежно защищена от пыли и влаги. Оптимальный вариант для
              широкоугольного обзора на ближнем расстоянии.
            </p>
            <div className="flex gap-4 items-center mt-3">
              <div>
                <p className="font-bold text-2xl">4 400 ₽</p>
                <p className="text-gray-600 text-sm">Камера</p>
              </div>
              <p className="font-bold text-2xl">+</p>
              <div>
                <p className="font-bold text-2xl">1 500 ₽</p>
                <p className="text-gray-600 text-sm">Инжектор PoE</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Внешняя</h3>
            <Image
              src={
                "https://www.ufanet.ru/media/uploads/2022/03/29/vario_Hiot8hQ.png"
              }
              alt="er"
              width={500}
              height={300}
            />
            <p className="text-gray-600 mt-3">
              Надежно защищена от пыли и влаги. Оптимальный вариант для обзора
              на среднем и дальнем расстоянии.
            </p>
            <div className="flex gap-4 items-center mt-3">
              <div>
                <p className="font-bold text-2xl">4 400 ₽</p>
                <p className="text-gray-600 text-sm">Камера</p>
              </div>
              <p className="font-bold text-2xl">+</p>
              <div>
                <p className="font-bold text-2xl">1 500 ₽</p>
                <p className="text-gray-600 text-sm">Инжектор PoE</p>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="mt-10 max-w-[300px] mx-auto block"
        >
          Оставить заявку
        </button>
      </div>
      <div
        className={twMerge(
          "fixed z-[100] top-0 left-0 w-screen h-screen flex items-center bg-black bg-opacity-35 justify-center opacity-0 pointer-events-none duration-300",
          open && "opacity-100 pointer-events-auto"
        )}
      >
        <div className="max-w-[718px] w-full p-4 rounded-[4px] bg-white">
          <div className="flex justify-between items-center">
            <p className="text-3xl font-bold">Укажите ваши данные</p>
          </div>
          <div className="flex flex-col gap-5 mt-4">
            <input
              type="text"
              placeholder="Имя"
              className="border border-black py-2 rounded-lg pl-3"
            />
            <input
              type="text"
              placeholder="Номер телефон"
              className="border border-black py-2 rounded-lg pl-3"
            />
            <input
              type="text"
              placeholder="Почта"
              className="border border-black py-2 rounded-lg pl-3"
            />
            <textarea
              placeholder="Комментарий"
              className="border border-black py-2 rounded-lg pl-3"
            ></textarea>
            <button
              onClick={() => {
                setOpen(false);
              }}
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
