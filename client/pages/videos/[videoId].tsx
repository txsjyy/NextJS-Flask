// pages/videos/[videoId].tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import axios from 'axios';

type Video = {
  id: string;
  snippet: {
    title: string;
    channelTitle: string;
    description: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    commentCount: string;
  };
};

type Props = {
  video: Video | null;
  videoId: string;
};

const VideoPage: React.FC<Props> = ({ video, videoId }) => {
  return (
    <>
      <Head>
        <title>{video ? video.snippet.title : 'Video Not Found'}</title>
        {/* Bootstrap and other CSS links */}
      </Head>
      <Layout>
        <main className="py-5 mt-5">
          <div className="container">
            {video ? (
              <>
                <h1 className="fw-light text-center">{video.snippet.title}</h1>
                <div className="row">
                  <div className="col-12 mx-auto">
                    <div className="card shadow-sm">
                      <iframe
                        id="player"
                        type="text/html"
                        width="100%"
                        height="600"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                      <div className="card-body">
                        {/* Video details and statistics */}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <h1 className="fw-light text-center">Sorry, this video is not in our database.</h1>
              // Optionally include a link back to the video list or an external link to watch on YouTube
            )}
          </div>
        </main>
      </Layout>
    </>
  );
};

export async function getServerSideProps(context: { params: { videoId: string } }) {
  const { videoId } = context.params;
  try {
    // Replace URL with your API endpoint
    const response = await axios.get(`http://localhost:8080/api/video/${videoId}`);
    return {
      props: {
        video: response.data,
        videoId,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        video: null,
        videoId,
      },
    };
  }
}

export default VideoPage;
