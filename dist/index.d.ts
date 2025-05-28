import type { Options as VuePluginOptions, Api } from '@vitejs/plugin-vue';
export interface ComponentIdOptions {
    idMapPath?: string;
    vueOptions?: VuePluginOptions;
}
export declare function vueWithComponentIds(options?: ComponentIdOptions): import('vite').Plugin<Api>;
