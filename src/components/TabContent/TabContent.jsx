import { EXAMPLES } from "../../data";
import "./TabContent.css";

export default function TabContent({ activeTab }) {
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

  return content;
}
