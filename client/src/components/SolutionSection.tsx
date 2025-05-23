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
        
        {/* The Vault - Visual Centerpiece */}
        <div className="mx-auto max-w-5xl relative">
          <div className="h-[500px] md:h-[600px] rounded-3xl bg-gradient-to-b from-[#0A0B1D] to-[#15162c] overflow-hidden relative shadow-2xl">
            {/* Wall surrounding vault */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
            
            {/* Vault wall texture */}
            <div className="absolute inset-0">
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-12 h-full">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="border-r border-white/5 h-full"></div>
                  ))}
                </div>
                <div className="grid grid-rows-12 w-full">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="border-b border-white/5 w-full"></div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Bank vault door frame (metallic frame around the door) */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-xl bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 shadow-2xl overflow-hidden flex items-center justify-center">
              {/* Bolts around the frame */}
              {[...Array(16)].map((_, i) => {
                const angle = (i * 360) / 16;
                const radius = 46; // % from center
                const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
                
                return (
                  <div 
                    key={i} 
                    className="absolute w-4 h-4 md:w-5 md:h-5 rounded-full bg-gray-600 border-2 border-gray-500 shadow-inner"
                    style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                  ></div>
                );
              })}
              
              {/* Door outline */}
              <div className="w-[85%] h-[85%] rounded-xl border-8 border-gray-600 relative overflow-hidden shadow-inner">
                {/* Door surface with brushed metal texture */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-700">
                  {/* Horizontal brush lines */}
                  <div className="absolute inset-0">
                    {[...Array(30)].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute w-full h-px bg-gray-500/10"
                        style={{ top: `${(i * 100) / 30}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Vault door inner details */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Main circular lock mechanism */}
                  <div className="w-[70%] h-[70%] rounded-full relative">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-[16px] border-gray-700 shadow-inner"></div>
                    
                    {/* Middle ring with notches */}
                    <div className="absolute inset-[20px] rounded-full border-[12px] border-gray-800 shadow-inner overflow-hidden">
                      {/* Notches around the ring */}
                      {[...Array(18)].map((_, i) => {
                        const angle = (i * 360) / 18;
                        const radius = 50; // % from center
                        const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                        const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
                        
                        return (
                          <div 
                            key={i} 
                            className="absolute w-2 h-3 bg-gray-900" 
                            style={{ 
                              left: `${x}%`, 
                              top: `${y}%`, 
                              transform: `translate(-50%, -50%) rotate(${angle}deg)` 
                            }}
                          ></div>
                        );
                      })}
                    </div>
                    
                    {/* Inner ring with mint accent color */}
                    <div className="absolute inset-[60px] rounded-full bg-gray-800 border-[8px] border-[#2B8C74]/30 flex items-center justify-center shadow-inner">
                      {/* Center glow */}
                      <div className="absolute inset-[15px] rounded-full bg-[#0A0B1D] flex items-center justify-center overflow-hidden shadow-inner">
                        <div className="absolute inset-0 bg-[#B6E1C4]/10 rounded-full"></div>
                        <div className="absolute w-[200%] h-[200%] animate-[spin_40s_linear_infinite] opacity-30">
                          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#B6E1C4] to-transparent"></div>
                          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B6E1C4] to-transparent"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Combination lock numbers */}
                    <div className="absolute inset-0">
                      <div className="absolute top-[15%] left-[15%] text-[10px] font-mono text-white/70 bg-gray-900/60 px-1 rounded-sm">25</div>
                      <div className="absolute top-[15%] right-[15%] text-[10px] font-mono text-white/70 bg-gray-900/60 px-1 rounded-sm">62</div>
                      <div className="absolute bottom-[15%] left-[15%] text-[10px] font-mono text-white/70 bg-gray-900/60 px-1 rounded-sm">18</div>
                      <div className="absolute bottom-[15%] right-[15%] text-[10px] font-mono text-white/70 bg-gray-900/60 px-1 rounded-sm">93</div>
                    </div>
                  </div>
                </div>
                
                {/* Heavy door shadow showing it's open */}
                <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-black to-transparent"></div>
                
                {/* Gleaming highlights */}
                <div className="absolute inset-0">
                  <div className="absolute top-5 right-5 w-20 h-1 bg-white/10 rounded-full transform rotate-45"></div>
                  <div className="absolute bottom-10 left-10 w-16 h-1 bg-white/10 rounded-full transform -rotate-30"></div>
                </div>
                
                {/* Brand name on the vault */}
                <div className="absolute top-6 inset-x-0 flex justify-center">
                  <div className="px-4 py-1 rounded bg-gray-800/80 text-xs text-[#B6E1C4] font-mono tracking-wider">KAVARO SECURE</div>
                </div>
              </div>
            </div>
            
            {/* Vault handle - Large rotating wheel */}
            <div className="absolute right-[16%] top-1/2 transform -translate-y-1/2 z-20">
              <div className="relative w-24 h-24 md:w-32 md:h-32">
                {/* Outer wheel */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 border-8 border-gray-700 shadow-lg"></div>
                
                {/* Inner details */}
                <div className="absolute inset-[15%] rounded-full bg-gradient-to-br from-[#2B8C74]/20 to-[#3BA271]/20 border-4 border-gray-600"></div>
                
                {/* Center pin */}
                <div className="absolute inset-[40%] rounded-full bg-gray-900 border-2 border-gray-600"></div>
                
                {/* Spokes */}
                {[...Array(3)].map((_, i) => {
                  const angle = (i * 360) / 3;
                  return (
                    <div 
                      key={i} 
                      className="absolute inset-[15%] rounded-full border-t-8 border-gray-600" 
                      style={{ transform: `rotate(${angle}deg)` }}
                    ></div>
                  );
                })}
                
                {/* Reflection */}
                <div className="absolute top-[10%] right-[20%] w-6 h-2 bg-white/10 rounded-full"></div>
              </div>
            </div>
            
            {/* Light glow from opening */}
            <div className="absolute left-[24%] top-0 bottom-0 w-2 bg-[#B6E1C4]/20 blur-xl"></div>
            
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
        

      </div>
    </section>
  );
}