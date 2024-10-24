"use server"

import { currentUser } from "@/lib/auth"
import { db } from "@/lib/db"
import { getUserByEmail } from "./auth"
import bcrypt from 'bcryptjs'
import { MembreStatus, STATUS, UserRole } from "@prisma/client"
// import { Resend } from "resend"
// import { custom } from "zod"
//import { Membre } from './../node_modules/.prisma/client/index.d';

export const getCurrentUser = async () => {
    try {
        const user = await currentUser()
        if(!user || !user.email) throw new Error("Utilisateur non trouvé")

        const userData = await db.user.findUnique({
            where:{
                id: user.id
            },
            include: {
                Membre: true,
                // Customer: true
            }
        })

        return userData
    } catch (error) {
        console.log("Error in getCurrentUser: ", error)
        throw new Error("Error in getCurrentUser")
    }
}



export const getMembre = async () => {
    try {
        const user = await getCurrentUser()

        if(!user || !user.Membre) throw new Error("Membre non trouvé")

        return user.Membre
        
    } catch (error) {
        return null
    }
}


