import { useEffect, useState } from "react";
import Dialog from "./dialog";
import Card from "./card1";

function Crud() {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://68ff6375e02b16d1753dba14.mockapi.io/api/adress/usersInfo")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  const addUser = async (user) => {
    const res = await fetch(
      "https://68ff6375e02b16d1753dba14.mockapi.io/api/adress/usersInfo",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      },
    );

    const newUser = await res.json();
    setUsers((prev) => [...prev, newUser]);
    setOpen(false);
  };

  return (
    <div className="p-6">
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add
      </button>

      <Dialog open={open} onClose={() => setOpen(false)} onSubmit={addUser} />

      <div className="mt-6 flex gap-4 flex-wrap">
        {users.map((u) => (
          <Card key={u.id} user={u} />
        ))}
      </div>
    </div>
  );
}

export default Crud;
