import { useState } from "react";

import Header from "./Header";
import CoreConcept from "./CoreConcept";
import TabButton from "./TabButton";

import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";

function App() {
  const [activeTab, setActiveTab] = useState();

  function handleTabClick(tabName) {
    setActiveTab(tabName);
  }

  let content = <p>Select Example</p>;

  if (activeTab) {
    content = (
      <div id="tab-content">
        <h3>{EXAMPLES[activeTab].title}</h3>
        <p>{EXAMPLES[activeTab].description}</p>
        <pre>
          <code>{EXAMPLES[activeTab].code}</code>
        </pre>
      </div>
    );
  }

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

          <menu>
            <TabButton
              isActive={activeTab === "components"}
              onSelect={() => handleTabClick("components")}>Components
            </TabButton>
            <TabButton
              isActive={activeTab === "jsx"}
              onSelect={() => handleTabClick("jsx")}>JSX
            </TabButton>
            <TabButton
              isActive={activeTab === "props"}
              onSelect={() => handleTabClick("props")}>Props
            </TabButton>
            <TabButton
              isActive={activeTab === "state"}
              onSelect={() => handleTabClick("state")}>State
            </TabButton>
          </menu>

          {content}
        </section>
      </main>
    </>
  );
}

export default App;
