/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  // The Dockerfile's runtime stage copies .next/standalone; without this the
  // image build fails at that COPY.
  output: "standalone",
};

export default config;
