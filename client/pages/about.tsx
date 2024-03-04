// pages/about.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import Image from 'next/image';

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About</title>
        {/* Bootstrap CSS and other links should be included in your _app.tsx or _document.tsx */}
      </Head>
      <Layout>
        <main>
          <section className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">YoutubeStats</h1>
                <p className="lead text-body-secondary">Our website provides unique YouTube statistics based on
                  channels, videos, and playlists.</p>
              </div>
            </div>
          </section>

          <div className="album py-5 bg-body-tertiary">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-3">
                <div className="col">
                  <div className="card shadow-sm">
                    {/* Use Next.js Image component for optimized images */}
                    <Image src="/images/Nirmal.png" width={500} height={500} alt="Nirmal Patel" />
                    <div className="card-body">
                      <h3>Nirmal Patel</h3>
                      <p>Nirmal Patel is a Physics senior pursuing Elements of Computing certificate. He took on the leadership role for CS331E project.</p>
                      <ul>
                        <li>#Commits: 24</li>
                        <li>#Issues: 7</li>
                        <li>#Unit Tests: 0</li>
                      </ul>
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    {/* Use Next.js Image component for optimized images */}
                    <Image src="/images/Junyu.png" width={500} height={500} alt="Junyu Yao" />
                    <div className="card-body">
                      <h3>Junyu Yao</h3>
                      <p>Nirmal Patel is a Physics senior pursuing Elements of Computing certificate. He took on the leadership role for CS331E project.</p>
                      <ul>
                        <li>#Commits: 24</li>
                        <li>#Issues: 7</li>
                        <li>#Unit Tests: 0</li>
                      </ul>
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    {/* Use Next.js Image component for optimized images */}
                    <Image src="/images/Alec.png" width={500} height={500} alt="Alec Liu" />
                    <div className="card-body">
                      <h3>Alec Liu</h3>
                      <p>Alec is a Mechanical Engineering senior
													pursuing the Elements of Computing Certificate. He took on
													the full-stack role for the project.</p>
                      <ul>
                        <li>#Commits: 24</li>
                        <li>#Issues: 7</li>
                        <li>#Unit Tests: 0</li>
                      </ul>
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    {/* Use Next.js Image component for optimized images */}
                    <Image src="/images/Adrian.png" width={500} height={500} alt="Adrian Barajas" />
                    <div className="card-body">
                      <h3>Adrian Barajas</h3>
                      <p>Adrian is a Mechanical Engineering senior pursuing
													Elements of Computing Certificate. He took on the full-stack role
													for CS331E project.</p>
                      <ul>
                        <li>#Commits: 24</li>
                        <li>#Issues: 7</li>
                        <li>#Unit Tests: 0</li>
                      </ul>
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion" id="accordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  Stats
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <ul>
                    <li>
                      Total #Commits: 63
                    </li>
                    <li>
                      Total #Issues: 19
                    </li>
                    <li>
                      Total #Unit Tests: 0
                    </li>
                    <li>
                      Postman API: NA
                    </li>
                    <li>
                      <a className="link-opacity-75-hover"
                        href="https://gitlab.com/cs331e1/ytubedb/-/issues/?sort=created_date&state=all&first_page_size=20">Issue
                        Tracker</a>
                    </li>
                    <li>
                      <a className="link-opacity-75-hover" href="https://gitlab.com/cs331e1/ytubedb">Gitlab
                        Repo</a>
                    </li>
                    <li>
                      <a className="link-opacity-75-hover"
                        href="https://gitlab.com/cs331e1/ytubedb/-/wikis/Technical-Report">Gitlab Wiki</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Data */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Data
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <ul>
                    <li>
                      <ul>
                        <li>
                          <a className="link-opacity-50-hover"
                            href="https://developers.google.com/youtube/v3/docs/channels">Youtube
                            Channels Data</a>
                        </li>
                        <li>
                          <a className="link-opacity-50-hover"
                            href="https://developers.google.com/youtube/v3/docs/videos">Youtube Videos
                            Data</a>
                        </li>
                        <li>
                          <a className="link-opacity-50-hover"
                            href="https://developers.google.com/youtube/v3/docs/playlists">Youtube
                            Playlists Data</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      a link to your published postman collection
                    </li>
                    <li>
                      description of how each was scraped
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Tools */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Tools
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <ul>
                    <li>HTML</li>
                    <li>CSS (Bootstrap v5.3.2)</li>
                    <li>Javascript</li>
                    <li>Python</li>
                    <li>Flask</li>
                    <li>Git</li>
                    <li>Makefile</li>
                    <li>Google Cloud Platform</li>
                    <li>JSON</li>
                    <li>YouTube APIs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </main>
        {/* Footer section */}
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

export default AboutPage;

// import React, { useState } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
// import Layout from '../components/Layout';
// import Image from 'next/image';

// // Example of a member card component
// const MemberCard = ({ name, image, role, stats }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   return (
//     <div className="col">
//       <div className="card shadow-sm">
//         <Image src={image} width={500} height={500} alt={name} />
//         <div className="card-body">
//           <h3>{name}</h3>
//           <p>{role}</p>
//           {isVisible && (
//             <ul>
//               {stats.map((stat, index) => (
//                 <li key={index}>{stat}</li>
//               ))}
//             </ul>
//           )}
//           <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => setIsVisible(!isVisible)}>
//             View
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const AccordionItem = ({ title, content }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="accordion-item">
//       <h2 className="accordion-header">
//         <button
//           className="accordion-button collapsed"
//           type="button"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {title}
//         </button>
//       </h2>
//       {isOpen && (
//         <div className="accordion-collapse collapse show">
//           <div className="accordion-body">{content}</div>
//         </div>
//       )}
//     </div>
//   );
// };

// const AboutPage: React.FC = () => {
//   // Dummy data for members and accordion items
//   const members = [
//     { name: 'Nirmal Patel', image: '/images/Nirmal.png', role: 'Physics senior pursuing Elements of Computing certificate.', stats: ['#Commits: 24', '#Issues: 7', '#Unit Tests: 0'] },
//     { name: 'Nirmal Patel', image: '/images/Nirmal.png', role: 'Physics senior pursuing Elements of Computing certificate.', stats: ['#Commits: 24', '#Issues: 7', '#Unit Tests: 0'] },
//     { name: 'Nirmal Patel', image: '/images/Nirmal.png', role: 'Physics senior pursuing Elements of Computing certificate.', stats: ['#Commits: 24', '#Issues: 7', '#Unit Tests: 0'] },
//     { name: 'Nirmal Patel', image: '/images/Nirmal.png', role: 'Physics senior pursuing Elements of Computing certificate.', stats: ['#Commits: 24', '#Issues: 7', '#Unit Tests: 0'] }
//   ];

//   const accordionItems = [
//     { title: 'Stats', content: 'Total #Commits: 63' },
//     { title: 'Stats', content: 'Total #Commits: 63' },
//     { title: 'Stats', content: 'Total #Commits: 63' },
//     { title: 'Stats', content: 'Total #Commits: 63' },
//     // Add other accordion items here...
//   ];

//   return (
//     <>
//       <Head>
//         <title>About</title>
//       </Head>
//       <Layout>
//         <main>
//         <section className="py-5 text-center container">
//             <div className="row py-lg-5">
//               <div className="col-lg-6 col-md-8 mx-auto">
//                 <h1 className="fw-light">YoutubeStats</h1>
//                 <p className="lead text-body-secondary">Our website provides unique YouTube statistics based on
//                   channels, videos, and playlists.</p>
//               </div>
//             </div>
//           </section>
//           {/* Sections omitted for brevity */}
//           <div className="container">
//             <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-3">
//               {members.map((member, index) => (
//                 <MemberCard key={index} {...member} />
//               ))}
//             </div>
//           </div>
//           <div className="accordion" id="accordionExample">
//             {accordionItems.map((item, index) => (
//               <AccordionItem key={index} {...item} />
//             ))}
//           </div>
//         </main>
//       </Layout>
//     </>
//   );
// };

// export default AboutPage;
