import { Button } from "@mui/material";
import heroImg from "./img/hero.png";
import heroLogo from "./img/hero-logo.png";
function Hero() {
  return (
    <div
      className="
    flex flex-col items-center gap-8
    lg:flex-row lg:justify-between lg:items-center
    m-auto py-3 min-w-[320px]
  "
    >
      {/* Левая часть */}
      <div className="flex flex-col gap-4 justify-center text-center lg:text-left">
        <img src={heroLogo} alt="" width="350" className="m-auto lg:m-0" />

        <p className="max-w-md m-auto lg:m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <Button
          color="warning"
          variant="contained"
          size="large"
          sx={{
            display: "block",
            mx: { xs: "auto", lg: 0 },
            mt: "30px",
            mb: "20px",
            width: "180px",
            fontSize: "14px",
            ".dark &": {
              color: "white",
              borderColor: "white",
            },
          }}
        >
          Забронировать
        </Button>
      </div>

      {/* Правая часть */}
      <div className="flex justify-center lg:justify-end">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
}

export default Hero;
