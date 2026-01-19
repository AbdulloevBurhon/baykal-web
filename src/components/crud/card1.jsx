function Card({ user }) {
  return (
    <div className="w-48 p-4 border rounded">
      <h3 className="font-semibold">{user.name}</h3>
      <p className="text-sm text-gray-500">{user.desc}</p>
    </div>
  );
}

export default Card;
