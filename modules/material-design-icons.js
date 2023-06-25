import { resolve } from 'path'

const icons = ['Phone', 'Alarm', 'Home', 'mdi', 'mdi-home-outline', 'mdi-24px']

export default function () {
  this.nuxt.hook('components:dirs', (dirs) => {
    dirs.push({
      path: resolve('node_modules/vue-material-design-icons'),
      prefix: 'MaterialIcon',
      pattern: `**/@(${icons.join('|')}).vue`,
    })
  })
}
