import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {last7DaysData} = props

  return (
    <ResponsiveContainer height={500} width="90%">
      <BarChart
        height={500}
        width={1000}
        data={last7DaysData}
        margin={{top: 100}}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{stroke: 'gray', strokeWidth: 0.5}}
        />
        <YAxis tickFormatter={number => number.toString()} />
        <Tooltip />
        <Legend wrapperStyle={{padding: 30}} />
        <Bar dataKey="dose1" name="Dose 1" fill="#8884d8" />
        <Bar dataKey="dose2" name="Dose 2" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default VaccinationCoverage
