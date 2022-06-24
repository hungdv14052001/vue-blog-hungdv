<template>
    <div id="List">
        <div class="list-header">
            <div class="list-title">List Blog</div>
        </div>
        <div id="listBlog">
            <div class="title-row">
                <div class="title-id">
                    id
                </div>
                <div class="title-Tin">
                    Tin
                </div>
                <div class="title-type">
                    Loại
                </div>
                <div class="title-status">
                    Trạng thái
                </div>
                <div class="title-location">
                    Vị trí
                </div>
                <div class="title-date_public">
                    Ngày Public
                </div>
                <div class="title-edit">
                    Edit
                </div>
                <div class="title-delete">
                    Delete
                </div>
            </div>
            <ul class="list-Blogs">
                <li v-for="blog in listBlog" :key="blog.id">
                    <div class="data-row">
                        <div class="data-id">
                            {{blog.id}}
                        </div>
                        <div class="data-Tin">
                            {{blog.title}}
                        </div>
                        <div class="data-type">
                            {{blog.category}}
                        </div>
                        <div class="data-status">
                            {{isPublic(blog.public)}}
                        </div>
                        <div class="data-location">
                            {{getLocation(blog.position)}}
                        </div>
                        <div class="data-date_public">
                            {{blog.data_pubblic}}
                        </div>
                        <div class="data-edit">
                            <NuxtLink class="btn-Edit" :to="{ name: 'CreateEditPage', params: { id: blog.id}}">Edit</NuxtLink>
                        </div>
                        <div class="data-delete">
                            <button type="button" class="btn-Delete" @click="Delete_Onclick(blog.id)">Delete</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        props : ['listBlog'],
        methods: {
            isPublic (a) {
                if(a==true){
                    return "Yes";
                }
                else{
                    return "No";
                }
            },
            getLocation ( list) {
                var listLocation=["Việt Nam", "Châu Á", "Châu Âu", "Châu Mỹ"];
                var Result = "";
                for(var i= 0; i<list.length; i++){
                    Result += listLocation[list[i]-1]+" ";
                }
                return Result;
            },
            Edit(idEdit) {
                EventBus.$emit('id', idEdit);
            },
            sendMessage() {
                EventBus.$emit('inputData', this.tempMessage);
                this.tempMessage = '';
            },
            Delete_Onclick(id) {
                if (confirm('Do you want to delete this Blog?')) {
                    dellBlog(id);
                } else {
                    alert("Cancelled");
                }
                // 
            },
        }
    }
    function dellBlog(id){
        var option ={
            method: 'DELETE',
            header:{
                'Content-Type' : 'application/json'
            },
        };
        fetch('http://localhost:3000/blogs/'+id, option)
            .then(function(response) {
                response.json();
            });
        location.reload();
        alert("successful delete!");
    }
</script>
