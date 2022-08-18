import { ref } from "vue";
import { getRandomIntInclusive } from "@/helpers/getRandom.js";

const userOption = ref("");
const BotOption = ref("");
const options = ["paper", "rock", "scissors"];
const result = ref("");
const totalwins = ref(0);
const totallost = ref(0);
const totaldraw = ref(0);

export const useGame = () => {
    const startGame = (opcion) => {
        userOption.value = opcion;
        BotOption.value = options[getRandomIntInclusive(0, 2)];

        // Opción 1: jomersgamer
        const caseopcion = {
            rock: { rock: "draw", scissors: "win", paper: "lose" },
            paper: { paper: "draw", scissors: "lose", rock: "win" },
            scissors: { paper: "win", scissors: "draw", rock: "lose" },
        };

        const res = caseopcion[opcion][BotOption.value];
        switch (res) {
            case "win":
                totalwins.value++;
                break;
            case "draw":
                totaldraw.value++;
                break;
            case "lose":
                totallost.value++;
                break;
        }
        result.value = res;
    };

    const resetGame = () => (userOption.value = "");

    return {
        userOption,
        BotOption,
        result,
        totalwins,
        totallost,
        totaldraw,
        startGame,
        resetGame,
    };
};
