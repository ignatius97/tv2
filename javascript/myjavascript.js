
new Vue({
    el:"#app",
    data:{
        greetin:"hello world",
        content:"hi there this is ignatius",
        message:"my menu data here",
        signal:false,

    },
    methods:{
        greet:function(){
            console.log('hello');
        },
        toggle:function(){
            this.signal=!this.signal

        }
    }
});