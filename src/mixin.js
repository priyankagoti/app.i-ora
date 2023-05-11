import store from "@/store";

export default {
    computed:{
        auth_user(){
           return  store.getters["auth/getUser"]
        },
        auth_user_id(){
            if(this.auth_user){
                return this.auth_user.id
            }
        }
    }
}