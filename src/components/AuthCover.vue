<template>
    <div class="text-center">
      <div
        class="bg-sky 3xl:p-16 p-10 h-full rounded-[40px] flex items-center justify-center"
      >
        <div class="">
          <img
            src="../assets/images/logo/logo.svg"
            alt="I-ORA"
            class="mx-auto mb-5"
          />
          <img
            src="../assets/images/cover/logo-cover.png"
            alt=""
            class="mb-5 mx-auto h-[450px] 2xl:h-auto"
          />
          <p class="2xl:text-xl text-lg font-semibold text-black">
            Workforce Analytics for team productivity <br />
            management
          </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "AuthCover",
  props: {
    msg: String,
  },
};
</script>
