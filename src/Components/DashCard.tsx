import styled from "@emotion/styled";
import ProjectsIcon from "../icons/ProjectsIcon.svg?react";
import ResumeIcon from "../icons/ResumeIcon.svg?react";
import XboxIcon from "../icons/XboxLogo.svg?react";
import SkillsIcon from "../icons/SkillsIcon.svg?react";

import { TextBody } from "./Typography";
import Profile from "./Profile";

export default () => (
  <div className="flex justify-center h-[80vh] lg:h-auto">
    <div className="relative w-[40vh] lg:w-full lg:pb-[50%]">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <div className="flex lg:flex-row flex-col h-full">
          <FirstSection className="lg:flex-col flex-row">
            <a href="/Jayden_Whiley_CV.pdf">
              <DashSquare className="flex flex-col">
                <ResumeIcon title="Resume" />
                <TextBody className="p-2 text-xl">Resume</TextBody>
              </DashSquare>
            </a>
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
          <LastSection className="lg:flex-col flex-row">
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
  </div>
);

const FirstSection = styled.div({
  flex: 1,
  display: "flex",
});

const MiddleSection = styled.div({
  flex: 2,
  display: "flex",
});

const LastSection = styled.div({
  flex: 1,
  display: "flex",
});

const DashSquare = styled.div({
  minWidth: 0,
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
