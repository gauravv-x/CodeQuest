'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import Image from 'next/image'

export default function SignInPage() {
  return (
    <div className="min-h-screen grid w-full place-items-center bg-zinc-100 px-4 font-mono">
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="mx-auto w-full sm:w-96 space-y-6 bg-white px-6 py-8 border-4 border-black shadow-[8px_8px_0_0_#000]"
        >
          {/* HEADER */}
          <header className="text-center flex flex-col items-center">
            <Image src={'/logo.png'} alt="Clover Logo" width={40} height={40} />
            <h1 className="mt-3 text-base font-samibold tracking-wide text-black uppercase font-game">
              Sign in to CodeQuest
            </h1>
          </header>

          {/* GLOBAL ERROR */}
          <Clerk.GlobalError className="block text-sm text-red-500" />

          {/* GOOGLE LOGIN */}
          <Clerk.Connection
            name="google"
            className="flex w-full items-center justify-center gap-2 px-4 py-2 bg-yellow-400 border-2 border-black shadow-[4px_4px_0_0_#000] active:translate-y-[2px] active:shadow-none font-samibold font-game"
          >
            <span className="text-black">Login with Google</span>
          </Clerk.Connection>

          {/* EMAIL */}
          <div className="space-y-4">
            <Clerk.Field name="identifier" className="space-y-1">
              <Clerk.Label className="font-samibold text-black uppercase font-game">
                Email
              </Clerk.Label>
              <Clerk.Input
                required
                className="w-full px-3 py-2 bg-white border-2 border-black shadow-[3px_3px_0_0_#000] outline-none focus:border-yellow-400"
              />
              <Clerk.FieldError className="text-sm text-red-500" />
            </Clerk.Field>

            {/* PASSWORD */}
            <Clerk.Field name="password" className="space-y-1">
              <Clerk.Label className="font-samibold text-black uppercase font-game">
                Password
              </Clerk.Label>
              <Clerk.Input
                type="password"
                required
                className="w-full px-3 py-2 bg-white border-2 border-black shadow-[3px_3px_0_0_#000] outline-none focus:border-yellow-400"
              />
              <Clerk.FieldError className="text-sm text-red-500" />
            </Clerk.Field>
          </div>

          {/* SUBMIT */}
          <SignIn.Action
            submit
            className="w-full px-4 py-2 bg-yellow-400 border-2 border-black shadow-[4px_4px_0_0_#000] active:translate-y-[2px] active:shadow-none text-black font-samibold uppercase font-game"
          >
            Sign In
          </SignIn.Action>

          {/* FOOTER */}
          <p className="text-center text-xs text-black font-game">
            No account?{' '}
            <Clerk.Link
              navigate="sign-up"
              className="font-samibold underline underline-offset-2 hover:text-yellow-400 font-game"
            >
              Create an account
            </Clerk.Link>
          </p>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  )
}
