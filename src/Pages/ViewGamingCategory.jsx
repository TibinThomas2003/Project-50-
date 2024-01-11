import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ViewGamingCategory = () => {
  const [officePCs, setOfficePCs] = useState([]);

  useEffect(() => {
    // Placeholder data for Office PCs
    const officePCsData = [
      {
        id: 1,
        name: "Cooler Master Gaming PC With RTX 4090",
        price: 1999,
        imageUrl: "https://www.popsci.com/uploads/2023/09/06/corsair-vengeance-gaming-pc.jpg?auto=webp",
        details: "RTX 4090, Intel core i9, 64gb RAM.",
      },
      // Add more PCs as needed
    ];

    // Simulate fetching data from an API or database
    // In a real-world scenario, you would fetch data using a library like Axios or the fetch API
    setOfficePCs(officePCsData);
  }, []); // Empty dependency array

  return (
    <div style={styles.viewGamingCategory}>
      <br />
      <h2 style={styles.pcCategoryTitle}>Explore Gaming PCs</h2>
      <div style={styles.officePCList}>
        {officePCs.map((pc) => (
          <div key={pc.id} style={styles.officePCCard}>
            <img src={pc.imageUrl} alt={pc.name} style={styles.pcImage} />
            <div style={styles.pcDetails}>
              <h3 style={styles.pcName}>{pc.name}</h3>
              <p style={styles.pcPrice}>${pc.price}</p>
              <p style={styles.pcDescription}>{pc.details}</p>
              <div style={styles.buttonContainer}>
                <button style={styles.addToCartButton}>
                  Add to Cart
                </button>
                <button style={styles.buyNowButton}>
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
  viewGamingCategory: {
    padding: "20px",
    margin: "1000px",
  },
  pcCategoryTitle: {
    color: "#333",
    textAlign: "center",
    fontSize: "40px",
    margin: "20px",
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
    height: "220px",
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

export default ViewGamingCategory;
