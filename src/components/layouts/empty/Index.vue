<template>
  <v-app>
    <default-view />
    <default-footer />
  </v-app>
</template>

<script>
  export default {
    name: 'EmptyLayout',

    components: {
      DefaultFooter: () => import(
        './Footer'
      ),
      DefaultView: () => import(
        './View'
      ),
    },
  }
</script>
