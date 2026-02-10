const html = String.raw;
import esbuild from "esbuild";
import sveltePlugin from "esbuild-svelte";
import { mkdir, writeFile } from "node:fs/promises";
import { minify } from "html-minifier-terser";

try {
  const buildResult = await esbuild.build({
    entryPoints: ["src/fi/main.ts", "src/sv/main.ts", "src/en/main.ts"],
    outdir: ".esbuild",
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

  let i = 0;
  const options = ["fi", "sv", "en"];

  await Promise.all(
    options.map((option) => mkdir(`./public/${option}`, { recursive: true })),
  );

  for (const outputFile of buildResult.outputFiles) {
    if (!outputFile.path.endsWith(".js")) continue;
    const locale = options[i];
    if (!locale) break;

    const scriptText = outputFile.text;
    const doc = html`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
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

    await writeFile(`./public/${locale}/index.htm`, collapsed);

    i++;
  }

  if (i !== options.length) {
    throw new Error(
      `Missing build outputs for: ${options.slice(i).join(", ")}`,
    );
  }
} catch (error) {
  console.error(error);
  process.exitCode = 1;
}
