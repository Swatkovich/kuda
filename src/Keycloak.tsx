import Keycloak from 'keycloak-js'
import { AuthClientError } from '@react-keycloak/core'

const prod = {
  url: {
    KEYCLOAK_BASE_URL: 'https://keycloak.herokuapp.com',
    API_BASE_URL: 'https://myapp.herokuapp.com',
    OMDB_BASE_URL: 'https://www.omdbapi.com',
    AVATARS_DICEBEAR_URL: 'https://api.dicebear.com/6.x',
  },
}

const dev = {
  url: {
    KEYCLOAK_BASE_URL: 'http://localhost:8080',
    API_BASE_URL: 'http://localhost:8081',
    OMDB_BASE_URL: 'https://www.omdbapi.com',
    AVATARS_DICEBEAR_URL: 'https://api.dicebear.com/6.x',
  },
}

const config = process.env.NODE_ENV === 'development' ? dev : prod

export const keycloak = new Keycloak({
  url: `${config.url.KEYCLOAK_BASE_URL}`,
  realm: 'company-services',
  clientId: 'movies-app',
})

export const initOptions = { pkceMethod: 'S256' }

export const handleOnEvent = async (event: string, error: AuthClientError | undefined) => {
  if (event === 'onAuthSuccess') {
    if (keycloak.authenticated && keycloak.tokenParsed) {
      // let response = await moviesApi.getUserExtrasMe(keycloak.token)
      // if (response.status === 404) {
      //   const username = keycloak.tokenParsed.preferred_username
      //   const userExtra = { avatar: username }
      //   response = await moviesApi.saveUserExtrasMe(keycloak.token, userExtra)
      //   console.log('UserExtra created for ' + username)
      // }
      // @ts-ignore
      keycloak['avatar'] = response.data.avatar
    }
  }
}
