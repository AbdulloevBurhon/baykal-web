import { Button } from "@mui/material";
import { Mail, MessageCircle } from "lucide-react";

function MobileMenu({ open, onClose }) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex justify-end bg-black/40
        transition-opacity duration-300
        ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-72 h-full bg-white dark:bg-blue-950
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4">
          <button onClick={onClose}>✕</button>

          <ul className="mt-10 text-gray-500 text-2xl dark:text-white flex flex-col gap-4">
            <li className="text-blue-500 font-medium text-2xl">Главная</li>
            <li>О гостинице</li>
            <li>Преимущества</li>
            <li>Номера</li>
            <li>Отзывы</li>
          </ul>
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
          <div className="flex flex-col gap-3">
            <h1 className="text-gray-600 font-bold dark:text-white">Адрес:</h1>
            <p className="text-gray-600 font-bold text-sm">
              Кайдаловская ул., 37, Чита
            </p>
            <h1 className="font-bold">+7 (3022) 217856</h1>
            <h1 className="font-bold ">+79294830255</h1>
            <div className="flex gap-10 ml-10 mt-5">
              <MessageCircle color="green" size={30} />
              <Mail size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
