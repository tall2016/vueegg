<!--  -->
<template>
<div class='testconponent'>
    <div>{{movie}}4535235</div>
    <button @click="test($event)" data-ssf="999999999">fs</button>
</div>
</template>

<script>


export default {
    name: 'testConponent',
    props:{
        movie:{
            type:String,
            required:true
        }
       
    },
components: {},
data() {
return {
    fs:'打防辐射',
   

};
},
computed: {},
watch: {},
methods: {
    test(e, t) {    
        console.log(e,t)
        this.$emit('test',{'fsd':23,'fsdf':33})
    }
},
created() {

},
mounted() {

},
beforeCreate() {},
beforeMount() {}, 
beforeUpdate() {}, 
updated() {}, 
beforeDestroy() {}, 
destroyed() {}, 
activated() {}, 
}
</script>
<style lang='less' scoped>

</style>