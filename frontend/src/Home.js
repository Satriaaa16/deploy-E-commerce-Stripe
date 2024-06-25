import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/pay');
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <div style={styles.card}>
          <h1 style={styles.title}>Welcome to Our Payment App</h1>
          <p style={styles.description}>A seamless way to manage your payments</p>
          <button style={styles.button} onClick={handleButtonClick}>Go to Pay</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url("https://source.unsplash.com/random/1600x900")', // Use any desired image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay to make text readable
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)', // Gradient background
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    color: 'white',
  },
  title: {
    fontSize: '28px',
    marginBottom: '16px',
  },
  description: {
    fontSize: '18px',
    marginBottom: '24px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#FF4081',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

styles.button = {
  ...styles.button,
  ':hover': {
    backgroundColor: '#E91E63',
  },
};

export default Home;
