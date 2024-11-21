import { useState } from "react";
import mob_pattern from "./assets/images/pattern-divider-mobile.svg";
import desk_pattern from "./assets/images/pattern-divider-desktop.svg";
import icon_dice from "./assets/images/icon-dice.svg";

const App = () => {
  const [advices, setAdvices] =
    useState<string>(`It is easy to sit up and take notice, what's difficult is getting up
  and taking action`);

  const [advicesId, setAdvicesId] = useState<string>("117");

  return (
    <div className="grid place-items-center text-center h-100vh bg-Dark-Blue">
      <div className="bg-Dark-Grayish-Blue w-400px md:w-500px p-7 rounded-xl relative">
        <h1 className="text-Neon-Green py-5">ADVICE #{advicesId}</h1>
        <p className="text-Light-Cyan text-28px px-5 mb-7">"{advices}"</p>
        <div className="grid place-items-center mb-7">
          <img className="hidden md:block" src={desk_pattern} alt="" />
          <img className="md:hidden" src={mob_pattern} alt="" />
        </div>
        <button
          onClick={() => {
            fetch("https://api.adviceslip.com/advice")
              .then((res) => res.json())
              .then((data) => {
                setAdvices(data.slip.advice);
                setAdvicesId(data.slip.id);
              });
          }}
        >
          <div className="bg-Neon-Green w-14 h-14 place-items-center grid rounded-full absolute bottom-0 left-44 md:left-56">
            <img src={icon_dice} alt="icon dice" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default App;
