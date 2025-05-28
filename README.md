# Vue Component ID Plugin

A Vite plugin for Vue 3 that automatically adds a unique `data-component-id` attribute to your components during compilation.

## Features

- Automatically generates a unique ID for each Vue component based on its file path.
- Adds a `data-component-id` attribute to the root element of each component.
- Useful for testing, debugging, and styling specific component instances.

## Installation

Install the plugin using npm or yarn:

```bash
npm install vue-component-id-plugin --save-dev
# or
yarn add vue-component-id-plugin --dev
```

## Usage

Add the plugin to your `vite.config.js` or `vite.config.ts` file. This plugin acts as a drop-in replacement for `@vitejs/plugin-vue` and includes its functionality, so you only need to include `vueWithComponentIds()` in your plugins array.

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import { vueWithComponentIds } from 'vue-component-id-plugin';

export default defineConfig({
  plugins: [
    vueWithComponentIds()
  ],
});
```

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import { vueWithComponentIds } from 'vue-component-id-plugin';

export default defineConfig({
  plugins: [
    vueWithComponentIds()
  ],
});
```

## Comparison with `@vitejs/plugin-vue`

Here's a simple comparison showing how to replace `@vitejs/plugin-vue` with `vueWithComponentIds` in your `vite.config.ts`:

```diff
--- a/vite.config.ts
+++ b/vite.config.ts
@@ -1,7 +1,6 @@
 import { defineConfig } from 'vite';
-import vue from '@vitejs/plugin-vue';
+import { vueWithComponentIds } from 'vue-component-id-plugin';
 
 export default defineConfig({
   plugins: [
-    vue(),
+    vueWithComponentIds(),
   ],
 });
```

## Options

You can pass an options object to the `vueWithComponentIds` function:

```typescript
export interface ComponentIdOptions {
  /**
   * Path to the JSON file where component IDs will be mapped to file paths.
   * Defaults to './component-id-map.json'.
   */
  idMapPath?: string;
  /**
   * Options to pass to the @vitejs/plugin-vue plugin.
   */
  vueOptions?: VuePluginOptions;
}
```

Example with options:

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import { vueWithComponentIds } from 'vue-component-id-plugin';

export default defineConfig({
  plugins: [
    vueWithComponentIds({
      idMapPath: './my-component-ids.json',
      vueOptions: { /* options to pass directly to @vitejs/plugin-vue */ }
    }),
  ],
});
```

**Note:** Do not include both `vueWithComponentIds()` and `@vitejs/plugin-vue` in your plugins array—`vueWithComponentIds()` already includes all functionality of `@vitejs/plugin-vue`.

## How it works

The plugin hooks into the Vue compiler and adds a `data-component-id` attribute to the root element of each component template. The ID is generated based on the relative path of the component file from the project root and is stored in a JSON file (`component-id-map.json` by default) to maintain consistent IDs across builds.

## Contributing

Feel free to open issues or pull requests if you have suggestions or find bugs.

## License

[Specify your license here, e.g., MIT License]