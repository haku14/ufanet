import Header from "@/components/Header";

export default function Team() {
  return (
    <>
      <Header />
      <h1 className="text-center mt-10 w-full">Наша команда</h1>
      <div className="flex flex-col gap-12 pb-10 mt-20 max-w-[1200px] px-4 mx-auto">
        <div>
          <p className="text-2xl font-semibold">
            1. Руководитель отдела видеонаблюдения
          </p>
          <p className="mt-3">
            Обязанности: Разработка стратегии развития системы видеонаблюдения,
            координация работы всего отдела, взаимодействие с другими отделами
            для интеграции систем видеонаблюдения с другими IT-системами.
          </p>
        </div>
        <div>
          <p className="text-2xl font-semibold">
            2. Специалист по проектированию систем видеонаблюдения
          </p>
          <p className="mt-3">
            Обязанности: Проектирование архитектуры систем видеонаблюдения,
            выбор оборудования и программного обеспечения, оптимизация систем
            для достижения максимальной эффективности и безопасности.
          </p>
        </div>
        <div>
          <p className="text-2xl font-semibold">
            3. Инженер по установке и настройке систем видеонаблюдения
          </p>
          <p className="mt-3">
            Обязанности: Установка и настройка физического оборудования (камеры,
            серверы, сетевое оборудование), конфигурация программных решений,
            тестирование работоспособности систем после установки.
          </p>
        </div>
        <div>
          <p className="text-2xl font-semibold">
            4. Технический специалист по обслуживанию систем видеонаблюдения
          </p>
          <p className="mt-3">
            Обязанности: Обеспечение непрерывной работы систем видеонаблюдения,
            решение возникающих технических проблем, проведение планового
            обслуживания оборудования.
          </p>
        </div>
        <div>
          <p className="text-2xl font-semibold">
            5. Аналитик по данным видеонаблюдения
          </p>
          <p className="mt-3">
            Обязанности: Анализ записей с камер для выявления важных событий,
            разработка алгоритмов для автоматической обработки и классификации
            видеоматериалов, предоставление отчетов о результатах анализа.
          </p>
        </div>
        <div>
          <p className="text-2xl font-semibold">
            6. Специалист по безопасности данных
          </p>
          <p className="mt-3">
            Обязанности: Защита информации, собранной системой видеонаблюдения,
            от несанкционированного доступа, обеспечение соответствия
            требованиям законодательства в области защиты персональных данных.
          </p>
        </div>
        <div>
          <p className="text-2xl font-semibold">
            7. Менеджер проектов по видеонаблюдению
          </p>
          <p className="mt-3">
            Обязанности: Координация всех этапов реализации проектов по
            внедрению или модернизации систем видеонаблюдения, контроль сроков и
            бюджета проекта, взаимодействие с клиентами и поставщиками.
          </p>
        </div>
      </div>
    </>
  );
}
