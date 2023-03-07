import "./app.css";
import { Card } from "./tailwind/components/";

export default function App() {
  return (
    <div className="container">
      <div className="implementation-option" id="bootstrap">
        Bootstrap
      </div>
      <div className="implementation-option" id="material-ui">
        Material UI
      </div>
      <div className="implementation-option" id="tailwind">
        <Card />
      </div>
    </div>
  );
}
