"use client"

import React from 'react'
import * as z from 'zod'
import {
    Form,
    FormControl,
    FormField,
    FormDescription,
    FormLabel,
    FormMessage,
    FormItem
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardHeader,
    CardDescription,
    CardTitle,
    CardContent
} from "@/components/ui/card"
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { AdherentSchema } from '@/schemas'
import Loading from '@/global/loading'
import { createAdherent } from '@/data'
import { toast } from 'sonner'
import { Badge } from '@/components/ui/badge'
//import UploadObjectBucket from '../global/s3-upload-file'


/* interface UserInfoProps {
    user?: ExtendedUser;
    label: string;
};
 */

const CreateAdherentForm = () => {
   
    const form = useForm<z.infer<typeof AdherentSchema>>({
        resolver: zodResolver(AdherentSchema),
        defaultValues: {
            lastname: "",
            firstname: "",
            //civility: "", 
            //maritalStatus: "",   
            // bornedAt: Date(), 
            sex: "",
            amount: "",
            //status: "",
            phone: "",
          }
    })

    const router = useRouter()
    const isLoading = form.formState.isSubmitting

    const onSubmit = async (data: z.infer<typeof AdherentSchema>) => {
       // console.log(data);
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
                <CardTitle>Mon Profil</CardTitle>
                <CardDescription>L&apos;assistance.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='space-y-4'
                    >
                        <div className='flex gap-3'>
                       
                        {/* <FormField 
                            disabled={isLoading}
                            control={form.control}
                            name='civility'
                            render= {({ field }) => (
                                <FormItem>
                                    <FormLabel>Civilité</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Entre le nom" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>)}
                        /> */}

                        <FormField 
                            disabled={isLoading}
                            control={form.control}
                            name='firstname'
                            render= {({ field }) => (
                                <FormItem>
                                    <FormLabel>Prénom</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Entre le nom" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>)}
                        />

                        <FormField 
                            disabled={isLoading}
                            control={form.control}
                            name='lastname'
                            render= {({ field }) => (
                                <FormItem>
                                    <FormLabel>Nom</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Entre le prénom" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>)}
                        />
                        </div>
                         {/* <FormField 
                            disabled={isLoading}
                            control={form.control}
                            name='maritalStatus'
                            render= {({ field }) => (
                                <FormItem>
                                    <FormLabel>Statut marital</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Entre le prénom" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>)}
                        />
                        {/*  <FormField 
                            disabled={isLoading}
                            control={form.control}
                            name='bornedAt'
                            render= {({ field }) => (
                                <FormItem>
                                    <FormLabel>Date de naissance</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Entre la date de naissance" 
                                            type='date'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>)}
                        /> */}

                        {/* <FormField 
                            disabled={isLoading}
                            control={form.control}
                            name='sex'
                            render= {({ field }) => (
                                <FormItem>
                                    <FormLabel>Genre</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Homme ou Femme" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>)}
                        />

                        <FormField 
                            disabled={isLoading}
                            control={form.control}
                            name='status'
                            render= {({ field }) => (
                                <FormItem>
                                    <FormLabel>Statut de membre</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Actif / Inactif" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>)}
                        />  */}


                          {/*   <Badge 
                                variant={user?.statuAdherent? "success" : "destructive"}
                            >
                                 {user?.statuAdherent? "Actif" : "Inactif"}
                            </Badge> */}


                        <FormField 
                            disabled={isLoading}
                            control={form.control}
                            name='phone'
                            render= {({ field }) => (
                                <FormItem>
                                    <FormLabel>Téléphone</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Actif / Inactif" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>)}
                        />



                         <Button
                            type='submit'
                            disabled={isLoading}
                         >
                             { isLoading ? <Loading /> : "Enregistrer" }  
                            
                         </Button>

                    </form>

                </Form>
            </CardContent>
        </Card>
  )
}

export default CreateAdherentForm