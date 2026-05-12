import { useState, useEffect } from "react"
import axios from "axios"
import {BsClipboard2PulseFill} from "react-icons/bs"

export const ExamCounter = () => {

    const [examCounter, setExamCounter] = useState(0)

    useEffect(()=> {
    
        const fetchPatients = async () => {
            try {
                const response = await axios.get("http://localhost:3000/exams")
                setExamCounter(response.data.length)
            } catch (error) {
                console.error("Erro ao obter dados dos exames", error)
            }
        }
        fetchPatients()
    }, [])
  
    return (
    <div className="p-6 bg-white shadow rounded-lg flex flex-col items-center w-60">
        <h2 className="text-xl font-bold flex items-center gap-2">
            <BsClipboard2PulseFill size={20} className="text-blue-600"/>{examCounter}
        </h2>
        {examCounter && <p className="text-gray-600 mt-2">Exames</p>}
    </div>
  )
}
