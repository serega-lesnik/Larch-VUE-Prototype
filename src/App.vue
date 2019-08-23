<template>
  <div id="app">
    <Header v-bind:userProfile="userProfile" />
    <div class="container">
      <NetworkSettings title="Network settings" />
    </div>
  </div>
</template>

<script>
import NetworkSettings from './components/NetworkSettings.vue';
import Header from './containers/Header.vue';

export default {
  name: 'app',
  data: function () {
    return {
      userProfile: {
        userId: '100',
        userName: 'admin',
        sessionId: 'demo',
        language: 'en'
      }
    }
  },
  components: {
    Header,
    NetworkSettings
  }
}
</script>

<style lang="scss" src="@/styles/index.scss"></style>
