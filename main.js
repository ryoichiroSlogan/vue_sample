var app = new Vue({
  el: '#app',
  data: {
    message: "hello vue.js",
    list: ["mimi", "tete", "sisi"]
  },
  methods: {
    handleClick: function(event){
      console.log(event)
      alert(event.target)
    },
  }
})