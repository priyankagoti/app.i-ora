<template>
  <div class="p-5 bg-white rounded-[20px]">
    <div class="flex items-center justify-between mb-5">
      <h4 class="text-xl font-bold">{{translatedObject.allTaskTitle}}</h4>
      <button class="btn btn-light-sky" @click="$event => toggleAddTaskModal(true)">
        <svg
            class="mr-3"
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.875 5.375H6.125V1.625C6.125 1.27938 5.845 1 5.5 1C5.155 1 4.875 1.27938 4.875 1.625V5.375H1.125C0.78 5.375 0.5 5.65438 0.5 6C0.5 6.34562 0.78 6.625 1.125 6.625H4.875V10.375C4.875 10.7206 5.155 11 5.5 11C5.845 11 6.125 10.7206 6.125 10.375V6.625H9.875C10.22 6.625 10.5 6.34562 10.5 6C10.5 5.65438 10.22 5.375 9.875 5.375"
              fill="black"
          />
          <path
              d="M9.875 5.375H6.125V1.625C6.125 1.27938 5.845 1 5.5 1C5.155 1 4.875 1.27938 4.875 1.625V5.375H1.125C0.78 5.375 0.5 5.65438 0.5 6C0.5 6.34562 0.78 6.625 1.125 6.625H4.875V10.375C4.875 10.7206 5.155 11 5.5 11C5.845 11 6.125 10.7206 6.125 10.375V6.625H9.875C10.22 6.625 10.5 6.34562 10.5 6C10.5 5.65438 10.22 5.375 9.875 5.375"
              stroke="black"
          />
        </svg>
        <span>{{translatedObject.addTaskBtn}}</span>
      </button>
    </div>
    <div class="relative mb-5">
      <input
          type="text"
          v-model="search_task"
          :placeholder="translatedObject.taskSearchbar"
          @input="fetchTask"
          class="w-full text-xs py-4 pl-5 pr-20 bg-[#E7F2F8] rounded-full"
      />
      <button
          class="w-10 h-10 flex items-center justify-center absolute top-1 right-1 bg-white rounded-full"
      >
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
          <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.161 12.622C9.99752 13.4847 8.55708 13.9949 6.99747 13.9949C3.13289 13.9949 0 10.8621 0 6.99747C0 3.13286 3.13286 0 6.99747 0C10.8621 0 13.9949 3.13282 13.9949 6.99743C13.9949 8.56773 13.4777 10.0172 12.6043 11.1848L15.7043 14.2848L15.7101 14.2906C16.0989 14.6826 16.0963 15.3155 15.7043 15.7043C15.6109 15.7969 15.5001 15.8702 15.3783 15.92C15.2565 15.9697 15.1261 15.995 14.9946 15.9942C14.863 15.995 14.7326 15.9697 14.6108 15.92C14.489 15.8702 14.3782 15.7969 14.2848 15.7043L11.161 12.622ZM10.4376 10.6234C9.5415 11.4739 8.33042 11.9956 6.99747 11.9956C4.23703 11.9956 1.99929 9.7579 1.99929 6.99747C1.99929 4.23703 4.23707 1.99929 6.99747 1.99929C9.7579 1.99929 11.9956 4.23703 11.9956 6.99747C11.9956 8.34088 11.4656 9.56049 10.6033 10.4586C10.5677 10.4868 10.5336 10.5176 10.5012 10.5512C10.4787 10.5745 10.4575 10.5986 10.4376 10.6234Z"
              fill="#74BDCB"
          />
        </svg>
      </button>
    </div>
    <div
        v-for="(task,index) in tasks"
        :key="task.id"
        class="flex items-center py-2 justify-between border-[body]"
        :class="tasks.length-1!==index && 'border-b-2'"
    >
      <p class="text-sm">{{index+1}}. {{task.name}}</p>
      <div class="flex">
        <button class="p-2 mr-2" @click="fetchSingleTask(task)">
          <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M6.35674 2.32816L0.613909 8.07099C0.402294 8.283 0.268554 8.56031 0.234403 8.85791L0.00558271 10.8671C-0.0093331 11.0083 0.00572183 11.1512 0.0497644 11.2863C0.0938069 11.4213 0.165846 11.5456 0.261178 11.6509C0.35651 11.7563 0.47299 11.8403 0.603011 11.8976C0.733032 11.9548 0.87367 11.984 1.01574 11.9833H1.13294L3.14209 11.7544C3.4385 11.7201 3.71521 11.5887 3.92901 11.3805L9.67184 5.6321L6.35674 2.32816ZM11.614 1.84262L10.1574 0.385983C10.0355 0.263644 9.89071 0.16657 9.73125 0.100334C9.57179 0.0340967 9.40082 0 9.22815 0C9.05548 0 8.88451 0.0340967 8.72504 0.100334C8.56558 0.16657 8.42077 0.263644 8.29892 0.385983L6.94832 1.73658L10.2634 5.05168L11.614 3.70108C11.7364 3.57923 11.8334 3.43442 11.8997 3.27496C11.9659 3.11549 12 2.94452 12 2.77185C12 2.59918 11.9659 2.42821 11.8997 2.26875C11.8334 2.10928 11.7364 1.96447 11.614 1.84262Z"
                fill="#15C787"
            />
          </svg>
        </button>
        <button class="p-2" @click="$event => {toggleConfDeleteTask(true),this.taskDeletingID=task.id}">
          <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M11.4 1.8H0.6C0.44087 1.8 0.288258 1.86321 0.175736 1.97574C0.0632141 2.08826 0 2.24087 0 2.4C0 2.55913 0.0632141 2.71174 0.175736 2.82426C0.288258 2.93679 0.44087 3 0.6 3H1.8V10.2C1.8 10.6774 1.98964 11.1352 2.32721 11.4728C2.66477 11.8104 3.12261 12 3.6 12H8.4C8.87739 12 9.33523 11.8104 9.67279 11.4728C10.0104 11.1352 10.2 10.6774 10.2 10.2V3H11.4C11.5591 3 11.7117 2.93679 11.8243 2.82426C11.9368 2.71174 12 2.55913 12 2.4C12 2.24087 11.9368 2.08826 11.8243 1.97574C11.7117 1.86321 11.5591 1.8 11.4 1.8ZM5.4 8.4C5.4 8.55913 5.33679 8.71174 5.22426 8.82426C5.11174 8.93679 4.95913 9 4.8 9C4.64087 9 4.48826 8.93679 4.37574 8.82426C4.26321 8.71174 4.2 8.55913 4.2 8.4V5.4C4.2 5.24087 4.26321 5.08826 4.37574 4.97574C4.48826 4.86321 4.64087 4.8 4.8 4.8C4.95913 4.8 5.11174 4.86321 5.22426 4.97574C5.33679 5.08826 5.4 5.24087 5.4 5.4V8.4ZM7.8 8.4C7.8 8.55913 7.73679 8.71174 7.62426 8.82426C7.51174 8.93679 7.35913 9 7.2 9C7.04087 9 6.88826 8.93679 6.77574 8.82426C6.66321 8.71174 6.6 8.55913 6.6 8.4V5.4C6.6 5.24087 6.66321 5.08826 6.77574 4.97574C6.88826 4.86321 7.04087 4.8 7.2 4.8C7.35913 4.8 7.51174 4.86321 7.62426 4.97574C7.73679 5.08826 7.8 5.24087 7.8 5.4V8.4ZM4.8 1.2H7.2C7.35913 1.2 7.51174 1.13679 7.62426 1.02426C7.73679 0.911742 7.8 0.75913 7.8 0.6C7.8 0.44087 7.73679 0.288258 7.62426 0.175736C7.51174 0.0632141 7.35913 0 7.2 0H4.8C4.64087 0 4.48826 0.0632141 4.37574 0.175736C4.26321 0.288258 4.2 0.44087 4.2 0.6C4.2 0.75913 4.26321 0.911742 4.37574 1.02426C4.48826 1.13679 4.64087 1.2 4.8 1.2Z"
                fill="#FFA384"
            />
          </svg>
        </button>
      </div>
      <ConfirmationModal
          :isOpenModal="isConfDeleteTask"
          title="Do you really want to delete the Task?"
          text="Please enter “Delete”"
          :closeModal="$event => toggleConfDeleteTask(false)"
          btnText="Delete"
          :SubmitModal="deleteTask"
      />
    </div>
    <TransitionRoot appear :show="isAddTaskModalOpen" as="template">
      <Dialog as="div" @close="$event => toggleAddTaskModal(false)" class="relative z-30">
        <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25"></div>
        </TransitionChild>
        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
            >
              <DialogPanel class="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div class="flex items-center justify-between mb-5 pb-5 border-b border-body">
                  <DialogTitle as="h3" class="text-xl font-bold text-black">{{ isTaskEditing ? 'Edit Tasks' :translatedObject.addTaskBtn }}</DialogTitle>
                  <button @click="$event => toggleAddTaskModal(false)" class="w-7 h-7 bg-body rounded-md flex items-center justify-center">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.42079 6.08931L11.7176 1.73259C12.1089 1.33579 12.1089 0.694406 11.7176 0.297603C11.3262 -0.0992008 10.6937 -0.0992008 10.3023 0.297603L6.00555 4.65432L1.70876 0.297603C1.31741 -0.0992008 0.684854 -0.0992008 0.293509 0.297603C-0.0978363 0.694406 -0.0978363 1.33579 0.293509 1.73259L4.5903 6.08931L0.293509 10.446C-0.0978363 10.8428 -0.0978363 11.4842 0.293509 11.881C0.488681 12.0789 0.744907 12.1784 1.00113 12.1784C1.25736 12.1784 1.51358 12.0789 1.70876 11.881L6.00555 7.52429L10.3023 11.881C10.4975 12.0789 10.7537 12.1784 11.01 12.1784C11.2662 12.1784 11.5224 12.0789 11.7176 11.881C12.1089 11.4842 12.1089 10.8428 11.7176 10.446L7.42079 6.08931Z"
                          fill="#18203A"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <label class="label" for="Address">{{translatedObject.taskLabel}} </label>
                  <input
                      type="text"
                      id="Task"
                      v-model="task.name"
                      :placeholder="translatedObject.enterTask"
                      class="input"
                  />
                </div>
                <div class="mt-5 flex justify-end">
                  <button type="button" class="btn btn-light-sky mr-5" @click="$event => {toggleAddTaskModal(false), this.task={}}">{{translatedObject.cancelBtn}}</button>
                  <button type="button" class="btn btn-sky" @click="isTaskEditing?editTask():addTask()">
                    <SpinnerComponent v-if="loading"/>
                    {{translatedObject.saveBtn}}</button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
<script>
import axios from "axios";
import {ref} from "vue";
import {TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle} from "@headlessui/vue";
import ConfirmationModal from "../../components/ConfirmationModal.vue";
import SpinnerComponent from "../../components/Spinner.vue";


export default {
  name:'TaskComponent',
  components:{
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    ConfirmationModal,
    SpinnerComponent,
  },
  props:['objectID'],
  data(){
    return{
      task:{
        name:'',
      },
      tasks: [],
      search_task:'',
      taskDeletingID: '',
      loading: false,
    }
  },
  computed:{
    isTaskEditing() {
      return !!this.task.id
    }
  },
  mounted() {
    this.fetchTask()
  },
  methods:{
    addTask(){
      // eslint-disable-next-line no-undef
      this.loading = true
      axios.post('tasks',{
        name: this.task.name,
        object_id: this.objectID
      })
          .then(() => {
            this.task={}
            this.toggleAddTaskModal(false)
            this.loading = false
            this.fetchTask()
          }).catch(()=>this.loading = false)
    },
    fetchTask(){
      // eslint-disable-next-line no-undef
      axios.get('tasks',{
        params:{
          name: this.search_task,
          object_id: this.objectID
        }
      })
          .then(response => {
            this.tasks = response.data.data
          })
    },
    fetchSingleTask(task){
      // this.task = task
      this.toggleAddTaskModal(true)
      // eslint-disable-next-line no-undef
      axios.get(`tasks/${task.id}`)
          .then((response) => {
            this.task = response.data.task
          })
    },
    editTask(){
      // eslint-disable-next-line no-undef
      this.loading = true
      axios.put(`tasks/${this.task.id}`,{
        name: this.task.name,
        object_id: this.objectID
      })
          .then(() => {
            this.toggleAddTaskModal(false)
            this.task={}
            this.loading = false
            this.fetchTask()
          }).catch(()=>this.loading = false)
    },
    deleteTask(){
      // eslint-disable-next-line no-undef
      axios.delete(`tasks/${this.taskDeletingID}`)
          .then(() => {
            this.toggleConfDeleteTask(false)
            this.fetchTask()
          })
    },
  },
  setup() {
    let isConfDeleteTask= ref(false);
    let isAddTaskModalOpen = ref(false);
    // let isCompleteTaskModalOpen = ref(false);
    let toggleConfDeleteTask = (s) => {
      isConfDeleteTask.value = s;
    }
    let toggleAddTaskModal = (s) => {
      isAddTaskModalOpen.value = s;
    }
    // let toggleCompleteTaskModal = (s) => {
    //   isCompleteTaskModalOpen.value = s;
    // }
    return {
      isAddTaskModalOpen, toggleAddTaskModal,
      // isCompleteTaskModalOpen, toggleCompleteTaskModal,
      isConfDeleteTask,toggleConfDeleteTask,
    }
  }

}
</script>