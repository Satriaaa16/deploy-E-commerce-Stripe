import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import produkimage1 from './laptop.png';
import produkimage2 from './barble.jpg';
import produkimage3 from './sepatuh(1).png';
import newLogo from './shop-with-wooden-sign_1308-46171.jpg';

const Home = () => {
  const navigate = useNavigate();

  // State untuk diskon
  const [discountEnd, setDiscountEnd] = useState(new Date(Date.now() + 3600 * 1000)); // 1 jam dari sekarang
  const [timeLeft, setTimeLeft] = useState('');

  // State untuk stok
  const [stock, setStock] = useState({
    laptop: 50,
    barbel: 100,
    sepatu: 75
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = discountEnd - now;
      const hours = Math.floor(difference / 1000 / 60 / 60);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft('Expired');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [discountEnd]);

  useEffect(() => {
    const stockInterval = setInterval(() => {
      setStock(prevStock => ({
        laptop: prevStock.laptop - Math.floor(Math.random() * 5) + 1,
        barbel: prevStock.barbel - Math.floor(Math.random() * 5) + 1,
        sepatu: prevStock.sepatu - Math.floor(Math.random() * 5) + 1,
      }));
    }, 60000); // Mengurangi stok secara acak antara 1-5 setiap menit

    return () => clearInterval(stockInterval);
  }, []);

  const handleButtonClick = () => {
    navigate('/pay');
  };

  const handleAboutClick = () => {
    navigate('/about');
  };

  const [hoveredElement, setHoveredElement] = useState(null);

  const handleMouseEnter = (elementName) => {
    setHoveredElement(elementName);
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
  }; // animasi pas hover

  return (
    <div style={styles.container}>
      <header style={{ ...styles.header, boxShadow: hoveredElement === 'header' ? '0 8px 16px rgba(0, 0, 0, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0.2)' }}
        onMouseEnter={() => handleMouseEnter('header')} onMouseLeave={handleMouseLeave}>
        <img src={newLogo} alt="New Logo" style={{ height: '50px', width: 'auto' }} />
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navItem}><a href="#" style={styles.navLink} onClick={() => navigate('/')} onMouseEnter={() => handleMouseEnter('home')} onMouseLeave={handleMouseLeave}>Home</a></li>
            <li style={styles.navItem}><a href="#" style={styles.navLink} onClick={handleButtonClick} onMouseEnter={() => handleMouseEnter('shop')} onMouseLeave={handleMouseLeave}>Shop</a></li>
            <li style={styles.navItem}><a href="#" style={styles.navLink} onClick={handleAboutClick} onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>About</a></li>
            {/* Link Contact dihapus */}
          </ul>
        </nav>
      </header>

      <div style={{ ...styles.hero, boxShadow: hoveredElement === 'hero' ? '0 8px 16px rgba(0, 0, 0, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0.2)' }}
        onMouseEnter={() => handleMouseEnter('hero')} onMouseLeave={handleMouseLeave}>
        <div style={styles.overlay}>
          <div style={styles.heroContent}>
            <h2 style={styles.heroTitle}>Selamat datang di KetaKeta Shop</h2>
            <p style={styles.heroDescription}>membuat semuanya jadi lebih rumit</p>
            <button style={{ ...styles.heroButton, boxShadow: hoveredElement === 'shopNow' ? '0 8px 16px rgba(0, 0, 0, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0.2)' }}
              onClick={handleButtonClick} onMouseEnter={() => handleMouseEnter('shopNow')} onMouseLeave={handleMouseLeave}>Shop Now</button>
          </div>
        </div>
      </div>

      <section style={styles.featuredSection}>
        <h2 style={styles.sectionTitle}>Produk yang kami tawarkan</h2>
        <div style={styles.productsGrid}>
          <div
            style={{ ...styles.productCard, boxShadow: hoveredElement === 'laptop' ? '0 8px 16px rgba(0, 0, 0, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0.2)' }}
            onMouseEnter={() => handleMouseEnter('laptop')}
            onMouseLeave={handleMouseLeave}
          >
            <p style={styles.limitedStock}>Limited Stock only</p>
            <img src={produkimage1} alt="Product" style={styles.productImage} />
            <h3 style={styles.productTitle}>Laptop</h3>
            <p style={styles.originalPrice}>Rp 4.000.000</p>
            <p style={styles.productPrice}>Rp 3.200.000</p>
            <p style={styles.discountTimer}>Diskon berakhir dalam: {timeLeft}</p>
            <p style={styles.stock}>Stok tersisa: {stock.laptop}</p>
          </div>
          <div
            style={{ ...styles.productCard, boxShadow: hoveredElement === 'barbel' ? '0 8px 16px rgba(0, 0, 0, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0.2)' }}
            onMouseEnter={() => handleMouseEnter('barbel')}
            onMouseLeave={handleMouseLeave}
          >
            <p style={styles.limitedStock}>Limited Stock only</p>
            <img src={produkimage2} alt="Product" style={styles.productImage} />
            <h3 style={styles.productTitle}>Barbel</h3>
            <p style={styles.originalPrice}>Rp 150.000</p>
            <p style={styles.productPrice}>Rp 120.000</p>
            <p style={styles.discountTimer}>Diskon berakhir dalam: {timeLeft}</p>
            <p style={styles.stock}>Stok tersisa: {stock.barbel}</p>
          </div>
          <div
            style={{ ...styles.productCard, boxShadow: hoveredElement === 'sepatu' ? '0 8px 16px rgba(0, 0, 0, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0.2)' }}
            onMouseEnter={() => handleMouseEnter('sepatu')}
            onMouseLeave={handleMouseLeave}
          >
            <p style={styles.limitedStock}>Limited Stock only</p>
            <img src={produkimage3} alt="Product" style={styles.productImage} />
            <h3 style={styles.productTitle}>Sepatu</h3>
            <p style={styles.originalPrice}>Rp 250.000</p>
            <p style={styles.productPrice}>Rp 200.000</p>
            <p style={styles.discountTimer}>Diskon berakhir dalam: {timeLeft}</p>
            <p style={styles.stock}>Stok tersisa: {stock.sepatu}</p>
          </div>
        </div>
      </section>

      <footer style={{ ...styles.footer, boxShadow: hoveredElement === 'footer' ? '0 8px 16px rgba(0, 0, 0, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0.2)' }}
        onMouseEnter={() => handleMouseEnter('footer')} onMouseLeave={handleMouseLeave}>
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
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'box-shadow 0.3s ease-out',
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
    transition: 'color 0.3s ease-out',
  },
  hero: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh',
    backgroundImage: 'url("https://source.unsplash.com/random/1600x900")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'box-shadow 0.3s ease-out',
    marginBottom: '20px',
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
    transition: 'background-color 0.3s, box-shadow 0.3s ease-out',
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
    textAlign: 'center',
    width: '200px',
    position: 'relative',
    transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    marginBottom: '20px',
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
  originalPrice: {
    fontSize: '14px',
    textDecoration: 'line-through',
    color: '#999',
    marginBottom: '8px',
  },
  productPrice: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  discountTimer: {
    color: '#FF4081',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  limitedStock: {
    position: 'absolute',
    top: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#FF4081',
    color: 'white',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    zIndex: '1',
  },
  stock: {
    marginBottom: '8px',
  },
  footer: {
    padding: '20px',
    backgroundColor: '#fff',
    textAlign: 'center',
    borderTop: '1px solid #eee',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'box-shadow 0.3s ease-out',
    marginTop: '20px',
  },
  footerText: {
    margin: 0,
  },
}; // dah lah capek ama css :(

export default Home;