import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/ORamA.png"
              alt="Orama Logo"
              width={40}
              height={40}
              className="dark:invert"
            />
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-sm hover:text-accent-blue transition-colors"
            >
              HOME
            </Link>
            <Link
              href="/resources"
              className="text-sm hover:text-accent-blue transition-colors"
            >
              RESOURCES
            </Link>
            <Link
              href="/staff"
              className="text-sm hover:text-accent-blue transition-colors"
            >
              STAFF
            </Link>
            <Link
              href="/tos"
              className="text-sm hover:text-accent-blue transition-colors"
            >
              TOS
            </Link>
            <Link
              href="/contact"
              className="text-sm hover:text-accent-blue transition-colors"
            >
              CALENDAR AND BOOKING
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
