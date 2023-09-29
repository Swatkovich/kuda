import { useKeycloak } from '@react-keycloak/web'
import { ReactElement } from 'react'

const PrivateRoute: React.FC<{ children: ReactElement | null }> = ({ children }) => {
  const { keycloak } = useKeycloak()

  const isLoggedIn = keycloak.authenticated

  return isLoggedIn ? children : null
}

export default PrivateRoute
