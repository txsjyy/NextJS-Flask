import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import axios from 'axios';

// Assuming you have a type for your video data
type Video = {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
    channelTitle: string;
  };
  statistics: {
    viewCount: string;
  };
};

const VideoPage: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]); // Initialize videos as an empty array

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/videos'); // Adjust URL as needed
        // Assuming the API response structure matches the provided JSON
        setVideos(response.data.items); // Set videos to the items array from the response
      } catch (error) {
        console.error('Error fetching videos:', error);
        setVideos([]); // Ensure videos is set to an empty array on error
      }
    };

    fetchVideos();
  }, []);

  return (
    <>
      <Head>
        <title>Videos List</title>
      </Head>
      <Layout>
        <main className="py-5 mt-5">
          <div className="container">
            <h1 className="fw-light text-center">YouTube Videos</h1>
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3 mt-3">
              {videos.map((vid) => (
                <div className="col" key={vid.id}>
                  <div className="card shadow-sm">
                    <Link href={`/videos/${vid.id}`} passHref legacyBehavior>
                      <a><img className="bd-placeholder-img card-img-top" src={vid.snippet.thumbnails.medium.url} alt="thumbnail" /></a>
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link href={`/videos/${vid.id}`} passHref legacyBehavior>
                          <a>{vid.snippet.title}</a>
                        </Link>
                      </h5>
                      <hr />
                      <div className="d-flex justify-content-between align-items-center">
                        <h6>
                          <Link href={`/channels/${'UC_x5XG1OV2P6uZZ5FSM9Ttw'}`} passHref legacyBehavior>
                            <a>{vid.snippet.channelTitle}</a>
                          </Link>
                        </h6>
                        <p><i className="far fa-eye"></i> {vid.statistics.viewCount}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default VideoPage;
