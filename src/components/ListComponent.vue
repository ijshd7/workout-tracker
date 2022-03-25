<template>
    <section class="flex flex-wrap p-12">
        <article v-for="workout in Workouts" :key="workout._id" class="card flex relative flex-col max-w-sm p-6 rounded-2xl bg-gray-900 shadow-lg transition ease-linear duration-200">
            <header class="mb-auto">
                <p class="text-sm mt-0 mx-0 mb-1 text-gray-100">{{ workout.date }}</p>
                <h2 class="text-xl mt-1 mx-0 mb-auto text-white cursor-pointer hover:text-red-300">{{ workout.name }}</h2>
            </header>

            <div class="relative flex flex-col items-center mt-12 mx-0 mb-0 text-white">
                <div v-if="workout.mobility">
                    <h2>MOBILITY:</h2>
                    <p>{{ workout.mobility }}</p>
                </div>
                <div v-if="workout.warmup">
                    <h2>WARMUP:</h2>
                    <p>{{ workout.warmup }}</p>
                </div>
                <div v-if="workout.skill">
                    <h2>SKILL WORK:</h2>
                    <p>{{ workout.skill }}</p>
                </div>
                <div v-if="workout.strength">
                    <h2>STRENGTH:</h2>
                    <p>{{ workout.strength }}</p>
                </div>
                <div v-if="workout.wod">
                    <h2>WOD:</h2>
                    <p>{{ workout.wod }}</p>
                </div>
                <div v-if="workout.cooldown">
                    <h2>COOLDOWN:</h2>
                    <p>{{ workout.cooldown }}</p>
                </div>
            </div>
            
            <div class="options mt-4 mx-0 mb-0 pt-2 px-0 pb-4 leading-loose">
                <router-link :to="{name: 'edit', params: { id: workout._id }}" class="non-italic font-bold text-xs text-gray-400 hover:text-green-400 hover:border-white uppercase border-2 border-solid border-gray-400 rounded-3xl py-1 px-3.5 relative">
                    Edit
                </router-link>
                <button @click.prevent="deleteWorkout(workout._id)" class="non-italic font-bold text-xs text-gray-400 uppercase border-2 border-solid border-gray-400 rounded-3xl py-1 px-3.5 relative">DELETE</button>
            </div>
        </article>
    </section>
</template>

<style scoped>
    .card:hover {
        transform: translateY(-1rem);
    }
    .card:hover~.card {
        transform: translateX(130px);
    }
    .card:not(:first-child) {
        margin-left: -130px;
    }
    .options button:hover {
        background: linear-gradient(90deg,#ff8a00,#e52e71);
        text-shadow: none;
        box-decoration-break: clone;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-box-decoration-break: clone;
        background-clip: text;
        border-color: white;
    }
</style>

<script>
import axios from "axios";
export default {
    name: 'ListComponent',
    data() {
        return {
            Workouts: []
        }
    },
    created() {
        let apiURL = 'http://localhost:4000/api';
        axios.get(apiURL).then(res => {
            this.Workouts = res.data;
        }).catch(error => {
            console.log(error)
        });
    },
    methods: {
        deleteWorkout(id){
            let apiURL = `http://localhost:4000/api/delete-workout/${id}`;
            let indexOfArrayItem = this.Workouts.findIndex(i => i._id === id);
            if (window.confirm("Do you really want to delete?")) {
                axios.delete(apiURL).then(() => {
                    this.Workouts.splice(indexOfArrayItem, 1);
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
}
</script>