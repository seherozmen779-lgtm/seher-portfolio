import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolyo sitesi iletişim mesajı - ${form.name}`
    );

    const body = encodeURIComponent(
      `Ad: ${form.name}\nE-posta: ${form.email}\n\nMesaj:\n${form.message}`
    );

    window.location.href =
      `mailto:seherozmen779@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <main className="page contact-page">
      <section className="contact-heading">
        <p className="contact-eyebrow">İLETİŞİM</p>
        <h1>Birlikte bir şeyler üretelim.</h1>
        <p>
          Projeler, staj fırsatları veya veri analizi
          hakkında konuşmak istersen bana ulaşabilirsin.
        </p>
      </section>

      <div className="contact-grid">
        <section className="contact-info">
          <h2>İletişim bilgileri</h2>
          <p>
            Yeni fırsatlara, projelere ve öğrenmeye her
            zaman açığım.
          </p>

          <a href="mailto:seherozmen779@gmail.com">
            <span>E-posta</span>
            <strong>E-posta gönder ↗</strong>
          </a>

          <a
            href="https://www.linkedin.com/in/seher-%C3%B6zmen-8b7891401"
            target="_blank"
            rel="noreferrer"
          >
            <span>Profesyonel profil</span>
            <strong>LinkedIn ↗</strong>
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Kod ve projeler</span>
            <strong>GitHub ↗</strong>
          </a>
        </section>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Mesaj gönder</h2>

          <label htmlFor="contact-name">Adın</label>
          <input
            id="contact-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Adını yaz"
            required
          />

          <label htmlFor="contact-email">seherozmen779@gmail.com</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="ornek@mail.com"
            required
          />

          <label htmlFor="contact-message">Mesajın</label>
          <textarea
            id="contact-message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Mesajını buraya yaz..."
            rows={5}
            required
          />

          <button type="submit">E-posta ile gönder ↗</button>
          <p className="contact-note">
            Gönder butonu e-posta uygulamanı açar.
          </p>
        </form>
      </div>
    </main>
  );
}
