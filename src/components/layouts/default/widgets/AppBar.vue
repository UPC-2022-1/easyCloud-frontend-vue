<template>
  <v-app-bar
    id="default-app-bar"
    app
    absolute
    class="v-bar--underline"
    color="transparent"
    :clipped-left="$vuetify.rtl"
    :clipped-right="!$vuetify.rtl"
    height="70"
    flat
  >
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="drawer = !drawer"
    />

    <default-drawer-toggle class="hidden-sm-and-down" />
    <v-toolbar-title
      class="font-weight-light text-h5"
      v-text="name"
    />
    <v-spacer />
    <template>
      <v-dialog
        v-model="dialog"
        persistent
        max-width="290"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="blue darken-4"
            dark
            v-bind="attrs"
            v-on="on"
          >
            <v-icon class="mr-2">
              mdi-logout
            </v-icon>
            LogOut
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="text-h5">
            <v-spacer />
            Are you sure to logout?
            <v-spacer />
          </v-card-title>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="blue darken-2"
              text
              @click="logout()"
            >
              Yes
            </v-btn>
            <v-btn
              color="blue darken-2"
              text
              @click="dialog = false"
            >
              No
            </v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
  </v-app-bar>
</template>

<script>
  // Utilities
  import { get, sync } from 'vuex-pathify'

  export default {
    name: 'DefaultBar',

    components: {
      DefaultDrawerToggle: () => import(
        './widgets/DrawerToggle'
      ),
    },

    data: function () {
      return {
        dialog: false,
      }
    },

    computed: {
      ...sync('app', [
        'drawer',
        'mini',
      ]),
      name: get('route/name'),
    },

    methods: {
      logout: function () {
        this.$router.push('/login')
      },
    },

  }
</script>
