import { createWebHistory, createRouter } from "vue-router";
import routes from "@/router/routes/routes";
import _ from "lodash"
import MiddlewarePipeline from './middlewarePipeline'



// Vue.use(VueRouter)

// Create Vue Router Object

const router = createRouter({
  history: createWebHistory(),
  routes
});
router.beforeEach((to, from, next) => {
  // store.dispatch('auth/unsetFilter')
  const middleware = _.get(to.meta, 'middleware')

  if (!middleware) return next()

  const context = { to, from, next }

  return middleware[0]({
    ...context,
    next: MiddlewarePipeline(context, middleware, 1),
  })
})

router.beforeResolve(async (to, from, next) => {
  // Create a `beforeResolve` hook, which fires whenever
  // `beforeRouteEnter` and `beforeRouteUpdate` would. This
  // allows us to ensure data is fetched even when params change,
  // but the resolved route does not. We put it in `meta` to
  // indicate that it's a hook we created, rather than part of
  // Vue Router (yet?).
  try {
    // For each matched route...
    for (const route of to.matched) {
      await new Promise((resolve, reject) => {
        // If a `beforeResolve` hook is defined, call it with
        // the same arguments as the `beforeEnter` hook.
        if (route.meta && route.meta.beforeResolve) {
          route.meta.beforeResolve(to, from, (...args) => {
            // If the user chose to redirect...
            if (args.length) {
              // Complete the redirect.
              next(...args)
              reject(new Error('Redirected'))
            } else {
              resolve()
            }
          })
        } else {
          // Otherwise, continue resolving the route.
          resolve()
        }
      })
    }
    // If a `beforeResolve` hook chose to redirect, just return.
  } catch (error) {
    return
  }

  // If we reach this point, continue resolving the route.
  next()
})
// ? For splash screen
// Remove afterEach hook if you are not using splash screen
/*router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})*/
export default router;
