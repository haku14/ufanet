import Header from "@/components/Header";

export default function Tarifi() {
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
      </div>
    </>
  );
}
