import { defineComponent, renderSlot } from 'vue'
import { Button } from '@/components'

export default defineComponent({
  name: 'App',
  setup () {

  },
  render () {
    return <Button type='primary' text='测试按钮3'></Button>
  }
})
