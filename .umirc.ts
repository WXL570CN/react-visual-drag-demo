import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/react-visual-drag-demo", component: "index" },
  ],
  npmClient: 'cnpm',
  plugins: [
    "@umijs/plugins/dist/initial-state",
    "@umijs/plugins/dist/model",
    "@umijs/plugins/dist/dva",
  ],
  initialState: {},
  model: {},
  dva: {},
  publicPath: '/react-visual-drag-demo/',
  outputPath: 'react-visual-drag-demo'
});
