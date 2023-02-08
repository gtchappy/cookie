import { defineComponent } from 'vue';
import s from './First.module.scss'
import diagram from '../../assets/icons/diagram.svg'
import { RouterLink } from 'vue-router';

export const Fourth = defineComponent({
    setup: (props, context) => {
        return () => (
            <div class={s.wrapper}>
                <div class={s.card}>
                    <img src={diagram}/>
                    <h2> &nbsp; 每日提醒<br/>不遗漏每一笔账单</h2>
                </div>
                <div class={s.actions}>
                    <RouterLink to="/start" class={s.fake}>跳过</RouterLink>
                    <RouterLink to="/start" >完成</RouterLink>
                    <RouterLink to="/start" class={s.fake}>跳过</RouterLink>
                </div>
            </div>
        )
    }
})