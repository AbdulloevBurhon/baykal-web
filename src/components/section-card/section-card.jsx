import { Wifi } from "lucide-react";
import FeatureCard from "./card";
import imgSection from "./img/sec-card.png";
import img1 from "./img/img-1.png";
import img2 from "./img/img-2.png";
import img3 from "./img/img-3.png";
import img4 from "./img/img-4.png";
import img5 from "./img/img-5.png";
import img6 from "./img/img-6.png";
import img7 from "./img/img-7.png";
import img8 from "./img/img-8.png";
import img9 from "./img/img-9.png";
function SectionCard() {
  const cardBox = [
    {
      id: 1,
      img: img1,
      title: "Бесплатный WI-FI",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      id: 2,
      img: img2,
      title: "Круглосуточный доступ",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      id: 3,
      img: img3,
      title: "Телевизор",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      id: 4,
      img: img4,
      title: "Парковка",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      id: 5,
      img: img5,
      title: "Влажная уборка ",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      id: 6,
      img: img6,
      title: "Банно-прачечный комплекс",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      id: 7,
      img: img7,
      title: "Собственная кухня",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      id: 8,
      img: img8,
      title: "Банкетный зал",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      id: 9,
      img: img9,
      title: "Банкетный зал",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
  ];

  return (
    <div className="flex flex-col gap-8 m-auto py-5 min-w-[320px]">
      <div className="flex flex-col gap-4 justify-center text-center lg:text-left">
        <img
          src={imgSection}
          alt="section"
          width="350"
          className="m-auto lg:m-0"
        />
      </div>

      <div
        className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    gap-30
    max-w-6xl
    mx-auto
   
  "
      >
        {cardBox.map((item) => (
          <FeatureCard key={item.id} cardBox={item} />
        ))}
      </div>
    </div>
  );
}

export default SectionCard;
