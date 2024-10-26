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
import { AdresseAdherentSchema } from '@/schemas'
import Loading from '@/global/loading'


const CreateAdresseAdherentForm = () => {
     

    const form = useForm<z.infer<typeof AdresseAdherentSchema>>({
        resolver: zodResolver(AdresseAdherentSchema),
        defaultValues: {
            streetnum: "",
            street1: "",
            street2: "",
            codepost: "",
            city: "",
            country: "",
            
          }
    })

  
    const router = useRouter()
    const isLoading = form.formState.isSubmitting

    const onSubmit = async (data: z.infer<typeof AdresseAdherentSchema>) => {
        console.log(data);
    }

  return (
        <Card className='w-full mt-4'>
            <CardHeader>
                <CardTitle>Adresse</CardTitle>
                <CardDescription>L&apos;assistance.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='space-y-4'
                    >
                        <FormField 
                            disabled={isLoading}
                            control={form.control}
                            name='street1'
                            render= {({ field }) => {
                                <FormItem>
                                    <FormLabel>Prénom</FormLabel>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            placeholder="Entre le nom de la rue"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            }}
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

export default CreateAdresseAdherentForm