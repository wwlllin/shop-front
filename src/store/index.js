// Utilities
import { createPinia } from 'pinia'
import persistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persistedstate)

export default pinia

// ((安裝保存pinia套件 npm i pinia-plugin-persistedstate ))
