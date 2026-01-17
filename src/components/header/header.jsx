import { Menu } from "lucide-react";
import Switcher from "../../dark/theme/switcher.jsx";
import { useState } from "react";
import MobileMenu from "./modal.jsx";
import { Button } from "@mui/material";
function Header() {
  const [isOpenNodal, setIsOpenModal] = useState(false);
  return (
    <div className=" dark:bg-blue-950 py-6 px-3 lg:px-6 flex items-center justify-between">
      <div>
        <img src="logo.png" alt="" />
      </div>
      <div className="flex items-center gap-2">
        <Menu
          onClick={() => setIsOpenModal(true)}
          className="block lg:hidden"
        />

        <MobileMenu open={isOpenNodal} onClose={() => setIsOpenModal(false)} />
        <div className="flex items-center">
          <ul className="hidden lg:flex items-center gap-8">
            <li className="font-bold text-[20px] text-blue-800 dark:text-white">
              Главная
            </li>
            <li className="text-gray-600 text-lg font-meduim dark:text-white">
              О гостинице
            </li>
            <li className="text-gray-600 text-lg font-meduim dark:text-white">
              Преимущества
            </li>
            <li className="text-gray-600 text-lg font-meduim dark:text-white">
              Номера
            </li>
            <li className="text-gray-600 text-lg font-meduim dark:text-white">
              Отзывы
            </li>
          </ul>
          <div className="flex items-center gap-2 ml-5">
            <div className="hidden lg:flex">
              <Button
                variant="outlined"
                size="medium"
                sx={{
                  fontSize: "14px",
                  mt: "30px",
                  width: "180px",
                  mb: "20px",

                  ".dark &": {
                    color: "white",
                    borderColor: "white",
                  },
                }}
              >
                Обратный звонок
              </Button>
            </div>
            <Switcher />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
