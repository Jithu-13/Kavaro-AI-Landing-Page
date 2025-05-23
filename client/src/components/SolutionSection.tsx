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
        
        {/* Enhanced Risk & Insurance Document Flow - All Connected by Kavaro AI */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#0F1C3E] text-center">
            The Complete Risk & Insurance Document Lifecycle
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-12 text-center max-w-3xl mx-auto">
            Kavaro AI connects every stakeholder throughout the insurance lifecycle, providing integrated document flows and real-time intelligence at each stage.
          </p>
          
          {/* Document Flow Diagram with Enhanced Animations and Aesthetics */}
          <div className="relative min-h-[700px] md:min-h-[800px]">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-50"></div>
              
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-5">
                <div className="h-full w-full" style={{ 
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'28\' height=\'49\' viewBox=\'0 0 28 49\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg id=\'hexagons\' fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                  backgroundSize: '28px 49px' 
                }}></div>
              </div>
              
              {/* Circular grid */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10">
                <div className="absolute inset-0 rounded-full border border-gray-400"></div>
                <div className="absolute inset-[15%] rounded-full border border-gray-400"></div>
                <div className="absolute inset-[30%] rounded-full border border-gray-400"></div>
                <div className="absolute inset-[45%] rounded-full border border-gray-400"></div>
              </div>
            </div>
            
            {/* Central Kavaro Hub - Animated */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-[#0F1C3E] to-[#152045] flex items-center justify-center z-20 shadow-xl animate-pulse">
              {/* Inner glow effect */}
              <div className="absolute inset-0 rounded-full bg-[#2B8C74]/10 blur-xl"></div>
              
              {/* Pulsating ring */}
              <div className="absolute -inset-4 rounded-full border-4 border-[#2B8C74]/20 animate-ping opacity-20"></div>
              <div className="absolute -inset-8 rounded-full border-2 border-[#2B8C74]/10 animate-ping opacity-10 animation-delay-500"></div>
              
              {/* Content */}
              <div className="text-center z-10">
                <div className="relative w-16 h-16 mx-auto mb-3">
                  <div className="absolute inset-0 rounded-full bg-[#2B8C74]/20 animate-pulse"></div>
                  <Shield className="h-10 w-10 text-[#2B8C74] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                <p className="text-white font-semibold text-xl">Kavaro AI</p>
                <p className="text-[#2B8C74] text-sm font-medium">Risk Intelligence Hub</p>
              </div>
            </div>
            
            {/* Animated Document Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Animated document icon flowing from underwriter to center */}
              <div className="absolute left-[25%] top-[25%] animate-float-document opacity-70">
                <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                  <FileText className="h-3 w-3 text-blue-600" />
                </div>
              </div>
              
              {/* Animated document icon flowing from broker to center */}
              <div className="absolute right-[25%] top-[25%] animate-float-document-delay-1 opacity-70">
                <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
                  <FileText className="h-3 w-3 text-purple-600" />
                </div>
              </div>
              
              {/* Animated document icon flowing from compliance to center */}
              <div className="absolute left-[25%] bottom-[25%] animate-float-document-delay-2 opacity-70">
                <div className="w-6 h-6 bg-red-100 rounded flex items-center justify-center">
                  <FileText className="h-3 w-3 text-red-600" />
                </div>
              </div>
              
              {/* Animated document icon flowing from client to center */}
              <div className="absolute right-[25%] bottom-[25%] animate-float-document-delay-3 opacity-70">
                <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                  <FileText className="h-3 w-3 text-green-600" />
                </div>
              </div>
            </div>
            
            {/* Stakeholder Cards - Enhanced */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 relative">
              {/* 1. UNDERWRITERS */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group border border-blue-100">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-5">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Underwriters</h4>
                      <p className="text-xs text-blue-100">Risk evaluation & pricing</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium text-gray-700 mb-3 flex items-center">
                    <span className="w-4 h-0.5 bg-blue-600 mr-2"></span>
                    Documents Managed
                  </p>
                  <ul className="text-xs text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></div>
                      <span>Exposure schedules</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></div>
                      <span>Applications (ACORD forms)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></div>
                      <span>Loss runs</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></div>
                      <span>Risk narratives</span>
                    </li>
                  </ul>
                  <div className="mt-5 pt-3 border-t border-gray-100">
                    <p className="text-xs font-medium text-gray-700 mb-3 flex items-center">
                      <span className="w-4 h-0.5 bg-blue-600 mr-2"></span>
                      Lifecycle Stages
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-1 rounded-full flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-1"></div>
                        Submission Review
                      </span>
                      <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-1 rounded-full flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-1"></div>
                        Risk Analysis
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Connection to center - Animated */}
                <div className="hidden md:block absolute left-[calc(50%+30px)] top-[calc(50%-100px)] h-[100px] w-px bg-gradient-to-b from-transparent via-[#2B8C74] to-transparent z-10">
                  <div className="absolute inset-0 animate-connection-pulse"></div>
                </div>
              </div>
              
              {/* 2. INSURANCE BROKERS */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group border border-purple-100">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-5">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Brokers</h4>
                      <p className="text-xs text-purple-100">Client support & renewals</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium text-gray-700 mb-3 flex items-center">
                    <span className="w-4 h-0.5 bg-purple-600 mr-2"></span>
                    Documents Managed
                  </p>
                  <ul className="text-xs text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mr-2"></div>
                      <span>Client intake forms</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mr-2"></div>
                      <span>COIs & endorsements</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mr-2"></div>
                      <span>Policy binders & declarations</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mr-2"></div>
                      <span>Renewal packets</span>
                    </li>
                  </ul>
                  <div className="mt-5 pt-3 border-t border-gray-100">
                    <p className="text-xs font-medium text-gray-700 mb-3 flex items-center">
                      <span className="w-4 h-0.5 bg-purple-600 mr-2"></span>
                      Lifecycle Stages
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[10px] bg-purple-100 text-purple-600 px-2 py-1 rounded-full flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mr-1"></div>
                        Client Onboarding
                      </span>
                      <span className="text-[10px] bg-purple-100 text-purple-600 px-2 py-1 rounded-full flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mr-1"></div>
                        Renewals
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Connection to center - Animated */}
                <div className="hidden lg:block absolute left-[calc(70%+30px)] top-[calc(50%)] h-px w-[80px] bg-gradient-to-r from-transparent via-[#2B8C74] to-transparent z-10">
                  <div className="absolute inset-0 animate-connection-pulse-horizontal"></div>
                </div>
              </div>
              
              {/* 3. CLIENTS / INSUREDS */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group border border-green-100 order-last lg:order-none">
                <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-5">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <PanelTopOpen className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Clients</h4>
                      <p className="text-xs text-green-100">Risk, Ops, HR, Legal</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium text-gray-700 mb-3 flex items-center">
                    <span className="w-4 h-0.5 bg-green-600 mr-2"></span>
                    Documents Managed
                  </p>
                  <ul className="text-xs text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-600 mr-2"></div>
                      <span>Insurance policies</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-600 mr-2"></div>
                      <span>Contracts with vendors</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-600 mr-2"></div>
                      <span>Vendor COIs</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-600 mr-2"></div>
                      <span>Claims documentation</span>
                    </li>
                  </ul>
                  <div className="mt-5 pt-3 border-t border-gray-100">
                    <p className="text-xs font-medium text-gray-700 mb-3 flex items-center">
                      <span className="w-4 h-0.5 bg-green-600 mr-2"></span>
                      Lifecycle Stages
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[10px] bg-green-100 text-green-600 px-2 py-1 rounded-full flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-600 mr-1"></div>
                        Policy Intake
                      </span>
                      <span className="text-[10px] bg-green-100 text-green-600 px-2 py-1 rounded-full flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-600 mr-1"></div>
                        Document Management
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Connection to center - Animated */}
                <div className="hidden md:block absolute left-[calc(50%+30px)] top-[calc(50%+170px)] h-[100px] w-px bg-gradient-to-t from-transparent via-[#2B8C74] to-transparent z-10">
                  <div className="absolute inset-0 animate-connection-pulse"></div>
                </div>
              </div>
              
              {/* 4. VENDORS / SUBCONTRACTORS */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group border border-amber-100">
                <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-5">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Vendors</h4>
                      <p className="text-xs text-amber-100">Subcontractors & partners</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium text-gray-700 mb-3 flex items-center">
                    <span className="w-4 h-0.5 bg-amber-600 mr-2"></span>
                    Documents Managed
                  </p>
                  <ul className="text-xs text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mr-2"></div>
                      <span>COIs</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mr-2"></div>
                      <span>Additional insured endorsements</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mr-2"></div>
                      <span>Contracts / work agreements</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mr-2"></div>
                      <span>Safety plans</span>
                    </li>
                  </ul>
                  <div className="mt-5 pt-3 border-t border-gray-100">
                    <p className="text-xs font-medium text-gray-700 mb-3 flex items-center">
                      <span className="w-4 h-0.5 bg-amber-600 mr-2"></span>
                      Lifecycle Stages
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[10px] bg-amber-100 text-amber-600 px-2 py-1 rounded-full flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mr-1"></div>
                        Vendor Onboarding
                      </span>
                      <span className="text-[10px] bg-amber-100 text-amber-600 px-2 py-1 rounded-full flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mr-1"></div>
                        Document Upload
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Connection to center - Animated */}
                <div className="hidden lg:block absolute right-[calc(70%+30px)] top-[calc(50%)] h-px w-[80px] bg-gradient-to-l from-transparent via-[#2B8C74] to-transparent z-10">
                  <div className="absolute inset-0 animate-connection-pulse-horizontal"></div>
                </div>
              </div>
              
              {/* 5. COMPLIANCE / LEGAL / EHS TEAMS */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group border border-red-100">
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-5">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <BarChart3 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Compliance</h4>
                      <p className="text-xs text-red-100">Legal & EHS teams</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium text-gray-700 mb-3 flex items-center">
                    <span className="w-4 h-0.5 bg-red-600 mr-2"></span>
                    Documents Managed
                  </p>
                  <ul className="text-xs text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></div>
                      <span>Risk register</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></div>
                      <span>EHS documentation</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></div>
                      <span>Audit logs</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></div>
                      <span>Contract language</span>
                    </li>
                  </ul>
                  <div className="mt-5 pt-3 border-t border-gray-100">
                    <p className="text-xs font-medium text-gray-700 mb-3 flex items-center">
                      <span className="w-4 h-0.5 bg-red-600 mr-2"></span>
                      Lifecycle Stages
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[10px] bg-red-100 text-red-600 px-2 py-1 rounded-full flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-600 mr-1"></div>
                        Risk Mitigation
                      </span>
                      <span className="text-[10px] bg-red-100 text-red-600 px-2 py-1 rounded-full flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-600 mr-1"></div>
                        Audit Prep
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Only - Center Node Text */}
            <div className="md:hidden text-center my-12 p-6 rounded-xl bg-gradient-to-br from-[#0F1C3E] to-[#152045] shadow-lg">
              <Shield className="h-10 w-10 text-[#2B8C74] mx-auto mb-3" />
              <p className="text-white font-semibold text-xl">Kavaro AI</p>
              <p className="text-[#2B8C74] text-sm">The Risk Intelligence Hub</p>
              <p className="text-white/70 text-sm mt-2">Connects all stakeholders in the risk management lifecycle</p>
            </div>
            
            {/* Risk Intelligence Features */}
            <div className="mt-16 grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#0F1C3E]/5 to-[#0F1C3E]/10 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#0F1C3E]/10 mx-auto flex items-center justify-center mb-3">
                  <Shield className="h-5 w-5 text-[#2B8C74]" />
                </div>
                <h4 className="text-[#0F1C3E] font-medium mb-1">Secure Document Vault</h4>
                <p className="text-gray-700 text-xs">Blockchain-grade audit trails for every document action</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#0F1C3E]/5 to-[#0F1C3E]/10 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#0F1C3E]/10 mx-auto flex items-center justify-center mb-3">
                  <Brain className="h-5 w-5 text-[#2B8C74]" />
                </div>
                <h4 className="text-[#0F1C3E] font-medium mb-1">AI Understanding</h4>
                <p className="text-gray-700 text-xs">Intelligent analysis of policies, contracts and exposures</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#0F1C3E]/5 to-[#0F1C3E]/10 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#0F1C3E]/10 mx-auto flex items-center justify-center mb-3">
                  <Bell className="h-5 w-5 text-[#2B8C74]" />
                </div>
                <h4 className="text-[#0F1C3E] font-medium mb-1">Intelligent Alerts</h4>
                <p className="text-gray-700 text-xs">Automatic renewal tracking and compliance notifications</p>
              </div>
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