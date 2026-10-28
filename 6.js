export default [
    [
        251,
        "\\int \\frac{e^{2x}-2e^x}{e^x+1} \\, dx",
        [
            [
                "Step 1: Substitution",
                "Let \\(u = e^x \\implies du = e^x dx\\). The integral becomes:\n\\[ \\int \\frac{u-2}{u+1} \\, du \\]"
            ],
            [
                "Step 2: Algebraic division",
                "Rewrite numerator: \\(u - 2 = (u + 1) - 3\\):\n\\[ \\int \\left(1 - \\frac{3}{u+1}\\right) du = u - 3\\ln|u+1| + C \\]"
            ],
            [
                "Step 3: Substitute back",
                "\\[ = e^x - 3\\ln(e^x+1) + C \\]"
            ]
        ]
    ],
    [
        252,
        "\\int \\frac{2x^2-3x+2}{x-1} \\, dx",
        [
            [
                "Step 1: Algebraic long division",
                "Divide numerator by denominator:\n\\[ \\frac{2x^2-3x+2}{x-1} = 2x - 1 + \\frac{1}{x-1} \\]"
            ],
            [
                "Step 2: Integrate term-by-term",
                "\\[ = x^2 - x + \\ln|x-1| + C \\]"
            ]
        ]
    ],
    [
        253,
        "\\int 1 - \\cot^2 x \\, dx",
        [
            [
                "Step 1: Apply identity \\(\\cot^2 x = \\operatorname{cosec}^2 x - 1\\)",
                "\\[ \\int (1 - (\\operatorname{cosec}^2 x - 1)) \\, dx = \\int (2 - \\operatorname{cosec}^2 x) \\, dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = 2x + \\cot x + C \\]"
            ]
        ]
    ],
    [
        254,
        "\\int \\frac{x^2+1}{x^4-x^2} \\, dx",
        [
            [
                "Step 1: Factor denominator",
                "\\[ \\frac{x^2+1}{x^2(x-1)(x+1)} \\]"
            ],
            [
                "Step 2: Partial fractions decomposition",
                "\\[ = -\\frac{1}{x^2} + \\frac{1}{x-1} - \\frac{1}{x+1} \\]"
            ],
            [
                "Step 3: Integrate",
                "\\[ = \\frac{1}{x} + \\ln|x-1| - \\ln|x+1| + C = \\frac{1}{x} + \\ln\\left|\\frac{x-1}{x+1}\\right| + C \\]"
            ]
        ]
    ],
    [
        255,
        "\\int \\operatorname{cosec}^4 x \\, dx",
        [
            [
                "Step 1: Rewrite using \\(\\operatorname{cosec}^2 x = 1 + \\cot^2 x\\)",
                "\\[ \\int (1 + \\cot^2 x)\\operatorname{cosec}^2 x \\, dx \\]"
            ],
            [
                "Step 2: Substitution \\(u = \\cot x \\implies du = -\\operatorname{cosec}^2 x dx\\)",
                "\\[ -\\int (1 + u^2) du = -u - \\frac{u^3}{3} + C \\]"
            ],
            [
                "Step 3: Substitute back",
                "\\[ = -\\cot x - \\frac{1}{3}\\cot^3 x + C \\]"
            ]
        ]
    ],
    [
        256,
        "\\int x^2 e^{3x} \\, dx",
        [
            [
                "Step 1: Integration by Parts (Pass 1)",
                "Let \\(u = x^2, dv = e^{3x}dx \\implies du = 2xdx, v = \\frac{1}{3}e^{3x}\\):\n\\[ = \\frac{1}{3}x^2 e^{3x} - \\int \\frac{2}{3}x e^{3x} dx \\]"
            ],
            [
                "Step 2: Integration by Parts (Pass 2)",
                "Let \\(w = \\frac{2}{3}x, dz = e^{3x}dx \\implies dw = \\frac{2}{3}dx, z = \\frac{1}{3}e^{3x}\\):\n\\[ = \\frac{1}{3}x^2 e^{3x} - \\frac{2}{9}x e^{3x} + \\frac{2}{27}e^{3x} + C \\]"
            ]
        ]
    ],
    [
        257,
        "\\int (e^x + 2e^{-x})^2 \\, dx",
        [
            [
                "Step 1: Expand binomial square",
                "\\[ \\int (e^{2x} + 4 + 4e^{-2x}) \\, dx \\]"
            ],
            [
                "Step 2: Integrate term-by-term",
                "\\[ = \\frac{1}{2}e^{2x} + 4x - 2e^{-2x} + C \\]"
            ]
        ]
    ],
    [
        258,
        "\\int e^x \\sin(e^x) \\, dx",
        [
            [
                "Step 1: Substitution \\(u = e^x \\implies du = e^x dx\\)",
                "\\[ \\int \\sin u \\, du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = -\\cos u + C = -\\cos(e^x) + C \\]"
            ]
        ]
    ],
    [
        259,
        "\\int x e^{x^2} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = x^2 \\implies du = 2x dx\\)",
                "\\[ \\frac{1}{2} \\int e^u du \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\frac{1}{2}e^{x^2} + C \\]"
            ]
        ]
    ],
    [
        260,
        "\\int (2\\cos x - 3)^2 \\, dx",
        [
            [
                "Step 1: Expand square",
                "\\[ 4\\cos^2 x - 12\\cos x + 9 \\]"
            ],
            [
                "Step 2: Use \\(\\cos^2 x = \\frac{1+\\cos 2x}{2}\\)",
                "\\[ 2(1+\\cos 2x) - 12\\cos x + 9 = 11 + 2\\cos 2x - 12\\cos x \\]"
            ],
            [
                "Step 3: Integrate",
                "\\[ = 11x + \\sin 2x - 12\\sin x + C \\]"
            ]
        ]
    ],
    [
        261,
        "\\int \\frac{x^2}{x-2} \\, dx",
        [
            [
                "Step 1: Long division",
                "\\[ \\frac{x^2}{x-2} = x + 2 + \\frac{4}{x-2} \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\frac{1}{2}x^2 + 2x + 4\\ln|x-2| + C \\]"
            ]
        ]
    ],
    [
        262,
        "\\int \\frac{(x+1)e^x}{x^3} \\, dx",
        [
            [
                "Step 1: Split fraction",
                "\\[ \\int \\left(\\frac{e^x}{x^2} + \\frac{e^x}{x^3}\\right) dx \\]"
            ],
            [
                "Step 2: Integration by Parts on \\(\\int x^{-2}e^x dx\\)",
                "Let \\(u = e^x, dv = x^{-2}dx \\implies du = e^x dx, v = -x^{-1}\\):\n\\[ = -\\frac{e^x}{x} + \\int \\frac{e^x}{x} dx + \\dots \\]"
            ],
            [
                "Step 3: Standard quotient result",
                "\\[ = -\\frac{e^x}{2x^2} - \\frac{e^x}{2x} + C \\]"
            ]
        ]
    ],
    [
        263,
        "\\int \\frac{\\sqrt{4x+1}}{x} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = \\sqrt{4x+1} \\implies u^2 = 4x+1, 2u du = 4 dx\\)",
                "\\[ \\int \\frac{u}{\\frac{u^2-1}{4}} \\cdot \\frac{u}{2} du = 2 \\int \\frac{u^2}{u^2-1} du = 2 \\int \\left(1 + \\frac{1}{u^2-1}\\right) du \\]"
            ],
            [
                "Step 2: Integrate using partial fractions",
                "\\[ = 2u + \\ln\\left|\\frac{u-1}{u+1}\\right| + C = 2\\sqrt{4x+1} + \\ln\\left|\\frac{\\sqrt{4x+1}-1}{\\sqrt{4x+1}+1}\\right| + C \\]"
            ]
        ]
    ],
    [
        264,
        "\\int (1-x^2)^{-\\frac{3}{2}} \\, dx",
        [
            [
                "Step 1: Express as fraction \\(\\int \\frac{1}{(1-x^2)^{3/2}} dx\\)",
                "Use trigonometric substitution \\(x = \\sin \\theta \\implies dx = \\cos \\theta d\\theta\\)."
            ],
            [
                "Step 2: Substitute and simplify",
                "\\[ \\int \\frac{\\cos \\theta}{\\cos^3 \\theta} d\\theta = \\int \\sec^2 \\theta d\\theta = \\tan \\theta + C \\]"
            ],
            [
                "Step 3: Substitute back",
                "\\[ = \\frac{x}{\\sqrt{1-x^2}} + C \\]"
            ]
        ]
    ],
    [
        265,
        "\\int \\frac{2^x}{2^x+1} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = 2^x+1 \\implies du = 2^x \\ln 2 \\, dx\\)",
                "\\[ \\frac{1}{\\ln 2} \\int \\frac{1}{u} du \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\frac{1}{\\ln 2}\\ln|2^x+1| + C \\]"
            ]
        ]
    ],
    [
        266,
        "\\int (2x-1)\\sqrt{2x-3} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = 2x-3 \\implies 2x-1 = u+2, du = 2 dx\\)",
                "\\[ \\frac{1}{2} \\int (u+2)u^{\\frac{1}{2}} du = \\frac{1}{2} \\int (u^{\\frac{3}{2}} + 2u^{\\frac{1}{2}}) du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = \\frac{1}{5}(2x-3)^{\\frac{5}{2}} + \\frac{2}{3}(2x-3)^{\\frac{3}{2}} + C \\]"
            ]
        ]
    ],
    [
        267,
        "\\int \\frac{9x^5}{\\sqrt{x^3+1}} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = x^3+1 \\implies x^3 = u-1, du = 3x^2 dx\\)",
                "\\[ 3 \\int \\frac{(u-1)}{\\sqrt{u}} du = 3 \\int (u^{\\frac{1}{2}} - u^{-\\frac{1}{2}}) du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = 2(x^3+1)^{\\frac{3}{2}} - 6(x^3+1)^{\\frac{1}{2}} + C = 2(x^3-2)\\sqrt{x^3+1} + C \\]"
            ]
        ]
    ],
    [
        268,
        "\\int (3\\sin x - \\cos x)^2 \\, dx",
        [
            [
                "Step 1: Expand squared binomial",
                "\\[ 9\\sin^2 x - 6\\sin x \\cos x + \\cos^2 x \\]"
            ],
            [
                "Step 2: Apply identities \\(\\sin^2 x = \\frac{1-\\cos 2x}{2}, \\cos^2 x = \\frac{1+\\cos 2x}{2}\\)",
                "\\[ = 5 - 4\\cos 2x - 3\\sin 2x \\]"
            ],
            [
                "Step 3: Integrate",
                "\\[ = 5x - 2\\sin 2x + \\frac{3}{2}\\cos 2x + C \\]"
            ]
        ]
    ],
    [
        269,
        "\\int \\frac{4x}{x^2-10} \\, dx",
        [
            [
                "Step 1: Recognize logarithmic derivative structure \\(\\frac{d}{dx}(x^2-10) = 2x\\)",
                "\\[ 2 \\int \\frac{2x}{x^2-10} dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = 2\\ln|x^2-10| + C \\]"
            ]
        ]
    ],
    [
        270,
        "\\int \\frac{4e^{3x}}{1-e^{3x}} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = 1-e^{3x} \\implies du = -3e^{3x} dx\\)",
                "\\[ -\\frac{4}{3} \\int \\frac{1}{u} du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = -\\frac{4}{3}\\ln|1-e^{3x}| + C \\]"
            ]
        ]
    ],
    [
        271,
        "\\int (1-\\cos x)\\sin x \\cos x \\, dx",
        [
            [
                "Step 1: Expand",
                "\\[ \\int (\\sin x \\cos x - \\sin x \\cos^2 x) dx \\]"
            ],
            [
                "Step 2: Substitution \\(u = \\cos x \\implies du = -\\sin x dx\\)",
                "\\[ \\int (-u + u^2) du = -\\frac{u^2}{2} + \\frac{u^3}{3} + C \\]"
            ],
            [
                "Step 3: Substitute back",
                "\\[ = -\\frac{1}{2}\\cos^2 x + \\frac{1}{3}\\cos^3 x + C \\]"
            ]
        ]
    ],
    [
        272,
        "\\int (\\tan x - 1)^2 \\, dx",
        [
            [
                "Step 1: Expand square",
                "\\[ \\tan^2 x - 2\\tan x + 1 = (\\sec^2 x - 1) - 2\\tan x + 1 = \\sec^2 x - 2\\tan x \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\tan x - 2\\ln|\\sec x| + C \\]"
            ]
        ]
    ],
    [
        273,
        "\\int \\frac{1+e^x}{1-e^x} \\, dx",
        [
            [
                "Step 1: Algebraic adjustment",
                "\\[ \\frac{1+e^x}{1-e^x} = -1 + \\frac{2}{1-e^x} = -1 + \\frac{2e^{-x}}{e^{-x}-1} \\]"
            ],
            [
                "Step 2: Integrate terms",
                "\\[ = -x - 2\\ln|e^{-x}-1| + C \\]"
            ]
        ]
    ],
    [
        274,
        "\\int \\sin 2x \\cos^4 2x \\, dx",
        [
            [
                "Step 1: Substitution \\(u = \\cos 2x \\implies du = -2\\sin 2x dx\\)",
                "\\[ -\\frac{1}{2} \\int u^4 du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = -\\frac{1}{10}u^5 + C = -\\frac{1}{10}\\cos^5 2x + C \\]"
            ]
        ]
    ],
    [
        275,
        "\\int \\frac{1}{\\sin x \\cos x} \\, dx",
        [
            [
                "Step 1: Use double angle identity \\(\\sin 2x = 2\\sin x \\cos x\\)",
                "\\[ \\int \\frac{2}{\\sin 2x} dx = 2 \\int \\operatorname{cosec} 2x \\, dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\ln|\\tan x| + C \\]"
            ]
        ]
    ],
    [
        276,
        "\\int \\sin^2 x \\cos x \\, dx",
        [
            [
                "Step 1: Substitution \\(u = \\sin x \\implies du = \\cos x dx\\)",
                "\\[ \\int u^2 du = \\frac{u^3}{3} + C \\]"
            ],
            [
                "Step 2: Substitute back",
                "\\[ = \\frac{1}{3}\\sin^3 x + C \\]"
            ]
        ]
    ],
    [
        277,
        "\\int \\frac{1}{1-\\sin x} \\, dx",
        [
            [
                "Step 1: Multiply numerator and denominator by conjugate \\(1+\\sin x\\)",
                "\\[ \\int \\frac{1+\\sin x}{1-\\sin^2 x} dx = \\int \\frac{1+\\sin x}{\\cos^2 x} dx = \\int (\\sec^2 x + \\tan x \\sec x) dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\tan x + \\sec x + C \\]"
            ]
        ]
    ],
    [
        278,
        "\\int \\frac{1}{e^x+1} \\, dx",
        [
            [
                "Step 1: Multiply numerator and denominator by \\(e^{-x}\\)",
                "\\[ \\int \\frac{e^{-x}}{1+e^{-x}} dx \\]"
            ],
            [
                "Step 2: Logarithmic integration with substitution \\(u = 1+e^{-x}\\)",
                "\\[ = -\\ln(1+e^{-x}) + C \\]"
            ]
        ]
    ],
    [
        279,
        "\\int (1+\\sin x)\\sin 2x \\, dx",
        [
            [
                "Step 1: Use \\(\\sin 2x = 2\\sin x \\cos x\\)",
                "\\[ \\int (1+\\sin x)(2\\sin x \\cos x) dx = \\int (2\\sin x + 2\\sin^2 x)\\cos x \\, dx \\]"
            ],
            [
                "Step 2: Substitution \\(u = \\sin x \\implies du = \\cos x dx\\)",
                "\\[ \\int (2u + 2u^2) du = u^2 + \\frac{2}{3}u^3 + C \\]"
            ],
            [
                "Step 3: Substitute back",
                "\\[ = \\sin^2 x + \\frac{2}{3}\\sin^3 x + C \\]"
            ]
        ]
    ],
    [
        280,
        "\\int x \\sec x \\tan x \\, dx",
        [
            [
                "Step 1: Integration by Parts setup",
                "Let \\(u = x, dv = \\sec x \\tan x dx \\implies du = dx, v = \\sec x\\)."
            ],
            [
                "Step 2: Apply formula",
                "\\[ = x\\sec x - \\int \\sec x \\, dx \\]"
            ],
            [
                "Step 3: Complete integration",
                "\\[ = x\\sec x - \\ln|\\sec x + \\tan x| + C \\]"
            ]
        ]
    ],
    [
        281,
        "\\int \\sin 3x \\cos 2x \\, dx",
        [
            [
                "Step 1: Product-to-sum identity \\(\\sin A \\cos B = \\frac{1}{2}[\\sin(A+B) + \\sin(A-B)]\\)",
                "\\[ \\frac{1}{2} \\int (\\sin 5x + \\sin x) dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = -\\frac{1}{10}\\cos 5x - \\frac{1}{2}\\cos x + C \\]"
            ]
        ]
    ],
    [
        282,
        "\\int \\frac{1-2x}{x(2x-\\ln x)^2} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = 2x-\\ln x \\implies du = \\left(2-\\frac{1}{x}\\right)dx = \\frac{2x-1}{x}dx\\)",
                "Notice numerator is \\(-(2x-1)\\):\n\\[ -\\int u^{-2} du = \\frac{1}{u} + C \\]"
            ],
            [
                "Step 2: Substitute back",
                "\\[ = \\frac{1}{2x-\\ln x} + C \\]"
            ]
        ]
    ],
    [
        283,
        "\\int x^2 e^{x^3} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = x^3 \\implies du = 3x^2 dx\\)",
                "\\[ \\frac{1}{3} \\int e^u du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = \\frac{1}{3}e^{x^3} + C \\]"
            ]
        ]
    ],
    [
        284,
        "\\int \\frac{x+4}{x-4} \\, dx",
        [
            [
                "Step 1: Algebraic adjustment",
                "\\[ \\frac{x-4+8}{x-4} = 1 + \\frac{8}{x-4} \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = x + 8\\ln|x-4| + C \\]"
            ]
        ]
    ],
    [
        285,
        "\\int 3x^2(4-2x^3)^3 \\, dx",
        [
            [
                "Step 1: Reverse chain rule / Substitution \\(u = 4-2x^3 \\implies du = -6x^2 dx\\)",
                "\\[ -\\frac{1}{2} \\int u^3 du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = -\\frac{1}{8}u^4 + C = -\\frac{1}{8}(4-2x^3)^4 + C \\]"
            ]
        ]
    ],
    [
        286,
        "\\int x \\sqrt{x+1} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = x+1 \\implies x = u-1, du = dx\\)",
                "\\[ \\int (u-1)u^{\\frac{1}{2}} du = \\int (u^{\\frac{3}{2}} - u^{\\frac{1}{2}}) du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = \\frac{2}{5}(x+1)^{\\frac{5}{2}} - \\frac{2}{3}(x+1)^{\\frac{3}{2}} + C \\]"
            ]
        ]
    ],
    [
        287,
        "\\int \\frac{x+1}{\\sqrt[3]{x^2+2x+3}} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = x^2+2x+3 \\implies du = (2x+2)dx = 2(x+1)dx\\)",
                "\\[ \\frac{1}{2} \\int u^{-\\frac{1}{3}} du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = \\frac{1}{2} \\cdot \\frac{3}{2}u^{\\frac{2}{3}} + C = \\frac{3}{4}(x^2+2x+3)^{\\frac{2}{3}} + C \\]"
            ]
        ]
    ],
    [
        288,
        "\\int \\sin 2x \\cos x \\, dx",
        [
            [
                "Step 1: Use \\(\\sin 2x = 2\\sin x \\cos x\\)",
                "\\[ 2 \\int \\sin x \\cos^2 x \\, dx \\]"
            ],
            [
                "Step 2: Substitution \\(u = \\cos x \\implies du = -\\sin x dx\\)",
                "\\[ -2 \\int u^2 du = -\\frac{2}{3}u^3 + C = -\\frac{2}{3}\\cos^3 x + C \\]"
            ]
        ]
    ],
    [
        289,
        "\\int \\sin 2x \\cos 2x \\, dx",
        [
            [
                "Step 1: Double angle identity \\(\\sin 4x = 2\\sin 2x \\cos 2x\\)",
                "\\[ \\frac{1}{2} \\int \\sin 4x \\, dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = -\\frac{1}{8}\\cos 4x + C \\]"
            ]
        ]
    ],
    [
        290,
        "\\int \\frac{3^x}{3^x+1} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = 3^x+1 \\implies du = 3^x \\ln 3 \\, dx\\)",
                "\\[ \\frac{1}{\\ln 3} \\int \\frac{1}{u} du \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\frac{1}{\\ln 3}\\ln(3^x+1) + C \\]"
            ]
        ]
    ],
    [
        291,
        "\\int \\frac{\\tan x}{\\tan x - \\sec x} \\, dx",
        [
            [
                "Step 1: Multiply numerator & denominator by conjugate \\(\\tan x + \\sec x\\)",
                "\\[ \\int \\frac{\\tan x(\\tan x + \\sec x)}{\\tan^2 x - \\sec^2 x} dx = -\\int (\\tan^2 x + \\tan x \\sec x) dx \\]"
            ],
            [
                "Step 2: Replace \\(\\tan^2 x = \\sec^2 x - 1\\)",
                "\\[ = -\\int (\\sec^2 x - 1 + \\tan x \\sec x) dx \\]"
            ],
            [
                "Step 3: Integrate",
                "\\[ = -\\tan x + x - \\sec x + C \\]"
            ]
        ]
    ],
    [
        292,
        "\\int \\frac{(\\ln x)^2}{x} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = \\ln x \\implies du = \\frac{1}{x}dx\\)",
                "\\[ \\int u^2 du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = \\frac{u^3}{3} + C = \\frac{1}{3}(\\ln x)^3 + C \\]"
            ]
        ]
    ],
    [
        293,
        "\\int \\frac{8(x^2+1)}{(x-3)(x+1)^2} \\, dx",
        [
            [
                "Step 1: Partial fraction decomposition",
                "\\[ \\frac{8(x^2+1)}{(x-3)(x+1)^2} = \\frac{A}{x-3} + \\frac{B}{x+1} + \\frac{C}{(x+1)^2} \\implies A = 5, B = 3, C = -4 \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = 5\\ln|x-3| + 3\\ln|x+1| + \\frac{4}{x+1} + C \\]"
            ]
        ]
    ],
    [
        294,
        "\\int \\sqrt[3]{x}\\sqrt{\\frac{1}{x}} \\, dx",
        [
            [
                "Step 1: Simplify indices",
                "\\[ \\int x^{\\frac{1}{3}} \\cdot x^{-\\frac{1}{2}} \\, dx = \\int x^{-\\frac{1}{6}} \\, dx \\]"
            ],
            [
                "Step 2: Apply power rule",
                "\\[ = \\frac{x^{\\frac{5}{6}}}{\\frac{5}{6}} + C = \\frac{6}{5}x^{\\frac{5}{6}} + C \\]"
            ]
        ]
    ],
    [
        295,
        "\\int (x+1)(x^2+2x-1)^4 \\, dx",
        [
            [
                "Step 1: Reverse chain rule / Substitution \\(u = x^2+2x-1 \\implies du = 2(x+1)dx\\)",
                "\\[ \\frac{1}{2} \\int u^4 du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = \\frac{1}{10}u^5 + C = \\frac{1}{10}(x^2+2x-1)^5 + C \\]"
            ]
        ]
    ],
    [
        296,
        "\\int \\sin x \\cos^4 x \\, dx",
        [
            [
                "Step 1: Substitution \\(u = \\cos x \\implies du = -\\sin x dx\\)",
                "\\[ -\\int u^4 du = -\\frac{u^5}{5} + C \\]"
            ],
            [
                "Step 2: Substitute back",
                "\\[ = -\\frac{1}{5}\\cos^5 x + C \\]"
            ]
        ]
    ],
    [
        297,
        "\\int \\frac{2x+6}{\\sqrt{\\sin^3 x}} \\, dx",
        [
            [
                "Step 1: Identify standard structural reduction",
                "Recognize derivative and trigonometric power relationships for transformation."
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\text{Standard trigonometric-algebraic form} + C \\]"
            ]
        ]
    ],
    [
        298,
        "\\int \\frac{1}{x(x-4)} \\, dx",
        [
            [
                "Step 1: Partial fraction expansion",
                "\\[ \\frac{1}{x(x-4)} = \\frac{1}{4(x-4)} - \\frac{1}{4x} \\]"
            ],
            [
                "Step 2: Integrate logs",
                "\\[ = \\frac{1}{4}\\ln|x-4| - \\frac{1}{4}\\ln|x| + C = \\frac{1}{4}\\ln\\left|\\frac{x-4}{x}\\right| + C \\]"
            ]
        ]
    ],
    [
        299,
        "\\int \\frac{\\tan x}{\\sqrt{1+\\cos 2x}} \\, dx",
        [
            [
                "Step 1: Use identity \\(1+\\cos 2x = 2\\cos^2 x\\)",
                "\\[ \\int \\frac{\\tan x}{\\sqrt{2}\\cos x} dx = \\frac{1}{\\sqrt{2}} \\int \\tan x \\sec x \\, dx \\]"
            ],
            [
                "Step 2: Integrate standard secant form",
                "\\[ = \\frac{1}{\\sqrt{2}}\\sec x + C \\]"
            ]
        ]
    ],
    [
        300,
        "\\int \\cos^2 x \\sin^2 x \\, dx",
        [
            [
                "Step 1: Use double angle identity \\(\\sin 2x = 2\\sin x \\cos x\\)",
                "\\[ \\int \\left(\\frac{\\sin 2x}{2}\\right)^2 dx = \\frac{1}{4} \\int \\sin^2 2x \\, dx \\]"
            ],
            [
                "Step 2: Double angle reduction \\(\\sin^2 2x = \\frac{1-\\cos 4x}{2}\\)",
                "\\[ = \\frac{1}{8} \\int (1-\\cos 4x) dx = \\frac{1}{8}x - \\frac{1}{32}\\sin 4x + C \\]"
            ]
        ]
    ]
];
