import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const OrderContainer = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

const OrderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px; /* Adjusted padding for smaller screens */
  border-radius: 12px;
  border: 2px solid #3d5a80;
  transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
  position: relative;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 576px) {
    padding: 15px; /* Adjusted padding for extra small screens */
  }
`;
const OrderDetails = styled.div`
  flex-grow: 1;
  text-align: left;
`;

const OrderDate = styled.div`
  font-size: 14px;
  color: #3d5a80;
`;

const OrderStatus = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: white;
  padding: 8px;
  border-radius: 8px;
  font-weight: bold;
  ${({ status }) => {
    switch (status) {
      case "Processing":
        return "background-color: lightcoral;";
      case "Order Placed":
        return "background-color: darkorange;";
      case "Shipped":
        return "background-color: #3d5a80;";
      case "Delivered":
        return "background-color: green;";
      case "Canceled":
        return "background-color: red;";
      default:
        return "background-color: #3d5a80;";
    }
  }}
  @media (max-width: 576px) {
    font-size: 12px; /* Adjusted font size for extra small screens */
  }
`;

const CancelButton = styled.button`
  background-color: red;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;

  @media (max-width: 576px) {
    margin-top: 5px; /* Adjusted margin for extra small screens */
  }
`;

export const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      items: [
        { name: "Gaming PC - Stealth Edition", quantity: 1, price: 1500 },
        { name: "Gaming Mouse", quantity: 2, price: 50 },
      ],
      total: 1600,
      date: "2024-01-10",
      status: "Processing",
    },
    {
      id: 2,
      items: [
        { name: "Gaming PC - Galactic Beast", quantity: 1, price: 2000 },
        { name: "Mechanical Keyboard", quantity: 1, price: 100 },
      ],
      total: 2100,
      date: "2024-01-15",
      status: "Order Placed",
    },
    {
      id: 3,
      items: [
        { name: "Gaming PC - Galactic Beast", quantity: 1, price: 2000 },
        { name: "Mechanical Keyboard", quantity: 1, price: 100 },
      ],
      total: 2100,
      date: "2024-01-15",
      status: "Shipped",
    },
    {
      id: 4,
      items: [
        { name: "Gaming PC - Galactic Beast", quantity: 1, price: 2000 },
        { name: "Mechanical Keyboard", quantity: 1, price: 100 },
      ],
      total: 2100,
      date: "2024-01-15",
      status: "Delivered",
    },
    {
      id: 5,
      items: [
        { name: "Gaming PC - Galactic Beast", quantity: 1, price: 2000 },
        { name: "Mechanical Keyboard", quantity: 1, price: 100 },
      ],
      total: 2100,
      date: "2024-01-15",
      status: "Canceled",
    },
  ]);

  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const cancelOrder = (orderId) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this order?"
    );
    if (confirmed) {
      const updatedOrders = orders.map((order) =>
        order.id === orderId ? { ...order, status: "Canceled" } : order
      );
      setOrders(updatedOrders);
      setSelectedOrderId(null); // Reset selected order after canceling
    }
  };

  return (
    <Container className="container">
      <Header>
        <h1 style={{ color: "#3d5a80" }}>Your Orders</h1>
      </Header>
      {orders.length === 0 ? (
        <div className="row">
          <div className="col-12">
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "#8b4513" }}>
                You haven't placed any orders yet. Start shopping now!
              </p>
            </div>
          </div>
        </div>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="row">
            <div className="col-12">
              <OrderContainer>
                <OrderItem onClick={() => setSelectedOrderId(order.id)}>
                  <OrderDetails>
                    <h3 style={{ color: "#3d5a80" }}>Order #{order.id}</h3>
                    <OrderDate>Placed on: {order.date}</OrderDate>
                    <ul>
                      {order.items.map((item, index) => (
                        <li key={index}>{`${item.quantity}x ${
                          item.name
                        } - $${item.price.toFixed(2)}`}</li>
                      ))}
                    </ul>
                  </OrderDetails>
                  <div>
                    <p>Total: ${order.total.toFixed(2)}</p>
                  </div>
                  <OrderStatus status={order.status}>
                    {order.status}
                  </OrderStatus>
                </OrderItem>
                {selectedOrderId === order.id &&
                  order.status !== "Delivered" &&
                  order.status !== "Canceled" && (
                    <>
                      <CancelButton onClick={() => cancelOrder(order.id)}>
                        Cancel Order
                      </CancelButton>
                    </>
                  )}
              </OrderContainer>
            </div>
          </div>
        ))
      )}
    </Container>
  );
};

export default Orders;
