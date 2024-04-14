<template>
    <v-toolbar app color="lime-darken-1" dark>
        <v-btn to="/" class="ml-2">
            <v-icon>mdi-format-list-bulleted</v-icon>
            To-Do List
        </v-btn>

        <v-spacer />
        <v-btn to="/todolist" class="ml-2">
            <v-icon>mdi-plus</v-icon>
            Add List
        </v-btn>
    </v-toolbar>
</template>

<script setup>

</script>

<style scoped lang="sass">
    .social-link :deep(.v-icon)
      color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
      text-decoration: none
      transition: .2s ease-in-out
  
      &:hover
        color: rgba(25, 118, 210, 1)
  </style>