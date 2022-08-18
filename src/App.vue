<script setup>
import GameHeader from "@/components/GameHeader.vue";
import GameOptions from "@/components/GameOptions.vue";
import GameResult from "@/components/GameResult.vue";

import { useGame } from "@/composables/useGame.js";

const { userOption } = useGame();
</script>

<template>
    <main class="text-center container mx-auto px-4">
        <GameHeader />
        <GameOptions v-if="userOption === ''" />
        <GameResult v-if="userOption !== ''" />
    </main>
</template>
