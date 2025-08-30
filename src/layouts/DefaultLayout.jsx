import React from 'react';
import NavBar from '../components/NavBar';

function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow px-4 py-6">
        {children}
      </main>

      <footer className="text-center text-sm text-gray-500 py-4">
        © 2025 MonSite. Tous droits réservés.
      </footer>
    </div>
  );
}

export default DefaultLayout;
