import { Menu } from "lucide-react";
import Switcher from "../../dark/theme/switcher.jsx";
import { useState } from "react";
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
        {isOpenNodal && (
          <div
            className="fixed inset-0 z-50 bg-black/40 flex justify-end"
            onClick={() => setIsOpenModal(false)}
          >
            {/* Модалка */}
            <div
              className="w-72 h-full bg-white dark:bg-blue-950"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Контейнер внутри */}
              <div className="p-4">
                <button onClick={() => setIsOpenModal(false)}>✕</button>

                <ul className="mt-6">
                  <li>HELLO</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
