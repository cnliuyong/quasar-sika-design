import Vue from 'vue'
import VueI18n from 'vue-i18n'

import messages from 'src/i18n'
import Quasar from 'quasar'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: Quasar.lang.getLocale(),
  fallbackLocale: Quasar.lang.getLocale(),
  messages
})

export default ({ app }) => {
  // 在应用程序上设置i18n实例
  app.i18n = i18n
}

// i如果您需要从其他文件
// 导入它，则：
export { i18n }
