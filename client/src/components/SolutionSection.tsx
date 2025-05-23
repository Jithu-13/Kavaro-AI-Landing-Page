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
        
        {/* The Complete Risk & Insurance Document Flow - All Connected by Kavaro AI */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#0F1C3E] text-center">
            The Complete Risk & Insurance Document Lifecycle
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-12 text-center max-w-3xl mx-auto">
            Kavaro AI connects every stakeholder throughout the insurance lifecycle, providing integrated document flows and real-time intelligence at each stage.
          </p>
          
          {/* Document Flow Diagram */}
          <div className="relative">
            {/* Central Kavaro Hub */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-[#0F1C3E] to-[#152045] border-4 border-[#2B8C74]/20 flex items-center justify-center z-20 shadow-lg">
              <div className="text-center">
                <Shield className="h-10 w-10 text-[#2B8C74] mx-auto mb-2" />
                <p className="text-white font-semibold">Kavaro AI</p>
                <p className="text-[#2B8C74] text-xs">Risk Intelligence Hub</p>
              </div>
            </div>
            
            {/* Stakeholder Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
              {/* 1. UNDERWRITERS */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
                <div className="bg-blue-600 text-white p-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <FileText className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Underwriters</h4>
                      <p className="text-xs text-blue-100">Risk evaluation & pricing</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs font-medium text-gray-700 mb-2">Documents Managed:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-blue-600 mr-2"></div>
                      <span>Exposure schedules</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-blue-600 mr-2"></div>
                      <span>Applications (ACORD forms)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-blue-600 mr-2"></div>
                      <span>Loss runs</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-blue-600 mr-2"></div>
                      <span>Risk narratives</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <p className="text-xs font-medium text-gray-700 mb-2">Lifecycle Stages:</p>
                    <div className="flex space-x-2">
                      <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">Submission Review</span>
                      <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">Risk Analysis</span>
                    </div>
                  </div>
                </div>
                {/* Connection to center */}
                <div className="absolute left-1/2 top-[25%] w-24 border-t-2 border-dashed border-[#2B8C74]/40 hidden md:block"></div>
              </div>
              
              {/* 2. INSURANCE BROKERS */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
                <div className="bg-purple-600 text-white p-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Brokers</h4>
                      <p className="text-xs text-purple-100">Client support & renewals</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs font-medium text-gray-700 mb-2">Documents Managed:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-purple-600 mr-2"></div>
                      <span>Client intake forms</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-purple-600 mr-2"></div>
                      <span>COIs & endorsements</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-purple-600 mr-2"></div>
                      <span>Policy binders & declarations</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-purple-600 mr-2"></div>
                      <span>Renewal packets</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <p className="text-xs font-medium text-gray-700 mb-2">Lifecycle Stages:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[10px] bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full">Client Onboarding</span>
                      <span className="text-[10px] bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full">Renewals</span>
                    </div>
                  </div>
                </div>
                {/* Connection to center */}
                <div className="absolute left-[70%] top-1/2 w-24 border-t-2 border-dashed border-[#2B8C74]/40 hidden md:block"></div>
              </div>
              
              {/* 3. CLIENTS / INSUREDS */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
                <div className="bg-green-600 text-white p-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <PanelTopOpen className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Clients</h4>
                      <p className="text-xs text-green-100">Risk, Ops, HR, Legal</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs font-medium text-gray-700 mb-2">Documents Managed:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-green-600 mr-2"></div>
                      <span>Insurance policies</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-green-600 mr-2"></div>
                      <span>Contracts with vendors</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-green-600 mr-2"></div>
                      <span>Vendor COIs</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-green-600 mr-2"></div>
                      <span>Claims documentation</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <p className="text-xs font-medium text-gray-700 mb-2">Lifecycle Stages:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[10px] bg-green-100 text-green-600 px-2 py-0.5 rounded-full">Policy Intake</span>
                      <span className="text-[10px] bg-green-100 text-green-600 px-2 py-0.5 rounded-full">Document Management</span>
                    </div>
                  </div>
                </div>
                {/* Connection to center */}
                <div className="absolute left-1/2 top-[75%] w-24 border-t-2 border-dashed border-[#2B8C74]/40 hidden md:block"></div>
              </div>
              
              {/* 4. VENDORS / SUBCONTRACTORS */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
                <div className="bg-amber-600 text-white p-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <FileText className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Vendors</h4>
                      <p className="text-xs text-amber-100">Subcontractors & partners</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs font-medium text-gray-700 mb-2">Documents Managed:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-amber-600 mr-2"></div>
                      <span>COIs</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-amber-600 mr-2"></div>
                      <span>Additional insured endorsements</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-amber-600 mr-2"></div>
                      <span>Contracts / work agreements</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-amber-600 mr-2"></div>
                      <span>Safety plans</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <p className="text-xs font-medium text-gray-700 mb-2">Lifecycle Stages:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[10px] bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full">Vendor Onboarding</span>
                      <span className="text-[10px] bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full">Document Upload</span>
                    </div>
                  </div>
                </div>
                {/* Connection to center */}
                <div className="absolute left-[30%] top-1/2 w-24 border-t-2 border-dashed border-[#2B8C74]/40 hidden md:block"></div>
              </div>
              
              {/* 5. COMPLIANCE / LEGAL / EHS TEAMS */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
                <div className="bg-red-600 text-white p-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <BarChart3 className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Compliance</h4>
                      <p className="text-xs text-red-100">Legal & EHS teams</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs font-medium text-gray-700 mb-2">Documents Managed:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-red-600 mr-2"></div>
                      <span>Risk register</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-red-600 mr-2"></div>
                      <span>EHS documentation</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-red-600 mr-2"></div>
                      <span>Audit logs</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-red-600 mr-2"></div>
                      <span>Contract language</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <p className="text-xs font-medium text-gray-700 mb-2">Lifecycle Stages:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded-full">Risk Mitigation</span>
                      <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded-full">Audit Prep</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Only - Center Node Text */}
            <div className="md:hidden text-center my-8 p-4 rounded-lg bg-[#0F1C3E]/5">
              <Shield className="h-8 w-8 text-[#2B8C74] mx-auto mb-2" />
              <p className="text-[#0F1C3E] font-semibold">Kavaro AI</p>
              <p className="text-sm text-gray-600">Connects all stakeholders in the risk management lifecycle</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Kavaro AI connects every player in your risk ecosystem, making document flows seamless and ensuring everyone has the right information at the right time.
            </p>
          </div>
        </div>
        

      </div>
    </section>
  );
}