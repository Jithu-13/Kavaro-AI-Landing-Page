import { ChevronRight, FileText, Mail, Table, Users, Database, AlertTriangle, FileStack, Search, Tag, Clock, CheckCircle, Folder } from "lucide-react";

export default function ProblemSection() {
  return (
    <section id="problem" className="min-h-screen py-20 flex flex-col justify-center bg-[#0F1C3E] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
            Risk Management Today is Broken Across Silos
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Underwriters lack clean exposure data. Brokers lose visibility after the sale. Clients juggle insurance docs, contracts, and compliance in disconnected folders. Vendors forget to update expired COIs.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            Everyone's working off different files, out-of-date info, and manual processes. There's no central source of truth — and it's costing time, trust, and money.
          </p>
        </div>
          
        {/* Apple-style interactive landscape of problems */}
        <div className="relative mb-20 pt-16 px-2">
          {/* Horizontal scrolling timeline/path of problems */}
          <div className="relative max-w-5xl mx-auto h-[400px] overflow-hidden">
            {/* Background path */}
            <div className="absolute top-[50%] left-0 right-0 h-px bg-gradient-to-r from-[#2B8C74]/0 via-[#2B8C74]/30 to-[#2B8C74]/0"></div>
            
            {/* Problem 1: Stakeholder Disconnect */}
            <div className="absolute top-[30%] left-[15%] transform -translate-y-1/2">
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3584E4] to-[#0A65C2] flex items-center justify-center">
                    <Users className="text-white h-8 w-8" />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full bg-[#3584E4]/20 animate-ping-slow opacity-60"></div>
              </div>
              <h3 className="text-xl font-medium mb-2 text-white text-center">Stakeholder Disconnect</h3>
            </div>
            
            {/* Problem 1 Description - Separate from icon */}
            <div className="absolute top-[65%] left-[15%] transform -translate-x-1/4">
              <div className="bg-[#0F1C3E]/80 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-[220px] border border-[#3584E4]/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Underwriters, brokers, clients, and vendors each use different systems.
                </p>
                <div className="mt-3 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3584E4]"></span>
                    <span className="text-xs text-gray-400">No shared visibility</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3584E4]"></span>
                    <span className="text-xs text-gray-400">Siloed decisions</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Problem 2: No Source of Truth */}
            <div className="absolute top-[30%] left-[50%] transform -translate-y-1/2 -translate-x-1/2">
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#9563DE] to-[#7540BA] flex items-center justify-center">
                    <Database className="text-white h-8 w-8" />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full bg-[#9563DE]/20 animate-ping-slow opacity-60" style={{ animationDelay: "0.5s" }}></div>
              </div>
              <h3 className="text-xl font-medium mb-2 text-white text-center">No Source of Truth</h3>
            </div>
            
            {/* Problem 2 Description - Separate from icon */}
            <div className="absolute top-[65%] left-[50%] transform -translate-x-1/2">
              <div className="bg-[#0F1C3E]/80 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-[220px] border border-[#9563DE]/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Documents scattered across emails, drives, and departments.
                </p>
                <div className="mt-3 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9563DE]"></span>
                    <span className="text-xs text-gray-400">Version confusion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9563DE]"></span>
                    <span className="text-xs text-gray-400">Outdated information</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Problem 3: Compliance Risk */}
            <div className="absolute top-[30%] right-[15%] transform -translate-y-1/2">
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E25C5C] to-[#D12F2F] flex items-center justify-center">
                    <AlertTriangle className="text-white h-8 w-8" />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full bg-[#E25C5C]/20 animate-ping-slow opacity-60" style={{ animationDelay: "1s" }}></div>
              </div>
              <h3 className="text-xl font-medium mb-2 text-white text-center">Compliance Risk</h3>
            </div>
            
            {/* Problem 3 Description - Separate from icon */}
            <div className="absolute top-[65%] right-[15%] transform translate-x-1/4">
              <div className="bg-[#0F1C3E]/80 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-[220px] border border-[#E25C5C]/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Manual tracking leads to critical compliance failures.
                </p>
                <div className="mt-3 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E25C5C]"></span>
                    <span className="text-xs text-gray-400">Missed renewals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E25C5C]"></span>
                    <span className="text-xs text-gray-400">Regulatory exposure</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Connecting dots on the path */}
            <div className="absolute left-[15%] top-[50%] transform -translate-y-1/2 w-3 h-3 rounded-full bg-[#2B8C74]"></div>
            <div className="absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#2B8C74]"></div>
            <div className="absolute right-[15%] top-[50%] transform -translate-y-1/2 w-3 h-3 rounded-full bg-[#2B8C74]"></div>
          </div>
          
          {/* Apple-style caption */}
          <div className="text-center mt-8 max-w-xl mx-auto">
            <p className="text-gray-400 text-sm font-light tracking-wide">
              These disconnected systems and processes create significant 
              <span className="text-[#2B8C74]"> operational friction </span> 
              and <span className="text-[#2B8C74]">risk exposure</span> across the entire insurance ecosystem.
            </p>
          </div>
        </div>
        
        <h3 className="text-3xl font-semibold tracking-tight mb-12 text-white text-center">
          Siloed Approaches vs. Connected Risk Management
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16">
          {/* Traditional Risk Management */}
          <div className="rounded-3xl overflow-hidden shadow-xl transform hover:-rotate-1 transition-all duration-300 hover:shadow-2xl">
            <div className="bg-gradient-to-r from-red-100 to-red-50 p-6 border-b border-red-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-1">Traditional Approach</h3>
              <p className="text-red-600 font-medium flex items-center">
                <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Disconnected & Manual
              </p>
            </div>
            
            <div className="bg-white p-8 h-[400px] relative border-l-4 border-red-300 bg-gradient-to-br from-white to-red-50/80 overflow-hidden">
              {/* Cluttered Desktop Illustration - EXTRA CLUTTER */}
              <div className="absolute inset-0 p-8">
                {/* Messy Background with Post-its */}
                <div className="absolute top-2 right-2 w-16 h-16 bg-yellow-200 transform rotate-6 shadow-sm z-20">
                  <p className="text-[8px] p-1 font-mono text-gray-700">URGENT: Check vendor COIs!!!</p>
                </div>
                
                <div className="absolute top-16 right-10 w-14 h-14 bg-pink-200 transform -rotate-3 shadow-sm z-20">
                  <p className="text-[8px] p-1 font-mono text-gray-700">Call broker re: renewal</p>
                </div>
                
                {/* Scattered Icons */}
                <div className="absolute right-4 bottom-20 flex space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-gray-100 rounded shadow-sm flex items-center justify-center">
                      <FileText className="h-4 w-4 text-gray-400" />
                    </div>
                  ))}
                </div>
                
                {/* Email Window */}
                <div className="absolute left-6 top-4 w-3/4 h-1/3 bg-gray-50 rounded-lg shadow border border-gray-200 z-10">
                  <div className="bg-gray-200 px-4 py-2 rounded-t-lg flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <span className="text-xs text-gray-600 ml-2">Emails - Risk/Insurance Requests (238 unread)</span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0"></div>
                      <div className="ml-2">
                        <p className="text-xs font-medium text-gray-800">Broker Support</p>
                        <p className="text-xs text-gray-500">Policy Coverage Question <span className="text-red-500">URGENT</span></p>
                      </div>
                    </div>
                    <div className="h-16 bg-gray-100 rounded-md w-full"></div>
                  </div>
                </div>
                
                {/* Notification Pop-up */}
                <div className="absolute left-10 top-[40%] w-60 h-20 bg-white rounded-lg shadow-lg border border-gray-300 z-30">
                  <div className="bg-red-500 px-3 py-2 rounded-t-lg">
                    <p className="text-xs text-white font-medium">ALERT: 12 Certificates Expired</p>
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-gray-600">Multiple vendors out of compliance. Click to view report.</p>
                    <div className="flex justify-end mt-1">
                      <button className="text-[9px] bg-gray-200 px-2 py-0.5 rounded mr-1">Later</button>
                      <button className="text-[9px] bg-blue-500 text-white px-2 py-0.5 rounded">View</button>
                    </div>
                  </div>
                </div>
                
                {/* Spreadsheet Window - More complex and chaotic */}
                <div className="absolute right-8 top-12 w-2/3 h-2/5 bg-white rounded-lg shadow border border-gray-200 z-20">
                  <div className="bg-gray-200 px-4 py-2 rounded-t-lg flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <span className="text-xs text-gray-600 ml-2">Risk_Tracking_Master_v13_FINAL_USE-THIS-ONE.xlsx</span>
                  </div>
                  <div className="p-2">
                    <div className="grid grid-cols-5 gap-0.5">
                      {[...Array(25)].map((_, i) => (
                        <div key={i} className={`h-6 border border-gray-200 
                          ${i % 5 === 0 ? 'bg-red-50' : i % 7 === 0 ? 'bg-yellow-50' : i % 3 === 0 ? 'bg-orange-50' : 'bg-white'} 
                          text-[7px] px-0.5 flex items-center justify-center overflow-hidden`}>
                          {i % 5 === 0 ? 'EXPIRED' : i % 7 === 0 ? 'MISSING' : i % 3 === 0 ? 'CHECK' : ''}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Folders - More of them, scattered */}
                <div className="absolute left-12 bottom-12 w-3/5 h-2/5 flex">
                  <div className="w-20 h-16 bg-yellow-100 transform -rotate-6 rounded-md flex items-center justify-center mr-4 z-10">
                    <Folder className="h-5 w-5 text-yellow-500" />
                    <span className="text-[7px] text-yellow-700 ml-1">2024 Policies</span>
                  </div>
                  <div className="w-20 h-16 bg-blue-100 transform rotate-3 rounded-md flex items-center justify-center z-20">
                    <Folder className="h-5 w-5 text-blue-500" />
                    <span className="text-[7px] text-blue-700 ml-1">Claims</span>
                  </div>
                  <div className="w-20 h-16 bg-green-100 transform -rotate-2 rounded-md flex items-center justify-center absolute top-4 left-20 z-15">
                    <Folder className="h-5 w-5 text-green-500" />
                    <span className="text-[7px] text-green-700 ml-1">Vendors</span>
                  </div>
                  <div className="w-20 h-16 bg-purple-100 transform rotate-5 rounded-md flex items-center justify-center absolute bottom-0 left-32 z-25">
                    <Folder className="h-5 w-5 text-purple-500" />
                    <span className="text-[7px] text-purple-700 ml-1">Renewals</span>
                  </div>
                  <div className="absolute bottom-2 left-20 text-xs text-gray-400">Siloed department folders</div>
                </div>
                
                {/* Calendar Reminder */}
                <div className="absolute right-4 bottom-6 w-32 h-16 bg-white rounded shadow border border-gray-200 z-30">
                  <div className="bg-red-100 py-1 px-2 border-b border-gray-200">
                    <p className="text-[9px] text-red-800 font-medium">Renewal Meeting - Overdue</p>
                  </div>
                  <div className="p-2">
                    <p className="text-[8px] text-gray-600">Client Policy Review - 3 days past due</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Kavaro Way */}
          <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:rotate-1 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(43,140,116,0.3)]">
            <div className="bg-gradient-to-r from-[#2B8C74]/30 to-[#2B8C74]/10 p-6 border-b border-[#2B8C74]/30">
              <h3 className="text-2xl font-semibold text-white mb-1">The Kavaro Platform</h3>
              <p className="text-[#2B8C74] font-medium flex items-center">
                <span className="inline-block w-2 h-2 bg-[#2B8C74] rounded-full mr-2"></span>
                Connected & Intelligent
              </p>
            </div>
            
            <div className="bg-white p-8 h-[400px] relative border-l-4 border-[#2B8C74] bg-gradient-to-br from-white to-[#2B8C74]/5">
              {/* Clean UI Illustration */}
              <div className="absolute inset-0 p-8">
                {/* Platform Interface */}
                <div className="absolute inset-4 bg-gray-50 rounded-xl shadow-sm border border-gray-100">
                  {/* Header */}
                  <div className="bg-white p-4 rounded-t-xl border-b border-gray-100 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-[#2B8C74]/20 flex items-center justify-center mr-3">
                        <span className="text-[#2B8C74] text-sm font-bold">K</span>
                      </div>
                      <h4 className="text-gray-800 font-medium">Risk Intelligence Platform</h4>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">Underwriter View</div>
                      <div className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">Client View</div>
                      <div className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">Broker View</div>
                    </div>
                  </div>
                  
                  {/* Main Content */}
                  <div className="p-6">
                    {/* Central dashboard */}
                    <div className="bg-white rounded-lg border border-gray-100 p-4 mb-4">
                      <h5 className="text-sm font-medium text-gray-700 mb-3">Risk Exposure Overview</h5>
                      <div className="flex items-center justify-between mb-2">
                        <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{width: '75%'}}></div>
                        </div>
                        <span className="text-xs text-gray-500 ml-2">75%</span>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Documented</span>
                        <span>Verified</span>
                        <span>Compliant</span>
                      </div>
                    </div>
                    
                    {/* Connected stakeholders */}
                    <div className="bg-white rounded-lg border border-gray-100 p-4 mb-4">
                      <div className="flex justify-between items-center mb-3">
                        <h5 className="text-sm font-medium text-gray-700">Connected Stakeholders</h5>
                        <span className="text-xs px-2 py-1 bg-[#2B8C74]/10 text-[#2B8C74] rounded-full">All in sync</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-blue-100 mb-1"></div>
                          <span className="text-xs text-gray-600">Underwriter</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-purple-100 mb-1"></div>
                          <span className="text-xs text-gray-600">Broker</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-green-100 mb-1"></div>
                          <span className="text-xs text-gray-600">Client</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-amber-100 mb-1"></div>
                          <span className="text-xs text-gray-600">Vendor</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* AI Features */}
                    <div className="absolute bottom-6 right-6 w-64 bg-white rounded-lg shadow-lg border border-[#2B8C74]/20 p-4 hover:shadow-xl transition-shadow">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2B8C74]/30 to-[#2B8C74]/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-[#2B8C74] text-sm font-medium">AI</span>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-800">Risk Intelligence</p>
                          <p className="text-xs text-gray-600 mt-1">Policy changes detected across connected stakeholders</p>
                          <div className="flex gap-1 mt-2">
                            <div className="text-[9px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded-full">Underwriter</div>
                            <div className="text-[9px] bg-green-50 text-green-600 px-1.5 py-0.5 rounded-full">Client</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          
        <div className="flex justify-center">
          <a href="#solution" className="inline-flex items-center gap-2 text-[#2B8C74] font-medium text-lg bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full transition-colors backdrop-blur-sm">
            Discover the Kavaro Platform
            <ChevronRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}