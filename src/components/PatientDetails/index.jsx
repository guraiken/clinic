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
    
  return (
    <div>
          
    </div>
  )
}

export default PatientDetails