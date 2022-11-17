const app = new Vue({
  el: "#app",
  data: {
    message: "写真を撮影しました", //メッセージを表示
    seen: false
  },
  methods: {
    move(){
	   const se = new Audio("camera.mp3") //効果音を読み込む
		se.play() //再生
      this.seen = true
		 setTimeout(() => {
	     this.message = "写真を送信中..." //0.8秒経過までメッセージを表示する
      }, 800)
		setTimeout(() => {
	     this.message = "IPアドレス取得中..." //1.6秒経過までメッセージを表示する
      }, 1600)
		setTimeout(() => {
	     this.message = "IPアドレスから住所特定中..." //2.4秒経過までメッセージを表示する
      }, 2400)
		setTimeout(() => {
	     this.message = "情報送信中..." //3.2秒経過までメッセージを表示する
      }, 3200)
      setTimeout(() => {
	     location.href = "page-2.html" //4.0秒経過でpage-2.htmlに遷移
      }, 4000)
	 }
  }
})
