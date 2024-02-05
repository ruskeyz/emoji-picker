import { Input } from "baseui/input";
import { useEffect, useRef, useState } from "react";
import { emojiData } from "../mockData";
import { StatefulMenu } from "baseui/menu";
import { styled } from "styletron-react";

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

const LayoutInput = styled("div", {
  position: "relative",
});

const InputWrapper = styled("div", {
  position: "absolute",
  top: "50px",
  width: "100%",
});

function FancyInput({ placeholder }) {
  const [data, setData] = useState(emojiData);
  const [inputValue, setInputValue] = useState("");
  const [showPopover, setShowPopover] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    //reset search
    if (inputValue.length === 0) {
      setData(emojiData);
    }
    //check if space, reset data
    if (inputValue.includes(" ")) {
      setData(emojiData);
    }
    if (data.length === 0) {
      setShowPopover(false);
    }
    // handle clicking outside the query inside Input
    const handleClickOutside = () => {
      if (inputRef.current) {
        const cursorPosition = inputRef.current.selectionStart;
        const cursorInsideQuery = inputRef.current.value
          .substring(0, cursorPosition)
          .includes(":");

        if (!cursorInsideQuery) {
          setShowPopover(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputValue, data]);

  const handleInputChange = (e) => {
    const input = e.target.value;
    setInputValue(input);
    const searchResults = search(data, extractQuery(input));
    setData(searchResults);
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

      // keep typing after emoji
      inputRef.current && inputRef.current.focus();
      return match ? prev.replace(match[0], emoji) : prev + emoji;
    });
  };

  return (
    <LayoutInput>
      {showPopover ? (
        <InputWrapper>
          <StatefulMenu
            items={data}
            onItemSelect={({ item }) => handleEmojiClick(item.Browser)}
            overrides={{
              List: {
                style: {
                  height: "300px",
                },
              },
              Option: {
                props: {
                  getItemLabel: (item) =>
                    item.Browser + ":" + item.CLDR_Short_Name,
                },
              },
            }}
          />
        </InputWrapper>
      ) : null}
      <Input
        placeholder={placeholder}
        value={inputValue}
        inputRef={inputRef}
        onChange={(e) => handleInputChange(e)}
      />
    </LayoutInput>
  );
}

export { FancyInput };
