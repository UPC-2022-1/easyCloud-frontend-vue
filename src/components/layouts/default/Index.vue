<template>
  <v-app>
    <default-bar />
    <default-drawer />
    <default-view />
    <default-footer />
  </v-app>
</template>

<script>
  export default {
    name: 'DefaultLayout',

    components: {
      DefaultBar: () => import(
        './AppBar'
      ),
      DefaultDrawer: () => import(
        './Drawer'
      ),
      DefaultFooter: () => import(
        './Footer'
      ),
      DefaultView: () => import(
        './View'
      ),
    },
  }
</script>
