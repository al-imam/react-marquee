import "wipe.css";
import "./styles.css";
import { InteractiveMarquee } from "./components/Marquee";

export default function App() {
  const handleOnclick = () => {
    console.log("hello");
  };
  return (
    <InteractiveMarquee>
      <button onClick={handleOnclick} draggable="false">
        Hello1
      </button>
      <button onClick={handleOnclick} draggable="false">
        Hello1
      </button>
      <button onClick={handleOnclick} draggable="false">
        Hello1
      </button>
      <button onClick={handleOnclick} draggable="false">
        Hello1
      </button>
      <button onClick={handleOnclick} draggable="false">
        Hello1
      </button>
    </InteractiveMarquee>
  );
}
