export function Card({ title, description, src }) {
  return (
    <>
      <li>
        <img src={src}></img>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    </>
  );
}
