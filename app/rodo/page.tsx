export const metadata = {
  title: "RODO | Bullet Family House",
  description: "Klauzula informacyjna dotycząca przetwarzania danych osobowych.",
};

export default function LegalPage() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="legal-container">
          <a className="legal-back" href="/">
            ← Powrót do strony głównej
          </a>
          <p className="eyebrow">Bullet Family House</p>
          <h1>RODO</h1>
          <p>Klauzula informacyjna dotycząca przetwarzania danych osobowych.</p>
          <span>Ostatnia aktualizacja: 27.06.2026</span>
        </div>
      </section>

      <section className="legal-content">
        <div className="legal-container legal-card">
          <h2>1. Klauzula informacyjna RODO</h2>
          <p>
            Administratorem danych osobowych jest Bullet Family House. W sprawach dotyczących ochrony danych można
            kontaktować się telefonicznie przez numery wskazane na stronie.
          </p>

          <h2>2. Zakres danych</h2>
          <p>
            W zależności od sposobu kontaktu możemy przetwarzać: imię i nazwisko, numer telefonu, miejscowość,
            treść wiadomości, wybranego odbiorcę zapytania oraz dane wynikające z dalszej komunikacji.
          </p>

          <h2>3. Cele i podstawy przetwarzania</h2>
          <ul>
            <li>kontakt z osobą pytającą o usługę,</li>
            <li>przygotowanie informacji o zakresie prac lub wycenie,</li>
            <li>podjęcie działań przed zawarciem umowy,</li>
            <li>wykonanie ewentualnej umowy,</li>
            <li>realizacja obowiązków prawnych i ochrona przed roszczeniami.</li>
          </ul>

          <h2>4. Odbiorcy danych</h2>
          <p>
            Dane mogą być przekazywane dostawcom usług technicznych, hostingowych, komunikacyjnych, księgowych lub
            prawnych, jeżeli będzie to potrzebne do obsługi zapytania albo realizacji współpracy.
          </p>

          <h2>5. Okres przechowywania</h2>
          <p>
            Dane są przechowywane przez czas potrzebny do obsługi zapytania, a w przypadku rozpoczęcia współpracy
            przez okres wymagany przepisami prawa oraz okres przedawnienia ewentualnych roszczeń.
          </p>

          <h2>6. Prawa osoby, której dane dotyczą</h2>
          <p>
            Przysługuje Ci prawo dostępu do danych, sprostowania danych, usunięcia danych, ograniczenia przetwarzania,
            przenoszenia danych, wniesienia sprzeciwu oraz złożenia skargi do Prezesa Urzędu Ochrony Danych Osobowych.
          </p>

          <h2>7. Dobrowolność danych</h2>
          <p>
            Podanie danych jest dobrowolne, ale niezbędne do udzielenia odpowiedzi na zapytanie i kontaktu w sprawie
            inwestycji.
          </p>

        </div>
      </section>
    </main>
  );
}
