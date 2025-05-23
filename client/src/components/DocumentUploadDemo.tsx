import { useState } from 'react';
import { Upload, CheckCircle, AlertCircle, Clock, FileText, X, Shield, FileIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function DocumentUploadDemo() {
  const [uploadState, setUploadState] = useState<'idle' | 'uploading' | 'verifying' | 'success' | 'error'>('idle');
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');
  const [documentInfo, setDocumentInfo] = useState<null | {
    provider: string;
    policyType: string;
    expiryDate: string;
    coverageAmount: string;
    status: 'Valid' | 'Pending' | 'Expired';
  }>(null);

  const handleUpload = () => {
    setUploadState('uploading');
    
    // Simulate uploading
    setTimeout(() => {
      setUploadedFile('Insurance_COI_2023.pdf');
      setUploadState('verifying');
      
      // Simulate AI verification
      setTimeout(() => {
        // Success 80% of the time, error 20% of the time for demo purposes
        const isSuccess = Math.random() < 0.8;
        if (isSuccess) {
          setUploadState('success');
          setDocumentInfo({
            provider: 'Travelers Insurance',
            policyType: 'General Liability',
            expiryDate: 'May 15, 2026',
            coverageAmount: '$2,000,000',
            status: 'Valid'
          });
          showToastNotification('Certificate of Insurance verified successfully!', 'success');
        } else {
          setUploadState('error');
          showToastNotification('Verification failed: Missing coverage dates', 'error');
        }
      }, 2500);
    }, 1500);
  };

  const resetUpload = () => {
    setUploadState('idle');
    setUploadedFile(null);
    setDocumentInfo(null);
  };

  const showToastNotification = (message: string, type: 'success' | 'error') => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    
    // Auto-hide toast after 4 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };
  
  const getUploadButtonText = () => {
    switch (uploadState) {
      case 'uploading': return 'Uploading...';
      case 'verifying': return 'Verifying...';
      case 'success': return 'Upload Another';
      case 'error': return 'Try Again';
      default: return 'Upload Certificate of Insurance';
    }
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">Experience Our AI Document Vault</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            See how Kavaro AI instantly processes and verifies insurance documents with intelligent extraction
            and automatic validation.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="md:col-span-2">
              <div className="bg-[#2B8C74]/5 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-[#2B8C74]/10">
                <h3 className="text-lg font-medium text-[#0F1C3E] mb-6">How it works</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#2B8C74]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#2B8C74] text-sm font-medium">1</span>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-[#0F1C3E]">Upload any insurance document</p>
                      <p className="text-xs text-gray-500 mt-1">COIs, policies, endorsements, or any insurance document</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#2B8C74]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#2B8C74] text-sm font-medium">2</span>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-[#0F1C3E]">AI scans and extracts key data</p>
                      <p className="text-xs text-gray-500 mt-1">Coverage details, dates, limits, and obligations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#2B8C74]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#2B8C74] text-sm font-medium">3</span>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-[#0F1C3E]">Automatic compliance checks</p>
                      <p className="text-xs text-gray-500 mt-1">Validates against your requirements and standards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="h-40 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {uploadState === 'idle' && (
                <motion.div 
                  key="upload"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <Upload className="h-10 w-10 text-gray-400" />
                  </div>
                  <p className="text-gray-500">Drag and drop your file or click to browse</p>
                </motion.div>
              )}
              
              {uploadState === 'uploading' && (
                <motion.div 
                  key="uploading"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full border-4 border-gray-200 border-t-[var(--light-ai)] animate-spin"></div>
                  <p className="text-gray-700">Uploading document...</p>
                </motion.div>
              )}
              
              {uploadState === 'verifying' && (
                <motion.div 
                  key="verifying"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-center"
                >
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
                    <motion.div 
                      className="absolute inset-0 rounded-full border-4 border-[var(--light-ai)] border-t-transparent"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    ></motion.div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FileText className="h-8 w-8 text-[var(--light-ai)]" />
                    </div>
                  </div>
                  <p className="text-gray-700">AI is analyzing the document</p>
                  <div className="mt-4 flex justify-center gap-2">
                    <motion.div 
                      className="h-1.5 w-1.5 rounded-full bg-[var(--light-ai)]"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.2 }}
                    ></motion.div>
                    <motion.div 
                      className="h-1.5 w-1.5 rounded-full bg-[var(--light-ai)]"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.4, delay: 0.2 }}
                    ></motion.div>
                    <motion.div 
                      className="h-1.5 w-1.5 rounded-full bg-[var(--light-ai)]"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.6, delay: 0.4 }}
                    ></motion.div>
                  </div>
                </motion.div>
              )}
              
              {uploadState === 'success' && (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-[#2B8C74]/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-[#2B8C74]" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 font-medium">Document verified</p>
                      <p className="text-xs text-gray-500">{uploadedFile}</p>
                    </div>
                  </div>
                  
                  {documentInfo && (
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-sm font-medium text-gray-700">Extracted Information</p>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          documentInfo.status === 'Valid' 
                            ? 'bg-green-100 text-green-700' 
                            : documentInfo.status === 'Pending' 
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-red-100 text-red-700'
                        }`}>
                          {documentInfo.status}
                        </span>
                      </div>
                      
                      <div className="space-y-3 mt-3">
                        <div className="flex justify-between">
                          <p className="text-xs text-gray-500">Insurance Provider</p>
                          <p className="text-xs font-medium text-gray-700">{documentInfo.provider}</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="text-xs text-gray-500">Policy Type</p>
                          <p className="text-xs font-medium text-gray-700">{documentInfo.policyType}</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="text-xs text-gray-500">Expiry Date</p>
                          <p className="text-xs font-medium text-gray-700">{documentInfo.expiryDate}</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="text-xs text-gray-500">Coverage Amount</p>
                          <p className="text-xs font-medium text-gray-700">{documentInfo.coverageAmount}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
              
              {uploadState === 'error' && (
                <motion.div 
                  key="error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
                    <AlertCircle className="h-10 w-10 text-red-500" />
                  </div>
                  <p className="text-gray-700 mb-2">Verification failed</p>
                  <p className="text-sm text-red-500">Missing coverage dates</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="mt-6">
            <Button 
              onClick={uploadState === 'success' || uploadState === 'error' ? resetUpload : handleUpload}
              disabled={uploadState === 'uploading' || uploadState === 'verifying'}
              className={`w-full py-6 rounded-lg text-white ${
                uploadState === 'error' 
                  ? 'bg-red-500 hover:bg-red-600' 
                  : 'bg-[var(--light-ai)] hover:bg-[var(--light-ai)]/90'
              }`}
            >
              {getUploadButtonText()}
            </Button>
          </div>
            </div>
          </div>
        </div>
        
        {/* Toast notification */}
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className={`fixed bottom-8 right-8 p-4 rounded-lg shadow-lg flex items-center gap-3 max-w-md ${
                toastType === 'success' ? 'bg-[#2B8C74] text-white' : 'bg-red-500 text-white'
              }`}
            >
              {toastType === 'success' ? (
                <CheckCircle className="h-5 w-5 flex-shrink-0" />
              ) : (
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
              )}
              <p className="flex-1">{toastMessage}</p>
              <button onClick={() => setShowToast(false)} className="text-white/80 hover:text-white">
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}