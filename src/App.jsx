import Header from "./Header";
import CoreConcept from "./CoreConcept";

import { CORE_CONCEPTS } from "./data";

function App() {
  return (
    <>
      <Header />

      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>

          <ul>
            {CORE_CONCEPTS.map((item) => (<CoreConcept key={item.title} {...item} />))}
          </ul>
        </section>

        <section id='examples'>
          <h2>Examples</h2>
        </section>
      </main>
    </>
  );
}

export default App;
