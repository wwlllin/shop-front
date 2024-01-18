module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue-pug/vue3-recommended',
    'eslint:recommended',
    '@vue/standard'
  ],
  rules: {
    'vue/max-attributes-per-line': 'off'
    // ((限制一行只能有幾個html的屬性，無太大用處可關))
  }
}
