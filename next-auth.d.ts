import { UserRole } from "@prisma/client"
import { DefaultSession } from "next-auth"

export type ExtendUser = DefaultSession["user"] & {
    role: UserRole;
    status: STATUS;
    civility: Civilities;
    statuAdherent: MembreStatus;
    statuMarital:  MaritalStatus;
    isOAuth: boolean;
}


declare module "next-auth" {
    interface Session {
        user: ExtendUser
    }
}