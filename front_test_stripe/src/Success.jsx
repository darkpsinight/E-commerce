const Success = () => {
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
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          width: 120,
          marginBottom: "20px",
          borderRadius: 5,
          padding: "20px",
          backgroundColor: "teal",
          color: "white",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Successfull.
      </span>
      Your order is being prepared. Thanks for choosing ShopTn.
    </div>
  );
};

export default Success;
