import { Wifi } from "lucide-react";

function FeatureCard({ cardBox }) {
  return (
    <div className="flex flex-col items-center text-center gap-4 max-w-xs ">
      {/* Иконка */}

      {<img src={cardBox.img} alt="" />}

      {/* Заголовок */}
      <h3 className="text-blue-600 font-bold dark:text-white text-lg ">
        {cardBox.title}
      </h3>

      {/* Описание */}
      <p className="text-sm text-gray-500 dark:text-white">{cardBox.desc}</p>
    </div>
  );
}

export default FeatureCard;
