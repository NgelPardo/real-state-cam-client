'use server'

import { signIn } from "@/auth.config"
import { sleep } from "@/utils/sleep";

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
){
    try {
        await signIn('credentials', Object.fromEntries(formData));
    } catch (error) {
        console.log(error);
        return 'CredentialsSignin'
    }
}
