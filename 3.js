export default [
    [
        101,
        "\\int \\sqrt{x} \\, dx",
        [
            [
                "Step 1: Rewrite in index form",
                "Express the square root as a fractional exponent:\n\\[ \\int x^{\\frac{1}{2}} \\, dx \\]"
            ],
            [
                "Step 2: Apply the power rule",
                "Add 1 to the exponent \\(\\frac{1}{2} + 1 = \\frac{3}{2}\\) and divide by the new power:\n\\[ = \\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} + C \\]"
            ],
            [
                "Step 3: Simplify the expression",
                "\\[ = \\frac{2}{3}x^{\\frac{3}{2}} + C \\]"
            ]
        ]
    ],
    [
        102,
        "\\int \\frac{1}{x^{2}\\sqrt{x^{2}-1}} \\, dx",
        [
            [
                "Step 1: Use trigonometric substitution",
                "Let \\(x = \\sec \\theta \\implies dx = \\sec \\theta \\tan \\theta \\, d\\theta\\). Then \\(\\sqrt{x^2-1} = \\tan \\theta\\)."
            ],
            [
                "Step 2: Substitute into the integral",
                "\\[ \\int \\frac{\\sec \\theta \\tan \\theta}{\\sec^2 \\theta \\tan \\theta} \\, d\\theta = \\int \\frac{1}{\\sec \\theta} \\, d\\theta = \\int \\cos \\theta \\, d\\theta \\]"
            ],
            [
                "Step 3: Integrate and substitute back",
                "\\[ = \\sin \\theta + C = \\frac{\\sqrt{x^2-1}}{x} + C \\]"
            ]
        ]
    ],
    [
        103,
        "\\int \\frac{3}{\\sqrt{2-4x}} \\, dx",
        [
            [
                "Step 1: Rewrite as an index expression",
                "\\[ \\int 3(2-4x)^{-\\frac{1}{2}} \\, dx \\]"
            ],
            [
                "Step 2: Apply reverse chain rule",
                "Divide by the new power \\(\\frac{1}{2}\\) and the inner derivative \\(-4\\):\n\\[ = 3 \\cdot \\frac{(2-4x)^{\\frac{1}{2}}}{\\frac{1}{2} \\cdot (-4)} + C \\]"
            ],
            [
                "Step 3: Simplify coefficients",
                "\\[ = 3 \\cdot \\left(-\\frac{1}{2}\\right) \\sqrt{2-4x} + C = -\\frac{3}{2}\\sqrt{2-4x} + C \\]"
            ]
        ]
    ],
    [
        104,
        "\\int \\frac{1}{1+\\cos 2x} \\, dx",
        [
            [
                "Step 1: Apply double angle identity for cosine",
                "Since \\(\\cos 2x = 2\\cos^2 x - 1\\), the denominator becomes \\(2\\cos^2 x\\):\n\\[ \\int \\frac{1}{2\\cos^2 x} \\, dx = \\frac{1}{2} \\int \\sec^2 x \\, dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\frac{1}{2}\\tan x + C \\]"
            ]
        ]
    ],
    [
        105,
        "\\int \\frac{2}{2x-x^2} \\, dx",
        [
            [
                "Step 1: Factor the denominator",
                "\\[ \\frac{2}{x(2-x)} \\]"
            ],
            [
                "Step 2: Partial fraction decomposition",
                "\\[ \\frac{2}{x(2-x)} = \\frac{A}{x} + \\frac{2-x}{...} \\implies \\frac{1}{x} + \\frac{1}{2-x} \\]"
            ],
            [
                "Step 3: Integrate logs",
                "\\[ \\int \\left(\\frac{1}{x} + \\frac{1}{2-x}\\right) dx = \\ln|x| - \\ln|2-x| + C = \\ln\\left|\\frac{x}{2-x}\\right| + C \\]"
            ]
        ]
    ],
    [
        106,
        "\\int \\frac{\\ln x}{x^2} \\, dx",
        [
            [
                "Step 1: Integration by Parts setup",
                "Let \\(u = \\ln x, dv = x^{-2}dx \\implies du = \\frac{1}{x}dx, v = -\\frac{1}{x}\\)."
            ],
            [
                "Step 2: Apply formula",
                "\\[ = -\\frac{\\ln x}{x} - \\int \\left(-\\frac{1}{x}\\right)\\left(\\frac{1}{x}\\right)dx = -\\frac{\\ln x}{x} + \\int x^{-2} dx \\]"
            ],
            [
                "Step 3: Complete integration",
                "\\[ = -\\frac{\\ln x}{x} - \\frac{1}{x} + C \\]"
            ]
        ]
    ],
    [
        107,
        "\\int \\frac{3x^2}{x^3+1} \\, dx",
        [
            [
                "Step 1: Recognize logarithmic derivative structure",
                "Note that \\(\\frac{d}{dx}(x^3+1) = 3x^2\\)."
            ],
            [
                "Step 2: Integrate directly",
                "\\[ = \\ln|x^3+1| + C \\]"
            ]
        ]
    ],
    [
        108,
        "\\int \\frac{2x+1}{2x-1} \\, dx",
        [
            [
                "Step 1: Algebraic division",
                "\\[ \\frac{2x+1}{2x-1} = 1 + \\frac{2}{2x-1} \\]"
            ],
            [
                "Step 2: Integrate term-by-term",
                "\\[ = x + \\ln|2x-1| + C \\]"
            ]
        ]
    ],
    [
        109,
        "\\int \\frac{14x+1}{(1-x)(2x+1)} \\, dx",
        [
            [
                "Step 1: Partial fraction decomposition",
                "\\[ \\frac{14x+1}{(1-x)(2x+1)} = \\frac{A}{1-x} + \\frac{B}{2x+1} \\implies A = 5, B = -2 \\]"
            ],
            [
                "Step 2: Integrate logs",
                "\\[ \\int \\left(\\frac{5}{1-x} - \\frac{2}{2x+1}\\right) dx = -5\\ln|1-x| - \\ln|2x+1| + C \\]"
            ]
        ]
    ],
    [
        110,
        "\\int \\frac{6}{\\sqrt{2x+3}} \\, dx",
        [
            [
                "Step 1: Index form",
                "\\[ \\int 6(2x+3)^{-\\frac{1}{2}} \\, dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = 6 \\cdot \\frac{(2x+3)^{\\frac{1}{2}}}{\\frac{1}{2} \\cdot 2} + C = 6\\sqrt{2x+3} + C \\]"
            ]
        ]
    ],
    [
        111,
        "\\int \\frac{\\sin^4 x + \\cos^2 x}{\\sin^2 x} \\, dx",
        [
            [
                "Step 1: Split fraction",
                "\\[ \\int \\left(\\sin^2 x + \\cot^2 x\\right) dx \\]"
            ],
            [
                "Step 2: Replace \\(\\cot^2 x = \\operatorname{cosec}^2 x - 1\\) and \\(\\sin^2 x = \\frac{1-\\cos 2x}{2}\\)",
                "\\[ = \\int \\left(\\frac{1-\\cos 2x}{2} + \\operatorname{cosec}^2 x - 1\\right) dx = \\int \\left(-\\frac{1}{2} - \\frac{1}{2}\\cos 2x + \\operatorname{cosec}^2 x\\right) dx \\]"
            ],
            [
                "Step 3: Integrate",
                "\\[ = -\\frac{1}{2}x - \\frac{1}{4}\\sin 2x - \\cot x + C \\]"
            ]
        ]
    ],
    [
        112,
        "\\int \\frac{2}{(x-4)\\sqrt{x}} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = \\sqrt{x} \\implies x = u^2, dx = 2u \\, du\\)",
                "\\[ \\int \\frac{2}{(u^2-4)} \\cdot 2u \\, du = \\int \\frac{4u}{u^2-4} du \\]"
            ],
            [
                "Step 2: Use logarithmic integration",
                "\\[ = 2\\ln|u^2-4| + C \\]"
            ],
            [
                "Step 3: Substitute back",
                "\\[ = 2\\ln|x-4| + C \\]"
            ]
        ]
    ],
    [
        113,
        "\\int \\frac{1}{2+\\sqrt{x}-1} \\, dx",
        [
            [
                "Step 1: Simplify denominator \\(\\sqrt{x}+1\\) and substitute \\(u = \\sqrt{x}\\)",
                "Using \\(x = u^2, dx = 2u \\, du\\):\n\\[ \\int \\frac{2u}{u+1} du = 2 \\int \\left(1 - \\frac{1}{u+1}\\right) du \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = 2u - 2\\ln|u+1| + C = 2\\sqrt{x} - 2\\ln|\\sqrt{x}+1| + C \\]"
            ]
        ]
    ],
    [
        114,
        "\\int \\frac{4}{\\sqrt{6x-1}} \\, dx",
        [
            [
                "Step 1: Index form",
                "\\[ \\int 4(6x-1)^{-\\frac{1}{2}} \\, dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = 4 \\cdot \\frac{(6x-1)^{\\frac{1}{2}}}{\\frac{1}{2} \\cdot 6} + C = \\frac{4}{3}\\sqrt{6x-1} + C \\]"
            ]
        ]
    ],
    [
        115,
        "\\int \\frac{3e^{2x}}{e^x-1} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = e^x \\implies du = e^x dx\\)",
                "\\[ 3 \\int \\frac{u}{u-1} du = 3 \\int \\left(1 + \\frac{1}{u-1}\\right) du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = 3u + 3\\ln|u-1| + C = 3e^x + 3\\ln|e^x-1| + C \\]"
            ]
        ]
    ],
    [
        116,
        "\\int x \\sec^2 x \\, dx",
        [
            [
                "Step 1: Integration by Parts setup",
                "Let \\(u = x, dv = \\sec^2 x dx \\implies du = dx, v = \\tan x\\)."
            ],
            [
                "Step 2: Apply formula",
                "\\[ = x\\tan x - \\int \\tan x \\, dx = x\\tan x - \\ln|\\sec x| + C \\]"
            ]
        ]
    ],
    [
        117,
        "\\int \\operatorname{cosec} 2x \\cot 2x \\, dx",
        [
            [
                "Step 1: Standard cosecant-cotangent integration rule",
                "\\[ = -\\frac{1}{2}\\operatorname{cosec} 2x + C \\]"
            ]
        ]
    ],
    [
        118,
        "\\int \\tan^2 x \\sec^2 x \\, dx",
        [
            [
                "Step 1: Substitution \\(u = \\tan x \\implies du = \\sec^2 x \\, dx\\)",
                "\\[ \\int u^2 du = \\frac{1}{3}u^3 + C \\]"
            ],
            [
                "Step 2: Substitute back",
                "\\[ = \\frac{1}{3}\\tan^3 x + C \\]"
            ]
        ]
    ],
    [
        119,
        "\\int \\frac{\\sin 2x}{\\cos x} \\, dx",
        [
            [
                "Step 1: Use double angle identity \\(\\sin 2x = 2\\sin x \\cos x\\)",
                "\\[ \\int \\frac{2\\sin x \\cos x}{\\cos x} dx = 2 \\int \\sin x \\, dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = -2\\cos x + C \\]"
            ]
        ]
    ],
    [
        120,
        "\\int (2\\cos x - 3\\sin x)^2 \\, dx",
        [
            [
                "Step 1: Expand expression",
                "\\[ = 4\\cos^2 x - 12\\sin x \\cos x + 9\\sin^2 x \\]"
            ],
            [
                "Step 2: Use identities \\(\\cos^2 x = \\frac{1+\\cos 2x}{2}, \\sin^2 x = \\frac{1-\\cos 2x}{2}, 2\\sin x \\cos x = \\sin 2x\\)",
                "\\[ = 4\\left(\\frac{1+\\cos 2x}{2}\\right) - 6\\sin 2x + 9\\left(\\frac{1-\\cos 2x}{2}\\right) = \\frac{13}{2} - 6\\sin 2x - \\frac{5}{2}\\cos 2x \\]"
            ],
            [
                "Step 3: Integrate",
                "\\[ = \\frac{13}{2}x + 3\\cos 2x - \\frac{5}{4}\\sin 2x + C \\]"
            ]
        ]
    ],
    [
        121,
        "\\int \\frac{1+\\sin x}{\\cos^2 x} \\, dx",
        [
            [
                "Step 1: Split fraction",
                "\\[ \\int (\\sec^2 x + \\tan x \\sec x) dx \\]"
            ],
            [
                "Step 2: Integrate standard forms",
                "\\[ = \\tan x + \\sec x + C \\]"
            ]
        ]
    ],
    [
        122,
        "\\int e^x \\cos x \\, dx",
        [
            [
                "Step 1: Integration by Parts (cyclic)",
                "Let \\(u = e^x, dv = \\cos x dx \\implies du = e^x dx, v = \\sin x\\).\n\\[ \\int e^x \\cos x \\, dx = e^x \\sin x - \\int e^x \\sin x \\, dx \\]"
            ],
            [
                "Step 2: Integration by Parts on second integral",
                "For \\(\\int e^x \\sin x dx\\), let \\(u = e^x, dv = \\sin x dx \\implies du = e^x dx, v = -\\cos x\\):\n\\[ = e^x \\sin x - \\left(-e^x \\cos x + \\int e^x \\cos x \\, dx\\) \\]"
            ],
            [
                "Step 3: Solve algebraically for the integral",
                "\\[ 2 \\int e^x \\cos x \\, dx = e^x(\\sin x + \\cos x) \\implies = \\frac{1}{2}e^x(\\sin x + \\cos x) + C \\]"
            ]
        ]
    ],
    [
        123,
        "\\int x^2 \\sin x \\, dx",
        [
            [
                "Step 1: First Integration by Parts",
                "Let \\(u = x^2, dv = \\sin x dx \\implies du = 2x dx, v = -\\cos x\\):\n\\[ = -x^2 \\cos x + \\int 2x \\cos x \\, dx \\]"
            ],
            [
                "Step 2: Second Integration by Parts on \\(\\int 2x \\cos x dx\\)",
                "Let \\(w = 2x, dw = 2dx, dz = \\cos x dx \\implies z = \\sin x\\):\n\\[ = -x^2 \\cos x + 2x \\sin x - \\int 2\\sin x \\, dx \\]"
            ],
            [
                "Step 3: Final result",
                "\\[ = -x^2 \\cos x + 2x \\sin x + 2\\cos x + C \\]"
            ]
        ]
    ],
    [
        124,
        "\\int x^2 \\sin x \\, dx",
        [
            [
                "Step 1: Note equivalence",
                "This question matches 123; same procedural derivation applies."
            ],
            [
                "Step 2: Result",
                "\\[ = (2-x^2)\\cos x + 2x \\sin x + C \\]"
            ]
        ]
    ],
    [
        125,
        "\\int (2x+1)^3 \\, dx",
        [
            [
                "Step 1: Reverse chain rule",
                "\\[ = \\frac{(2x+1)^4}{4 \\cdot 2} + C \\]"
            ],
            [
                "Step 2: Simplify",
                "\\[ = \\frac{1}{8}(2x+1)^4 + C \\]"
            ]
        ]
    ],
    [
        126,
        "\\int \\frac{\\tan^4 x}{\\cos^2 x} \\, dx",
        [
            [
                "Step 1: Rewrite \\(\\frac{1}{\\cos^2 x} = \\sec^2 x\\)",
                "\\[ \\int \\tan^4 x \\sec^2 x \\, dx \\]"
            ],
            [
                "Step 2: Use substitution \\(u = \\tan x \\implies du = \\sec^2 x \\, dx\\)",
                "\\[ \\int u^4 du = \\frac{1}{5}u^5 + C \\]"
            ],
            [
                "Step 3: Substitute back",
                "\\[ = \\frac{1}{5}\\tan^5 x + C \\]"
            ]
        ]
    ],
    [
        127,
        "\\int \\frac{4x^2-6x+5}{(2-x)(2x-1)^2} \\, dx",
        [
            [
                "Step 1: Partial fraction decomposition",
                "\\[ \\frac{4x^2-6x+5}{(2-x)(2x-1)^2} = \\frac{A}{2-x} + \\frac{B}{2x-1} + \\frac{C}{(2x-1)^2} \\implies A = 1, B = 1, C = -2 \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = -\\ln|2-x| + \\frac{1}{2}\\ln|2x-1| + \\frac{1}{2x-1} + C \\]"
            ]
        ]
    ],
    [
        128,
        "\\int \\frac{3x-1}{2x+3} \\, dx",
        [
            [
                "Step 1: Algebraic division",
                "\\[ \\frac{3x-1}{2x+3} = \\frac{3}{2} - \\frac{11/2}{2x+3} \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\frac{3}{2}x - \\frac{11}{4}\\ln|2x+3| + C \\]"
            ]
        ]
    ],
    [
        129,
        "\\int \\frac{8x^2}{1-2x} \\, dx",
        [
            [
                "Step 1: Polynomial long division",
                "\\[ \\frac{8x^2}{1-2x} = -4x - 2 - \\frac{2}{1-2x} \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = -2x^2 - 2x + \\ln|1-2x| + C \\]"
            ]
        ]
    ],
    [
        130,
        "\\int \\frac{10}{(3x+1)^{\\frac{3}{2}}} \\, dx",
        [
            [
                "Step 1: Index form",
                "\\[ \\int 10(3x+1)^{-\\frac{3}{2}} \\, dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = 10 \\cdot \\frac{(3x+1)^{-\\frac{1}{2}}}{-\\frac{1}{2} \\cdot 3} + C = -\\frac{20}{3\\sqrt{3x+1}} + C \\]"
            ]
        ]
    ],
    [
        131,
        "\\int 5^x \\, dx",
        [
            [
                "Step 1: Standard exponential integral rule \\(\\int a^x dx = \\frac{a^x}{\\ln a} + C\\)",
                "\\[ = \\frac{5^x}{\\ln 5} + C \\]"
            ]
        ]
    ],
    [
        132,
        "\\int \\sqrt{x}\\sin x \\cos^2 x \\, dx",
        [
            [
                "Step 1: Analyze structure for integration techniques",
                "This non-elementary product mix is typically evaluated using series expansions or numerical integration methods in advanced mix worksheets."
            ],
            [
                "Step 2: Standard representation",
                "Expressed via advanced special functions or integration by parts framework."
            ]
        ]
    ],
    [
        133,
        "\\int (2x+1)\\sin(x^2+x+1) \\, dx",
        [
            [
                "Step 1: Notice outer derivative matches factor",
                "Let \\(u = x^2+x+1 \\implies du = (2x+1)dx\\)."
            ],
            [
                "Step 2: Integrate",
                "\\[ \\int \\sin u \\, du = -\\cos u + C = -\\cos(x^2+x+1) + C \\]"
            ]
        ]
    ],
    [
        134,
        "\\int (2x+1)(x^2+x+1)^4 \\, dx",
        [
            [
                "Step 1: Reverse chain rule / Substitution \\(u = x^2+x+1, du = (2x+1)dx\\)",
                "\\[ \\int u^4 du = \\frac{1}{5}u^5 + C \\]"
            ],
            [
                "Step 2: Substitute back",
                "\\[ = \\frac{1}{5}(x^2+x+1)^5 + C \\]"
            ]
        ]
    ],
    [
        135,
        "\\int (x+1)\\cos(x^2+2x+1) \\, dx",
        [
            [
                "Step 1: Notice derivative relationship",
                "Let \\(u = x^2+2x+1 \\implies du = (2x+2)dx = 2(x+1)dx\\)."
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\frac{1}{2} \\int \\cos u \\, du = \\frac{1}{2}\\sin(x^2+2x+1) + C \\]"
            ]
        ]
    ],
    [
        136,
        "\\int \\frac{1}{2+\\sqrt{x}} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = \\sqrt{x} \\implies x = u^2, dx = 2u \\, du\\)",
                "\\[ \\int \\frac{2u}{2+u} du = 2 \\int \\left(1 - \\frac{2}{2+u}\\right) du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = 2u - 4\\ln|2+u| + C = 2\\sqrt{x} - 4\\ln|2+\\sqrt{x}| + C \\]"
            ]
        ]
    ],
    [
        137,
        "\\int \\frac{1}{e^x+e^{-x}+2} \\, dx",
        [
            [
                "Step 1: Multiply numerator and denominator by \\(e^x\\)",
                "\\[ \\int \\frac{e^x}{(e^x+1)^2} dx \\]"
            ],
            [
                "Step 2: Substitution \\(u = e^x+1 \\implies du = e^x dx\\)",
                "\\[ \\int u^{-2} du = -\\frac{1}{u} + C = -\\frac{1}{e^x+1} + C \\]"
            ]
        ]
    ],
    [
        138,
        "\\int x^2 \\tan(x^3+1) \\, dx",
        [
            [
                "Step 1: Substitution \\(u = x^3+1 \\implies du = 3x^2 dx\\)",
                "\\[ \\frac{1}{3} \\int \\tan u \\, du \\]"
            ],
            [
                "Step 2: Integrate \\(\\int \\tan u \\, du = \\ln|\\sec u|\\)",
                "\\[ = \\frac{1}{3}\\ln|\\sec(x^3+1)| + C \\]"
            ]
        ]
    ],
    [
        139,
        "\\int \\sin^2 x \\sec^2 x \\, dx",
        [
            [
                "Step 1: Convert to sines and cosines \\(\\sec^2 x = \\frac{1}{\\cos^2 x}\\)",
                "\\[ \\int \\frac{\\sin^2 x}{\\cos^2 x} dx = \\int \\tan^2 x \\, dx \\]"
            ],
            [
                "Step 2: Use identity \\(\\tan^2 x = \\sec^2 x - 1\\)",
                "\\[ \\int (\\sec^2 x - 1) dx = \\tan x - x + C \\]"
            ]
        ]
    ],
    [
        140,
        "\\int \\sin^2 x \\sec^2 x \\, dx",
        [
            [
                "Step 1: Duplicate reference",
                "Identical to question 139."
            ],
            [
                "Step 2: Result",
                "\\[ = \\tan x - x + C \\]"
            ]
        ]
    ],
    [
        141,
        "\\int 3\\sec^2 x \\sin x \\, dx",
        [
            [
                "Step 1: Rewrite \\(\\sec^2 x = \\frac{1}{\\cos^2 x}\\)",
                "\\[ 3 \\int \\frac{\\sin x}{\\cos^2 x} dx = 3 \\int \\tan x \\sec x \\, dx \\]"
            ],
            [
                "Step 2: Integrate standard secant form",
                "\\[ = 3\\sec x + C \\]"
            ]
        ]
    ],
    [
        142,
        "\\int \\frac{1}{x(1+\\ln x)^3} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = 1+\\ln x \\implies du = \\frac{1}{x}dx\\)",
                "\\[ \\int u^{-3} du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = -\\frac{1}{2u^2} + C = -\\frac{1}{2(1+\\ln x)^2} + C \\]"
            ]
        ]
    ],
    [
        143,
        "\\int x^3 \\ln x \\, dx",
        [
            [
                "Step 1: Integration by Parts",
                "Let \\(u = \\ln x, dv = x^3 dx \\implies du = \\frac{1}{x}dx, v = \\frac{x^4}{4}\\)."
            ],
            [
                "Step 2: Evaluate",
                "\\[ = \\frac{x^4}{4}\\ln x - \\int \\frac{x^4}{4} \\cdot \\frac{1}{x} dx = \\frac{x^4}{4}\\ln x - \\frac{x^4}{16} + C \\]"
            ]
        ]
    ],
    [
        144,
        "\\int x \\ln(2x^3) \\, dx",
        [
            [
                "Step 1: Simplify log property \\(\\ln(2x^3) = \\ln 2 + 3\\ln x\\)",
                "\\[ \\int x(\\ln 2 + 3\\ln x) dx = \\ln 2 \\int x \\, dx + 3 \\int x \\ln x \\, dx \\]"
            ],
            [
                "Step 2: Evaluate parts",
                "\\[ = \\frac{1}{2}\\ln(2)x^2 + 3\\left(\\frac{x^2}{2}\\ln x - \\frac{x^2}{4}\\right) + C \\]"
            ]
        ]
    ],
    [
        145,
        "\\int 4-\\cos^4 x \\sin x \\, dx",
        [
            [
                "Step 1: Integration by substitution \\(u = \\cos x \\implies du = -\\sin x dx\\)",
                "\\[ \\int (4-u^4)(-du) = \\int (u^4 - 4) du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = \\frac{1}{5}\\cos^5 x - 4\\cos x + C \\]"
            ]
        ]
    ],
    [
        146,
        "\\int \\frac{\\cos x}{\\sin^3 x} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = \\sin x \\implies du = \\cos x dx\\)",
                "\\[ \\int u^{-3} du = -\\frac{1}{2u^2} + C \\]"
            ],
            [
                "Step 2: Substitute back",
                "\\[ = -\\frac{1}{2\\sin^2 x} + C = -\\frac{1}{2}\\operatorname{cosec}^2 x + C \\]"
            ]
        ]
    ],
    [
        147,
        "\\int \\frac{4\\sec^2 x}{x^5+5x^2+8} \\, dx",
        [
            [
                "Step 1: Evaluate standard form",
                "This is a specialized integrand pairing trigonometric multipliers with algebraic polynomials."
            ],
            [
                "Step 2: Standard evaluation",
                "Evaluated via numerical methods or specialized substitution rules in advanced Madas extensions."
            ]
        ]
    ],
    [
        148,
        "\\int \\sec^2 x \\tan x \\sqrt{1+\\tan x} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = 1+\\tan x \\implies du = \\sec^2 x dx\\) and \\(\\tan x = u-1\\)",
                "\\[ \\int (u-1)u^{\\frac{1}{2}} du = \\int (u^{\\frac{3}{2}} - u^{\\frac{1}{2}}) du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = \\frac{2}{5}u^{\\frac{5}{2}} - \\frac{2}{3}u^{\\frac{3}{2}} + C = \\frac{2}{5}(1+\\tan x)^{\\frac{5}{2}} - \\frac{2}{3}(1+\\tan x)^{\\frac{3}{2}} + C \\]"
            ]
        ]
    ],
    [
        149,
        "\\int \\frac{\\sqrt{1+2\\tan x}}{\\cos^2 x} \\, dx",
        [
            [
                "Step 1: Rewrite \\(\\frac{1}{\\cos^2 x} = \\sec^2 x\\)",
                "\\[ \\int \\sqrt{1+2\\tan x} \\sec^2 x \\, dx \\]"
            ],
            [
                "Step 2: Substitution \\(u = 1+2\\tan x \\implies du = 2\\sec^2 x dx\\)",
                "\\[ \\frac{1}{2} \\int u^{\\frac{1}{2}} du = \\frac{1}{2} \\cdot \\frac{2}{3}u^{\\frac{3}{2}} + C \\]"
            ],
            [
                "Step 3: Substitute back",
                "\\[ = \\frac{1}{3}(1+2\\tan x)^{\\frac{3}{2}} + C \\]"
            ]
        ]
    ],
    [
        150,
        "\\int \\tan^2 x \\, dx",
        [
            [
                "Step 1: Use Pythagorean identity \\(\\tan^2 x = \\sec^2 x - 1\\)",
                "\\[ \\int (\\sec^2 x - 1) dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\tan x - x + C \\]"
            ]
        ]
    ]
];
