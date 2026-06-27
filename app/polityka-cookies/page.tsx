export const metadata = {
  title: "Polityka plików cookies | Bullet Family House",
  description: "Informacje o technicznych plikach cookies, zgodach i ustawieniach prywatności.",
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
          <h1>Polityka plików cookies</h1>
          <p>Informacje o technicznych plikach cookies, zgodach i ustawieniach prywatności.</p>
          <span>Ostatnia aktualizacja: 27.06.2026</span>
        </div>
      </section>

      <section className="legal-content">
        <div className="legal-container legal-card">
          <h2>1. Czym są pliki cookies?</h2>
          <p>
            Cookies to niewielkie informacje zapisywane na urządzeniu użytkownika przez stronę internetową
            lub przeglądarkę. Mogą pomagać w poprawnym działaniu strony, zapamiętywaniu ustawień lub prowadzeniu
            pomiarów statystycznych.
          </p>

          <h2>2. Jakich cookies używa strona?</h2>
          <p>
            Strona Bullet Family House używa przede wszystkim technicznego zapisu decyzji użytkownika o cookies.
            W obecnej wersji nie uruchamiamy podpiętej analityki, remarketingu ani pikseli reklamowych.
          </p>

          <h2>3. Kategorie cookies</h2>
          <ul>
            <li>
              <strong>Niezbędne</strong> - potrzebne do poprawnego działania strony i zapisania decyzji użytkownika.
            </li>
            <li>
              <strong>Analityczne</strong> - aktualnie nieaktywne. Jeżeli zostaną dodane, powinny działać dopiero
              po uzyskaniu zgody.
            </li>
            <li>
              <strong>Marketingowe</strong> - aktualnie nieaktywne. Jeżeli zostaną dodane, powinny działać dopiero
              po uzyskaniu zgody.
            </li>
          </ul>

          <h2>4. Baner cookies</h2>
          <p>
            Baner cookies pozwala zaakceptować lub odrzucić pliki inne niż niezbędne. Aktualny wybór jest zapisywany
            lokalnie w przeglądarce użytkownika, aby baner nie pojawiał się przy każdej wizycie.
          </p>

          <h2>5. Zmiana ustawień cookies</h2>
          <p>
            Użytkownik może w każdej chwili usunąć zapisane dane strony w ustawieniach przeglądarki. Po wyczyszczeniu
            pamięci strony baner cookies pojawi się ponownie.
          </p>

          <h2>6. Zewnętrzne narzędzia</h2>
          <p>
            Strona może odsyłać do zewnętrznych usług, takich jak WhatsApp. Zewnętrzne serwisy mogą stosować własne
            cookies i własne zasady prywatności.
          </p>

        </div>
      </section>
    </main>
  );
}
