module.exports = {
     plugins: [
    require('autoprefixer')({overrideBrowserslist: ['> 0.15% in CN']})// 自动添加css前缀
  ],
    module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
}