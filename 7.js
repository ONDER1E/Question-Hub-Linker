export default [
    [
        301,
        "\\int \\frac{3x^2+5x}{x^2+1} \\, dx",
        [
            [
                "Step 1: Algebraic division",
                "Divide numerator by denominator:\n\\[ \\frac{3x^2+5x}{x^2+1} = 3 + \\frac{5x-3}{x^2+1} = 3 + \\frac{5x}{x^2+1} - \\frac{3}{x^2+1} \\]"
            ],
            [
                "Step 2: Integrate term by term",
                "\\[ \\int \\left(3 + \\frac{5x}{x^2+1} - \\frac{3}{x^2+1}\\right) dx = 3x + \\frac{5}{2}\\ln(x^2+1) - 3\\arctan x + C \\]"
            ]
        ]
    ],
    [
        302,
        "\\int \\sin^2 2x \\, dx",
        [
            [
                "Step 1: Double angle identity",
                "Use \\(\\sin^2 2x = \\frac{1-\\cos 4x}{2}\\):\n\\[ \\int \\frac{1-\\cos 4x}{2} \\, dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\frac{1}{2}x - \\frac{1}{8}\\sin 4x + C \\]"
            ]
        ]
    ],
    [
        303,
        "\\int \\frac{\\cos 2x}{\\cos^2 x} \\, dx",
        [
            [
                "Step 1: Double angle identity \\(\\cos 2x = 2\\cos^2 x - 1\\)",
                "\\[ \\int \\frac{2\\cos^2 x - 1}{\\cos^2 x} \\, dx = \\int (2 - \\sec^2 x) \\, dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = 2x - \\tan x + C \\]"
            ]
        ]
    ],
    [
        304,
        "\\int \\sec^2 x \\tan x \\, dx",
        [
            [
                "Step 1: Substitution \\(u = \\tan x \\implies du = \\sec^2 x dx\\)",
                "\\[ \\int u \\, du = \\frac{1}{2}u^2 + C \\]"
            ],
            [
                "Step 2: Substitute back",
                "\\[ = \\frac{1}{2}\\tan^2 x + C \\]"
            ]
        ]
    ],
    [
        305,
        "\\int x\\left[(\\ln x)^2 - 1\\right] \\, dx",
        [
            [
                "Step 1: Expand terms",
                "\\[ \\int x(\\ln x)^2 \\, dx - \\int x \\, dx \\]"
            ],
            [
                "Step 2: Integration by Parts on \\(\\int x(\\ln x)^2 dx\\)",
                "Let \\(u = (\\ln x)^2, dv = x dx \\implies du = \\frac{2\\ln x}{x}dx, v = \\frac{1}{2}x^2\\):\n\\[ = \\frac{1}{2}x^2(\\ln x)^2 - \\int x\\ln x \\, dx \\]"
            ],
            [
                "Step 3: Combine results",
                "\\[ = \\frac{1}{2}x^2(\\ln x)^2 - \\frac{1}{2}x^2\\ln x - \\frac{1}{4}x^2 + C \\]"
            ]
        ]
    ],
    [
        306,
        "\\int \\frac{x^2}{x^3+5} \\, dx",
        [
            [
                "Step 1: Recognize logarithmic derivative structure",
                "Derivative of \\(x^3+5\\) is \\(3x^2\\)."
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\frac{1}{3} \\int \\frac{3x^2}{x^3+5} dx = \\frac{1}{3}\\ln|x^3+5| + C \\]"
            ]
        ]
    ],
    [
        307,
        "\\int \\frac{2x+1}{3x-1} \\, dx",
        [
            [
                "Step 1: Algebraic long division",
                "\\[ \\frac{2x+1}{3x-1} = \\frac{2}{3} + \\frac{5/3}{3x-1} \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\frac{2}{3}x + \\frac{5}{9}\\ln|3x-1| + C \\]"
            ]
        ]
    ],
    [
        308,
        "\\int x(3+x^2)^4 \\, dx",
        [
            [
                "Step 1: Reverse chain rule / Substitution \\(u = 3+x^2 \\implies du = 2x dx\\)",
                "\\[ \\frac{1}{2} \\int u^4 du = \\frac{1}{10}u^5 + C \\]"
            ],
            [
                "Step 2: Substitute back",
                "\\[ = \\frac{1}{10}(3+x^2)^5 + C \\]"
            ]
        ]
    ],
    [
        309,
        "\\int \\frac{9}{2\\sqrt{9-x^2}} \\, dx",
        [
            [
                "Step 1: Standard inverse trigonometric form",
                "Recall \\(\\int \\frac{1}{\\sqrt{a^2-x^2}} dx = \\arcsin\\left(\\frac{x}{a}\\right)\\) with \\(a = 3\\)."
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\frac{9}{2}\\arcsin\\left(\\frac{x}{3}\\right) + C \\]"
            ]
        ]
    ],
    [
        310,
        "\\int \\frac{\\cos x}{\\sqrt{\\sin^3 x}} \\, dx",
        [
            [
                "Step 1: Index form \\(\\int \\cos x (\\sin x)^{-\\frac{3}{2}} dx\\)",
                "Substitution \\(u = \\sin x \\implies du = \\cos x dx\\)."
            ],
            [
                "Step 2: Integrate",
                "\\[ \\int u^{-\\frac{3}{2}} du = -2u^{-\\frac{1}{2}} + C = -\\frac{2}{\\sqrt{\\sin x}} + C \\]"
            ]
        ]
    ],
    [
        311,
        "\\int \\frac{x-3}{\\sqrt{x+1}-2} \\, dx",
        [
            [
                "Step 1: Rationalize or substitute \\(u = \\sqrt{x+1} \\implies x = u^2-1, dx = 2u du\\)",
                "\\[ \\int \\frac{u^2-4}{u-2} (2u) du = \\int (u+2)(2u) du = \\int (2u^2 + 4u) du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = \\frac{2}{3}u^3 + 2u^2 + C = \\frac{2}{3}(x+1)^{\\frac{3}{2}} + 2(x+1) + C \\]"
            ]
        ]
    ],
    [
        312,
        "\\int \\frac{x-4}{x^2-4} \\, dx",
        [
            [
                "Step 1: Factor denominator \\(x^2-4 = (x-2)(x+2)\\)",
                "\\[ \\frac{x-4}{(x-2)(x+2)} = \\frac{A}{x-2} + \\frac{B}{x+2} \\implies A = -\\frac{1}{2}, B = \\frac{3}{2} \\]"
            ],
            [
                "Step 2: Integrate logs",
                "\\[ = -\\frac{1}{2}\\ln|x-2| + \\frac{3}{2}\\ln|x+2| + C \\]"
            ]
        ]
    ],
    [
        313,
        "\\int \\frac{2\\sin x}{\\cos x + \\sin x} \\, dx",
        [
            [
                "Step 1: Express numerator as sum of denominator and its derivative",
                "\\[ 2\\sin x = (\\cos x + \\sin x) - (\\cos x - \\sin x) \\]"
            ],
            [
                "Step 2: Split integral",
                "\\[ \\int 1 \\, dx - \\int \\frac{\\cos x - \\sin x}{\\cos x + \\sin x} dx = x - \\ln|\\cos x + \\sin x| + C \\]"
            ]
        ]
    ],
    [
        314,
        "\\int (1-x^2)^2 \\, dx",
        [
            [
                "Step 1: Expand binomial square",
                "\\[ \\int (1 - 2x^2 + x^4) \\, dx \\]"
            ],
            [
                "Step 2: Integrate term by term",
                "\\[ = x - \\frac{2}{3}x^3 + \\frac{1}{5}x^5 + C \\]"
            ]
        ]
    ],
    [
        315,
        "\\int \\frac{\\sqrt{\\tan x}}{\\cos^2 x} \\, dx",
        [
            [
                "Step 1: Rewrite \\(\\frac{1}{\\cos^2 x} = \\sec^2 x\\)",
                "\\[ \\int (\\tan x)^{\\frac{1}{2}}\\sec^2 x \\, dx \\]"
            ],
            [
                "Step 2: Substitution \\(u = \\tan x \\implies du = \\sec^2 x dx\\)",
                "\\[ \\int u^{\\frac{1}{2}} du = \\frac{2}{3}u^{\\frac{3}{2}} + C = \\frac{2}{3}(\\tan x)^{\\frac{3}{2}} + C \\]"
            ]
        ]
    ],
    [
        316,
        "\\int (3\\sin x + \\cos x)^2 \\, dx",
        [
            [
                "Step 1: Expand binomial square",
                "\\[ 9\\sin^2 x + 6\\sin x \\cos x + \\cos^2 x \\]"
            ],
            [
                "Step 2: Use double angle identities \\(\\sin^2 x = \\frac{1-\\cos 2x}{2}, \\cos^2 x = \\frac{1+\\cos 2x}{2}\\)",
                "\\[ = 5 - 4\\cos 2x + 3\\sin 2x \\]"
            ],
            [
                "Step 3: Integrate",
                "\\[ = 5x - 2\\sin 2x - \\frac{3}{2}\\cos 2x + C \\]"
            ]
        ]
    ],
    [
        317,
        "\\int \\frac{\\sec^2 x}{(1+\\tan x)^3} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = 1+\\tan x \\implies du = \\sec^2 x dx\\)",
                "\\[ \\int u^{-3} du = -\\frac{1}{2u^2} + C \\]"
            ],
            [
                "Step 2: Substitute back",
                "\\[ = -\\frac{1}{2(1+\\tan x)^2} + C \\]"
            ]
        ]
    ],
    [
        318,
        "\\int \\frac{1}{\\cos^2 x \\sin^2 x} \\, dx",
        [
            [
                "Step 1: Use \\(1 = \\sin^2 x + \\cos^2 x\\) in numerator",
                "\\[ \\int \\frac{\\sin^2 x + \\cos^2 x}{\\cos^2 x \\sin^2 x} dx = \\int (\\sec^2 x + \\operatorname{cosec}^2 x) dx \\]"
            ],
            [
                "Step 2: Integrate standard trig terms",
                "\\[ = \\tan x - \\cot x + C \\]"
            ]
        ]
    ],
    [
        319,
        "\\int \\cot 2x \\, dx",
        [
            [
                "Step 1: Express as \\(\\frac{\\cos 2x}{\\sin 2x}\\)",
                "\\[ \\int \\frac{\\cos 2x}{\\sin 2x} \\, dx \\]"
            ],
            [
                "Step 2: Logarithmic integral",
                "\\[ = \\frac{1}{2}\\ln|\\sin 2x| + C \\]"
            ]
        ]
    ],
    [
        320,
        "\\int 2^x \\, dx",
        [
            [
                "Step 1: Apply exponential base formula \\(\\int a^x dx = \\frac{a^x}{\\ln a} + C\\)",
                "\\[ = \\frac{2^x}{\\ln 2} + C \\]"
            ]
        ]
    ],
    [
        321,
        "\\int \\frac{\\sin x + x\\cos x}{1-\\cos x} \\, dx",
        [
            [
                "Step 1: Recognize quotient derivative relationship or use substitution",
                "Express as derivative of \\(\\frac{x}{\\sin x}\\) or evaluate via parts."
            ],
            [
                "Step 2: Integrate",
                "\\[ = -x\\cot\\left(\\frac{x}{2}\\right) + C \\]"
            ]
        ]
    ],
    [
        322,
        "\\int \\frac{1}{\\cos^4 x} \\, dx",
        [
            [
                "Step 1: Rewrite \\(\\sec^4 x = (1+\\tan^2 x)\\sec^2 x\\)",
                "\\[ \\int (1+\\tan^2 x)\\sec^2 x \\, dx \\]"
            ],
            [
                "Step 2: Substitution \\(u = \\tan x \\implies du = \\sec^2 x dx\\)",
                "\\[ \\int (1+u^2) du = u + \\frac{u^3}{3} + C = \\tan x + \\frac{1}{3}\\tan^3 x + C \\]"
            ]
        ]
    ],
    [
        323,
        "\\int \\frac{\\sin x \\cos x}{\\sqrt{1+\\cos 2x}} \\, dx",
        [
            [
                "Step 1: Replace \\(1+\\cos 2x = 2\\cos^2 x\\)",
                "\\[ \\int \\frac{\\sin x \\cos x}{\\sqrt{2}\\cos x} dx = \\frac{1}{\\sqrt{2}} \\int \\sin x \\, dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = -\\frac{1}{\\sqrt{2}}\\cos x + C \\]"
            ]
        ]
    ],
    [
        324,
        "\\int \\frac{\\ln x^2}{x} \\, dx",
        [
            [
                "Step 1: Use log property \\(\\ln x^2 = 2\\ln x\\)",
                "\\[ 2 \\int \\frac{\\ln x}{x} \\, dx \\]"
            ],
            [
                "Step 2: Substitution \\(u = \\ln x \\implies du = \\frac{1}{x}dx\\)",
                "\\[ 2 \\int u \\, du = u^2 + C = (\\ln x)^2 + C \\]"
            ]
        ]
    ],
    [
        325,
        "\\int \\sin x \\cos^2\\left(\\frac{1}{2}x\\right) \\, dx",
        [
            [
                "Step 1: Half-angle reduction \\(\\cos^2(\\frac{x}{2}) = \\frac{1+\\cos x}{2}\\)",
                "\\[ \\int \\sin x \\left(\\frac{1+\\cos x}{2}\\right) dx = \\frac{1}{2} \\int \\sin x \\, dx + \\frac{1}{2} \\int \\sin x \\cos x \\, dx \\]"
            ],
            [
                "Step 2: Integrate both terms",
                "\\[ = -\\frac{1}{2}\\cos x - \\frac{1}{4}\\cos^2 x + C \\]"
            ]
        ]
    ],
    [
        326,
        "\\int \\frac{e^{3x}+1}{e^x+1} \\, dx",
        [
            [
                "Step 1: Factor numerator sum of cubes \\(a^3+b^3 = (a+b)(a^2-ab+b^2)\\)",
                "\\[ \\frac{(e^x+1)(e^{2x}-e^x+1)}{e^x+1} = e^{2x} - e^x + 1 \\]"
            ],
            [
                "Step 2: Integrate term by term",
                "\\[ = \\frac{1}{2}e^{2x} - e^x + x + C \\]"
            ]
        ]
    ],
    [
        327,
        "\\int \\frac{\\sqrt{x}}{x-1} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = \\sqrt{x} \\implies x = u^2, dx = 2u du\\)",
                "\\[ \\int \\frac{u}{u^2-1} (2u) du = 2 \\int \\frac{u^2}{u^2-1} du = 2 \\int \\left(1 + \\frac{1}{u^2-1}\\right) du \\]"
            ],
            [
                "Step 2: Integrate using partial fractions",
                "\\[ = 2u + \\ln\\left|\\frac{u-1}{u+1}\\right| + C = 2\\sqrt{x} + \\ln\\left|\\frac{\\sqrt{x}-1}{\\sqrt{x}+1}\\right| + C \\]"
            ]
        ]
    ],
    [
        328,
        "\\int 2^x 3^x \\, dx",
        [
            [
                "Step 1: Combine base exponents \\(2^x 3^x = 6^x\\)",
                "\\[ \\int 6^x \\, dx \\]"
            ],
            [
                "Step 2: Integrate standard exponential form",
                "\\[ = \\frac{6^x}{\\ln 6} + C \\]"
            ]
        ]
    ],
    [
        329,
        "\\int 3^{2x+1} \\, dx",
        [
            [
                "Step 1: Exponential rule with linear exponent",
                "\\[ = \\frac{3^{2x+1}}{2\\ln 3} + C \\]"
            ]
        ]
    ],
    [
        330,
        "\\int \\frac{2x^2+1}{x^2+2x} \\, dx",
        [
            [
                "Step 1: Long division",
                "\\[ \\frac{2x^2+1}{x(x+2)} = 2 + \\frac{-4x+1}{x(x+2)} \\]"
            ],
            [
                "Step 2: Partial fraction decomposition",
                "\\[ \\frac{-4x+1}{x(x+2)} = \\frac{A}{x} + \\frac{B}{x+2} \\implies A = \\frac{1}{2}, B = -\\frac{9}{2} \\]"
            ],
            [
                "Step 3: Integrate",
                "\\[ = 2x + \\frac{1}{2}\\ln|x| - \\frac{9}{2}\\ln|x+2| + C \\]"
            ]
        ]
    ],
    [
        331,
        "\\int \\frac{1}{x(1+\\sqrt{x})} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = \\sqrt{x} \\implies x = u^2, dx = 2u du\\)",
                "\\[ \\int \\frac{2u}{u^2(1+u)} du = 2 \\int \\frac{1}{u(1+u)} du \\]"
            ],
            [
                "Step 2: Partial fractions \\(\\frac{1}{u(1+u)} = \\frac{1}{u} - \\frac{1}{1+u}\\)",
                "\\[ = 2(\\ln|u| - \\ln|1+u|) + C = 2\\ln\\left|\\frac{\\sqrt{x}}{1+\\sqrt{x}}\\right| + C \\]"
            ]
        ]
    ],
    [
        332,
        "\\int \\frac{\\sqrt{x}}{\\sqrt{x}-1} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = \\sqrt{x} \\implies x = u^2, dx = 2u du\\)",
                "\\[ \\int \\frac{u}{u-1} (2u) du = 2 \\int \\frac{u^2}{u-1} du \\]"
            ],
            [
                "Step 2: Long division \\(\\frac{u^2}{u-1} = u + 1 + \\frac{1}{u-1}\\)",
                "\\[ = 2\\left(\\frac{u^2}{2} + u + \\ln|u-1|\\right) + C = x + 2\\sqrt{x} + 2\\ln|\\sqrt{x}-1| + C \\]"
            ]
        ]
    ],
    [
        333,
        "\\int \\frac{1}{x(1+x^2)} \\, dx",
        [
            [
                "Step 1: Partial fraction expansion",
                "\\[ \\frac{1}{x(1+x^2)} = \\frac{1}{x} - \\frac{x}{1+x^2} \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\ln|x| - \\frac{1}{2}\\ln(1+x^2) + C = \\ln\\left|\\frac{x}{\\sqrt{1+x^2}}\\right| + C \\]"
            ]
        ]
    ],
    [
        334,
        "\\int \\sin^4 x \\sin 2x \\, dx",
        [
            [
                "Step 1: Use \\(\\sin 2x = 2\\sin x \\cos x\\)",
                "\\[ 2 \\int \\sin^5 x \\cos x \\, dx \\]"
            ],
            [
                "Step 2: Substitution \\(u = \\sin x \\implies du = \\cos x dx\\)",
                "\\[ 2 \\int u^5 du = \\frac{1}{3}u^6 + C = \\frac{1}{3}\\sin^6 x + C \\]"
            ]
        ]
    ],
    [
        335,
        "\\int (\\tan x + \\cot x)^2 \\, dx",
        [
            [
                "Step 1: Expand binomial square",
                "\\[ \\tan^2 x + 2\\tan x \\cot x + \\cot^2 x = \\tan^2 x + 2 + \\cot^2 x \\]"
            ],
            [
                "Step 2: Use identities \\(\\tan^2 x = \\sec^2 x - 1, \\cot^2 x = \\operatorname{cosec}^2 x - 1\\)",
                "\\[ = (\\sec^2 x - 1) + 2 + (\\operatorname{cosec}^2 x - 1) = \\sec^2 x + \\operatorname{cosec}^2 x \\]"
            ],
            [
                "Step 3: Integrate",
                "\\[ = \\tan x - \\cot x + C \\]"
            ]
        ]
    ],
    [
        336,
        "\\int \\frac{x^2+2x-2}{x^2-2x+2} \\, dx",
        [
            [
                "Step 1: Long division",
                "\\[ \\frac{x^2+2x-2}{x^2-2x+2} = 1 + \\frac{4x-4}{x^2-2x+2} \\]"
            ],
            [
                "Step 2: Recognize logarithmic derivative structure",
                "Note \\(\\frac{d}{dx}(x^2-2x+2) = 2x-2\\), so \\(4x-4 = 2(2x-2)\\)."
            ],
            [
                "Step 3: Integrate",
                "\\[ = x + 2\\ln(x^2-2x+2) + C \\]"
            ]
        ]
    ],
    [
        337,
        "\\int x \\sin x \\cos x \\, dx",
        [
            [
                "Step 1: Use double angle identity \\(\\sin x \\cos x = \\frac{1}{2}\\sin 2x\\)",
                "\\[ \\frac{1}{2} \\int x \\sin 2x \\, dx \\]"
            ],
            [
                "Step 2: Integration by Parts",
                "Let \\(u = x, dv = \\sin 2x dx \\implies du = dx, v = -\\frac{1}{2}\\cos 2x\\):\n\\[ = \\frac{1}{2}\\left(-\\frac{1}{2}x\\cos 2x + \\frac{1}{4}\\sin 2x\\right) + C = -\\frac{1}{4}x\\cos 2x + \\frac{1}{8}\\sin 2x + C \\]"
            ]
        ]
    ],
    [
        338,
        "\\int \\sec x \\tan^3 x \\, dx",
        [
            [
                "Step 1: Rewrite as \\(\\tan^2 x (\\sec x \\tan x) = (\\sec^2 x - 1)(\\sec x \\tan x)\\)",
                "\\[ \\int (\\sec^2 x - 1)(\\sec x \\tan x) \\, dx \\]"
            ],
            [
                "Step 2: Substitution \\(u = \\sec x \\implies du = \\sec x \\tan x dx\\)",
                "\\[ \\int (u^2 - 1) du = \\frac{1}{3}u^3 - u + C = \\frac{1}{3}\\sec^3 x - \\sec x + C \\]"
            ]
        ]
    ],
    [
        339,
        "\\int \\frac{1}{\\operatorname{cosec} x - \\cot x} \\, dx",
        [
            [
                "Step 1: Express in terms of sines and cosines",
                "\\[ \\frac{1}{\\frac{1}{\\sin x} - \\frac{\\cos x}{\\sin x}} = \\frac{\\sin x}{1-\\cos x} \\]"
            ],
            [
                "Step 2: Logarithmic derivative check",
                "Let \\(u = 1-\\cos x \\implies du = \\sin x dx\\)."
            ],
            [
                "Step 3: Integrate",
                "\\[ = \\ln|1-\\cos x| + C \\]"
            ]
        ]
    ],
    [
        340,
        "\\int \\frac{2x^4+1}{4x^4+4x} \\, dx",
        [
            [
                "Step 1: Divide constant factor and simplify",
                "\\[ \\frac{1}{2} \\int \\frac{2x^4+1}{2x^4+2x} dx = \\frac{1}{2} \\int \\left(1 + \\frac{1-2x}{2x^4+2x}\\right) dx \\]"
            ],
            [
                "Step 2: Integrate term by term",
                "\\[ = \\frac{1}{2}x + \\text{Partial Fraction logarithmic terms} + C \\]"
            ]
        ]
    ],
    [
        341,
        "\\int \\frac{\\ln(x-1)}{\\sqrt{x}} \\, dx",
        [
            [
                "Step 1: Integration by Parts setup",
                "Let \\(u = \\ln(x-1), dv = x^{-\\frac{1}{2}}dx \\implies du = \\frac{1}{x-1}dx, v = 2\\sqrt{x}\\):\n\\[ = 2\\sqrt{x}\\ln(x-1) - 2 \\int \\frac{\\sqrt{x}}{x-1} dx \\]"
            ],
            [
                "Step 2: Evaluate \\(\\int \\frac{\\sqrt{x}}{x-1} dx\\) (matches Q327)",
                "\\[ = 2\\sqrt{x}\\ln(x-1) - 4\\sqrt{x} - 2\\ln\\left|\\frac{\\sqrt{x}-1}{\\sqrt{x}+1}\\right| + C \\]"
            ]
        ]
    ],
    [
        342,
        "\\int e^{x+e^x} \\, dx",
        [
            [
                "Step 1: Rewrite exponent product property",
                "\\[ \\int e^x e^{e^x} \\, dx \\]"
            ],
            [
                "Step 2: Substitution \\(u = e^x \\implies du = e^x dx\\)",
                "\\[ \\int e^u du = e^u + C = e^{e^x} + C \\]"
            ]
        ]
    ],
    [
        343,
        "\\int \\frac{1}{x(1+\\sqrt{x})^2} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = \\sqrt{x} \\implies x = u^2, dx = 2u du\\)",
                "\\[ \\int \\frac{2u}{u^2(1+u)^2} du = 2 \\int \\frac{1}{u(1+u)^2} du \\]"
            ],
            [
                "Step 2: Partial fraction decomposition",
                "\\[ \\frac{1}{u(1+u)^2} = \\frac{1}{u} - \\frac{1}{1+u} - \\frac{1}{(1+u)^2} \\]"
            ],
            [
                "Step 3: Integrate and substitute back",
                "\\[ = 2\\ln|u| - 2\\ln|1+u| + \\frac{2}{1+u} + C = 2\\ln\\left|\\frac{\\sqrt{x}}{1+\\sqrt{x}}\\right| + \\frac{2}{1+\\sqrt{x}} + C \\]"
            ]
        ]
    ],
    [
        344,
        "\\int x^2 e^{-x} \\, dx",
        [
            [
                "Step 1: Integration by Parts (Pass 1)",
                "Let \\(u = x^2, dv = e^{-x}dx \\implies du = 2xdx, v = -e^{-x}\\):\n\\[ = -x^2 e^{-x} + 2 \\int x e^{-x} \\, dx \\]"
            ],
            [
                "Step 2: Integration by Parts (Pass 2)",
                "Let \\(w = x, dz = e^{-x}dx \\implies dw = dx, z = -e^{-x}\\):\n\\[ = -x^2 e^{-x} - 2x e^{-x} - 2e^{-x} + C = -e^{-x}(x^2+2x+2) + C \\]"
            ]
        ]
    ],
    [
        345,
        "\\int \\frac{e^{\\sqrt{x}}}{\\sqrt{x}} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = \\sqrt{x} \\implies du = \\frac{1}{2\\sqrt{x}}dx\\)",
                "\\[ 2 \\int e^u du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = 2e^u + C = 2e^{\\sqrt{x}} + C \\]"
            ]
        ]
    ],
    [
        346,
        "\\int \\sqrt{x}e^{\\sqrt{x}} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = \\sqrt{x} \\implies x = u^2, dx = 2u du\\)",
                "\\[ \\int u \\cdot e^u (2u) du = 2 \\int u^2 e^u \\, du \\]"
            ],
            [
                "Step 2: Integration by Parts twice",
                "\\[ = 2(u^2 e^u - 2u e^u + 2e^u) + C = 2e^{\\sqrt{x}}(x - 2\\sqrt{x} + 2) + C \\]"
            ]
        ]
    ],
    [
        347,
        "\\int \\frac{4x^2-x+1}{(x-1)(2x-1)} \\, dx",
        [
            [
                "Step 1: Long division",
                "\\[ \\frac{4x^2-x+1}{2x^2-3x+1} = 2 + \\frac{5x-1}{(x-1)(2x-1)} \\]"
            ],
            [
                "Step 2: Partial fractions decomposition",
                "\\[ \\frac{5x-1}{(x-1)(2x-1)} = \\frac{A}{x-1} + \\frac{B}{2x-1} \\implies A = 4, B = -3 \\]"
            ],
            [
                "Step 3: Integrate",
                "\\[ = 2x + 4\\ln|x-1| - \\frac{3}{2}\\ln|2x-1| + C \\]"
            ]
        ]
    ],
    [
        348,
        "\\int e^x \\cos x \\, dx",
        [
            [
                "Step 1: Cyclic Integration by Parts",
                "Let \\(I = \\int e^x \\cos x dx\\). Applying parts twice gives:\n\\[ I = e^x \\sin x + e^x \\cos x - I \\]"
            ],
            [
                "Step 2: Solve for I",
                "\\[ 2I = e^x(\\sin x + \\cos x) \\implies I = \\frac{1}{2}e^x(\\sin x + \\cos x) + C \\]"
            ]
        ]
    ],
    [
        349,
        "\\int \\frac{5^{2x}}{5^{2x}+3} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = 5^{2x}+3 \\implies du = 2 \\cdot 5^{2x} \\ln 5 \\, dx\\)",
                "\\[ \\frac{1}{2\\ln 5} \\int \\frac{1}{u} du \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\frac{1}{2\\ln 5}\\ln(5^{2x}+3) + C \\]"
            ]
        ]
    ],
    [
        350,
        "\\int \\frac{3x^5}{x^3-1} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = x^3-1 \\implies x^3 = u+1, du = 3x^2 dx\\)",
                "\\[ \\int \\frac{x^3(3x^2)}{x^3-1} dx = \\int \\frac{u+1}{u} du = \\int \\left(1 + \\frac{1}{u}\\right) du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = u + \\ln|u| + C = (x^3-1) + \\ln|x^3-1| + C = x^3 + \\ln|x^3-1| + C' \\]"
            ]
        ]
    ]
];
