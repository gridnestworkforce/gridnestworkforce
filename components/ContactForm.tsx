'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const { data, error } = await supabase.from('contacts').insert([formData]);

    if (error) {
      console.error('Supabase insert error:', error.message);
      setErrorMessage('Something went wrong. Please try again.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (!result.success) {
        setErrorMessage('Message saved, but email failed to send.');
      }
    } catch (err) {
      console.error('Email send error:', err);
      setErrorMessage('Failed to send email. Please try again.');
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 p-8 rounded-2xl text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-600">
          We've received your message and will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a message</h2>
      <p className="text-gray-600 mb-8">
        Ready to power your team? Fill out the form below and we'll get back to you quickly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004aad] focus:border-transparent transition-colors"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004aad] focus:border-transparent transition-colors"
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004aad] focus:border-transparent transition-colors"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004aad] focus:border-transparent transition-colors"
            placeholder="Tell us about your workforce requirements..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#004aad] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#003d8f] transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
