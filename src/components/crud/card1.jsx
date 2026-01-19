import def from "./img/def.png";

function Card({ user }) {
  return (
    <div
      className="
      w-55
      bg-white
      rounded-2xl
      shadow-md
      p-6
      flex flex-col
      items-center
      text-center
      gap-4
    "
    >
      {/* Аватар */}
      <img
        src={user.photo || def}
        alt="avatar"
        className="w-16 h-16 rounded-full"
      />

      {/* Имя */}
      <h3 className="text-blue-600 font-semibold">{user.name}</h3>

      {/* Описание */}
      <p className="text-gray-500 text-sm leading-relaxed">
        {" "}
        {user.description}
      </p>

      {/* Дата */}
      <span className="text-xs text-gray-400">01.02--03.02</span>
      {/* 👇 ЭТО РЕШАЕТ ВСЁ */}
      <div className="mt-auto flex gap-3 justify-center">
        <button className="px-4 py-1 bg-red-500 text-white rounded-md">
          Delete
        </button>
        <button className="px-4 py-1 bg-blue-500 text-white rounded-md">
          Edit
        </button>
      </div>
    </div>
  );
}

export default Card;
