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
        
        {/* Concise Description of Platform Benefits */}
        <div className="max-w-3xl mx-auto text-center px-6 py-16">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#0F1C3E]">
            Connecting Every Stakeholder in Your Risk Ecosystem
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            One intelligent platform that bridges the gap between underwriters, brokers, clients, vendors, and compliance teams — creating total visibility across your risk management infrastructure.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 mx-auto flex items-center justify-center mb-3">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <p className="text-sm font-medium text-gray-800">Underwriters</p>
              <p className="text-xs text-gray-600">Clean exposure data</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 mx-auto flex items-center justify-center mb-3">
                <Users className="h-5 w-5 text-purple-600" />
              </div>
              <p className="text-sm font-medium text-gray-800">Brokers</p>
              <p className="text-xs text-gray-600">Better client retention</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 mx-auto flex items-center justify-center mb-3">
                <PanelTopOpen className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-sm font-medium text-gray-800">Clients</p>
              <p className="text-xs text-gray-600">Always audit-ready</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 mx-auto flex items-center justify-center mb-3">
                <FileText className="h-5 w-5 text-amber-600" />
              </div>
              <p className="text-sm font-medium text-gray-800">Vendors</p>
              <p className="text-xs text-gray-600">Easy uploads</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-red-100 mx-auto flex items-center justify-center mb-3">
                <BarChart3 className="h-5 w-5 text-red-600" />
              </div>
              <p className="text-sm font-medium text-gray-800">Compliance</p>
              <p className="text-xs text-gray-600">Centralized reporting</p>
            </div>
          </div>
        </div>
        

      </div>
    </section>
  );
}