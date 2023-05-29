<template>
  <div class="flex gap-3">
    {{pages}}
    <button v-if="currentPage !== 1" @click="previousPage" class="btn-pager">
      <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.25767 9.14559C5.41288 8.98945 5.5 8.77824 5.5 8.55809C5.5 8.33793 5.41288 8.12672 5.25767 7.97059L2.30767 4.97892L5.25767 2.02892C5.41288 1.87278 5.5 1.66158 5.5 1.44142C5.5 1.22127 5.41288 1.01006 5.25767 0.85392C5.1802 0.775813 5.08804 0.713818 4.98649 0.671511C4.88494 0.629204 4.77602 0.607422 4.66601 0.607422C4.556 0.607422 4.44708 0.629203 4.34553 0.671511C4.24398 0.713818 4.15181 0.775813 4.07434 0.85392L0.541006 4.38725C0.4629 4.46472 0.400904 4.55689 0.358597 4.65844C0.31629 4.75999 0.294508 4.86891 0.294508 4.97892C0.294508 5.08893 0.31629 5.19785 0.358597 5.2994C0.400904 5.40095 0.462899 5.49312 0.541006 5.57059L4.07434 9.14559C4.15181 9.22369 4.24398 9.28569 4.34553 9.328C4.44707 9.3703 4.556 9.39209 4.66601 9.39209C4.77602 9.39209 4.88494 9.3703 4.98649 9.328C5.08804 9.28569 5.1802 9.22369 5.25767 9.14559Z"
          fill="#74BDCB"
        />
      </svg>
    </button>
    <button v-for="p in pages" :key="p" class="btn-pager" :class="currentPage===p && 'btn-pager-active'" @click="pageChange(p)">{{p}}</button>
<!--    <button class="btn-pager btn-pager-active">1</button>-->
<!--    <button class="btn-pager">2</button>
    <button class="btn-pager">3</button>
    <button class="btn-pager">4</button>
    <button class="btn-pager">...</button>
    <button class="btn-pager">40</button>-->
    <button @click="nextPage" v-if="currentPage < pages.length" class="btn-pager">
      <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.742327 0.854413C0.587118 1.01055 0.5 1.22176 0.5 1.44191C0.5 1.66207 0.587118 1.87328 0.742327 2.02941L3.69233 5.02108L0.742327 7.97108C0.587118 8.12722 0.5 8.33842 0.5 8.55858C0.5 8.77873 0.587118 8.98994 0.742327 9.14608C0.819796 9.22419 0.911964 9.28618 1.01351 9.32849C1.11506 9.3708 1.22398 9.39258 1.33399 9.39258C1.444 9.39258 1.55292 9.3708 1.65447 9.32849C1.75602 9.28618 1.84819 9.22419 1.92566 9.14608L5.45899 5.61275C5.5371 5.53528 5.5991 5.44311 5.6414 5.34156C5.68371 5.24001 5.70549 5.13109 5.70549 5.02108C5.70549 4.91107 5.68371 4.80215 5.6414 4.7006C5.5991 4.59905 5.5371 4.50688 5.45899 4.42941L1.92566 0.854413C1.84819 0.776306 1.75602 0.714312 1.65447 0.672004C1.55292 0.629697 1.444 0.607914 1.33399 0.607914C1.22398 0.607914 1.11506 0.629697 1.01351 0.672004C0.911963 0.714312 0.819796 0.776306 0.742327 0.854413Z"
          fill="#74BDCB"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "PagerComponent",
  components: {},
  props:['totalLength','currentPage','perPage'],
  emits: ['pageChange'],
  data(){
    return {
      pages: [],
    }
  },
  watch: {
    totalLength () {
      this.setPages();
    }
  },
  methods:{
    previousPage() {
      if (this.currentPage > 1) {
        this.$emit('pageChange', this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.info.length) {
        this.$emit('pageChange', this.currentPage + 1);
      }
    },
    pageChange(page){
      this.$emit('pageChange', page);
    },
    setPages () {
      let numberOfPages = Math.ceil(this.totalLength / this.perPage);

      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
  }
};
</script>
