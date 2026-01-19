import img1 from "./img/img1.png";
import Card from "./card1.jsx";
import { useEffect, useState } from "react";
import Dialog1 from "./dialog.jsx";

function Crud() {
  const [user, setUser] = useState([]);
  const [open, setOpen] = useState(false);

  // ✅ GET users
  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch(
          "https://68ff6375e02b16d1753dba14.mockapi.io/api/adress/usersInfo",
        );
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    }

    getUsers();
  }, []);

  // ✅ POST user
  async function addUser(newUser) {
    try {
      const res = await fetch(
        "https://68ff6375e02b16d1753dba14.mockapi.io/api/adress/usersInfo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        },
      );

      const createdUser = await res.json();

      setUser((prev) => [...prev, createdUser]); // 🔥 обновляем список
      setOpen(false); // закрываем модалку
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col gap-8 m-auto py-5 min-w-[320px] px-3">
      <div className="flex flex-col gap-4 justify-center text-center lg:text-left">
        <img src={img1} alt="section" width="350" className="m-auto lg:m-0" />
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => setOpen(true)}
          className="px-8 py-2 bg-green-600 rounded-2xl text-lg text-white"
        >
          Add
        </button>

        <Dialog1
          open={open}
          onClose={() => setOpen(false)}
          onSubmit={addUser}
        />
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
