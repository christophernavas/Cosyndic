export default function ({ store, redirect, route }) {
  store.state.authUser === null && isAuthenticated(route) ? redirect('/') : ''
}

function isAuthenticated(route) {
  if (route.name === 'dashboard') {
    return true
  }
}
