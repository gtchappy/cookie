import { defineComponent, ref } from 'vue';
import { RouterView } from 'vue-router';
import s from './Welcome.module.scss'
import logo from '../assets/icons/logo.svg'

export const welcome = defineComponent({
    setup(props, context) {
        return () => <div class={s.wrapper}>
            <header>
                <img class="logo" src={logo}  alt={"饼干"}/>
                <h1>饼干记账</h1>
            </header>
            <main><RouterView /></main>
        </div>
    }
})