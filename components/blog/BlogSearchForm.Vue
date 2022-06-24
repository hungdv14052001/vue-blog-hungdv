
<template>
    <div id="Search">
        <div class="list-header">
            <div class="list-title">Search Blogs</div>
        </div>
        <div class="input-search-contairner">
            <label class="lb-search">Title: </label>
            <input id="txtKeySearch" class= "input-search" type="text" placeholder="Search" v-model="key">
        </div>
        <div class="button-search-contairner">
            <button class="btnSearch" @click="KeySearch">Search</button>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
          return{
              key:'',
          };
        },
        methods: {
            KeySearch() {
                this.$emit('newKeySearch', this.key);
            },
        }
    }
</script>