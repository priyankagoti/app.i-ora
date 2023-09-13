import store from "@/store";

export default {
    mounted() {
        // console.log(this.jsonFile)
    },
    computed:{
        auth_user(){
           return  store.getters["auth/getUser"]
        },
        auth_user_id(){
            if(this.auth_user){
                return this.auth_user.id
            }
        },
        translatedObject(){
            return store.getters['auth/getJsonFile']
        },
        translatedLang:{
            get () {
                return this.$store.getters['auth/getLanguage']
            },
            set (value) {
                if(value){
                    this.$store.commit('auth/SET_LANGUAGE', value)
                }

            }
        }
    },
    methods: {
        fetchTranslation(language) {
            // eslint-disable-next-line no-undef
           axios.get(`translations`,{
               headers:{
                   'Accept-Language': language
               }
           })
                .then(response => {
                    // console.log(response)
                    this.jsonFile = response.data
                    // return response.data.text;
                })
                .catch(error => {
                    console.error(error);
                    return ''; // Return an empty string or handle error as per your requirements
                });
        },
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