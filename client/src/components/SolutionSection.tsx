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
        
        {/* The Risk Intelligence Hub - Cleaner Design */}
        <div className="mx-auto max-w-5xl relative">
          <div className="h-[500px] md:h-[600px] rounded-3xl bg-gradient-to-br from-[#091630] to-[#152045] overflow-hidden relative shadow-2xl flex flex-col items-center justify-center">
            {/* Background pattern - subtle hex grid */}
            <div className="absolute inset-0 opacity-5">
              <div className="h-full w-full" style={{ 
                backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'28\' height=\'49\' viewBox=\'0 0 28 49\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg id=\'hexagons\' fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                backgroundSize: '28px 49px' 
              }}></div>
            </div>

            {/* Outer ring - subtle circular highlight */}
            <div className="absolute w-[90%] h-[90%] rounded-full border border-[#2B8C74]/10"></div>
            
            {/* Connected Platform Visualization - "The Risk Intelligence Hub" */}
            <div className="relative w-full h-full flex items-center justify-center">
              
              {/* Central Hub - Kavaro AI Platform */}
              <div className="w-48 h-48 relative z-20">
                {/* Hexagonal shield background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F1C3E] to-[#152045] rounded-xl transform rotate-45 shadow-xl"></div>
                
                {/* Kavaro shield icon */}
                <div className="absolute inset-0 flex items-center justify-center transform -rotate-45">
                  <div className="w-36 h-36 rounded-lg bg-gradient-to-br from-[#2B8C74]/30 to-[#2B8C74]/5 border border-[#2B8C74]/30 flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-[#2B8C74]/20 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-[#2B8C74]" />
                      </div>
                    </div>
                    <div className="text-white font-semibold text-xl">Kavaro AI</div>
                    <div className="text-[#2B8C74] text-sm font-medium mt-1">Platform</div>
                    
                    {/* Horizontal divider */}
                    <div className="w-16 h-0.5 bg-[#2B8C74]/30 my-2"></div>
                    
                    {/* Platform core icons */}
                    <div className="flex space-x-4 mt-2">
                      <div className="w-6 h-6 rounded-full bg-[#2B8C74]/10 flex items-center justify-center">
                        <Brain className="w-3 h-3 text-[#2B8C74]" />
                      </div>
                      <div className="w-6 h-6 rounded-full bg-[#2B8C74]/10 flex items-center justify-center">
                        <FileText className="w-3 h-3 text-[#2B8C74]" />
                      </div>
                      <div className="w-6 h-6 rounded-full bg-[#2B8C74]/10 flex items-center justify-center">
                        <Bell className="w-3 h-3 text-[#2B8C74]" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-[#2B8C74]/5 filter blur-xl rounded-xl transform rotate-45"></div>
              </div>
              
              {/* Underwriters Node - Top */}
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 flex items-center justify-center mb-3 shadow-md">
                  <FileText className="h-7 w-7 text-blue-300" />
                </div>
                <div className="bg-blue-900/40 backdrop-blur-sm rounded-full px-3 py-1.5 border border-blue-500/20">
                  <div className="flex flex-col items-center">
                    <span className="text-white font-medium text-xs mb-0.5">Underwriters</span>
                    <span className="text-blue-100 text-[10px] max-w-[130px] text-center">Clean exposure data</span>
                  </div>
                </div>
              </div>
              
              {/* Brokers Node - Right */}
              <div className="absolute right-12 top-1/2 transform -translate-y-1/2 z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30 flex items-center justify-center mb-3 shadow-md">
                  <Users className="h-7 w-7 text-purple-300" />
                </div>
                <div className="bg-purple-900/40 backdrop-blur-sm rounded-full px-3 py-1.5 border border-purple-500/20">
                  <div className="flex flex-col items-center">
                    <span className="text-white font-medium text-xs mb-0.5">Brokers</span>
                    <span className="text-purple-100 text-[10px] max-w-[130px] text-center">Better client retention</span>
                  </div>
                </div>
              </div>
              
              {/* Clients Node - Bottom */}
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 flex items-center justify-center mb-3 shadow-md">
                  <PanelTopOpen className="h-7 w-7 text-green-300" />
                </div>
                <div className="bg-green-900/40 backdrop-blur-sm rounded-full px-3 py-1.5 border border-green-500/20">
                  <div className="flex flex-col items-center">
                    <span className="text-white font-medium text-xs mb-0.5">Clients</span>
                    <span className="text-green-100 text-[10px] max-w-[130px] text-center">Always audit-ready</span>
                  </div>
                </div>
              </div>
              
              {/* Vendors Node - Left */}
              <div className="absolute left-12 top-1/2 transform -translate-y-1/2 z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center mb-3 shadow-md">
                  <FileText className="h-7 w-7 text-amber-300" />
                </div>
                <div className="bg-amber-900/40 backdrop-blur-sm rounded-full px-3 py-1.5 border border-amber-500/20">
                  <div className="flex flex-col items-center">
                    <span className="text-white font-medium text-xs mb-0.5">Vendors</span>
                    <span className="text-amber-100 text-[10px] max-w-[130px] text-center">Easy document uploads</span>
                  </div>
                </div>
              </div>
              
              {/* Compliance Node - Bottom Left */}
              <div className="absolute left-[15%] bottom-[25%] z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-500/30 flex items-center justify-center mb-3 shadow-md">
                  <BarChart3 className="h-7 w-7 text-red-300" />
                </div>
                <div className="bg-red-900/40 backdrop-blur-sm rounded-full px-3 py-1.5 border border-red-500/20">
                  <div className="flex flex-col items-center">
                    <span className="text-white font-medium text-xs mb-0.5">Compliance</span>
                    <span className="text-red-100 text-[10px] max-w-[130px] text-center">Centralized reporting</span>
                  </div>
                </div>
              </div>
              
              {/* Connection Lines - Cleaner Design */}
              <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
                {/* Outer connection ring */}
                <circle cx="50%" cy="50%" r="43%" fill="none" stroke="#2B8C74" strokeWidth="0.5" strokeOpacity="0.2" />
                
                {/* Data flow lines */}
                <g stroke="#2B8C74" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1,6" strokeOpacity="0.6">
                  {/* Underwriter to Center */}
                  <path d="M 50% 20%, L 50% 35%" />
                  {/* Center to Underwriter - small arrow */}
                  <path d="M 50% 35%, 47% 30%" />
                  <path d="M 50% 35%, 53% 30%" />
                  
                  {/* Broker to Center */}
                  <path d="M 80% 50%, L 65% 50%" />
                  {/* Center to Broker - small arrow */}
                  <path d="M 65% 50%, 70% 47%" />
                  <path d="M 65% 50%, 70% 53%" />
                  
                  {/* Client to Center */}
                  <path d="M 50% 80%, L 50% 65%" />
                  {/* Center to Client - small arrow */}
                  <path d="M 50% 65%, 47% 70%" />
                  <path d="M 50% 65%, 53% 70%" />
                  
                  {/* Vendor to Center */}
                  <path d="M 20% 50%, L 35% 50%" />
                  {/* Center to Vendor - small arrow */}
                  <path d="M 35% 50%, 30% 47%" />
                  <path d="M 35% 50%, 30% 53%" />
                  
                  {/* Compliance to Center */}
                  <path d="M 25% 67%, L 40% 57%" />
                  {/* Center to Compliance - small arrow */}
                  <path d="M 40% 57%, 35% 57%" />
                  <path d="M 40% 57%, 38% 62%" />
                </g>
              </svg>
              
              {/* Platform Features - Bottom */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
                <div className="bg-gradient-to-r from-[#091630]/80 to-[#152045]/80 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 border border-[#2B8C74]/20 shadow-lg">
                  <Shield className="h-3.5 w-3.5 text-[#2B8C74]" />
                  <span className="text-white text-xs">Blockchain Audit Trails</span>
                </div>
                <div className="bg-gradient-to-r from-[#091630]/80 to-[#152045]/80 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 border border-[#2B8C74]/20 shadow-lg">
                  <Lock className="h-3.5 w-3.5 text-[#2B8C74]" />
                  <span className="text-white text-xs">Enterprise Security</span>
                </div>
              </div>
              
              {/* Platform Title */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 z-30">
                <div className="bg-gradient-to-r from-[#091630]/80 to-[#152045]/80 backdrop-blur-sm rounded-full px-6 py-2 border border-[#2B8C74]/20 shadow-lg">
                  <span className="text-white text-base font-medium">The Risk Intelligence Hub</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-xl text-gray-700 mt-8 max-w-3xl mx-auto">
            One intelligent platform connecting every stakeholder in the risk management ecosystem with complete visibility.
          </p>
        </div>
        

      </div>
    </section>
  );
}