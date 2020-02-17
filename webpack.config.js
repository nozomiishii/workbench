const path = require('path');


module.exports = {
  mode: 'development',

  entry: './src/script1.js', 
  
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  }

}
