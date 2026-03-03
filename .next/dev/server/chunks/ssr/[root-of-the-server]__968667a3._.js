module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[project]/my-portfolio/context/ThemeContext.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createContext"])(undefined);
function ThemeProvider({ children }) {
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return 'light';
    });
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('portfolio-theme', theme);
    }, [
        theme
    ]);
    const toggleTheme = ()=>setTheme((t)=>t === 'light' ? 'dark' : 'light');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            toggleTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/my-portfolio/context/ThemeContext.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
function useTheme() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(ThemeContext);
    if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
    return ctx;
}
}),
"[project]/my-portfolio/components/Header.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/my-portfolio/node_modules/gsap/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$context$2f$ThemeContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-portfolio/context/ThemeContext.tsx [ssr] (ecmascript)");
;
;
;
;
const navLinks = [
    {
        href: '#hero',
        label: 'Home'
    },
    {
        href: '#projects',
        label: 'Projects'
    },
    {
        href: '#skills',
        label: 'Skills'
    },
    {
        href: '#about',
        label: 'About'
    },
    {
        href: '#contact',
        label: 'Contact'
    }
];
function Header() {
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$context$2f$ThemeContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const headerRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const toggleRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(headerRef.current, {
            y: -80,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
        });
    }, []);
    const handleThemeToggle = ()=>{
        toggleTheme();
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(toggleRef.current, {
            scale: 1.1
        }, {
            scale: 1,
            duration: 0.3,
            ease: 'back.out(1.7)'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
        ref: headerRef,
        className: "fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 transition-colors duration-500",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
            className: "max-w-6xl mx-auto flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                    href: "#hero",
                    className: "font-logo text-lg font-semibold text-zinc-900 dark:text-zinc-100 hover:opacity-80 transition-opacity",
                    children: "Portfolio"
                }, void 0, false, {
                    fileName: "[project]/my-portfolio/components/Header.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                    className: "hidden md:flex items-center gap-8",
                    children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                href: link.href,
                                className: "text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors",
                                children: link.label
                            }, void 0, false, {
                                fileName: "[project]/my-portfolio/components/Header.tsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this)
                        }, link.href, false, {
                            fileName: "[project]/my-portfolio/components/Header.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/my-portfolio/components/Header.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            ref: toggleRef,
                            onClick: handleThemeToggle,
                            className: "p-2 rounded-lg bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors",
                            "aria-label": theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
                            children: theme === 'dark' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5 text-zinc-100",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                }, void 0, false, {
                                    fileName: "[project]/my-portfolio/components/Header.tsx",
                                    lineNumber: 70,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-portfolio/components/Header.tsx",
                                lineNumber: 69,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5 text-zinc-900",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                }, void 0, false, {
                                    fileName: "[project]/my-portfolio/components/Header.tsx",
                                    lineNumber: 74,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-portfolio/components/Header.tsx",
                                lineNumber: 73,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/my-portfolio/components/Header.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                            className: "flex md:hidden gap-4",
                            children: navLinks.slice(0, 3).map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                        href: link.href,
                                        className: "text-sm font-medium text-zinc-600 dark:text-zinc-400",
                                        children: link.label
                                    }, void 0, false, {
                                        fileName: "[project]/my-portfolio/components/Header.tsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this)
                                }, link.href, false, {
                                    fileName: "[project]/my-portfolio/components/Header.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/my-portfolio/components/Header.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-portfolio/components/Header.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/my-portfolio/components/Header.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/my-portfolio/components/Header.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/my-portfolio/components/Hero.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/my-portfolio/node_modules/gsap/index.js [ssr] (ecmascript) <locals>");
;
;
;
function Hero() {
    const headlineRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const subRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const ctaRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const photoContainerRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const borderRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const mynameRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
            defaults: {
                ease: 'power3.out'
            }
        });
        tl.fromTo(headlineRef.current, {
            opacity: 0,
            y: 60
        }, {
            opacity: 1,
            y: 0,
            duration: 0.9
        }).fromTo(subRef.current, {
            opacity: 0,
            y: 40
        }, {
            opacity: 1,
            y: 0,
            duration: 0.7
        }, '-=0.5').fromTo(ctaRef.current, {
            opacity: 0,
            y: 30
        }, {
            opacity: 1,
            y: 0,
            duration: 0.6
        }, '-=0.4').fromTo(photoContainerRef.current, {
            opacity: 0,
            scale: 0.8
        }, {
            opacity: 1,
            scale: 1,
            duration: 0.8
        }, '-=1.2');
    }, []);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(borderRef.current, {
            rotation: 360,
            duration: 8,
            repeat: -1,
            ease: 'none'
        });
    }, []);
    // Add this useEffect (place it alongside your other useEffect hooks)
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const el = mynameRef.current;
        if (!el) return;
        // preserve original text for cleanup
        const original = el.textContent ?? '';
        // split into characters (keeps spaces)
        const chars = original.split('');
        // wrap each char in a span that is inline-block so GSAP can animate it
        el.innerHTML = chars.map((ch)=>{
            // preserve spaces visually
            const safe = ch === ' ' ? '&nbsp;' : ch;
            return `<span class="char" style="display:inline-block;white-space:pre">${safe}</span>`;
        }).join('');
        const nodes = el.querySelectorAll('.char');
        // initial state
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(nodes, {
            y: 30,
            opacity: 0,
            rotateX: -10
        });
        // animate in with a slight stagger while the page loads
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(nodes, {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.03,
            delay: 0.15
        });
        // cleanup: restore original text if component unmounts
        return ()=>{
            el.textContent = original;
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        id: "hero",
        className: "min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 px-6 py-20 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex-1 text-center lg:text-left max-w-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        ref: mynameRef,
                        className: "font-body text-[#06b6d4] font-bold text-2xl overflow-hidden",
                        children: "Hello I'm Sinishaw Regasa "
                    }, void 0, false, {
                        fileName: "[project]/my-portfolio/components/Hero.tsx",
                        lineNumber: 102,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        ref: headlineRef,
                        className: "font-body text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: "Web Developer"
                            }, void 0, false, {
                                fileName: "[project]/my-portfolio/components/Hero.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "block text-zinc-500 dark:text-zinc-400 mt-2",
                                children: "& Design Enthusiast"
                            }, void 0, false, {
                                fileName: "[project]/my-portfolio/components/Hero.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-portfolio/components/Hero.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        ref: subRef,
                        className: "font-body mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400",
                        children: "I craft polished interfaces and seamless experiences with React, modern CSS, and thoughtful motion design."
                    }, void 0, false, {
                        fileName: "[project]/my-portfolio/components/Hero.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                        ref: ctaRef,
                        href: "#projects",
                        className: "font-body mt-10 inline-block px-8 py-3 rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-medium text-lg hover:scale-105 active:scale-[0.98] transition-transform duration-200 shadow-lg dark:shadow-zinc-800/50",
                        children: "View My Work"
                    }, void 0, false, {
                        fileName: "[project]/my-portfolio/components/Hero.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-portfolio/components/Hero.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                ref: photoContainerRef,
                className: "relative flex-shrink-0 order-first lg:order-last",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                            ref: borderRef,
                            className: "absolute inset-0 w-full h-full -rotate-90",
                            viewBox: "0 0 100 100",
                            "aria-hidden": true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("circle", {
                                    cx: "50",
                                    cy: "50",
                                    r: "47",
                                    fill: "none",
                                    stroke: "url(#heroBorderGradient)",
                                    strokeWidth: "3",
                                    strokeDasharray: "8 12",
                                    strokeLinecap: "round"
                                }, void 0, false, {
                                    fileName: "[project]/my-portfolio/components/Hero.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("defs", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("linearGradient", {
                                        id: "heroBorderGradient",
                                        x1: "0%",
                                        y1: "0%",
                                        x2: "100%",
                                        y2: "100%",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                                offset: "0%",
                                                stopColor: "#06b6d4"
                                            }, void 0, false, {
                                                fileName: "[project]/my-portfolio/components/Hero.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                                offset: "50%",
                                                stopColor: "#10b981"
                                            }, void 0, false, {
                                                fileName: "[project]/my-portfolio/components/Hero.tsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                                offset: "100%",
                                                stopColor: "#06b6d4"
                                            }, void 0, false, {
                                                fileName: "[project]/my-portfolio/components/Hero.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-portfolio/components/Hero.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-portfolio/components/Hero.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-portfolio/components/Hero.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "absolute inset-[14px] rounded-full overflow-hidden bg-zinc-50 dark:bg-zinc-950 ring-2 ring-zinc-100 dark:ring-zinc-800",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                src: "/pp2.png",
                                alt: "Profile",
                                className: "w-full h-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/my-portfolio/components/Hero.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/my-portfolio/components/Hero.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-portfolio/components/Hero.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-portfolio/components/Hero.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-portfolio/components/Hero.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
}),
"[project]/my-portfolio/components/Projects.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Projects",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/my-portfolio/node_modules/gsap/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-portfolio/node_modules/gsap/ScrollTrigger.js [ssr] (ecmascript)");
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const projects = [
    {
        title: 'E-commerce Platform',
        desc: 'Full-stack store with cart, checkout, and admin dashboard.',
        tech: [
            'React',
            'Node.js',
            'Stripe'
        ],
        demo: '#',
        github: 'https://github.com'
    },
    {
        title: 'Task Management App',
        desc: 'Kanban-style productivity app with real-time sync.',
        tech: [
            'React',
            'Firebase',
            'Tailwind'
        ],
        demo: '#',
        github: 'https://github.com'
    },
    {
        title: 'Portfolio Site',
        desc: 'Minimal portfolio with smooth animations and dark mode.',
        tech: [
            'React',
            'GSAP',
            'Vite'
        ],
        demo: '#',
        github: 'https://github.com'
    },
    {
        title: 'Weather Dashboard',
        desc: 'Location-based weather with charts and forecasts.',
        tech: [
            'React',
            'OpenWeather API'
        ],
        demo: '#',
        github: 'https://github.com'
    },
    {
        title: 'Design System',
        desc: 'Reusable component library and design tokens.',
        tech: [
            'React',
            'Storybook',
            'Tailwind'
        ],
        demo: '#',
        github: 'https://github.com'
    }
];
function ProjectCard({ title, desc, tech, demo, github, index }) {
    const cardRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const el = cardRef.current;
        if (!el) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(el, {
            opacity: 0,
            y: 60
        }, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    }, [
        index
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        ref: cardRef,
        className: "dark:bg-[#537D96] bg-white border group p-6 rounded-2xl shadow-sm hover:shadow-xl dark:hover:shadow-zinc-900/50 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ease-out",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                className: "text-xl font-semibold  dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors",
                children: title
            }, void 0, false, {
                fileName: "[project]/my-portfolio/components/Projects.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: "mt-2 text-black dark:text-white text-sm",
                children: desc
            }, void 0, false, {
                fileName: "[project]/my-portfolio/components/Projects.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: tech.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "px-2 py-1 text-xs font-medium rounded-md bg-transparent border text-black dark:text-white",
                        style: {
                            borderColor: 'zinc'
                        },
                        children: t
                    }, t, false, {
                        fileName: "[project]/my-portfolio/components/Projects.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/my-portfolio/components/Projects.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "mt-5 flex gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                        href: demo,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-sm font-medium text-black dark:text-white hover:underline",
                        children: "Live Demo →"
                    }, void 0, false, {
                        fileName: "[project]/my-portfolio/components/Projects.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                        href: github,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-sm font-medium text-black dark:text-white hover:underline",
                        children: "GitHub"
                    }, void 0, false, {
                        fileName: "[project]/my-portfolio/components/Projects.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-portfolio/components/Projects.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-portfolio/components/Projects.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
function Projects() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(titleRef.current, {
            opacity: 0,
            y: 40
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        id: "projects",
        ref: sectionRef,
        style: {
            backgroundColor: '#F4F0E4'
        },
        className: "py-24 px-6 text-zinc-900 dark:text-zinc-100 transition-colors duration-500",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                    ref: titleRef,
                    className: "font-header text-3xl text-black sm:text-4xl font-bold text-center mb-16",
                    children: "Projects"
                }, void 0, false, {
                    fileName: "[project]/my-portfolio/components/Projects.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "font-body grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
                    children: projects.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ProjectCard, {
                            ...p,
                            index: i
                        }, p.title, false, {
                            fileName: "[project]/my-portfolio/components/Projects.tsx",
                            lineNumber: 157,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/my-portfolio/components/Projects.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/my-portfolio/components/Projects.tsx",
            lineNumber: 148,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/my-portfolio/components/Projects.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
}),
"[project]/my-portfolio/components/SkillCard.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkillCards",
    ()=>SkillCards
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// SkillCard.tsx
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$context$2f$ThemeContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-portfolio/context/ThemeContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/my-portfolio/node_modules/lucide-react/dist/esm/icons/chevron-left.js [ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/my-portfolio/node_modules/lucide-react/dist/esm/icons/chevron-right.js [ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/my-portfolio/node_modules/lucide-react/dist/esm/icons/external-link.js [ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/my-portfolio/node_modules/lucide-react/dist/esm/icons/code.js [ssr] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/my-portfolio/node_modules/lucide-react/dist/esm/icons/smartphone.js [ssr] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/my-portfolio/node_modules/lucide-react/dist/esm/icons/palette.js [ssr] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/my-portfolio/node_modules/gsap/index.js [ssr] (ecmascript) <locals>");
;
;
;
;
;
const CATEGORY_COLORS = {
    'Web': {
        primary: '#61DBFB',
        secondary: '#3A9FBC',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"]
    },
    'Android': {
        primary: '#FF8A50',
        secondary: '#CC6E40',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"]
    },
    'Graphics': {
        primary: '#7CFFB2',
        secondary: '#4ECB8A',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"]
    },
    'Default': {
        primary: '#94A3B8',
        secondary: '#64748B',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"]
    }
};
// Individual Card Component
function SkillCard({ skill, isActive, onClick, index }) {
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$context$2f$ThemeContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const cardRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const progressRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const categoryStyle = CATEGORY_COLORS[skill.category] || CATEGORY_COLORS.Default;
    const Icon = categoryStyle.icon;
    // Animate progress bar on mount
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (progressRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(progressRef.current, {
                width: '0%'
            }, {
                width: `${skill.level}%`,
                duration: 1.5,
                delay: index * 0.1,
                ease: "power2.out"
            });
        }
    }, [
        skill.level,
        index
    ]);
    // Single effect to handle ALL card styling (hover + active)
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!cardRef.current) return;
        let boxShadow = 'none';
        let scale = 1;
        // Determine styles based on state
        if (isActive) {
            // Active card: ring + shadow + subtle scale
            boxShadow = `0 0 0 4px ${categoryStyle.primary}, 0 20px 30px -10px ${categoryStyle.primary}80`;
            scale = 1.02;
        } else if (isHovered) {
            // Hovered (non-active) card: only shadow
            boxShadow = `0 20px 30px -10px ${categoryStyle.primary}80`;
            scale = 1;
        }
        // Apply styles with GSAP
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(cardRef.current, {
            boxShadow,
            scale,
            duration: 0.3,
            ease: "power2.out"
        });
    }, [
        isActive,
        isHovered,
        categoryStyle.primary
    ]);
    // Separate effect for content expansion (only when active changes)
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!contentRef.current) return;
        if (isActive) {
            __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(contentRef.current, {
                opacity: 0,
                height: 0,
                marginTop: 0
            }, {
                opacity: 1,
                height: 'auto',
                marginTop: 16,
                duration: 0.5,
                ease: "power2.inOut"
            });
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(contentRef.current, {
                opacity: 0,
                height: 0,
                marginTop: 0,
                duration: 0.3,
                ease: "power2.inOut"
            });
        }
    }, [
        isActive
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        ref: cardRef,
        onClick: onClick,
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        className: "relative rounded-2xl overflow-hidden cursor-pointer",
        style: {
            backgroundColor: theme === 'dark' ? '#1E293B' : '#FFFFFF'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: theme === 'dark' ? `linear-gradient(135deg, ${categoryStyle.secondary}20, #1E293B)` : `linear-gradient(135deg, ${categoryStyle.primary}10, #FFFFFF)`
                }
            }, void 0, false, {
                fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "relative p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "p-2 rounded-lg",
                                        style: {
                                            backgroundColor: `${categoryStyle.primary}20`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                            size: 18,
                                            color: categoryStyle.primary
                                        }, void 0, false, {
                                            fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium px-2 py-1 rounded-full",
                                        style: {
                                            backgroundColor: `${categoryStyle.primary}20`,
                                            color: categoryStyle.primary
                                        },
                                        children: skill.category
                                    }, void 0, false, {
                                        fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(motion.div, {
                                animate: isHovered ? 90 : 0,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                    size: 16,
                                    className: "text-zinc-400"
                                }, void 0, false, {
                                    fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold mb-2 text-black dark:text-white",
                        children: skill.name
                    }, void 0, false, {
                        fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-xs mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-zinc-500 dark:text-zinc-400",
                                        children: "Proficiency"
                                    }, void 0, false, {
                                        fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: categoryStyle.primary
                                        },
                                        children: [
                                            skill.level,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    ref: progressRef,
                                    className: "h-full rounded-full",
                                    style: {
                                        backgroundColor: categoryStyle.primary
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1.5 mb-3",
                        children: skill.evidence.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "text-xs px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300",
                                children: item
                            }, i, false, {
                                fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        ref: contentRef,
                        className: "overflow-hidden",
                        style: {
                            height: 0,
                            opacity: 0,
                            marginTop: 0
                        },
                        children: [
                            skill.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-sm text-zinc-600 dark:text-zinc-300 mb-3",
                                children: skill.description
                            }, void 0, false, {
                                fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this),
                            skill.projects && skill.projects.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2",
                                        children: "Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                                        lineNumber: 236,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: skill.projects.map((project, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-zinc-700 dark:text-zinc-300 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "w-1 h-1 rounded-full",
                                                        style: {
                                                            backgroundColor: categoryStyle.primary
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 21
                                                    }, this),
                                                    project
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                                                lineNumber: 241,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                                lineNumber: 235,
                                columnNumber: 13
                            }, this),
                            skill.links && skill.links.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2",
                                        children: "Related Skills"
                                    }, void 0, false, {
                                        fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                                        lineNumber: 256,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1.5",
                                        children: skill.links.map((link, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "text-xs px-2 py-1 rounded-md",
                                                style: {
                                                    backgroundColor: `${categoryStyle.primary}15`,
                                                    color: categoryStyle.primary
                                                },
                                                children: link
                                            }, i, false, {
                                                fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                                                lineNumber: 261,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                                        lineNumber: 259,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                                lineNumber: 255,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-portfolio/components/SkillCard.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
function SkillCards({ skills }) {
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$context$2f$ThemeContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const cardsRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    // Handle card click
    const handleCardClick = (index)=>{
        if (index === activeIndex) {
            // If clicking the same card, close it by setting active to -1
            setActiveIndex(-1);
        } else {
            setActiveIndex(index);
        }
    };
    // Navigate to next card
    const nextCard = ()=>{
        setActiveIndex((prev)=>(prev + 1) % skills.length);
    };
    // Navigate to previous card
    const prevCard = ()=>{
        setActiveIndex((prev)=>(prev - 1 + skills.length) % skills.length);
    };
    // Animate cards on mount
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (cardsRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(cardsRef.current.children, {
                opacity: 0,
                y: 30
            }, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            });
        }
    }, []);
    // Keyboard navigation
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (e.key === 'ArrowLeft') {
                prevCard();
            } else if (e.key === 'ArrowRight') {
                nextCard();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-black dark:text-white",
                        children: "Skills Portfolio"
                    }, void 0, false, {
                        fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: prevCard,
                                className: "p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors",
                                "aria-label": "Previous skill",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    size: 20,
                                    className: "text-zinc-700 dark:text-zinc-300"
                                }, void 0, false, {
                                    fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                                    lineNumber: 354,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                                lineNumber: 349,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "text-sm text-zinc-500 dark:text-zinc-400",
                                children: [
                                    activeIndex >= 0 ? activeIndex + 1 : '-',
                                    " / ",
                                    skills.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                                lineNumber: 356,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: nextCard,
                                className: "p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors",
                                "aria-label": "Next skill",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    size: 20,
                                    className: "text-zinc-700 dark:text-zinc-300"
                                }, void 0, false, {
                                    fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                                    lineNumber: 364,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                                lineNumber: 359,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                        lineNumber: 348,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                lineNumber: 342,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2 mb-8",
                children: Object.entries(CATEGORY_COLORS).map(([category, style])=>{
                    if (category === 'Default') return null;
                    const Icon = style.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        className: "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all hover:scale-105",
                        style: {
                            backgroundColor: `${style.primary}20`,
                            color: style.primary
                        },
                        onClick: ()=>{
                            // Find first skill in this category
                            const index = skills.findIndex((s)=>s.category === category);
                            if (index !== -1) setActiveIndex(index);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                                lineNumber: 388,
                                columnNumber: 15
                            }, this),
                            category
                        ]
                    }, category, true, {
                        fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                        lineNumber: 375,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                lineNumber: 370,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                ref: containerRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    ref: cardsRef,
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: skills.map((skill, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SkillCard, {
                            skill: skill,
                            index: index,
                            isActive: index === activeIndex,
                            onClick: ()=>handleCardClick(index)
                        }, skill.name, false, {
                            fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                            lineNumber: 402,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                    lineNumber: 397,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                lineNumber: 396,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "mt-6 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: skills.map((_, index)=>{
                        const categoryStyle = CATEGORY_COLORS[skills[index].category] || CATEGORY_COLORS.Default;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveIndex(index === activeIndex ? -1 : index),
                            className: `h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-8' : 'w-2'}`,
                            style: {
                                backgroundColor: index === activeIndex ? categoryStyle.primary : '#CBD5E1'
                            },
                            "aria-label": `Go to skill ${index + 1}`
                        }, index, false, {
                            fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                            lineNumber: 419,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                    lineNumber: 415,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                lineNumber: 414,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: "text-center text-xs text-zinc-500 dark:text-zinc-500 mt-4",
                children: "Use ← → arrow keys to navigate • Click cards to expand"
            }, void 0, false, {
                fileName: "[project]/my-portfolio/components/SkillCard.tsx",
                lineNumber: 438,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-portfolio/components/SkillCard.tsx",
        lineNumber: 340,
        columnNumber: 5
    }, this);
}
// Simple motion div component for GSAP rotation
function motionDiv({ animate, children, ...props }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (ref.current && animate !== undefined) {
            __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(ref.current, {
                rotation: animate,
                duration: 0.3,
                ease: "power2.out"
            });
        }
    }, [
        animate
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        ref: ref,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/my-portfolio/components/SkillCard.tsx",
        lineNumber: 459,
        columnNumber: 10
    }, this);
}
// Use the custom motion component
const motion = {
    div: motionDiv
};
}),
"[project]/my-portfolio/components/skill.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skills",
    ()=>Skills
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// Skills.tsx
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/my-portfolio/node_modules/gsap/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-portfolio/node_modules/gsap/ScrollTrigger.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$components$2f$SkillCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-portfolio/components/SkillCard.tsx [ssr] (ecmascript)");
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
// In Skills.tsx, update the skills array to remove Compiler and OpenGL
const skills = [
    {
        name: 'React',
        level: 90,
        category: 'Web',
        evidence: [
            'Portfolio site',
            '1 years'
        ],
        description: 'Building interactive UIs with hooks and context',
        projects: [
            'E-commerce Platform',
            'Dashboard App'
        ],
        links: [
            'GSAP',
            'Tailwind CSS'
        ]
    },
    {
        name: 'Tailwind CSS',
        level: 85,
        category: 'Web',
        evidence: [
            'Rapid UI dev',
            '1 years'
        ],
        description: 'Utility-first CSS framework for custom designs',
        projects: [
            'Marketing Site',
            'Admin Dashboard'
        ],
        links: [
            'React'
        ]
    },
    {
        name: 'GSAP',
        level: 80,
        category: 'Web',
        evidence: [
            'Animations',
            '1 years'
        ],
        description: 'Smooth, performant web animations',
        projects: [
            'Landing Pages',
            'Interactive Stories'
        ],
        links: [
            'Animation'
        ]
    },
    {
        name: 'Animation',
        level: 78,
        category: 'Web',
        evidence: [
            'Motion design',
            '1 years'
        ],
        description: 'Creating engaging motion experiences',
        projects: [
            'Product Demos',
            'Tutorials'
        ],
        links: [
            'GSAP'
        ]
    },
    {
        name: 'Node.js',
        level: 85,
        category: 'Web',
        evidence: [
            'Backend API',
            '1 years'
        ],
        description: 'Server-side JavaScript runtime environment',
        projects: [
            'REST API',
            'Auth Service'
        ],
        links: [
            'JavaScript',
            'React'
        ]
    },
    {
        name: 'JavaScript',
        level: 90,
        category: 'Web',
        evidence: [
            'ES6+',
            '1 years'
        ],
        description: 'Core web programming language',
        projects: [
            'Interactive Logic',
            'DOM Manipulation'
        ],
        links: [
            'React',
            'Node.js'
        ]
    },
    {
        name: 'Three.js',
        level: 75,
        category: 'Web',
        evidence: [
            '3D Scenes',
            '1 year'
        ],
        description: '3D graphics library for the browser',
        projects: [
            '3D Portfolio',
            'Visualizations'
        ],
        links: [
            'React',
            'GSAP'
        ]
    },
    {
        name: 'ConstraintLayout',
        level: 95,
        category: 'Android',
        evidence: [
            'Mobile app',
            '1 years'
        ],
        description: 'Complex responsive layouts for Android',
        projects: [
            'Social Media App',
            'Fitness Tracker'
        ],
        links: []
    },
    {
        name: 'OpenGL',
        level: 70,
        category: 'Graphics',
        evidence: [
            'Shader dev',
            '1 years'
        ],
        description: 'Low-level graphics programming',
        projects: [
            'Particle System',
            'Model Viewer'
        ],
        links: []
    }
];
function Skills() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const legendRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        // Title animation
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(titleRef.current, {
            opacity: 0,
            y: 40
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
        // Legend animation
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(legendRef.current, {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.3,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            }
        });
    }, []);
    // Group skills by category for the legend
    const skillsByCategory = skills.reduce((acc, skill)=>{
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {});
    // Get category color helper function
    const getCategoryColor = (category)=>{
        const colors = {
            'Web': '#61DBFB',
            'Android': '#FF8A50',
            'Compiler': '#9C27B0',
            'Graphics': '#7CFFB2'
        };
        return colors[category] || '#94A3B8';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        id: "skills",
        ref: sectionRef,
        className: "py-24 px-6 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors duration-500",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "font-body max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                    ref: titleRef,
                    className: "font-header text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4",
                    children: "Skills & Expertise"
                }, void 0, false, {
                    fileName: "[project]/my-portfolio/components/skill.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: "text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto",
                    children: "Hover over cards to explore details • Click to focus • Drag to rotate the carousel"
                }, void 0, false, {
                    fileName: "[project]/my-portfolio/components/skill.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$components$2f$SkillCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["SkillCards"], {
                    skills: skills
                }, void 0, false, {
                    fileName: "[project]/my-portfolio/components/skill.tsx",
                    lineNumber: 169,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    ref: legendRef,
                    className: "mt-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold mb-6 text-center",
                            children: "Skills Overview"
                        }, void 0, false, {
                            fileName: "[project]/my-portfolio/components/skill.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-6 mb-8",
                            children: Object.entries({
                                'Web': '#61DBFB',
                                'Android': '#FF8A50',
                                'Compiler': '#9C27B0',
                                'Graphics': '#7CFFB2'
                            }).map(([category, color])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "w-4 h-4 rounded-sm",
                                            style: {
                                                backgroundColor: color,
                                                boxShadow: `0 0 10px ${color}`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/my-portfolio/components/skill.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-zinc-700 dark:text-zinc-300",
                                            children: category
                                        }, void 0, false, {
                                            fileName: "[project]/my-portfolio/components/skill.tsx",
                                            lineNumber: 188,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, category, true, {
                                    fileName: "[project]/my-portfolio/components/skill.tsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/my-portfolio/components/skill.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                            children: Object.entries(skillsByCategory).map(([category, categorySkills])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-md px-3",
                                            style: {
                                                color: getCategoryColor(category)
                                            },
                                            children: category
                                        }, void 0, false, {
                                            fileName: "[project]/my-portfolio/components/skill.tsx",
                                            lineNumber: 197,
                                            columnNumber: 17
                                        }, this),
                                        categorySkills.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "group relative rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 px-4 py-3 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium text-black dark:text-white",
                                                                        children: s.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-portfolio/components/skill.tsx",
                                                                        lineNumber: 209,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    s.evidence && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-zinc-500 dark:text-zinc-400 mt-1",
                                                                        children: s.evidence.join(' • ')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-portfolio/components/skill.tsx",
                                                                        lineNumber: 211,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/my-portfolio/components/skill.tsx",
                                                                lineNumber: 208,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm font-semibold",
                                                                        style: {
                                                                            color: getCategoryColor(category)
                                                                        },
                                                                        children: [
                                                                            s.level,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/my-portfolio/components/skill.tsx",
                                                                        lineNumber: 217,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    s.links && s.links.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                        className: "relative",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                                className: "w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-600 group-hover:bg-zinc-400 transition-colors"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/my-portfolio/components/skill.tsx",
                                                                                lineNumber: 224,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                                className: "absolute right-0 top-6 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                                    className: "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs rounded py-1 px-2 whitespace-nowrap",
                                                                                    children: [
                                                                                        "Related: ",
                                                                                        s.links.join(', ')
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/my-portfolio/components/skill.tsx",
                                                                                    lineNumber: 227,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/my-portfolio/components/skill.tsx",
                                                                                lineNumber: 226,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/my-portfolio/components/skill.tsx",
                                                                        lineNumber: 223,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/my-portfolio/components/skill.tsx",
                                                                lineNumber: 216,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/my-portfolio/components/skill.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 h-1 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "h-full rounded-full transition-all duration-500",
                                                            style: {
                                                                width: `${s.level}%`,
                                                                backgroundColor: getCategoryColor(category)
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-portfolio/components/skill.tsx",
                                                            lineNumber: 238,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-portfolio/components/skill.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, s.name, true, {
                                                fileName: "[project]/my-portfolio/components/skill.tsx",
                                                lineNumber: 203,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, category, true, {
                                    fileName: "[project]/my-portfolio/components/skill.tsx",
                                    lineNumber: 196,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/my-portfolio/components/skill.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "text-center text-xs text-zinc-500 dark:text-zinc-500 mt-8",
                            children: "Click on any card in the 3D visualization above for more details and project examples"
                        }, void 0, false, {
                            fileName: "[project]/my-portfolio/components/skill.tsx",
                            lineNumber: 253,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-portfolio/components/skill.tsx",
                    lineNumber: 172,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/my-portfolio/components/skill.tsx",
            lineNumber: 160,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/my-portfolio/components/skill.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, this);
}
}),
"[project]/my-portfolio/components/About.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "About",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/my-portfolio/node_modules/gsap/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-portfolio/node_modules/gsap/ScrollTrigger.js [ssr] (ecmascript)");
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const timeline = [
    {
        role: 'Frontend Developer',
        desc: 'Led UI architecture and design systems.'
    },
    {
        role: 'UI/UX Designer',
        desc: 'Crafted user flows and high-fidelity prototypes.'
    },
    {
        role: 'Open Source Contributor',
        desc: 'Contributed to React and GSAP projects.'
    }
];
function About() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const bioRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const timelineRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const itemsRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(bioRef.current, {
            opacity: 0,
            y: 40
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
        const items = itemsRef.current?.querySelectorAll('.timeline-item');
        if (items?.length) {
            __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(items, {
                opacity: 0,
                x: -40
            }, {
                opacity: 1,
                x: 0,
                duration: 0.7,
                stagger: 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: timelineRef.current,
                    start: 'top 70%',
                    toggleActions: 'play none none reverse'
                }
            });
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        id: "about",
        ref: sectionRef,
        className: "py-24 px-6 bg-[#F4F0E4] text-zinc-900 dark:text-zinc-100 transition-colors duration-500",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "font-body max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                    className: "font-header text-3xl text-zinc-900 sm:text-4xl font-bold text-center mb-16",
                    children: "About Me"
                }, void 0, false, {
                    fileName: "[project]/my-portfolio/components/About.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    ref: bioRef,
                    className: "font-body max-w-2xl mx-auto text-center mb-20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-lg text-zinc-900 dark:text-zinc-400 leading-relaxed",
                        children: "I'm a web developer with a passion for clean code and thoughtful design. I specialize in building fast, accessible interfaces with React and modern tooling. When I'm not coding, I enjoy exploring design systems and experimenting with animations."
                    }, void 0, false, {
                        fileName: "[project]/my-portfolio/components/About.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/my-portfolio/components/About.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    ref: timelineRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                            className: "font-body text-xl text-zinc-900 font-semibold mb-10 text-center",
                            children: "Experience"
                        }, void 0, false, {
                            fileName: "[project]/my-portfolio/components/About.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            ref: itemsRef,
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-700 -translate-x-px sm:-translate-x-1/2"
                                }, void 0, false, {
                                    fileName: "[project]/my-portfolio/components/About.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                timeline.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: `timeline-item relative pl-12 sm:pl-0 pb-12 last:pb-0 ${i % 2 === 0 ? 'sm:pr-[52%] sm:text-right' : 'sm:pl-[52%] sm:text-left'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "absolute left-0 sm:left-1/2 w-3 h-3 rounded-full bg-zinc-900 dark:bg-zinc-100 -translate-x-1/2 top-1"
                                            }, void 0, false, {
                                                fileName: "[project]/my-portfolio/components/About.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "bg-zinc-50 dark:bg-zinc-900/80 rounded-xl p-5 border border-zinc-200 dark:border-zinc-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                        className: "text-lg font-semibold mt-1",
                                                        children: item.role
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-portfolio/components/About.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-sm text-zinc-500 dark:text-zinc-500",
                                                        children: item.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-portfolio/components/About.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/my-portfolio/components/About.tsx",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, item.role, true, {
                                        fileName: "[project]/my-portfolio/components/About.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-portfolio/components/About.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-portfolio/components/About.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/my-portfolio/components/About.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/my-portfolio/components/About.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
}),
"[project]/my-portfolio/components/Contact.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Contact",
    ()=>Contact,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/my-portfolio/node_modules/gsap/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-portfolio/node_modules/gsap/ScrollTrigger.js [ssr] (ecmascript)");
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function Contact() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const formRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    // Form state
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    // UI state
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [statusMessage, setStatusMessage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [uploadProgress, setUploadProgress] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(titleRef.current, {
            opacity: 0,
            y: 40
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }, []);
    // Small focus/blur scale effect using GSAP (keeps your original UX)
    const handleFocus = (nameAttr)=>{
        const input = formRef.current?.querySelector(`[name="${nameAttr}"]`);
        if (input && input.parentElement) {
            __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(input.parentElement, {
                scale: 1.02,
                duration: 0.18,
                ease: 'power2.out'
            });
        }
    };
    const handleBlur = (nameAttr)=>{
        const input = formRef.current?.querySelector(`[name="${nameAttr}"]`);
        if (input && input.parentElement) {
            __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(input.parentElement, {
                scale: 1,
                duration: 0.18,
                ease: 'power2.out'
            });
        }
    };
    // Basic client-side validation
    const validate = ()=>{
        if (!email.trim()) return 'Email is required.';
        // simple email regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return 'Please enter a valid email address.';
        if (!message.trim()) return 'Message is required.';
        if (name.trim().length > 100) return 'Name is too long.';
        if (message.length > 5000) return 'Message is too long.';
        return null;
    };
    // Submit handler: sends JSON if no file, otherwise sends FormData
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setStatusMessage(null);
        setErrorMessage(null);
        const validationError = validate();
        if (validationError) {
            setErrorMessage(validationError);
            return;
        }
        setLoading(true);
        setUploadProgress(null);
        try {
            // SIMULATION: For portfolio demo purposes (since backend might not be running)
            // Remove this block and uncomment the code below to use a real backend.
            await new Promise((resolve)=>setTimeout(resolve, 1500));
            if (file) {
                for(let i = 0; i <= 100; i += 10){
                    setUploadProgress(i);
                    await new Promise((resolve)=>setTimeout(resolve, 50));
                }
            }
            setStatusMessage('Message sent successfully! (Demo)');
            setName('');
            setEmail('');
            setMessage('');
            setFile(null);
            setUploadProgress(null);
            setTimeout(()=>setStatusMessage(null), 6000);
            return;
        // END SIMULATION
        /*
      let response: Response

      if (file) {
        // If you want attachments, backend must accept multipart/form-data (e.g., multer)
        const fd = new FormData()
        fd.append('name', name)
        fd.append('email', email)
        fd.append('message', message)
        fd.append('file', file)

        // Use fetch with progress: browser fetch doesn't provide progress for uploads natively.
        // For upload progress, use XMLHttpRequest. Below uses XHR to show progress bar.
        response = await new Promise<Response>((resolve, reject) => {
          const xhr = new XMLHttpRequest()
          xhr.open('POST', '/api/contact', true)

          xhr.onload = () => {
            // Build a Response-like object
            const headers = new Headers()
            const status = xhr.status
            const body = xhr.responseText
            // Create a Response object to keep handling consistent
            resolve(new Response(body, { status, headers }))
          }

          xhr.onerror = () => reject(new Error('Network error during file upload'))
          xhr.upload.onprogress = (event) => {
            if (event.lengthComputable) {
              const percent = Math.round((event.loaded / event.total) * 100)
              setUploadProgress(percent)
            }
          }

          xhr.send(fd)
        })
      } else {
        // Send JSON when no file attached
        response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message }),
        })
      }

      // Read text first to debug non-JSON responses (like HTML 404s or Proxy errors)
      const responseText = await response.text()
      let data: ApiResponse
      try {
        data = JSON.parse(responseText)
      } catch (err) {
        console.error('Server response was not JSON:', responseText)
        setErrorMessage('Server error: Invalid response format.')
        return
      }

      if (!response.ok) {
        setErrorMessage(data.error || 'Failed to send message')
      } else if (data.success) {
        setStatusMessage(data.status || 'Message sent successfully!')
        // Reset form
        setName('')
        setEmail('')
        setMessage('')
        setFile(null)
        setUploadProgress(null)
        // Optionally clear status after a delay
        setTimeout(() => setStatusMessage(null), 6000)
      }
      else {
        setErrorMessage("An unknown error occurred.");
      }
      */ } catch (err) {
            console.error(err);
            setErrorMessage(err instanceof Error ? err.message : 'Failed to send message. Please try again later.');
        } finally{
            setLoading(false);
        }
    };
    // File input change handler
    const handleFileChange = (e)=>{
        const f = e.target.files && e.target.files[0];
        if (f) {
            // Optional: limit file size (example 4MB to fit Vercel's 4.5MB payload limit)
            const maxSize = 4 * 1024 * 1024;
            if (f.size > maxSize) {
                setErrorMessage('File is too large. Max size is 4MB.');
                e.currentTarget.value = '';
                return;
            }
            setFile(f);
            setErrorMessage(null);
        } else {
            setFile(null);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        id: "contact",
        ref: sectionRef,
        className: "py-24 px-6 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-500",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "font-body max-w-2xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                    ref: titleRef,
                    className: "font-header text-3xl sm:text-4xl font-bold text-center mb-12",
                    children: "Get In Touch"
                }, void 0, false, {
                    fileName: "[project]/my-portfolio/components/Contact.tsx",
                    lineNumber: 215,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                    ref: formRef,
                    onSubmit: handleSubmit,
                    className: "space-y-6 mb-6",
                    noValidate: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "transition-transform origin-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                    htmlFor: "name",
                                    className: "block text-sm font-medium mb-2",
                                    children: "Name"
                                }, void 0, false, {
                                    fileName: "[project]/my-portfolio/components/Contact.tsx",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    id: "name",
                                    name: "name",
                                    value: name,
                                    onChange: (e)=>setName(e.target.value),
                                    onFocus: ()=>handleFocus('name'),
                                    onBlur: ()=>handleBlur('name'),
                                    className: "w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:ring-offset-2 dark:focus:ring-offset-zinc-950 transition-all",
                                    placeholder: "Your name",
                                    maxLength: 100,
                                    "aria-label": "Your name"
                                }, void 0, false, {
                                    fileName: "[project]/my-portfolio/components/Contact.tsx",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-portfolio/components/Contact.tsx",
                            lineNumber: 223,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "transition-transform origin-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                    htmlFor: "email",
                                    className: "block text-sm font-medium mb-2",
                                    children: [
                                        "Email ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-zinc-500 text-xs",
                                            children: "(required)"
                                        }, void 0, false, {
                                            fileName: "[project]/my-portfolio/components/Contact.tsx",
                                            lineNumber: 244,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-portfolio/components/Contact.tsx",
                                    lineNumber: 243,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    id: "email",
                                    name: "email",
                                    value: email,
                                    onChange: (e)=>setEmail(e.target.value),
                                    onFocus: ()=>handleFocus('email'),
                                    onBlur: ()=>handleBlur('email'),
                                    className: "w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:ring-offset-2 dark:focus:ring-offset-zinc-950 transition-all",
                                    placeholder: "your@email.com",
                                    required: true,
                                    "aria-required": true
                                }, void 0, false, {
                                    fileName: "[project]/my-portfolio/components/Contact.tsx",
                                    lineNumber: 246,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-portfolio/components/Contact.tsx",
                            lineNumber: 242,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "transition-transform origin-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                    htmlFor: "message",
                                    className: "block text-sm font-medium mb-2",
                                    children: [
                                        "Message ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-zinc-500 text-xs",
                                            children: "(required)"
                                        }, void 0, false, {
                                            fileName: "[project]/my-portfolio/components/Contact.tsx",
                                            lineNumber: 263,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-portfolio/components/Contact.tsx",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                                    id: "message",
                                    name: "message",
                                    rows: 5,
                                    value: message,
                                    onChange: (e)=>setMessage(e.target.value),
                                    onFocus: ()=>handleFocus('message'),
                                    onBlur: ()=>handleBlur('message'),
                                    className: "w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:ring-offset-2 dark:focus:ring-offset-zinc-950 transition-all resize-none",
                                    placeholder: "Your message...",
                                    required: true,
                                    "aria-required": true,
                                    maxLength: 5000
                                }, void 0, false, {
                                    fileName: "[project]/my-portfolio/components/Contact.tsx",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-portfolio/components/Contact.tsx",
                            lineNumber: 261,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "transition-transform origin-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                    htmlFor: "file",
                                    className: "block text-sm font-medium mb-2",
                                    children: [
                                        "Attachment ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-zinc-500 text-xs",
                                            children: "(optional, max 5MB)"
                                        }, void 0, false, {
                                            fileName: "[project]/my-portfolio/components/Contact.tsx",
                                            lineNumber: 283,
                                            columnNumber: 26
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-portfolio/components/Contact.tsx",
                                    lineNumber: 282,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                    id: "file",
                                    name: "file",
                                    type: "file",
                                    accept: ".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg",
                                    onChange: handleFileChange,
                                    className: "w-full text-sm text-zinc-700 dark:text-zinc-200",
                                    "aria-label": "Attachment"
                                }, void 0, false, {
                                    fileName: "[project]/my-portfolio/components/Contact.tsx",
                                    lineNumber: 285,
                                    columnNumber: 13
                                }, this),
                                file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm text-zinc-600 dark:text-zinc-400",
                                    children: [
                                        "Selected file: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                            children: file.name
                                        }, void 0, false, {
                                            fileName: "[project]/my-portfolio/components/Contact.tsx",
                                            lineNumber: 296,
                                            columnNumber: 32
                                        }, this),
                                        " (",
                                        Math.round(file.size / 1024),
                                        " KB)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-portfolio/components/Contact.tsx",
                                    lineNumber: 295,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-portfolio/components/Contact.tsx",
                            lineNumber: 281,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading,
                            className: "w-full py-3 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-medium hover:opacity-90 active:scale-[0.99] transition-all disabled:opacity-60",
                            "aria-busy": loading,
                            children: loading ? 'Sending...' : 'Send Message'
                        }, void 0, false, {
                            fileName: "[project]/my-portfolio/components/Contact.tsx",
                            lineNumber: 301,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-portfolio/components/Contact.tsx",
                    lineNumber: 222,
                    columnNumber: 9
                }, this),
                uploadProgress !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "h-2 bg-zinc-900 dark:bg-zinc-100 transition-all",
                                style: {
                                    width: `${uploadProgress}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/my-portfolio/components/Contact.tsx",
                                lineNumber: 315,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/my-portfolio/components/Contact.tsx",
                            lineNumber: 314,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "text-sm text-center mt-2",
                            children: [
                                uploadProgress,
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-portfolio/components/Contact.tsx",
                            lineNumber: 320,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-portfolio/components/Contact.tsx",
                    lineNumber: 313,
                    columnNumber: 11
                }, this),
                statusMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "mt-4 p-3 rounded-md bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200",
                    children: statusMessage
                }, void 0, false, {
                    fileName: "[project]/my-portfolio/components/Contact.tsx",
                    lineNumber: 326,
                    columnNumber: 11
                }, this),
                errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "mt-4 p-3 rounded-md bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200",
                    children: errorMessage
                }, void 0, false, {
                    fileName: "[project]/my-portfolio/components/Contact.tsx",
                    lineNumber: 331,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex justify-center gap-6 mt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                            href: "https://github.com",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "p-3 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:scale-110 transition-all duration-200",
                            "aria-label": "GitHub",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 fill-current",
                                viewBox: "0 0 24 24",
                                "aria-hidden": true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                    d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                }, void 0, false, {
                                    fileName: "[project]/my-portfolio/components/Contact.tsx",
                                    lineNumber: 346,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-portfolio/components/Contact.tsx",
                                lineNumber: 345,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/my-portfolio/components/Contact.tsx",
                            lineNumber: 338,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                            href: "https://linkedin.com",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "p-3 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:scale-110 transition-all duration-200",
                            "aria-label": "LinkedIn",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 fill-current",
                                viewBox: "0 0 24 24",
                                "aria-hidden": true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                    d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                }, void 0, false, {
                                    fileName: "[project]/my-portfolio/components/Contact.tsx",
                                    lineNumber: 357,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-portfolio/components/Contact.tsx",
                                lineNumber: 356,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/my-portfolio/components/Contact.tsx",
                            lineNumber: 349,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-portfolio/components/Contact.tsx",
                    lineNumber: 337,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/my-portfolio/components/Contact.tsx",
            lineNumber: 214,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/my-portfolio/components/Contact.tsx",
        lineNumber: 209,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Contact;
}),
"[project]/my-portfolio/pages/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$context$2f$ThemeContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-portfolio/context/ThemeContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$components$2f$Header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-portfolio/components/Header.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$components$2f$Hero$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-portfolio/components/Hero.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$components$2f$Projects$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-portfolio/components/Projects.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$components$2f$skill$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-portfolio/components/skill.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$components$2f$About$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-portfolio/components/About.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$components$2f$Contact$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-portfolio/components/Contact.tsx [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function AppContent() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$components$2f$Header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/my-portfolio/pages/index.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$components$2f$Hero$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Hero"], {}, void 0, false, {
                        fileName: "[project]/my-portfolio/pages/index.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$components$2f$Projects$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Projects"], {}, void 0, false, {
                        fileName: "[project]/my-portfolio/pages/index.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$components$2f$skill$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Skills"], {}, void 0, false, {
                        fileName: "[project]/my-portfolio/pages/index.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$components$2f$About$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["About"], {}, void 0, false, {
                        fileName: "[project]/my-portfolio/pages/index.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$components$2f$Contact$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Contact"], {}, void 0, false, {
                        fileName: "[project]/my-portfolio/pages/index.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-portfolio/pages/index.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
function App() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portfolio$2f$context$2f$ThemeContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AppContent, {}, void 0, false, {
            fileName: "[project]/my-portfolio/pages/index.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/my-portfolio/pages/index.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__968667a3._.js.map