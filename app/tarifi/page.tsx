"use client";

import Header from "@/components/Header";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Tarifi() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header />
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8 mt-10">
          Тарифы подключения камер
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Базовый</h3>
            <p className="text-gray-600 mb-4">
              Подходит для небольших помещений и домашних видеонаблюдений.
            </p>
            <ul className="list-disc list-inside">
              <li>1 камера</li>
              <li>24/7 поддержка</li>
              <li>Обновление камеры каждые 6 месяцев</li>
            </ul>
            <p className="text-gray-600 mt-4">Стоимость: 1000 рублей/месяц</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Стандартный</h3>
            <p className="text-gray-600 mb-4">
              Идеально подходит для средних и крупных объектов.
            </p>
            <ul className="list-disc list-inside">
              <li>2 камеры</li>
              <li>24/7 поддержка</li>
              <li>Обновление камеры каждые 6 месяцев</li>
              <li>Доступ к облачному хранилищу</li>
            </ul>
            <p className="text-gray-600 mt-4">Стоимость: 1500 рублей/месяц</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Премиум</h3>
            <p className="text-gray-600 mb-4">
              Для крупных объектов и предприятий с высокими требованиями к
              безопасности.
            </p>
            <ul className="list-disc list-inside">
              <li>4 камеры</li>
              <li>24/7 поддержка</li>
              <li>Обновление камеры каждые 6 месяцев</li>
              <li>Доступ к облачному хранилищу</li>
              <li>Персональное консультирование</li>
            </ul>
            <p className="text-gray-600 mt-4">Стоимость: 2000 рублей/месяц</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Корпоративный</h3>
            <p className="text-gray-600 mb-4">
              Для крупных корпораций и предприятий с высокими требованиями к
              безопасности.
            </p>
            <ul className="list-disc list-inside">
              <li>6 камер</li>
              <li>24/7 поддержка</li>
              <li>Обновление камеры каждые 6 месяцев</li>
              <li>Доступ к облачному хранилищу</li>
              <li>Персональное консультирование</li>
              <li>Дополнительные услуги по обслуживанию</li>
            </ul>
            <p className="text-gray-600 mt-4">Стоимость: 2500 рублей/месяц</p>
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
