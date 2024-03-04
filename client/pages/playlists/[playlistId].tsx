// pages/playlists/[playlistId].tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import Layout from '../../components/Layout';

// Define the type for your playlist data
type Playlist = {
  id: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      maxres: {
        url: string;
      };
    };
    channelId: string;
  };
};

type Props = {
  playlist: Playlist | null;
};

const PlaylistPage: React.FC<Props> = ({ playlist }) => {
  return (
    <>
      <Head>
        <title>{playlist ? playlist.snippet.title : 'Playlist Not Found'}</title>
        {/* Bootstrap CSS and other links */}
      </Head>
      <Layout>
        {/* Navbar section */}
        <main className="py-5 mt-5">
          <div className="container">
            {playlist ? (
              <>
                <h1 className="fw-light text-center">{playlist.snippet.title}</h1>
                <div className="row">
                  <div className="col-12 mx-auto">
                    <div className="card shadow-sm">
                      <img src={playlist.snippet.thumbnails.maxres.url} className="card-img-top" alt={playlist.snippet.title} />
                      <div className="card-body">
                        <p className="card-text">{playlist.snippet.description}</p>
                        {/* Other playlist details */}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <h1 className="fw-light text-center">Sorry, this playlist is not in our database.</h1>
              // Optionally, include links back to other playlists or YouTube
            )}
          </div>
        </main>
      </Layout>
    </>
  );
};

export async function getServerSideProps(context: { params: { playlistId: string } }) {
  try {
    const { playlistId } = context.params;
    const response = await axios.get(`http://localhost:8080/api/playlist/${playlistId}`); // Update the URL as needed
    console.log(response.data);
    return {
      props: {
        playlist: response.data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        playlist: null,
      },
    };
  }
}

export default PlaylistPage;
