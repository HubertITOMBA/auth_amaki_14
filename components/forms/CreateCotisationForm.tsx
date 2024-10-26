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
import { Input } from '@/components/ui/input'
import {
    Card,
    CardHeader,
    CardDescription,
    CardTitle,
    CardContent
} from "@/components/ui/card"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CotisationSchema } from '@/schemas'
import Loading from '@/global/loading'


const CreateCotisationForm = () => {
    const form = useForm<z.infer<typeof CotisationSchema>>({
        resolver: zodResolver(CotisationSchema),
        defaultValues: {
            description: "",
            amount: "",
          }
    })

    const isLoading = form.formState.isSubmitting

    const onSubmit = async (data: z.infer<typeof CotisationSchema>) => {
        console.log(data);
    }

  return (
        <Card className='w-full mt-4'>
            <CardHeader>
                <CardTitle>Mes cotisations</CardTitle>
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
                          name='description'
                          render={({ field }) => {
                             <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field}
                                        placeholder="INfo sur la description"
                                    />
                                </FormControl>
                                <FormMessage />
                             </FormItem>
                          }}
                        >
                     </FormField>

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

export default CreateCotisationForm