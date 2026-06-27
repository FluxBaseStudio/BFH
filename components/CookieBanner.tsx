"use client";

import { useEffect, useState } from "react";

type CookieChoice = "accepted" | "rejected";

const STORAGE_KEY = "bfh-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);

  useEffect(() => {
    const savedChoice = window.localStorage.getItem(STORAGE_KEY);

    if (!savedChoice) {
      setVisible(true);
    }
  }, []);

  const saveChoice = (choice: CookieChoice) => {
    window.localStorage.setItem(STORAGE_KEY, choice);
    window.localStorage.setItem("bfh-cookie-consent-date", new Date().toISOString());
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Informacja o plikach cookies">
      <div className="cookie-card">
        <div className="cookie-content">
          <p className="eyebrow">Prywatność</p>
          <h2>Pliki cookies</h2>
          <p>
            Korzystamy z niezbędnych plików technicznych oraz zapisu Twojej decyzji
            o cookies. Obecnie nie uruchamiamy analityki ani reklam bez Twojej zgody.
          </p>

          {detailsOpen && (
            <div className="cookie-details">
              <p>
                <strong>Niezbędne:</strong> pomagają poprawnie wyświetlać stronę i zapamiętać wybór cookies.
              </p>
              <p>
                <strong>Analityczne/marketingowe:</strong> aktualnie nie są podpięte. Jeżeli zostaną dodane,
                należy uruchamiać je dopiero po zgodzie użytkownika.
              </p>
              <a href="/polityka-cookies">Przeczytaj politykę cookies</a>
            </div>
          )}
        </div>

        <div className="cookie-actions">
          <button type="button" className="cookie-secondary" onClick={() => setDetailsOpen((value) => !value)}>
            {detailsOpen ? "Ukryj szczegóły" : "Ustawienia"}
          </button>
          <button type="button" className="cookie-secondary" onClick={() => saveChoice("rejected")}>
            Odrzuć
          </button>
          <button type="button" className="cookie-primary" onClick={() => saveChoice("accepted")}>
            Akceptuję
          </button>
        </div>
      </div>
    </div>
  );
}
