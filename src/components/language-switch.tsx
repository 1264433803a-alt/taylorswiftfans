import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitch({ tone = "paper" }: { tone?: "paper" | "night" }) {
  const { lang, setLang, t } = useI18n();
  const isNight = tone === "night";

  return (
    <div
      role="group"
      aria-label={t.langAria}
      className={cn(
        "flex h-11 shrink-0 items-center rounded-full p-1",
        isNight ? "bg-ivory/8" : "bg-ink/6",
      )}
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={cn(
          "h-9 min-w-11 rounded-full px-3 text-xs font-medium tracking-wide transition-colors duration-150",
          lang === "en"
            ? isNight
              ? "bg-ivory text-ink"
              : "bg-ink text-ivory"
            : isNight
              ? "text-ivory/70 hover:text-ivory"
              : "text-muted hover:text-ink",
        )}
      >
        {t.langEn}
      </button>
      <button
        type="button"
        onClick={() => setLang("zh")}
        aria-pressed={lang === "zh"}
        className={cn(
          "h-9 min-w-11 rounded-full px-3 text-xs font-medium tracking-wide transition-colors duration-150",
          lang === "zh"
            ? isNight
              ? "bg-ivory text-ink"
              : "bg-ink text-ivory"
            : isNight
              ? "text-ivory/70 hover:text-ivory"
              : "text-muted hover:text-ink",
        )}
      >
        {t.langZh}
      </button>
    </div>
  );
}
