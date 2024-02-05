import { Input } from "baseui/input";
import { useEffect, useState } from "react";
import { emojiData } from "../mockData";
import { StatefulMenu } from "baseui/menu";

export const search = (docs, term) => {
  const result = [];

  for (const doc of docs) {
    if (doc.CLDR_Short_Name.includes(term)) {
      result.push(doc);
    }
  }
  return result;
};

export const extractQuery = (input) => {
  // trim and extract the query
  let colonIndex = input.indexOf(":");
  let query;
  if (!colonIndex !== -1) {
    query = input.substring(colonIndex + 1).trim();
  }
  return query;
};
export const REGEX_CONSTANT = /:(\w{2,})$/;

function FancyInput({ placeholder }) {
  const [data, setData] = useState(emojiData);
  const [inputValue, setInputValue] = useState("");
  const [showPopover, setShowPopover] = useState(false);

  useEffect(() => {
    //reset search
    if (inputValue.length === 0) {
      setData(emojiData);
    }
    //check if space, reset data
    // TODO inconsistency
    if (inputValue.includes(" ")) {
      setData(emojiData);
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    const input = e.target.value;
    setInputValue(input);
    const searchResults = search(data, extractQuery(input));
    setData(searchResults);
    console.log(searchResults, extractQuery(input), "HERE");
    // Regular expression to match a colon followed by 2 or more alphanumeric characters
    if (REGEX_CONSTANT.test(input) && !showPopover) {
      setShowPopover(true);
    } else if (!REGEX_CONSTANT.test(input) && showPopover) {
      setShowPopover(false);
    }
  };

  const handleEmojiClick = (emoji) => {
    setShowPopover(false);
    setInputValue((prev) => {
      // find the subtring after :
      const match = prev.match(REGEX_CONSTANT);

      return match ? prev.replace(match[0], emoji) : prev + emoji;
    });
  };

  const handleEmojiPickerMouseEnter = () => {
    setShowPopover(true);
  };

  const handleEmojiPickerMouseLeave = () => {
    setShowPopover(false);
  };

  return (
    <>
      {showPopover ? (
        <div>
          <p>Select</p>
          <StatefulMenu items={data} labelKey="CLDR_Short_Name" />
          {data.map((emoji) => {
            return (
              <div
                key={emoji.Number}
                onMouseEnter={handleEmojiPickerMouseEnter}
              >
                <button
                  key={emoji.Number}
                  onClick={() => handleEmojiClick(emoji.Browser)}
                >
                  {emoji.Browser}
                </button>
              </div>
            );
          })}
        </div>
      ) : null}
      <Input
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => handleInputChange(e)}
        onMouseEnter={handleEmojiPickerMouseEnter}
        onMouseLeave={handleEmojiPickerMouseLeave}
      />
    </>
  );
}

export { FancyInput };
