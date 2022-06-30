<template>
  <v-card class="justify-center">
    <v-btn type="button" @click="loginWithJumpcloud">Login with Jumpcloud</v-btn>
  </v-card>
</template>
<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      popupWindow: null,
    }
  },
  methods: {
    loginWithJumpcloud() {
      this.newwindow = window.open('https://www.google.com', 'Jumpcloud login');
      return false;
    }
  }
}
</script>
