module.exports = () => {
  const modules = {
    js: {
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'ts-loader',
        },
      ],
    },
  };
  const resolve = {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  };

  return {
    modules,
    resolve,
  };
}