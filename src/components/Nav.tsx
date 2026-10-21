import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/habits", label: "Habits" },
  { href: "/habits/new", label: "New habit" },
  { href: "/settings", label: "Settings" },
  { href: "/login", label: "Log in" },
  { href: "/health", label: "Health" },
];

export default function Nav() {
  return (
    <header className="border-b border-ink/10 bg-surface">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3">
        <Link href="/" className="font-semibold text-brand">
          HabitTracker
        </Link>
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="text-sm text-ink/70 hover:text-brand">
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}