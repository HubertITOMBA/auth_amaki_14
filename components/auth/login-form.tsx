"use client"

import { useForm } from 'react-hook-form'
import { useState, useTransition } from "react";
import { redirect, useSearchParams } from "next/navigation";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from '@/schemas';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import Link from "next/link"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardWrapper } from "@/components/auth/card-wrapper"
import { FormError } from '../global/form-error';
import { FormSuccess } from '../global/form-success';
import { login } from '@/data/auth/login';


const LoginForm = () => {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [ isPending, startTransition ] = useTransition()
    const [ showTwoFactor, setShowTwoFactor ] = useState(false)

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl')
    const urlError = searchParams.get("error") === "OAuthAccountNotLinked"
    ? "E-mail déjà utilisé avec un autre fournisseur !"
    : ""; 

    const form = useForm<z.infer<typeof LoginSchema>> ({ 
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit = (data: z.infer<typeof LoginSchema>) => {
      console.log(data);
      startTransition(() => {
          login(data, callbackUrl)
              .then((response) => {
                  if (response?.error){
                      form.reset()
                      setError(response?.error)
                  }

                  if(response?.twoFactor) {
                      setShowTwoFactor(true)
                  }
                  
              })
              .catch(() => setError("Une erreur s'est produite !"))
      })
    }

    if(showTwoFactor){
      return redirect('/auth/new-verification')
  }

  return (
    <div>
        <CardWrapper
            labelBox= "Connexion"
            headerLabel="Content de vous revoir !"
            backButtonLabel="Vous n'avez pas encore de compte ?"
            backButtonHref="/auth/sign-up"
            showSocial
            >
            <Form {...form}>
              <form 
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                  <div className="space-y-4">
                    {/* { showTwoFactor && (
                      <FormField
                          control={form.control}
                          name="code"
                          render={({ field }) => (
                          <FormItem>
                              <FormLabel>Votre Code d'identification</FormLabel>
                              <FormControl>
                              <Input
                                  {...field}
                                  disabled={isPending}
                                  placeholder="123456"
                              />
                              </FormControl>
                              <FormMessage />
                          </FormItem>
                          )}
                      />
                    )}
                    { !showTwoFactor && (
                    <>              */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email adresse</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field}
                                            disabled={isPending}
                                            placeholder=""
                                            type="email"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}   
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                              <FormItem>
                                  <FormLabel>Mot de passe</FormLabel>
                                  <FormControl>
                                      <Input 
                                          {...field}
                                          disabled={isPending}
                                          placeholder=""
                                          type="password"
                                      />
                                  </FormControl>
                                  <Button
                                      size="sm"
                                      variant="link"
                                      asChild
                                      className="px-0 font-normal"
                                  >
                                      <Link href="/auth/reset">Mot de passe oublié ?</Link>
                                  </Button>
                              </FormItem>
                          )}   
                      />
                    {/* </>    */}
                  
                    
                
                  </div> 
                    <FormError message={error || urlError}/>
                    <FormSuccess message={success}/>
                    <Button
                        disabled={isPending}
                        type="submit"
                        className="w-full"
                      >
                        Connexion
                      {/* { showTwoFactor ? "Confirmer" : "Connexion" }   */}
                    </Button>
              </form>
            </Form>
          </CardWrapper>
    </div>
  )
}
export default LoginForm 

 