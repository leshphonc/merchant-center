/**
 * @author cc
 * @description 公共函数
 */

export default {
  // 传入键名 获取地址栏参数
  getUrlParam(name) {
    const reg = new RegExp(`(^|&)${name}=([^&]*)`)
    const result = window.location.search.substr(1).match(reg)
    if (result !== null) return decodeURIComponent(result[2])
    return ''
  },
  initShareInfo(wx) {
    const shareInfo = {
      title: '分享标题', // 分享标题
      desc: '分享描述', // 分享描述
      link: 'http://m.cs.com/#/index', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: '', // 分享图标
    }
    // 分享给朋友及QQ
    // wx.updateAppMessageShareData(shareInfo)
    // 分享给朋友圈及QQ空间
    // wx.updateTimelineShareData(shareInfo)

    // 分享给朋友（即将废弃 now:2019.6.22）
    wx.onMenuShareAppMessage(shareInfo)
    // 分享到朋友圈（即将废弃 now:2019.6.22）
    wx.onMenuShareTimeline(shareInfo)
    // 分享到QQ（即将废弃 now:2019.6.22）
    wx.onMenuShareQQ(shareInfo)
    // 分享到QQ空间（即将废弃 now:2019.6.22）
    wx.onMenuShareQZone(shareInfo)
  },
}
