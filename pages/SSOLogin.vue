<template>
  <v-row>
    <v-col>
      Firebase Demo SAML
    </v-col>
    <v-col>
      <form @submit.prevent="true">
        <button type="button" @click="signInSAML">Login with SSO</button>
      </form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  methods: {
    signInSAML() {
      console.log(this.$auth);
      // WIP
      const provider = this.$auth.SAMLAuthProvider('saml.jumpcloud-demo');
      console.log(provider);
      // this.$fire.auth.signInWithPopup(provider);
    }
  }
}
</script>

<style scoped>
button {
  color: white;
  background-color: black;
}
</style>