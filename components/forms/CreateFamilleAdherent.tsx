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
import { Input } from '../ui/input'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { FamilleAdherentSchema } from '@/schemas'
import Loading from '@/global/loading'



const CreateFamilleAdherentForm = () => {

   
    const form = useForm<z.infer<typeof FamilleAdherentSchema>>({
        resolver: zodResolver(FamilleAdherentSchema),
        defaultValues: {
            lastname: "",
            firstname: "",
            civility: "", 
            bornedAt: Date(), 
            sex: "",
            }
    })

    const router = useRouter()
    const isLoading = form.formState.isSubmitting

    const onSubmit = async (data: z.infer<typeof FamilleAdherentSchema>) => {
        console.log(data);
    }

  return (
        <Card className='w-full mt-4'>
            <CardHeader>
                <CardTitle>Ma famille</CardTitle>
                <CardDescription>Les membres de ma famille</CardDescription>
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
                        />

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
                         <FormField 
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
                        />

                        <FormField 
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

                         <Button
                            type='submit'
                            disabled={isLoading}
                         >
                            { isLoading ? <Loading /> : "Ajouter membre" }
                         </Button>

                    </form>

                </Form>
            </CardContent>
        </Card>
  )
}

export default CreateFamilleAdherentForm