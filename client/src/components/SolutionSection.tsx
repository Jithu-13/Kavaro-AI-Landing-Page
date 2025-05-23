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
        
        {/* The Risk Intelligence Hub */}
        <div className="mx-auto max-w-5xl relative">
          <div className="h-[500px] md:h-[600px] rounded-3xl bg-gradient-to-br from-[#0F1C3E] to-[#15162c] overflow-hidden relative shadow-2xl p-8 flex flex-col items-center justify-center">
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-15">
              <div className="h-full w-full" style={{ 
                backgroundImage: 'radial-gradient(circle, rgba(43,140,116,0.1) 1px, transparent 1px)',
                backgroundSize: '30px 30px' 
              }}></div>
            </div>
            
            {/* Connected Platform Visualization - "The Risk Intelligence Hub" */}
            <div className="relative w-full h-full flex items-center justify-center">
              
              {/* Central Hub - Kavaro AI Platform */}
              <div className="w-40 h-40 relative z-20">
                {/* Shield-like shape with hexagonal/neural network styling */}
                <div className="w-full h-full bg-gradient-to-br from-[#2B8C74]/40 to-[#2B8C74]/20 rounded-xl transform rotate-45 border border-[#2B8C74]/50 shadow-lg">
                  <div className="absolute inset-0 transform -rotate-45 flex flex-col items-center justify-center">
                    <div className="text-white font-semibold text-lg mb-1">Kavaro AI</div>
                    <div className="text-white/80 text-xs">Platform</div>
                    
                    {/* Platform core icons */}
                    <div className="flex mt-2 space-x-2">
                      <div className="w-6 h-6 rounded-full bg-[#2B8C74]/20 flex items-center justify-center">
                        <Brain className="w-3 h-3 text-[#2B8C74]" />
                      </div>
                      <div className="w-6 h-6 rounded-full bg-[#2B8C74]/20 flex items-center justify-center">
                        <Shield className="w-3 h-3 text-[#2B8C74]" />
                      </div>
                      <div className="w-6 h-6 rounded-full bg-[#2B8C74]/20 flex items-center justify-center">
                        <FileText className="w-3 h-3 text-[#2B8C74]" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-[#2B8C74]/10 filter blur-lg rounded-xl transform rotate-45"></div>
              </div>
              
              {/* Underwriters Node - Top */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center mb-2">
                  <FileText className="h-8 w-8 text-blue-300" />
                </div>
                <span className="text-white font-medium text-sm">Underwriters</span>
                <div className="bg-blue-900/30 backdrop-blur-sm rounded-full px-3 py-1 mt-1 max-w-[150px] text-center">
                  <span className="text-blue-100 text-xs">Clean exposure data & document sets</span>
                </div>
              </div>
              
              {/* Brokers Node - Right */}
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-purple-300" />
                </div>
                <span className="text-white font-medium text-sm">Brokers</span>
                <div className="bg-purple-900/30 backdrop-blur-sm rounded-full px-3 py-1 mt-1 max-w-[150px] text-center">
                  <span className="text-purple-100 text-xs">Better client intel, better retention</span>
                </div>
              </div>
              
              {/* Clients Node - Bottom */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mb-2">
                  <PanelTopOpen className="h-8 w-8 text-green-300" />
                </div>
                <span className="text-white font-medium text-sm">Clients</span>
                <div className="bg-green-900/30 backdrop-blur-sm rounded-full px-3 py-1 mt-1 max-w-[150px] text-center">
                  <span className="text-green-100 text-xs">Stay audit-ready without spreadsheets</span>
                </div>
              </div>
              
              {/* Vendors Node - Left */}
              <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mb-2">
                  <FileText className="h-8 w-8 text-amber-300" />
                </div>
                <span className="text-white font-medium text-sm">Vendors</span>
                <div className="bg-amber-900/30 backdrop-blur-sm rounded-full px-3 py-1 mt-1 max-w-[150px] text-center">
                  <span className="text-amber-100 text-xs">Easy uploads, no back-and-forth</span>
                </div>
              </div>
              
              {/* Compliance Node - Between Bottom and Left */}
              <div className="absolute left-1/4 bottom-1/4 transform -translate-x-1/2 translate-y-1/2 z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center mb-2">
                  <BarChart3 className="h-8 w-8 text-red-300" />
                </div>
                <span className="text-white font-medium text-sm">Compliance</span>
                <div className="bg-red-900/30 backdrop-blur-sm rounded-full px-3 py-1 mt-1 max-w-[150px] text-center">
                  <span className="text-red-100 text-xs">Centralized visibility & reporting</span>
                </div>
              </div>
              
              {/* Connection Lines using SVG */}
              <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
                {/* Underwriter to Center */}
                <path 
                  d="M 50% 20%, Q 60% 35%, 50% 50%" 
                  fill="none" 
                  stroke="#2B8C74" 
                  strokeWidth="2" 
                  strokeDasharray="4,4" 
                  strokeOpacity="0.8"
                />
                
                {/* Center to Underwriter */}
                <path 
                  d="M 50% 50%, Q 40% 35%, 50% 20%" 
                  fill="none" 
                  stroke="#2B8C74" 
                  strokeWidth="2" 
                  strokeDasharray="4,4" 
                  strokeOpacity="0.8"
                />
                
                {/* Broker to Center */}
                <path 
                  d="M 80% 50%, Q 65% 40%, 50% 50%" 
                  fill="none" 
                  stroke="#2B8C74" 
                  strokeWidth="2" 
                  strokeDasharray="4,4" 
                  strokeOpacity="0.8"
                />
                
                {/* Center to Broker */}
                <path 
                  d="M 50% 50%, Q 65% 60%, 80% 50%" 
                  fill="none" 
                  stroke="#2B8C74" 
                  strokeWidth="2" 
                  strokeDasharray="4,4" 
                  strokeOpacity="0.8"
                />
                
                {/* Client to Center */}
                <path 
                  d="M 50% 80%, Q 40% 65%, 50% 50%" 
                  fill="none" 
                  stroke="#2B8C74" 
                  strokeWidth="2" 
                  strokeDasharray="4,4" 
                  strokeOpacity="0.8"
                />
                
                {/* Center to Client */}
                <path 
                  d="M 50% 50%, Q 60% 65%, 50% 80%" 
                  fill="none" 
                  stroke="#2B8C74" 
                  strokeWidth="2" 
                  strokeDasharray="4,4" 
                  strokeOpacity="0.8"
                />
                
                {/* Vendor to Center */}
                <path 
                  d="M 20% 50%, Q 35% 60%, 50% 50%" 
                  fill="none" 
                  stroke="#2B8C74" 
                  strokeWidth="2" 
                  strokeDasharray="4,4" 
                  strokeOpacity="0.8"
                />
                
                {/* Center to Vendor */}
                <path 
                  d="M 50% 50%, Q 35% 40%, 20% 50%" 
                  fill="none" 
                  stroke="#2B8C74" 
                  strokeWidth="2" 
                  strokeDasharray="4,4" 
                  strokeOpacity="0.8"
                />
                
                {/* Compliance to Center */}
                <path 
                  d="M 25% 75%, Q 35% 65%, 50% 50%" 
                  fill="none" 
                  stroke="#2B8C74" 
                  strokeWidth="2" 
                  strokeDasharray="4,4" 
                  strokeOpacity="0.8"
                />
                
                {/* Center to Compliance */}
                <path 
                  d="M 50% 50%, Q 40% 60%, 25% 75%" 
                  fill="none" 
                  stroke="#2B8C74" 
                  strokeWidth="2" 
                  strokeDasharray="4,4" 
                  strokeOpacity="0.8"
                />
              </svg>
              
              {/* Border Features - Bottom */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 border border-white/10">
                  <Shield className="h-3.5 w-3.5 text-[#2B8C74]" />
                  <span className="text-white text-xs">Blockchain-grade audit trails</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 border border-white/10">
                  <Lock className="h-3.5 w-3.5 text-[#2B8C74]" />
                  <span className="text-white text-xs">Encryption & permissioning</span>
                </div>
              </div>
              
              {/* Platform Description */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-30">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-base font-medium border border-[#2B8C74]/20">
                  The Risk Intelligence Hub
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-xl text-gray-700 mt-8 max-w-3xl mx-auto">
            One platform that connects every stakeholder in the risk management ecosystem with total visibility and intelligence.
          </p>
        </div>
        

      </div>
    </section>
  );
}