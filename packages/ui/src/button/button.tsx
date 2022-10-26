import type { PropType } from 'vue'
import { computed, defineComponent } from 'vue'
export default defineComponent({
  name: 'CButton',
  props: {
    type: {
      type: String as PropType<'default'|'primary'>,
      default: 'default',
    },
  },
  setup(_props, { slots }) {
    const prefixCls = 'cu-btn'
    const cls = computed(() => ({
      [prefixCls]: true,
      [`${prefixCls}-${_props.type}`]: _props.type !== 'default',
    }))
    return () => {
      return <button class={cls.value}>{ slots.default && slots.default() }</button>
    }
  },
})
