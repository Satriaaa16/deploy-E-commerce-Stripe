import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import image from './shop-with-wooden-sign_1308-46171.jpg';

const KEY = "pk_test_51PVW7IFJcU780EjPWv0UQpTH8m7ezZIYL6aR1JqSwZuJjvL8ZGH6qLO4zEQxFWBSDWNkFuqhZV8HHMxGsi5rxxuE00FiDWILAi";

const Pay = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = async (token) => {
    setLoading(true);
    setError(null);
    setStripeToken(token);
    try {
      const response = await axios.post('http://localhost:5000/api/pay', {
        tokenId: token.id,
        amount: 2000,
      });
      if (response.data.success) {
        setSuccess(true);
        setTimeout(() => {
          window.location.href = '/success';
        }, 2000);
      } else {
        setError('Payment failed. Please try again.');
      }
    } catch (error) {
      setError('Payment error. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img src={image} alt="Product" style={styles.image} />
        <h2 style={styles.title}>KetaKeta Shop Product</h2>
        <p style={styles.description}>Produk jadi jadian kami</p>
        <p style={styles.price}>Price: Rp 50.000</p>
        <StripeCheckout
          name="KetaKeta Shop"
          image={image}
          billingAddress
          shippingAddress
          description="Total Pembayaranmu Rp 50.000"
          amount={50000} 
          token={onToken}
          stripeKey={KEY}
        >
          <button style={styles.button}>
            Bayar Sekarang
          </button>
        </StripeCheckout>
        {loading && <p style={styles.message}>Loading...</p>}
        {error && <p style={{ ...styles.message, color: 'red' }}>{error}</p>}
        {success && <p style={{ ...styles.message, color: 'green' }}>Payment Successful! Redirecting...</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e0e0e0",
    position: "relative",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    maxWidth: "400px",
    marginTop: "50px",
  },
  image: {
    width: "100%",
    maxHeight: "300px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  title: {
    fontSize: "24px",
    margin: "10px 0",
    color: "#00796b",
  },
  description: {
    fontSize: "16px",
    color: "#004d40",
  },
  price: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "10px 0",
    color: "#d32f2f",
  },
  button: {
    border: "none",
    width: "100%",
    padding: "15px",
    borderRadius: "5px",
    backgroundColor: "#00796b",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "20px",
  },
  message: {
    fontSize: "16px",
  },
};

export default Pay;
