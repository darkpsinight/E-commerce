import { useEffect, useState } from "react";
/* import { useSelector } from "react-redux"; */
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";

const Success = () => {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.products;
  /* const currentUser = useSelector((state) => state.user.currentUser); */
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("orders/add", {
          userId: "62c6fac65a4306ac88ae223d" /* currentUser._id */,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    data && createOrder();
  }, [cart, data /* , currentUser */]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
    </div>
  );
};

export default Success;
