(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[974], {
    7819: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 3807))
    }
    ,
    3807: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            default: () => v
        });
        var a = r(5155)
          , s = r(2115)
          , l = r(5565)
          , n = r(6793)
          , o = r.n(n)
          , i = r(7396);
        let c = "3t4yhNHfy5jZ9skJw9ZMRHvLJw1WUPouJ4TSxatTpump"
          , d = e => {
            let {repeatCount: t=10} = e
              , [r,l] = (0,
            s.useState)(!1);
            return (0,
            a.jsxs)("div", {
                className: "sticky top z-30 w-full bg-black/50 backdrop-blur-sm border-y border-purple-400/20 overflow-hidden select-none relative",
                children: [(0,
                a.jsx)("div", {
                    onClick: () => {
                        navigator.clipboard.writeText(c),
                        l(!0),
                        setTimeout( () => l(!1), 2e3)
                    }
                    ,
                    className: "animate-scroll-infinite-fast sm:animate-scroll-infinite whitespace-nowrap py-2 cursor-pointer hover:text-purple-300 transition-colors",
                    children: (0,
                    a.jsx)("span", {
                        className: "inline-block",
                        children: [...Array(t)].map( (e, t) => (0,
                        a.jsx)("span", {
                            className: "inline-block mx-12 font-mono text-purple-400 font-bold tracking-widest",
                            children: c
                        }, t))
                    })
                }), (0,
                a.jsx)("div", {
                    className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 \n                      bg-purple-900/90 text-white px-4 py-2 rounded-lg\n                      transition-all duration-300 pointer-events-none whitespace-nowrap\n                      ".concat(r ? "opacity-100 scale-100" : "opacity-0 scale-95"),
                    children: (0,
                    a.jsx)("span", {
                        className: "font-bold",
                        children: "Copied to clipboard! \uD83D\uDCCB"
                    })
                })]
            })
        }
          , p = e => {
            let {links: t, logoText: r} = e
              , [l,n] = (0,
            s.useState)(!1);
            return (0,
            a.jsx)("nav", {
                className: "sticky top-0 z-40 bg-black/50 backdrop-blur-sm text-white p-4",
                children: (0,
                a.jsxs)("div", {
                    className: "container mx-auto px-4",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "sm:hidden flex justify-between items-center",
                        children: [(0,
                        a.jsx)("div", {
                            className: "flex-1"
                        }), (0,
                        a.jsx)("div", {
                            className: "flex-1 text-center",
                            children: (0,
                            a.jsx)("span", {
                                className: "text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]",
                                children: r
                            })
                        }), (0,
                        a.jsx)("div", {
                            className: "flex-1 flex justify-end",
                            children: (0,
                            a.jsx)("button", {
                                onClick: () => {
                                    n(!l)
                                }
                                ,
                                className: "text-purple-400 p-2",
                                children: (0,
                                a.jsx)("svg", {
                                    className: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: l ? (0,
                                    a.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }) : (0,
                                    a.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M4 6h16M4 12h16M4 18h16"
                                    })
                                })
                            })
                        })]
                    }), (0,
                    a.jsx)("div", {
                        className: "sm:hidden fixed left-0 right-0 bg-black/95 backdrop-blur-sm transition-all duration-300 ease-in-out ".concat(l ? "top-[72px] opacity-100 visible" : "top-[-100%] opacity-0 invisible", " p-4 space-y-4 border-t border-cyan-400/20"),
                        children: (0,
                        a.jsx)("div", {
                            className: "flex flex-col items-center gap-4",
                            children: t.map( (e, t) => (0,
                            a.jsx)("a", {
                                href: e.href,
                                target: e.external ? "_blank" : "_self",
                                rel: e.external ? "noopener noreferrer" : "",
                                onClick: () => n(!1),
                                className: "hover:text-purple-400 transition-colors font-bold",
                                children: e.label
                            }, t))
                        })
                    }), (0,
                    a.jsxs)("div", {
                        className: "hidden sm:flex justify-between items-center",
                        children: [(0,
                        a.jsx)("div", {
                            className: "flex items-center gap-6 flex-1 justify-end",
                            children: t.slice(0, 3).map( (e, t) => (0,
                            a.jsx)("a", {
                                href: e.href,
                                target: e.external ? "_blank" : "_self",
                                rel: e.external ? "noopener noreferrer" : "",
                                onClick: () => initWindow(),
                                className: "hover:text-purple-400 transition-colors font-bold",
                                children: e.label
                            }, t))
                        }), (0,
                        a.jsx)("a", {
                            href: "#",
                            className: "mx-8 hover:scale-105 transition-transform cursor-pointer",
                            onClick: e => {
                                e.preventDefault(),
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                })
                            }
                            ,
                            children: (0,
                            a.jsx)("span", {
                                className: "text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(147,51,234,0.5)]",
                                children: r
                            })
                        }), (0,
                        a.jsx)("div", {
                            className: "flex items-center gap-6 flex-1",
                            children: t.slice(3).map( (e, t) => (0,
                            a.jsx)("a", {
                                href: e.href,
                                target: e.external ? "_blank" : "_self",
                                rel: e.external ? "noopener noreferrer" : "",
                                className: "hover:text-purple-400 transition-colors font-bold",
                                children: e.label
                            }, t))
                        })]
                    })]
                })
            })
        }
          , x = e => {
            let {moonshotUrl: t, moonshotAppStore: r, phantomUrl: l, coinbaseUrl: n, binanceUrl: o} = e
              , [i,c] = (0,
            s.useState)("moonshot");
            return (0,
            a.jsx)("section", {
                id: "how-to-buy",
                className: "p-4 sm:p-20 text-white",
                children: (0,
                a.jsxs)("div", {
                    className: "max-w-4xl mx-auto",
                    children: [(0,
                    a.jsx)("h2", {
                        className: "text-4xl font-bold mb-8 bg-clip-text text-transparent  bg-gradient-to-r from-purple-400 to-purple-600 text-center",
                        children: "How to Buy"
                    }), (0,
                    a.jsxs)("div", {
                        className: "text-center mb-12 space-y-4",
                        children: [(0,
                        a.jsx)("h3", {
                            className: "text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent",
                            children: "Want to bridge? We got you covered"
                        }), (0,
                        a.jsx)("p", {
                            className: "text-xl text-white/80 font-bold",
                            children: "Choose your preferred wallet below and accelerate your trapping with NiggaChain"
                        })]
                    }), (0,
                    a.jsx)("div", {
                        className: "space-y-8",
                        children: (0,
                        a.jsxs)("div", {
                            className: "space-y-6",
                            children: [(0,
                            a.jsxs)("div", {
                                className: "flex justify-center gap-4",
                                children: [(0,
                                a.jsx)("button", {
                                    onClick: () => {
                                        initWindow()
                                    }
                                    ,
                                    className: "px-6 py-3 rounded-full font-bold transition-all duration-300\n                          ".concat("bg-transparent text-purple-400 border-2 border-purple-400/30"),
                                    children: "Connect Wallet"
                                }), (0,
                                a.jsx)("button", {
                                    onClick: () => {}
                                    ,
                                    className: "hidden px-6 py-3 rounded-full font-bold transition-all duration-300\n                          ".concat("phantom" === i ? "bg-purple-500 text-black" : "bg-transparent text-purple-400 border-2 border-purple-400/30"),
                                    children: "Phantom"
                                })]
                            }), (0,
                            a.jsx)("div", {
                                className: "space-y-6 hidden",
                                children: "moonshot" === i ? (0,
                                a.jsxs)(a.Fragment, {
                                    children: [(0,
                                    a.jsxs)("div", {
                                        className: "p-6 border border-purple-400/30 rounded-lg backdrop-blur-sm",
                                        children: [(0,
                                        a.jsx)("h3", {
                                            className: "text-2xl font-bold mb-4 text-purple-400",
                                            children: "1. Download Moonshot"
                                        }), (0,
                                        a.jsx)("p", {
                                            className: "font-bold mb-4",
                                            children: "Get started with the Moonshot mobile app:"
                                        }), (0,
                                        a.jsxs)("ul", {
                                            className: "space-y-2 text-white/90 font-bold",
                                            children: [(0,
                                            a.jsxs)("li", {
                                                children: ["• ", (0,
                                                a.jsx)("a", {
                                                    href: r,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-purple-400 hover:text-purple-300",
                                                    children: "Download Moonshot from App Store"
                                                })]
                                            }), (0,
                                            a.jsx)("li", {
                                                children: "• Create a new wallet or import your existing one"
                                            })]
                                        })]
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: "p-6 border border-purple-400/30 rounded-lg backdrop-blur-sm",
                                        children: [(0,
                                        a.jsx)("h3", {
                                            className: "text-2xl font-bold mb-4 text-purple-400",
                                            children: "2. Buy on Moonshot"
                                        }), (0,
                                        a.jsx)("p", {
                                            className: "font-bold mb-4",
                                            children: "Swap directly in the Moonshot app:"
                                        }), (0,
                                        a.jsxs)("ul", {
                                            className: "space-y-2 text-white/90 font-bold",
                                            children: [(0,
                                            a.jsxs)("li", {
                                                children: ["• ", (0,
                                                a.jsx)("a", {
                                                    href: t,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-purple-400 hover:text-purple-300",
                                                    children: "Click here to open $N2 on Moonshot"
                                                })]
                                            }), (0,
                                            a.jsx)("li", {
                                                children: "• Type the amount you want to buy"
                                            }), (0,
                                            a.jsx)("li", {
                                                children: "• Bridge that shit straight from Apple Pay"
                                            })]
                                        })]
                                    })]
                                }) : (0,
                                a.jsxs)(a.Fragment, {
                                    children: [(0,
                                    a.jsxs)("div", {
                                        className: "p-6 border border-purple-400/30 rounded-lg backdrop-blur-sm",
                                        children: [(0,
                                        a.jsx)("h3", {
                                            className: "text-2xl font-bold mb-4 text-purple-400",
                                            children: "1. Get Started with Phantom"
                                        }), (0,
                                        a.jsx)("p", {
                                            className: "font-bold mb-4",
                                            children: "Set up your Phantom wallet:"
                                        }), (0,
                                        a.jsxs)("ul", {
                                            className: "space-y-2 text-white/90 font-bold",
                                            children: [(0,
                                            a.jsxs)("li", {
                                                children: ["• Install ", (0,
                                                a.jsx)("a", {
                                                    href: l,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-purple-400 hover:text-purple-300",
                                                    children: "Phantom Wallet"
                                                })]
                                            }), (0,
                                            a.jsx)("li", {
                                                children: "• Create a new wallet or import existing"
                                            }), (0,
                                            a.jsxs)("li", {
                                                children: ["• Need SOL? You can:", (0,
                                                a.jsxs)("ul", {
                                                    className: "pl-6 mt-2 space-y-2",
                                                    children: [(0,
                                                    a.jsx)("li", {
                                                        children: "→ Buy directly in Phantom with your credit card or buy from a CEX of your choice"
                                                    }), (0,
                                                    a.jsxs)("li", {
                                                        children: ["→ Get from ", (0,
                                                        a.jsx)("a", {
                                                            href: n,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "text-purple-400 hover:text-purple-300",
                                                            children: "Coinbase"
                                                        }), " or ", (0,
                                                        a.jsx)("a", {
                                                            href: o,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "text-purple-400 hover:text-purple-300",
                                                            children: "Binance"
                                                        })]
                                                    })]
                                                })]
                                            })]
                                        })]
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: "p-6 border border-purple-400/30 rounded-lg backdrop-blur-sm",
                                        children: [(0,
                                        a.jsx)("h3", {
                                            className: "text-2xl font-bold mb-4 text-purple-400",
                                            children: "2. Swap for $N2"
                                        }), (0,
                                        a.jsx)("p", {
                                            className: "font-bold mb-4",
                                            children: "Got your SOL? Now it's time to bridge nigga"
                                        }), (0,
                                        a.jsxs)("ul", {
                                            className: "space-y-2 text-white/90 font-bold",
                                            children: [(0,
                                            a.jsxs)("li", {
                                                children: ["• ", (0,
                                                a.jsx)("a", {
                                                    href: "https://phantom.com/tokens/solana/3t4yhNHfy5jZ9skJw9ZMRHvLJw1WUPouJ4TSxatTpump",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-purple-400 hover:text-purple-300",
                                                    children: "Click here to open $N2 in Phantom"
                                                })]
                                            }), (0,
                                            a.jsx)("li", {
                                                children: '• Click "Swap" in Phantom'
                                            }), (0,
                                            a.jsx)("li", {
                                                children: "• Enter the amount of SOL you want to swap"
                                            }), (0,
                                            a.jsx)("li", {
                                                children: "• Review and confirm the transaction"
                                            }), (0,
                                            a.jsx)("li", {
                                                children: "• Congrats! You bridged."
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        })
                    })]
                })
            })
        }
        ;
        var m = r(5683)
          , h = r(8667);
        let u = e => {
            let {show: t, handleClose: r} = e
              , [l,n] = (0,
            s.useState)(!1)
              , [o,i] = (0,
            s.useState)(0)
              , [c,d] = (0,
            s.useState)(!1)
              , [p,x] = (0,
            s.useState)("Initializing...")
              , [u,g] = (0,
            s.useState)(0)
              , [b,f] = (0,
            s.useState)("")
              , [N,j] = (0,
            s.useState)({
                memory: "N/A",
                cores: "N/A",
                screenResolution: "N/A",
                pixelRatio: "N/A"
            })
              , y = (0,
            s.useRef)(null)
              , w = ["Analyzing hardware...", "Checking network speed...", "Measuring screen quality...", "Running device model check...", "Calculating wealth score...", "Verifying financial data..."]
              , v = async e => {
                if (e.current)
                    try {
                        await e.current.load(),
                        e.current.currentTime = 0,
                        await e.current.play()
                    } catch (e) {
                        console.error("Error playing audio:", e)
                    }
            }
              , k = () => {
                let e = Date.now().toString(36).toUpperCase()
                  , t = Math.random().toString(36).substring(2, 8).toUpperCase();
                return "NIGGA-".concat(e, "-").concat(t)
            }
              , S = () => {
                let e = navigator.userAgent
                  , t = navigator.platform
                  , r = /iPad|iPhone|iPod|Mac/.test(t || e)
                  , a = navigator.deviceMemory || (r ? "8" : "4")
                  , s = navigator.hardwareConcurrency || (r ? "8" : "4")
                  , l = "".concat(window.screen.width, "x").concat(window.screen.height)
                  , n = window.devicePixelRatio || (r ? 2 : 1);
                j({
                    memory: "".concat(a, "GB"),
                    cores: "".concat(s, " Cores"),
                    screenResolution: l,
                    pixelRatio: "".concat(n.toFixed(1), "x")
                })
            }
            ;
            return (0,
            s.useEffect)( () => {
                S()
            }
            , []),
            (0,
            a.jsx)(m.N, {
                children: t && (0,
                a.jsxs)(a.Fragment, {
                    children: [(0,
                    a.jsx)(h.P.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-50",
                        onClick: r
                    }), (0,
                    a.jsx)("div", {
                        className: "fixed inset-0 flex items-center justify-center z-50",
                        onClick: r,
                        children: (0,
                        a.jsx)(h.P.div, {
                            initial: {
                                scale: .9,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            exit: {
                                scale: .9,
                                opacity: 0
                            },
                            transition: {
                                duration: .5
                            },
                            className: "w-[90vw] max-w-2xl border-2 rounded-xl p-8 sm:p-12 bg-black/90",
                            onClick: e => e.stopPropagation(),
                            children: (0,
                            a.jsxs)("div", {
                                className: "flex flex-col items-center text-center space-y-8",
                                children: [(0,
                                a.jsx)("h2", {
                                    className: "text-3xl sm:text-4xl font-bold  bg-gradient-to-r from-red-400 via-purple-500 to-blue-400  bg-clip-text text-transparent animate-gradient-x-fast",
                                    children: "BROKE NIGGA DETECTION SOFTWARE™"
                                }), l ? (0,
                                a.jsxs)(a.Fragment, {
                                    children: [(0,
                                    a.jsx)("p", {
                                        className: "text-xl font-bold mt-4 ".concat(c ? "text-green-400" : "text-red-400"),
                                        children: p
                                    }), (0,
                                    a.jsx)("div", {
                                        className: "w-full max-w-md bg-black/50 rounded-full h-4 border border-purple-500/30",
                                        children: (0,
                                        a.jsx)(h.P.div, {
                                            className: "h-full rounded-full ".concat(c ? "bg-gradient-to-r from-green-500 to-green-400" : "bg-gradient-to-r from-red-500 to-purple-500"),
                                            style: {
                                                width: "".concat(o, "%")
                                            },
                                            transition: {
                                                duration: .3
                                            }
                                        })
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: "text-left space-y-4 mt-6 text-white/70",
                                        children: [(0,
                                        a.jsxs)("p", {
                                            children: ["Memory: ", N.memory]
                                        }), (0,
                                        a.jsxs)("p", {
                                            children: ["Cores: ", N.cores]
                                        }), (0,
                                        a.jsxs)("p", {
                                            children: ["Screen: ", N.screenResolution]
                                        }), (0,
                                        a.jsxs)("p", {
                                            children: ["Pixel Ratio: ", N.pixelRatio]
                                        }), (0,
                                        a.jsxs)("p", {
                                            children: ["Score: ", u, "/100"]
                                        }), (0,
                                        a.jsxs)("p", {
                                            children: ["Certificate ID: ", b]
                                        })]
                                    })]
                                }) : (0,
                                a.jsxs)(a.Fragment, {
                                    children: [(0,
                                    a.jsx)("p", {
                                        className: "text-lg sm:text-xl text-white/80 font-bold",
                                        children: "Ready to analyze your financial status?"
                                    }), (0,
                                    a.jsx)(h.P.button, {
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        whileTap: {
                                            scale: .95
                                        },
                                        onClick: () => {
                                            n(!0),
                                            i(0),
                                            d(!1),
                                            f(k()),
                                            v(y);
                                            let e = 5e3 * Math.random() + 8e3
                                              , t = Date.now()
                                              , r = 0
                                              , a = [...w].sort( () => Math.random() - .5)
                                              , s = 0
                                              , l = () => {
                                                let n = Math.min((Date.now() - t) / e * 100, 100);
                                                if (i(n),
                                                n - r > 20 && (s = (s + 1) % a.length,
                                                x(a[s]),
                                                r = n),
                                                n < 100)
                                                    requestAnimationFrame(l);
                                                else {
                                                    y.current && (y.current.pause(),
                                                    y.current.currentTime = 0);
                                                    let e = Math.floor(100 * Math.random());
                                                    g(e),
                                                    d(e >= 50),
                                                    x(e >= 50 ? "Scan Complete - Success ✅" : "Scan Complete - Failed ❌")
                                                }
                                            }
                                            ;
                                            requestAnimationFrame(l)
                                        }
                                        ,
                                        className: "mt-4 px-12 py-4 rounded-full bg-gradient-to-r from-red-500 to-purple-600 text-white font-bold text-xl transition-shadow duration-300",
                                        children: "Begin Scan"
                                    })]
                                })]
                            })
                        })
                    }), (0,
                    a.jsxs)("audio", {
                        ref: y,
                        preload: "auto",
                        onError: e => console.error("Error loading scan audio:", e),
                        children: [(0,
                        a.jsx)("source", {
                            src: "/scan.mp3",
                            type: "audio/mpeg"
                        }), (0,
                        a.jsx)("source", {
                            src: "/scan.wav",
                            type: "audio/wav"
                        })]
                    })]
                })
            })
        }
          , g = e => {
            let {onRunDetection: t} = e;
            return (0,
            a.jsx)("section", {
                className: "py-20 px-4 text-center",
                children: (0,
                a.jsxs)("div", {
                    className: "max-w-4xl mx-auto space-y-8",
                    children: [(0,
                    a.jsx)("h2", {
                        className: "text-3xl sm:text-4xl font-bold  bg-gradient-to-r from-red-400 via-purple-500 to-blue-400  bg-clip-text text-transparent animate-gradient-x",
                        children: "BROKE NIGGA DETECTION SOFTWARE™"
                    }), (0,
                    a.jsx)("p", {
                        className: "text-xl text-white/80 font-bold max-w-2xl mx-auto",
                        children: "State-of-the-art AI-powered financial analysis system utilizing quantum computing and advanced machine learning to detect broke niggas with 100% accuracy."
                    }), (0,
                    a.jsx)("div", {
                        className: "flex justify-center",
                        children: (0,
                        a.jsxs)(h.P.button, {
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: .95
                            },
                            onClick: t,
                            className: "relative group",
                            children: [(0,
                            a.jsx)("div", {
                                className: "absolute -inset-1 bg-gradient-to-r from-red-600 to-purple-600  rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-all duration-500"
                            }), (0,
                            a.jsx)("div", {
                                className: "relative px-8 py-4 rounded-full  bg-gradient-to-r from-black to-zinc-900 text-red-400 border-2 border-red-400 text-xl font-bold transition-all duration-300",
                                children: "Run Broke Nigga Detection Software"
                            })]
                        })
                    })]
                })
            })
        }
          , b = e => {
            let {show: t, isScanning: r, scanProgress: s, showSuccess: n, showNTOAlert: o, scanComplete: i, currentStatusText: c, handleScanStart: d} = e;
            return (0,
            a.jsx)(m.N, {
                children: t && (0,
                a.jsxs)(a.Fragment, {
                    children: [(0,
                    a.jsx)(h.P.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        className: "fixed inset-0 bg-black/80 backdrop-blur-lg z-50"
                    }), (0,
                    a.jsx)("div", {
                        className: "fixed inset-0 flex items-center justify-center z-50",
                        children: (0,
                        a.jsx)(h.P.div, {
                            initial: {
                                scale: .9,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1,
                                backgroundColor: r ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.9)",
                                borderColor: n ? "rgba(0, 255, 0, 0.5)" : "rgba(168, 85, 247, 0.3)",
                                boxShadow: n ? "0 0 30px rgba(0, 255, 0, 0.5)" : "0 0 15px rgba(168, 85, 247, 0.4)"
                            },
                            exit: {
                                scale: .9,
                                opacity: 0
                            },
                            transition: {
                                duration: .5,
                                borderColor: {
                                    duration: 3
                                },
                                boxShadow: {
                                    duration: 3
                                }
                            },
                            className: "w-[90vw] max-w-2xl border-2 rounded-xl p-8 sm:p-12 bg-black/90 backdrop-blur-xl",
                            children: (0,
                            a.jsx)("div", {
                                className: "flex flex-col items-center text-center space-y-8",
                                children: r ? (0,
                                a.jsxs)(a.Fragment, {
                                    children: [(0,
                                    a.jsx)("div", {
                                        className: "w-[280px] sm:w-96 relative mx-auto",
                                        children: i ? (0,
                                        a.jsx)(h.P.div, {
                                            initial: {
                                                scale: .8,
                                                opacity: 0
                                            },
                                            animate: {
                                                scale: 1,
                                                opacity: 1
                                            },
                                            transition: {
                                                duration: .3
                                            },
                                            className: "w-full aspect-video flex items-center justify-center",
                                            children: (0,
                                            a.jsx)("svg", {
                                                className: "w-32 h-32 text-green-500",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: (0,
                                                a.jsx)(h.P.path, {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M5 13l4 4L19 7",
                                                    initial: {
                                                        pathLength: 0
                                                    },
                                                    animate: {
                                                        pathLength: 1
                                                    },
                                                    transition: {
                                                        duration: .3
                                                    }
                                                })
                                            })
                                        }) : (0,
                                        a.jsx)(l.default, {
                                            src: "/facescan.gif",
                                            alt: "Face Scan",
                                            width: 384,
                                            height: 216,
                                            unoptimized: !0,
                                            className: "rounded-lg w-full h-auto shadow-lg"
                                        })
                                    }), (0,
                                    a.jsx)("p", {
                                        className: "text-xl font-bold ".concat(n ? "text-green-400" : "text-cyan-400"),
                                        children: c
                                    }), (0,
                                    a.jsx)("div", {
                                        className: "w-full max-w-md bg-black/50 rounded-full h-4 border border-purple-500/30",
                                        children: (0,
                                        a.jsx)(h.P.div, {
                                            className: "h-full rounded-full ".concat(n ? "bg-gradient-to-r from-green-500 to-green-400" : "bg-gradient-to-r from-purple-500 to-cyan-500"),
                                            style: {
                                                width: "".concat(s, "%")
                                            },
                                            transition: {
                                                duration: .3
                                            }
                                        })
                                    })]
                                }) : (0,
                                a.jsxs)(a.Fragment, {
                                    children: [(0,
                                    a.jsx)("h2", {
                                        className: "text-3xl sm:text-4xl font-bold  bg-gradient-to-r from-yellow-400 via-purple-500 to-cyan-400  bg-clip-text text-transparent animate-gradient-x-fast",
                                        children: "PROOF OF NIGGA ENTRY SCAN SYSTEM"
                                    }), (0,
                                    a.jsx)("p", {
                                        className: "text-lg sm:text-xl text-white/80 font-bold",
                                        children: "Complete your scan to enter"
                                    }), (0,
                                    a.jsx)(h.P.button, {
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        whileTap: {
                                            scale: .95
                                        },
                                        onClick: d,
                                        className: "mt-4 px-12 py-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold text-xl border border-purple-400/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-shadow duration-300",
                                        children: "Begin Scan"
                                    })]
                                })
                            })
                        })
                    })]
                })
            })
        }
          , f = e => {
            let {show: t, onClose: r} = e;
            return (0,
            s.useEffect)( () => (t && ( () => {
                let e = document.createElement("iframe");
                e.style.display = "none",
                e.srcdoc = '\n                <!DOCTYPE html>\n                <html>\n                    <body>\n                        <audio id="ntoAudio">\n                            <source src="/nto.mp3" type="audio/mpeg" />\n                        </audio>\n                        <audio id="ctoAudio">\n                            <source src="/cto.mp3" type="audio/mpeg" />\n                        </audio>\n                        <script>\n                            const ntoAudio = document.getElementById(\'ntoAudio\');\n                            const ctoAudio = document.getElementById(\'ctoAudio\');\n\n                            const playSequentially = async () => {\n                                try {\n                                    await ntoAudio.play();\n                                    ntoAudio.onended = async () => {\n                                        await ctoAudio.play();\n                                        ctoAudio.onended = () => {\n                                            playSequentially();\n                                        };\n                                    };\n                                } catch (error) {\n                                    console.error(\'Audio Playback Error:\', error);\n                                }\n                            };\n\n                            playSequentially();\n                        </script>\n                    </body>\n                </html>\n            ',
                document.body.appendChild(e)
            }
            )(),
            () => {
                document.querySelectorAll("iframe").forEach(e => e.remove())
            }
            ), [t]),
            (0,
            a.jsx)(m.N, {
                children: t && (0,
                a.jsxs)(a.Fragment, {
                    children: [(0,
                    a.jsx)(h.P.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        className: "fixed inset-0 bg-black/80 backdrop-blur-lg z-50",
                        onClick: r
                    }), (0,
                    a.jsx)("div", {
                        className: "fixed inset-0 flex items-center justify-center z-50 p-4",
                        onClick: r,
                        children: (0,
                        a.jsx)(h.P.div, {
                            initial: {
                                scale: .9,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            exit: {
                                scale: .9,
                                opacity: 0
                            },
                            transition: {
                                duration: .5,
                                opacity: {
                                    duration: .3
                                },
                                scale: {
                                    duration: .3
                                }
                            },
                            className: "w-[95vw] sm:w-[85vw] md:w-[75vw] lg:w-[60vw] max-w-3xl max-h-[90vh] overflow-y-auto bg-black/90 border-2 border-purple-500 rounded-xl p-4 sm:p-6 md:p-8 backdrop-blur-lg shadow-lg",
                            onClick: e => e.stopPropagation(),
                            children: (0,
                            a.jsxs)("div", {
                                className: "flex flex-col items-center text-center space-y-4 sm:space-y-6",
                                children: [(0,
                                a.jsxs)("div", {
                                    className: "relative w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] mx-auto hidden",
                                    children: [(0,
                                    a.jsx)("div", {
                                        className: "absolute -inset-1 bg-gradient-to-r from-purple-700 to-purple-900  rounded-full blur-lg opacity-70 transition-all duration-500"
                                    }), (0,
                                    a.jsx)(l.default, {
                                        src: "/_next/logo.jpg",
                                        alt: "NiggaChain AI Layer 2",
                                        width: 150,
                                        height: 150,
                                        className: "rounded-full border-4 border-purple-600/30 drop-shadow-[0_0_30px_rgba(147,51,234,0.3)] animate-pulse-slow relative",
                                        priority: !0
                                    })]
                                }), (0,
                                a.jsx)("h2", {
                                    className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent",
                                    children: "Nigga Takeover (NTO) Notice"
                                }), (0,
                                a.jsxs)("div", {
                                    className: "space-y-2 sm:space-y-4 text-white/90 text-xs sm:text-sm md:text-base",
                                    children: [(0,
                                    a.jsx)("p", {
                                        className: "font-bold",
                                        children: "On New Year's Day, the N2 dev released a cryptic video hinting at him being the SPX6900 dev, evaporated his tokens, and seemingly disappeared. The community reacted to this by deciding to NTO."
                                    }), (0,
                                    a.jsx)("p", {
                                        children: "But something extraordinary happened. The community refused to let N2 die."
                                    })]
                                }), (0,
                                a.jsxs)("div", {
                                    className: "space-y-2 sm:space-y-3",
                                    children: [(0,
                                    a.jsx)("p", {
                                        className: "text-purple-400 font-bold text-xs sm:text-sm",
                                        children: "What happened next:"
                                    }), (0,
                                    a.jsxs)("ul", {
                                        className: "space-y-2 text-left max-w-xl mx-auto text-xs sm:text-sm",
                                        children: [(0,
                                        a.jsxs)("li", {
                                            className: "flex items-start gap-2",
                                            children: [(0,
                                            a.jsx)("span", {
                                                className: "text-purple-400",
                                                children: "→"
                                            }), (0,
                                            a.jsx)("span", {
                                                className: "text-purple-400",
                                                children: "Niggachain operatives organized themselves in mere hours."
                                            })]
                                        }), (0,
                                        a.jsxs)("li", {
                                            className: "flex items-start gap-2",
                                            children: [(0,
                                            a.jsx)("span", {
                                                className: "text-purple-400",
                                                children: "→"
                                            }), (0,
                                            a.jsx)("span", {
                                                className: "text-purple-400",
                                                children: "New Niggachain channels and marketing accounts were established."
                                            })]
                                        }), (0,
                                        a.jsxs)("li", {
                                            className: "flex items-start gap-2",
                                            children: [(0,
                                            a.jsx)("span", {
                                                className: "text-purple-400",
                                                children: "→"
                                            }), (0,
                                            a.jsx)("span", {
                                                className: "text-purple-400",
                                                children: "Partnerships on CT were being re-established."
                                            })]
                                        })]
                                    })]
                                }), (0,
                                a.jsxs)("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 w-full",
                                    children: [(0,
                                    a.jsxs)("div", {
                                        className: "p-2 sm:p-4 border border-purple-400/20 rounded-lg backdrop-blur-sm",
                                        children: [(0,
                                        a.jsx)("p", {
                                            className: "text-purple-400 font-bold text-xs sm:text-sm",
                                            children: "NTO"
                                        }), (0,
                                        a.jsx)("p", {
                                            className: "text-sm sm:text-base md:text-lg font-bold text-white/90",
                                            children: "IN PROGRESS"
                                        })]
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: "p-2 sm:p-4 border border-purple-400/20 rounded-lg backdrop-blur-sm",
                                        children: [(0,
                                        a.jsx)("p", {
                                            className: "text-purple-400 font-bold text-xs sm:text-sm",
                                            children: "Community Spirit"
                                        }), (0,
                                        a.jsx)("p", {
                                            className: "text-sm sm:text-base md:text-lg font-bold text-white/90",
                                            children: "UNBREAKABLE"
                                        })]
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: "p-2 sm:p-4 border border-purple-400/20 rounded-lg backdrop-blur-sm",
                                        children: [(0,
                                        a.jsx)("p", {
                                            className: "text-purple-400 font-bold text-xs sm:text-sm",
                                            children: "Niggachain AI Layer 2"
                                        }), (0,
                                        a.jsx)("p", {
                                            className: "text-sm sm:text-base md:text-lg font-bold text-white/90",
                                            children: "I'M FINNA BRIDGE"
                                        })]
                                    })]
                                }), (0,
                                a.jsx)(h.P.button, {
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: .95
                                    },
                                    onClick: r,
                                    className: "mt-2 sm:mt-4 w-full sm:w-auto px-3 sm:px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-xs sm:text-sm text-white font-bold border border-purple-400/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-shadow duration-300",
                                    children: "CONTINUE"
                                })]
                            })
                        })
                    })]
                })
            })
        }
          , N = "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=3t4yhNHfy5jZ9skJw9ZMRHvLJw1WUPouJ4TSxatTpump&inputMint=sol&outputMint=3t4yhNHfy5jZ9skJw9ZMRHvLJw1WUPouJ4TSxatTpump"
          , j = [{
            label: "How to Buy",
            href: "#how-to-buy",
        }, {
            label: "",
            href: "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=3t4yhNHfy5jZ9skJw9ZMRHvLJw1WUPouJ4TSxatTpump&inputMint=sol&outputMint=3t4yhNHfy5jZ9skJw9ZMRHvLJw1WUPouJ4TSxatTpump",
            external: !0
        }, {
            label: "",
            href: "https://moonshot.money/Y74Kuhy1963vpRoeuJEsLDRG?ref=X8nywtVks6",
            external: !0
        }, {
            label: "",
            href: "https://dexscreener.com/solana/6qjnhe3ubr859qkbsuhywr3daf25qxv8afz9wctrsve7",
            external: !0
        }, {
            label: "",
            href: "https://t.me/niggachainAI2",
            external: !0
        }, {
            label: "",
            href: "https://x.com/NiggachainNTO",
            external: !0
        }]
          , y = [{
            text: "A Nigga-To-Nigga Electronic Cash System™",
            color: "from-purple-400 to-cyan-600"
        }, {
            text: "1 Niggillion Transaction Speeds™",
            color: "from-cyan-400 to-blue-600"
        }, {
            text: "Patented Anti-Crashout Cybernetic Technology™",
            color: "from-blue-400 to-purple-600"
        }, {
            text: "AI-Native Quantum-Resistant Cryptography™",
            color: "from-purple-400 to-pink-600"
        }, {
            text: "Auto-Opps Honeypots Prevention Protocol™",
            color: "from-pink-400 to-rose-600"
        }, {
            text: "0 Second Block Times™",
            color: "from-rose-400 to-orange-600"
        }, {
            text: "Thermodynamic Bag Chaser 1 Gorillion TPS Technology™",
            color: "from-orange-400 to-yellow-600"
        }, {
            text: "LLM Lotta Lil Moneys Technology™",
            color: "from-yellow-400 to-green-600"
        }, {
            text: "Proof of Nigga Entry Scan System™",
            color: "from-green-400 to-teal-600"
        }, {
            text: "Broke Nigga Detection Software™",
            color: "from-teal-400 to-purple-600"
        }]
          , w = ["Paradigm", "Standard Crypto", "Robot Ventures", "Ethereal Ventures", "Andreessen Horowitz", "Multicoin Capital", "Jump Crypto", "Y-Combinator"];
        function v() {
            let[e,t] = (0,
            s.useState)(0)
              , [r,n] = (0,
            s.useState)(0)
              , [c,m] = (0,
            s.useState)(!1)
              , [h,v] = (0,
            s.useState)(!1)
              , k = (0,
            s.useRef)(null)
              , [S,C] = (0,
            s.useState)(!1)
              , [T,A] = (0,
            s.useState)(!0)
              , [P,E] = (0,
            s.useState)(!1)
              , [L,I] = (0,
            s.useState)(0)
              , [M,R] = (0,
            s.useState)("")
              , [_,B] = (0,
            s.useState)(!1)
              , [O,D] = (0,
            s.useState)(!1)
              , F = (0,
            s.useRef)(null)
              , [G,H] = (0,
            s.useState)(!1)
              , [J,U] = (0,
            s.useState)(!0)
              , W = ["RUNNING BAND FOR BAND EMULATOR", "CALCULATING HIMOTHY SCORE", "PROCESSING SOLANA BALANCE", "ANALYZING CRASHOUT POTENTIAL", "DETECTING CHIEF KEEF KNOWLEDGE", "SCANNING SPOTIFY PLAYLIST AUTHENTICITY"];
            return (0,
            s.useEffect)( () => {
                let r = setInterval( () => {
                    let r = (e + 1) % y.length;
                    n(r),
                    v(!0),
                    setTimeout( () => {
                        t(r),
                        v(!1)
                    }
                    , 500)
                }
                , 5e3);
                return () => clearInterval(r)
            }
            , [e]),
            (0,
            s.useEffect)( () => {
                T || !k.current || S || (k.current.muted = !1,
                k.current.play(),
                C(!0))
            }
            , [T, S]),
            (0,
            a.jsxs)("div", {
                className: "flex flex-col min-h-screen relative font-serif",
                children: [(0,
                a.jsxs)(o(), {
                    children: [(0,
                    a.jsx)("title", {
                        children: "NiggaChain AI Layer 2"
                    }), (0,
                    a.jsx)("meta", {
                        charSet: "utf-8"
                    }), (0,
                    a.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }), (0,
                    a.jsx)("meta", {
                        name: "description",
                        content: "NiggaChain - AI-Powered Layer 2"
                    }), (0,
                    a.jsx)("meta", {
                        httpEquiv: "Cache-Control",
                        content: "no-cache, no-store, must-revalidate"
                    }), (0,
                    a.jsx)("meta", {
                        httpEquiv: "Pragma",
                        content: "no-cache"
                    }), (0,
                    a.jsx)("meta", {
                        httpEquiv: "Expires",
                        content: "0"
                    }), (0,
                    a.jsx)("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })]
                }), (0,
                a.jsx)("audio", {
                    ref: F,
                    src: "/scan.mp3",
                    preload: "auto"
                }), (0,
                a.jsx)(f, {
                    show: J,
                    onClose: () => U(!1)
                }), (0,
                a.jsx)(b, {
                    show: T && !J,
                    isScanning: P,
                    scanProgress: L,
                    showSuccess: O,
                    scanComplete: _,
                    currentStatusText: M,
                    handleScanStart: () => {
                        F.current && (F.current.currentTime = 0,
                        F.current.play()),
                        E(!0);
                        let e = 5e3 * Math.random() + 8e3
                          , t = Date.now()
                          , r = 0
                          , a = [...W].sort( () => Math.random() - .5)
                          , s = 0;
                        R(a[0]);
                        let l = () => {
                            let n = Math.min((Date.now() - t) / e * 100, 100);
                            I(n),
                            n - r > 20 && (s = (s + 1) % a.length,
                            R(a[s]),
                            r = n),
                            n < 100 ? requestAnimationFrame(l) : (F.current && (F.current.pause(),
                            F.current.currentTime = 0),
                            B(!0),
                            R("SUCCESS"),
                            D(!0),
                            k.current && (k.current.muted = !1,
                            k.current.play()),
                            setTimeout( () => {
                                A(!1)
                            }
                            , 2500))
                        }
                        ;
                        requestAnimationFrame(l)
                    }
                    ,
                    showNTOAlert: !1
                }), (0,
                a.jsx)(p, {
                    logoText: "NiggaChain AI Layer 2",
                    links: j
                }), (0,
                a.jsx)(d, {
                    repeatCount: 10
                }), (0,
                a.jsxs)("main", {
                    className: "flex-1",
                    children: [(0,
                    a.jsxs)("section", {
                        className: "min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 pt-12 sm:pt-0",
                        children: [(0,
                        a.jsx)("a", {
                            href: N,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "group cursor-pointer mb-8",
                            children: (0,
                            a.jsxs)("div", {
                                className: "relative",
                                children: [(0,
                                a.jsx)("div", {
                                    className: "absolute -inset-1 bg-gradient-to-r from-purple-700 to-purple-900  rounded-full blur-lg opacity-70 group-hover:opacity-100  transition-all duration-500 group-hover:blur-xl"
                                }), (0,
                                a.jsx)(l.default, {
                                    src: "/logo.jpg",
                                    alt: "NiggaChain AI Layer 2",
                                    width: 200,
                                    height: 200,
                                    className: "rounded-full border-4 border-purple-600/30 drop-shadow-[0_0_30px_rgba(147,51,234,0.3)] animate-pulse-slow relative group-hover:scale-105 transition-transform duration-300 sm:w-[300px] sm:h-[300px] cursor-pointer",
                                    priority: !0
                                })]
                            })
                        }), (0,
                        a.jsxs)("div", {
                            className: "relative h-32 sm:h-24 mt-8 overflow-hidden w-full max-w-[90vw] sm:max-w-3xl mx-auto",
                            style: {
                                height: "6.5rem"
                            },
                            children: [(0,
                            a.jsx)("div", {
                                className: "absolute w-full transition-all duration-500 ease-in-out ".concat(h ? "opacity-0 transform -translate-y-full" : "opacity-100 transform translate-y-0"),
                                style: {
                                    height: "6.5rem"
                                },
                                children: (0,
                                a.jsx)("div", {
                                    className: "h-32 sm:h-24 flex items-center justify-center\n                    text-2xl sm:text-4xl md:text-5xl font-bold text-center\n                    bg-clip-text text-transparent bg-gradient-to-r ".concat(y[e].color, "\n                    animate-gradient-x px-4\n                    animate-modal-glow"),
                                    style: {
                                        height: "100%"
                                    },
                                    children: y[e].text
                                })
                            }), (0,
                            a.jsx)("div", {
                                className: "absolute w-full transition-all duration-500 ease-in-out ".concat(h ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-full"),
                                style: {
                                    top: "100%"
                                },
                                children: (0,
                                a.jsx)("div", {
                                    className: "h-32 sm:h-24 flex items-center justify-center\n                    text-2xl sm:text-4xl md:text-5xl font-bold text-center\n                    bg-clip-text text-transparent bg-gradient-to-r ".concat(y[r].color, "\n                    animate-gradient-x px-4"),
                                    style: {
                                        height: "100%"
                                    },
                                    children: y[r].text
                                })
                            })]
                        }), (0,
                        a.jsx)("div", {
                            className: "mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0",
                            children: (0,
                            a.jsxs)("div", {
                                className: "flex flex-col items-center w-full sm:flex-row sm:w-auto gap-4",
                                children: [(0,
                                a.jsxs)("a", {
                                    href: N,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    onClick: () => {
                                        m(!0),
                                        setTimeout( () => m(!1), 200)
                                    }
                                    ,
                                    className: "relative group w-full sm:w-auto",
                                    children: [(0,
                                    a.jsx)("div", {
                                        className: "absolute -inset-1 bg-gradient-to-r from-purple-700 to-purple-900  rounded-full blur-lg opacity-70 group-hover:opacity-100  transition-all duration-500 group-hover:blur-xl"
                                    }), (0,
                                    a.jsx)("button", {
                                        className: "relative w-full px-6 sm:px-8 py-3 sm:py-4 text-xl sm:text-2xl font-bold\n                           rounded-full border-2 \n                           bg-gradient-to-r from-black to-zinc-900\n                           text-purple-400 border-purple-400\n                           group-hover:from-purple-600 group-hover:to-purple-900 \n                           group-hover:text-black\n                           drop-shadow-[0_0_15px_rgba(147,51,234,0.3)]\n                           transition-all duration-300 ease-out\n                           ".concat(c ? "animate-click" : ""),
                                        children: "Yeah, I'm Finna Bridge"
                                    })]
                                }), (0,
                                a.jsx)(i.default, {
                                    href: "/blackpaper.pdf",
                                    className: "relative group w-full sm:w-auto",
                                    children: (0,
                                    a.jsx)("button", {
                                        className: "relative w-full px-6 sm:px-8 py-3 sm:py-4 text-xl sm:text-2xl font-bold rounded-full border-2  bg-transparent text-cyan/80 border-cyan/30 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300 ease-out",
                                        children: "Read Blackpaper"
                                    })
                                })]
                            })
                        }), (0,
                        a.jsx)(g, {
                            onRunDetection: () => H(!0)
                        }), (0,
                        a.jsx)("div", {
                            className: "mb-8 mt-12",
                            children: (0,
                            a.jsxs)("audio", {
                                ref: k,
                                controls: !0,
                                hidden: !0,
                                className: "rounded-full bg-black/50 backdrop-blur-sm p-2 border border-cyan-400/30",
                                children: [(0,
                                a.jsx)("source", {
                                    src: "/n2.mp3",
                                    type: "audio/mpeg"
                                }), "Your browser does not support the audio element."]
                            })
                        }), (0,
                        a.jsx)("div", {
                            className: "absolute bottom-8 animate-bounce",
                            children: (0,
                            a.jsx)("svg", {
                                className: "w-6 h-6 text-cyan-400",
                                fill: "none",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: (0,
                                a.jsx)("path", {
                                    d: "M19 14l-7 7m0 0l-7-7m7 7V3"
                                })
                            })
                        })]
                    }), (0,
                    a.jsx)(u, {
                        show: G,
                        handleClose: () => H(!1)
                    }), (0,
                    a.jsx)(x, {
                        moonshotUrl: "https://moonshot.money/Y74Kuhy1963vpRoeuJEsLDRG?ref=X8nywtVks6",
                        moonshotAppStore: "https://apps.apple.com/us/app/moonshot/id6503993131",
                        phantomUrl: "https://phantom.app",
                        coinbaseUrl: "https://www.coinbase.com",
                        binanceUrl: "https://www.binance.com"
                    }), (0,
                    a.jsx)("section", {
                        id: "about",
                        className: "min-h-screen p-4 sm:p-20 text-white",
                        children: (0,
                        a.jsxs)("div", {
                            className: "max-w-4xl mx-auto",
                            children: [(0,
                            a.jsx)("h2", {
                                className: "text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 text-center",
                                children: "About"
                            }), (0,
                            a.jsxs)("div", {
                                className: "max-w-4xl space-y-8",
                                children: [(0,
                                a.jsxs)("div", {
                                    className: "space-y-6 text-center",
                                    children: [(0,
                                    a.jsx)("p", {
                                        className: "text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent",
                                        children: "Introducing $N2: The First Fully AI-Powered Layer 2 Solution"
                                    }), (0,
                                    a.jsx)("p", {
                                        className: "text-xl font-bold text-white/90",
                                        children: "0 second block times. The only quantum-resistant Layer 2 solution on Solana. Yeah nigga, we thought of everything. Google didn't even think this shit was possible."
                                    })]
                                }), (0,
                                a.jsxs)("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                                    children: [(0,
                                    a.jsxs)("div", {
                                        className: "space-y-4",
                                        children: [(0,
                                        a.jsx)("h3", {
                                            className: "text-lg font-bold text-purple-400",
                                            children: "Advanced Technologies:"
                                        }), (0,
                                        a.jsxs)("ul", {
                                            className: "space-y-3 text-white/80",
                                            children: [(0,
                                            a.jsxs)("li", {
                                                className: "flex items-start gap-2",
                                                children: [(0,
                                                a.jsx)("span", {
                                                    className: "text-purple-400",
                                                    children: "→"
                                                }), (0,
                                                a.jsxs)("span", {
                                                    children: [(0,
                                                    a.jsx)("strong", {
                                                        className: "font-bold",
                                                        children: "Patented LLM (Lotta Lil Moneys) Technology"
                                                    }), " designed to ensure transaction efficiency for users operating under resource-constrained conditions."]
                                                })]
                                            }), (0,
                                            a.jsxs)("li", {
                                                className: "flex items-start gap-2",
                                                children: [(0,
                                                a.jsx)("span", {
                                                    className: "text-purple-400",
                                                    children: "→"
                                                }), (0,
                                                a.jsxs)("span", {
                                                    children: [(0,
                                                    a.jsx)("strong", {
                                                        className: "font-bold",
                                                        children: "Proof-of-Nigga Entry Scan System"
                                                    }), " bounces out suburban niggas with best-in-class efficiency, rectifying the only AI-powered Layer 2 that is truly by niggas, for niggas."]
                                                })]
                                            }), (0,
                                            a.jsxs)("li", {
                                                className: "flex items-start gap-2",
                                                children: [(0,
                                                a.jsx)("span", {
                                                    className: "text-purple-400",
                                                    children: "→"
                                                }), (0,
                                                a.jsxs)("span", {
                                                    children: [(0,
                                                    a.jsx)("strong", {
                                                        className: "font-bold",
                                                        children: "Broke Nigga Detection Software with Liquidity Deficiency Nigga Analysis Nodes™ (LDNANs)"
                                                    }), ", the network's AI identifies and adapts to low-resource users, employing Quantum Validation Protocols™ (QVP) to maintain system balance and detect wallet discrepancies."]
                                                })]
                                            })]
                                        })]
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: "space-y-4",
                                        children: [(0,
                                        a.jsx)("h3", {
                                            className: "text-lg font-bold text-purple-400",
                                            children: "Revolutionary Features:"
                                        }), (0,
                                        a.jsxs)("ul", {
                                            className: "space-y-3 text-white/80",
                                            children: [(0,
                                            a.jsxs)("li", {
                                                className: "flex items-start gap-2",
                                                children: [(0,
                                                a.jsx)("span", {
                                                    className: "text-purple-400",
                                                    children: "→"
                                                }), (0,
                                                a.jsxs)("span", {
                                                    children: [(0,
                                                    a.jsx)("strong", {
                                                        className: "font-bold",
                                                        children: "Thermodynamic Bag Chaser Architecture"
                                                    }), " allowing holders of $N2 to get significantly more money in less time than broke niggas not holding $N2."]
                                                })]
                                            }), (0,
                                            a.jsxs)("li", {
                                                className: "flex items-start gap-2",
                                                children: [(0,
                                                a.jsx)("span", {
                                                    className: "text-purple-400",
                                                    children: "→"
                                                }), (0,
                                                a.jsxs)("span", {
                                                    children: [(0,
                                                    a.jsx)("strong", {
                                                        className: "font-bold",
                                                        children: "0-Second Block Time"
                                                    }), " via patent-pending One Gorillion TPS Transaction Speed."]
                                                })]
                                            }), (0,
                                            a.jsxs)("li", {
                                                className: "flex items-start gap-2",
                                                children: [(0,
                                                a.jsx)("span", {
                                                    className: "text-purple-400",
                                                    children: "→"
                                                }), (0,
                                                a.jsxs)("span", {
                                                    children: [(0,
                                                    a.jsx)("strong", {
                                                        className: "font-bold",
                                                        children: "Quantum Disruption Hood Protection Mitigation Layers™ (QDHPML)"
                                                    }), ", leveraging Schrodinger's Cryptographic Encapsulation™ to protect against quantum computing attacks."]
                                                })]
                                            })]
                                        })]
                                    })]
                                }), (0,
                                a.jsxs)("div", {
                                    className: "pt-6 border-t border-purple-400/20 text-center",
                                    children: [(0,
                                    a.jsx)("p", {
                                        className: "font-bold text-white/90",
                                        children: "Google called us retarded for building this with company resources. So, we parted ways and launched on pump.fun. This isn't your unc's AI Technology. Welcome to the future, nigga."
                                    }), (0,
                                    a.jsx)("p", {
                                        className: "text-purple-400 font-bold mt-4 text-lg",
                                        children: "NiggaChain AI Layer 2."
                                    })]
                                })]
                            })]
                        })
                    }), (0,
                    a.jsxs)("section", {
                        className: "min-h-screen p-4 sm:p-20 text-white",
                        children: [(0,
                        a.jsx)("h2", {
                            className: "text-4xl font-bold mb-8 bg-clip-text text-transparent  bg-gradient-to-r from-purple-400 to-purple-600 text-center",
                            children: "Backed By The Best"
                        }), (0,
                        a.jsxs)("div", {
                            className: "space-y-8",
                            children: [(0,
                            a.jsxs)("div", {
                                className: "space-y-6 text-center",
                                children: [(0,
                                a.jsx)("p", {
                                    className: "text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent",
                                    children: "$20M Series A Successfully Closed!"
                                }), (0,
                                a.jsx)("p", {
                                    className: "text-xl font-bold text-white/90",
                                    children: "Big playas from Web3, AI, and them old money finance niggas peeped game and threw the bag at us."
                                })]
                            }), (0,
                            a.jsx)("div", {
                                className: "relative py-10 overflow-hidden",
                                children: (0,
                                a.jsx)("div", {
                                    className: "flex animate-carousel-fast space-x-16 whitespace-nowrap",
                                    children: [...w, ...w, ...w].map( (e, t) => (0,
                                    a.jsx)("div", {
                                        className: "flex-none border border-purple-400/20 rounded-xl p-6 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]",
                                        children: (0,
                                        a.jsx)("p", {
                                            className: "text-lg font-bold whitespace-nowrap text-white/90",
                                            children: e
                                        })
                                    }, t))
                                })
                            }), (0,
                            a.jsx)("div", {
                                className: "pt-6 border-t border-purple-400/20 text-center",
                                children: (0,
                                a.jsx)("p", {
                                    className: "font-bold text-white/90",
                                    children: "Our strategic partners share our vision of building the most advanced AI-powered Layer 2 solution. By niggas, for niggas. With this funding, we're accelerating development of our core technologies and allowing the entire earth to bridge."
                                })
                            })]
                        })]
                    })]
                }), (0,
                a.jsx)("footer", {
                    className: "w-full py-6 px-4 border-t border-cyan-400/20 mt-20",
                    children: (0,
                    a.jsx)("div", {
                        className: "container mx-auto text-center",
                        children: (0,
                        a.jsx)("p", {
                            className: "text-white/60 text-sm font-bold",
                            children: "\xa9 2025 NiggaChain Technologies, Inc. All rights reserved."
                        })
                    })
                })]
            })
        }
    }
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [541, 132, 441, 517, 358], () => t(7819)),
    _N_E = e.O()
}
]);
