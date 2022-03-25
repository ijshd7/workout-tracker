<template>
  <div class="w-screen h-screen bg-gray-500">
    <header class="bg-gradient-to-r from-green-400 to-blue-500 flex flex-row justify-between p-8 text-white font-bold">
      <div class="container">
        <a class="float-left cursor-pointer hover:text-red-400">WOD TRACKER</a>
        <ul class="float-right flex flex-row space-x-6">
          <li>
            <router-link class="hover:text-red-400" to="/">CREATE WOD</router-link>
          </li>
          <li>
            <router-link class="hover:text-red-400" to="/view">VIEW WODS</router-link>
          </li>
        </ul>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>
