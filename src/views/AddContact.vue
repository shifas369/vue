<template>
<div>
  
 <div class="container mt-3">
  <div class="row">
    <div class="col">
      <p class="h3 text-success fw-bold" >Add Contact</p>
      <p class="fst-italic" >“Contact is the lifeblood of growth, means for changing oneself, and one's experience of the world.”</p>

    </div>
  </div>
 </div>
 
 <div class="container mt-3">
  <div class="row">
    <div class="col-md-4">
      <form @submit.prevent=SubmitCreate()>
        <div class="mb-2">
          <input v-model="contact.name" type="text"  class="form-control" placeholder="Name">
        </div>
        <div class="mb-2">
          <input type="text" v-model="contact.photo" class="form-control" placeholder="photourl">
        </div>
        <div class="mb-2">
          <input type="text" v-model="contact.email" class="form-control" placeholder="Email">
        </div>
        <div class="mb-2">
          <input type="number " v-model="contact.mobile" class="form-control" placeholder="Mobile">
        </div>
        <div class="mb-2">
          <input type="text" v-model="contact.company" class="form-control" placeholder="Company">
        </div>
        <div class="mb-2">
          <input type="text" v-model="contact.title" class="form-control" placeholder="Title">
        </div>
        <div class="mb-2">
         <select v-model="contact.groupId" class="form-control" v-if="groups.length >  0">
          <option value=""> Select Group</option>
          <option :value="group.id" v-for="group of groups" :key="group.id">{{group.name}}</option>
         </select>
         </div>
         <div class="mb-2">
          <input type="submit" class="btn btn-success" value="Create">
        </div> 
     
 </form>
    </div>

<div class="col-md-4">
        <img :src="contact.photo" alt="" class="contact-imgs">
      </div>
  </div>

 </div>
 </div> 
</template>


<script>
import {ContactService} from '../services/ContactService'
  export default{
    name:'AddContact',
    data:function(){
      return{
        contact:{
        name: '',
        company: '',
        email:'',
        title: '',
        mobile: '',
       photo:'',
       groupId:'',
      },
      groups:[]
      }
    },
    created :async function(){
      try {
        let response =await ContactService.getallgroups();
        this.groups=response.data
        
      } catch (error) {

        console.log(error)
      }
    },
    methods:{
      SubmitCreate: async function (){
        try {
          let response = await ContactService.CreateContacts(this.contact);
         
          if(response){
            return this.$router.push('/');
          }else{
            return this.$router.push('/contacts/add')
          }
        } catch (error) {
          console.log(error)
          
        }
      }
    }
  }
  

</script>


<style>

 
</style>
