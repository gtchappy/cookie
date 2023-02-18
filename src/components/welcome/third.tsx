import { defineComponent } from 'vue';
import { WelcomeLayout } from './WelcomeLayout';
import s from './WelcomeLayout.module.scss'
import checkout from '../../assets/icons/checkout.svg'
import { RouterLink } from 'vue-router';

export const Third = defineComponent({
    setup: (props, context) => {
        return () => (
            <WelcomeLayout>
                {{
                    icon: () => <img src={checkout} alt="订单检查" />,
                    title: () => <h2>会挣钱 <br /> 还会省钱</h2>,
                    buttons: () => <>
                        <RouterLink to="/start" class={s.fake}>跳过</RouterLink>
                        <RouterLink to="/welcome/4" >下一页</RouterLink>
                        <RouterLink to="/start">跳过</RouterLink>
                    </>
                }}
            </WelcomeLayout>
        )
    }
})