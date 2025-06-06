# Vue Component ID Plugin

_A drop-in replacement for the Vue plugin in Vite that adds a unique `data-component-id` to each component—useful for testing, debugging, or custom tooling._

![npm](https://img.shields.io/npm/v/vue-plugin-component-id)

---

## Features

- 🔒 Adds a unique `data-component-id` to the **root** of each Vue component (supports Fragment components too)
- 🧪 Great for **testing**, **debugging**, and **automation**
- 🪄 Works as a drop-in replacement for `@vitejs/plugin-vue`
- 💾 Maintains a stable map of component IDs across builds

---

## Installation

```bash
npm install vue-plugin-component-id --save-dev

# or

yarn add vue-plugin-component-id --dev
```

---

<p align="center">
  <img src="https://raw.githubusercontent.com/architjee/vue-component-id-plugin/main/assets/Screenshot.png" alt="Screenshot of Vue Component ID Plugin in action" style="max-width:700px; width:100%;" />
</p>

---

## Usage

Replace `@vitejs/plugin-vue` in your `vite.config.js` or `vite.config.ts` with `vueWithComponentIds`:

```ts
// vite.config.ts
import { defineConfig } from "vite";
import { vueWithComponentIds } from "vue-plugin-component-id";

export default defineConfig({
  plugins: [vueWithComponentIds()],
});
```

---

## Quick Diff Example

```diff
- import vue from '@vitejs/plugin-vue';
+ import { vueWithComponentIds } from 'vue-plugin-component-id';

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

### Example:

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

- During dev or build, the plugin uses Vue's compiler hooks to inject a `data-component-id="..."` attribute on your component’s root HTML element.
- The ID is a hash derived from the file path and stored in a local JSON file for consistent reuse across builds.

---

## Contributing

We welcome PRs and issues! If you have suggestions, bug reports, or improvements, feel free to open an issue or submit a pull request.

---

## License

MIT License

---
