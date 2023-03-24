import {Component} from 'react'
import {PieChart, Pie, ResponsiveContainer, Legend, Cell} from 'recharts'

class VaccinationByAge extends Component {
  render() {
    const {vaccinationByAge} = this.props
    return (
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <Pie
            dataKey="count"
            startAngle={360}
            endAngle={0}
            data={vaccinationByAge}
            cx="50%"
            cy="50%"
            outerRadius="80%"
            label
          >
            <Cell name="18-44" fill="#5a8dee" />
            <Cell name="45-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
          </Pie>
          <Legend wrapperStyle={{padding: 30}} iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    )
  }
}

export default VaccinationByAge
