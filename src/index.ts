import { App } from 'vue'
import { Button } from './components'

export { Button }

const components = [Button]
const install = (app: App) => {
  components.map(item => {
    app.component(item.name, item)
  })
}

export default {
  install
}

