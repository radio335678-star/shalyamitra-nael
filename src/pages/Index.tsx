import { useEffect } from "react";

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
        alignItems: "center",
        justifyContent: "center",
        background: "#0A0A0A",
        color: "#FFD700",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
      }}
    >
      <h1 style={{ fontSize: 18, fontWeight: 500, opacity: 0.85 }}>
        Loading QuaasX 108…
      </h1>
    </main>
  );
};

export default Index;
