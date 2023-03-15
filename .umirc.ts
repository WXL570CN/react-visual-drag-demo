import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/react-visual-drag-demo", component: "index" },
  ],
  npmClient: 'cnpm',
  plugins: [
    '@umijs/plugins/dist/initial-state',
    '@umijs/plugins/dist/model',
  ],
  initialState: {},
  model: {},
  publicPath: '/react-visual-drag-demo/',
});
