<script setup>
import { useGame } from "@/composables/useGame.js";
import ButtonOption from "@/components/ButtonOption.vue";

const { startGame } = useGame();
</script>

<template>
    <section
        class="grid grid-cols-2 bg-[url('@/assets/bg-triangle.svg')] bg-no-repeat bg-center bg-[length:15rem] max-w-lg"
    >
        <div class="flex justify-center">
            <ButtonOption text="rock" @click="startGame('rock')" />
        </div>
        <div class="flex justify-center">
            <ButtonOption text="paper" @click="startGame('paper')" />
        </div>
        <div class="flex justify-center col-span-2">
            <ButtonOption text="scissors" @click="startGame('scissors')" />
        </div>
    </section>
</template>
