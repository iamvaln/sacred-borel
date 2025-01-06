import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, MessageSquare, Clock } from 'lucide-react';

const mockEngagementData = [
  { department: 'Engineering', responses: 95, quality: 88, consistency: 92 },
  { department: 'Marketing', responses: 88, quality: 85, consistency: 86 },
  { department: 'Sales', responses: 82, quality: 80, consistency: 84 },
  { department: 'Support', responses: 90, quality: 87, consistency: 89 },
  { department: 'HR', responses: 86, quality: 84, consistency: 85 }
];

const TeamEngagement = () => {
  return (
    <div className="space-y-6 p-6">
      {/* Engagement Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 border-t-4 border-[#8f55ff]">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#8f55ff] bg-opacity-10 rounded-lg">
              <Users className="h-6 w-6 text-[#8f55ff]" />
            </div>
            <div>
              <h3 className="text-[#00171f] font-medium">Active Participants</h3>
              <p className="text-2xl font-bold text-[#8f55ff]">456</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 border-t-4 border-[#8f55ff]">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#8f55ff] bg-opacity-10 rounded-lg">
              <MessageSquare className="h-6 w-6 text-[#8f55ff]" />
            </div>
            <div>
              <h3 className="text-[#00171f] font-medium">Feedback Quality</h3>
              <p className="text-2xl font-bold text-[#8f55ff]">85%</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 border-t-4 border-[#8f55ff]">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#8f55ff] bg-opacity-10 rounded-lg">
              <Clock className="h-6 w-6 text-[#8f55ff]" />
            </div>
            <div>
              <h3 className="text-[#00171f] font-medium">Response Time</h3>
              <p className="text-2xl font-bold text-[#8f55ff]">24h</p>
            </div>
          </div>
        </div>
      </div>

      {/* Department Engagement Chart */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-lg font-semibold text-[#00171f] mb-6">Department Engagement Metrics</h2>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockEngagementData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="department" stroke="#00171f" />
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
              <Bar dataKey="responses" name="Response Rate" fill="#8f55ff" />
              <Bar dataKey="quality" name="Quality Score" fill="#ffeb69" />
              <Bar dataKey="consistency" name="Consistency" fill="#00171f" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Engagement Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-lg font-semibold text-[#00171f] mb-4">Top Contributors</h3>
          <div className="space-y-4">
            {[
              { name: 'Engineering Team', contributions: 234, quality: 92 },
              { name: 'Support Team', contributions: 198, quality: 88 },
              { name: 'Product Team', contributions: 156, quality: 85 }
            ].map((contributor) => (
              <div key={contributor.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-[#00171f]">{contributor.name}</h4>
                  <p className="text-sm text-gray-500">{contributor.contributions} contributions</p>
                </div>
                <span className="px-3 py-1 bg-[#ffeb69] text-[#00171f] rounded-full text-sm font-medium">
                  {contributor.quality}% quality
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-lg font-semibold text-[#00171f] mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'Feedback Submitted', time: '2 hours ago', team: 'Engineering' },
              { action: 'Survey Completed', time: '4 hours ago', team: 'Marketing' },
              { action: 'Team Review', time: '6 hours ago', team: 'Sales' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-[#00171f]">{activity.action}</h4>
                  <p className="text-sm text-[#8f55ff]">{activity.team}</p>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamEngagement;