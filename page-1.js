const app = new Vue({
  el: "#app",
  data: {
    message: "写真を撮影しました"
    seen: false
  },
  methods: {
    move(){
	   const se = new Audio("camera.mp3")
		se.play() //再生
      this.seen = true
		 setTimeout(() => {
	     this.message = "写真を送信中..."
      }, 800)
		setTimeout(() => {
	     this.message = "IPアドレス取得中..."
		setTimeout(() => {
	     this.message = "IPアドレスから住所特定中..."
      }, 2400)
		setTimeout(() => {
	     this.message = "情報送信中..."
      }, 3200)
      setTimeout(() => {
	     location.href = "page-2.html"
      }, 4000)
	 }
  }
})
