import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
  // eslint-disable-next-line no-template-curly-in-string
  url: 'http://178.253.40.167:8282${kc_base_path}',
  realm: 'kudaGo',
  clientId: 'kuda',
})

// try {
//   const authenticated = await keycloak.init()
//   console.log(`User is ${authenticated ? 'authenticated' : 'not authenticated'}`)
// } catch (error) {
//   console.error('Failed to initialize adapter:', error)
// }

export default keycloak
