Here’s the updated README with your introduction and cleaned-up formatting:

---

# Vue Component ID Plugin

_A drop-in replacement for the Vue plugin in Vite that adds a unique `data-component-id` to each component—useful for testing, debugging, or custom tooling._

## Features

- 🔒 Adds a unique `data-component-id` to the **root** of each Vue component
- 🧪 Great for **testing**, **debugging**, and **automation**
- 🪄 Works as a drop-in replacement for `@vitejs/plugin-vue`
- 💾 Maintains a stable map of component IDs across builds

---

## Installation

```bash
npm install vue-component-id-plugin --save-dev
# or
yarn add vue-component-id-plugin --dev
```

---

## Usage

Replace `@vitejs/plugin-vue` in your `vite.config.js` or `vite.config.ts` with `vueWithComponentIds`:

```ts
// vite.config.ts
import { defineConfig } from "vite";
import { vueWithComponentIds } from "vue-component-id-plugin";

export default defineConfig({
  plugins: [vueWithComponentIds()],
});
```

---

## Quick Diff Example

```diff
- import vue from '@vitejs/plugin-vue';
+ import { vueWithComponentIds } from 'vue-component-id-plugin';

export default defineConfig({
  plugins: [
-   vue(),
+   vueWithComponentIds(),
  ],
});
```

---

## Options

```ts
export interface ComponentIdOptions {
  /**
   * Path to the JSON file that maps component file paths to generated IDs.
   * Default: './component-id-map.json'
   */
  idMapPath?: string;

  /**
   * Pass-through options to the underlying @vitejs/plugin-vue plugin.
   */
  vueOptions?: VuePluginOptions;
}
```

Example:

```ts
vueWithComponentIds({
  idMapPath: "./my-component-ids.json",
  vueOptions: {
    reactivityTransform: true,
  },
});
```

---

## How it Works

- During build or dev, the plugin uses Vue's compiler hooks to inject a `data-component-id="..."` attribute on your component’s root HTML element.
- The ID is based on a hash of the file path and saved in a local JSON file to ensure consistency across builds.

---

## Contributing

We welcome PRs and issues! If you have suggestions, bug reports, or improvements, feel free to open an issue or submit a pull request.

---

## License

MIT License

---

Let me know if you want a badge (e.g., `npm version`, `MIT`, `made with vite`) or a usage GIF for the top.
