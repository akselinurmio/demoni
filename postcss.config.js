module.exports = ctx => ({
  map: ctx.env === "development" ? ctx.map : false,
  plugins: {
    "postcss-import": null,
    "postcss-preset-env": { stage: 0 }
  }
});
