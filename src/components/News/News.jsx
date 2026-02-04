import React, { useState, useEffect } from 'react';
import './News.css';

const News = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const currentDate = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  const sidebarItems = [
    {
      title: 'Energi Terbarukan Capai Rekor Produksi',
      category: 'Lingkungan',
      time: '2 Jam Lalu'
    },
    {
      title: 'Startup Lokal Raih Pendanaan 50M',
      category: 'Bisnis',
      time: '4 Jam Lalu'
    },
    {
      title: 'Terobosan Baru Teknologi Quantum',
      category: 'Sains',
      time: '6 Jam Lalu'
    },
    {
      title: 'Transformasi Digital Sektor Pendidikan',
      category: 'Edukasi',
      time: '8 Jam Lalu'
    }
  ];

  const latestArticles = [
    {
      category: 'Teknologi',
      title: 'Inovasi Chip Generasi Terbaru',
      excerpt: 'Prosesor baru dengan arsitektur revolusioner menjanjikan peningkatan performa hingga 300% dengan konsumsi daya lebih rendah.'
    },
    {
      category: 'Bisnis',
      title: 'Ekonomi Digital Tumbuh Pesat',
      excerpt: 'Transaksi e-commerce meningkat drastis dengan adopsi pembayaran digital yang semakin masif di seluruh negeri.'
    },
    {
      category: 'Lifestyle',
      title: 'Tren Smart Home 2026',
      excerpt: 'Integrasi IoT dalam rumah modern menciptakan pengalaman hidup yang lebih efisien dan nyaman.'
    },
    {
      category: 'Sains',
      title: 'Eksplorasi Luar Angkasa',
      excerpt: 'Misi baru ke Mars mengungkap temuan mengejutkan tentang kemungkinan kehidupan di planet merah.'
    },
    {
      category: 'Kesehatan',
      title: 'Terapi Gen Masa Depan',
      excerpt: 'Penelitian terbaru menunjukkan potensi luar biasa dalam penyembuhan penyakit genetik yang selama ini sulit diatasi.'
    },
    {
      category: 'Olahraga',
      title: 'Teknologi Wearable Atlet',
      excerpt: 'Perangkat pintar membantu atlet mengoptimalkan performa dengan analisis data real-time yang akurat.'
    }
  ];

  return (
    <div className="news-container">
      {/* Top Bar with Date - replaces header since Navbar exists */}
      <div className="news-topbar">
        <div className="news-topbar__date">{currentDate}</div>
      </div>

      {/* Main Content */}
      <main className="main-content">
        {/* hero-news Section */}
        <section className={`hero-news ${isVisible ? 'visible' : ''}`}>
          <h1 className="hero-news-title">
            <span>TEKNOLOGI</span>
            <span className="highlight">MASA DEPAN</span>
            <span>DIMULAI HARI INI</span>
          </h1>
          <div className="hero-news-meta">
            <span>Innovation</span>
            <span>5 Min Read</span>
            <span>Trending</span>
          </div>
          <p className="hero-news-excerpt">
            Revolusi digital mengubah cara kita hidup, bekerja, dan berinteraksi. Dari AI hingga teknologi hijau, masa depan sedang tercipta di depan mata kita.
          </p>
          <a href="#" className="read-more">Baca Selengkapnya</a>
        </section>

        {/* Featured & Sidebar Grid */}
        <div className="news-grid">
          {/* Featured Article */}
          <article className="featured">
            <div className="featured-image"></div>
            <h2>Artificial Intelligence Mengubah Industri Global</h2>
            <p>
              Implementasi AI dalam berbagai sektor industri menunjukkan pertumbuhan eksponensial. Dari otomasi manufaktur hingga personalisasi layanan kesehatan, teknologi ini membuka peluang baru yang sebelumnya tidak terbayangkan. Para ahli memperkirakan dampak ekonomi global mencapai triliunan dollar dalam dekade mendatang.
            </p>
            <a href="#" className="read-link">Baca Artikel →</a>
          </article>

          {/* Sidebar */}
          <aside className="sidebar">
            <h2 className="sidebar-title">Top Stories</h2>
            {sidebarItems.map((item, index) => (
              <div key={index} className="sidebar-item">
                <h3>{item.title}</h3>
                <p className="meta">{item.category} • {item.time}</p>
              </div>
            ))}
          </aside>
        </div>

        {/* Latest News Section */}
        <section className="latest">
          <h2 className="section-title">BERITA TERKINI</h2>
          <div className="articles-list">
            {latestArticles.map((article, index) => (
              <article key={index} className="article-card">
                <span className="category">{article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <a href="#" className="read-link">Selengkapnya →</a>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default News;