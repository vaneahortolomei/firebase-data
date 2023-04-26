<template>
    <form
        role="form"
        class="form"
        action="#"
        @submit.prevent="register"
    >
        <div class="form__group">
            <label
                class="form__label"
                for="userName"
            >Name</label>
            <input
                id="userName"
                v-model="v$.name.$model"
                @blur="v$.name.$touch"
                type="text"
                class="form__input"
                name="userName"
            >
            <span v-for="(error, index) in v$.name.$errors"
                  :key="index" class="form__error">
                {{ error.$message }}
            </span>
        </div>
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
            <span v-for="(error, index) in v$.password.$errors"
                  :key="index" class="form__error">
                {{ error.$message }}
            </span>
            <button type="submit">
                Send
            </button>
        </div>
    </form>
</template>

<script setup>
    import {reactive, computed} from "vue";
    import {useStore} from "vuex";
    import {useRouter} from "vue-router";
    import {useVuelidate} from "@vuelidate/core";
    import {required, email, minLength, maxLength, minValue} from "@vuelidate/validators";


    const state = reactive({
        name: "",
        email: "",
        password: ""
    });

    const rules = computed(() => ({
        name: {
            required,
            minValue: minLength(2),
            $lazy: true,
        },
        email: {
            required,
            email,
            $lazy: true,
        },
        password: {
            required,
            minLength: minLength(8),
            $lazy: true
        }
    }));

    const v$ = useVuelidate(rules, state);

    const store = useStore();
    const route = useRouter();


    const register = () => {
        v$.value.$validate().then(valid => {
            if (valid) {
                store.dispatch("register", {
                    name: state.name,
                    email: state.email,
                    password: state.password,
                })
                    .then(() => {
                        route.push('dashboard');
                    })
                    .catch(e => {
                        if (e.response.status === 400) {
                            console.log('Email already exist!');
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
