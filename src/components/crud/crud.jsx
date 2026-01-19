import { useEffect, useState } from "react";
import Dialog from "./dialog";
import Card from "./card";

function Crud() {
  const [user, setUser] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const api =
    "https://68ff6375e02b16d1753dba14.mockapi.io/api/adress/usersInfo";

  useEffect(() => {
    async function getData() {
      const res = await fetch(api);
      const data = await res.json();
      setUser(data);
    }
    getData();
  }, []);

  const addUser = (newUser) => {
    setUser((prev) => [...prev, newUser]);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Add</button>

      {isOpen && <Dialog close={() => setIsOpen(false)} onSubmit={addUser} />}

      <div className="flex flex-wrap gap-4">
        {user.map((item, index) => (
          <Card key={index} user={item} />
        ))}
      </div>
    </div>
  );
}

export default Crud;
