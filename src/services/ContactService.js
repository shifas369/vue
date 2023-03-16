import axios from "axios"


export class ContactService{
    static serverUrl =`http://localhost:9000`;

 static getAllcontacts(){
    let dataUrl =`${this.serverUrl}/contacts/`
    return axios.get(dataUrl)
 }
 static getcontact(contactId){
    let dataUrl =`${this.serverUrl}/contacts/${contactId}`
    return axios.get(dataUrl)
 }
 static CreateContacts(contact){
    let dataUrl =`${this.serverUrl}/contacts`
    return axios.post(dataUrl,contact)
 }
 static UpdateContacts(contact,contactId){
    let dataUrl =`${this.serverUrl}/contacts/${contactId}`
    return axios.put(dataUrl,contact)
 }
 static DeleteContacts(contactId){
    let dataUrl =`${this.serverUrl}/contacts/${contactId}`
    return axios.delete(dataUrl,contactId)
 }
 static getallgroups(){
    let dataUrl =`${this.serverUrl}/groups/`
    return axios.get(dataUrl )
 }
 static getgroup(contact){
    let groupId = contact.groupId;
    let dataUrl =`${this.serverUrl}/groups/${groupId}`
    return axios.get(dataUrl  )
 }

}