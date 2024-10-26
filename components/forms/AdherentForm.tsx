"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { AdherentSchema } from '@/schemas'
import { createAdherent } from '@/data'
import { toast } from 'sonner'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import Loading from '@/global/loading'
import { useRouter } from 'next/navigation'
import { Input } from '../ui/input'


const AdherentForm = () => {
    const form = useForm<z.infer<typeof AdherentSchema>>({
        resolver: zodResolver(AdherentSchema),
        defaultValues: {
            lastname:"",
            firstname: "",
            sex:"",
            amount:"",
            phone:"",
        }
    })

    const router = useRouter()
    const isLoading = form.formState.isSubmitting

    const onSubmit = async (data: z.infer<typeof AdherentSchema>) => {
          console.log(data);
         try {
             await createAdherent(data)
             router.refresh()
             toast.success('Adhérent créée')
         } catch (error) {
             console.error(error)
             toast.error("Quelque chose s'est mal passé")
         }
     }


  return (
     <Card className='w-full mt-4'>
        <CardHeader>
            <CardTitle>Mon Profile</CardTitle>        
        </CardHeader>
        <CardContent>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-4'
                >
                    <div className='flex gap-3'>
                        <FormField 
                            disabled={isLoading}
                            control={form.control}
                            name='firstname'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Prénom</FormLabel>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField 
                            disabled={isLoading}
                            control={form.control}
                            name='lastname'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nom</FormLabel>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                    </div>

                   <Button
                        type='submit'
                        disabled={isLoading}
                   >
                       { isLoading ? <Loading /> : "Mettre à jour" }   
                    </Button> 
                </form>
            </Form>
        </CardContent>
        
     </Card>
  )
}

export default AdherentForm