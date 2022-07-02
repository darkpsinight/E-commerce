import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: coral;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  margin: auto;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex; 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.div`
  flex: 1;
  padding: 50px;
`;

const Description = styled.div`
  flex: 1;
  padding: 50px;
`;

const Button = styled.div`
  flex: 1;
  padding: 50px;
`;

const Slider = () => {
  return (
    <div>
      <Container>
        <Arrow direction="left">
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper>
          <Slide>
            <ImgContainer>
              <Image src="https://i.ibb.co/LYRx42N/5.jpg" />
            </ImgContainer>
            <InfoContainer></InfoContainer>
          </Slide>
        </Wrapper>
        <Arrow direction="right">
          <ArrowRightOutlined />
        </Arrow>
      </Container>
    </div>
  );
};

export default Slider;
