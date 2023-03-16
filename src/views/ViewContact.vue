<template>
<div>
<div class="container mt-3">
  <div class="row">
    <div class="col">
      <p class="h3 text-success fw-bold" >View Contact</p>
      <p class="fst-italic" >“Show up, show up, show up, and after a while the muse shows up, too.”</p>
    </div>
    </div>
 </div>   <!-- spinner -->
<div v-if="loading">
 <div class="container">
  <div class="row">
    <div class="col">
      <SpinnerLoad/>



    </div>
  </div>
 </div>
</div>
<!-- error messages -->
<div v-if="!loading && errorMessage ">

<div class="container">
  <div class="row">
    <div class="col">
  <p class="h3 text-danger fw-bold" >{{errorMessage}}</p>
    </div>
  </div>
 </div>
</div>
 
 <div class="container mt-3" v-if="!loading && isDone()">
  <div class="row text-align-center">
    <div class="col-md-4">
  <img :src="contact.photo" alt=" " class="contact-imgs">
    </div>
 

    <div class="col-md-6 mr-3">
      <ul class="list-group">
                <li class="list-group-item">Name: <span class="fw-bold">{{contact.name}}</span></li>
                <li class="list-group-item">Email: <span class="fw-bold">{{contact.email}}</span></li>
                <li class="list-group-item">Mobile No: <span class="fw-bold">{{contact.mobile}}</span></li>
                <li class="list-group-item">Company: <span class="fw-bold">{{contact.company}}</span></li>
                <li class="list-group-item">Title: <span class="fw-bold">{{contact.title}}</span></li>
                <li class="list-group-item">Group: <span class="fw-bold">{{group.name}}</span></li>
</ul>

    </div>

  </div>
  <div class="row mt-5">
  <div class="col">
    <router-link to="/" class="btn btn-success "> <i class="fa fa-arrow-alt-circle-left "></i> Back</router-link>
  </div>
 </div>
 </div>

 </div>
 
</template>


<script>

import { ContactService } from '../services/ContactService';
import SpinnerLoad from '../components/SpinnerLoad';

  export default{
    name:'ViewContact',
    components: { SpinnerLoad },
    data: function (){
        return{
          contactId : this.$route.params.contactid,
          loading: false,
          contact : {},
          errorMessage:null,
          group:{},

        }
    },
    created : async function(){
            try {
              this.loading = true;
              let response = await ContactService.getcontact(this.contactId);
              let groupresponse =await ContactService.getgroup(response.data);
              this.group=groupresponse.data;
              this.contact = response.data
              this.loading = false;
            }
             catch (error) {
              this.errorMessage=error
             this.loading=false
            }
    },
    methods :{
      isDone : function(){
        return Object.keys(this.contact).length>0 && Object.keys(this.group).length>0;
          
      }
    }
  }
</script>


<style>

 
</style>
