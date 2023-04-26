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
        v-model="v$.email.$model"
        type="text"
        class="form__input"
        name="userEmail"
        @blur="v$.email.$touch"
      >
      <span
        v-for="(error, index) in v$.email.$errors"
        :key="index"
        class="form__error"
      >
        {{ error.$message }}
      </span>
    </div>
    <div class="form__group">
      <label
        class="form__label"
        for="userPassword"
      >Password</label>
      <input
        id="userPassword"
        v-model="v$.password.$model"
        type="password"
        class="form__input"
        name="userPassword"
        @blur="v$.password.$touch"
      >
    </div>
    <span
      v-for="(error, index) in v$.password.$errors"
      :key="index"
      class="form__error"
    >
      {{ error.$message }}
    </span>
    <button type="submit">
      Login
    </button>
  </form>
</template>

<script setup>
    import {reactive, computed} from "vue";
    import {useStore} from "vuex";
    import {useRouter} from "vue-router";
    import {useVuelidate} from "@vuelidate/core";
    import {required, email, minLength} from "@vuelidate/validators";
    import {inject} from "vue";


    let key = inject("key");
    const state = reactive({
        email: "",
        password: "",
    });

    const rules = computed(() => ({
        email: {
            required,
            email,
            $lazy: true,
        },
        password: {
            required,
            minLength: minLength(8),
            $lazy: true,
        },
    }));

    const v$ = useVuelidate(rules, state);


    const store = useStore();
    const route = useRouter();


    const login = () => {
        v$.value.$validate()
            .then(valid => {
                if (valid) {
                    store.dispatch("login", {
                        email: state.email,
                        password: state.password,
                    })
                        .then(() => {
                            route.push("dashboard");
                        })
                        .catch(e => {
                            if (e.response && e.response.status === 400) {
                                key.message = "Incorrect email or password!";

                                setTimeout(() => {
                                    key.message = "";
                                }, 2000);
                            }
                        });
                } else {
                    throw Error("Value is required");
                }
            })
            .catch(() => {
                throw Error("Value is required");
            })
            .finally(() => "Data");
    };
</script>
