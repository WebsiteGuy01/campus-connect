export function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 text-sm text-foreground/70 sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} CampusConnect. Built for university communities.</p>
      </div>
    </footer>
  );
}
