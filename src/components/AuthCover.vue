<template>
    <div class="text-center">
      <div
        class="bg-sky p-16 h-full rounded-[40px] flex items-center justify-center"
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
            class="mb-5"
          />
          <p class="text-xl font-semibold text-black">
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
