import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import TabContent from "./components/TabContent/TabContent.jsx";
import { CORE_CONCEPTS, EXAMPLES_TABS } from "./data";

function App() {
  const [activeTab, setActiveTab] = useState();

  function handleTabClick(tabName) {
    setActiveTab(tabName);
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

          <TabContent activeTab={activeTab} />
        </section>
      </main>
    </>
  );
}

export default App;
