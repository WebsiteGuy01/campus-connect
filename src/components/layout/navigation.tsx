import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { navItems } from "@/lib/navigation";

export function Navigation() {
  return (
    <header className="border-b border-foreground/10 bg-background/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-base font-semibold tracking-tight sm:text-lg">
          CampusConnect
        </Link>

        <div className="flex items-center gap-3">
          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-1 overflow-x-auto whitespace-nowrap text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex rounded-md px-3 py-2 transition hover:bg-foreground/10"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
