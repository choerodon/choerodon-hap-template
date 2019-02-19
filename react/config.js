const config = {
  port: 2233,
  /**
   * 前后端都在本地开发：
   * 本地后端8080端口启动时，无需配置proxyTarget；
   * 本地后端不是8080端口启动，需配置proxyTarget，如localhost:8088
   *
   * 只在本地进行前端开发：
   * 可配置proxyTarget为远程服务器地址，如http://hap4.staging.saas.hand-china.com
   */
  // proxyTarget: 'http://hap4.staging.saas.hand-china.com',
};

module.exports = config;
