<template>
    <div>
        <button :class="$style.hand"> CSS Module을 적용한 버튼 </button>
        <p class="hand" >123123</p>
    </div>
</template>
<script>
    export default{
        creatd(){
            console.log('module'+this.$style);
        }
    }
</script>
<style module>
    .hand{
        cursor: pointer;
        background-color: purple;
        color: yellow;
    }
</style>
<style scoped>
    .hand{
        font-weight: bold;
        width: 400px;
        background-color: green;
    }
</style>