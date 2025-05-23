import { Lock, FileText, Check, Tag, Clock, Shield, Brain, Bell, AlertCircle, BarChart3, Workflow, PanelTopOpen } from "lucide-react";

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
        
        {/* Platform Visualization - More Clean/Modern Approach */}
        <div className="mx-auto max-w-5xl relative">
          <div className="h-[400px] md:h-[500px] rounded-3xl bg-gradient-to-br from-[#0F1C3E] to-[#15162c] overflow-hidden relative shadow-2xl p-8 flex flex-col items-center justify-center">
            
            {/* Connected Platform Visualization */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Central Hub */}
              <div className="w-32 h-32 rounded-full bg-[#2B8C74]/20 border border-[#2B8C74]/40 flex items-center justify-center relative z-10">
                <div className="w-24 h-24 rounded-full bg-[#2B8C74]/30 flex items-center justify-center">
                  <div className="text-white font-semibold text-lg">Kavaro AI</div>
                </div>
                {/* Glowing effect */}
                <div className="absolute inset-0 rounded-full bg-[#2B8C74]/10 filter blur-md"></div>
              </div>
              
              {/* Stakeholder Nodes */}
              <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                  <span className="text-white text-sm">Underwriter</span>
                </div>
              </div>
              
              <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2">
                <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                  <span className="text-white text-sm">Client</span>
                </div>
              </div>
              
              <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
                  <span className="text-white text-sm">Broker</span>
                </div>
              </div>
              
              <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
                <div className="w-20 h-20 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                  <span className="text-white text-sm">Vendor</span>
                </div>
              </div>
              
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
                {/* Underwriter to Center */}
                <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="#2B8C74" strokeWidth="2" strokeDasharray="4,4" strokeOpacity="0.6">
                  <animate attributeName="strokeDashoffset" from="0" to="16" dur="3s" repeatCount="indefinite" />
                </line>
                
                {/* Broker to Center */}
                <line x1="75%" y1="25%" x2="50%" y2="50%" stroke="#2B8C74" strokeWidth="2" strokeDasharray="4,4" strokeOpacity="0.6">
                  <animate attributeName="strokeDashoffset" from="0" to="16" dur="3s" repeatCount="indefinite" />
                </line>
                
                {/* Client to Center */}
                <line x1="25%" y1="75%" x2="50%" y2="50%" stroke="#2B8C74" strokeWidth="2" strokeDasharray="4,4" strokeOpacity="0.6">
                  <animate attributeName="strokeDashoffset" from="0" to="16" dur="3s" repeatCount="indefinite" />
                </line>
                
                {/* Vendor to Center */}
                <line x1="75%" y1="75%" x2="50%" y2="50%" stroke="#2B8C74" strokeWidth="2" strokeDasharray="4,4" strokeOpacity="0.6">
                  <animate attributeName="strokeDashoffset" from="0" to="16" dur="3s" repeatCount="indefinite" />
                </line>
              </svg>
              
              {/* Data Flow Visualization */}
              <div className="absolute left-[30%] top-[30%] transform -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm px-2 py-1 rounded text-xs text-white border border-white/20">
                <div className="flex items-center gap-1">
                  <FileText className="h-3 w-3 text-[#2B8C74]" />
                  <span>Risk Data</span>
                </div>
              </div>
              
              <div className="absolute right-[30%] top-[30%] transform translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm px-2 py-1 rounded text-xs text-white border border-white/20">
                <div className="flex items-center gap-1">
                  <Brain className="h-3 w-3 text-[#2B8C74]" />
                  <span>AI Analysis</span>
                </div>
              </div>
              
              <div className="absolute left-[30%] bottom-[30%] transform -translate-x-1/2 translate-y-1/2 bg-white/10 backdrop-blur-sm px-2 py-1 rounded text-xs text-white border border-white/20">
                <div className="flex items-center gap-1">
                  <Bell className="h-3 w-3 text-[#2B8C74]" />
                  <span>Alerts</span>
                </div>
              </div>
              
              <div className="absolute right-[30%] bottom-[30%] transform translate-x-1/2 translate-y-1/2 bg-white/10 backdrop-blur-sm px-2 py-1 rounded text-xs text-white border border-white/20">
                <div className="flex items-center gap-1">
                  <Check className="h-3 w-3 text-[#2B8C74]" />
                  <span>Compliance</span>
                </div>
              </div>
            </div>
            
            {/* Platform Description */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                One Platform. Every Risk Stakeholder. Total Visibility.
              </div>
            </div>
          </div>
          
          <p className="text-center text-xl text-gray-700 mt-8 max-w-3xl mx-auto">
            Your risk management platform stays connected, intelligent, and proactive — all in one place.
          </p>
        </div>
        

      </div>
    </section>
  );
}