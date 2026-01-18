import img1 from "./img/img1.png";
import Card from "./card1.jsx";
import { useEffect, useState } from "react";
function Crud() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          "https://68ff6375e02b16d1753dba14.mockapi.io/api/adress/usersInfo",
        );
        const data = await res.json();
        setUser(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);
  console.log(user);
  return (
    <div className="flex flex-col gap-8 m-auto py-5 min-w-[320px]">
      <div className="flex flex-col gap-4 justify-center text-center lg:text-left">
        <img src={img1} alt="section" width="350" className="m-auto lg:m-0" />
      </div>
      <div className="flex justify-end">
        <button className="px-8 py-2 bg-green-600 rounded-2xl text-lg text-white">
          Add
        </button>
      </div>
      <div className="flex flex-wrap justify-center py-10 gap-10">
        {user.map((item) => (
          <Card key={item.id} user={item} />
        ))}
      </div>
    </div>
  );
}

export default Crud;
