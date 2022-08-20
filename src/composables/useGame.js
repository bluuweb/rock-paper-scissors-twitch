import { ref } from "vue";
import { getRandomIntInclusive } from "@/helpers/randomjs.js";
import JSConfetti from "js-confetti";
const jsConfetti = new JSConfetti();

const userOption = ref("");
const botOption = ref("");
const result = ref("");
const totalwins = ref(localStorage.getItem("totalwins") || 0);
const totallost = ref(localStorage.getItem("totallost") || 0);
const totaldraw = ref(localStorage.getItem("totaldraw") || 0);

export const useGame = () => {
    // Opción 1: jomersgamer
    const options = ["paper", "rock", "scissors"];
    const caseopcion = {
        rock: { rock: "draw", scissors: "win", paper: "lose" },
        paper: { paper: "draw", scissors: "lose", rock: "win" },
        scissors: { paper: "win", scissors: "draw", rock: "lose" },
    };

    const startGame = (opcion) => {
        userOption.value = opcion;
        botOption.value = options[getRandomIntInclusive(0, 2)];

        const res = caseopcion[opcion][botOption.value];
        switch (res) {
            case "win":
                totalwins.value++;
                localStorage.setItem("totalwins", totalwins.value);
                jsConfetti.addConfetti();
                break;
            case "draw":
                totaldraw.value++;
                localStorage.setItem("totaldraw", totaldraw.value);
                break;
            case "lose":
                totallost.value++;
                localStorage.setItem("totallost", totallost.value);
                break;
        }
        result.value = res;
    };

    const resetGame = () => {
        userOption.value = "";
        botOption.value = "";
        result.value = "";
    };

    return {
        userOption,
        botOption,
        result,
        totalwins,
        totallost,
        totaldraw,
        startGame,
        resetGame,
    };
};
