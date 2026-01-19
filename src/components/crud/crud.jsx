import { useEffect, useState } from "react";
import Dialog from "./dialog.jsx";
import Card from "./card1.jsx";

const API = "https://68ff6375e02b16d1753dba14.mockapi.io/api/adress/usersInfo";

function Crud() {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);

  // GET
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  // POST
  const addUser = async (data) => {
    console.log("POST START");

    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    console.log("POST RESPONSE");

    const newUser = await res.json();
    setUsers((prev) => [...prev, newUser]);
    setOpen(false);
  };

  return (
    <div className="p-6">
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add photo
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
