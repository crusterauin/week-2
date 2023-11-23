<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
const auth = useAuthStore()
const router = useRouter()

const onLogout = () => {
    auth.logout()
    router.push('/login')
}

const notLoggedInYet = () => {
    alert("Anda harus login terlebih dahulu.")
}
</script>

<template>
    <div class="container1">
        <div class="container2">
            <div class="header">
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/restricted" v-if="auth.isAuthenticated">Restricted Page</router-link>
                <router-link to="/login" v-else @click="notLoggedInYet()">Restricted Page</router-link>
            </div>
            <div class="login">
                <p v-if="auth.isAuthenticated">{{ auth.username }}</p>
                <div v-if="auth.isAuthenticated">
                    <router-link class="logoutButton" to="/login" @click=onLogout()>Logout</router-link>
                </div>
                <div v-else>
                    <router-link class="loginButton" to="login">Login</router-link>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
