<template>
    <div class="flex flex-row justify-center bg-gray-500 text-white font-bold">
        <div class="">
            <h3 class="text-center my-2 text-2xl">UPDATE WORKOUT</h3>
            <form class="grid" @submit.prevent="handleUpdateForm">
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
                    <button class="bg-red-400 p-4 rounded-xl">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: 'EditComponent',
    data() {
        return {
            workout: {}
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-workout/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.workout = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-workout/${this.$route.params.id}`;
            axios.put(apiURL, this.workout).then((res) => {
                console.log(res)
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>