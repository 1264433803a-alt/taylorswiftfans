import { Link } from "@tanstack/react-router";
import { LanguageSwitch } from "@/components/language-switch";
import { useI18n } from "@/lib/i18n";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { signOut } from "@/lib/auth/client";

export function SiteHeader() {
  const { t } = useI18n();
  const { user, isPending } = useCurrentUserState();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-2.5 text-ink no-underline"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-merlot font-display text-sm font-semibold text-ivory">
            {t.brandMark}
          </span>
          <span className="truncate font-display text-lg font-semibold tracking-tight sm:text-xl">
            {t.brand}
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-6 min-[768px]:flex">
          <a
            href="#concerts"
            className="text-sm font-medium text-ink-soft no-underline transition-opacity hover:opacity-70"
          >
            {t.navConcerts}
          </a>
          <a
            href="#why"
            className="text-sm font-medium text-ink-soft no-underline transition-opacity hover:opacity-70"
          >
            {t.navWhy}
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-4">
          {isPending ? (
            <div className="hidden h-9 w-16 animate-pulse rounded-full bg-ink/8 sm:block" />
          ) : user ? (
            <button
              type="button"
              onClick={() => void signOut()}
              className="hidden h-9 rounded-full px-3 text-sm font-medium text-muted hover:text-ink sm:inline-flex sm:items-center"
            >
              {t.signOut}
            </button>
          ) : (
            <Link
              to="/login"
              className="hidden h-9 items-center rounded-full px-3 text-sm font-medium text-ink-soft no-underline hover:text-ink sm:inline-flex"
            >
              {t.signIn}
            </Link>
          )}
          <LanguageSwitch />
        </div>
      </div>
      <nav className="flex gap-5 border-t border-line px-4 py-2.5 min-[768px]:hidden">
        <a
          href="#concerts"
          className="text-sm font-medium text-ink-soft no-underline"
        >
          {t.navConcerts}
        </a>
        <a href="#why" className="text-sm font-medium text-ink-soft no-underline">
          {t.navWhy}
        </a>
      </nav>
    </header>
  );
}
