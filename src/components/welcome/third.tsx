import { defineComponent } from 'vue';
import s from './First.module.scss'
import checkout from '../../assets/icons/checkout.svg'
import { RouterLink } from 'vue-router';

export const Third = defineComponent({
    setup: (props, context) => {
        return () => (
            <div class={s.wrapper}>
                <div class={s.card}>
                    <img src={checkout} />
                    <h2> &nbsp; 会挣钱<br/>还会省钱</h2>
                </div>
                <div class={s.actions}>
                    <RouterLink to="/start" class={s.fake}>跳过</RouterLink>
                    <RouterLink to="/welcome/4" >下一页</RouterLink>
                    <RouterLink to="/start">跳过</RouterLink>
                </div>
            </div>
        )
    }
})