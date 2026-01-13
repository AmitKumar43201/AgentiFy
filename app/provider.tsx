'use client'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { User } from '@clerk/nextjs/server';
import { UserDetailContext } from '@/context/UserDetailContext';

function Provider({children,}: Readonly<{children: React.ReactNode;}>) {
  
  const {user} = useUser()
  const [userDetail, setUserDetail] = useState<any>()

  const createUser = useMutation(api.user.CreateNewUser)

  const CreateandGetUser = async () => {
    if (user) {
      const result = await createUser({
        name:user.fullName??'',
        email:user.primaryEmailAddress?.emailAddress??""
      })
      setUserDetail(result)
    }
    console.log(user)
  }

  useEffect(() => {
    user && CreateandGetUser()
  }, [user])

  return (
    <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
      <div>
        {children}
      </div>
    </UserDetailContext.Provider>
  )
}

export default Provider
