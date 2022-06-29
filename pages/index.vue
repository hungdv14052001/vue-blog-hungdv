<template>
  <div>
    <BlogList :listBlog = "listBlog"></BlogList>
  </div>
</template>
<script>
  import AppHeader from '../components/AppHeader.vue';
  import AppFooter from '../components/AppFooter.vue';
  import AppMenu from '../components/AppMenu.vue';
  import BlogList from '../components/blog/BlogList.Vue';
  import BlogCreateEdit from '../components/blog/BlogCreateEdit.Vue';
  import BlogSearchForm from '../components/blog/BlogSearchForm.Vue';

  export default {
      name: "IndexPage",
      components: { 
        AppHeader,
        AppMenu,
        AppFooter,
        BlogList,
        BlogCreateEdit,
        BlogSearchForm,
      },
      async fetch(){
        this.listBlog= await fetch('http://localhost:3000/blogs')
            .then((res)=>res.json());
      },
      data(){
          return{
            currentId: 0,
            listBlog: [],
          };
      },
  };
  require('../assets/css/main.css');
</script>
<style>

</style>


