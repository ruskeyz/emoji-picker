import { Input } from "baseui/input";
import { useState } from "react";
import { emojiData } from "../mockData";
//
//Number: 1,
//Code: "U+1F600",
//Browser: "😀",
//Sample: "😀",
//GMail: "😀",
//SB: "—",
//DCM: "—",
//KDDI: "—",
//CLDR_Short_Name: "grinning face",
//

function FancyInput({ placeholder }) {
  const [data, setData] = useState(emojiData);
  const [emoji, setEmoji] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [showPopover, setShowPopover] = useState(false);
  //const [isPopoverOpen, setPopoverOpen] = useState(false);

  function search(docs, term) {
    const result = [];

    for (const doc of docs) {
      if (doc.CLDR_Short_Name.includes(term)) {
        result.push(doc);
      }
    }

    return result;
  }

  const handleInputChange = (e) => {
    const input = e.target.value;
    setInputValue(input);
    //setEmoji(inputValue);
    const searchResults = search(data, input.slice(1));
    setData(searchResults);
    console.log(searchResults, input.slice(1), "HERE");
    // Regular expression to match a colon followed by 2 or more alphanumeric characters
    const regex = /:(\w{2,})$/;

    if (regex.test(input) && !showPopover) {
      setShowPopover(true);
    } else if (!regex.test(input) && showPopover) {
      setShowPopover(false);
    }
  };

  const handleEmojiClick = (emoji) => {
    setEmoji(emoji);
    setShowPopover(false);
    setInputValue(emoji);
  };

  return (
    <>
      {showPopover ? (
        <div>
          <p>Select</p>
          {data.map((emoji) => {
            return (
              <div key={emoji.Number}>
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
      />
    </>
  );
}

export { FancyInput };
