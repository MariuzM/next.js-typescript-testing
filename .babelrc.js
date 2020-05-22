module.exports = {
  presets: ['next/babel', '@emotion/babel-preset-css-prop'],
  plugins: [
    [
      'emotion',
      {
        sourceMap: false,
        autoLabel: true,
        labelFormat: '-',
        cssPropOptimization: true,
      },
    ],
  ],
}
