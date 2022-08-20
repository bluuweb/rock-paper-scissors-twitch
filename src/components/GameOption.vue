<script setup>
import { useGame } from "@/composables/useGame.js";
import ButtonGameOption from "@/components/ButtonGameOption.vue";

const { startGame } = useGame();
</script>

<template>
    <section
        class="grid grid-cols-2 justify-items-center max-w-lg mx-auto bg-[url('@/assets/bg-triangle.svg')] bg-no-repeat bg-center bg-[length:200px]"
    >
        <ButtonGameOption text="rock" @click="startGame('rock')" />
        <ButtonGameOption text="paper" @click="startGame('paper')" />
        <div class="col-span-2">
            <ButtonGameOption text="scissors" @click="startGame('scissors')" />
        </div>
    </section>
</template>
