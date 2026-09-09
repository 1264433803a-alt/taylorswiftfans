import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { Button } from "@/components/ui/button";
import { LanguageSwitch } from "@/components/language-switch";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  const { t } = useI18n();

  return (
    <main className="relative min-h-dvh bg-night text-ivory">
      <img
        src="/images/microphone.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-linear-to-b from-night/70 via-night/80 to-night" />

      <div className="relative z-10 mx-auto flex min-h-dvh max-w-md flex-col px-5 py-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex h-11 items-center gap-2 text-sm text-ivory/80 no-underline hover:text-ivory"
          >
            <ArrowLeft className="size-4" />
            {t.loginBack}
          </Link>
          <LanguageSwitch tone="night" />
        </div>

        <div className="my-auto rounded-xl border border-line-night bg-night-2/80 p-7 backdrop-blur-md">
          <p className="font-display text-sm tracking-wide text-blush">
            {t.brand}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-ivory">
            {t.loginTitle}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-ivory/70">
            {t.loginLead}
          </p>

          <div className="mt-7 space-y-3">
            {authEnabled ? (
              GROK_PROVIDERS.map((p) => (
                <Button
                  key={p.providerId}
                  type="button"
                  variant="ivory"
                  className="w-full"
                  onClick={() => signIn(p.providerId, { callbackURL: "/" })}
                >
                  {p.idp === "google" ? t.loginGoogle : t.loginX}
                </Button>
              ))
            ) : (
              <p className="text-sm text-ivory/60">{t.loginDisabled}</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
