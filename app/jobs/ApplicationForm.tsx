'use client';

import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

interface ApplicationFormProps {
  jobTitle: string;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ jobTitle }) => {
  const [applicationData, setApplicationData] = useState(() => ({
    name: '',
    email: '',
    phone: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null,
  }));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setApplicationData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setApplicationData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!applicationData.resume) {
      toast.error('Please upload your resume.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare FormData for multipart/form-data
      const formData = new FormData();
      formData.append('name', applicationData.name);
      formData.append('email', applicationData.email);
      formData.append('phone', applicationData.phone);
      formData.append('experience', applicationData.experience);
      formData.append('coverLetter', applicationData.coverLetter);
      formData.append('resume', applicationData.resume);

      // Send to API route
      const res = await fetch('/api/apply', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error('Failed to submit application');
      }

      toast.success('Application submitted! Confirmation email sent.');

      // Reset form
      setApplicationData({
        name: '',
        email: '',
        phone: '',
        experience: '',
        coverLetter: '',
        resume: null,
      });
      if (fileInputRef.current) fileInputRef.current.value = '';

    } catch (err: any) {
      console.error(err);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="border-t border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-100 p-8 mt-6 rounded-xl">
      <Toaster position="top-right" reverseOrder={false} />
      <h4 className="text-xl font-bold text-gray-900 mb-6">Apply for {jobTitle}</h4>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Email */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              required
              value={applicationData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="your name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
            <input
              type="email"
              name="email"
              required
              value={applicationData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="example@email.com"
            />
          </div>
        </div>

        {/* Phone & Experience */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              required
              value={applicationData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="+91-798..."
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Experience</label>
            <select
              name="experience"
              value={applicationData.experience}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="">Select experience</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5+">5+ years</option>
            </select>
          </div>
        </div>

        {/* Resume */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Resume/CV *</label>
          <input
            ref={fileInputRef}
            type="file"
            name="resume"
            required
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Cover Letter */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Cover Letter *</label>
          <textarea
            name="coverLetter"
            required
            rows={5}
            value={applicationData.coverLetter}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all font-semibold text-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <span>Submit Application</span>
              <Send size={20} />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
