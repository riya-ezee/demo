import YCLogin from './App.vue'
 
function install (Vue, options) {
 Vue.component('yc-login', YCLogin)
 let prefix = ''
 
 if (options && 'prefix' in options) {
   prefix = options.prefix
   prefix = prefix.charAt(0).toUpperCase() + prefix.slice(1)
   prefix = prefix
     .replace(/-([a-z])/g, (g) => g[1].toUpperCase())
     .replace(/-/g, '')
 }
 
 const key = `${prefix}yc-login`
 Vue.component(key, YCLogin)
}
 
if (typeof window !== 'undefined' && window.Vue) {
 window.Vue.use({ install })
}
 
export { install, YCLogin }