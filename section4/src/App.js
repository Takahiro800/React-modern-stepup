import "./App.css";
import { CssModules } from "./components/CssModules";
import { InlineStyle } from "./components/inlineSytle";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
    </div>
  );
}
