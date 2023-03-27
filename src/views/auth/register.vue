<template>
  <div class="p-10 w-screen h-screen bg-body grid gap-10 grid-cols-2 overflow-auto">
    <div class="p-16">
      <div class="max-w-[582px] mx-auto h-full">
        <div class="d-flex">
          <h1 class="text-black font-bold text-4xl mb-1">Hey, Welcome Back!</h1>
          <p class="text-[#8F9BB3] mb-14 text-xl">
            Please Sign in here to your Account,<br />
            Have your landing pages online in minutes.
          </p>
          <p class="text-black text-xl mt-5 text-right font-semibold">Forgot your Password?</p>
        </div>
        <button class="auth-btn mb-20" type="button">Log In</button>
        <p class="text-black text-xl mt-5 text-center">Don’t have an account? <span class="text-[#ffa384]">Sign Up</span></p>
      </div>
    </div>
    <AuthCover />
  </div>
</template>

<script>
import AuthCover from "../../components/AuthCover.vue";
export default {
  name: "AuthRegister",
  components: {
    AuthCover
  }
};
</script>
