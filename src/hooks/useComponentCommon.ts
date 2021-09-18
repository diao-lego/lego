import { computed } from 'vue'
import { pick } from 'lodash-es'
import { TextComponentProps } from '../defaultProps'

const useComponentCommon = (
  props: Readonly<Partial<TextComponentProps>>,
  picks: string[],
) => {
  // 获取样式
  const styleProps = computed(() => pick(props, picks))
  // 处理点击事件
  const handleClick = () => {
    if (props.actionType === 'url' && props.url) {
      window.location.href = props.url
    }
  }
  return {
    styleProps,
    handleClick,
  }
}

export default useComponentCommon
