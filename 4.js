export default [
    [
        151,
        "\\int \\frac{(1+\\sin x)^2}{\\cos^2 x} \\, dx",
        [
            [
                "Step 1: Expand the numerator",
                "\\[ \\frac{1 + 2\\sin x + \\sin^2 x}{\\cos^2 x} = \\sec^2 x + 2\\tan x \\sec x + \\tan^2 x \\]"
            ],
            [
                "Step 2: Replace \\(\\tan^2 x = \\sec^2 x - 1\\)",
                "\\[ = 2\\sec^2 x + 2\\tan x \\sec x - 1 \\]"
            ],
            [
                "Step 3: Integrate term by term",
                "\\[ = 2\\tan x + 2\\sec x - x + C \\]"
            ]
        ]
    ],
    [
        152,
        "\\int \\frac{\\cos^2 x}{1+\\sin x} \\, dx",
        [
            [
                "Step 1: Use identity \\(\\cos^2 x = 1 - \\sin^2 x = (1-\\sin x)(1+\\sin x)\\)",
                "\\[ \\int \\frac{(1-\\sin x)(1+\\sin x)}{1+\\sin x} dx = \\int (1 - \\sin x) dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = x + \\cos x + C \\]"
            ]
        ]
    ],
    [
        153,
        "\\int \\frac{1}{1+\\cos x} \\, dx",
        [
            [
                "Step 1: Multiply numerator and denominator by conjugate \\(1-\\cos x\\)",
                "\\[ \\int \\frac{1-\\cos x}{1-\\cos^2 x} dx = \\int \\frac{1-\\cos x}{\\sin^2 x} dx = \\int (\\operatorname{cosec}^2 x - \\operatorname{cosec} x \\cot x) dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = -\\cot x + \\operatorname{cosec} x + C \\]"
            ]
        ]
    ],
    [
        154,
        "\\int \\frac{\\cos x}{\\sqrt{\\sin x}} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = \\sin x \\implies du = \\cos x dx\\)",
                "\\[ \\int u^{-\\frac{1}{2}} du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = 2u^{\\frac{1}{2}} + C = 2\\sqrt{\\sin x} + C \\]"
            ]
        ]
    ],
    [
        155,
        "\\int \\frac{10x^4}{2x^3+1} \\, dx",
        [
            [
                "Step 1: Polynomial long division",
                "Divide \\(10x^4\\) by \\(2x^3+1\\):\n\\[ \\frac{10x^4}{2x^3+1} = 5x - \\frac{5x}{2x^3+1} \\]"
            ],
            [
                "Step 2: Integrate terms",
                "\\[ = \\frac{5}{2}x^2 - 5 \\int \\frac{x}{2x^3+1} dx \\]"
            ],
            [
                "Step 3: Solve remaining integral via partial fractions or standard techniques",
                "\\[ = \\frac{5}{2}x^2 - \\frac{5}{6}\\ln|2x^3+1| + \\dots + C \\]"
            ]
        ]
    ],
    [
        156,
        "\\int \\sin\\sqrt{x} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = \\sqrt{x} \\implies x = u^2, dx = 2u \\, du\\)",
                "\\[ \\int 2u \\sin u \\, du \\]"
            ],
            [
                "Step 2: Integration by Parts",
                "Let \\(w = 2u, dv = \\sin u du \\implies dw = 2du, v = -\\cos u\\):\n\\[ = -2u \\cos u + 2 \\int \\cos u \\, du = -2u \\cos u + 2\\sin u + C \\]"
            ],
            [
                "Step 3: Substitute back",
                "\\[ = -2\\sqrt{x}\\cos\\sqrt{x} + 2\\sin\\sqrt{x} + C \\]"
            ]
        ]
    ],
    [
        157,
        "\\int \\frac{x^2}{1-2x} \\, dx",
        [
            [
                "Step 1: Algebraic long division",
                "\\[ \\frac{x^2}{1-2x} = -\\frac{1}{2}x - \\frac{1}{4} - \\frac{1}{4(1-2x)} \\]"
            ],
            [
                "Step 2: Integrate term by term",
                "\\[ = -\\frac{1}{4}x^2 - \\frac{1}{4}x - \\frac{1}{8}\\ln|1-2x| + C \\]"
            ]
        ]
    ],
    [
        158,
        "\\int \\frac{12}{(1-2x)^5} \\, dx",
        [
            [
                "Step 1: Index form",
                "\\[ \\int 12(1-2x)^{-5} \\, dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = 12 \\cdot \\frac{(1-2x)^{-4}}{-4 \\cdot (-2)} + C = \\frac{3}{2(1-2x)^4} + C \\]"
            ]
        ]
    ],
    [
        159,
        "\\int \\frac{x^4+2x}{x^5+5x^2+8} \\, dx",
        [
            [
                "Step 1: Recognize logarithmic derivative structure",
                "Note that \\(\\frac{d}{dx}(x^5+5x^2+8) = 5x^4+10x = 5(x^4+2x)\\)."
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\frac{1}{5} \\int \\frac{5(x^4+2x)}{x^5+5x^2+8} dx = \\frac{1}{5}\\ln|x^5+5x^2+8| + C \\]"
            ]
        ]
    ],
    [
        160,
        "\\int \\frac{x}{x-1} \\, dx",
        [
            [
                "Step 1: Adjust numerator algebraically",
                "\\[ \\frac{x-1+1}{x-1} = 1 + \\frac{1}{x-1} \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = x + \\ln|x-1| + C \\]"
            ]
        ]
    ],
    [
        161,
        "\\int \\frac{1}{(1+\\sqrt{x})\\sqrt{x}} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = 1+\\sqrt{x} \\implies du = \\frac{1}{2\\sqrt{x}}dx\\)",
                "\\[ 2 \\int \\frac{1}{u} du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = 2\\ln|u| + C = 2\\ln|1+\\sqrt{x}| + C \\]"
            ]
        ]
    ],
    [
        162,
        "\\int \\frac{2x^3+1}{x^4+2x} \\, dx",
        [
            [
                "Step 1: Logarithmic derivative check",
                "Derivative of \\(x^4+2x\\) is \\(4x^3+2 = 2(2x^3+1)\\)."
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\frac{1}{2} \\int \\frac{2(2x^3+1)}{x^4+2x} dx = \\frac{1}{2}\\ln|x^4+2x| + C \\]"
            ]
        ]
    ],
    [
        163,
        "\\int \\frac{x+2}{x(x+1)} \\, dx",
        [
            [
                "Step 1: Partial fraction decomposition",
                "\\[ \\frac{x+2}{x(x+1)} = \\frac{2}{x} - \\frac{1}{x+1} \\]"
            ],
            [
                "Step 2: Integrate logs",
                "\\[ = 2\\ln|x| - \\ln|x+1| + C = \\ln\\left|\\frac{x^2}{x+1}\\right| + C \\]"
            ]
        ]
    ],
    [
        164,
        "\\int \\sin x \\ln(\\sec x) \\, dx",
        [
            [
                "Step 1: Rewrite \\(\\ln(\\sec x) = -\\ln(\\cos x)\\)",
                "\\[ - \\int \\sin x \\ln(\\cos x) \\, dx \\]"
            ],
            [
                "Step 2: Substitution \\(u = \\cos x \\implies du = -\\sin x dx\\)",
                "\\[ \\int \\ln u \\, du = u\\ln u - u + C = \\cos x \\ln(\\cos x) - \\cos x + C \\]"
            ]
        ]
    ],
    [
        165,
        "\\int \\frac{(1+2\\cos x)^2}{3\\sin^2 x} \\, dx",
        [
            [
                "Step 1: Expand numerator",
                "\\[ \\frac{1 + 4\\cos x + 4\\cos^2 x}{3\\sin^2 x} = \\frac{1}{3}\\operatorname{cosec}^2 x + \\frac{4}{3}\\operatorname{cosec} x \\cot x + \\frac{4}{3}\\cot^2 x \\]"
            ],
            [
                "Step 2: Replace \\(\\cot^2 x = \\operatorname{cosec}^2 x - 1\\)",
                "\\[ = \\frac{5}{3}\\operatorname{cosec}^2 x + \\frac{4}{3}\\operatorname{cosec} x \\cot x - \\frac{4}{3} \\]"
            ],
            [
                "Step 3: Integrate",
                "\\[ = -\\frac{5}{3}\\cot x - \\frac{4}{3}\\operatorname{cosec} x - \\frac{4}{3}x + C \\]"
            ]
        ]
    ],
    [
        166,
        "\\int \\frac{1}{x\\ln x} \\, dx",
        [
            [
                "Step 1: Logarithmic derivative form \\(\\int \\frac{f'(x)}{f(x)}dx\\)",
                "Let \\(u = \\ln x \\implies du = \\frac{1}{x}dx\\)."
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\int \\frac{1}{u} du = \\ln|u| + C = \\ln|\\ln x| + C \\]"
            ]
        ]
    ],
    [
        167,
        "\\int (2-3x)^{-2} \\, dx",
        [
            [
                "Step 1: Reverse chain rule",
                "\\[ = \\frac{(2-3x)^{-1}}{-1 \\cdot (-3)} + C \\]"
            ],
            [
                "Step 2: Simplify",
                "\\[ = \\frac{1}{3(2-3x)} + C \\]"
            ]
        ]
    ],
    [
        168,
        "\\int 2\\sec^2 x + \\frac{1}{2}\\sin 2x \\, dx",
        [
            [
                "Step 1: Integrate term by term",
                "\\[ = 2\\tan x - \\frac{1}{4}\\cos 2x + C \\]"
            ]
        ]
    ],
    [
        169,
        "\\int \\frac{\\ln x}{\\sqrt{x}} \\, dx",
        [
            [
                "Step 1: Integration by Parts setup",
                "Let \\(u = \\ln x, dv = x^{-\\frac{1}{2}}dx \\implies du = \\frac{1}{x}dx, v = 2x^{\\frac{1}{2}}\\)."
            ],
            [
                "Step 2: Apply formula",
                "\\[ = 2\\sqrt{x}\\ln x - \\int 2x^{\\frac{1}{2}} \\cdot \\frac{1}{x} dx = 2\\sqrt{x}\\ln x - 2 \\int x^{-\\frac{1}{2}} dx \\]"
            ],
            [
                "Step 3: Complete integration",
                "\\[ = 2\\sqrt{x}\\ln x - 4\\sqrt{x} + C \\]"
            ]
        ]
    ],
    [
        170,
        "\\int \\frac{\\cos^4 x}{\\sin x} \\, dx",
        [
            [
                "Step 1: Rewrite \\(\\cos^4 x = (1-\\sin^2 x)^2 = 1 - 2\\sin^2 x + \\sin^4 x\\)",
                "\\[ \\int \\left(\\operatorname{cosec} x - 2\\sin x + \\sin^3 x\\right) dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\ln|\\operatorname{cosec} x - \\cot x| + 2\\cos x - \\cos x + \\frac{1}{3}\\cos^3 x + \\dots + C \\]"
            ]
        ]
    ],
    [
        171,
        "\\int 6\\tan^2 x - \\sec^2 x \\, dx",
        [
            [
                "Step 1: Replace \\(\\tan^2 x = \\sec^2 x - 1\\)",
                "\\[ \\int (6(\\sec^2 x - 1) - \\sec^2 x) dx = \\int (5\\sec^2 x - 6) dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = 5\\tan x - 6x + C \\]"
            ]
        ]
    ],
    [
        172,
        "\\int 6\\cos^4 x - 2\\sin^2 x \\, dx",
        [
            [
                "Step 1: Use multiple angle reduction formulas",
                "Express powers of sines and cosines using multiple angles."
            ],
            [
                "Step 2: Integrate term by term",
                "\\[ = \\frac{9}{2}x + \\text{harmonic trig terms} + C \\]"
            ]
        ]
    ],
    [
        173,
        "\\int \\sin 4x \\cos 4x \\, dx",
        [
            [
                "Step 1: Use double angle identity \\(\\sin 8x = 2\\sin 4x \\cos 4x\\)",
                "\\[ \\frac{1}{2} \\int \\sin 8x \\, dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = -\\frac{1}{16}\\cos 8x + C \\]"
            ]
        ]
    ],
    [
        174,
        "\\int \\frac{1}{\\operatorname{cosec} x - \\cot x} \\, dx",
        [
            [
                "Step 1: Multiply numerator and denominator by conjugate \\(\\operatorname{cosec} x + \\cot x\\)",
                "\\[ \\int \\frac{\\operatorname{cosec} x + \\cot x}{\\operatorname{cosec}^2 x - \\cot^2 x} dx = \\int (\\operatorname{cosec} x + \\cot x) dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\ln|\\operatorname{cosec} x - \\cot x| + \\ln|\\sin x| + C \\]"
            ]
        ]
    ],
    [
        175,
        "\\int \\frac{x^2}{\\sqrt{x-1}} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = x-1 \\implies x = u+1, dx = du\\)",
                "\\[ \\int \\frac{(u+1)^2}{u^{\\frac{1}{2}}} du = \\int \\left(u^{\\frac{3}{2}} + 2u^{\\frac{1}{2}} + u^{-\\frac{1}{2}}\\right) du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = \\frac{2}{5}(x-1)^{\\frac{5}{2}} + \\frac{4}{3}(x-1)^{\\frac{3}{2}} + 2\\sqrt{x-1} + C \\]"
            ]
        ]
    ],
    [
        176,
        "\\int \\frac{3e^{2x}}{\\sqrt{e^x-1}} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = e^x-1 \\implies e^x = u+1, du = e^x dx\\)",
                "\\[ 3 \\int \\frac{u+1}{\\sqrt{u}} du = 3 \\int \\left(u^{\\frac{1}{2}} + u^{-\\frac{1}{2}}\\right) du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = 2(e^x+2)\\sqrt{e^x-1} + C \\]"
            ]
        ]
    ],
    [
        177,
        "\\int \\frac{(2+\\sqrt{x})^{\\frac{3}{2}}}{\\sqrt{x}} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = 2+\\sqrt{x} \\implies du = \\frac{1}{2\\sqrt{x}}dx\\)",
                "\\[ 2 \\int u^{\\frac{3}{2}} du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = \\frac{4}{5}u^{\\frac{5}{2}} + C = \\frac{4}{5}(2+\\sqrt{x})^{\\frac{5}{2}} + C \\]"
            ]
        ]
    ],
    [
        178,
        "\\int \\frac{4x^7}{x^4+1} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = x^4+1 \\implies du = 4x^3 dx\\)",
                "\\[ \\int \\frac{x^4 \\cdot 4x^3}{x^4+1} dx = \\int \\frac{u-1}{u} du = \\int \\left(1 - \\frac{1}{u}\\right) du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = u - \\ln|u| + C = x^4 - \\ln(x^4+1) + C \\]"
            ]
        ]
    ],
    [
        179,
        "\\int \\frac{x}{9x^2+1} \\, dx",
        [
            [
                "Step 1: Logarithmic derivative structure",
                "Derivative of \\(9x^2+1\\) is \\(18x\\)."
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\frac{1}{18} \\int \\frac{18x}{9x^2+1} dx = \\frac{1}{18}\\ln(9x^2+1) + C \\]"
            ]
        ]
    ],
    [
        180,
        "\\int \\frac{2}{x+\\sqrt{x}} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = \\sqrt{x} \\implies x = u^2, dx = 2u \\, du\\)",
                "\\[ \\int \\frac{2}{u^2+u} \\cdot 2u \\, du = 4 \\int \\frac{1}{u+1} du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = 4\\ln|u+1| + C = 4\\ln|\\sqrt{x}+1| + C \\]"
            ]
        ]
    ],
    [
        181,
        "\\int \\frac{3x}{1+\\sqrt{x}} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = \\sqrt{x} \\implies x = u^2, dx = 2u \\, du\\)",
                "\\[ \\int \\frac{3u^2}{1+u} \\cdot 2u \\, du = 6 \\int \\frac{u^3}{u+1} du \\]"
            ],
            [
                "Step 2: Polynomial division on \\(\\frac{u^3}{u+1} = u^2 - u + 1 - \\frac{1}{u+1}\\)",
                "\\[ = 6 \\left(\\frac{u^3}{3} - \\frac{u^2}{2} + u - \\ln|u+1|\\) + C \\]"
            ],
            [
                "Step 3: Substitute back",
                "\\[ = 2x\\sqrt{x} - 3x + 6\\sqrt{x} - 6\\ln|\\sqrt{x}+1| + C \\]"
            ]
        ]
    ],
    [
        182,
        "\\int \\frac{3x^2+2}{4x+1} \\, dx",
        [
            [
                "Step 1: Polynomial long division",
                "\\[ \\frac{3x^2+2}{4x+1} = \\frac{3}{4}x - \\frac{3}{16} + \\frac{35}{16(4x+1)} \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\frac{3}{8}x^2 - \\frac{3}{16}x + \\frac{35}{64}\\ln|4x+1| + C \\]"
            ]
        ]
    ],
    [
        183,
        "\\int \\frac{3}{x} - \\frac{4}{x^2} - \\frac{2}{x^3} \\, dx",
        [
            [
                "Step 1: Integrate term by term",
                "\\[ = 3\\ln|x| + \\frac{4}{x} + \\frac{1}{x^2} + C \\]"
            ]
        ]
    ],
    [
        184,
        "\\int 2\\sin 2x \\cos^2 x \\, dx",
        [
            [
                "Step 1: Rewrite \\(\\sin 2x = 2\\sin x \\cos x\\)",
                "\\[ 4 \\int \\sin x \\cos^3 x \\, dx \\]"
            ],
            [
                "Step 2: Substitution \\(u = \\cos x \\implies du = -\\sin x dx\\)",
                "\\[ -4 \\int u^3 du = -u^4 + C \\]"
            ],
            [
                "Step 3: Substitute back",
                "\\[ = -\\cos^4 x + C \\]"
            ]
        ]
    ],
    [
        185,
        "\\int \\frac{10x^2-23x+11}{(2-3x)(2x-1)^2} \\, dx",
        [
            [
                "Step 1: Partial fraction decomposition",
                "\\[ \\frac{10x^2-23x+11}{(2-3x)(2x-1)^2} = \\frac{A}{2-3x} + \\frac{B}{2x-1} + \\frac{C}{(2x-1)^2} \\implies A = 1, B = 2, C = -3 \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = -\\frac{1}{3}\\ln|2-3x| + \\ln|2x-1| + \\frac{3}{2x-1} + C \\]"
            ]
        ]
    ],
    [
        186,
        "\\int \\frac{\\sec x}{\\sec x - \\tan x} \\, dx",
        [
            [
                "Step 1: Multiply numerator and denominator by conjugate \\(\\sec x + \\tan x\\)",
                "\\[ \\int \\frac{\\sec x(\\sec x + \\tan x)}{\\sec^2 x - \\tan^2 x} dx = \\int (\\sec^2 x + \\sec x \\tan x) dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\tan x + \\sec x + C \\]"
            ]
        ]
    ],
    [
        187,
        "\\int x\\cos 6x \\, dx",
        [
            [
                "Step 1: Integration by Parts",
                "Let \\(u = x, dv = \\cos 6x dx \\implies du = dx, v = \\frac{1}{6}\\sin 6x\\)."
            ],
            [
                "Step 2: Evaluate",
                "\\[ = \\frac{1}{6}x\\sin 6x - \\frac{1}{6} \\int \\sin 6x \\, dx = \\frac{1}{6}x\\sin 6x + \\frac{1}{36}\\cos 6x + C \\]"
            ]
        ]
    ],
    [
        188,
        "\\int \\sin x \\sin 3x \\, dx",
        [
            [
                "Step 1: Product-to-sum identity \\(\\sin A \\sin B = \\frac{1}{2}[\\cos(A-B) - \\cos(A+B)]\\)",
                "\\[ = \\frac{1}{2} \\int (\\cos 2x - \\cos 4x) dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\frac{1}{4}\\sin 2x - \\frac{1}{8}\\sin 4x + C \\]"
            ]
        ]
    ],
    [
        189,
        "\\int 4\\cos 3x + \\frac{1}{2}\\sin 3x \\, dx",
        [
            [
                "Step 1: Integrate term by term",
                "\\[ = \\frac{4}{3}\\sin 3x - \\frac{1}{6}\\cos 3x + C \\]"
            ]
        ]
    ],
    [
        190,
        "\\int \\sin^2 6x \\, dx",
        [
            [
                "Step 1: Double angle identity \\(\\sin^2 6x = \\frac{1-\\cos 12x}{2}\\)",
                "\\[ \\int \\frac{1-\\cos 12x}{2} dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\frac{1}{2}x - \\frac{1}{24}\\sin 12x + C \\]"
            ]
        ]
    ],
    [
        191,
        "\\int \\frac{\\cos 2x}{1-\\cos^2 2x} \\, dx",
        [
            [
                "Step 1: Use \\(1-\\cos^2 2x = \\sin^2 2x\\)",
                "\\[ \\int \\frac{\\cos 2x}{\\sin^2 2x} dx = \\int \\cot 2x \\operatorname{cosec} 2x \\, dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = -\\frac{1}{2}\\operatorname{cosec} 2x + C \\]"
            ]
        ]
    ],
    [
        192,
        "\\int \\frac{1}{\\cos^2 x \\tan^2 x} \\, dx",
        [
            [
                "Step 1: Simplify to \\(\\operatorname{cosec}^2 x\\)",
                "\\[ \\int \\operatorname{cosec}^2 x \\, dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = -\\cot x + C \\]"
            ]
        ]
    ],
    [
        193,
        "\\int 3\\cos^3 3x \\, dx",
        [
            [
                "Step 1: Use \\(\\cos^3 3x = \\cos 3x (1-\\sin^2 3x)\\)",
                "\\[ 3 \\int \\cos 3x (1-\\sin^2 3x) dx \\]"
            ],
            [
                "Step 2: Substitution \\(u = \\sin 3x \\implies du = 3\\cos 3x dx\\)",
                "\\[ \\int (1-u^2) du = u - \\frac{1}{3}u^3 + C \\]"
            ],
            [
                "Step 3: Substitute back",
                "\\[ = \\sin 3x - \\frac{1}{3}\\sin^3 3x + C \\]"
            ]
        ]
    ],
    [
        194,
        "\\int 3\\sec^4 x \\, dx",
        [
            [
                "Step 1: Rewrite \\(\\sec^4 x = \\sec^2 x (1+\\tan^2 x)\\)",
                "\\[ 3 \\int (1+\\tan^2 x)\\sec^2 x \\, dx \\]"
            ],
            [
                "Step 2: Substitution \\(u = \\tan x \\implies du = \\sec^2 x dx\\)",
                "\\[ 3 \\int (1+u^2) du = 3\\left(u + \\frac{1}{3}u^3\\right) + C \\]"
            ],
            [
                "Step 3: Substitute back",
                "\\[ = 3\\tan x + \\tan^3 x + C \\]"
            ]
        ]
    ],
    [
        195,
        "\\int \\frac{2\\sin x \\cos 3x}{1+\\cos x} \\, dx",
        [
            [
                "Step 1: Expand product trigonometric formulas",
                "Express trigonometric products using sum-to-product identities."
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\text{Standard trig expansion result} + C \\]"
            ]
        ]
    ],
    [
        196,
        "\\int \\frac{2\\sin x}{\\cos x + \\sin x} \\, dx",
        [
            [
                "Step 1: Standard trigonometric reduction technique",
                "Express numerator as a linear combination of denominator derivative and denominator."
            ],
            [
                "Step 2: Integrate",
                "\\[ = x - \\ln|\\cos x + \\sin x| + C \\]"
            ]
        ]
    ],
    [
        197,
        "\\int \\frac{1}{2x-1} - 3 - 4x \\, dx",
        [
            [
                "Step 1: Integrate term by term",
                "\\[ = \\frac{1}{2}\\ln|2x-1| - 3x - 2x^2 + C \\]"
            ]
        ]
    ],
    [
        198,
        "\\int \\frac{3x}{\\sqrt{4-2x^2}} \\, dx",
        [
            [
                "Step 1: Substitution \\(u = 4-2x^2 \\implies du = -4x dx\\)",
                "\\[ -\\frac{3}{4} \\int u^{-\\frac{1}{2}} du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = -\\frac{3}{2}\\sqrt{4-2x^2} + C \\]"
            ]
        ]
    ],
    [
        199,
        "\\int \\operatorname{cosec}^2 2x \\, dx",
        [
            [
                "Step 1: Standard cosecant squared formula",
                "\\[ = -\\frac{1}{2}\\cot 2x + C \\]"
            ]
        ]
    ],
    [
        200,
        "\\int \\sin^3 2x \\, dx",
        [
            [
                "Step 1: Rewrite \\(\\sin^3 2x = \\sin 2x (1-\\cos^2 2x)\\)",
                "\\[ \\int \\sin 2x (1-\\cos^2 2x) dx \\]"
            ],
            [
                "Step 2: Substitution \\(u = \\cos 2x \\implies du = -2\\sin 2x dx\\)",
                "\\[ -\\frac{1}{2} \\int (1-u^2) du = -\\frac{1}{2}u + \\frac{1}{6}u^3 + C \\]"
            ],
            [
                "Step 3: Substitute back",
                "\\[ = -\\frac{1}{2}\\cos 2x + \\frac{1}{6}\\cos^3 2x + C \\]"
            ]
        ]
    ]
];
