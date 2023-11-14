import styled from "@emotion/styled";

interface IProps {
  Variant?: "Green" | "Red";
}

const RedGradient = "linear-gradient(214deg, rgb(212 23 23), rgb(152 0 10))";
const GreenGradient = "linear-gradient(214deg, rgb(131, 198, 29), rgb(76 133 0))";

export default ({ children, Variant }: React.PropsWithChildren<IProps>) => {
  return (
    <ButtonContainer style={{ background: Variant == "Red" ? RedGradient : GreenGradient }}>
      <div className="flex justify-center items-center" style={{ position: "absolute", top: 1, left: 0, width: 40, height: 40 }}>
        {children}
      </div>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div({
  height: 40,
  width: 40,
  borderRadius: 20,
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.35)",
  position: "relative",
});
