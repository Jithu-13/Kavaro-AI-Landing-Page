import { CheckCircle, Clock, FileStack, Search, Folder, FileText, Tag } from "lucide-react";

export default function ComparisonSection() {
  return (
    <section id="comparison" className="py-20 md:py-32 border-b border-gray-100 dark:border-[#2B8C74]/20 bg-[#0F1C3E] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 text-white">
            "Can you handle the COIs?"
          </h2>
          <p className="text-gray-200 text-xl leading-relaxed mb-5">
            That's how it starts. Next thing you know, you're juggling PDFs, spreadsheets, and endless email threads — with no idea how to stay compliant.
          </p>
          <p className="text-gray-200 text-xl leading-relaxed mb-5">
            Most teams don't have a risk manager. But insurance is still part of the job. And right now, there's no easy way to handle it.
          </p>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16 text-white text-center">
          A Better Way to Manage Insurance
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Old Way Side */}
          <div className="rounded-3xl overflow-hidden shadow-xl transform hover:-rotate-1 transition-transform duration-300">
            <div className="bg-red-100 p-6 border-b border-red-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-1">The Old Way</h3>
              <p className="text-red-600 font-medium">Manual Chaos</p>
            </div>
            
            <div className="bg-white p-8 h-[500px] relative border-l-4 border-red-300 bg-gradient-to-br from-white to-red-50">
              {/* Cluttered Desktop Illustration */}
              <div className="absolute inset-0 p-8">
                {/* Email Window */}
                <div className="absolute left-6 top-4 w-3/4 h-1/3 bg-gray-50 rounded-lg shadow border border-gray-200 z-10">
                  <div className="bg-gray-200 px-4 py-2 rounded-t-lg flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <span className="text-xs text-gray-600 ml-2">Gmail - Insurance Documents</span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0"></div>
                      <div className="ml-2">
                        <p className="text-xs font-medium text-gray-800">Vendor Support</p>
                        <p className="text-xs text-gray-500">Re: Missing COI Documentation</p>
                      </div>
                    </div>
                    <div className="h-16 bg-gray-100 rounded-md w-full"></div>
                  </div>
                </div>
                
                {/* Spreadsheet Window */}
                <div className="absolute right-8 top-12 w-2/3 h-2/5 bg-white rounded-lg shadow border border-gray-200 z-20">
                  <div className="bg-gray-200 px-4 py-2 rounded-t-lg flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <span className="text-xs text-gray-600 ml-2">Insurance_Tracking_v3.xlsx</span>
                  </div>
                  <div className="p-2">
                    <div className="grid grid-cols-4 gap-1">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className={`h-8 border border-gray-200 ${i % 5 === 0 ? 'bg-red-50' : 'bg-white'} rounded-sm flex items-center justify-center`}>
                          <span className="text-[8px] text-gray-400">{i % 5 === 0 ? 'EXPIRED' : ''}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* PDF Viewer */}
                <div className="absolute left-12 bottom-12 w-3/5 h-2/5 bg-white rounded-lg shadow border border-gray-200 z-30">
                  <div className="bg-gray-200 px-4 py-2 rounded-t-lg flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <span className="text-xs text-gray-600 ml-2">VendorA_COI_2023.pdf</span>
                  </div>
                  <div className="p-4">
                    <div className="h-24 bg-gray-100 rounded-md flex items-center justify-center">
                      <FileText className="text-gray-400 h-16 w-16 opacity-50" />
                    </div>
                  </div>
                </div>
                
                {/* Folder Stack */}
                <div className="absolute right-8 bottom-8 flex">
                  <div className="w-16 h-20 bg-yellow-100 transform -rotate-6 rounded-t-md relative z-10"></div>
                  <div className="w-16 h-20 bg-blue-100 transform rotate-3 rounded-t-md absolute -left-3 z-20"></div>
                </div>
                
                {/* Frustrated Person Icon */}
                <div className="absolute bottom-2 right-4 text-gray-400">
                  <span className="text-xl">🤦</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* New Way Side */}
          <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:rotate-1 transition-transform duration-300">
            <div className="bg-[#2B8C74]/20 p-6 border-b border-[#2B8C74]/30">
              <h3 className="text-2xl font-semibold text-white mb-1">The Kavaro Way</h3>
              <p className="text-[#2B8C74] font-medium">AI-Powered Simplicity</p>
            </div>
            
            <div className="bg-white p-8 h-[500px] relative border-l-4 border-[#2B8C74]">
              {/* Clean UI Illustration */}
              <div className="absolute inset-0 p-8">
                {/* Dashboard Interface */}
                <div className="absolute inset-4 bg-gray-50 rounded-xl shadow-sm border border-gray-100">
                  {/* Header */}
                  <div className="bg-white p-4 rounded-t-xl border-b border-gray-100 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-[var(--light-ai)]/20 flex items-center justify-center mr-3">
                        <span className="text-[var(--light-ai)] text-sm font-bold">K</span>
                      </div>
                      <h4 className="text-gray-800 font-medium">Kavaro AI Dashboard</h4>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100"></div>
                      <Search className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                  
                  {/* Main Content */}
                  <div className="p-6">
                    {/* Filter Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      <div className="bg-gray-100 text-xs rounded-full px-3 py-1 text-gray-600 flex items-center gap-1">
                        <Tag className="h-3 w-3" />
                        <span>General Liability</span>
                      </div>
                      <div className="bg-gray-100 text-xs rounded-full px-3 py-1 text-gray-600 flex items-center gap-1">
                        <Tag className="h-3 w-3" />
                        <span>Vendor A</span>
                      </div>
                      <div className="bg-[var(--light-ai)]/10 text-xs rounded-full px-3 py-1 text-[var(--light-ai)] flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>Expires in 30 days</span>
                      </div>
                    </div>
                    
                    {/* Document List */}
                    <div className="space-y-3">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-white rounded-lg border border-gray-100 p-3 flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mr-3">
                              <FileStack className="h-5 w-5 text-gray-400" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-800">Vendor {String.fromCharCode(64 + item)} Insurance</p>
                              <p className="text-xs text-gray-500">Updated yesterday</p>
                            </div>
                          </div>
                          <CheckCircle className="h-5 w-5 text-[var(--light-ai)]" />
                        </div>
                      ))}
                    </div>
                    
                    {/* AI Assistant */}
                    <div className="absolute bottom-6 right-6 w-60 bg-white rounded-lg shadow-lg border border-[var(--light-ai)]/20 p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-[var(--light-ai)]/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-[var(--light-ai)] text-sm font-medium">AI</span>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-800">Kavaro Assistant</p>
                          <p className="text-xs text-gray-600 mt-1">COI uploaded and verified</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Happy Person Icon */}
                <div className="absolute bottom-2 right-4 text-gray-400">
                  <span className="text-xl">☕️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}