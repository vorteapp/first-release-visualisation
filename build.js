const html = String.raw;
import esbuild from "esbuild";
import sveltePlugin from "esbuild-svelte";
import { writeFile } from "fs/promises";
import { minify } from "html-minifier-terser";

try {
  const buildResult = await esbuild.build({
    entryPoints: ["src/main.ts"],
    bundle: true,
    format: "esm",
    target: "es2022",
    treeShaking: true,

    minify: true,
    mainFields: ["svelte", "browser", "module", "main"],
    conditions: ["svelte", "browser"],
    write: false,

    plugins: [
      sveltePlugin({
        compilerOptions: {
          dev: false,
          runes: true,
          css: "injected",
        },
      }),
    ],

    loader: { ".ts": "ts" },
  });

  const scriptText = buildResult.outputFiles[0].text;

  const doc = html`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>first-release-visualisation</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script type="module">
          ${scriptText};
        </script>
      </head>
      <body></body>
    </html>
  `;

  const min = await minify(doc, { collapseWhitespace: true });

  const collapsed = min.replace(/[\r\n]+/g, "");

  await writeFile("./public/index.html", collapsed);
} catch {}
