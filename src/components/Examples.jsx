import { useState } from "react";
import { EXAMPLES } from "../data";

export function Examples() {
  const [selectedButton, setSelectedButton] = useState("components");

  function handleClick(event) {
    setSelectedButton(event.target.value);
  }

  return (
    <>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <button value={"components"} onClick={handleClick}>
            components
          </button>
          <button value={"jsx"} onClick={handleClick}>
            jsx
          </button>
          <button value={"props"} onClick={handleClick}>
            props
          </button>
          <button value={"state"} onClick={handleClick}>
            state
          </button>
        </menu>
        <div id="tab-content">
          <h3>{EXAMPLES[selectedButton].title}</h3>
          <p>{EXAMPLES[selectedButton].description}</p>
          <pre>
            <code>{EXAMPLES[selectedButton].code}</code>
          </pre>
        </div>
      </section>
    </>
  );
}
