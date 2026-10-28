# Interactive Mathematics Study Hub Linker

A lightweight, high-performance static HTML/JS web application designed to present step-by-step mathematical problem solutions. Built with **KaTeX** for fast rendering, modern ES Modules for dynamic file discovery, and a **Bi-Directional Memory Engine** for smooth scrolling through large question sets.

---

## 🌟 Key Features

* **Zero-Build Architecture:** Pure static HTML, CSS, and ES Modules. No bundlers or Node.js required.
* **Dynamic Module Discovery:** Scans your working directory automatically for any `.js` data files, sorts them alphanumerically, and hides the `.js` extension for clean navigation tab labels.
* **Compact Tuple Storage:** Uses an optimized array format (`[id, latex, steps]`) to eliminate redundant JSON keys and reduce file size.
* **Bi-Directional Scroll Engine:** Automatically loads upcoming parts into view as you scroll down, unloads off-screen elements to save browser memory, and restores them seamlessly when scrolling back up.
* **Unformatted LaTeX Copying:** Quick "Copy Question" button extracts raw LaTeX expressions directly to your clipboard.
* **Expandable Method Spoilers:** Step-by-step solutions stay hidden until requested.
* **Instant Search:** Jump directly to any question number across all part modules.

---

## 📁 File & Folder Structure

Place `index.html`, your conversion script (`convert.js`), and your JS data files together in the root directory:

```text
my-study-hub/
├── index.html        # Master linker & scroll engine
├── convert.js        # Node.js utility to compress files into tuples
├── README.md         # Documentation
├── 1.js              # Questions 1–50 (or part1.js)
├── 2.js              # Questions 51–100 (or part2.js)
└── ...

```

---

## 📝 Compact Data Format ([id, latex, steps])

To maximize efficiency and eliminate redundant JSON boilerplate, each question module exports a default array of compact array tuples:

* **Question Tuple:** `[id (integer), latex (string), stepsArray]`
* **Step Tuple:** `[title (string), description (string)]`

### JavaScript Data File Example (`1.js` or `part1.js`)

```javascript
export default [
    [
        1,
        "\\int 6(4x+3)^{\\frac{1}{2}} \\, dx",
        [
            ["Step 1: Identify the rule", "This is a linear composite function of the form \\(\\int a(bx+c)^n \\, dx\\)."],
            ["Step 2: Integrate the expression", "\\[ = 6 \\cdot \\frac{(4x+3)^{\\frac{3}{2}}}{\\frac{3}{2} \\cdot 4} + C \\]"],
            ["Step 3: Simplify coefficients", "\\[ = (4x+3)^{\\frac{3}{2}} + C \\]"]
        ]
    ],
    [
        2,
        "\\int \\frac{1}{\\cos^2 x \\tan^2 x} \\, dx",
        [
            ["Step 1: Simplify integrand", "Using \\(\\tan x = \\frac{\\sin x}{\\cos x}\\), the denominator simplifies to \\(\\sin^2 x\\)."],
            ["Step 2: Integrate", "\\[ \\int \\operatorname{cosec}^2 x \\, dx = -\\cot x + C \\]"]
        ]
    ]
];

```

---

## 📋 Data Structure Specifications

Each tuple in the exported default array must satisfy these structural positions and types:

| Index / Position | Data Type | Description |
| --- | --- | --- |
| **`[0]`** | Integer | Unique question number (e.g., `1`, `42`, `105`). |
| **`[1]`** | String | Full raw LaTeX string representing the question, including integral signs and differentials (`\\, dx`, `\\, dt`, etc.). |
| **`[2]`** | Array | List of step tuples `[title, desc]` where both elements are strings supporting KaTeX math syntax. |

---

## 🤖 Giving AI Instructions to Form Questions & Answers

If you want to prompt an AI (such as ChatGPT or Gemini) to generate new question files in the exact compact tuple format required by this application, you can use the following prompt template:

```text
Output in the following format:
export default [
    [
        id (integer),
        "latex string for the problem (remember to escape backslashes like \\int)",
        [
            ["Step Title 1", "Step Description with KaTeX support"],
            ["Step Title 2", "Step Description"]
        ]
    ]
];

e.g.
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
]

Rules:
1. Export a default array (`export default [...]`).
2. Each item must be a 3-element tuple: [id, latexString, stepsArray].
3. Steps must be an array of 2-element tuples: [titleString, descString].
4. Ensure all LaTeX backslashes are properly escaped in JavaScript strings (e.g., use double backslashes like `\\int`, `\\,dx`, `\\frac`).
5. Provide clear, rigorous step-by-step solutions for each integration problem.

```

---

## 🔄 Converting Legacy Files to Tuples

If you have legacy object-based part files, you can automatically convert them to the compact tuple format using the provided Node.js script (`convert.js`):

1. Save the conversion script as `convert.js` in your project folder.
2. Run the command in your terminal:
```bash
node convert.js

```


3. The script will automatically scan, parse, convert, and overwrite your `.js` files into the compressed tuple format.

---

## 🚀 How to Run (Desktop)

Because modern browsers restrict ES Module imports (`import()`) over the `file://` protocol due to CORS policy, run the hub using any simple static web server:

* **Option 1: Python HTTP Server**
```bash
# In your project folder, run:
python -m http.server 8000

```


Then open `http://localhost:8000` in your web browser.
* **Option 2: VS Code Live Server**
Right-click `index.html` inside VS Code and choose **"Open with Live Server"**.

---

## 📱 Hosting and Running on Mobile (Android & iOS)

Because modern mobile browsers enforce strict security rules (`CORS`) on local ES Module imports (`import()`) when opening files directly from device storage, you cannot simply open the HTML file. Instead, you need a lightweight local server app on your phone.

### Android: KSWEB or Termux

* **Option 1: KSWEB (Recommended for full PHP/HTTP server)**
1. Download **KSWEB** from the Google Play Store.
2. Open the app to start its local web server (usually at `http://localhost:8080`).
3. Place your project folder into the `htdocs` directory on your phone storage.
4. Open your phone's browser and go to `http://localhost:8080/your-folder-name/`.


* **Option 2: Termux (For a lightweight Python server)**
1. Install **Termux** from F-Droid or Google Play Store.
2. Run the following commands to set up Python and storage access:
```bash
pkg update && pkg install python
termux-setup-storage

```


3. Navigate to your project folder:
```bash
cd storage/shared/Download/my-study-hub

```


4. Start the server:
```bash
python -m http.server 8000

```


5. Open your mobile browser and go to `http://localhost:8000`.



### iOS (iPhone & iPad): A-Shell

1. Download **A-Shell** from the iOS App Store.
2. Use the iOS **Files app** to create a folder (e.g., `StudyHub`) and place your `index.html` and `.js` files inside it.
3. Open A-Shell and run:
```bash
pickFolder

```


*(Select your `StudyHub` folder from the system prompt to grant read/write access).*
4. Start the local server:
```bash
python3 -m http.server 8000

```


5. Open **Safari**, type `http://localhost:8000`, and your study hub will run with full ES module support!

---

## 🔧 Technical Summary

* **Math Engine:** KaTeX v0.16.8 (via CDN)
* **CSS Styling:** Native CSS variables with responsive layout grids
* **Module Support:** Standard ES6 Modules (`export default`) with dynamic file discovery and cache-busting