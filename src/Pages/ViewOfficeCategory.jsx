import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ViewOfficeCategory = () => {
  const [officePCs, setOfficePCs] = useState([]);

  useEffect(() => {
    // Placeholder data for Office PCs
    const officePCsData = [
      {
        id: 1,
        name: "Cooler Master Gaming PC With RTX 4090",
        price: 1999,
        imageUrl: "https://m.media-amazon.com/images/I/71NlkuEA3uL._SX679_.jpg",
        details: "RTX 4090, Intel core i9, 64gb RAM.",
      },
      // Add more PCs as needed
    ];

    // Simulate fetching data from an API or database
    // In a real-world scenario, you would fetch data using a library like Axios or the fetch API
    setOfficePCs(officePCsData);
  }, []); // Empty dependency array

  const handleAddToCart = (pcId) => {
    // Placeholder function for adding to cart
    console.log(`Added PC with ID ${pcId} to the cart`);
  };

  const handleBuyNow = (pcId) => {
    // Placeholder function for initiating the buying process
    console.log(`Buy Now clicked for PC with ID ${pcId}`);
  };

  return (
    <div style={styles.viewOfficePC}>
      <h2 style={styles.pcCategoryTitle}>Explore Office PCs</h2>
      <div style={styles.officePCList}>
        {officePCs.map((pc) => (
          <div key={pc.id} style={styles.officePCCard}>
            <img src={pc.imageUrl} alt={pc.name} style={styles.pcImage} />
            <div style={styles.pcDetails}>
              <h3 style={styles.pcName}>{pc.name}</h3>
              <p style={styles.pcPrice}>${pc.price}</p>
              <p style={styles.pcDescription}>{pc.details}</p>
              <div style={styles.buttonContainer}>
                <button onClick={() => handleAddToCart(pc.id)} style={styles.addToCartButton}>
                  Add to Cart
                </button>
                <button onClick={() => handleBuyNow(pc.id)} style={styles.buyNowButton}>
                  <Link to="/viewproduct">Buy Now </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  viewOfficePC: {
    padding: "20px",
  },
  pcCategoryTitle: {
    color: "#333",
    textAlign: "center",
    fontSize: "40px",
    marginBottom: "20px",
  },
  officePCList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: "20px",
  },
  officePCCard: {
    backgroundColor: "#f8f8f8",
    borderRadius: "15px",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    width: "300px",
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer",
  },
  pcImage: {
    width: "100%",
    height: "300px",
    objectFit: "flex",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  },
  pcDetails: {
    padding: "15px",
  },
  pcName: {
    fontSize: "18px",
    color: "#333",
    marginBottom: "8px",
  },
  pcPrice: {
    fontSize: "16px",
    color: "#e74c3c",
    marginBottom: "10px",
  },
  pcDescription: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "15px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  addToCartButton: {
    backgroundColor: "#3498db",
    color: "#fff",
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buyNowButton: {
    backgroundColor: "#27ae60",
    color: "#fff",
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    textDecoration: "none",  // Add this line to remove text decoration
  },
};

export default ViewOfficeCategory;
