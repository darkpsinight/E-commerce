import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })};
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
  font-weight: 500;
  text-align: justify;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;
const ReadMore = styled.a`
  font-weight: 800;
  cursor: pointer;
  text-decoration: none;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })};
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })};
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const ContactItemmail = styled.a`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
`;
const Payment = styled.img`
  width: 60%;
  margin-left: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ShopTn</Logo>
        <Desc>
          These terms and conditions outline the rules and regulations for the
          use of ShopTn's Website, located at www.ShopTn.tn. By accessing this
          website we assume you accept these terms and conditions. Do not
          continue to use ShopTn if you do not agree to take all of the terms
          and conditions stated on this page.
          <ReadMore href="https://www.termsandconditionsgenerator.com/live.php?token=ku8NmtZHqWSXSMQZU5MNOpuCYNixoISz">
            {" "}
            Read More about Terms & Conditions:
          </ReadMore>
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          RHVQ+684, Hammam sousse 2, Sousse, Tunisia
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +216 73 254 665
        </ContactItem>
        <ContactItemmail href="mailto:contact@shoptn.tn?subject = Feedback&body = Message">
          <MailOutline style={{ marginRight: "10px", color: "black" }} />
          contact@shoptn.tn
        </ContactItemmail>
        <Payment src="https://www.isterh2019.com/assets/img/conference/icon-cc.png" />
      </Right>
    </Container>
  );
};

export default Footer;
