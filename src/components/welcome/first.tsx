import { defineComponent } from 'vue';
import s from './First.module.scss'
import wallet from '../../assets/icons/wallet.svg'
import { RouterLink } from 'vue-router';

export const First = defineComponent({
    setup: (props, context) => {
        return () => (
            <div class={s.wrapper}>
                <div class={s.card}>
                    <img class={s.wallet} src={wallet} />
                    <h2> &nbsp; 会挣钱<br/>还会省钱</h2>
                </div>
                <div class={s.actions}>
                    <RouterLink to="/start" class={s.fake}>跳过</RouterLink>
                    <RouterLink to="/welcome/2" >下一页</RouterLink>
                    <RouterLink to="/start">跳过</RouterLink>
                </div>
            </div>
        )
    }
})