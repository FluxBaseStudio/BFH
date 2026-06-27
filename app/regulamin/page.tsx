export const metadata = {
  title: "Regulamin strony | Bullet Family House",
  description: "Zasady korzystania ze strony internetowej Bullet Family House.",
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
          <h1>Regulamin strony</h1>
          <p>Zasady korzystania ze strony internetowej Bullet Family House.</p>
          <span>Ostatnia aktualizacja: 27.06.2026</span>
        </div>
      </section>

      <section className="legal-content">
        <div className="legal-container legal-card">
          <h2>1. Informacje ogólne</h2>
          <p>
            Niniejszy regulamin określa zasady korzystania ze strony internetowej Bullet Family House. Strona ma
            charakter informacyjny i prezentuje zakres usług budowlanych, przykładowe realizacje oraz dane kontaktowe.
          </p>

          <h2>2. Zakres usług prezentowanych na stronie</h2>
          <p>
            Na stronie prezentowane są informacje dotyczące m.in. wykończeń, elewacji, remontów łazienek, malowania,
            renowacji kamienic, stanów surowych, murowania, stropów, ścianek działowych, kostki brukowej, wieńców,
            słupów i schodów.
          </p>

          <h2>3. Korzystanie ze strony</h2>
          <ul>
            <li>Użytkownik powinien korzystać ze strony zgodnie z prawem i dobrymi obyczajami.</li>
            <li>Zabronione jest podejmowanie działań zakłócających działanie strony.</li>
            <li>Zabronione jest przesyłanie treści bezprawnych lub naruszających prawa osób trzecich.</li>
          </ul>

          <h2>4. Formularz kontaktowy i WhatsApp</h2>
          <p>
            Formularz kontaktowy służy do przygotowania wiadomości do wybranej osoby z zespołu. Po kliknięciu przycisku
            użytkownik przechodzi do WhatsApp z gotową treścią wiadomości. Wysłanie wiadomości następuje dopiero po
            potwierdzeniu jej w aplikacji WhatsApp.
          </p>

          <h2>5. Charakter informacji</h2>
          <p>
            Informacje na stronie nie stanowią wiążącej oferty. Ostateczny zakres prac, cena i termin realizacji są
            ustalane indywidualnie po kontakcie oraz analizie inwestycji.
          </p>

          <h2>6. Prawa autorskie</h2>
          <p>
            Treści, układ graficzny, zdjęcia, logo i elementy strony podlegają ochronie prawnej. Kopiowanie lub
            wykorzystywanie materiałów bez zgody właściciela strony jest zabronione, chyba że przepisy prawa stanowią inaczej.
          </p>

          <h2>7. Odpowiedzialność</h2>
          <p>
            Administrator dokłada starań, aby informacje były aktualne i poprawne, ale nie gwarantuje, że strona będzie
            zawsze dostępna bez przerw technicznych.
          </p>

          <h2>8. Zmiany regulaminu</h2>
          <p>
            Regulamin może zostać zaktualizowany, zwłaszcza w przypadku zmian funkcjonalności strony lub przepisów prawa.
          </p>

        </div>
      </section>
    </main>
  );
}
