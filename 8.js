export default [
    [
        351,
        "\\int \\frac{\\sec x \\tan x}{1+\\sec x} \\, dx",
        [
            [
                "Step 1: Recognize logarithmic derivative structure",
                "Note that \\(\\frac{d}{dx}(1+\\sec x) = \\sec x \\tan x\\)."
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\ln|1+\\sec x| + C \\]"
            ]
        ]
    ],
    [
        352,
        "\\int \\frac{e^{2x}}{\\sqrt{e^x+1}} \\, dx",
        [
            [
                "Step 1: Substitution",
                "Let \\(u = e^x+1 \\implies e^x = u-1\\) and \\(du = e^x dx\\):\n\\[ \\int \\frac{u-1}{\\sqrt{u}} \\, du = \\int \\left(u^{\\frac{1}{2}} - u^{-\\frac{1}{2}}\\right) du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = \\frac{2}{3}u^{\\frac{3}{2}} - 2u^{\\frac{1}{2}} + C = \\frac{2}{3}(e^x-2)\\sqrt{e^x+1} + C \\]"
            ]
        ]
    ],
    [
        353,
        "\\int x^3 \\sqrt{x^2+1} \\, dx",
        [
            [
                "Step 1: Substitution",
                "Let \\(u = x^2+1 \\implies x^2 = u-1\\) and \\(du = 2x \\, dx\\):\n\\[ \\frac{1}{2} \\int (u-1)u^{\\frac{1}{2}} \\, du = \\frac{1}{2} \\int \\left(u^{\\frac{3}{2}} - u^{\\frac{1}{2}}\\right) du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = \\frac{1}{5}(x^2+1)^{\\frac{5}{2}} - \\frac{1}{3}(x^2+1)^{\\frac{3}{2}} + C \\]"
            ]
        ]
    ],
    [
        354,
        "\\int \\frac{1+\\cos x}{\\sin x} \\, dx",
        [
            [
                "Step 1: Split fraction into standard forms",
                "\\[ \\int (\\operatorname{cosec} x + \\cot x) \\, dx \\]"
            ],
            [
                "Step 2: Integrate terms",
                "\\[ = -\\ln|\\operatorname{cosec} x + \\cot x| + \\ln|\\sin x| + C = \\ln|1-\\cos x| + C \\]"
            ]
        ]
    ],
    [
        355,
        "\\int \\frac{x^3+1}{x+1} \\, dx",
        [
            [
                "Step 1: Factor sum of cubes numerator \\(x^3+1 = (x+1)(x^2-x+1)\\)",
                "\\[ \\int \\frac{(x+1)(x^2-x+1)}{x+1} \\, dx = \\int (x^2 - x + 1) \\, dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\frac{1}{3}x^3 - \\frac{1}{2}x^2 + x + C \\]"
            ]
        ]
    ],
    [
        356,
        "\\int \\frac{\\tan x}{\\cos^2 x} \\, dx",
        [
            [
                "Step 1: Rewrite as \\(\\tan x \\sec^2 x\\)",
                "\\[ \\int \\tan x \\sec^2 x \\, dx \\]"
            ],
            [
                "Step 2: Substitution \\(u = \\tan x \\implies du = \\sec^2 x dx\\)",
                "\\[ = \\frac{1}{2}\\tan^2 x + C \\]"
            ]
        ]
    ],
    [
        357,
        "\\int \\frac{e^{2x}-1}{e^{2x}+1} \\, dx",
        [
            [
                "Step 1: Multiply numerator and denominator by \\(e^{-x}\\)",
                "\\[ \\int \\frac{e^x - e^{-x}}{e^x + e^{-x}} \\, dx \\]"
            ],
            [
                "Step 2: Recognize logarithmic derivative structure",
                "Note \\(\\frac{d}{dx}(e^x + e^{-x}) = e^x - e^{-x}\\):\n\\[ = \\ln(e^x + e^{-x}) + C \\]"
            ]
        ]
    ],
    [
        358,
        "\\int \\frac{x}{\\sqrt{2x+1}} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = 2x+1 \\implies x = \\frac{u-1}{2}, du = 2 dx\\)",
                "\\[ \\int \\frac{\\frac{u-1}{2}}{\\sqrt{u}} \\cdot \\frac{du}{2} = \\frac{1}{4} \\int \\left(u^{\\frac{1}{2}} - u^{-\\frac{1}{2}}\\right) du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = \\frac{1}{6}(2x+1)^{\\frac{3}{2}} - \\frac{1}{2}(2x+1)^{\\frac{1}{2}} + C = \\frac{1}{6}(x-1)\\sqrt{2x+1} + C \\]"
            ]
        ]
    ],
    [
        359,
        "\\int \\frac{\\cos x}{1+\\sin^2 x} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = \\sin x \\implies du = \\cos x dx\\)",
                "\\[ \\int \\frac{1}{1+u^2} \\, du \\]"
            ],
            [
                "Step 2: Integrate standard inverse tangent form",
                "\\[ = \\arctan u + C = \\arctan(\\sin x) + C \\]"
            ]
        ]
    ],
    [
        360,
        "\\int \\frac{1}{x\\sqrt{x^2-1}} \\, dx",
        [
            [
                "Step 1: Standard secant substitution / inverse trig rule",
                "Recall \\(\\int \\frac{1}{x\\sqrt{x^2-1}} dx = \\operatorname{arcsec}|x| + C = \\arccos\\left(\\frac{1}{x}\\right) + C\\)."
            ],
            [
                "Step 2: Final form",
                "\\[ = \\operatorname{arcsec} x + C \\]"
            ]
        ]
    ],
    [
        361,
        "\\int \\frac{\\ln(\\ln x)}{x} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = \\ln x \\implies du = \\frac{1}{x}dx\\)",
                "\\[ \\int \\ln u \\, du \\]"
            ],
            [
                "Step 2: Integration by Parts rule \\(\\int \\ln u \\, du = u\\ln u - u + C\\)",
                "\\[ = \\ln x \\ln(\\ln x) - \\ln x + C \\]"
            ]
        ]
    ],
    [
        362,
        "\\int x^3 e^{-x^2} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = x^2 \\implies du = 2x dx\\)",
                "\\[ \\frac{1}{2} \\int u e^{-u} \\, du \\]"
            ],
            [
                "Step 2: Integration by Parts on \\(\\int u e^{-u} du\\)",
                "\\[ = \\frac{1}{2}(-u e^{-u} - e^{-u}) + C = -\\frac{1}{2}e^{-x^2}(x^2+1) + C \\]"
            ]
        ]
    ],
    [
        363,
        "\\int \\frac{1}{x^2+4x+5} \\, dx",
        [
            [
                "Step 1: Complete the square in the denominator",
                "\\[ x^2+4x+5 = (x+2)^2 + 1 \\]"
            ],
            [
                "Step 2: Standard inverse tangent integral",
                "\\[ \\int \\frac{1}{(x+2)^2+1} \\, dx = \\arctan(x+2) + C \\]"
            ]
        ]
    ],
    [
        364,
        "\\int \\frac{1}{\\sqrt{4x-x^2}} \\, dx",
        [
            [
                "Step 1: Complete the square under square root",
                "\\[ 4x-x^2 = 4 - (x-2)^2 \\]"
            ],
            [
                "Step 2: Standard inverse sine integral form \\(\\int \\frac{1}{\\sqrt{a^2-u^2}} du\\)",
                "\\[ \\int \\frac{1}{\\sqrt{4-(x-2)^2}} \\, dx = \\arcsin\\left(\\frac{x-2}{2}\\right) + C \\]"
            ]
        ]
    ],
    [
        365,
        "\\int \\frac{x^2}{\\sqrt{1-x^2}} \\, dx",
        [
            [
                "Step 1: Trigonometric substitution \\(x = \\sin \\theta \\implies dx = \\cos \\theta d\\theta\\)",
                "\\[ \\int \\frac{\\sin^2 \\theta \\cos \\theta}{\\cos \\theta} d\\theta = \\int \\sin^2 \\theta \\, d\\theta = \\frac{1}{2} \\int (1-\\cos 2\\theta) d\\theta \\]"
            ],
            [
                "Step 2: Evaluate and substitute back",
                "\\[ = \\frac{1}{2}\\theta - \\frac{1}{4}\\sin 2\\theta + C = \\frac{1}{2}\\arcsin x - \\frac{1}{2}x\\sqrt{1-x^2} + C \\]"
            ]
        ]
    ],
    [
        366,
        "\\int e^x \\sec(e^x) \\tan(e^x) \\, dx",
        [
            [
                "Step 1: Substitution \\(u = e^x \\implies du = e^x dx\\)",
                "\\[ \\int \\sec u \\tan u \\, du \\]"
            ],
            [
                "Step 2: Integrate standard secant-tangent form",
                "\\[ = \\sec u + C = \\sec(e^x) + C \\]"
            ]
        ]
    ],
    [
        367,
        "\\int \\frac{1}{x^2+2x+2} \\, dx",
        [
            [
                "Step 1: Complete the square in denominator",
                "\\[ x^2+2x+2 = (x+1)^2 + 1 \\]"
            ],
            [
                "Step 2: Standard arctan integration form",
                "\\[ \\int \\frac{1}{(x+1)^2+1} \\, dx = \\arctan(x+1) + C \\]"
            ]
        ]
    ]
];
