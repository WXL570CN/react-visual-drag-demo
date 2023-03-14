import { defineConfig } from "umi";

export default defineConfig({
  routes: [{ path: "/", component: "index" }],

  npmClient: "cnpm",
  plugins: [
    "@umijs/plugins/dist/initial-state",
    "@umijs/plugins/dist/model",
    "@umijs/plugins/dist/dva",
  ],
  initialState: {},
  model: {},
  dva: {},
});
