import { defineComponent } from 'vue';
import wallet from '../../assets/icons/wallet.svg'
import { WelcomeLayout } from './WelcomeLayout'
import s from './WelcomeLayout.module.scss'
import { RouterLink } from 'vue-router';

export const First = defineComponent({
    setup: (props, context) => {
        return () => (
            <WelcomeLayout>
                {{
                    icon: () => <img src={wallet} alt="钱包" />,
                    title: () => <h2>会挣钱 <br /> 还会省钱</h2>,
                    buttons: () => <>
                        <RouterLink to="/start" class={s.fake}>跳过</RouterLink>
                        <RouterLink to="/welcome/3" >下一页</RouterLink>
                        <RouterLink to="/start">跳过</RouterLink>
                    </>
                }}
            </WelcomeLayout>
        )
    }
})