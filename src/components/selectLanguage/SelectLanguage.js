import React, { useEffect, useState } from "react";
import "./SelectLanguage.scss";
import down from "../../assets/icons/down.png";
import { languagess } from "../../data";

const SelectLanguage = () => {
  const [languages, setLanguages] = useState(languagess);
  const [SelectLanguage, setSelectLanguage] = useState(languages[0]);

  const selectLanguageHandler = (language) => {
    setSelectLanguage(language);
  };

  useEffect(() => {
    let l = [...languages];
    l.map((language) => {
      if (language.name === SelectLanguage.name) {
        language.isSelected = true;
      } else {
        language.isSelected = false;
      }
      return language;
    });

    l.sort((a, b) => b.isSelected - a.isSelected);

    setLanguages(l);
  }, [SelectLanguage]);

  return (
    <div className="select-language">
      <div className="languages">
        {languages.map((language, index) => (
          <div
            className="select"
            key={index}
            onClick={() => selectLanguageHandler(language)}
          >
            <img src={language.image} alt="flag-en" />
            {language.isSelected === true ? (
              <img src={down} alt="icon-down" />
            ) : (
              <p>{language.name}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectLanguage;
