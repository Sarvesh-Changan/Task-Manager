import React from 'react'
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts"
import CustomTooltip from './CustomTooltip';
import CustomLegend from './CustomLegend';

const DEFAULT_COLORS = ["#8D51FF", "#00B8DB", "#7BCE00"];

const CustomPieChart = ({data = [], colors = DEFAULT_COLORS}) => {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <ResponsiveContainer width="100%" height="100%" minHeight={300}>
        <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <Pie
                data={data}
                dataKey="count"
                nameKey="status"
                cx="50%"
                cy="50%"
                outerRadius="80%"
                innerRadius="60%"
                labelLine={false}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend content={<CustomLegend />} />
        </PieChart>
    </ResponsiveContainer>
  )
}

export default CustomPieChart