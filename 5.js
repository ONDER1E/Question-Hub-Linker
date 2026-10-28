export default [
    [
        201,
        "\\int \\cot^2 3x \\, dx",
        [
            [
                "Step 1: Use Pythagorean identity",
                "Use the identity \\(\\cot^2 3x = \\operatorname{cosec}^2 3x - 1\\):\n\\[ \\int (\\operatorname{cosec}^2 3x - 1) \\, dx \\]"
            ],
            [
                "Step 2: Integrate term by term",
                "\\[ = -\\frac{1}{3}\\cot 3x - x + C \\]"
            ]
        ]
    ],
    [
        202,
        "\\int \\frac{7}{3x} \\, dx",
        [
            [
                "Step 1: Factor out constant factor",
                "\\[ = \\frac{7}{3} \\int \\frac{1}{x} \\, dx \\]"
            ],
            [
                "Step 2: Apply standard logarithmic integral",
                "\\[ = \\frac{7}{3}\\ln|x| + C \\]"
            ]
        ]
    ],
    [
        203,
        "\\int \\frac{\\sin x \\cos x}{\\sqrt{1-\\cos 2x}} \\, dx",
        [
            [
                "Step 1: Use double angle identity \\(1-\\cos 2x = 2\\sin^2 x\\)",
                "Substitute into the denominator:\n\\[ \\sqrt{1-\\cos 2x} = \\sqrt{2\\sin^2 x} = \\sqrt{2}\\sin x \\]"
            ],
            [
                "Step 2: Simplify integrand",
                "\\[ \\int \\frac{\\sin x \\cos x}{\\sqrt{2}\\sin x} \\, dx = \\frac{1}{\\sqrt{2}} \\int \\cos x \\, dx \\]"
            ],
            [
                "Step 3: Integrate",
                "\\[ = \\frac{1}{\\sqrt{2}}\\sin x + C \\]"
            ]
        ]
    ],
    [
        204,
        "\\int \\frac{\\sin x \\cos x}{1+\\cos 2x} \\, dx",
        [
            [
                "Step 1: Use identity \\(1+\\cos 2x = 2\\cos^2 x\\)",
                "\\[ \\int \\frac{\\sin x \\cos x}{2\\cos^2 x} \\, dx = \\frac{1}{2} \\int \\frac{\\sin x}{\\cos x} \\, dx = \\frac{1}{2} \\int \\tan x \\, dx \\]"
            ],
            [
                "Step 2: Integrate logarithmic form",
                "\\[ = \\frac{1}{2}\\ln|\\sec x| + C \\quad \\text{or} \\quad -\\frac{1}{2}\\ln|\\cos x| + C \\]"
            ]
        ]
    ],
    [
        205,
        "\\int 4(3-2x)^5 \\, dx",
        [
            [
                "Step 1: Apply reverse chain rule",
                "Increase the power by 1 to get \\(6\\), then divide by the new power \\(6\\) and the inner derivative \\(-2\\):\n\\[ = 4 \\cdot \\frac{(3-2x)^6}{6 \\cdot (-2)} + C \\]"
            ],
            [
                "Step 2: Simplify coefficients",
                "\\[ = 4 \\cdot \\left(-\\frac{1}{12}\\right)(3-2x)^6 + C = -\\frac{1}{3}(3-2x)^6 + C \\]"
            ]
        ]
    ],
    [
        206,
        "\\int \\frac{1+\\sin x}{\\cos x} \\, dx",
        [
            [
                "Step 1: Split fraction into standard forms",
                "\\[ \\int \\left(\\frac{1}{\\cos x} + \\frac{\\sin x}{\\cos x}\\right) dx = \\int (\\sec x + \\tan x) \\, dx \\]"
            ],
            [
                "Step 2: Integrate each term",
                "\\[ = \\ln|\\sec x + \\tan x| + \\ln|\\sec x| + C \\]"
            ]
        ]
    ],
    [
        207,
        "\\int \\sin 2x \\sec x \\, dx",
        [
            [
                "Step 1: Use double angle identity \\(\\sin 2x = 2\\sin x \\cos x\\)",
                "\\[ \\int \\frac{2\\sin x \\cos x}{\\cos x} \\, dx = 2 \\int \\sin x \\, dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = -2\\cos x + C \\]"
            ]
        ]
    ],
    [
        208,
        "\\int \\sin 2x \\sin x \\, dx",
        [
            [
                "Step 1: Expand using double angle identity \\(\\sin 2x = 2\\sin x \\cos x\\)",
                "\\[ \\int (2\\sin x \\cos x)\\sin x \\, dx = 2 \\int \\sin^2 x \\cos x \\, dx \\]"
            ],
            [
                "Step 2: Substitution \\(u = \\sin x \\implies du = \\cos x \\, dx\\)",
                "\\[ = 2 \\int u^2 \\, du = \\frac{2}{3}u^3 + C = \\frac{2}{3}\\sin^3 x + C \\]"
            ]
        ]
    ],
    [
        209,
        "\\int x \\cos^2 x \\, dx",
        [
            [
                "Step 1: Use double angle identity \\(\\cos^2 x = \\frac{1+\\cos 2x}{2}\\)",
                "\\[ \\int x \\left(\\frac{1+\\cos 2x}{2}\\right) dx = \\frac{1}{2} \\int x \\, dx + \\frac{1}{2} \\int x \\cos 2x \\, dx \\]"
            ],
            [
                "Step 2: Integration by Parts on \\(\\int x \\cos 2x \\, dx\\)",
                "Let \\(u = x, dv = \\cos 2x \\, dx \\implies du = dx, v = \\frac{1}{2}\\sin 2x\\):\n\\[ \\int x \\cos 2x \\, dx = \\frac{1}{2}x\\sin 2x + \\frac{1}{4}\\cos 2x \\]"
            ],
            [
                "Step 3: Combine terms",
                "\\[ = \\frac{1}{4}x^2 + \\frac{1}{4}x\\sin 2x + \\frac{1}{8}\\cos 2x + C \\]"
            ]
        ]
    ],
    [
        210,
        "\\int \\sin(x+1)^3 \\, dx",
        [
            [
                "Step 1: Integration of cubic sine composite",
                "Rewrite using \\(\\sin^3 u = \\sin u(1-\\cos^2 u)\\) where \\(u = x+1\\):\n\\[ \\int \\sin(x+1)(1-\\cos^2(x+1)) \\, dx \\]"
            ],
            [
                "Step 2: Integrate by substitution",
                "\\[ = -\\cos(x+1) + \\frac{1}{3}\\cos^3(x+1) + C \\]"
            ]
        ]
    ],
    [
        211,
        "\\int \\frac{1-\\ln x}{x^2} \\, dx",
        [
            [
                "Step 1: Split the fraction",
                "\\[ \\int \\left(\\frac{1}{x^2} - \\frac{\\ln x}{x^2}\\right) dx = \\int x^{-2} \\, dx - \\int x^{-2}\\ln x \\, dx \\]"
            ],
            [
                "Step 2: Integration by Parts on \\(\\int x^{-2}\\ln x \\, dx\\)",
                "Let \\(u = \\ln x, dv = x^{-2}dx \\implies du = \\frac{1}{x}dx, v = -\\frac{1}{x}\\):\n\\[ \\int x^{-2}\\ln x \\, dx = -\\frac{\\ln x}{x} - \\frac{1}{x} \\]"
            ],
            [
                "Step 3: Combine results",
                "\\[ = -\\frac{1}{x} - \\left(-\\frac{\\ln x}{x} - \\frac{1}{x}\\right) + C = \\frac{\\ln x}{x} + C \\]"
            ]
        ]
    ],
    [
        212,
        "\\int 4x e^{-3x} \\, dx",
        [
            [
                "Step 1: Integration by Parts",
                "Let \\(u = 4x, dv = e^{-3x}dx \\implies du = 4dx, v = -\\frac{1}{3}e^{-3x}\\)."
            ],
            [
                "Step 2: Apply formula",
                "\\[ = -\\frac{4}{3}xe^{-3x} - \\int \\left(-\\frac{4}{3}e^{-3x}\\right) dx = -\\frac{4}{3}xe^{-3x} - \\frac{4}{9}e^{-3x} + C \\]"
            ],
            [
                "Step 3: Simplify factorized form",
                "\\[ = -\\frac{4}{9}e^{-3x}(3x+1) + C \\]"
            ]
        ]
    ],
    [
        213,
        "\\int (e^x+x)^2 \\, dx",
        [
            [
                "Step 1: Expand binomial square",
                "\\[ \\int (e^{2x} + 2xe^x + x^2) \\, dx \\]"
            ],
            [
                "Step 2: Integrate terms using standard rules & Parts for \\(2xe^x\\)",
                "Since \\(\\int 2xe^x dx = 2xe^x - 2e^x\\):\n\\[ = \\frac{1}{2}e^{2x} + 2xe^x - 2e^x + \\frac{1}{3}x^3 + C \\]"
            ]
        ]
    ],
    [
        214,
        "\\int \\frac{e^{4x}-e^{-x}}{e^{2x}} \\, dx",
        [
            [
                "Step 1: Split fraction and simplify exponents",
                "\\[ \\int \\left(\\frac{e^{4x}}{e^{2x}} - \\frac{e^{-x}}{e^{2x}}\\right) dx = \\int (e^{2x} - e^{-3x}) \\, dx \\]"
            ],
            [
                "Step 2: Integrate exponential terms",
                "\\[ = \\frac{1}{2}e^{2x} + \\frac{1}{3}e^{-3x} + C \\]"
            ]
        ]
    ],
    [
        215,
        "\\int \\frac{e^{\\ln x}}{x} \\, dx",
        [
            [
                "Step 1: Simplify exponential log identity",
                "Since \\(e^{\\ln x} = x\\) for \\(x > 0\\):\n\\[ \\int \\frac{x}{x} \\, dx = \\int 1 \\, dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = x + C \\]"
            ]
        ]
    ],
    [
        216,
        "\\int \\frac{1}{2(3x+1)^4} \\, dx",
        [
            [
                "Step 1: Index form",
                "\\[ \\frac{1}{2} \\int (3x+1)^{-4} \\, dx \\]"
            ],
            [
                "Step 2: Reverse chain rule",
                "\\[ = \\frac{1}{2} \\cdot \\frac{(3x+1)^{-3}}{-3 \\cdot 3} + C = -\\frac{1}{18(3x+1)^3} + C \\]"
            ]
        ]
    ],
    [
        217,
        "\\int \\frac{\\cos(\\ln x)}{x} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = \\ln x \\implies du = \\frac{1}{x}dx\\)",
                "\\[ \\int \\cos u \\, du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = \\sin u + C = \\sin(\\ln x) + C \\]"
            ]
        ]
    ],
    [
        218,
        "\\int \\frac{4x e^{2x^2}}{\\sqrt{1+2e^{2x^2}}} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = 1+2e^{2x^2} \\implies du = 8x e^{2x^2} dx\\)",
                "Rearranging gives \\(4x e^{2x^2} dx = \\frac{1}{2}du\\):\n\\[ = \\frac{1}{2} \\int u^{-\\frac{1}{2}} du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = \\frac{1}{2} \\cdot 2u^{\\frac{1}{2}} + C = \\sqrt{1+2e^{2x^2}} + C \\]"
            ]
        ]
    ],
    [
        219,
        "\\int \\frac{4}{3(2x+1)} \\, dx",
        [
            [
                "Step 1: Factor constants and use log rule",
                "\\[ = \\frac{4}{3} \\int \\frac{1}{2x+1} \\, dx = \\frac{4}{3} \\cdot \\frac{1}{2}\\ln|2x+1| + C \\]"
            ],
            [
                "Step 2: Simplify",
                "\\[ = \\frac{2}{3}\\ln|2x+1| + C \\]"
            ]
        ]
    ],
    [
        220,
        "\\int \\frac{1}{\\cos^2 x \\tan x} \\, dx",
        [
            [
                "Step 1: Rewrite \\(\\frac{1}{\\cos^2 x} = \\sec^2 x\\)",
                "\\[ \\int \\frac{\\sec^2 x}{\\tan x} \\, dx \\]"
            ],
            [
                "Step 2: Logarithmic derivative rule",
                "Since \\(\\frac{d}{dx}(\\tan x) = \\sec^2 x\\):\n\\[ = \\ln|\\tan x| + C \\]"
            ]
        ]
    ],
    [
        221,
        "\\int \\frac{\\sin 2x}{1+\\cos x} \\, dx",
        [
            [
                "Step 1: Use identity \\(\\sin 2x = 2\\sin x \\cos x\\)",
                "\\[ \\int \\frac{2\\sin x \\cos x}{1+\\cos x} \\, dx \\]"
            ],
            [
                "Step 2: Substitution \\(u = 1+\\cos x \\implies \\cos x = u-1, du = -\\sin x dx\\)",
                "\\[ -2 \\int \\frac{u-1}{u} du = -2 \\int \\left(1 - \\frac{1}{u}\\right) du = -2u + 2\\ln|u| + C \\]"
            ],
            [
                "Step 3: Substitute back",
                "\\[ = -2(1+\\cos x) + 2\\ln|1+\\cos x| + C = -2\\cos x + 2\\ln|1+\\cos x| + C' \\]"
            ]
        ]
    ],
    [
        222,
        "\\int \\sin^3 x \\, dx",
        [
            [
                "Step 1: Rewrite \\(\\sin^3 x = \\sin x(1-\\cos^2 x)\\)",
                "\\[ \\int \\sin x(1-\\cos^2 x) \\, dx \\]"
            ],
            [
                "Step 2: Substitution \\(u = \\cos x \\implies du = -\\sin x dx\\)",
                "\\[ - \\int (1-u^2) du = -u + \\frac{u^3}{3} + C \\]"
            ],
            [
                "Step 3: Substitute back",
                "\\[ = -\\cos x + \\frac{1}{3}\\cos^3 x + C \\]"
            ]
        ]
    ],
    [
        223,
        "\\int \\frac{1}{3}\\sin 2x - \\frac{1}{2}\\cos 3x \\, dx",
        [
            [
                "Step 1: Integrate term by term",
                "\\[ = \\frac{1}{3}\\left(-\\frac{1}{2}\\cos 2x\\right) - \\frac{1}{2}\\left(\\frac{1}{3}\\sin 3x\\right) + C \\]"
            ],
            [
                "Step 2: Simplify",
                "\\[ = -\\frac{1}{6}\\cos 2x - \\frac{1}{6}\\sin 3x + C \\]"
            ]
        ]
    ],
    [
        224,
        "\\int \\frac{3x}{\\sqrt{4-2x^2}} \\, dx",
        [
            [
                "Step 1: Reverse chain rule / Substitution \\(u = 4-2x^2 \\implies du = -4x dx\\)",
                "\\[ = -\\frac{3}{4} \\int u^{-\\frac{1}{2}} du \\]"
            ],
            [
                "Step 2: Integrate and simplify",
                "\\[ = -\\frac{3}{4} \\cdot 2u^{\\frac{1}{2}} + C = -\\frac{3}{2}\\sqrt{4-2x^2} + C \\]"
            ]
        ]
    ],
    [
        225,
        "\\int \\frac{1}{\\sin x \\cos^2 x} \\, dx",
        [
            [
                "Step 1: Multiply numerator & denominator by \\(\\sin x\\)",
                "\\[ \\int \\frac{\\sin x}{(1-\\cos^2 x)\\cos^2 x} \\, dx \\]"
            ],
            [
                "Step 2: Substitution \\(u = \\cos x \\implies du = -\\sin x dx\\)",
                "\\[ \\int \\frac{1}{(u^2-1)u^2} du = \\int \\left(\\frac{1}{u^2-1} - \\frac{1}{u^2}\\right) du \\]"
            ],
            [
                "Step 3: Integrate partial fractions",
                "\\[ = \\frac{1}{2}\\ln\\left|\\frac{\\cos x - 1}{\\cos x + 1}\\right| + \\frac{1}{\\cos x} + C = \\ln|\\tan x| + \\sec x + C \\]"
            ]
        ]
    ],
    [
        226,
        "\\int \\frac{3x}{4-2x^2} \\, dx",
        [
            [
                "Step 1: Logarithmic derivative check",
                "Derivative of denominator \\(4-2x^2\\) is \\(-4x\\)."
            ],
            [
                "Step 2: Integrate",
                "\\[ = -\\frac{3}{4} \\int \\frac{-4x}{4-2x^2} dx = -\\frac{3}{4}\\ln|4-2x^2| + C \\]"
            ]
        ]
    ],
    [
        227,
        "\\int \\frac{1-4x}{(4x-\\ln x)^3} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = 4x-\\ln x \\implies du = \\left(4-\\frac{1}{x}\\right)dx = \\frac{4x-1}{x}dx\\)",
                "Notice numerator is \\(-(4x-1)\\). For standard form \\(\\int \\frac{1-4x}{x(4x-\\ln x)^3} dx\\):\n\\[ -\\int u^{-3} du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = \\frac{1}{2u^2} + C = \\frac{1}{2(4x-\\ln x)^2} + C \\]"
            ]
        ]
    ],
    [
        228,
        "\\int \\frac{\\sin x}{\\cos^4 x} \\, dx",
        [
            [
                "Step 1: Rewrite as secant tangent combination",
                "\\[ \\int \\tan x \\sec^3 x \\, dx = \\int \\sec^2 x (\\sec x \\tan x) \\, dx \\]"
            ],
            [
                "Step 2: Substitution \\(u = \\sec x \\implies du = \\sec x \\tan x \\, dx\\)",
                "\\[ \\int u^2 du = \\frac{1}{3}u^3 + C = \\frac{1}{3}\\sec^3 x + C \\]"
            ]
        ]
    ],
    [
        229,
        "\\int \\frac{\\operatorname{cosec}^2 x}{1+\\cot x} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = 1+\\cot x \\implies du = -\\operatorname{cosec}^2 x \\, dx\\)",
                "\\[ -\\int \\frac{1}{u} du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = -\\ln|u| + C = -\\ln|1+\\cot x| + C \\]"
            ]
        ]
    ],
    [
        230,
        "\\int x^2 \\cos\\left(\\frac{1}{4}x\\right) \\, dx",
        [
            [
                "Step 1: Integration by Parts (first pass)",
                "Let \\(u = x^2, dv = \\cos(\\frac{1}{4}x)dx \\implies du = 2xdx, v = 4\\sin(\\frac{1}{4}x)\\):\n\\[ = 4x^2\\sin\\left(\\frac{1}{4}x\\right) - \\int 8x \\sin\\left(\\frac{1}{4}x\\right) dx \\]"
            ],
            [
                "Step 2: Integration by Parts (second pass)",
                "For \\(\\int 8x \\sin(\\frac{1}{4}x)dx\\), let \\(w = 8x, dz = \\sin(\\frac{1}{4}x)dx \\implies dw = 8dx, z = -4\\cos(\\frac{1}{4}x)\\):\n\\[ = 4x^2\\sin\\left(\\frac{1}{4}x\\right) - \\left[-32x\\cos\\left(\\frac{1}{4}x\\right) + \\int 32\\cos\\left(\\frac{1}{4}x\\right) dx\\right] \\]"
            ],
            [
                "Step 3: Complete integration",
                "\\[ = 4x^2\\sin\\left(\\frac{1}{4}x\\right) + 32x\\cos\\left(\\frac{1}{4}x\\right) - 128\\sin\\left(\\frac{1}{4}x\\right) + C \\]"
            ]
        ]
    ],
    [
        231,
        "\\int \\frac{3}{(\\sqrt{x}-2)(\\sqrt{x}+1)} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = \\sqrt{x} \\implies x = u^2, dx = 2u \\, du\\)",
                "\\[ \\int \\frac{6u}{(u-2)(u+1)} \\, du \\]"
            ],
            [
                "Step 2: Partial fractions decomposition",
                "\\[ \\frac{6u}{(u-2)(u+1)} = \\frac{A}{u-2} + \\frac{B}{u+1} \\implies A = 4, B = 2 \\]"
            ],
            [
                "Step 3: Integrate and substitute back",
                "\\[ = 4\\ln|u-2| + 2\\ln|u+1| + C = 4\\ln|\\sqrt{x}-2| + 2\\ln|\\sqrt{x}+1| + C \\]"
            ]
        ]
    ],
    [
        232,
        "\\int \\frac{1}{(\\sqrt{x}-2)(\\sqrt{x}+2)} \\, dx",
        [
            [
                "Step 1: Simplify denominator difference of squares",
                "\\[ \\int \\frac{1}{x-4} \\, dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\ln|x-4| + C \\]"
            ]
        ]
    ],
    [
        233,
        "\\int \\frac{4-3x}{2x+1} \\, dx",
        [
            [
                "Step 1: Algebraic long division",
                "\\[ \\frac{-3x+4}{2x+1} = -\\frac{3}{2} + \\frac{11/2}{2x+1} \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = -\\frac{3}{2}x + \\frac{11}{4}\\ln|2x+1| + C \\]"
            ]
        ]
    ],
    [
        234,
        "\\int \\left(1+\\frac{1}{x}\\right)\\sqrt{x} \\, dx",
        [
            [
                "Step 1: Expand terms into powers of x",
                "\\[ \\int \\left(x^{\\frac{1}{2}} + x^{-\\frac{1}{2}}\\right) dx \\]"
            ],
            [
                "Step 2: Apply power rule",
                "\\[ = \\frac{2}{3}x^{\\frac{3}{2}} + 2x^{\\frac{1}{2}} + C = \\frac{2}{3}x\\sqrt{x} + 2\\sqrt{x} + C \\]"
            ]
        ]
    ],
    [
        235,
        "\\int \\frac{\\sec x}{\\cos x - \\sin x} \\, dx",
        [
            [
                "Step 1: Express in terms of sines and cosines",
                "\\[ \\int \\frac{1}{\\cos x(\\cos x - \\sin x)} \\, dx = \\int \\frac{1}{\\cos^2 x(1-\\tan x)} \\, dx = \\int \\frac{\\sec^2 x}{1-\\tan x} \\, dx \\]"
            ],
            [
                "Step 2: Logarithmic derivative integration",
                "Let \\(u = 1-\\tan x \\implies du = -\\sec^2 x \\, dx\\):\n\\[ = -\\ln|1-\\tan x| + C \\]"
            ]
        ]
    ],
    [
        236,
        "\\int \\frac{x^2-2}{x^2-1} \\, dx",
        [
            [
                "Step 1: Polynomial long division",
                "\\[ \\frac{x^2-2}{x^2-1} = 1 - \\frac{1}{x^2-1} \\]"
            ],
            [
                "Step 2: Integrate using standard partial fractions for \\(\\frac{1}{x^2-1}\\)",
                "\\[ = x - \\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + C \\]"
            ]
        ]
    ],
    [
        237,
        "\\int \\frac{1}{3-x^2} \\, dx",
        [
            [
                "Step 1: Partial fraction decomposition / Standard inverse hyperbolic / log formula",
                "Using \\(\\int \\frac{1}{a^2-x^2} dx = \\frac{1}{2a}\\ln\\left|\\frac{a+x}{a-x}\\right|\\) where \\(a = \\sqrt{3}\\):\n\\[ = \\frac{1}{2\\sqrt{3}}\\ln\\left|\\frac{\\sqrt{3}+x}{\\sqrt{3}-x}\\right| + C \\]"
            ]
        ]
    ],
    [
        238,
        "\\int \\frac{6x^2}{2x^3-1} \\, dx",
        [
            [
                "Step 1: Recognize logarithmic derivative",
                "Note \\(\\frac{d}{dx}(2x^3-1) = 6x^2\\)."
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\ln|2x^3-1| + C \\]"
            ]
        ]
    ],
    [
        239,
        "\\int \\frac{1}{1+\\sqrt{x}-1} \\, dx",
        [
            [
                "Step 1: Simplify denominator to \\(\\sqrt{x}\\)",
                "\\[ \\int x^{-\\frac{1}{2}} \\, dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = 2\\sqrt{x} + C \\]"
            ]
        ]
    ],
    [
        240,
        "\\int \\frac{x+1}{x-5} \\, dx",
        [
            [
                "Step 1: Algebraic adjustment",
                "\\[ \\frac{x-5+6}{x-5} = 1 + \\frac{6}{x-5} \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = x + 6\\ln|x-5| + C \\]"
            ]
        ]
    ],
    [
        241,
        "\\int \\frac{(x+2)^2}{3x} \\, dx",
        [
            [
                "Step 1: Expand numerator",
                "\\[ \\frac{x^2+4x+4}{3x} = \\frac{1}{3}x + \\frac{4}{3} + \\frac{4}{3x} \\]"
            ],
            [
                "Step 2: Integrate term by term",
                "\\[ = \\frac{1}{6}x^2 + \\frac{4}{3}x + \\frac{4}{3}\\ln|x| + C \\]"
            ]
        ]
    ],
    [
        242,
        "\\int 4e^{-2x} - \\frac{1}{3}\\sin 3x \\, dx",
        [
            [
                "Step 1: Integrate term by term",
                "\\[ = -2e^{-2x} + \\frac{1}{9}\\cos 3x + C \\]"
            ]
        ]
    ],
    [
        243,
        "\\int 2x \\sec^2 2x \\, dx",
        [
            [
                "Step 1: Integration by Parts setup",
                "Let \\(u = x, dv = 2\\sec^2 2x \\, dx \\implies du = dx, v = \\tan 2x\\)."
            ],
            [
                "Step 2: Apply formula",
                "\\[ = x\\tan 2x - \\int \\tan 2x \\, dx = x\\tan 2x - \\frac{1}{2}\\ln|\\sec 2x| + C \\]"
            ]
        ]
    ],
    [
        244,
        "\\int \\cos x \\sin^8 x \\, dx",
        [
            [
                "Step 1: Substitution \\(u = \\sin x \\implies du = \\cos x dx\\)",
                "\\[ \\int u^8 du = \\frac{1}{9}u^9 + C \\]"
            ],
            [
                "Step 2: Substitute back",
                "\\[ = \\frac{1}{9}\\sin^9 x + C \\]"
            ]
        ]
    ],
    [
        245,
        "\\int \\frac{\\sin^5 x}{\\cos^7 x} \\, dx",
        [
            [
                "Step 1: Rewrite as tangent and secant product",
                "\\[ \\int \\frac{\\sin^5 x}{\\cos^5 x} \\cdot \\frac{1}{\\cos^2 x} dx = \\int \\tan^5 x \\sec^2 x \\, dx \\]"
            ],
            [
                "Step 2: Substitution \\(u = \\tan x \\implies du = \\sec^2 x dx\\)",
                "\\[ \\int u^5 du = \\frac{1}{6}u^6 + C = \\frac{1}{6}\\tan^6 x + C \\]"
            ]
        ]
    ],
    [
        246,
        "\\int \\tan 3x \\, dx",
        [
            [
                "Step 1: Express as \\(\\frac{\\sin 3x}{\\cos 3x}\\)",
                "\\[ \\int \\frac{\\sin 3x}{\\cos 3x} \\, dx \\]"
            ],
            [
                "Step 2: Integrate logarithmic form",
                "\\[ = -\\frac{1}{3}\\ln|\\cos 3x| + C = \\frac{1}{3}\\ln|\\sec 3x| + C \\]"
            ]
        ]
    ],
    [
        247,
        "\\int \\frac{1}{\\sec x - 1} \\, dx",
        [
            [
                "Step 1: Multiply numerator & denominator by conjugate \\(\\sec x + 1\\)",
                "\\[ \\int \\frac{\\sec x + 1}{\\sec^2 x - 1} dx = \\int \\frac{\\sec x + 1}{\\tan^2 x} dx = \\int (\\operatorname{cosec} x \\cot x + \\cot^2 x) dx \\]"
            ],
            [
                "Step 2: Replace \\(\\cot^2 x = \\operatorname{cosec}^2 x - 1\\)",
                "\\[ = \\int (\\operatorname{cosec} x \\cot x + \\operatorname{cosec}^2 x - 1) dx \\]"
            ],
            [
                "Step 3: Integrate",
                "\\[ = -\\operatorname{cosec} x - \\cot x - x + C \\]"
            ]
        ]
    ],
    [
        248,
        "\\int \\frac{\\sin^2 x}{\\cos^4 x} \\, dx",
        [
            [
                "Step 1: Convert to tangent and secant",
                "\\[ \\int \\frac{\\sin^2 x}{\\cos^2 x} \\cdot \\frac{1}{\\cos^2 x} dx = \\int \\tan^2 x \\sec^2 x \\, dx \\]"
            ],
            [
                "Step 2: Substitution \\(u = \\tan x \\implies du = \\sec^2 x dx\\)",
                "\\[ \\int u^2 du = \\frac{1}{3}u^3 + C = \\frac{1}{3}\\tan^3 x + C \\]"
            ]
        ]
    ],
    [
        249,
        "\\int \\frac{\\sin x \\cos x}{1-\\cos x} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = 1-\\cos x \\implies \\cos x = 1-u, du = \\sin x dx\\)",
                "\\[ \\int \\frac{1-u}{u} du = \\int \\left(\\frac{1}{u} - 1\\right) du = \\ln|u| - u + C \\]"
            ],
            [
                "Step 2: Substitute back",
                "\\[ = \\ln|1-\\cos x| - (1-\\cos x) + C = \\ln|1-\\cos x| + \\cos x + C' \\]"
            ]
        ]
    ],
    [
        250,
        "\\int \\frac{(4x-1)^{-1}}{4} \\, dx",
        [
            [
                "Step 1: Express as fraction",
                "\\[ \\frac{1}{4} \\int \\frac{1}{4x-1} \\, dx \\]"
            ],
            [
                "Step 2: Integrate using log rule",
                "\\[ = \\frac{1}{4} \\cdot \\frac{1}{4}\\ln|4x-1| + C = \\frac{1}{16}\\ln|4x-1| + C \\]"
            ]
        ]
    ]
];
