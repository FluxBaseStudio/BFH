export const metadata = {
  title: "Polityka prywatności | Bullet Family House",
  description: "Informacje o przetwarzaniu danych osobowych użytkowników strony Bullet Family House.",
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
          <h1>Polityka prywatności</h1>
          <p>Informacje o przetwarzaniu danych osobowych użytkowników strony Bullet Family House.</p>
          <span>Ostatnia aktualizacja: 27.06.2026</span>
        </div>
      </section>

      <section className="legal-content">
        <div className="legal-container legal-card">
          <h2>1. Administrator danych</h2>
          <p>
            Administratorem danych osobowych jest Bullet Family House. Kontakt w sprawach prywatności
            oraz realizacji praw związanych z danymi osobowymi jest możliwy telefonicznie przez numery
            wskazane na stronie w sekcji kontaktu.
          </p>

          <h2>2. Jakie dane mogą być przetwarzane?</h2>
          <p>
            W związku z korzystaniem ze strony możemy przetwarzać dane podane dobrowolnie przez użytkownika,
            w szczególności: imię i nazwisko, numer telefonu, miejscowość, treść wiadomości oraz wybranego
            odbiorcę zapytania.
          </p>
          <p>
            Formularz kontaktowy przygotowuje gotową wiadomość WhatsApp. Dane wpisane w formularzu nie są
            zapisywane w bazie danych strony, chyba że w przyszłości zostanie podpięty osobny system obsługi
            zapytań. Po kliknięciu przycisku użytkownik przechodzi do zewnętrznego komunikatora WhatsApp.
          </p>

          <h2>3. Cele przetwarzania danych</h2>
          <ul>
            <li>udzielenie odpowiedzi na zapytanie,</li>
            <li>przygotowanie wstępnej wyceny lub kontaktu w sprawie inwestycji,</li>
            <li>prowadzenie dalszej komunikacji z potencjalnym klientem,</li>
            <li>dochodzenie lub obrona przed ewentualnymi roszczeniami,</li>
            <li>spełnienie obowiązków wynikających z przepisów prawa, jeżeli dojdzie do współpracy.</li>
          </ul>

          <h2>4. Podstawy prawne</h2>
          <p>
            Dane mogą być przetwarzane w celu podjęcia działań przed zawarciem umowy, wykonania umowy,
            realizacji prawnie uzasadnionego interesu administratora, a w określonych przypadkach także
            w celu spełnienia obowiązków prawnych.
          </p>

          <h2>5. Odbiorcy danych</h2>
          <p>
            Dane mogą być przekazane podmiotom wspierającym obsługę strony, hosting, usługi techniczne
            oraz komunikację. Jeżeli użytkownik korzysta z WhatsApp, dane są przekazywane do tego zewnętrznego
            komunikatora zgodnie z jego zasadami.
          </p>

          <h2>6. Czas przechowywania danych</h2>
          <p>
            Dane są przetwarzane przez czas potrzebny do obsługi zapytania i dalszej komunikacji. Jeżeli
            dojdzie do współpracy, dane mogą być przechowywane przez okres wymagany przepisami prawa lub
            przez okres przedawnienia ewentualnych roszczeń.
          </p>

          <h2>7. Prawa użytkownika</h2>
          <p>
            Osoba, której dane dotyczą, może żądać dostępu do danych, ich sprostowania, usunięcia,
            ograniczenia przetwarzania, przeniesienia danych, wniesienia sprzeciwu oraz wycofania zgody,
            jeśli przetwarzanie odbywa się na podstawie zgody.
          </p>
          <p>
            Użytkownik ma także prawo złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych, jeżeli
            uzna, że dane są przetwarzane niezgodnie z prawem.
          </p>

          <h2>8. Dobrowolność podania danych</h2>
          <p>
            Podanie danych jest dobrowolne, ale może być potrzebne do kontaktu i przygotowania odpowiedzi
            na zapytanie.
          </p>

          <h2>9. Zautomatyzowane decyzje</h2>
          <p>
            Dane użytkowników nie są wykorzystywane do zautomatyzowanego podejmowania decyzji ani profilowania.
          </p>

        </div>
      </section>
    </main>
  );
}
