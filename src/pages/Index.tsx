import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "QuaasX 108 — World's First AI Robotic Surgery in Ayurveda Shalya Tantra";
  }, []);

  return (
    <iframe
      src="/site.html"
      title="QuaasX 108 — AI Robotic Surgery in Ayurveda"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
        margin: 0,
        padding: 0,
        background: "#0A0A0A",
      }}
    />
  );
};

export default Index;
