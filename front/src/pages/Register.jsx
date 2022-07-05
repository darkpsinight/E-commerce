import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://static.thehoneycombers.com/wp-content/uploads/sites/2/2020/03/sustainable-fashion-singapore.png");
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })};
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border: 1px solid teal;
  &:focus {
    border: 3px solid teal;
  }
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  &:focus{
    color: black;
  }
`;
const ReadMore = styled.a`
  font-weight: 800;
  cursor: pointer;
  text-decoration: none;
`;

const Register = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input placeholder="name" />
            <Input placeholder="last name" />
            <Input placeholder="username" />
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Input placeholder="confirm password" />
            <Agreement>
              By creating an account, you agree to the Terms of Service. For
              more information about ShopTn's privacy practices, see the
              ShopTn's{" "}
              <ReadMore href="https://www.termsandconditionsgenerator.com/live.php?token=ku8NmtZHqWSXSMQZU5MNOpuCYNixoISz">
                {" "}
                Privacy Policy.
              </ReadMore>
            </Agreement>
            <Button>CREATE</Button>
          </Form>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Register;
