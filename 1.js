export default [
    [
        1,
        "\\int 6(4x+3)^{\\frac{1}{2}} \\,dx",
        [
            [
                "Step 1: Identify the rule",
                "This is a linear composite function of the form \\(\\int a(bx+c)^n \\, dx\\). We apply the reverse chain rule."
            ],
            [
                "Step 2: Integrate the expression",
                "Increase the exponent by 1 to get \\(\\frac{3}{2}\\), then divide by the new power \\(\\frac{3}{2}\\) and by the inner derivative \\(4\\):\n\\[ = 6 \\cdot \\frac{(4x+3)^{\\frac{3}{2}}}{\\frac{3}{2} \\cdot 4} + C \\]"
            ],
            [
                "Step 3: Simplify coefficients",
                "Since \\(\\frac{3}{2} \\cdot 4 = 6\\), the coefficient \\(6\\) cancels out cleanly:\n\\[ = (4x+3)^{\\frac{3}{2}} + C \\]"
            ]
        ]
    ],
    [
        2,
        "\\int \\frac{12}{\\sqrt{3x+1}} \\,dx",
        [
            [
                "Step 1: Rewrite in index form",
                "Express the root denominator as a negative fractional exponent:\n\\[ \\int 12(3x+1)^{-\\frac{1}{2}} \\, dx \\]"
            ],
            [
                "Step 2: Apply reverse chain rule",
                "Add 1 to the exponent \\(-\\frac{1}{2} + 1 = \\frac{1}{2}\\), and divide by \\(\\frac{1}{2}\\) times the inner derivative \\(3\\):\n\\[ = 12 \\cdot \\frac{(3x+1)^{\\frac{1}{2}}}{\\frac{1}{2} \\cdot 3} + C \\]"
            ],
            [
                "Step 3: Simplify terms",
                "\\[ = 12 \\cdot \\frac{2}{3}(3x+1)^{\\frac{1}{2}} + C = 8\\sqrt{3x+1} + C \\]"
            ]
        ]
    ],
    [
        3,
        "\\int \\frac{12}{\\sqrt{4x-1}} \\,dx",
        [
            [
                "Step 1: Rewrite in index form",
                "\\[ \\int 12(4x-1)^{-\\frac{1}{2}} \\, dx \\]"
            ],
            [
                "Step 2: Integrate using reverse chain rule",
                "Divide by the new power \\(\\frac{1}{2}\\) and the inner derivative \\(4\\):\n\\[ = 12 \\cdot \\frac{(4x-1)^{\\frac{1}{2}}}{\\frac{1}{2} \\cdot 4} + C \\]"
            ],
            [
                "Step 3: Simplify",
                "\\[ = 12 \\cdot \\frac{1}{2}(4x-1)^{\\frac{1}{2}} + C = 6\\sqrt{4x-1} + C \\]"
            ]
        ]
    ],
    [
        4,
        "\\int \\frac{12}{4x+1} \\,dx",
        [
            [
                "Step 1: Identify logarithmic form",
                "Since the numerator is a scalar multiple of the denominator's derivative, use \\(\\int \\frac{f'(x)}{f(x)}dx = \\ln|f(x)|\\)."
            ],
            [
                "Step 2: Integrate and simplify",
                "\\[ = \\frac{12}{4} \\ln|4x+1| + C = 3\\ln|4x+1| + C \\]"
            ]
        ]
    ],
    [
        5,
        "\\int \\frac{12x}{4x+1} \\,dx",
        [
            [
                "Step 1: Adjust the numerator algebraically",
                "Rewrite \\(12x\\) to match the denominator \\(4x+1\\):\n\\[ 12x = 3(4x+1) - 3 \\]"
            ],
            [
                "Step 2: Split into individual fractions",
                "\\[ \\int \\left( \\frac{3(4x+1)}{4x+1} - \\frac{3}{4x+1} \\right) dx = \\int \\left( 3 - \\frac{3}{4x+1} \\right) dx \\]"
            ],
            [
                "Step 3: Integrate each term",
                "\\[ = 3x - \\frac{3}{4}\\ln|4x+1| + C \\]"
            ]
        ]
    ],
    [
        6,
        "\\int (\\sin x + \\cos x)^2 \\,dx",
        [
            [
                "Step 1: Expand the square",
                "\\[ (\\sin x + \\cos x)^2 = \\sin^2 x + 2\\sin x \\cos x + \\cos^2 x \\]"
            ],
            [
                "Step 2: Simplify using trig identities",
                "Use \\(\\sin^2 x + \\cos^2 x = 1\\) and \\(2\\sin x \\cos x = \\sin 2x\\):\n\\[ = 1 + \\sin 2x \\]"
            ],
            [
                "Step 3: Integrate term by term",
                "\\[ \\int (1 + \\sin 2x) \\, dx = x - \\frac{1}{2}\\cos 2x + C \\]"
            ]
        ]
    ],
    [
        7,
        "\\int (2\\sin x + \\operatorname{cosec} x)^2 \\,dx",
        [
            [
                "Step 1: Expand the squared term",
                "\\[ = 4\\sin^2 x + 4\\sin x \\operatorname{cosec} x + \\operatorname{cosec}^2 x \\]"
            ],
            [
                "Step 2: Apply identities",
                "Note that \\(\\sin x \\operatorname{cosec} x = 1\\) and \\(\\sin^2 x = \\frac{1-\\cos 2x}{2}\\):\n\\[ = 4\\left(\\frac{1-\\cos 2x}{2}\\right) + 4 + \\operatorname{cosec}^2 x = 6 - 2\\cos 2x + \\operatorname{cosec}^2 x \\]"
            ],
            [
                "Step 3: Integrate directly",
                "\\[ = 6x - \\sin 2x - \\cot x + C \\]"
            ]
        ]
    ],
    [
        8,
        "\\int \\frac{5}{(3x-1)(2x+1)} \\,dx",
        [
            [
                "Step 1: Partial fraction decomposition",
                "\\[ \\frac{5}{(3x-1)(2x+1)} = \\frac{A}{3x-1} + \\frac{B}{2x+1} \\]"
            ],
            [
                "Step 2: Solve for constants",
                "Equating numerators gives \\(5 = A(2x+1) + B(3x-1)\\). Substituting roots gives \\(A = 3\\) and \\(B = -2\\)."
            ],
            [
                "Step 3: Integrate linear denominators",
                "\\[ \\int \\left( \\frac{3}{3x-1} - \\frac{2}{2x+1} \\right) dx = \\ln|3x-1| - \\ln|2x+1| + C = \\ln\\left|\\frac{3x-1}{2x+1}\\right| + C \\]"
            ]
        ]
    ],
    [
        9,
        "\\int 4x \\sin 2x \\,dx",
        [
            [
                "Step 1: Integration by Parts setup",
                "Set \\(u = 4x\\) and \\(dv = \\sin 2x \\, dx\\). Thus \\(du = 4 \\, dx\\) and \\(v = -\\frac{1}{2}\\cos 2x\\)."
            ],
            [
                "Step 2: Apply \\(\\int u \\, dv = uv - \\int v \\, du\\)",
                "\\[ = -2x \\cos 2x - \\int \\left(-\\frac{1}{2}\\cos 2x\\)(4) \\, dx = -2x \\cos 2x + \\int 2\\cos 2x \\, dx \\]"
            ],
            [
                "Step 3: Complete integration",
                "\\[ = -2x \\cos 2x + \\sin 2x + C \\]"
            ]
        ]
    ],
    [
        10,
        "\\int \\frac{7}{4x} \\,dx",
        [
            [
                "Step 1: Factor out constant factor",
                "\\[ = \\frac{7}{4} \\int \\frac{1}{x} \\, dx \\]"
            ],
            [
                "Step 2: Apply standard logarithmic integral",
                "\\[ = \\frac{7}{4} \\ln|x| + C \\]"
            ]
        ]
    ],
    [
        11,
        "\\int \\left(x + \\frac{2}{x}\\right)^2 \\,dx",
        [
            [
                "Step 1: Expand expression",
                "\\[ = x^2 + 4 + \\frac{4}{x^2} = x^2 + 4 + 4x^{-2} \\]"
            ],
            [
                "Step 2: Integrate each term using power rule",
                "\\[ = \\frac{x^3}{3} + 4x - \\frac{4}{x} + C \\]"
            ]
        ]
    ],
    [
        12,
        "\\int \\frac{10}{(1-4x)^2} \\,dx",
        [
            [
                "Step 1: Express with negative index",
                "\\[ \\int 10(1-4x)^{-2} \\, dx \\]"
            ],
            [
                "Step 2: Apply reverse chain rule",
                "\\[ = 10 \\cdot \\frac{(1-4x)^{-1}}{-1 \\cdot (-4)} + C = \\frac{10}{4}(1-4x)^{-1} + C \\]"
            ],
            [
                "Step 3: Simplify fraction",
                "\\[ = \\frac{5}{2(1-4x)} + C \\]"
            ]
        ]
    ],
    [
        13,
        "\\int (1+2\\cos x)^3 \\sin x \\,dx",
        [
            [
                "Step 1: Integration by substitution",
                "Let \\(u = 1+2\\cos x\\). Differentiation gives \\(du = -2\\sin x \\, dx\\) \\(\\implies \\sin x \\, dx = -\\frac{1}{2}du\\)."
            ],
            [
                "Step 2: Transform integral",
                "\\[ \\int u^3 \\left(-\\frac{1}{2}\\right) du = -\\frac{1}{2} \\cdot \\frac{u^4}{4} + C = -\\frac{1}{8}u^4 + C \\]"
            ],
            [
                "Step 3: Substitute back for x",
                "\\[ = -\\frac{1}{8}(1+2\\cos x)^4 + C \\]"
            ]
        ]
    ],
    [
        14,
        "\\int 2\\cos^2 x - \\cos\\left(\\frac{1}{2}x\\right) \\,dx",
        [
            [
                "Step 1: Use double angle identity",
                "Since \\(2\\cos^2 x = 1 + \\cos 2x\\), rewrite integrand as:\n\\[ 1 + \\cos 2x - \\cos\\left(\\frac{1}{2}x\\right) \\]"
            ],
            [
                "Step 2: Integrate term-by-term",
                "\\[ = x + \\frac{1}{2}\\sin 2x - 2\\sin\\left(\\frac{1}{2}x\\right) + C \\]"
            ]
        ]
    ],
    [
        15,
        "\\int \\frac{14x}{x^2-4} \\,dx",
        [
            [
                "Step 1: Identify derivative of denominator",
                "Note that \\(\\frac{d}{dx}(x^2-4) = 2x\\)."
            ],
            [
                "Step 2: Apply log rule \\(\\int \\frac{f'(x)}{f(x)}dx = \\ln|f(x)|\\)",
                "\\[ = 7 \\int \\frac{2x}{x^2-4} \\, dx = 7\\ln|x^2-4| + C \\]"
            ]
        ]
    ],
    [
        16,
        "\\int \\frac{9}{2x^2+x-1} \\,dx",
        [
            [
                "Step 1: Factor denominator",
                "\\[ 2x^2+x-1 = (2x-1)(x+1) \\]"
            ],
            [
                "Step 2: Decompose into partial fractions",
                "\\[ \\frac{9}{(2x-1)(x+1)} = \\frac{A}{2x-1} + \\frac{B}{x+1} \\implies A = 6, B = -3 \\]"
            ],
            [
                "Step 3: Integrate logs",
                "\\[ = 3\\ln|2x-1| - 3\\ln|x+1| + C = 3\\ln\\left|\\frac{2x-1}{x+1}\\right| + C \\]"
            ]
        ]
    ],
    [
        17,
        "\\int (8x+1)e^{-2x} \\,dx",
        [
            [
                "Step 1: Integration by Parts",
                "Set \\(u = 8x+1\\) and \\(dv = e^{-2x} \\, dx\\). Thus \\(du = 8 \\, dx\\) and \\(v = -\\frac{1}{2}e^{-2x}\\)."
            ],
            [
                "Step 2: Apply formula",
                "\\[ = -\\frac{1}{2}(8x+1)e^{-2x} - \\int -4e^{-2x} \\, dx = -\\frac{1}{2}(8x+1)e^{-2x} - 2e^{-2x} + C \\]"
            ],
            [
                "Step 3: Factor out exponential term",
                "\\[ = -e^{-2x}\\left(4x + \\frac{5}{2}\\right) + C \\]"
            ]
        ]
    ],
    [
        18,
        "\\int (e^{2x} + e^{-x})^2 \\,dx",
        [
            [
                "Step 1: Expand the squared term",
                "\\[ = e^{4x} + 2e^{x} + e^{-2x} \\]"
            ],
            [
                "Step 2: Integrate directly",
                "\\[ = \\frac{1}{4}e^{4x} + 2e^x - \\frac{1}{2}e^{-2x} + C \\]"
            ]
        ]
    ],
    [
        19,
        "\\int \\frac{6}{(3x+2)^3} \\,dx",
        [
            [
                "Step 1: Express in index form",
                "\\[ \\int 6(3x+2)^{-3} \\, dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = 6 \\cdot \\frac{(3x+2)^{-2}}{-2 \\cdot 3} + C = -\\frac{1}{(3x+2)^2} + C \\]"
            ]
        ]
    ],
    [
        20,
        "\\int \\frac{6x}{(3x+2)^3} \\,dx",
        [
            [
                "Step 1: Use substitution",
                "Let \\(u = 3x+2 \\implies x = \\frac{u-2}{3}\\) and \\(dx = \\frac{1}{3}du\\)."
            ],
            [
                "Step 2: Evaluate transformed integral",
                "\\[ \\int \\frac{6(\\frac{u-2}{3})}{u^3} \\cdot \\frac{1}{3} du = \\frac{2}{3} \\int (u^{-2} - 2u^{-3}) du = \\frac{2}{3}\\left(-\\frac{1}{u} + \\frac{1}{u^2}\\right) + C \\]"
            ],
            [
                "Step 3: Substitute back for x",
                "\\[ = -\\frac{2}{3(3x+2)} + \\frac{2}{3(3x+2)^2} + C \\]"
            ]
        ]
    ],
    [
        21,
        "\\int (\\sin x - 2\\cos x)\\sin x \\,dx",
        [
            [
                "Step 1: Expand terms",
                "\\[ = \\sin^2 x - 2\\sin x \\cos x \\]"
            ],
            [
                "Step 2: Apply trig identities",
                "Use \\(\\sin^2 x = \\frac{1-\\cos 2x}{2}\\) and \\(2\\sin x \\cos x = \\sin 2x\\):\n\\[ = \\frac{1}{2} - \\frac{1}{2}\\cos 2x - \\sin 2x \\]"
            ],
            [
                "Step 3: Integrate",
                "\\[ = \\frac{1}{2}x - \\frac{1}{4}\\sin 2x + \\frac{1}{2}\\cos 2x + C \\]"
            ]
        ]
    ],
    [
        22,
        "\\int \\frac{(2+\\cos x)\\sin 2x}{2\\cos x} \\,dx",
        [
            [
                "Step 1: Expand using double angle identity \\(\\sin 2x = 2\\sin x \\cos x\\)",
                "\\[ = \\frac{(2+\\cos x)(2\\sin x \\cos x)}{2\\cos x} = (2+\\cos x)\\sin x = 2\\sin x + \\sin x \\cos x \\]"
            ],
            [
                "Step 2: Integrate directly",
                "\\[ = -2\\cos x + \\frac{1}{2}\\sin^2 x + C \\]"
            ]
        ]
    ],
    [
        23,
        "\\int \\frac{8x-3}{4x} \\,dx",
        [
            [
                "Step 1: Split fraction into distinct terms",
                "\\[ = \\int \\left( 2 - \\frac{3}{4x} \\right) dx \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = 2x - \\frac{3}{4}\\ln|x| + C \\]"
            ]
        ]
    ],
    [
        24,
        "\\int \\frac{6x^2}{x^3+8} \\,dx",
        [
            [
                "Step 1: Recognize standard logarithmic derivative",
                "Note \\(\\frac{d}{dx}(x^3+8) = 3x^2\\)."
            ],
            [
                "Step 2: Integrate",
                "\\[ = 2 \\int \\frac{3x^2}{x^3+8} \\, dx = 2\\ln|x^3+8| + C \\]"
            ]
        ]
    ],
    [
        25,
        "\\int (1+2\\cos x)^3 \\sin x \\,dx",
        [
            [
                "Step 1: Use substitution \\(u = 1+2\\cos x\\)",
                "This gives \\(du = -2\\sin x \\, dx\\)."
            ],
            [
                "Step 2: Evaluate transformed integral",
                "\\[ = -\\frac{1}{2} \\int u^3 du = -\\frac{1}{8}u^4 + C = -\\frac{1}{8}(1+2\\cos x)^4 + C \\]"
            ]
        ]
    ],
    [
        26,
        "\\int \\cos\\sqrt{x} \\,dx",
        [
            [
                "Step 1: Substitute \\(u = \\sqrt{x}\\)",
                "Then \\(x = u^2 \\implies dx = 2u \\, du\\). The integral becomes \\(\\int 2u \\cos u \\, du\\)."
            ],
            [
                "Step 2: Integration by Parts",
                "Set \\(w = 2u, dv = \\cos u \\, du\\). Then \\(dw = 2 \\, du, v = \\sin u\\):\n\\[ = 2u\\sin u - \\int 2\\sin u \\, du = 2u\\sin u + 2\\cos u + C \\]"
            ],
            [
                "Step 3: Substitute back for x",
                "\\[ = 2\\sqrt{x}\\sin\\sqrt{x} + 2\\cos\\sqrt{x} + C \\]"
            ]
        ]
    ],
    [
        27,
        "\\int \\frac{3}{2x-1} \\,dx",
        [
            [
                "Step 1: Apply logarithmic integration",
                "\\[ = \\frac{3}{2}\\ln|2x-1| + C \\]"
            ]
        ]
    ],
    [
        28,
        "\\int \\frac{10}{(2x+1)^6} \\,dx",
        [
            [
                "Step 1: Rewrite using index form",
                "\\[ \\int 10(2x+1)^{-6} \\, dx \\]"
            ],
            [
                "Step 2: Apply reverse chain rule and simplify",
                "\\[ = 10 \\cdot \\frac{(2x+1)^{-5}}{-5 \\cdot 2} + C = -\\frac{1}{(2x+1)^5} + C \\]"
            ]
        ]
    ],
    [
        29,
        "\\int \\frac{3x-1}{(2x+1)(x-2)} \\,dx",
        [
            [
                "Step 1: Partial fraction decomposition",
                "\\[ \\frac{3x-1}{(2x+1)(x-2)} = \\frac{A}{2x+1} + \\frac{B}{x-2} \\implies A = 2, B = 1 \\]"
            ],
            [
                "Step 2: Integrate each term",
                "\\[ \\int \\left( \\frac{2}{2x+1} + \\frac{1}{x-2} \\right) dx = \\ln|2x+1| + \\ln|x-2| + C = \\ln|(2x+1)(x-2)| + C \\]"
            ]
        ]
    ],
    [
        30,
        "\\int (2+\\sin x)^2 \\,dx",
        [
            [
                "Step 1: Expand integrand",
                "\\[ = 4 + 4\\sin x + \\sin^2 x = 4 + 4\\sin x + \\frac{1-\\cos 2x}{2} = \\frac{9}{2} + 4\\sin x - \\frac{1}{2}\\cos 2x \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\frac{9}{2}x - 4\\cos x - \\frac{1}{4}\\sin 2x + C \\]"
            ]
        ]
    ],
    [
        31,
        "\\int 5(2x-3)^{\\frac{1}{4}} \\,dx",
        [
            [
                "Step 1: Reverse chain rule",
                "Add 1 to exponent: \\(\\frac{1}{4} + 1 = \\frac{5}{4}\\)."
            ],
            [
                "Step 2: Divide and simplify",
                "\\[ = 5 \\cdot \\frac{(2x-3)^{\\frac{5}{4}}}{\\frac{5}{4} \\cdot 2} + C = 2(2x-3)^{\\frac{5}{4}} + C \\]"
            ]
        ]
    ],
    [
        32,
        "\\int \\frac{e^{4x}+3}{e^{3x}} \\,dx",
        [
            [
                "Step 1: Split fraction terms",
                "\\[ = \\int (e^{x} + 3e^{-3x}) \\, dx \\]"
            ],
            [
                "Step 2: Integrate exponentially",
                "\\[ = e^x - e^{-3x} + C \\]"
            ]
        ]
    ],
    [
        33,
        "\\int x e^{3x} \\,dx",
        [
            [
                "Step 1: Integration by Parts",
                "Set \\(u = x, dv = e^{3x}dx \\implies du = dx, v = \\frac{1}{3}e^{3x}\\)."
            ],
            [
                "Step 2: Evaluate",
                "\\[ = \\frac{1}{3}xe^{3x} - \\int \\frac{1}{3}e^{3x} \\, dx = \\frac{1}{3}xe^{3x} - \\frac{1}{9}e^{3x} + C \\]"
            ]
        ]
    ],
    [
        34,
        "\\int \\frac{x^3}{x^4+2} \\,dx",
        [
            [
                "Step 1: Identify logarithmic derivative structure",
                "Derivative of denominator is \\(4x^3\\)."
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\frac{1}{4} \\int \\frac{4x^3}{x^4+2} \\, dx = \\frac{1}{4}\\ln|x^4+2| + C \\]"
            ]
        ]
    ],
    [
        35,
        "\\int \\frac{2}{(x-2)(x-4)} \\,dx",
        [
            [
                "Step 1: Partial fraction expansion",
                "\\[ \\frac{2}{(x-2)(x-4)} = \\frac{1}{x-4} - \\frac{1}{x-2} \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = \\ln|x-4| - \\ln|x-2| + C = \\ln\\left|\\frac{x-4}{x-2}\\right| + C \\]"
            ]
        ]
    ],
    [
        36,
        "\\int \\frac{3}{4x+1} \\,dx",
        [
            [
                "Step 1: Direct logarithmic integration",
                "\\[ = \\frac{3}{4}\\ln|4x+1| + C \\]"
            ]
        ]
    ],
    [
        37,
        "\\int \\left(1 + \\frac{1}{x}\\right)^2 \\,dx",
        [
            [
                "Step 1: Expand polynomial",
                "\\[ = 1 + \\frac{2}{x} + \\frac{1}{x^2} = 1 + 2x^{-1} + x^{-2} \\]"
            ],
            [
                "Step 2: Integrate term by term",
                "\\[ = x + 2\\ln|x| - \\frac{1}{x} + C \\]"
            ]
        ]
    ],
    [
        38,
        "\\int \\frac{x}{(x^2-1)^3} \\,dx",
        [
            [
                "Step 1: Substitution \\(u = x^2-1 \\implies du = 2x \\, dx\\)",
                "\\[ = \\frac{1}{2} \\int u^{-3} du \\]"
            ],
            [
                "Step 2: Integrate and substitute back",
                "\\[ = \\frac{1}{2} \\left(-\\frac{1}{2u^2}\\right) + C = -\\frac{1}{4(x^2-1)^2} + C \\]"
            ]
        ]
    ],
    [
        39,
        "\\int \\cos x - \\sin x \\,dx",
        [
            [
                "Step 1: Standard trigonometric integrals",
                "\\[ = \\sin x - (-\\cos x) + C = \\sin x + \\cos x + C \\]"
            ]
        ]
    ],
    [
        40,
        "\\int \\sin x - \\cos x \\,dx",
        [
            [
                "Step 1: Standard trigonometric integrals",
                "\\[ = -\\cos x - \\sin x + C \\]"
            ]
        ]
    ],
    [
        41,
        "\\int \\sin(4x+3) \\,dx",
        [
            [
                "Step 1: Linear composite trig integral",
                "\\[ = -\\frac{1}{4}\\cos(4x+3) + C \\]"
            ]
        ]
    ],
    [
        42,
        "\\int \\frac{x}{\\sqrt{x+1}} \\,dx",
        [
            [
                "Step 1: Substitution \\(u = x+1 \\implies x = u-1\\) and \\(dx = du\\)",
                "\\[ \\int \\frac{u-1}{\\sqrt{u}} du = \\int (u^{\\frac{1}{2}} - u^{-\\frac{1}{2}}) du \\]"
            ],
            [
                "Step 2: Evaluate",
                "\\[ = \\frac{2}{3}u^{\\frac{3}{2}} - 2u^{\\frac{1}{2}} + C \\]"
            ],
            [
                "Step 3: Substitute back for x",
                "\\[ = \\frac{2}{3}(x+1)^{\\frac{3}{2}} - 2\\sqrt{x+1} + C \\]"
            ]
        ]
    ],
    [
        43,
        "\\int \\cos(5-2x) \\,dx",
        [
            [
                "Step 1: Reverse chain rule for cosine",
                "\\[ = -\\frac{1}{2}\\sin(5-2x) + C \\]"
            ]
        ]
    ],
    [
        44,
        "\\int 3\\sin 2x \\,dx",
        [
            [
                "Step 1: Standard sine integration",
                "\\[ = -\\frac{3}{2}\\cos 2x + C \\]"
            ]
        ]
    ],
    [
        45,
        "\\int (1+\\sec^2 x)\\sin x \\,dx",
        [
            [
                "Step 1: Expand expression",
                "\\[ = \\sin x + \\sin x \\sec^2 x = \\sin x + \\tan x \\sec x \\]"
            ],
            [
                "Step 2: Integrate standard functions",
                "\\[ = -\\cos x + \\sec x + C \\]"
            ]
        ]
    ],
    [
        46,
        "\\int (1-2\\cos x)^2 \\,dx",
        [
            [
                "Step 1: Expand square term",
                "\\[ = 1 - 4\\cos x + 4\\cos^2 x = 1 - 4\\cos x + 4\\left(\\frac{1+\\cos 2x}{2}\\right) = 3 - 4\\cos x + 2\\cos 2x \\]"
            ],
            [
                "Step 2: Integrate",
                "\\[ = 3x - 4\\sin x + \\sin 2x + C \\]"
            ]
        ]
    ],
    [
        47,
        "\\int (1+\\cot^2 x)\\sec^2 x \\,dx",
        [
            [
                "Step 1: Apply identity \\(1+\\cot^2 x = \\operatorname{cosec}^2 x\\)",
                "\\[ = \\operatorname{cosec}^2 x \\sec^2 x = \\frac{1}{\\sin^2 x \\cos^2 x} = \\frac{4}{\\sin^2 2x} = 4\\operatorname{cosec}^2 2x \\]"
            ],
            [
                "Step 2: Integrate standard cosecant square integral",
                "\\[ = -2\\cot 2x + C \\]"
            ]
        ]
    ],
    [
        48,
        "\\int 2x\\cos 3x \\,dx",
        [
            [
                "Step 1: Integration by Parts",
                "Set \\(u = 2x, dv = \\cos 3x \\, dx \\implies du = 2 \\, dx, v = \\frac{1}{3}\\sin 3x\\)."
            ],
            [
                "Step 2: Apply formula",
                "\\[ = \\frac{2}{3}x\\sin 3x - \\int \\frac{2}{3}\\sin 3x \\, dx = \\frac{2}{3}x\\sin 3x + \\frac{2}{9}\\cos 3x + C \\]"
            ]
        ]
    ],
    [
        49,
        "\\int \\frac{3}{(2+x)(1-x)} \\,dx",
        [
            [
                "Step 1: Partial fraction decomposition",
                "\\[ \\frac{3}{(2+x)(1-x)} = \\frac{A}{2+x} + \\frac{B}{1-x} \\implies A = 1, B = 1 \\]"
            ],
            [
                "Step 2: Integrate logs",
                "\\[ = \\ln|2+x| - \\ln|1-x| + C = \\ln\\left|\\frac{2+x}{1-x}\\right| + C \\]"
            ]
        ]
    ],
    [
        50,
        "\\int 10(3x+1)^4 \\,dx",
        [
            [
                "Step 1: Apply reverse chain rule",
                "\\[ = 10 \\cdot \\frac{(3x+1)^5}{5 \\cdot 3} + C \\]"
            ],
            [
                "Step 2: Simplify fraction",
                "\\[ = \\frac{2}{3}(3x+1)^5 + C \\]"
            ]
        ]
    ]
];
