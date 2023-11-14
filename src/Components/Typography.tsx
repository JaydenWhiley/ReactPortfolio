import styled from "@emotion/styled";

export default ({ children }: React.PropsWithChildren<{}>) => {
  return <TextBody>{children}</TextBody>;
};

export const TextBody = styled.span({
  fontFamily: "Aspria",
});
