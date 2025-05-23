import { ChevronRight, FileText, Mail, Table, Users, Database, AlertTriangle } from "lucide-react";

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 md:py-32 bg-[#0F1C3E] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
            Risk Management Today is Broken Across Silos
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Underwriters lack clean exposure data. Brokers lose visibility after the sale. Clients juggle insurance docs, contracts, and compliance in disconnected folders. Vendors forget to update expired COIs.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            Everyone's working off different files, out-of-date info, and manual processes. There's no central source of truth — and it's costing time, trust, and money.
          </p>
        </div>
          
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-2xl bg-[#0F1C3E]/50 border border-[#2B8C74]/20 flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#2B8C74]/10 mb-6">
              <Users className="text-[#2B8C74] h-7 w-7" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-white">Stakeholder Disconnect</h3>
            <p className="text-gray-300">
              Underwriters, brokers, clients, and vendors all operate in separate systems with no shared visibility.
            </p>
          </div>
            
          <div className="p-8 rounded-2xl bg-[#0F1C3E]/50 border border-[#2B8C74]/20 flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#2B8C74]/10 mb-6">
              <Database className="text-[#2B8C74] h-7 w-7" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-white">No Source of Truth</h3>
            <p className="text-gray-300">
              Documents scatter across emails, drives, and systems, creating version confusion and outdated information.
            </p>
          </div>
            
          <div className="p-8 rounded-2xl bg-[#0F1C3E]/50 border border-[#2B8C74]/20 flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#2B8C74]/10 mb-6">
              <AlertTriangle className="text-[#2B8C74] h-7 w-7" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-white">Compliance Risk</h3>
            <p className="text-gray-300">
              Manual tracking leads to missed renewals, expired documents, and potential contract violations.
            </p>
          </div>
        </div>
          
        <div className="flex justify-center">
          <a href="#solution" className="inline-flex items-center gap-2 text-[#2B8C74] font-medium text-lg bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full transition-colors backdrop-blur-sm">
            Discover the Kavaro Solution
            <ChevronRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}