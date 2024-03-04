import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import axios from 'axios';

// Assuming you have a type for your channel data
type Channel = {
  id: string;
  snippet: {
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
};

const ChannelsPage: React.FC = () => {
  const [channels, setChannels] = useState<Channel[]>([]); // Initialize channels as an empty array

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/channels'); // Adjust URL as needed
        // Assuming the API response structure matches your needs
        setChannels(response.data.items); // Set channels to the items array from the response
      } catch (error) {
        console.error('Error fetching channels:', error);
        setChannels([]); // Ensure channels is set to an empty array on error
      }
    };

    fetchChannels();
  }, []);

  return (
    <>
      <Head>
        <title>Channel List</title>
      </Head>
      <Layout>
        <main className="py-5 mt-5">
          <div className="container">
            <h1 className="fw-light text-center">YouTube Channels</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-3">
              {channels.map((channel) => (
                <div className="col" key={channel.id}>
                  <div className="card shadow-sm">
                    <Link href={`/channels/${channel.id}`} passHref legacyBehavior>
                      <a>
                        <img className="bd-placeholder-img card-img-top" src={channel.snippet.thumbnails.high.url} alt="Channel Thumbnail" />
                      </a>
                    </Link>
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <Link href={`/channels/${channel.id}`} passHref legacyBehavior>
                          <a className="btn btn-sm btn-outline-secondary">View Channel</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        <footer className="text-body-secondary py-5">
          <div className="container text-center">
            <Link href="#" passHref legacyBehavior>
              <a style={{ color: 'black', textDecoration: 'none' }}>Back to top</a>
            </Link>
          </div>
        </footer>
      </Layout>
    </>
  );
};

export default ChannelsPage;
