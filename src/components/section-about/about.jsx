import imgAbout from "./img/img-about.png";
import img2 from "./img/img-2.png";
function About() {
  return (
    <div
      className="
    flex flex-col items-center gap-8
    lg:flex-row lg:justify-between lg:items-center
    m-auto py-5 min-w-[320px]
  "
    >
      {/* Левая часть */}
      <div className="flex flex-col gap-4 justify-center text-center lg:text-left">
        <img src={imgAbout} alt="" width="350" className="m-auto lg:m-0" />

        <p className="max-w-md m-auto lg:m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="max-w-md m-auto lg:m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Правая часть */}
      <div className="flex justify-center lg:justify-end">
        <img src={img2} alt="" />
      </div>
    </div>
  );
}

export default About;
