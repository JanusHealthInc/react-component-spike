import "./app.css";
import BootstrapTypeahead from "./components/bootstrap/Typeahead";
import MUITypeahead from "./components/material-ui/Typeahead";
import TailwindTypeahead from "./components/tailwind/Typeahead";

export default function App() {
  return (
    <div className="container">
      <div className="implementation-option" id="bootstrap">
        <BootstrapTypeahead />
      </div>
      <div className="implementation-option" id="material-ui">
        <MUITypeahead />
      </div>
      <div className="implementation-option" id="tailwind">
        <TailwindTypeahead />
      </div>
    </div>
  );
}
