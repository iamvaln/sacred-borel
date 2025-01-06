import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, TrendingUp, PieChart } from 'lucide-react';

const mockData = [
  { month: 'Jan', managers: 85, teamLeads: 82, staff: 78 },
  { month: 'Feb', managers: 88, teamLeads: 85, staff: 80 },
  { month: 'Mar', managers: 86, teamLeads: 83, staff: 82 },
  { month: 'Apr', managers: 89, teamLeads: 87, staff: 84 },
  { month: 'May', managers: 90, teamLeads: 88, staff: 85 },
  { month: 'Jun', managers: 92, teamLeads: 89, staff: 86 }
];

const SatisfactionAnalysis = () => {
  return (
    <div className="space-y-6 p-6">
      {/* Global Satisfaction Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 border-t-4 border-[#8f55ff]">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#8f55ff] bg-opacity-10 rounded-lg">
              <TrendingUp className="h-6 w-6 text-[#8f55ff]" />
            </div>
            <div>
              <h3 className="text-[#00171f] font-medium">Overall Satisfaction</h3>
              <p className="text-2xl font-bold text-[#8f55ff]">87%</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 border-t-4 border-[#8f55ff]">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#8f55ff] bg-opacity-10 rounded-lg">
              <Users className="h-6 w-6 text-[#8f55ff]" />
            </div>
            <div>
              <h3 className="text-[#00171f] font-medium">Response Rate</h3>
              <p className="text-2xl font-bold text-[#8f55ff]">92%</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 border-t-4 border-[#8f55ff]">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#8f55ff] bg-opacity-10 rounded-lg">
              <PieChart className="h-6 w-6 text-[#8f55ff]" />
            </div>
            <div>
              <h3 className="text-[#00171f] font-medium">YoY Growth</h3>
              <p className="text-2xl font-bold text-[#8f55ff]">+15%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Role-Based Analysis */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-lg font-semibold text-[#00171f] mb-6">Role-Based Satisfaction Trends</h2>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#00171f" />
              <YAxis stroke="#00171f" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#00171f',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'white'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="managers" 
                stroke="#8f55ff" 
                strokeWidth={2}
                dot={{ fill: '#8f55ff' }}
                name="Managers"
              />
              <Line 
                type="monotone" 
                dataKey="teamLeads" 
                stroke="#ffeb69" 
                strokeWidth={2}
                dot={{ fill: '#ffeb69' }}
                name="Team Leads"
              />
              <Line 
                type="monotone" 
                dataKey="staff" 
                stroke="#00171f" 
                strokeWidth={2}
                dot={{ fill: '#00171f' }}
                name="Staff"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Key Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-lg font-semibold text-[#00171f] mb-4">Top Performing Areas</h3>
          <div className="space-y-4">
            {[
              { area: 'Work-Life Balance', score: 92 },
              { area: 'Team Collaboration', score: 88 },
              { area: 'Project Management', score: 85 }
            ].map((item) => (
              <div key={item.area} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-[#00171f] font-medium">{item.area}</span>
                <span className="text-[#8f55ff] font-semibold">{item.score}%</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-lg font-semibold text-[#00171f] mb-4">Areas for Improvement</h3>
          <div className="space-y-4">
            {[
              { area: 'Career Growth', score: 72 },
              { area: 'Communication', score: 75 },
              { area: 'Training Programs', score: 78 }
            ].map((item) => (
              <div key={item.area} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-[#00171f] font-medium">{item.area}</span>
                <span className="text-[#8f55ff] font-semibold">{item.score}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatisfactionAnalysis;