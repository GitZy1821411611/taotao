// miniprogram/pages/index/index.js
const {
  api
} = require("../../config/config.js")
wx.request({
  url: '',
  data: '',
  header: {},
  method: 'GET',
  dataType: 'json',
  responseType: 'text',
  success: function(res) {},
  fail: function(res) {},
  complete: function(res) {},
})
console.log(api)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [{
        url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg'
      },
      {
        url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg'
      },
      {
        url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg'
      },
      {
        url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getMovie();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  getMovie: function() {
    wx.request({
      url: api + "Showtime/LocationMovies.api?locationId=290",
      method: "get",
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {

      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})