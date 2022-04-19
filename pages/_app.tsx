import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/useAuth'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {

 
  return  (
    //Higher order components
    <RecoilRoot>
      <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
  </RecoilRoot>
    
  )
  
}

export default MyApp
