import { Lock, FileText, Check, Tag, Clock, Shield, Brain, Bell, AlertCircle, BarChart3, Workflow, PanelTopOpen, Users } from "lucide-react";

export default function SolutionSection() {
  return (
    <section id="solution" className="py-20 md:py-32 bg-white border-b border-gray-100 text-[#0F1C3E]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 text-black">
            One Platform. Every Risk Stakeholder. <span className="text-[#2B8C74]">Total Visibility.</span>
          </h2>
          
          <p className="text-gray-800 text-xl leading-relaxed mb-5">
            Kavaro AI is more than a document system — it's your risk command center. We intake unstructured risk data from every source and use AI to classify, organize, and keep it all current, secure, and usable.
          </p>
          
          <p className="text-gray-800 text-xl leading-relaxed mb-5">
            With role-based workflows, real-time insights, and automated compliance checks, every part of the insurance ecosystem stays connected and protected.
          </p>
        </div>
        
        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          <div className="p-6 bg-[#F5F9FF] rounded-xl border border-blue-100">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 mb-4">
              <Lock className="text-blue-600 h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium mb-2">Secure Document Vault</h3>
            <p className="text-gray-600 text-sm">Centralized storage with blockchain-grade audit trails for every document action</p>
          </div>
          
          <div className="p-6 bg-[#F8F5FF] rounded-xl border border-purple-100">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-50 mb-4">
              <Brain className="text-purple-600 h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium mb-2">AI Understanding</h3>
            <p className="text-gray-600 text-sm">Intelligent analysis of policies, contracts, exposures, and loss runs</p>
          </div>
          
          <div className="p-6 bg-[#F5FFFC] rounded-xl border border-teal-100">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-50 mb-4">
              <BarChart3 className="text-teal-600 h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium mb-2">Real-time Analytics</h3>
            <p className="text-gray-600 text-sm">Customized dashboards for brokers, underwriters, and clients</p>
          </div>
          
          <div className="p-6 bg-[#FFF9F5] rounded-xl border border-orange-100">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-50 mb-4">
              <Workflow className="text-orange-600 h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium mb-2">Role-based Workflows</h3>
            <p className="text-gray-600 text-sm">Customized access and views across departments and vendors</p>
          </div>
          
          <div className="p-6 bg-[#FFF5F9] rounded-xl border border-pink-100">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-50 mb-4">
              <Bell className="text-pink-600 h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium mb-2">Compliance Alerts</h3>
            <p className="text-gray-600 text-sm">Automatic renewal tracking and compliance notifications</p>
          </div>
        </div>
        
        {/* Simplified Risk Intelligence Hub - Clean, Icon-focused Layout */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#0F1C3E] text-center">
            The Risk Management Intelligence Hub
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-16 text-center max-w-3xl mx-auto">
            Kavaro AI connects every stakeholder throughout the insurance ecosystem, providing integrated document flows and real-time risk intelligence.
          </p>
          
          {/* Simple circular hub visualization */}
          <div className="relative h-[500px] md:h-[600px] mx-auto max-w-5xl">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-[#0F1C3E]/5 rounded-3xl"></div>
            
            {/* Central Kavaro Hub */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#0F1C3E] to-[#152045] flex items-center justify-center z-10 shadow-xl">
              <div className="absolute inset-0 rounded-full border-4 border-[#2B8C74]/20"></div>
              <div className="text-center">
                <Shield className="h-10 w-10 md:h-12 md:w-12 text-[#2B8C74] mx-auto mb-2" />
                <p className="text-white font-semibold text-lg md:text-xl">Kavaro AI</p>
                <p className="text-[#2B8C74]/80 text-xs">Risk Intelligence Hub</p>
              </div>
            </div>
            
            {/* Stakeholder nodes in a circle */}
            <div className="absolute inset-0">
              {/* 1. UNDERWRITERS - Top */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/90 to-blue-600 shadow-lg flex items-center justify-center relative mb-3 group-hover:shadow-xl">
                    <FileText className="h-8 w-8 text-white" />
                    <div className="absolute -right-1 -bottom-1 w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center shadow">
                      <FileText className="h-4 w-4 text-blue-100" />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow px-3 py-2 text-center">
                    <p className="font-medium text-gray-900">Underwriters</p>
                    <p className="text-xs text-blue-700">Risk evaluation & pricing</p>
                  </div>
                </div>
                
                {/* Connection line to center */}
                <div className="absolute left-1/2 top-[60px] w-px h-[98px] bg-gradient-to-b from-blue-500/30 to-[#2B8C74]/50"></div>
              </div>
              
              {/* 2. BROKERS - Top Right */}
              <div className="absolute top-[25%] right-[15%] transform -translate-y-1/2 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/90 to-purple-600 shadow-lg flex items-center justify-center relative mb-3 group-hover:shadow-xl">
                    <Users className="h-8 w-8 text-white" />
                    <div className="absolute -right-1 -bottom-1 w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center shadow">
                      <FileText className="h-4 w-4 text-purple-100" />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow px-3 py-2 text-center">
                    <p className="font-medium text-gray-900">Brokers</p>
                    <p className="text-xs text-purple-700">Client support & renewals</p>
                  </div>
                </div>
                
                {/* Connection line to center - slanted */}
                <svg className="absolute top-[60px] left-[30px]" width="100" height="110" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" />
                      <stop offset="100%" stopColor="rgba(43, 140, 116, 0.5)" />
                    </linearGradient>
                  </defs>
                  <line x1="0" y1="0" x2="100" y2="110" stroke="url(#purpleGradient)" strokeWidth="2" />
                </svg>
              </div>
              
              {/* 3. COMPLIANCE - Bottom Right */}
              <div className="absolute bottom-[25%] right-[15%] transform translate-y-1/2 transition-all duration-300 hover:translate-y-0 group">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500/90 to-red-600 shadow-lg flex items-center justify-center relative mb-3 group-hover:shadow-xl">
                    <BarChart3 className="h-8 w-8 text-white" />
                    <div className="absolute -right-1 -bottom-1 w-8 h-8 rounded-full bg-red-700 flex items-center justify-center shadow">
                      <FileText className="h-4 w-4 text-red-100" />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow px-3 py-2 text-center">
                    <p className="font-medium text-gray-900">Compliance</p>
                    <p className="text-xs text-red-700">Legal & EHS teams</p>
                  </div>
                </div>
                
                {/* Connection line to center - slanted */}
                <svg className="absolute bottom-[60px] left-[30px]" width="100" height="110" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="redGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(239, 68, 68, 0.3)" />
                      <stop offset="100%" stopColor="rgba(43, 140, 116, 0.5)" />
                    </linearGradient>
                  </defs>
                  <line x1="0" y1="110" x2="100" y2="0" stroke="url(#redGradient)" strokeWidth="2" />
                </svg>
              </div>
              
              {/* 4. CLIENTS - Bottom */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-300 hover:translate-y-1 group">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500/90 to-green-600 shadow-lg flex items-center justify-center relative mb-3 group-hover:shadow-xl">
                    <PanelTopOpen className="h-8 w-8 text-white" />
                    <div className="absolute -right-1 -bottom-1 w-8 h-8 rounded-full bg-green-700 flex items-center justify-center shadow">
                      <FileText className="h-4 w-4 text-green-100" />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow px-3 py-2 text-center">
                    <p className="font-medium text-gray-900">Clients</p>
                    <p className="text-xs text-green-700">Risk, Ops, HR, Legal</p>
                  </div>
                </div>
                
                {/* Connection line to center */}
                <div className="absolute left-1/2 bottom-[60px] w-px h-[98px] bg-gradient-to-t from-green-500/30 to-[#2B8C74]/50"></div>
              </div>
              
              {/* 5. VENDORS - Bottom Left */}
              <div className="absolute bottom-[25%] left-[15%] transform translate-y-1/2 transition-all duration-300 hover:translate-y-0 group">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500/90 to-amber-600 shadow-lg flex items-center justify-center relative mb-3 group-hover:shadow-xl">
                    <Tag className="h-8 w-8 text-white" />
                    <div className="absolute -right-1 -bottom-1 w-8 h-8 rounded-full bg-amber-700 flex items-center justify-center shadow">
                      <FileText className="h-4 w-4 text-amber-100" />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow px-3 py-2 text-center">
                    <p className="font-medium text-gray-900">Vendors</p>
                    <p className="text-xs text-amber-700">Subcontractors & partners</p>
                  </div>
                </div>
                
                {/* Connection line to center - slanted */}
                <svg className="absolute bottom-[60px] right-[30px]" width="100" height="110" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="amberGradient" x1="100%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="rgba(217, 119, 6, 0.3)" />
                      <stop offset="100%" stopColor="rgba(43, 140, 116, 0.5)" />
                    </linearGradient>
                  </defs>
                  <line x1="100" y1="110" x2="0" y2="0" stroke="url(#amberGradient)" strokeWidth="2" />
                </svg>
              </div>
              
              {/* Outer ring */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border border-[#2B8C74]/20"></div>
            </div>
            
            {/* Document Flow Indicators - Simple Dots */}
            <div className="absolute inset-0 pointer-events-none z-0">
              {/* Underwriter flow */}
              <div className="absolute left-[calc(50%-2px)] top-[25%]">
                <div className="w-4 h-4 rounded-full bg-blue-500/50 animate-ping"></div>
              </div>
              
              {/* Broker flow */}
              <div className="absolute right-[30%] top-[35%]">
                <div className="w-4 h-4 rounded-full bg-purple-500/50 animate-ping" style={{ animationDelay: "0.5s" }}></div>
              </div>
              
              {/* Compliance flow */}
              <div className="absolute right-[30%] bottom-[35%]">
                <div className="w-4 h-4 rounded-full bg-red-500/50 animate-ping" style={{ animationDelay: "1s" }}></div>
              </div>
              
              {/* Client flow */}
              <div className="absolute left-[calc(50%-2px)] bottom-[25%]">
                <div className="w-4 h-4 rounded-full bg-green-500/50 animate-ping" style={{ animationDelay: "1.5s" }}></div>
              </div>
              
              {/* Vendor flow */}
              <div className="absolute left-[30%] bottom-[35%]">
                <div className="w-4 h-4 rounded-full bg-amber-500/50 animate-ping" style={{ animationDelay: "2s" }}></div>
              </div>
            </div>
            
            {/* Document Icons - Floating in the background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute left-[40%] top-[30%] animate-float opacity-30">
                <FileText className="h-5 w-5 text-[#0F1C3E]" />
              </div>
              
              <div className="absolute right-[40%] top-[40%] animate-float-delay-1 opacity-30">
                <FileText className="h-5 w-5 text-[#0F1C3E]" />
              </div>
              
              <div className="absolute left-[35%] bottom-[45%] animate-float-delay-2 opacity-30">
                <FileText className="h-5 w-5 text-[#0F1C3E]" />
              </div>
              
              <div className="absolute right-[35%] bottom-[35%] animate-float-delay-3 opacity-30">
                <FileText className="h-5 w-5 text-[#0F1C3E]" />
              </div>
            </div>
            
            {/* Legend - Bottom */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-6 text-xs text-gray-700">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                <span>Risk Data</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                <span>Policies</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span>Claims</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <span>Compliance</span>
              </div>
            </div>
            
            {/* Mobile explanatory text */}
            <div className="md:hidden mt-6 text-center">
              <p className="text-sm text-gray-600">
                Kavaro AI connects all stakeholders in the risk management ecosystem.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-[#0F1C3E] font-medium text-xl max-w-3xl mx-auto">
              One platform that connects every stakeholder in the risk management ecosystem with complete visibility.
            </p>
          </div>
        </div>
        

      </div>
    </section>
  );
}