import { Menu } from "lucide-react";
import Switcher from "../../dark/theme/switcher.jsx";
import { useState } from "react";
import MobileMenu from "./modal.jsx";
function Header() {
  const [isOpenNodal, setIsOpenModal] = useState(false);
  return (
    <div className=" dark:bg-blue-950 py-6 px-3 flex items-center justify-between">
      <div>
        <img src="logo.png" alt="" />
      </div>
      <div className="flex items-center gap-2">
        <Menu onClick={() => setIsOpenModal(true)} />
        <Switcher />
        <MobileMenu open={isOpenNodal} onClose={() => setIsOpenModal(false)} />
      </div>
    </div>
  );
}

export default Header;
