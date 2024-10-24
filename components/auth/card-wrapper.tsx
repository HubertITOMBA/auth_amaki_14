"use client"

import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";


interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    labelBox: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
};


export const CardWrapper = ({ 
    children,
    headerLabel,
    labelBox,
    backButtonLabel,
    backButtonHref,
    showSocial
    }: CardWrapperProps ) => {

return (
    <Card className="w-[400px] shadow-md">
        <CardHeader>
            <Header  label={headerLabel} labelBox={labelBox}/>
        </CardHeader>
        <CardContent>
            { children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton 
                    label={backButtonLabel}
                    href={backButtonHref}
                />
            </CardFooter>
    </Card>
)
}