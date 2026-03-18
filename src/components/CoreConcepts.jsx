import { Card } from "./Card.jsx";
import { CORE_CONCEPTS } from "../data.js";

export function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        <Card
          title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
          src={CORE_CONCEPTS[0].image}
        />
        <Card
          title={CORE_CONCEPTS[1].title}
          description={CORE_CONCEPTS[1].description}
          src={CORE_CONCEPTS[1].image}
        />
        <Card
          title={CORE_CONCEPTS[2].title}
          description={CORE_CONCEPTS[2].description}
          src={CORE_CONCEPTS[2].image}
        />
        <Card
          title={CORE_CONCEPTS[3].title}
          description={CORE_CONCEPTS[3].description}
          src={CORE_CONCEPTS[3].image}
        />
      </ul>
    </section>
  );
}
