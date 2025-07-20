export function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Your Workforce Partner Across India
            </h2>
            
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                GridNest Workforce delivers high-quality manpower and operations support 
                across industries like logistics, food tech, and customer service.
              </p>
              
              <p>
                We are your structured partner for scalable staffing, CX delivery, 
                and backend ops support, ensuring your business operations run smoothly 
                with the right people at the right time.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#004aad]">500+</div>
                <div className="text-sm text-gray-600">Staff Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#004aad]">50+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Professional team working together"
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#004aad] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">24/7</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Always Available</div>
                  <div className="text-sm text-gray-600">Round-the-clock support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}