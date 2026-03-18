// import { logo } from "/src/assets/react-core-concepts.png";

const description = ["Fundamentals", "Crucila", "Core", "Easy", "Hard"];

function getRanDomInt(number) {
  return Math.floor(Math.random() * number);
}

let x = getRanDomInt(5);

export function Header() {
  return (
    <>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials {x}</h1>
        <p>
          {description[getRanDomInt(5)]} React concepts you will need for almost
          any app you are going to build!
        </p>
      </header>
    </>
  );
}
