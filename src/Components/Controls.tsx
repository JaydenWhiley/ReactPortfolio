import styled from "@emotion/styled";
import Button from "./Button";
import { TextBody } from "./Typography";
import NavigationIcon from "../icons/DPadIcon.svg?react";

export default () => {
  return (
    <div className="ml-2 mt-5 hidden lg:flex flex-row">
      <HoverButton className="flex flex-row mr-10">
        <Button>
          <TextBody style={{ opacity: 0.8, textShadow: "rgb(187, 187, 187) 3px 1px 3px, rgb(255, 255, 255) -1px 2px 5px" }} className="text-3xl">
            A
          </TextBody>
        </Button>
        <div className="ml-3 flex flex-col justify-center" style={{ textShadow: "1px 2px 2px black" }}>
          <TextBody className="text-2xl">Select</TextBody>
        </div>
      </HoverButton>
      <HoverButton className="flex flex-row mr-10">
        <Button Variant="Red">
          <TextBody style={{ opacity: 0.8, textShadow: "rgb(187, 187, 187) 3px 1px 3px, rgb(255, 255, 255) -1px 2px 5px" }} className="text-3xl">
            B
          </TextBody>
        </Button>
        <div className="ml-3 flex flex-col justify-center" style={{ textShadow: "1px 2px 2px black" }}>
          <TextBody className="text-2xl">Back</TextBody>
        </div>
      </HoverButton>
      <HoverButton className="flex flex-row">
        <NavigationIcon style={{ width: 40, height: 40 }} />
        <div className="ml-3 flex flex-col justify-center" style={{ textShadow: "1px 2px 2px black" }}>
          <TextBody className="text-2xl">Navigation</TextBody>
        </div>
      </HoverButton>
    </div>
  );
};

const HoverButton = styled.div({
  opacity: 0.6,
  "&:hover": {
    opacity: 1,
  },
  transition: "transform 0.1s ease",
  "&:active": {
    transform: "scale(0.95)",
  },
});
