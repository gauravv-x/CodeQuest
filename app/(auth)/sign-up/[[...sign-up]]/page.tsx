'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'
import Image from 'next/image'
import { useState } from 'react'

export default function SignUpPage() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  return (
    <div className="min-h-screen grid w-full items-center bg-zinc-900 px-4 font-mono text-sm text-white">
      <SignUp.Root>

        {/* START STEP */}
        <SignUp.Step
          name="start"
          className="mx-auto w-full sm:w-96 space-y-6 bg-zinc-800 px-4 py-8 border-4 border-black shadow-[8px_8px_0_0_#000]"
        >
          <header className="text-center flex flex-col items-center">
            <Image src={'/logo.png'} alt="Clover Logo" width={40} height={40} />
            <h1 className="mt-3 text-base font-semibold tracking-wide text-yellow-400 uppercase font-game">
              Create Account
            </h1>
          </header>

          <Clerk.GlobalError className="block text-sm text-red-500" />

          {/* ERROR POPUP */}
          {error && (
            <div className="bg-red-500 text-white text-xs px-3 py-2 rounded text-center">
              {error}
            </div>
          )}

          <div className="space-y-4">

            {/* EMAIL */}
            <Clerk.Field name="emailAddress" className="space-y-1">
              <Clerk.Label className="font-semibold text-yellow-400 uppercase font-game">
                Email
              </Clerk.Label>

              <Clerk.Input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-zinc-900 border-2 border-black shadow-[3px_3px_0_0_#000] outline-none focus:border-yellow-400 text-white"
              />

              <Clerk.FieldError className="text-sm text-red-500" />
            </Clerk.Field>

            {/* PASSWORD */}
            <Clerk.Field name="password" className="space-y-1">
              <Clerk.Label className="font-semibold text-yellow-400 uppercase font-game">
                Password
              </Clerk.Label>

              <Clerk.Input
                type="password"
                required
                placeholder="Min 8 characters"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-900 border-2 border-black shadow-[3px_3px_0_0_#000] outline-none focus:border-yellow-400 text-white"
              />

              <Clerk.FieldError className="text-sm text-red-500" />
            </Clerk.Field>

            {/* CONFIRM PASSWORD */}
            <div className="space-y-1">
              <label className="font-semibold text-yellow-400 uppercase font-game">
                Confirm Password
              </label>

              <input
                type="password"
                required
                placeholder="Re-enter password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-900 border-2 border-black shadow-[3px_3px_0_0_#000] outline-none focus:border-yellow-400 text-white"
              />
            </div>

          </div>

          {/* SIGN UP BUTTON */}
          <SignUp.Action
            submit
            onClick={(e) => {
              if (password !== confirmPassword) {
                e.preventDefault()
                setError('Passwords do not match')
                return
              }

              if (password.length < 8) {
                e.preventDefault()
                setError('Password must be at least 8 characters')
                return
              }

              setError('')
            }}
            className="w-full px-4 py-2 bg-yellow-400 border-2 border-black shadow-[4px_4px_0_0_#000] active:translate-y-[2px] active:shadow-none text-black font-semibold uppercase font-game"
          >
            Sign Up
          </SignUp.Action>

          <p className="text-center text-xs text-yellow-400 font-game">
            Already have an account?{" "}
            <Clerk.Link
              navigate="sign-in"
              className="font-semibold underline underline-offset-2 hover:text-yellow-200 font-game"
            >
              Sign in
            </Clerk.Link>
          </p>
        </SignUp.Step>

        {/* VERIFICATION STEP */}
        <SignUp.Step
          name="verifications"
          className="mx-auto w-full sm:w-96 space-y-6 bg-zinc-800 px-4 py-8 border-4 border-black shadow-[8px_8px_0_0_#000]"
        >
          <header className="text-center">
            <h1 className="mt-3 text-base font-semibold tracking-wide text-yellow-400 uppercase font-game">
              Verify Email Code
            </h1>
          </header>

          <Clerk.GlobalError className="block text-sm text-red-500" />

          <SignUp.Strategy name="email_code">
            <Clerk.Field name="code" className="space-y-1">
              <Clerk.Label className="font-semibold text-yellow-400 uppercase font-game">
                Email Code
              </Clerk.Label>

              <Clerk.Input
                type="otp"
                required
                className="w-full px-3 py-2 bg-zinc-900 border-2 border-black shadow-[3px_3px_0_0_#000] outline-none focus:border-yellow-400 text-white"
              />

              <Clerk.FieldError className="text-sm text-red-500" />
            </Clerk.Field>

            <SignUp.Action
              submit
              className="w-full px-4 py-2 bg-yellow-400 border-2 border-black shadow-[4px_4px_0_0_#000] active:translate-y-[2px] active:shadow-none text-black font-semibold uppercase font-game"
            >
              Verify
            </SignUp.Action>
          </SignUp.Strategy>

          <p className="text-center text-xs text-yellow-400 font-game">
            Already have an account?{" "}
            <Clerk.Link
              navigate="sign-in"
              className="font-semibold underline underline-offset-2 hover:text-yellow-200 font-game"
            >
              Sign in
            </Clerk.Link>
          </p>
        </SignUp.Step>

        {/* CONTINUE STEP */}
        <SignUp.Step
          name="continue"
          className="mx-auto w-full sm:w-96 space-y-6 bg-zinc-800 px-4 py-8 border-4 border-black shadow-[8px_8px_0_0_#000]"
        >
          <header className="text-center">
            <h1 className="mt-3 text-base font-semibold tracking-wide text-yellow-400 uppercase font-game">
              Continue Registration
            </h1>
          </header>

          <Clerk.GlobalError className="block text-sm text-red-500" />

          <Clerk.Field name="username" className="space-y-1">
            <Clerk.Label className="font-semibold text-yellow-400 uppercase font-game">
              Username
            </Clerk.Label>

            <Clerk.Input
              type="text"
              required
              className="w-full px-3 py-2 bg-zinc-900 border-2 border-black shadow-[3px_3px_0_0_#000] outline-none focus:border-yellow-400 text-white"
            />

            <Clerk.FieldError className="text-sm text-red-500" />
          </Clerk.Field>

          <SignUp.Action
            submit
            className="w-full px-4 py-2 bg-yellow-400 border-2 border-black shadow-[4px_4px_0_0_#000] active:translate-y-[2px] active:shadow-none text-black font-semibold uppercase font-game"
          >
            Continue
          </SignUp.Action>

          <p className="text-center text-xs text-yellow-400">
            Already have an account?{" "}
            <Clerk.Link
              navigate="sign-in"
              className="font-semibold underline underline-offset-2 hover:text-yellow-200 font-game"
            >
              Sign in
            </Clerk.Link>
          </p>
        </SignUp.Step>

      </SignUp.Root>
    </div>
  )
}
