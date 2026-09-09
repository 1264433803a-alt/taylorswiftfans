import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as ArrowDown } from "../_libs/lucide-react.mjs";
import { o as useI18n } from "./router-BlH2ykBS.mjs";
import { a as signOut, n as LanguageSwitch, r as authClient, t as Button } from "./button-BlBRFBql.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CMYUoufc.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Current user + loading state. Same behavior in live preview and when deployed:
*   - Auth enabled (default) -> the real signed-in user; `user` is `null` while
*                            the session resolves (`isPending: true`) and when
*                            signed out (`isPending: false`). Session comes from
*                            Better Auth `useSession()` → `/api/auth/get-session`
*                            (cookie when deployed; bearer in live preview).
*   - Auth disabled (`VITE_AUTH_ENABLED=false`) -> `DEV_USER`, never pending.
*
* Protect a route by waiting out `isPending` before acting on `user` —
* redirecting on `user: null` alone bounces signed-in visitors to sign-in on
* every hard reload:
*
*   import { RedirectToSignIn } from "@/lib/auth/gates";
*   const { user, isPending } = useCurrentUserState();
*   if (isPending) return null;              // still resolving — don't redirect yet
*   if (!user) return <RedirectToSignIn />;  // definitely signed out
*
* `authEnabled` is a module-level constant fixed at load, so the guarded hook
* call keeps a stable hook order across every render of a given component.
*/
function useCurrentUserState() {
	const { data, isPending } = authClient.useSession();
	const user = data?.user;
	return {
		user: user ? {
			id: user.id,
			displayName: user.name ?? null,
			primaryEmail: user.email ?? null,
			profileImageUrl: user.image ?? null,
			isDevFallback: false
		} : null,
		isPending
	};
}
function SiteHeader() {
	const { t } = useI18n();
	const { user, isPending } = useCurrentUserState();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex min-w-0 items-center gap-2.5 text-ink no-underline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-9 shrink-0 place-items-center rounded-full bg-merlot font-display text-sm font-semibold text-ivory",
						children: t.brandMark
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate font-display text-lg font-semibold tracking-tight sm:text-xl",
						children: t.brand
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "ml-auto hidden items-center gap-6 min-[768px]:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#concerts",
						className: "text-sm font-medium text-ink-soft no-underline transition-opacity hover:opacity-70",
						children: t.navConcerts
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#why",
						className: "text-sm font-medium text-ink-soft no-underline transition-opacity hover:opacity-70",
						children: t.navWhy
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-center gap-2 md:ml-4",
					children: [isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden h-9 w-16 animate-pulse rounded-full bg-ink/8 sm:block" }) : user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => void signOut(),
						className: "hidden h-9 rounded-full px-3 text-sm font-medium text-muted hover:text-ink sm:inline-flex sm:items-center",
						children: t.signOut
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "hidden h-9 items-center rounded-full px-3 text-sm font-medium text-ink-soft no-underline hover:text-ink sm:inline-flex",
						children: t.signIn
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitch, {})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "flex gap-5 border-t border-line px-4 py-2.5 min-[768px]:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#concerts",
				className: "text-sm font-medium text-ink-soft no-underline",
				children: t.navConcerts
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#why",
				className: "text-sm font-medium text-ink-soft no-underline",
				children: t.navWhy
			})]
		})]
	});
}
function SiteFooter() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-line bg-paper-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-xl font-semibold tracking-tight text-ink",
				children: t.brand
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 max-w-md text-sm text-muted",
				children: t.footerNote
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: t.footerRights
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Concerts, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Why, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function Hero() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate min-h-[88dvh] overflow-hidden bg-night text-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/hero.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-night via-night/55 to-night/25" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex min-h-[88dvh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "reveal font-display text-sm tracking-[0.22em] text-blush uppercase",
						children: t.heroKicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "reveal reveal-delay-1 mt-3 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl",
						children: t.heroTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "reveal reveal-delay-2 mt-5 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg",
						children: t.heroLead
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal reveal-delay-3 mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ivory",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#concerts",
								children: [t.heroCtaConcerts, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-4" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "night",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#why",
								children: t.heroCtaWhy
							})
						})]
					})
				]
			})
		]
	});
}
function Concerts() {
	const { t } = useI18n();
	const stats = [
		{
			n: "149",
			label: t.concertsStatShows
		},
		{
			n: "51",
			label: t.concertsStatCities
		},
		{
			n: "21",
			label: t.concertsStatCountries
		},
		{
			n: "5",
			label: t.concertsStatContinents
		}
	];
	const shows = [
		{
			img: "/images/wembley.jpg",
			city: t.show1City,
			venue: t.show1Venue,
			date: t.show1Date,
			note: t.show1Note
		},
		{
			img: "/images/tokyo.jpg",
			city: t.show2City,
			venue: t.show2Venue,
			date: t.show2Date,
			note: t.show2Note
		},
		{
			img: "/images/singapore.jpg",
			city: t.show3City,
			venue: t.show3Venue,
			date: t.show3Date,
			note: t.show3Note
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "concerts",
		className: "scroll-mt-24 bg-night py-20 text-ivory sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm tracking-[0.22em] text-blush uppercase",
					children: t.concertsKicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
					children: t.concertsTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-base leading-relaxed text-ivory/72 sm:text-lg",
					children: t.concertsLead
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-line-night sm:grid-cols-4",
					children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-night-2 px-5 py-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs tracking-wide text-ivory/50 uppercase",
							children: s.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 font-display text-4xl font-semibold tracking-tight",
							children: s.n
						})]
					}, s.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					className: "mt-12 overflow-hidden rounded-xl bg-night-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/vancouver.jpg",
							alt: "",
							className: "h-72 w-full object-cover sm:h-96 lg:h-full"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-center p-6 sm:p-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex w-fit rounded-full bg-merlot px-3 py-1 text-xs font-medium tracking-wide text-ivory",
									children: t.featuredBadge
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 text-sm text-ivory/55",
									children: [
										t.featuredCity,
										" · ",
										t.featuredVenue
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl",
									children: t.featuredTitle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-blush",
									children: t.featuredDate
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-ivory/70",
									children: t.featuredBody
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-6 lg:grid-cols-3",
					children: shows.map((show) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "overflow-hidden rounded-lg bg-night-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: show.img,
							alt: "",
							className: "h-52 w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-wide text-ivory/50 uppercase",
									children: show.date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-display text-2xl font-semibold tracking-tight",
									children: show.city
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-blush",
									children: show.venue
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-ivory/70",
									children: show.note
								})
							]
						})]
					}, show.venue))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
						className: "overflow-hidden rounded-lg bg-night-2 lg:col-span-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/microphone.jpg",
								alt: "",
								className: "h-52 w-full object-cover sm:h-full"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex w-fit rounded-full border border-line-night px-3 py-1 text-xs font-medium tracking-wide text-blush",
										children: t.filmBadge
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-2xl font-semibold tracking-tight",
										children: t.filmTitle
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-ivory/50",
										children: t.filmMeta
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-ivory/70",
										children: t.filmBody
									})
								]
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex flex-col justify-center rounded-lg border border-line-night p-6 sm:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-semibold tracking-tight",
							children: t.upcomingTitle
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-ivory/70",
							children: t.upcomingBody
						})]
					})]
				})
			]
		})
	});
}
function Why() {
	const { t } = useI18n();
	const reasons = [
		{
			img: "/images/lyrics.jpg",
			title: t.reason1Title,
			body: t.reason1Body
		},
		{
			img: "/images/polaroids.jpg",
			title: t.reason2Title,
			body: t.reason2Body
		},
		{
			img: "/images/bracelets.jpg",
			title: t.reason3Title,
			body: t.reason3Body
		},
		{
			img: "/images/hero.jpg",
			title: t.reason4Title,
			body: t.reason4Body
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "why",
		className: "scroll-mt-24 bg-paper py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm tracking-[0.22em] text-merlot uppercase",
					children: t.whyKicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl",
					children: t.whyTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg",
					children: t.whyLead
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-8 md:grid-cols-2",
					children: reasons.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: r.img,
									alt: "",
									className: "h-56 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl",
								children: r.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-ink-soft",
								children: r.body
							})
						]
					}, r.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "mt-16 rounded-xl bg-paper-2 px-6 py-10 sm:px-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-2xl font-medium italic leading-snug tracking-tight text-ink sm:text-3xl",
						children: [
							"“",
							t.quote,
							"”"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
						className: "mt-5 text-sm text-muted",
						children: ["— ", t.quoteAttr]
					})]
				})
			]
		})
	});
}
//#endregion
export { Home as component };
