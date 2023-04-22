<template>
  <form
    role="form"
    class="form"
    action="#"
    @submit.prevent="login"
  >
    <div class="form__group">
      <label
        class="form__label"
        for="userEmail"
      >Email</label>
      <input
        id="userEmail"
        v-model="userEmail"
        type="text"
        class="form__input"
        name="userEmail"
      >
      <span
        v-if="error"
        class="form__error"
      >Error</span>
    </div>
    <div class="form__group">
      <label
        class="form__label"
        for="userPassword"
      >Password</label>
      <input
        id="userPassword"
        v-model="userPassword"
        type="password"
        class="form__input"
        name="userPassword"
      >
      <span
        v-if="error"
        class="form__error"
      >Error</span>
    </div>
    <button type="submit">
      Login
    </button>
  </form>
</template>

<script setup>
    import {ref} from "vue";
    import {useStore} from "vuex";
    import {useRouter} from "vue-router";

    const userEmail = ref("");
    const userPassword = ref("");


    const error = ref(false);
    const store = useStore();
    const route = useRouter();

    const login = () => {

        if (!userEmail.value ||
            !userPassword.value) {
            return error.value = true;
        } else {
            error.value = false;
        }

        return store.dispatch("login", {
            email: userEmail.value,
            password: userPassword.value,
        }).then(() => {
            route.push({
                name: "dashboard",
            });
        }).catch(e => {
            return e.message;
        });
    };
</script>
