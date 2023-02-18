import { defineComponent } from 'vue';
import diagram from '../../assets/icons/diagram.svg'
import { WelcomeLayout } from './WelcomeLayout';
import s from './WelcomeLayout.module.scss'
import { RouterLink } from 'vue-router';

export const Fourth = defineComponent({
    setup: (props, context) => {
        return () => (
            <WelcomeLayout>
                {{
                    icon: () => <img src={diagram} alt="订单检查" />,
                    title: () => <h2>会挣钱 <br /> 还会省钱</h2>,
                    buttons: () => <>
                        <RouterLink to="/start" class={s.fake}>跳过</RouterLink>
                        <RouterLink to="/welcome/start" >完成</RouterLink>
                        <RouterLink to="/start" class={s.fake}>跳过</RouterLink>
                    </>
                }}
            </WelcomeLayout>
        )
    }
})