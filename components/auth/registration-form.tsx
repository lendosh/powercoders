'use client';

import React, {useState} from 'react';
import * as z from 'zod';
import {useTransition} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {RegistrationSchema} from "@/schemas";
import {Input} from '@/components/ui/input';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';

import {CardWrapper} from '@/components/auth/card-wrapper';
import {Button} from "@/components/ui/button";
import {FormError} from "@/components/form-error";
import {FormSuccess} from "@/components/form-success";
import {registration} from "@/actions/registration";

export const RegistrationForm = () => {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');

    const form = useForm<z.infer<typeof RegistrationSchema>>({
        resolver: zodResolver(RegistrationSchema),
        defaultValues: {
            email: '',
            password: '',
            name: '',
        }
    });

    const onSubmit = (values: z.infer<typeof RegistrationSchema>) => {
        setError('');
        setSuccess('');

        startTransition(() => {
            registration(values)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
                });
        });
    }
    return (
        <CardWrapper
            headerTitle='Sign up'
            headerLabel='Create an account'
            backButtonLabel="Already have an account?"
            backButtonHref='/auth/login'
            showSocial
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-6'
                >
                    <div className='space-y-4'>
                        <FormField
                            control={form.control}
                            name='email'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder='example@email.com'
                                            type='email'
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='name'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder='John Smith'
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='password'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Password
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder='******'
                                            type='password'
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <Button
                        disabled={isPending}
                        type='submit'
                        className='w-full'
                    >
                        Create an account
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
};

