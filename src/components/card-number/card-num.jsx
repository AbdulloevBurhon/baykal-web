import imgNum from "./img/img-num.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import card1 from "./img/card1.png";
function CardNum() {
  return (
    <div className="flex flex-col gap-8 m-auto py-5 min-w-[320px]">
      <div className="flex flex-col gap-4 justify-center text-center lg:text-left">
        <img src={imgNum} alt="section" width="350" className="m-auto lg:m-0" />
      </div>
      <div
        className="
  grid
  grid-cols-1
  lg:grid-cols-[1fr_auto_1fr]
  gap-8
  items-center
"
      >
        <div className="hidden lg:flex shrink-0">
          <img src={img2} alt="" className="w-55 h-auto" />
        </div>
        <div className="flex flex-row flex-wrap gap-5 justify-center">
          <div className="w-71.25 h-125 border-2 border-blue-800 flex flex-col gap-8 py-6 px-10 justify-center">
            <div>
              <img src={card1} alt="" />
            </div>
            <h1 className="text-blue-700 font-bold text-lg dark:text-white">
              Одноместный номер
            </h1>
            <ul className="list-disc list-inside text-gray-700 text-lg dark:text-white">
              <li>Душ</li>
              <li>Кровать</li>
              <li>Телевизор</li>
              <li>Wi-Fi</li>
              <li>Что то еще</li>
              <li>Что то еще</li>
            </ul>
            <div>
              <h2 className="text-blue-700 font-bold text-[20px] text-center dark:text-white">
                Стоимость
              </h2>
              <h1 className="text-center text-2xl">
                <span className="text-orange-600">1000₽</span>{" "}
                <span className="text-orange-500">/ сутки</span>
              </h1>
            </div>
          </div>
          <div className="w-71.25 h-125 border-2 border-blue-800 flex flex-col gap-8 py-6 px-10 justify-center">
            <div>
              <img src={card1} alt="" />
            </div>
            <h1 className="text-blue-700 font-bold text-lg dark:text-white">
              Одноместный номер
            </h1>
            <ul className="list-disc list-inside text-gray-700 text-lg dark:text-white">
              <li>Душ</li>
              <li>Кровать</li>
              <li>Телевизор</li>
              <li>Wi-Fi</li>
              <li>Что то еще</li>
              <li>Что то еще</li>
            </ul>
            <div>
              <h2 className="text-blue-700 font-bold text-[20px] text-center dark:text-white">
                Стоимость
              </h2>
              <h1 className="text-center text-2xl">
                <span className="text-orange-600">1000₽</span>{" "}
                <span className="text-orange-500">/ сутки</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex shrink-0">
          <img src={img3} alt="" className="w-55 h-auto" />
        </div>
      </div>
    </div>
  );
}

export default CardNum;
