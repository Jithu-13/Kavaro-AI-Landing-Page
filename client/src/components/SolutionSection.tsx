import { Bell, Lock, Brain, BarChart4, Shield, User, FileText, FolderOpen, AlertCircle, Settings, Search, Tag, Check, Clock } from "lucide-react";

export default function SolutionSection() {
  return (
    <section id="solution" className="py-20 md:py-32 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 text-black">
            Simple. Secure. <span className="text-[var(--light-ai)]">Built for You.</span>
          </h2>
          
          <p className="text-gray-800 text-xl leading-relaxed mb-5">
            Kavaro AI gives your team an easy way to manage insurance and risk documents — no experience needed.
          </p>
          
          <p className="text-gray-800 text-xl leading-relaxed mb-5">
            Our platform uses secure workflows, AI-powered tools, and smart automation to help you upload, organize, and track everything in one place.
          </p>
        </div>
        
        <div className="relative mx-auto max-w-5xl">
          {/* Laptop Frame */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-900 pb-[56.25%]">
            {/* Dashboard Screen */}
            <div className="absolute inset-2 rounded-lg bg-[#0A0B1D] overflow-hidden">
              <div className="h-full flex">
                {/* Sidebar */}
                <div className="w-52 bg-[#151636] border-r border-gray-700/30 flex-shrink-0 py-6">
                  <div className="px-4 mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[var(--light-ai)]/20 flex items-center justify-center">
                        <span className="text-[var(--light-ai)] text-sm font-bold">K</span>
                      </div>
                      <span className="text-white font-medium">Kavaro AI</span>
                    </div>
                  </div>
                  
                  <nav className="space-y-1">
                    <div className="px-3 py-2 mx-2 bg-[var(--light-ai)]/10 rounded-md flex items-center gap-3 text-[var(--light-ai)]">
                      <FileText className="h-4 w-4" />
                      <span className="text-sm font-medium">Documents</span>
                    </div>
                    
                    <div className="px-3 py-2 mx-2 flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                      <FolderOpen className="h-4 w-4" />
                      <span className="text-sm">Vendors</span>
                    </div>
                    
                    <div className="px-3 py-2 mx-2 flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                      <AlertCircle className="h-4 w-4" />
                      <span className="text-sm">Alerts</span>
                    </div>
                    
                    <div className="px-3 py-2 mx-2 flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                      <Settings className="h-4 w-4" />
                      <span className="text-sm">Settings</span>
                    </div>
                  </nav>
                </div>
                
                {/* Main Content */}
                <div className="flex-grow p-6 relative">
                  {/* Header area */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-white text-xl font-medium">Your Control Center</h3>
                    
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Bell className="h-5 w-5 text-gray-400" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center rounded-full bg-[var(--light-ai)] text-white text-[10px]">3</span>
                      </div>
                      
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                        <User className="h-4 w-4 text-gray-300" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Search bar */}
                  <div className="relative mb-6">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <Search className="h-4 w-4 text-gray-500" />
                    </div>
                    <input 
                      type="text" 
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-md py-2 pl-10 pr-4 text-sm text-gray-300 placeholder-gray-500"
                      placeholder="Search documents, vendors, or policies..."
                      readOnly
                    />
                  </div>
                  
                  {/* Document list */}
                  <div className="space-y-3 mb-6">
                    <div className="bg-gray-800/30 rounded-lg border border-gray-700/50 p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[var(--light-ai)]/10 rounded-md flex items-center justify-center">
                          <FileText className="h-5 w-5 text-[var(--light-ai)]" />
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">Apex Services - General Liability</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="px-2 py-0.5 bg-[var(--light-ai)]/10 rounded-full text-[var(--light-ai)] text-[10px]">Auto Liability</span>
                            <span className="px-2 py-0.5 bg-blue-500/10 rounded-full text-blue-400 text-[10px]">Vendor: Apex</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 text-xs text-green-400">
                          <Check className="h-3 w-3" />
                          Valid
                        </span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800/30 rounded-lg border border-gray-700/50 p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[var(--light-ai)]/10 rounded-md flex items-center justify-center">
                          <FileText className="h-5 w-5 text-[var(--light-ai)]" />
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">Northeast Supply Co - COI</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="px-2 py-0.5 bg-orange-500/10 rounded-full text-orange-400 text-[10px]">Expires in 30 Days</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 text-xs text-orange-400">
                          <Clock className="h-3 w-3" />
                          Expiring Soon
                        </span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800/30 rounded-lg border border-gray-700/50 p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[var(--light-ai)]/10 rounded-md flex items-center justify-center">
                          <FileText className="h-5 w-5 text-[var(--light-ai)]" />
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">Global Tech Corp - Worker's Comp</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="px-2 py-0.5 bg-purple-500/10 rounded-full text-purple-400 text-[10px]">Workers Comp</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 text-xs text-green-400">
                          <Check className="h-3 w-3" />
                          Valid
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* AI assistant popup */}
                  <div className="absolute bottom-6 right-6 bg-gray-800/90 border border-gray-700 rounded-lg p-4 shadow-lg max-w-xs">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--light-ai)]/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-[var(--light-ai)] text-sm font-bold">AI</span>
                      </div>
                      <div>
                        <p className="text-white text-xs font-medium mb-1">Kavaro Assistant</p>
                        <p className="text-gray-300 text-xs">Add policyholder name to this COI?</p>
                        <div className="flex gap-2 mt-2">
                          <button className="px-2 py-1 bg-[var(--light-ai)] rounded text-white text-xs">Yes</button>
                          <button className="px-2 py-1 bg-gray-700 rounded text-white text-xs">No</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -left-4 md:-left-12 top-1/4 bg-white p-3 rounded-full shadow-lg flex items-center justify-center">
            <Lock className="h-6 w-6 text-[var(--light-ai)]" />
          </div>
          <div className="absolute -right-4 md:-right-12 top-1/3 bg-white p-3 rounded-full shadow-lg flex items-center justify-center">
            <Brain className="h-6 w-6 text-[var(--light-ai)]" />
          </div>
          <div className="absolute -left-4 md:-left-12 bottom-1/4 bg-white p-3 rounded-full shadow-lg flex items-center justify-center">
            <Shield className="h-6 w-6 text-[var(--light-ai)]" />
          </div>
          
          {/* Compliance bar */}
          <div className="absolute -right-4 md:-right-12 bottom-1/4 bg-white p-3 rounded-full shadow-lg">
            <div className="h-6 w-20 bg-gray-100 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-[var(--light-ai)] rounded-full" style={{ width: '90%' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-medium text-white">90%</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Benefits */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-semibold text-black text-center mb-12">
            Key Benefits
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-[var(--light-ai)]/10 flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-[var(--light-ai)]" />
              </div>
              <h4 className="text-lg font-medium text-black mb-2">Secure Document Hub</h4>
              <p className="text-gray-600">Centralized document storage with permission controls for your team.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-[var(--light-ai)]/10 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-[var(--light-ai)]" />
              </div>
              <h4 className="text-lg font-medium text-black mb-2">AI Assistance</h4>
              <p className="text-gray-600">Smart tools for document intake, tagging, and automatic classification.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-[var(--light-ai)]/10 flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-[var(--light-ai)]" />
              </div>
              <h4 className="text-lg font-medium text-black mb-2">Searchable Records</h4>
              <p className="text-gray-600">Find COIs, contracts, policies, and documents instantly with smart search.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-[var(--light-ai)]/10 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-[var(--light-ai)]" />
              </div>
              <h4 className="text-lg font-medium text-black mb-2">Expiration Alerts</h4>
              <p className="text-gray-600">Automated alerts keep you ahead of compliance deadlines.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}