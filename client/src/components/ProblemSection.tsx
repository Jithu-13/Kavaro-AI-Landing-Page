import { ChevronRight, FileText, Mail, Table } from "lucide-react";

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 md:py-32 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-16 text-black leading-tight">
            "Can you handle the COIs?"
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 rounded-2xl bg-gray-50 flex flex-col items-center md:items-start">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                <FileText className="text-[var(--light-ai)] h-6 w-6" />
              </div>
              <p className="text-gray-800 text-lg">
                Juggling PDFs
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-gray-50 flex flex-col items-center md:items-start">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                <Table className="text-[var(--light-ai)] h-6 w-6" />
              </div>
              <p className="text-gray-800 text-lg">
                Tracking spreadsheets
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-gray-50 flex flex-col items-center md:items-start">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                <Mail className="text-[var(--light-ai)] h-6 w-6" />
              </div>
              <p className="text-gray-800 text-lg">
                Endless email threads
              </p>
            </div>
          </div>
          
          <p className="text-gray-800 text-xl leading-relaxed mb-6">
            That's how it starts. Next thing you know, you're juggling documents, with no idea how to stay compliant.
          </p>
          <p className="text-gray-800 text-xl leading-relaxed mb-16">
            Most teams don't have a risk manager. But insurance is still part of the job. And right now, there's no easy way to handle it.
          </p>
          
          <div className="flex justify-center md:justify-start">
            <a href="#solution" className="inline-flex items-center gap-2 text-[var(--light-ai)] font-medium text-lg hover:underline">
              See how Kavaro AI helps
              <ChevronRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}