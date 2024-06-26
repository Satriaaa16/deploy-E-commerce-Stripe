import React from 'react';

const About = () => {
  const teamMembers = [
    { nim: '3337220055', name: 'Rian Parlindungan' },
    { nim: '3337220056', name: 'Andrew Haris Erianto' },
    { nim: '3337220087', name: 'Satria Khaylan Alg' },
    { nim: '3337220105', name: 'Al Adzimu Sultanika' },
    { nim: '3337220112', name: 'Raja Rafi Rabbani' },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.backgroundLeft}></div>
      <div style={styles.backgroundRight}></div>
      <div style={styles.content}>
        <h1 style={styles.title}>Meet My Team</h1>
        <div style={styles.teamList}>
          {teamMembers.map((member, index) => (
            <div key={index} style={styles.memberCard}>
              <h3>{member.name}</h3>
              <p>NIM: {member.nim}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px',
    position: 'relative', // Add position relative for centering
  },
  backgroundLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '50%', // Red background covers left half
    height: '100%',
    backgroundColor: '#ff4d4d', // red background on the left
    zIndex: -1, // Push background behind content
  },
  backgroundRight: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '50%', // Blue background covers right half
    height: '100%',
    backgroundColor: '#4d4dff', // blue background on the right
    zIndex: -1, // Push background behind content
  },
  content: {
    flex: '1', // content area takes remaining width
    maxWidth: '800px',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 1, // Ensure content is above backgrounds
  },
  title: {
    fontSize: '36px',
    marginBottom: '16px',
    textAlign: 'center',
  },
  teamList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  memberCard: {
    padding: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    textAlign: 'center',
  },
};

export default About;
