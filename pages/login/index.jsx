import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


const LoginPage = () => {
  const supabaseClient = useSupabaseClient()
  const user = useUser()
  const router = useRouter()


  useEffect(() => {
    if (user) {
      router.push("/")
    }
  }, [user, router])

  return (
    <div className='p-4 md:w-1/2 m-auto'>
     <Auth
        redirectTo={process.env.BASE_URL}
        appearance={{ theme: ThemeSupa }}
        supabaseClient={supabaseClient}
        providers={[]}
        socialLayout="horizontal"
      />
    </div>
  )
}

export default LoginPage