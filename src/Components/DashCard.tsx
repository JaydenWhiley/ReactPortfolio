import styled from "@emotion/styled";
import ProjectsIcon from "../icons/ProjectsIcon.svg?react";
import ResumeIcon from "../icons/ResumeIcon.svg?react";
import XboxIcon from "../icons/XboxLogo.svg?react";
import SkillsIcon from "../icons/SkillsIcon.svg?react";

import { TextBody } from "./Typography";
import Profile from "./Profile";

export default () => (
  <div className="relative w-full pb-[50%]">
    <div className="absolute top-0 left-0 right-0 bottom-0">
      <div className="flex flex-row h-full">
        <FirstSection>
          <DashSquare className="flex flex-col">
            <ResumeIcon title="Resume" />
            <TextBody className="p-2 text-xl">Resume</TextBody>
          </DashSquare>
          <DashSquare className="flex flex-col">
            <SkillsIcon title="Skills" />
            <TextBody className="p-2 text-xl">Skills</TextBody>
          </DashSquare>
        </FirstSection>
        <MiddleSection>
          <DashSquare className="mb-1">
            <Profile />
          </DashSquare>
        </MiddleSection>
        <LastSection>
          <DashSquare className="flex flex-col">
            <ProjectsIcon title="Projects" />
            <TextBody className="p-2 text-xl">Projects</TextBody>
          </DashSquare>
          <DashSquare className="flex flex-col">
            <XboxIcon title="Hobbies" />
            <TextBody className="p-2 text-xl">Hobbies</TextBody>
          </DashSquare>
        </LastSection>
      </div>
    </div>
  </div>
);

const FirstSection = styled.div({
  flex: 1,
  display: "flex",
  flexDirection: "column",
});

const MiddleSection = styled.div({
  flex: 2,
  display: "flex",
});

const LastSection = styled.div({
  flexDirection: "column",
  flex: 1,
  display: "flex",
  overflow: "hidden",
});

const DashSquare = styled.div({
  minHeight: 0,
  flex: 1,
  margin: 2,
  background: "#5aa713",
  aspectRatio: "1 / 1",
  border: "solid 2px #5aa713",
  // borderRadius: 5,
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.35)",
  "&:hover": {
    border: "2px solid white",
  },
  "&:active": {
    opacity: 0.5,
    transform: "scale(0.95)",
  },
  transition: "transform 0.1s ease",
});
