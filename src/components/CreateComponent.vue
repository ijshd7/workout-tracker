<template>
    <section class="flex flex-row justify-center bg-gray-500 text-white font-bold">
        <div>
            <h3 class="text-center my-2 text-2xl">CREATE WORKOUT</h3>
            <form class="grid" @submit.prevent="handleSubmitForm">
                <div class="form-group mb-2">
                    <label>WORKOUT NAME</label>
                    <input type="text" class="form-control border-2 border-red-500 rounded text-black ml-2" v-model="workout.name" required>
                </div>
                <div class="form-group mb-2">
                    <label>MOBILITY</label>
                    <input type="text" class="form-control border-2 border-red-500 rounded text-black ml-2" v-model="workout.mobility">
                </div>
                <div class="form-group mb-2">
                    <label>WARMUP</label>
                    <input type="text" class="form-control border-2 border-red-500 rounded text-black ml-2" v-model="workout.warmup">
                </div>
                <div class="form-group mb-2">
                    <label>SKILL WORK</label>
                    <input type="text" class="form-control border-2 border-red-500 rounded text-black ml-2" v-model="workout.skill">
                </div>
                <div class="form-group mb-2">
                    <label>STRENGTH</label>
                    <input type="text" class="form-control border-2 border-red-500 rounded text-black ml-2" v-model="workout.strength">
                </div>
                <div class="form-group mb-2">
                    <label>WOD</label>
                    <input type="text" class="form-control border-2 border-red-500 rounded text-black ml-2" v-model="workout.wod">
                </div>
                <div class="form-group">
                    <label>COOLDOWN</label>
                    <input type="text" class="form-control border-2 border-red-500 rounded text-black ml-2" v-model="workout.cooldown">
                </div>
                <div class="form-group my-6 justify-self-center">
                    <button class="bg-red-400 p-4 rounded-xl">Create Workout</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import axios from "axios";
export default {
    name: 'CreateComponent',
    data() {
        return {
            workout: {
                date: new Date().toDateString(),
                name: '',
                mobility: '',
                warmup: '',
                skill: '',
                strength: '',
                wod: '',
                cooldown: ''
            }
        }
    },
    methods: {
        handleSubmitForm() {
            let apiURL = 'http://localhost:4000/api/create-workout';
                
            axios.post(apiURL, this.workout).then(() => {
                this.$router.push('/view')
                this.workout = {
                    date: new Date().toDateString(),
                    name: '',
                    mobility: '',
                    warmup: '',
                    skill: '',
                    strength: '',
                    wod: '',
                    cooldown: ''
                }
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>