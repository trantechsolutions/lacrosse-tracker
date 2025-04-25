<template>
    <div>
        <nav v-if="route.path === '/control'" class="navbar fixed-bottom bg-dark">
            <div class="container-fluid">
                <div class="float-start m-2">
                <button v-if="authStore.authenticated" class="btn btn-danger btn-sm me-2" @click="authStore.logout">
                    Logout
                </button>
                <button v-else class="btn btn-secondary btn-sm me-2" @click="authStore.loginWithGoogle">Log In</button>

                <button class="btn btn-secondary btn-sm me-2" @click="scoreboard.exportData">
                    Export Data
                </button>
                <button class="btn btn-success btn-sm" @click="scoreboard.newGame">
                    New Game
                </button>
                </div>
                <div class="float-end m-2">
                <button class="btn btn-primary btn-sm me-2" @click="scoreboard.openPenaltyForm"><i class="bi bi-plus"></i> Add Penalty</button>
                <button class="btn btn-primary btn-sm" @click="scoreboard.openAddPlayerStatForm"><i class="bi bi-plus"></i> Add Player Stat</button>
                </div>
            </div>
        </nav>
        <!-- <nav v-else class="navbar fixed-bottom bg-dark">
            <div class="container-fluid">
                <div class="float-end m-2">
                <button v-if="!authStore.authenticated" class="btn btn-secondary btn-sm" @click="authStore.loginWithGoogle">Log In</button>
                <router-link v-else to="/control" class="btn btn-secondary btn-sm me-2">Controls</router-link>
                </div>
            </div>
        </nav> -->
    </div>
</template>

<script setup>
import { useScoreboardStore, useAuthStore } from "@/stores/store";
import { useRoute } from 'vue-router';

const route = useRoute();
const scoreboard = useScoreboardStore();
const authStore = useAuthStore();

</script>