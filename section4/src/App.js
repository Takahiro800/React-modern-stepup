import "./App.css";
import { CssModules } from "./components/CssModules";
import { InlineStyle } from "./components/inlineSytle";
import { StyledJsx } from "./components/StyledJsx";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
    </div>
  );
}
