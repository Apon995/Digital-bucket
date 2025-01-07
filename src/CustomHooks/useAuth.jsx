import { useContext } from 'react'
import { AuthContext } from '../ContextProvider/AuthProvider'

function useAuth() {

    const sharedata = useContext(AuthContext);

    

    return sharedata
}

export default useAuth