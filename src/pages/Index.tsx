import { useEffect } from "react";

const ECOSYSTEM_LINKS: Array<{ label: string; href: string }> = [
  { label: "AI²", href: "https://ai2.quaasx108.com/" },
  { label: "Notebook", href: "https://notebook.quaasx108.com/" },
  { label: "Phytomind", href: "https://phytomind-ai2.quaasx108.com/" },
  { label: "Sheets", href: "https://excel.quaasx108.com/" },
  { label: "Labs", href: "https://manthana-labs.quaasx108.com/" },
  { label: "Scholar", href: "https://scholar.quaasx108.com/" },
  { label: "QuaasX108", href: "https://quaasx108.com/" },
];

const Index = () => {
  useEffect(() => {
    // Bypass the React shell for the static marketing page — instant load,
    // no iframe, no double-parse, full browser caching & SEO.
    window.location.replace("/site.html");
  }, []);

  return (
    <main
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0A0A0A",
        color: "#FFD700",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
      }}
    >
      <p style={{ fontSize: 18, fontWeight: 500, opacity: 0.85 }} aria-live="polite">
        Loading QuaasX 108…
      </p>
      <footer aria-label="QuaasX108 ecosystem" style={{ marginTop: 24, fontSize: 12 }}>
        <nav aria-label="QuaasX108 ecosystem" style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          {ECOSYSTEM_LINKS.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener" style={{ color: "#FFD700" }}>
              {l.label}
            </a>
          ))}
          <span aria-current="page" style={{ opacity: 0.6 }}>Shalya (you are here)</span>
        </nav>
      </footer>
    </main>
  );
};

export default Index;
