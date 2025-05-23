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
        
        {/* Key Benefits - Apple-style cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-24">
          <div className="flex flex-col items-center text-center group cursor-default">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#3584E4]/10 mb-6 group-hover:scale-105 transition-transform duration-300">
              <Lock className="text-[#3584E4] h-7 w-7" />
            </div>
            <h3 className="text-[#0F1C3E] text-lg font-medium mb-2">Secure Vault</h3>
            <p className="text-gray-500 text-sm font-light">Document storage with blockchain-grade audit trails</p>
          </div>
          
          <div className="flex flex-col items-center text-center group cursor-default">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#9563DE]/10 mb-6 group-hover:scale-105 transition-transform duration-300">
              <Brain className="text-[#9563DE] h-7 w-7" />
            </div>
            <h3 className="text-[#0F1C3E] text-lg font-medium mb-2">AI Analysis</h3>
            <p className="text-gray-500 text-sm font-light">Intelligent processing of policies and risk data</p>
          </div>
          
          <div className="flex flex-col items-center text-center group cursor-default">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#2B8C74]/10 mb-6 group-hover:scale-105 transition-transform duration-300">
              <BarChart3 className="text-[#2B8C74] h-7 w-7" />
            </div>
            <h3 className="text-[#0F1C3E] text-lg font-medium mb-2">Real-time Insights</h3>
            <p className="text-gray-500 text-sm font-light">Customized views for all stakeholders</p>
          </div>
          
          <div className="flex flex-col items-center text-center group cursor-default">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#F0B86E]/10 mb-6 group-hover:scale-105 transition-transform duration-300">
              <Workflow className="text-[#F0B86E] h-7 w-7" />
            </div>
            <h3 className="text-[#0F1C3E] text-lg font-medium mb-2">Role-based Access</h3>
            <p className="text-gray-500 text-sm font-light">Tailored workflows for every department</p>
          </div>
          
          <div className="flex flex-col items-center text-center group cursor-default">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#E25C5C]/10 mb-6 group-hover:scale-105 transition-transform duration-300">
              <Bell className="text-[#E25C5C] h-7 w-7" />
            </div>
            <h3 className="text-[#0F1C3E] text-lg font-medium mb-2">Smart Alerts</h3>
            <p className="text-gray-500 text-sm font-light">Automated compliance monitoring</p>
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
          
          <div className="mt-16 text-center">
            <p className="text-[#0F1C3E] font-normal text-xl max-w-3xl mx-auto leading-relaxed">
              One platform that connects every stakeholder in the risk management ecosystem with complete visibility.
            </p>
            
            {/* Bottom feature summary - Apple style */}
            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
              <div className="text-center">
                <Shield className="h-6 w-6 text-[#2B8C74] mx-auto mb-2" />
                <h4 className="text-sm font-medium text-[#0F1C3E] mb-1">Secure Vault</h4>
                <p className="text-xs text-gray-500 font-light">End-to-end encrypted document storage</p>
              </div>
              
              <div className="text-center">
                <Bell className="h-6 w-6 text-[#2B8C74] mx-auto mb-2" />
                <h4 className="text-sm font-medium text-[#0F1C3E] mb-1">Smart Alerts</h4>
                <p className="text-xs text-gray-500 font-light">Automated renewal & compliance monitoring</p>
              </div>
              
              <div className="text-center">
                <Brain className="h-6 w-6 text-[#2B8C74] mx-auto mb-2" />
                <h4 className="text-sm font-medium text-[#0F1C3E] mb-1">AI Analysis</h4>
                <p className="text-xs text-gray-500 font-light">Intelligent document & risk assessment</p>
              </div>
            </div>
          </div>
        </div>
        

      </div>
    </section>
  );
}