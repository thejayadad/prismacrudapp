import { createStudent } from "@/lib/actions/student/create-student";
import { prisma } from "@/lib/prisma";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { updateStudent } from "@/lib/actions/student/update-student";
import { deleteStudent } from "@/lib/actions/student/delete-student";

export default async function Home() {
  const students = await prisma.student.findMany({})
  return (
    <div className="h-full grid grid-cols-1 grid-rows-8">
      <div className="col-span-1 row-span-2 ">
        Calender
      </div>
      <div className="col-span-1 row-span-6">
        <div className="py-2">
<label htmlFor="my_modal_6" className="btn">Add Kid</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">   
    <h3 className="text-lg font-bold text-center">Add Another Child Below</h3>
    <form className="py-2 flex flex-col gap-4" action={createStudent}>
      <input
        placeholder="Add the Kid's"
        id="name"
        name="name"
        type="text"
        className="input w-full"
      />
      <button type="submit" className="btn">Add Student</button>
    </form>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>
        </div>
        <div className="bg-blue-200 h-full">
          <div className="grid grid-cols-2 md:grid-cols-3 p-2 pt-4 gap-2">
            {students.map((student: { id: Key | null | undefined; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
              <div className="flex justify-between items-center w-full p-2 bg-amber-300" key={student.id}>
                <div>
                  {student.name}
                </div>
                <div className="flex items-center space-x-2">
                  <div>
                    
                    {/* The button to open modal */}
                    <label htmlFor="my_modal_6" className="btn btn-sm">Edit</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                    <div className="modal" role="dialog">
                      <div className="modal-box">
                        <h3 className="text-lg font-bold">Update Student</h3>
                        <form 
                        className="flex flex-col gap-2"
                        action={updateStudent}>
                          <input
                            id="id"
                            name="id"
                            defaultValue={student.id}
                            hidden
                          />
                          <input
                            defaultValue={student.name}
                            name="name"
                            id="name"
                            className="input w-full"

                          />
                          <button type="submit" className="btn">
                            Update Student
                          </button>
                        </form>
                        <div className="modal-action">
                          <label htmlFor="my_modal_6" className="btn">Close!</label>
                        </div>
                      </div>
                    </div>
                  </div>
                   <div>
                    <form action={deleteStudent}>
                          <input
                            id="id"
                            name="id"
                            defaultValue={student.id}
                            hidden
                          />
                          <button type="submit">Delete</button>
                    </form>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
