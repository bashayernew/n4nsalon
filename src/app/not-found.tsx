import { routing } from "@/i18n/routing";

export default function RootNotFound() {
  return (
    <html lang={routing.defaultLocale} dir="ltr">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          background: "#f0ebe2",
          color: "#0f0e0c",
        }}
      >
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h1
            style={{
              fontSize: "1.25rem",
              fontWeight: 500,
              letterSpacing: "0.05em",
              marginBottom: "0.75rem",
            }}
          >
            Page not found
          </h1>
          <p style={{ color: "#5e574e", marginBottom: "1.5rem" }}>
            The page you are looking for does not exist.
          </p>
          <a
            href={`/${routing.defaultLocale}`}
            style={{
              display: "inline-block",
              padding: "0.625rem 1.5rem",
              background: "#141210",
              color: "#f7f4ee",
              textDecoration: "none",
              fontSize: "0.8125rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Go to homepage
          </a>
        </div>
      </body>
    </html>
  );
}
