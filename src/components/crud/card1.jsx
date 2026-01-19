function Card({ user }) {
  return (
    <div className="w-32 p-3 border rounded text-center">
      <img
        src={user.photo}
        alt="avatar"
        className="w-20 h-20 rounded-full mx-auto object-cover"
      />
    </div>
  );
}

export default Card;
