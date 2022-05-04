import { defineComponent } from 'vue'
import './index.scss'

export interface ButtonProps {
  type: string;
  className: string;
  text: string;
}

const Button = defineComponent({
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    className: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    return () => {
      return <button class={['vui-button', props.className]}>{props.text}</button>
    }
  }
})

export { Button }