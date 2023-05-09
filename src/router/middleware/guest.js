import store from '@/store/index'

export default function guest({ next }) {
  // If user is logged in, redirect to home else to intended route.
  store.getters['auth/loggedIn']
    ? next({ name: 'Dashboard' })
    : next()
}
