import "./styles.css";
import { useState } from "react";
const activityDictionary = {
  "⚽": "Soccer Ball",
  "⚾": "Baseball",
  "🥎": "Softball",
  "🏀": "Basketball",
  "🏐": "Volleyball",
  "🏈": "American Football",
  "🏉": "Rugby Football",
  "🎾": "Tennis",
  "🥏": "Flying Disc",
  "🎳": "Bowling",
  "🏏": "Cricket Game",
  "🏑": "Field Hockey",
  "🏒": "Ice Hockey",
  "🏓": "Ping Pong",
  "🏸": "Badminton",
  "🥊": "Boxing Glove"
};
var activityList = Object.keys(activityDictionary);
export default function App() {
  var [meaning, setMeaning] = useState("");
  function inputChangeHandler(event) {
    var word = event.target.value;
    if (word in activityList === false)
      meaning = "Sorry, we do not have this in our database.";
    else meaning = activityDictionary[word];

    setMeaning(meaning);
  }
  function clickHandler(item) {
    meaning = activityDictionary[item];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>emojisplained</h1>
      <input onChange={inputChangeHandler} />
      <div>
        {" "}
        <br /> {meaning}{" "}
      </div>
      <ul>
        {activityList.map(function (item) {
          return (
            <li
              key={item}
              onClick={() => {
                clickHandler(item);
              }}
            >
              {" "}
              {item}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
