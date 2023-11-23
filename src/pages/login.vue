<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const router = useRouter()
const auth = useAuthStore()
const username = ref('')
const password = ref('')

const onLogin = () => {
  auth.login(username.value, password.value)
  router.push('/')
}
</script>

<style>
.inputButton{
  display: flex;
  flex-direction: column;
}

.input {
  margin-bottom: 10px;
  border-radius: 0.25rem;
  border-style:groove;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  min-width: 10rem;
  width: 100%;
}

.button {
  color: white;
  background-color: blue;
  border-radius: 0.25rem;
  font-size: 2rem;
  border: none;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}


</style>

<template>
  <div>
    <h1>Login Page</h1>
    <div class="inputButton">
      <input class="input" type="text" v-model="username" placeholder="username">
      <input class="input" type="password" v-model="password" placeholder="password">
      <button class="button" @click="onLogin()">Login</button>
    </div>
  </div>
</template>