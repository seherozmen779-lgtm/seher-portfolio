import { Link } from 'react-router-dom'

const skills = [
  'Python',
  'SQL',
  'Excel',
  'Pandas',
  'Veri Görselleştirme',
  'Makine Öğrenmesi',
]

export default function Home() {
  return (
    <main className="page home-page">
      <section className="hero-content">
        <div className="profile-badge">
          <span className="status-dot"></span>
          Veri analizi alanında kendimi geliştiriyorum
        </div>

        <p className="eyebrow">MERHABA, BEN SEHER ÖZMEN</p>

        <h1>
          Veriyi anlama,
          <br />
          <span className="gradient-text">anlamlı sonuçlara</span>
          <br />
          dönüştürme yolculuğundayım.
        </h1>

        <p className="intro">
          Manisa Celal Bayar Üniversitesi Büyük Veri Analistliği
          öğrencisiyim. Python, SQL ve veri görselleştirme alanlarında
          projeler geliştirerek analitik becerilerimi ilerletiyorum.
        </p>

        <div className="home-links">
          <Link className="primary-button" to="/projelerim">
            Projelerimi incele ↗
          </Link>

          <Link className="secondary-button" to="/hakkimda">
            Beni tanı
          </Link>
        </div>

        <div className="skills-section">
          <p className="skills-heading">ÜZERİNDE ÇALIŞTIĞIM ALANLAR</p>

          <div className="skills-list">
            {skills.map((skill) => (
              <span className="skill-tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="profile-panel">
        <div className="profile-orbit orbit-one"></div>
        <div className="profile-orbit orbit-two"></div>

        <div className="profile-avatar">
  <img src="/seher.jpeg" alt="Seher Özmen" />
</div>

        <p className="profile-name">Seher Özmen</p>
        <p className="profile-role">Büyük Veri Analistliği Öğrencisi</p>

        <div className="profile-divider"></div>

        <div className="profile-info">
          <span className="info-icon">⌘</span>
          <div>
            <strong>Veri Analizi</strong>
            <p>Veriden içgörü elde etme</p>
          </div>
        </div>

        <div className="profile-info">
          <span className="info-icon">⌁</span>
          <div>
            <strong>Yazılım</strong>
            <p>Yeni teknolojiler öğrenme</p>
          </div>
        </div>

        <div className="profile-info">
          <span className="info-icon">↗</span>
          <div>
            <strong>Sürekli gelişim</strong>
            <p>Projelerle deneyim kazanma</p>
          </div>
        </div>

        <div className="floating-label">
          <span className="status-dot"></span>
          Öğreniyor ve üretiyor
        </div>
      </section>
    </main>
  )
}
