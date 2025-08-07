'use server'
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function deleteStudent(formData: FormData): Promise<void> {
  try {
    const id = formData.get('id');

    if (typeof id !== 'string' || id.trim() === '') {
      throw new Error("Invalid Student ID");
    }

    await prisma.student.delete({
      where: { id }
    });

  } catch (error) {
    console.log("Error Deleting Student: " + error);
  }

  revalidatePath("/");
}
