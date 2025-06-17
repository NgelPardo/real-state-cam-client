'use client'

import { authenticate } from "@/actions";
import clsx from "clsx";
import { useActionState  } from "react";
import { useFormStatus } from "react-dom";
import { IoInformationOutline } from "react-icons/io5";

export const LoginForm = () => {

    const [state, dispatch] = useActionState (authenticate, undefined);

  return (
    <form action={ dispatch } className="flex flex-col">

        <label htmlFor="email">Usuario</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="text"
          name="email" />


        <label htmlFor="email">Contraseña</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="password"
          name="password" />

        <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
        >
            {state === "CredentialsSignin" && (
                <div className="flex flex-row mb-2">
                    <IoInformationOutline className="h-5 w-5 text-red-500"/>
                    <p className="text-sm text-red-500">Las credenciales no son correctas</p>
                </div>
            )}
        </div>

        <LoginButton/>

      </form>
  )
}


function LoginButton(){
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className={ clsx({
                "focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" : !pending,
                "focus:outline-none text-white bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-600 dark:focus:ring-gray-900": pending
            })}
            disabled={ pending }>
          Ingresar
        </button>
    )
}


