// pages/channels/[channelId].tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import Layout from '../../components/Layout';

// Define the type for your channel data
type Channel = {
  id: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
  statistics: {
    subscriberCount: string;
    viewCount: string;
    videoCount: string;
  };
};

type Props = {
  channel: Channel | null;
};

const ChannelPage: React.FC<Props> = ({ channel }) => {
  return (
    <>
      <Head>
        <title>{channel ? channel.snippet.title : 'Channel Not Found'}</title>
        {/* Bootstrap CSS and other links */}
      </Head>
      <Layout>
        <main className="py-5 mt-5">
          <div className="container">
            {channel ? (
              <>
                <h1 className="fw-light text-center">{channel.snippet.title}</h1>
                <div className="card mb-3">
                  <div className="text-center">
                    {/* Use the channel's thumbnail or a placeholder image */}
                    <img src={channel.snippet.thumbnails.high.url} alt={channel.snippet.title} className="img-fluid" style={{ width: '750px', height: 'auto' }} />
                  </div>
                  <div className="card-body">
                    <div className="row align-items-center">
                      {/* Channel statistics and description */}
                    </div>
                    {/* Additional channel details */}
                  </div>
                </div>
              </>
            ) : (
              <h1 className="fw-light text-center">Sorry, this channel is not in our database.</h1>
              // Optionally, include links back to other channels or a search feature
            )}
          </div>
        </main>
      </Layout>
    </>
  );
};

export async function getServerSideProps(context: { params: { channelId: string } }) {
  try {
    const { channelId } = context.params;
    // Replace the URL with your API endpoint that fetches the channel data
    const response = await axios.get(`http://localhost:8080/api/channel/${channelId}`);
    return {
      props: {
        channel: response.data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        channel: null,
      },
    };
  }
}

export default ChannelPage;
