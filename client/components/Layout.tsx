// components/Layout.tsx
import React from 'react';
import Link from 'next/link';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <nav className="navbar navbar-expand sticky-top navbar-dark bg-dark" aria-label="Main navigation">
      <div className="container-fluid">
        <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" passHref legacyBehavior>
                <a className="nav-link active" aria-current="page">Home</a>
              </Link>
            </li>
            <li className="nav-item" >
              <Link href="/about" passHref legacyBehavior>
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/channels" passHref legacyBehavior>
                <a className="nav-link">Channels</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/videos" passHref legacyBehavior>
                <a className="nav-link">Videos</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/playlists" passHref legacyBehavior>
                <a className="nav-link">Playlists</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main>{children}</main>
  </>
);

export default Layout;
