import React from 'react';

function App() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', background: 'linear-gradient(to bottom right, #d0f0f8, #e0ffe0)', minHeight: '100vh' }}>
      <h1 style={{ color: '#007acc', textAlign: 'center' }}>Alexandra's Portfolio</h1>

      <section style={{ margin: '2rem auto', maxWidth: '700px', background: '#fff', padding: '1rem 2rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#007acc' }}>Biografi</h2>
        <p>
          Hi! Saya bernama Indra, menggunakan username Alexandra untuk beberapa sosial media. Saya memiliki passion di dunia entertainment, digital creativity,
          dan memiliki sifat berpikir kritis serta selalu belajar dari kegagalan. Dalam organisasi di sekolah, saya menjadi Hubungan Masyarakat (Humas) yang
          mendesign poster atau sumber informasi lainnya dan memposting di akun organisasi.
        </p>
      </section>

      <section style={{ margin: '2rem auto', maxWidth: '700px', background: '#fff', padding: '1rem 2rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#007acc' }}>Keahlian</h2>
        <ul>
          <li>Menganalisis algoritma</li>
          <li>Public Speaking</li>
          <li>Menguasai Bahasa Jepang hingga tingkat JLPT N3</li>
          <li>Penulis</li>
          <li>Basic Web Development</li>
          <li>Design Grafis</li>
        </ul>
      </section>

      <section style={{ margin: '2rem auto', maxWidth: '700px', background: '#fff', padding: '1rem 2rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#007acc' }}>Hasil Projek</h2>
        <ul>
          <li><a href="https://youtu.be/m-90uLGfn8o" target="_blank" rel="noreferrer">Video 1</a></li>
          <li><a href="https://youtu.be/m0G_k2ANvTo" target="_blank" rel="noreferrer">Video 2</a></li>
          <li><a href="https://youtu.be/baa1txYpAio" target="_blank" rel="noreferrer">Video 3</a></li>
          <li><a href="https://youtu.be/hVTWa8zu7hE" target="_blank" rel="noreferrer">Video 4</a></li>
        </ul>
        <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
          dan sebagainya. Noted: jika ingin melihat lebih banyak hasil, bisa kirim pesan melalui email @wibugamersindo.com
        </p>
      </section>

      <footer style={{ textAlign: 'center', fontSize: '0.8rem', color: '#555', marginTop: '2rem' }}>
        &copy; {new Date().getFullYear()} Alexandra's Portfolio. All rights reserved.
      </footer>
    </main>
  );
}

export default App;
            
