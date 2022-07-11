import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const KEY =
  "pk_test_51LJh5TCx0CP76PWrc0hRSESuLLs9TSjpI7bUnDdgu4r0wueKNfAD7ehcOnxQJryGF8RZzvcLLVS4w4zKiA3kkvbF00x8voeXAS";

const Pay = () => {
  const [stripeToken, setstripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setstripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        history.push("/success");
      } catch (err) {
        console.log(err.response.data);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, history]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {stripeToken ? (
        <span>Processing. Please wait...</span>
      ) : (
        <StripeCheckout
          name="ShopTn"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWHNj9PK7N9WLGXRF5FDbA7XdtjH6caLiwnBW2__PWC3crRyS_XiocBVKnP9GONqvVp9A"
          description="Your total is 30 DT"
          billingAddress
          shippingAddress
          amount={3000}
          currency="TTD"
          token={onToken}
          stripeKey={KEY}
        >
          <button
            style={{
              border: "none",
              width: 120,
              borderRadius: 5,
              padding: "20px",
              backgroundColor: "black",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            PayNow
          </button>
        </StripeCheckout>
      )}
    </div>
  );
};

export default Pay;
