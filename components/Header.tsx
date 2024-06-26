import LogoIcons from "@/public/icons/logo.svg";
import CameraIcons from "@/public/icons/camera2.svg";
import Image from "next/image";

interface Props {}

const LINK_DATA = [
  {
    text: "Главная",
    link: "/",
  },
  {
    text: "О нас",
    link: "/team",
  },
  {
    text: "Виды камер",
    link: "/vidi",
  },
  {
    text: "Тарифы",
    link: "/tarifi",
  },
];

const Header: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="container flex items-center justify-between py-3">
        <div className="max-w-[344px] w-full">
          <Image src={LogoIcons} alt="logo" />
        </div>
        <div className="flex items-center gap-4">
          <p>Лучшие камеры</p>
          <Image width={30} height={30} src={CameraIcons} alt="camera" />
        </div>
        <a href="tel:89174734126">контакт для связи: 89174734126</a>
      </div>
      <header className="sticky top-0 left-0 bg-gray-200 w-full py-4 flex justify-center gap-8 z-10">
        {LINK_DATA.map((item, i) => (
          <a key={i} href={item.link} className="font-medium text-black">
            {item.text}
          </a>
        ))}
      </header>
    </>
  );
};

export default Header;
