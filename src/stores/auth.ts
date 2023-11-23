import { defineStore } from "pinia";
import {ref} from "vue"

const isValidCredentials = (
  credentials: Record<string, string>,
  username: string,
  password: string
): boolean => {
  return credentials[username] === password;
};

export const useAuthStore = defineStore('auth', ()=> {
  const username = ref('')
  const password = ref('')
  const isAuthenticated = ref(false)

  const credentials: Record<string, string> = {
    admin: 'superuser',
    user: 'client',
  }

  const login = (enteredUsername: string, enteredPassword: string) => {
    if (isValidCredentials(credentials, enteredUsername, enteredPassword)) {
      isAuthenticated.value = true;
      username.value = enteredUsername
    } else {
      alert('Autentikasi gagal. Periksa kembali username dan password.');
    }
  }

  const logout = () => {
    isAuthenticated.value = false;
    username.value = '';
    password.value = '';
  };

  return {username, login, logout, isAuthenticated}
})