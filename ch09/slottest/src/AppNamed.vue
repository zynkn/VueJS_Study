<template>
    <div id="app">
        <layout>
            <h1 slot="header">헤더 영역</h1>
            <div slot="sidebar">
                <ul class="menu">
                    <li v-for="sidebar in sidebars">
                        <a v-bind:href="sidebar.link"> {{sidebar.menu}}</a>
                    </li>
                </ul>
            </div>
            <div slot="content">
                <h2>컨텐츠 영역</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem non, nesciunt voluptates asperiores consequuntur debitis beatae tempore, laboriosam ex dicta facilis possimus. Accusamus, iure illo aperiam aliquid autem quos recusandae!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem non, nesciunt voluptates asperiores consequuntur debitis beatae tempore, laboriosam ex dicta facilis possimus. Accusamus, iure illo aperiam aliquid autem quos recusandae!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem non, nesciunt voluptates asperiores consequuntur debitis beatae tempore, laboriosam ex dicta facilis possimus. Accusamus, iure illo aperiam aliquid autem quos recusandae!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem non, nesciunt voluptates asperiores consequuntur debitis beatae tempore, laboriosam ex dicta facilis possimus. Accusamus, iure illo aperiam aliquid autem quos recusandae!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem non, nesciunt voluptates asperiores consequuntur debitis beatae tempore, laboriosam ex dicta facilis possimus. Accusamus, iure illo aperiam aliquid autem quos recusandae!</p>
            </div>
            <p slot="footer">Footer Text</p>
            <p>aasdfasdfasd</p>
        </layout>
    </div>
</template>
<script>
    import Layout from './components/NamedSlot.vue';
    
    export default{
        data(){
            return {
                sidebars: [
                    {menu: 'Home', link: '#'},
                    {menu: 'About', link: '#'},
                    {menu: 'Contact', link:'#'},
                    {menu: 'Vue.js', link:' #'}
                ]
            }
        },
        components: { Layout }
    }
</script>
<style scoped>
    ul.menu{
        position: relative;
        padding: 5px;
        list-style: none;
        font-style: italic;
    }
    ul.menu a{
        text-decoration: none;
    }

</style>