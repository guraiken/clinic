import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router"

import { toast } from "react-toastify"

const PatientDetails = () => {

    const {id} = useParams()
    const [patient, setPatient] = useState({})
    const [consults, setConsults] = useState({})
    const [exams, setExams] = useState([])

    // consultas 

    const [editingConsult, setEditingConsult] = useState(null)
    const [editConsultData, setEditConsultData] = useState({
        reason: "",
        date: "",
        time: "",
        description: "",
        medication: "",
        dosagePrecautions: "",
    })

    const [editingExam, setEditingExam] = useState(null)
    const [editExamData, setEditExamData] = useState({
        name: "",
        date: "",
        time: "",
        type: "",
        laboratory: "",
        documentUrl: "",
        results: "",
    })

    useEffect(() => {
        const fetchPatientDetails = async () => {
            try {
                const patientRes = await axios.get(`http://localhost:3000/patients/${id}`)
                const consultRes = await axios.get(`http://localhost:3000/consults?patientId=${id}`)
                const examRes = await axios.get(`http://localhost:3000/exams?patientId=${id}`)
                console.log(patientRes.data, consultRes.data, examRes.data)
                
                
                setPatient(patientRes.data)
                setConsults(consultRes.data)
                setExams(examRes.data)
            } catch (error) {
                console.error("Erro ao obter detalhes do paciente", error)
            }
        }
        fetchPatientDetails()
    }, [id])
    
  return (
    <div>
          
    </div>
  )
}

export default PatientDetails