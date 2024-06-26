import React from 'react';
import { useNavigate } from 'react-router-dom';
import produkimage1 from './leptop.png';
import produkimage2 from './barble.jpg';
import produkimage3 from './SEPATU.png';
import newLogo from './shop-with-wooden-sign_1308-46171.jpg'; // Ganti dengan path logo baru Anda

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/pay');
  };

  const handleAboutClick = () => {
    navigate('/about');
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img src={newLogo} alt="New Logo" style={{ height: '50px', width: 'auto' }} />
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navItem}><a href="#" style={styles.navLink} onClick={() => navigate('/')}>Home</a></li>
            <li style={styles.navItem}><a href="#" style={styles.navLink} onClick={handleButtonClick}>Shop</a></li>
            <li style={styles.navItem}><a href="#" style={styles.navLink} onClick={handleAboutClick}>About</a></li>
            {/* Link Contact dihapus */}
          </ul>
        </nav>
      </header>

      <div style={styles.hero}>
        <div style={styles.overlay}>
          <div style={styles.heroContent}>
            <h2 style={styles.heroTitle}>Selamat datang di KetaKeta Shop</h2>
            <p style={styles.heroDescription}>membuat semuanya jadi lebih rumit</p>
            <button style={styles.heroButton} onClick={handleButtonClick}>Shop Now</button>
          </div>
        </div>
      </div>

      <section style={styles.featuredSection}>
        <h2 style={styles.sectionTitle}>Produk yang kami tawarkan</h2>
        <div style={styles.productsGrid}>
          <div style={styles.productCard}>
            <img src={produkimage1} alt="Product" style={styles.productImage} />
            <h3 style={styles.productTitle}>Leptop</h3>
            <p style={styles.productPrice}>Rp 4.000.000</p>
          </div>
          <div style={styles.productCard}>
            <img src={produkimage2} alt="Product" style={styles.productImage} />
            <h3 style={styles.productTitle}>Barble</h3>
            <p style={styles.productPrice}>Rp 120.000</p>
          </div>
          <div style={styles.productCard}>
            <img src={produkimage3} alt="Product" style={styles.productImage} />
            <h3 style={styles.productTitle}>Sepatu</h3>
            <p style={styles.productPrice}>Rp 200.000</p>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2024 KetaKeta Shop. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  navItem: {
    marginLeft: '20px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    cursor: 'pointer',
  },
  hero: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh',
    backgroundImage: 'url("https://source.unsplash.com/random/1600x900")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroContent: {
    textAlign: 'center',
    color: 'white',
  },
  heroTitle: {
    fontSize: '48px',
    marginBottom: '16px',
  },
  heroDescription: {
    fontSize: '24px',
    marginBottom: '24px',
  },
  heroButton: {
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#FF4081',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  featuredSection: {
    padding: '40px',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '32px',
    marginBottom: '24px',
  },
  productsGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  productCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '200px',
  },
  productImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '16px',
  },
  productTitle: {
    fontSize: '18px',
    marginBottom: '8px',
  },
  productPrice: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  footer: {
    padding: '20px',
    backgroundColor: '#fff',
    textAlign: 'center',
    borderTop: '1px solid #eee',
  },
  footerText: {
    margin: 0,
  },
};

export default Home;
