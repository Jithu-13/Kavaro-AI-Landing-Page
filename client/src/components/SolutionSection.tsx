import { Lock, FileText, Check, Tag, Clock, Shield, Brain, Bell, AlertCircle } from "lucide-react";

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
        
        {/* The Vault - Visual Centerpiece */}
        <div className="mx-auto max-w-5xl relative">
          <div className="h-[500px] md:h-[600px] rounded-3xl bg-gradient-to-b from-[#0A0B1D] to-[#15162c] overflow-hidden relative shadow-2xl">
            {/* Vault Door */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              {/* Outer vault door ring */}
              <div className="absolute inset-0 rounded-full border-[20px] border-[#131425] shadow-inner"></div>
              
              {/* Inner vault door - open state */}
              <div className="absolute inset-[20px] rounded-full bg-gradient-to-br from-[#0e0f1f] to-[#232442] overflow-hidden shadow-lg flex items-center justify-center">
                {/* Vault door accent */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[75%] h-[75%] rounded-full border-[8px] border-[#2B8C74]/30 flex items-center justify-center">
                    <div className="w-[75%] h-[75%] rounded-full border-[8px] border-[#2B8C74]/20 flex items-center justify-center">
                      <div className="w-[75%] h-[75%] rounded-full border-[8px] border-[#2B8C74]/10"></div>
                    </div>
                  </div>
                </div>
                
                {/* Vault interior glow */}
                <div className="absolute inset-[20%] rounded-full bg-[#0A0B1D] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[#B6E1C4]/5 rounded-full"></div>
                  <div className="absolute w-[200%] h-[200%] animate-[spin_40s_linear_infinite] opacity-30">
                    <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#B6E1C4] to-transparent"></div>
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B6E1C4] to-transparent"></div>
                  </div>
                </div>
              </div>
              
              {/* Vault handle */}
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-[40px] h-[80px] rounded-full bg-gradient-to-r from-[#2B8C74] to-[#3BA271] shadow-lg border border-white/10 flex items-center justify-center">
                <div className="w-[15px] h-[30px] rounded-full bg-[#0A0B1D]"></div>
              </div>
            </div>
            
            {/* Floating Documents */}
            <div className="absolute -top-10 -right-10 left-0 bottom-0 pointer-events-none">
              {/* Document 1 */}
              <div className="absolute top-[20%] right-[30%] transform rotate-3 w-52">
                <div className="bg-white/90 p-4 rounded-lg shadow-lg border border-gray-100">
                  <div className="flex justify-between items-start mb-2">
                    <div className="w-10 h-10 bg-[#B6E1C4]/30 rounded flex items-center justify-center">
                      <FileText className="h-5 w-5 text-[#2B8C74]" />
                    </div>
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-800">General Liability COI</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Vendor: Apex Supply</span>
                    <span className="text-xs text-gray-500">Verified 2 days ago</span>
                  </div>
                </div>
                
                {/* Connection nodes */}
                <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-[#B6E1C4]/20 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-[#B6E1C4]/30 animate-pulse"></div>
                </div>
              </div>
              
              {/* Document 2 */}
              <div className="absolute top-[40%] left-[15%] transform -rotate-6 w-52">
                <div className="bg-white/90 p-4 rounded-lg shadow-lg border border-gray-100">
                  <div className="flex justify-between items-start mb-2">
                    <div className="w-10 h-10 bg-[#B6E1C4]/30 rounded flex items-center justify-center">
                      <FileText className="h-5 w-5 text-[#2B8C74]" />
                    </div>
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-800">Workers Compensation</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Annual Policy</span>
                    <span className="text-xs text-gray-500">Verified 1 week ago</span>
                  </div>
                </div>
                
                {/* Connection nodes */}
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-[#B6E1C4]/20 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-[#B6E1C4]/30 animate-pulse"></div>
                </div>
              </div>
              
              {/* Document 3 */}
              <div className="absolute bottom-[25%] right-[20%] transform rotate-6 w-52">
                <div className="bg-white/90 p-4 rounded-lg shadow-lg border border-gray-100">
                  <div className="flex justify-between items-start mb-2">
                    <div className="w-10 h-10 bg-[#B6E1C4]/30 rounded flex items-center justify-center">
                      <FileText className="h-5 w-5 text-[#2B8C74]" />
                    </div>
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                      <Clock className="h-3 w-3 text-orange-600" />
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-800">Auto Insurance Policy</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full">Expires in 30 Days</span>
                    <span className="text-xs text-gray-500">Added yesterday</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* AI Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <line x1="35%" y1="30%" x2="45%" y2="50%" stroke="#B6E1C4" strokeWidth="1" strokeDasharray="5,5" strokeOpacity="0.5" />
              <line x1="65%" y1="30%" x2="55%" y2="50%" stroke="#B6E1C4" strokeWidth="1" strokeDasharray="5,5" strokeOpacity="0.5" />
              <line x1="45%" y1="70%" x2="55%" y2="50%" stroke="#B6E1C4" strokeWidth="1" strokeDasharray="5,5" strokeOpacity="0.5" />
            </svg>
            
            {/* AI Label Nodes */}
            <div className="absolute top-[30%] left-[35%] bg-[#0A0B1D]/90 text-white text-xs px-2 py-1 rounded border border-[#B6E1C4]/30">
              <div className="flex items-center gap-1">
                <Tag className="h-3 w-3 text-[#B6E1C4]" />
                <span>Tag Added</span>
              </div>
            </div>
            
            <div className="absolute top-[30%] right-[35%] bg-[#0A0B1D]/90 text-white text-xs px-2 py-1 rounded border border-[#B6E1C4]/30">
              <div className="flex items-center gap-1">
                <Brain className="h-3 w-3 text-[#B6E1C4]" />
                <span>AI Suggestion</span>
              </div>
            </div>
            
            <div className="absolute bottom-[30%] left-[45%] bg-[#0A0B1D]/90 text-white text-xs px-2 py-1 rounded border border-[#B6E1C4]/30">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3 text-[#B6E1C4]" />
                <span>Expires in 30 Days</span>
              </div>
            </div>
            
            {/* Alert Feature */}
            <div className="absolute bottom-4 right-4 bg-[#0A0B1D]/80 border border-[#B6E1C4]/20 rounded-lg p-2 flex items-center gap-2">
              <Bell className="h-4 w-4 text-[#B6E1C4]" />
              <span className="text-white text-xs">Auto alerts enabled</span>
            </div>
          </div>
          
          <p className="text-center text-xl text-gray-700 mt-8 max-w-3xl mx-auto">
            Your insurance data stays secure, smart, and ready — all in one place.
          </p>
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
                <Shield className="h-6 w-6 text-[var(--light-ai)]" />
              </div>
              <h4 className="text-lg font-medium text-black mb-2">Searchable Records</h4>
              <p className="text-gray-600">Find COIs, contracts, policies, and documents instantly with smart search.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-[var(--light-ai)]/10 flex items-center justify-center mb-4">
                <AlertCircle className="h-6 w-6 text-[var(--light-ai)]" />
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