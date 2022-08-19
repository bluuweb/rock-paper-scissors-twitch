<script setup>
import GameHeader from "@/components/GameHeader.vue";
import GameOption from "@/components/GameOption.vue";
import GameResult from "@/components/GameResult.vue";

import { useGame } from "@/composables/useGame.js";

const { userOption } = useGame();
</script>

<template>
    <main class="text-center container mx-auto px-4">
        <GameHeader />
        <GameOption v-if="!userOption" />
        <GameResult v-if="userOption" />
    </main>
</template>
