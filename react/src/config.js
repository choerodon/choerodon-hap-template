const config = {
  /**
   * 前后端都在本地开发：
   * 本地后端8080端口启动时，无需配置proxyTarget；
   * 本地后端不是8080端口启动，需配置proxyTarget，如localhost:8088
   *
   * 只在本地进行前端开发：
   * 可配置proxyTarget为远程服务器地址，如http://localhost:8080
   */
  // proxyTarget: 'http://localhost:8080',
  master: '@choerodon/pro-master',
  projectType: 'hap',
  buildType: 'single',
  resourcesLevel: ['site', 'user'],
  modules: [
    '../target/generate-react/choerodon-fnd-util',
    '../target/generate-react/hap-attachment',
    '../target/generate-react/hap-core',
    '../target/generate-react/hap-gateway',
    '../target/generate-react/hap-interface',
    '../target/generate-react/hap-job',
    '../target/generate-react/hap-mail',
    '../target/generate-react/hap-oauth2',
    '../target/generate-react/hap-report',
    '../target/generate-react/hap-task',
    '../target/generate-react/hap-workflow',
  ],
};

module.exports = config;

