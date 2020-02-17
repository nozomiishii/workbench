const path = require('path');


module.exports = {
  mode: 'development',

  entry: './src/script1.js', 
  
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  
  module: {
    rules:[
      {
        test: /\.js$/,
        exclude:/(node_modules)/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
