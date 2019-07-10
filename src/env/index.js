const envList = {
  dev: {
    baseUrl: '10.1.3.1',
  },
  test: {
    baseUrl: '1.3.3.3',
  },
  prod: {
    domain: '',
    baseUrl: '1.2.2.3',
  },
}
// 每次手动修改变量
let currentEnv = 'dev'

// 根据浏览器地址动态获取
const params = {
  'dev-m.51purse.com': 'dev',
  'test-m.51purse.com': 'test',
  'prod-m.51purse.com': 'prod',
}

currentEnv = params[window.location.hostname]

export default envList[currentEnv]
