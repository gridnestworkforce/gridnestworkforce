import React from 'react';
import { MapPin, Clock, IndianRupee, Users, Phone, Headphones, TrendingUp, CheckCircle } from 'lucide-react';
import ApplicationForm from './ApplicationForm';

const JobsPage = async () => {
  // SSR job data
  const jobs = [
    {
      id: 1,
      title: 'Call Center Executive – Sales/Customer Service',
      department: 'Customer Operations',
      location: 'Bangalore, India',
      type: 'Full-time',
      salary: 'Competitive (based on experience)',
      posted: 'Just Posted',
      description: 'Join our dynamic customer service team and help customers with queries, product information, and issue resolution while promoting our services.',
      responsibilities: [
        'Handle inbound and outbound calls to assist customers with queries, product information, and issue resolution.',
        'Promote and upsell products/services to meet sales targets.',
        'Maintain accurate call records and update CRM systems.',
        'Ensure excellent customer satisfaction by providing timely and professional support.',
        'Follow company scripts, policies, and compliance guidelines.'
      ],
      requirements: [
        'Minimum 6 months experience in a voice process (sales or customer service).',
        'Good communication skills in English and Hindi (additional languages are a plus).',
        'Basic computer knowledge and typing skills.',
        'Ability to work in rotational shifts (including weekends if required).',
        'Positive attitude and strong customer-handling skills.'
      ],
      benefits: [
        'Competitive salary (based on experience).',
        'Incentives/performance bonuses.'
      ],
      icon: <Phone className="text-blue-700" size={32} />,
      applyInfo: {
        email: 'gridnestworkforce@gmail.com',
        phone: '6363106307'
      }
    }
  ];

  return (
    <section id="jobs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Join Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Build your career with us. We're looking for talented individuals passionate about helping businesses succeed.
          </p>
        </div>

        {/* Jobs Listing */}
        <div className="grid gap-8 mb-16">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-50 rounded-lg">{job.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <p className="text-blue-700 font-semibold mb-1">{job.department}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={16} />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <IndianRupee size={16} />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">Posted {job.posted}</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">{job.description}</p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center space-x-2">
                      <Users size={18} className="text-blue-700" /> <span>Key Responsibilities</span>
                    </h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center space-x-2">
                      <Headphones size={18} className="text-emerald-600" /> <span>Requirements</span>
                    </h4>
                    <ul className="space-y-2">
                      {job.requirements.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center space-x-2">
                      <TrendingUp size={18} className="text-orange-600" /> <span>Salary & Benefits</span>
                    </h4>
                    <ul className="space-y-2">
                      {job.benefits.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle size={16} className="text-orange-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Client-side Application Form */}
                <ApplicationForm jobTitle={job.title} />

                {/* How to Apply */}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">How to Apply</h4>
                  <p className="text-gray-700 text-sm">
  Send your resume to{' '}
  <a
    href={`mailto:gridnestworkforce@gmail.com`}
    className="font-semibold text-blue-700 hover:underline"
  >
    gridnestworkforce@gmail.com
  </a>{' '}
  or call{' '}
  <a
    href={`tel:+916363106307`}
    className="font-semibold text-blue-700 hover:underline"
  >
    {6363106307}
  </a>{' '}
  for immediate interview scheduling.
</p>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsPage;
