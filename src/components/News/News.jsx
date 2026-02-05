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
      time: '2 Jam Lalu',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop'
    },
    {
      title: 'Startup Lokal Raih Pendanaan 50M',
      category: 'Bisnis',
      time: '4 Jam Lalu',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop'
    },
    {
      title: 'Terobosan Baru Teknologi Quantum',
      category: 'Sains',
      time: '6 Jam Lalu',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop'
    },
    {
      title: 'Transformasi Digital Sektor Pendidikan',
      category: 'Edukasi',
      time: '8 Jam Lalu',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop'
    }
  ];

  const latestArticles = [
    {
      category: 'Teknologi',
      title: 'Inovasi Chip Generasi Terbaru',
      excerpt: 'Prosesor baru dengan arsitektur revolusioner menjanjikan peningkatan performa hingga 300% dengan konsumsi daya lebih rendah.',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&h=400&fit=crop'
    },
    {
      category: 'Bisnis',
      title: 'Ekonomi Digital Tumbuh Pesat',
      excerpt: 'Transaksi e-commerce meningkat drastis dengan adopsi pembayaran digital yang semakin masif di seluruh negeri.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    },
    {
      category: 'Lifestyle',
      title: 'Tren Smart Home 2026',
      excerpt: 'Integrasi IoT dalam rumah modern menciptakan pengalaman hidup yang lebih efisien dan nyaman.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop'
    },
    {
      category: 'Sains',
      title: 'Eksplorasi Luar Angkasa',
      excerpt: 'Misi baru ke Mars mengungkap temuan mengejutkan tentang kemungkinan kehidupan di planet merah.',
      image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=600&h=400&fit=crop'
    },
    {
      category: 'Kesehatan',
      title: 'Terapi Gen Masa Depan',
      excerpt: 'Penelitian terbaru menunjukkan potensi luar biasa dalam penyembuhan penyakit genetik yang selama ini sulit diatasi.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop'
    },
    {
      category: 'Olahraga',
      title: 'Teknologi Wearable Atlet',
      excerpt: 'Perangkat pintar membantu atlet mengoptimalkan performa dengan analisis data real-time yang akurat.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop'
    }
  ];

  return (
    <div className="news-container">
      {/* Top Bar with Date */}
      <div className="news-topbar">
        <div className="news-topbar__date">{currentDate}</div>
      </div>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section with Image Background */}
        <section className={`hero-news ${isVisible ? 'visible' : ''}`}>
          <div className="hero-news__image">
            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&h=800&fit=crop" alt="Technology Future" />
          </div>
          <div className="hero-news__overlay"></div>
          <div className="hero-news__content">
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
            <a href="/news/detail" className="read-more">Baca Selengkapnya</a>
          </div>
        </section>

        {/* Featured & Sidebar Grid */}
        <div className="news-grid">
          {/* Featured Article */}
          <article className="featured">
            <div className="featured-image">
              <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop" alt="AI Industry" />
            </div>
            <h2>Artificial Intelligence Mengubah Industri Global</h2>
            <p>
              Implementasi AI dalam berbagai sektor industri menunjukkan pertumbuhan eksponensial. Dari otomasi manufaktur hingga personalisasi layanan kesehatan, teknologi ini membuka peluang baru yang sebelumnya tidak terbayangkan. Para ahli memperkirakan dampak ekonomi global mencapai triliunan dollar dalam dekade mendatang.
            </p>
            <a href="/news/detail" className="read-link">Baca Artikel →</a>
          </article>

          {/* Sidebar */}
          <aside className="sidebar">
            <h2 className="sidebar-title">Top Stories</h2>
            {sidebarItems.map((item, index) => (
              <div key={index} className="sidebar-item">
                <div className="sidebar-item__image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="sidebar-item__content">
                  <h3>{item.title}</h3>
                  <p className="meta">{item.category} • {item.time}</p>
                </div>
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
                <div className="article-card__image">
                  <img src={article.image} alt={article.title} />
                  <span className="category">{article.category}</span>
                </div>
                <div className="article-card__content">
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <a href="/news/detail" className="read-link">Selengkapnya →</a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default News;