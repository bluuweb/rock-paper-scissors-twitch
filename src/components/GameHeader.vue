<script setup>
import { useGame } from "@/composables/useGame.js";

const { userOption, BotOption, result, totalwins, totallost, totaldraw } =
    useGame();
</script>

<template>
    <h1 class="text-center mt-6">Rock Paper Scissors</h1>
    <h2>userOption: {{ userOption }}</h2>
    <h2>BotOption: {{ BotOption }}</h2>
    <h2>Result: {{ result }}</h2>
    <h2>Total wins: {{ totalwins }}</h2>
    <h2>Total lost: {{ totallost }}</h2>
    <h2>Total draws: {{ totaldraw }}</h2>
</template>
