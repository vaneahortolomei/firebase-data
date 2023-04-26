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
                @blur="v$.email.$touch"
                type="text"
                class="form__input"
                name="userEmail"
            >
            <span v-for="(error, index) in v$.email.$errors"
                  :key="index" class="form__error">
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
                @blur="v$.password.$touch"
                type="password"
                class="form__input"
                name="userPassword"
            >
        </div>
        <span v-for="(error, index) in v$.password.$errors"
              :key="index" class="form__error">
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

    const state = reactive({
        email: "",
        password: ""
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
        }
    }));

    const v$ = useVuelidate(rules, state);


    const store = useStore();
    const route = useRouter();


    const login = () => {
        v$.value.$validate().then(valid => {
            if (valid) {
                store.dispatch("login", {
                    email: state.email,
                    password: state.password,
                })
                    .then(() => {
                        route.push('dashboard');
                    })
                    .catch(e => {
                        if (e.response.status === 400) {
                            console.log('Incorrect email or password!');
                        }
                    });
            } else {
                throw Error('Value is required');
            }
        }).catch(() => {
            throw Error('Value is required');
        }).finally(() => 'Data');
    };
</script>
