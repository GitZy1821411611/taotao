// miniprogram/pages/index/index.js
const {
  api
} = require("../../config/config.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
    locationId: "290"
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
    wx.showLoading({
      title:"加载中"
    })
    var self = this;
    wx.request({
      url: api + "Showtime/LocationMovies.api?locationId=" + this.data.locationId,
      method: "get",
      success: function(res) {
        wx.hideLoading()
        self.setData({
          movies: res.data.ms
        })
        console.log(self.data.movies)
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