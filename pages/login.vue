<template>
<div>
  <v-card class="justify-center mb-8">
    <v-btn type="button" @click="loginWithJumpcloud">Login with Jumpcloud</v-btn>
    <hr>
  </v-card>
  <v-card>
    <v-card-text>
      <v-btn type="button" @click="fetchData"> Fetch Data</v-btn>
      <p>{{data}}</p>
    </v-card-text>
  </v-card>
</div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'LoginPage',
  data() {
    return {
      popupWindow: null,
      baseUrl: 'https://cat-fact.herokuapp.com/facts',
      token: '',
      data: '',
    }
  },
  methods: {
    loginWithJumpcloud() {
      this.newwindow = window.open('https://www.google.com', 'Jumpcloud login');
      this.token = '';
      return false;
    },
    async fetchData() {
      const response = await axios.get(this.baseUrl, { headers: {
        Authorization: this.token,
      }})
      this.data = response.data;
    }

  }
}
</script>
