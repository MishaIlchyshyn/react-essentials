import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import { EXAMPLES_TABS } from "./data";

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
            { EXAMPLES_TABS.map((tab) => (
              <TabButton
                key={tab.id}
                isActive={activeTab === tab.id}
                onSelect={() => handleTabClick(tab.id)}
              >
                {tab.title}
              </TabButton>
            ))}
          </menu>

          {content}
        </section>
      </main>
    </>
  );
}

export default App;
