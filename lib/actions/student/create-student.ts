
'use server'
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createStudent (formData: FormData): Promise<void>{
    try {
        const name = formData.get("name")
        if(typeof name !== 'string' || name.trim() === ''){
            throw new Error("Invalid Project Name")
        }
        const newStudent = await prisma.student.create({
            data: {
                name
            }
        })
    } catch (error) {
        console.log("Error Creating Student message: " + error)
    }
    revalidatePath("/")
    redirect("/")
}