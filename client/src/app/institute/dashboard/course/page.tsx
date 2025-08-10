"use client"
import { useAppDispatch } from "@/lib/store/hooks"
import { useState } from "react"
import CourseModal from "./CourseModal"
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

function InstituteCourse(){

    const dispatch = useAppDispatch()
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return(
        <>
        <div className="flex flex-col"> 
        <div className=" overflow-x-auto">
        {isModalOpen && <CourseModal closeModal={closeModal}/>}
            <div className="min-w-full inline-block align-middle">           
                <div className="flex justify-between">
                    <div className="relative  text-gray-500 focus-within:text-gray-900 mb-4">
                        <div className="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none ">
                           
                        </div>
                        <input  type="text" id="default-search" className="block w-80 h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none" placeholder="Search for course" />
                    </div>
                    <button onClick={openModal} className="h-[40px] rounded-md bg-gradient-to-br from-green-600 to-emerald-400 px-3 py-1 font-dm text-sm font-medium text-white shadow-md shadow-green-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]"> Create Course</button>
                </div>
            </div>

            <div className="overflow-hidden ">
                <table className=" min-w-full rounded-xl">
                <thead>
                    <tr className="bg-gray-50">
                    <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl"> ID </th>
                    <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Name </th>
                    <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Price </th>
                    <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Duration </th>
                    <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Level </th>
                    <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Description </th>
                    <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Thumbnail </th>
                    <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Category ID </th>
                    <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Teacher ID </th>
                    <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl"> Actions </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-300 ">
                   
                    <tr className="bg-white transition-all duration-500 hover:bg-gray-50">
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 "> A</td>
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> A </td>
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> A</td>
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> A</td>
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> A</td>
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> A</td>
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> A</td>
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> A</td>
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> A</td>
                    <td className=" p-5 ">
                        <div className="flex items-center gap-1">
                        <button className="p-2  rounded-full  group transition-all duration-500  flex item-center">
                             <FiEdit 
                                    size={20} 
                                    className="cursor-pointer text-indigo-500" 
                            />
                        </button>
                        <button  className="p-2 rounded-full  group transition-all duration-500  flex item-center">
                            <FiTrash2
                                size={20}
                                className="cursor-pointer text-red-500"
                            />
                        </button>
                        <button className="p-2 rounded-full  group transition-all duration-500  flex item-center">
                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="stroke-black " d="M10.0161 14.9897V15.0397M10.0161 9.97598V10.026M10.0161 4.96231V5.01231" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        </button>
                        </div>
                    </td>
                    </tr>
                    
            
                </tbody>
                </table>
            </div>
            </div>
        </div>
     
        </>
    )
}
export default InstituteCourse