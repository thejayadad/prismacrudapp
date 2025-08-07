'use server'
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function updateStudent(formData: FormData): Promise<void> {
  try {
    const id = formData.get('id');
    const name = formData.get('name');

    if (typeof id !== 'string' || id.trim() === '') {
      throw new Error("Invalid Student ID");
    }

    if (typeof name !== 'string' || name.trim() === '') {
      throw new Error("Invalid Student Name");
    }

    const existingStudent = await prisma.student.findUnique({ where: { id } });

    if (!existingStudent) {
      throw new Error("Student not found");
    }

    await prisma.student.update({
      where: { id },
      data: { name }
    });

  } catch (error) {
    console.log("Error updating Student: " + error);
  }

  revalidatePath("/");
  redirect("/");
}
