
import { Clipboard, Share2 } from 'lucide-react';

const AgentDashboard = () => {
  return (
    <div className="min-h-screen bg-[#F9F6F2] text-[#333] px-4 py-6 md:px-10 md:py-8 font-sans">

      <div className="flex border-b border-gray-300 mb-4 text-center">
        <button className="flex-1 py-2 px-2 md:px-4 border-b-2 border-[#6B3F1D] font-medium text-[#6B3F1D]">
          Agent Dashboard
        </button>
        <button className="flex-1 py-2 px-2 md:px-4 text-gray-500">Member Dashboard</button>
      </div>

      {/* My Managed Groups */}
      <div className="bg-white p-4 rounded-xl mb-6 shadow-sm">
        <p className="text-sm font-semibold mb-3">My managed groups</p>
        <div className="flex gap-2 overflow-x-auto py-2">
          {[
            { name: 'Market Àjo', amount: '₦5,000/ Month', members: '10 members' },
            { name: 'House Àjo', amount: '₦7,000/ Week', members: '20 members' },
            { name: 'Friends', amount: '₦4,000/', members: '15 men' },
          ].map((group, i) => (
            <div
              key={i}
              className={`flex-1 flex-shrink-0 min-w-40 border border-[#D9B28C] p-3 rounded-lg ${i === 0 ? 'bg-[#D9B28C]' : 'bg-transparent'}`}
            >
              <p className="">{group.name}</p>
              <p className="text-sm font-medium">{group.amount}</p>
              <p className="text-sm">{group.members}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Group Code */}
      <div className="bg-white p-4 rounded-xl mb-4 shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <p className="font-semibold">Market Àjo</p>
          <div className="flex gap-2">
            <button className="flex items-center gap-1 text-xs md:text-sm text-[#6B3F1D] border px-2 py-1 rounded-md">
              <Share2 size={14} /> Share code
            </button>
            <button className="bg-[#6B3F1D] text-white px-3 py-1 text-xs md:text-sm rounded-md">
              Manage group
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-1">Your Group Code:</p>
        <div className="bg-[#8C5C2C1A] rounded-lg p-2 flex justify-between items-center">
          <span className="font-semibold tracking-widest">AJO–8Y72XF</span>
          <Clipboard size={16} className="text-gray-500" />
        </div>
      </div>

      {/* Group Overview */}
      <div className="bg-white p-4 rounded-xl mb-4 shadow-sm">
        <p className="font-semibold mb-2">Market Àjo Overview</p>
        <p className="text-sm">7/10 members has paid this month</p>
        <p className="text-sm">Amount: ₦5,000 monthly</p>
        <p className="text-sm">Rotates every 30 days</p>
        <p className="text-sm">Started: Apr 1, 2023</p>
        <p className="text-sm font-bold">Group Balance: ₦350,000</p>
      </div>

      {/* Members List */}
      <div className="bg-white p-4 rounded-xl mb-4 shadow-sm">
        <p className="font-semibold mb-3">Members list</p>
        {[
          { name: 'Jennifer Jesdi', status: 'Paid' },
          { name: 'Tobi Shobams', status: 'Paid' },
          { name: 'Foyin Favour', status: 'Pending' },
        ].map((member, i) => (
          <div key={i} className="flex justify-between py-1 text-sm">
            <p>{i + 1}. {member.name}</p>
            <span className={`px-2 py-1 rounded-full ${
              member.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-[#E6D2BD] text-[#6B3F1D]'
            }`}>
              {member.status}
            </span>
          </div>
        ))}
        <p className="text-sm text-[#6B3F1D] pt-2 font-medium text-right">View all members</p>
      </div>

      {/* Rotation Schedule */}
      <div className="bg-white p-4 rounded-xl mb-4 shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <p className="font-semibold">Rotation Schedule</p>
          <p className="text-sm text-[#6B3F1D]">View all rotation</p>
        </div>
        <div className="flex gap-2 overflow-x-auto py-2">
        <div className="bg-green-100 p-3 rounded-xl shadow-inner min-w-72">
          <p className="text-green-800 font-semibold">This month’s payout:</p>
          <p className="text-sm">Foyin Favour is collecting ₦5,000</p>
          <p className="text-sm">May 8, 2025</p>
        </div>
          <div className="bg-green-100 p-3 rounded-xl shadow-inner min-w-72">
          <p className="text-green-800 font-semibold">April payout:</p>
          <p className="text-sm">John Doe collected ₦5,000</p>
          <p className="text-sm">April 8, 2025</p>
        </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-4 rounded-xl mb-4 shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <p className="font-semibold">Recent Activity</p>
          <p className="text-sm text-[#6B3F1D]">View all activities</p>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Aminat received payout</span>
            <span className="text-red-600">–₦5,000</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Sam made deposit</span>
            <span className="text-green-600">+₦5,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDashboard;
