import React from 'react';
import Layout from '../components/Layout';

function Index() {
  return (
    <Layout>
      <div style={{
        backgroundImage: 'url("/images/splashBG.png")',
        backgroundSize: 'cover', // Cover the entire page
        backgroundPosition: 'center', // Center the background image
        height: '100vh', // Set the height to full viewport height
        width: '100%' 
      }}>
        <h1>Home Page</h1>
      </div>
    </Layout>
  );
}

export default Index;
