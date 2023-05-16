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
    },
    methods: {
        padNumber(value) {
            // if(value){
            return value.toString().padStart(2, '0');
            // }

        },
        validateTime(value) {
            if (value > 59) {
                value = 59;
            }
            return value
        },
        validateHours(value) {
            if (value >= 24) {
                value = 0;
            }
            return value
        },
    }
}