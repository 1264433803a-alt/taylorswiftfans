import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-line bg-paper-2">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <div>
          <p className="font-display text-xl font-semibold tracking-tight text-ink">
            {t.brand}
          </p>
          <p className="mt-1 max-w-md text-sm text-muted">{t.footerNote}</p>
        </div>
        <p className="text-sm text-muted">{t.footerRights}</p>
      </div>
    </footer>
  );
}
