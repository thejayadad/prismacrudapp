
'use server'
import {prisma} from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function deleteStudent(formData: FormData): Promise<void>{
    try {
        const id = formData.get('id')
              if(typeof id !== 'string' || id.trim() === ''){
            throw new Error("Invalid Project Name")
        }
        await prisma.student.delete({
            where: {id}
        })
    } catch (error) {
        console.log("Error Deleting Student")
    }
    revalidatePath("/")
}