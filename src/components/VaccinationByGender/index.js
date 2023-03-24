import {Component} from 'react'
import {PieChart, Pie, ResponsiveContainer, Legend, Cell} from 'recharts'

export default class Example extends Component {
  render() {
    const {vaccinationByGender} = this.props
    return (
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <Pie
            dataKey="count"
            startAngle={0}
            endAngle={180}
            data={vaccinationByGender}
            cx="50%"
            cy="50%"
            outerRadius="80%"
            innerRadius="40%"
            label
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#64c2a6" />
          </Pie>
          <Legend wrapperStyle={{padding: 30}} iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    )
  }
}
