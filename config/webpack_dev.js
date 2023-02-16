module.exports = {
  mode: 'development',
  devServer: {
    /**
     * 如果引入了自己编写的文件 需要设置
     * 比如根目录下新建conteng/demo.js
     * 根目录下index.html 引入demo.js
     * 如果这里不加content，是引入不到的
     * public是默认的
     */
    static: ['punlic', 'content'],
    compress: true,
    open: true,
    historyApiFallback: true
  }
}
