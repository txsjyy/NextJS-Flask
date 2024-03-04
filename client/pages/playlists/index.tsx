import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import axios from 'axios';

// Assuming you have a type for your playlist data
type Playlist = {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
};

const PlaylistPage: React.FC = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]); // Initialize playlists as an empty array

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/playlists'); // Adjust URL as needed
        // Assuming the API response structure matches your needs
        setPlaylists(response.data.items); // Set playlists to the items array from the response
      } catch (error) {
        console.error('Error fetching playlists:', error);
        setPlaylists([]); // Ensure playlists is set to an empty array on error
      }
    };

    fetchPlaylists();
  }, []);

  return (
    <>
      <Head>
        <title>Playlist</title>
      </Head>
      <Layout>
        <main className="py-5 mt-5">
          <div className="container">
            <h1 className="fw-light text-center">Google for Developer Playlist</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-3">
              {playlists.map((item) => (
                <div className="col" key={item.id}>
                  <div className="card shadow-sm">
                    <img className="bd-placeholder-img card-img-top" src={item.snippet.thumbnails.high.url} alt={item.snippet.title} />
                    <div className="card-body">
                      <h5 className="card-title">{item.snippet.title}</h5>
                      <div className="d-flex justify-content-between align-items-center">
                        <Link href={`/playlists/${item.id}`} passHref legacyBehavior>
                          <a className="btn btn-sm btn-outline-secondary">View Playlist</a>
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

export default PlaylistPage;
