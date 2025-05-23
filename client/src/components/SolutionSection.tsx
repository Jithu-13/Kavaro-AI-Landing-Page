import { Lock, FileText, Check, Tag, Clock, Shield, Brain, Bell, AlertCircle, BarChart3, Workflow, PanelTopOpen, Users } from "lucide-react";

export default function SolutionSection() {
  return (
    <section id="solution" className="py-20 md:py-32 bg-white border-b border-gray-100 text-[#0F1C3E]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 text-[#0F1C3E]">
            The Risk Management Bridge
          </h2>
          
          <p className="text-gray-600 text-xl leading-relaxed font-light">
            One platform connecting underwriters, brokers, clients, vendors, and compliance teams with total visibility.
          </p>
        </div>
        
        {/* Key Benefits - Apple-style Grid Cards */}
        <div className="mb-24">
          <div className="max-w-6xl mx-auto">
            {/* Feature cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
              {/* Card 1: Secure Vault */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#3584E4]/20 transition-all duration-300 group">
                <div className="relative flex items-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#3584E4]/10 group-hover:scale-105 transition-transform duration-300">
                    <Lock className="text-[#3584E4] h-7 w-7" />
                  </div>
                  <div className="absolute -inset-2 bg-[#3584E4]/5 rounded-full blur-xl opacity-60 -z-10"></div>
                </div>
                <h3 className="text-[#0F1C3E] text-xl font-medium mb-3">Secure Vault</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  Enterprise-grade document security with immutable audit trails tracking every action.
                </p>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3584E4]"></div>
                      <span className="text-xs text-gray-500">End-to-end encryption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3584E4]"></div>
                      <span className="text-xs text-gray-500">Tamper-proof logs</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card 2: AI Analysis */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#9563DE]/20 transition-all duration-300 group">
                <div className="relative flex items-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#9563DE]/10 group-hover:scale-105 transition-transform duration-300">
                    <Brain className="text-[#9563DE] h-7 w-7" />
                  </div>
                  <div className="absolute -inset-2 bg-[#9563DE]/5 rounded-full blur-xl opacity-60 -z-10"></div>
                </div>
                <h3 className="text-[#0F1C3E] text-xl font-medium mb-3">AI Analysis</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  Intelligent document understanding that extracts relevant data and identifies patterns across policies.
                </p>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#9563DE]"></div>
                      <span className="text-xs text-gray-500">Smart extraction</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#9563DE]"></div>
                      <span className="text-xs text-gray-500">Pattern recognition</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card 3: Real-time Insights */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#2B8C74]/20 transition-all duration-300 group">
                <div className="relative flex items-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#2B8C74]/10 group-hover:scale-105 transition-transform duration-300">
                    <BarChart3 className="text-[#2B8C74] h-7 w-7" />
                  </div>
                  <div className="absolute -inset-2 bg-[#2B8C74]/5 rounded-full blur-xl opacity-60 -z-10"></div>
                </div>
                <h3 className="text-[#0F1C3E] text-xl font-medium mb-3">Real-time Insights</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  Customized dashboards that surface relevant information for each stakeholder's needs.
                </p>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2B8C74]"></div>
                      <span className="text-xs text-gray-500">Custom visualizations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2B8C74]"></div>
                      <span className="text-xs text-gray-500">Live data</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card 4: Role-based Access */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#F0B86E]/20 transition-all duration-300 group">
                <div className="relative flex items-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#F0B86E]/10 group-hover:scale-105 transition-transform duration-300">
                    <Workflow className="text-[#F0B86E] h-7 w-7" />
                  </div>
                  <div className="absolute -inset-2 bg-[#F0B86E]/5 rounded-full blur-xl opacity-60 -z-10"></div>
                </div>
                <h3 className="text-[#0F1C3E] text-xl font-medium mb-3">Role-based Access</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  Tailored workflows and permissions that give each stakeholder exactly what they need.
                </p>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F0B86E]"></div>
                      <span className="text-xs text-gray-500">Custom permissions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F0B86E]"></div>
                      <span className="text-xs text-gray-500">Workflow automation</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card 5: Smart Alerts */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#E25C5C]/20 transition-all duration-300 group">
                <div className="relative flex items-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#E25C5C]/10 group-hover:scale-105 transition-transform duration-300">
                    <Bell className="text-[#E25C5C] h-7 w-7" />
                  </div>
                  <div className="absolute -inset-2 bg-[#E25C5C]/5 rounded-full blur-xl opacity-60 -z-10"></div>
                </div>
                <h3 className="text-[#0F1C3E] text-xl font-medium mb-3">Smart Alerts</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  Proactive notifications for renewals, compliance issues, and critical risk changes.
                </p>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E25C5C]"></div>
                      <span className="text-xs text-gray-500">Deadline tracking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E25C5C]"></div>
                      <span className="text-xs text-gray-500">Risk change alerts</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card 6: Advanced Visualization - Highlighted feature card */}
              <div className="bg-[#0F1C3E] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group text-white">
                <div className="relative flex items-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 group-hover:scale-105 transition-transform duration-300">
                    <Users className="text-white h-7 w-7" />
                  </div>
                  <div className="absolute -inset-2 bg-white/5 rounded-full blur-xl opacity-40 -z-10"></div>
                </div>
                <h3 className="text-white text-xl font-medium mb-3">Network Visualization</h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  See the connections between all stakeholders in your risk ecosystem in one intuitive interface.
                </p>
                
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                      <span className="text-xs text-gray-300">Relationship mapping</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                      <span className="text-xs text-gray-300">Document flow</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Apple-inspired Risk Intelligence Hub */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h3 className="text-2xl md:text-3xl font-medium mb-4 text-[#0F1C3E] text-center tracking-tight">
            Risk Intelligence Network
          </h3>
          <p className="text-gray-500 text-lg leading-relaxed mb-16 text-center max-w-2xl mx-auto font-light">
            An intelligent ecosystem where all risk stakeholders share a unified view of documents, policies, and insights.
          </p>
          
          {/* Apple-inspired hub visualization */}
          <div className="relative h-[500px] md:h-[600px] mx-auto max-w-5xl">
            {/* Clean white background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 rounded-[32px] shadow-sm border border-gray-100"></div>
            
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="h-full w-full" style={{ 
                backgroundImage: 'radial-gradient(circle, #0F1C3E 1px, transparent 1px)',
                backgroundSize: '30px 30px' 
              }}></div>
            </div>
            
            {/* Central Kavaro Hub */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#0F1C3E] to-[#152045] flex items-center justify-center z-10 shadow-lg">
              <div className="absolute inset-0 rounded-full border-2 border-[#2B8C74]/10"></div>
              
              {/* Subtle glow effect */}
              <div className="absolute -inset-3 rounded-full bg-[#2B8C74]/5 blur-xl"></div>
              
              {/* Content */}
              <div className="text-center">
                <Shield className="h-12 w-12 md:h-14 md:w-14 text-[#2B8C74] mx-auto mb-2" />
                <p className="text-white font-medium text-lg md:text-xl">Kavaro AI</p>
                <p className="text-[#2B8C74]/90 text-xs font-light">Risk Intelligence Hub</p>
              </div>
            </div>
            
            {/* Outer ring - Apple-style thin border */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border border-gray-200"></div>
            
            {/* Stakeholder nodes in a circle - Apple-inspired clean design */}
            <div className="absolute inset-0">
              {/* 1. UNDERWRITERS - Top */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#3584E4] to-[#0A65C2] shadow-md flex items-center justify-center relative mb-3 group-hover:shadow-lg">
                    <FileText className="h-8 w-8 text-white" />
                    <div className="absolute -right-1 -bottom-1 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100">
                      <FileText className="h-4 w-4 text-[#3584E4]" />
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl shadow-sm px-3 py-2 text-center border border-gray-100">
                    <p className="font-medium text-[#0F1C3E]">Underwriters</p>
                    <p className="text-xs text-gray-500 font-light">Risk evaluation & pricing</p>
                  </div>
                </div>
                
                {/* Connection line to center - clean thin line */}
                <div className="absolute left-1/2 top-[60px] w-px h-[98px] bg-gradient-to-b from-[#3584E4]/20 to-[#2B8C74]/30"></div>
              </div>
              
              {/* 2. BROKERS - Top Right */}
              <div className="absolute top-[25%] right-[15%] transform -translate-y-1/2 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#9563DE] to-[#7540BA] shadow-md flex items-center justify-center relative mb-3 group-hover:shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                    <div className="absolute -right-1 -bottom-1 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100">
                      <FileText className="h-4 w-4 text-[#9563DE]" />
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl shadow-sm px-3 py-2 text-center border border-gray-100">
                    <p className="font-medium text-[#0F1C3E]">Brokers</p>
                    <p className="text-xs text-gray-500 font-light">Client support & renewals</p>
                  </div>
                </div>
                
                {/* Connection line to center - clean thin line */}
                <svg className="absolute top-[60px] left-[30px]" width="100" height="110" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(149, 99, 222, 0.2)" />
                      <stop offset="100%" stopColor="rgba(43, 140, 116, 0.3)" />
                    </linearGradient>
                  </defs>
                  <line x1="0" y1="0" x2="100" y2="110" stroke="url(#purpleGradient)" strokeWidth="1" />
                </svg>
              </div>
              
              {/* 3. COMPLIANCE - Bottom Right */}
              <div className="absolute bottom-[25%] right-[15%] transform translate-y-1/2 transition-all duration-300 hover:translate-y-0 group">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#E25C5C] to-[#D12F2F] shadow-md flex items-center justify-center relative mb-3 group-hover:shadow-lg">
                    <BarChart3 className="h-8 w-8 text-white" />
                    <div className="absolute -right-1 -bottom-1 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100">
                      <FileText className="h-4 w-4 text-[#E25C5C]" />
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl shadow-sm px-3 py-2 text-center border border-gray-100">
                    <p className="font-medium text-[#0F1C3E]">Compliance</p>
                    <p className="text-xs text-gray-500 font-light">Legal & EHS teams</p>
                  </div>
                </div>
                
                {/* Connection line to center - clean thin line */}
                <svg className="absolute bottom-[60px] left-[30px]" width="100" height="110" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="redGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(226, 92, 92, 0.2)" />
                      <stop offset="100%" stopColor="rgba(43, 140, 116, 0.3)" />
                    </linearGradient>
                  </defs>
                  <line x1="0" y1="110" x2="100" y2="0" stroke="url(#redGradient)" strokeWidth="1" />
                </svg>
              </div>
              
              {/* 4. CLIENTS - Bottom */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-300 hover:translate-y-1 group">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#2B8C74] to-[#1D6A59] shadow-md flex items-center justify-center relative mb-3 group-hover:shadow-lg">
                    <PanelTopOpen className="h-8 w-8 text-white" />
                    <div className="absolute -right-1 -bottom-1 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100">
                      <FileText className="h-4 w-4 text-[#2B8C74]" />
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl shadow-sm px-3 py-2 text-center border border-gray-100">
                    <p className="font-medium text-[#0F1C3E]">Clients</p>
                    <p className="text-xs text-gray-500 font-light">Risk, Ops, HR, Legal</p>
                  </div>
                </div>
                
                {/* Connection line to center - clean thin line */}
                <div className="absolute left-1/2 bottom-[60px] w-px h-[98px] bg-gradient-to-t from-[#2B8C74]/20 to-[#2B8C74]/30"></div>
              </div>
              
              {/* 5. VENDORS - Bottom Left */}
              <div className="absolute bottom-[25%] left-[15%] transform translate-y-1/2 transition-all duration-300 hover:translate-y-0 group">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F0B86E] to-[#E39E41] shadow-md flex items-center justify-center relative mb-3 group-hover:shadow-lg">
                    <Tag className="h-8 w-8 text-white" />
                    <div className="absolute -right-1 -bottom-1 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100">
                      <FileText className="h-4 w-4 text-[#F0B86E]" />
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl shadow-sm px-3 py-2 text-center border border-gray-100">
                    <p className="font-medium text-[#0F1C3E]">Vendors</p>
                    <p className="text-xs text-gray-500 font-light">Subcontractors & partners</p>
                  </div>
                </div>
                
                {/* Connection line to center - clean thin line */}
                <svg className="absolute bottom-[60px] right-[30px]" width="100" height="110" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="amberGradient" x1="100%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="rgba(240, 184, 110, 0.2)" />
                      <stop offset="100%" stopColor="rgba(43, 140, 116, 0.3)" />
                    </linearGradient>
                  </defs>
                  <line x1="100" y1="110" x2="0" y2="0" stroke="url(#amberGradient)" strokeWidth="1" />
                </svg>
              </div>
            </div>
            
            {/* Document Flow Indicators - Subtle Apple-style dots */}
            <div className="absolute inset-0 pointer-events-none z-0">
              {/* Underwriter flow */}
              <div className="absolute left-[calc(50%-2px)] top-[25%]">
                <div className="w-2 h-2 rounded-full bg-[#3584E4]/50 animate-pulse"></div>
              </div>
              
              {/* Broker flow */}
              <div className="absolute right-[30%] top-[35%]">
                <div className="w-2 h-2 rounded-full bg-[#9563DE]/50 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              </div>
              
              {/* Compliance flow */}
              <div className="absolute right-[30%] bottom-[35%]">
                <div className="w-2 h-2 rounded-full bg-[#E25C5C]/50 animate-pulse" style={{ animationDelay: "1s" }}></div>
              </div>
              
              {/* Client flow */}
              <div className="absolute left-[calc(50%-2px)] bottom-[25%]">
                <div className="w-2 h-2 rounded-full bg-[#2B8C74]/50 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
              </div>
              
              {/* Vendor flow */}
              <div className="absolute left-[30%] bottom-[35%]">
                <div className="w-2 h-2 rounded-full bg-[#F0B86E]/50 animate-pulse" style={{ animationDelay: "2s" }}></div>
              </div>
            </div>
            
            {/* Document Icons - Floating with Apple aesthetics */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute left-[40%] top-[35%] animate-float opacity-10">
                <FileText className="h-4 w-4 text-[#0F1C3E]" />
              </div>
              
              <div className="absolute right-[40%] top-[40%] animate-float opacity-10" style={{ animationDelay: "2s" }}>
                <FileText className="h-4 w-4 text-[#0F1C3E]" />
              </div>
              
              <div className="absolute left-[35%] bottom-[40%] animate-float opacity-10" style={{ animationDelay: "4s" }}>
                <FileText className="h-4 w-4 text-[#0F1C3E]" />
              </div>
              
              <div className="absolute right-[35%] bottom-[35%] animate-float opacity-10" style={{ animationDelay: "6s" }}>
                <FileText className="h-4 w-4 text-[#0F1C3E]" />
              </div>
            </div>
            
            {/* Legend - Apple-styled subtle pill buttons */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
              <div className="bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs text-[#0F1C3E] font-light flex items-center shadow-sm border border-gray-100">
                <div className="w-2 h-2 rounded-full bg-[#3584E4] mr-2"></div>
                <span>Exposure Data</span>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs text-[#0F1C3E] font-light flex items-center shadow-sm border border-gray-100">
                <div className="w-2 h-2 rounded-full bg-[#9563DE] mr-2"></div>
                <span>Policies</span>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs text-[#0F1C3E] font-light flex items-center shadow-sm border border-gray-100">
                <div className="w-2 h-2 rounded-full bg-[#2B8C74] mr-2"></div>
                <span>Certificates</span>
              </div>
            </div>
          </div>
          
          {/* Simple concluding message */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-[#0F1C3E]/5 px-5 py-2 rounded-full">
              <p className="text-[#0F1C3E] font-medium text-sm">
                Complete visibility across your entire risk landscape
              </p>
            </div>
          </div>
        </div>
        

      </div>
    </section>
  );
}