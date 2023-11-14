import styled from "@emotion/styled";
import ProjectsIcon from "../icons/ProjectsIcon.svg?react";
import ResumeIcon from "../icons/ResumeIcon.svg?react";
import XboxIcon from "../icons/XboxLogo.svg?react";
import Typography, { TextBody } from "./Typography";
import Profile from "../images/profile";

export default () => (
  <div className="relative w-full pb-[50%]">
    <div className="absolute top-0 left-0 right-0 bottom-0">
      <div className="grid grid-cols-4 grid-rows-2 h-full gap-1">
        <DashSquare className="flex flex-col col-start-1 col-end-2 row-start-1 row-end-2">
          <ResumeIcon title="Resume" />
          <TextBody className="p-2 text-xl">Resume</TextBody>
        </DashSquare>
        <DashSquare className="flex flex-col col-start-1 col-end-2 row-start-2 row-end-3">
          <ProjectsIcon title="Projects" />
          <TextBody className="p-2 text-xl">Projects</TextBody>
        </DashSquare>

        <DashSquare className="col-start-2 col-end-4 row-start-1 row-end-4 mb-1">
          <Profile />
        </DashSquare>

        <DashSquare className="flex flex-col col-start-4 col-end-5 row-start-1 row-end-2">
          <XboxIcon />
          <TextBody className="p-2 text-xl">Hobbies</TextBody>
        </DashSquare>
        <DashSquare className="flex flex-col col-start-4 col-end-5 row-start-2 row-end-3">
          <XboxIcon title="Hobbies" />
          <TextBody className="p-2 text-xl">Hobbies</TextBody>
        </DashSquare>
      </div>
    </div>
  </div>
);

const DashSquare = styled.div({
  background: "#5aa713",
  border: "solid 2px #5aa713",
  // borderRadius: 5,
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.35)",
  "&:hover": {
    border: "2px solid white",
  },
  "&:active": {
    opacity: 0.5,
  },
});
