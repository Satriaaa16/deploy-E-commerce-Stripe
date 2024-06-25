import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const KEY = "pk_test_51PVW7IFJcU780EjPWv0UQpTH8m7ezZIYL6aR1JqSwZuJjvL8ZGH6qLO4zEQxFWBSDWNkFuqhZV8HHMxGsi5rxxuE00FiDWILAi";

const Pay = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const onToken = async (token) => {
    setLoading(true);
    setError(null);
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
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Payment Successful! Redirecting...</p>}
      {!loading && !success && (
        <StripeCheckout
          name="KetaKeta Shop"
          image="/frontend/src/shop-with-wooden-sign_1308-46171.jpghttps://www.freepik.com/free-vector/shop-with-wooden-sign_9456711.htm#query=shop%20png&position=0&from_view=keyword&track=ais_user&uuid=436f5eb8-708b-4d4e-ab69-2c2d65839687" // Replace with a direct link to your image
          billingAddress
          shippingAddress
          description="Kembalian mu 1000"
          amount={2000} // Amount in cents
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
            Bayar Sekarang
          </button>
        </StripeCheckout>
      )}
    </div>
  );
};

export default Pay;
