import LogoIcons from "@/public/icons/logo.svg";
import CameraIcons from "@/public/icons/camera2.svg";
import Image from "next/image";

interface Props {}

const LINK_DATA = [
  {
    text: "О нас",
    link: "/",
  },
  {
    text: "Виды камер",
    link: "/",
  },
  {
    text: "Тарифы",
    link: "/",
  },
  {
    text: "Спец предложения",
    link: "/",
  },
  {
    text: "Контакты",
    link: "/",
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
          <p>вас снимает скрытая камера</p>
          <Image width={30} height={30} src={CameraIcons} alt="camera" />
        </div>
        <a href="tel:89174734126">свзяь с директором: 89174734126</a>
      </div>
      <header className="sticky top-0 left-0 bg-gray-200 w-full py-4 flex justify-center gap-8">
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
