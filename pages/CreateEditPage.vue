<template>
  <div>
    <div>
        <BlogCreateEdit/>
      </div>
  </div>
</template>
<script>
  import BlogCreateEdit from '../components/blog/BlogCreateEdit.Vue';
  export default {
      name: "CreateEditPage",
      components: { 
        BlogCreateEdit,
      },
      async fetch(){
        this.Blogs= await fetch('http://localhost:3000/blogs')
            .then((res)=>res.json());
      },
      data(){
          return{
              currentId: this.$route.params.id,
              Blogs: [],
          };
      },
      methods: {
        /// <summary>
        /// method changeCurrentId(newId) to change currentId of Blog
        /// </summary>
        /// <param name="newId"></param>
        changeCurrentId(newId) {
          this.currentId = newId;
        },
      }
  };
  require('../assets/css/main.css');
</script>
<style>

</style>