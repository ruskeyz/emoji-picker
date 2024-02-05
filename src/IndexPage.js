import { Heading, HeadingLevel } from "baseui/heading";
import { ParagraphMedium } from "baseui/typography";

import { FancyInput } from "./candidate/FancyInput";

function IndexPage() {
  return (
    <>
      <HeadingLevel>
        <Heading>Welcome! 🙌</Heading>
        <HeadingLevel>
          <Heading>Overview</Heading>
          <ParagraphMedium>
            Welcome to the Let's Do This Front end coding challenge. Your
            mission, should you choose to accept it, is to add an emoji picker
            to the <code>input</code> element below.
          </ParagraphMedium>
          <FancyInput placeholder={"Please make me fancy 🤩"} />
          <ParagraphMedium>
            The effect we're looking for is something similar to how the input
            bar works in Slack, as per the video below:
          </ParagraphMedium>
          <video controls loop autoPlay>
            <source src="slack_input_with_emoji.mov" type="video/mp4" />
            <p>
              Your browser doesn't support HTML5 video. Open the video in your
              file explorer instead?
            </p>
          </video>
          <Heading>What's Required</Heading>
          <ParagraphMedium>
            Specific features we're looking for:
          </ParagraphMedium>
          <ul>
            <li>
              An emoji picker that's triggered where the user types a colon (:)
              character followed by 2 or more alphnumeric characters
            </li>
            <li>The menu should remain open until either:</li>
            <ul>
              <li>The user selects an emoji;</li>
              <li>The user types a space;</li>
              <li>
                The user types a character sequence that doesn't match an emoji;
              </li>
              <li>The user moves the cursor to another part of the input;</li>
            </ul>
            <li>
              When the user selects an emoji, it should be appended to the value
              of the input, replacing the string that triggered the picker
            </li>
          </ul>
          <Heading>How?</Heading>
          <ParagraphMedium>
            Please add your code to the <code>FancyInput.js</code> file
            provided. Currently it just displays the{" "}
            <a
              href="https://baseweb.design/components/input/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Base Web Input component
            </a>
            .
          </ParagraphMedium>
          <ParagraphMedium>
            Along with your code, please include an overview of your solution
            (including any areas you didn't get to or that still need polish) in
            a text or markdown file.
          </ParagraphMedium>
          <ParagraphMedium>
            You can find a list of all the emoji from the unicode website{" "}
            <a
              href="https://unicode.org/emoji/charts/full-emoji-list.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            . You'll probably need to store them in some other format tho 😱.
            Given there are nearly two thousand of them you may not want to copy
            and paste them all by hand 😂. Add any code you use to achieve this
            to a file in the 'candidate' directory please 🙌.
          </ParagraphMedium>
          <ParagraphMedium>
            You may use any UI components from{" "}
            <a
              href="https://baseweb.design/"
              target="_blank"
              rel="noopener noreferrer"
            >
              baseui
            </a>{" "}
            to help you. (You may want to look through the 'Pickers' and
            'Surfaces' components 😎). You may also create the UI from scratch
            if you prefer, totally up to you!
          </ParagraphMedium>
          <ParagraphMedium>
            You may also use any lower level style dependencies to assist you,
            although it isn't expected or required that you do. By 'lower level'
            I mean eg if you want to store something in local storage for some
            reason feel free to use a more convienient API for that from npm.
          </ParagraphMedium>
          <ParagraphMedium>
            <b>
              Please don't find an emoji input picker and just use that, that's
              cheating! 😂
            </b>
          </ParagraphMedium>
          <ParagraphMedium>
            Use your judgement. If you have any questions about this just ask,
            or use the dependency but make sure you can convince me you know how
            it works! 🚀
          </ParagraphMedium>
          <Heading>🍀 Good Luck! 🍀</Heading>
        </HeadingLevel>
      </HeadingLevel>
    </>
  );
}

export { IndexPage };
