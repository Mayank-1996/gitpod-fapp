export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/login">Login</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
