"use server"

import { currentUser } from "@/lib/auth"
import { db } from "@/lib/db"
import { getUserByEmail } from "./auth"
import bcrypt from 'bcryptjs'
import { MembreStatus, STATUS, UserRole } from "@prisma/client"
import { Resend } from "resend"
import { Membre } from "zod"
//import { Membre, Adherent } from './../node_modules/.prisma/client/index.d';

export const getCurrentUser = async () => {
    try {
        const user = await currentUser()
            if(!user || !user.email) throw new Error("Utilisateur non trouvé")

        const userData = await db.user.findUnique({
            where:{
                id: user.id
            },
            include: {
                Adherent: true,
                // Customer: true
            }
        })

        return userData
    } catch (error) {
        console.log("Error in getCurrentUser: ", error)
        throw new Error("Error in getCurrentUser")
    }
}



export const getAdherent = async () => {
    try {
        const user = await getCurrentUser()

        if(!user || !user.Adherent) throw new Error("Adherent non trouvé")

        return user.Adherent
        
    } catch (error) {
        return null
    }
}


export const  createAdherent = async (
        data: { 
            adherentId : string,
            lastname: string,
            firstname: string,
            civility: string, 
            maritalStatus: string,   
            // bornedAt: Date, 
            sex: string,
            amount: number,
            status: string,
            phone: string
         }
) => {
    try {
        const user = await getCurrentUser()
        if(!user || !user.Adherent) throw new Error("Adherent non trouvé")

            const adherent = await db.adherent.update({
                where: {
                    id: String(data.adherentId),
                },
                data: {
                    lastname: String(data.lastname),
                    firstname: String(data.firstname),
                }    
            }) 

       // const adherent = await db.adherent.create({
         //   data: {
            //    ...data,
            //    lastname: String(data.lastname),
             //   firstname: String(data.firstname),
                // civility: String(data.civility),
                // maritalStatus: String(data.maritalStatus),  
                // bornedAt: String(data.bornedAt),
                // sex: String(data.sex),
                // amount: Number(data.amount),
                // status: String(data.status),
                // phone: String(data.phone),
                // adherentId: user.id
         //   } 
       // })   
        
      /*   const cotisation = await db.cotisation.create({
            data: {
                ...data,
                description: String(data.description),
                membreId: user.Membre.id
            }
        }) */

       /*  const updateUser = await db.user.update({
            where: {
                id: user.id
            },
            data: {
                currentSpeciality: speciality.id
            }
        }) */

       return adherent
    } catch (error) {
        console.log("Erreur dans createAdherent: ", error)
        throw new Error("Erreur dans la creation dl'adhérent")
    } 

}


