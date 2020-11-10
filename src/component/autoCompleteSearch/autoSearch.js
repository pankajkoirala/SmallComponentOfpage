import React, { useEffect, useState } from "react";
import options from "../../asets/options.json";

const SearchSelect = (props) => {
  const [value, setValue] = useState("");
  const [filterdOptions, setFilteredOptions] = useState([]);
  const { name, options } = props;

  useEffect(() => {
    document.addEventListener(
      "click",
      (e) => {
        if (e.target.id !== "searchSelect") {
          setFilteredOptions([]);
        }
      },
      true
    );
  }, []);

  const firstIndex = 0;

  const changeOptions = (text) => {
    const splittedWord = text.split("");
    setFilteredOptions(
      options.filter((option) =>
        splittedWord.every((letter) => {
          return option.name.toLowerCase().includes(letter.toLowerCase());
        })
      )
    );
    setValue(text);
  };

  return (
    <div id="searchSelect" className="container">
      <input
        type="text"
        onClick={() => {
          if (filterdOptions.length === firstIndex) {
            setFilteredOptions(options);
          }
        }}
        value={value}
        onChange={(e) => {
          changeOptions(e.target.value);
        }}
        name={name}
        className="content"
      />
      <div className="optionsContainer">
        {filterdOptions.map((option, i) => (
          <div
            key={i}
            className="options"
            onClick={() => {
              setValue(option.name);
              setFilteredOptions([]);
            }}
          >
            {option.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchSelect;
