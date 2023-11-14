import ProfilePicture from "../images/ProfilePicture.jpg";
import { TextBody } from "./Typography";

export default () => {
  return (
    <>
      <div className="p-5 flex flex-row justify-center items-center h-1/2">
        <img src={ProfilePicture} className="max-w-full max-h-full rounded-full object-cover self-center" />;
      </div>
      <div className="p-5 flex flex-col justify-center items-center">
        <TextBody className="text-3xl mb-5 drop-shadow-lg">Jayden Whiley</TextBody>
        <TextBody>Software Engineer</TextBody>
        <TextBody>B.E.E | QUT</TextBody>
        <TextBody>Australia</TextBody>
      </div>
    </>
  );
};
