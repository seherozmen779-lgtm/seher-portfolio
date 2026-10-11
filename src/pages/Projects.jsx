const projects = [
  {
    title: 'Hastalık Durumu Tahmini',
    technology: 'Python · Makine Öğrenmesi',
    description:
      'Veri temizleme, veri analizi ve sınıflandırma modelleri üzerine çalışma.',
  },
  {
    title: 'Satış Verileri Analizi',
    technology: 'Excel · SQL',
    description:
      'Satış verilerini inceleme, ürünleri karşılaştırma ve grafikler oluşturma.',
  },
  {
    title: 'Veri Görselleştirme',
    technology: 'Python · Grafikler',
    description:
      'Veri setlerindeki eğilimleri ve değişkenler arasındaki ilişkileri inceleme.',
  },
]

export default function Projects() {
  return (
    <main className="page">
      <p className="eyebrow">ÇALIŞMALARIM</p>
      <h1>Projelerim</h1>

      <p className="intro">
        Üzerinde çalıştığım ve zamanla geliştireceğim projeler.
      </p>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <p className="project-category">{project.technology}</p>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </main>
  )
}
