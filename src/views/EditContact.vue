
<template>
<div>
  
 <div class="container mt-3">
  <div class="row">
    <div class="col">
      <p class="h3 text-success fw-bold" >Edit Contact</p>
      <p class="fst-italic" >“You can get everything in life you want if you will just help enough other people get what they want.”</p>

    </div>
  </div>
 </div>
 <div class="container mt-3">
  <div class="row">
    <div class="col-md-4">
      <form @submit.prevent="updateSubmit()" >
        <div class="mb-2">
          <input v-model="contact.name" type="text" class="form-control" placeholder="Name">
        </div>
        <div class="mb-2">
          <input v-model="contact.photo" type="text" class="form-control" placeholder="photourl">
        </div>
        <div class="mb-2">
          <input v-model="contact.email" type="email" class="form-control" placeholder="Email">
        </div>
        <div class="mb-2">
          <input v-model="contact.mobile" type="number" class="form-control" placeholder="Mobile">
        </div><div class="mb-2">
          <input v-model="contact.company" type="text" class="form-control" placeholder="Company">
        </div>
        <div class="mb-2">
          <input type="text" v-model="contact.title" class="form-control" placeholder="Title">
        </div>
        <div class="mb-2"  >
         <select v-model="contact.groupId" class="form-control" v-if="groups.length>0">
          <option value=""> Select Group</option>
          <option :value="group.id" v-for="group of groups" :key="group.id" >{{ group.name }}</option>
         </select>
         </div>
         <div class="mb-2">
          <input type="submit" class="btn btn-success" value="Update">
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
import { ContactService } from '../services/ContactService'
  export default{
    name:'EditContact',
    data: function(){
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
      groups:[],
     errorMessage:null,
     contactId: this.$route.params.contactid,
        loading:false,
        
    }
    },
    created :async function(){
      try {
        this.loading=true;
        let response = await ContactService.getcontact(this.contactId);
        this.contact=response.data;
        let groupresponse= await ContactService.getallgroups();
        this.groups =groupresponse.data;
      
        this.loading=false;
      } 
      catch (error) {
        this.errorMessage=error;
        this.loading=false;
      }
    },
    methods : {
      updateSubmit :async function (){
        try {
          let response = await ContactService.UpdateContacts(this.contact, this.contactId);
         
          if(response){
            return this.$router.push('/');
          }else{
            return this.$router.push(`/contacts/edit/${this.contactId}`)
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
