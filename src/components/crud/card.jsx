function Card({ user }) {
  return (
    <div className="w-100">
      <img src={user.img} alt="" />
      <h1>{user.name}</h1>
      <p>{user.desc}</p>
    </div>
  );
}

export default Card;
