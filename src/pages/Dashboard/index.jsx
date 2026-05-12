import { ConsultsCounter } from "../../components/counters/ConsultsCounter"
import { ExamCounter } from "../../components/counters/ExamCounter"
import { PatientCounter } from "../../components/counters/PatientCounter"

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-xl font-bold text-cyan-800 mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <PatientCounter/>
        <ConsultsCounter/>
        <ExamCounter/>
      </div>

      {/* Lista de pacientes */}
      <h2>Lista de pacientes</h2>
    </div>
  )
}

export default Dashboard