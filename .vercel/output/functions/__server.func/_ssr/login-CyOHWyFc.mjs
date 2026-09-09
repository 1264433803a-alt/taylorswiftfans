import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as GROK_PROVIDERS, o as useI18n } from "./router-BlH2ykBS.mjs";
import { i as signIn, n as LanguageSwitch, t as Button } from "./button-BlBRFBql.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-CyOHWyFc.js
var import_jsx_runtime = require_jsx_runtime();
function Login() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-dvh bg-night text-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/microphone.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover opacity-40"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-b from-night/70 via-night/80 to-night" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex min-h-dvh max-w-md flex-col px-5 py-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "inline-flex h-11 items-center gap-2 text-sm text-ivory/80 no-underline hover:text-ivory",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), t.loginBack]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitch, { tone: "night" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "my-auto rounded-xl border border-line-night bg-night-2/80 p-7 backdrop-blur-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm tracking-wide text-blush",
							children: t.brand
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 font-display text-4xl font-semibold tracking-tight text-ivory",
							children: t.loginTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-ivory/70",
							children: t.loginLead
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-7 space-y-3",
							children: GROK_PROVIDERS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "ivory",
								className: "w-full",
								onClick: () => signIn(p.providerId, { callbackURL: "/" }),
								children: p.idp === "google" ? t.loginGoogle : t.loginX
							}, p.providerId))
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { Login as component };
