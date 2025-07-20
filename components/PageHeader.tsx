interface PageHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export function PageHeader({ title, subtitle, backgroundImage }: PageHeaderProps) {
  return (
    <section className="relative py-32 flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#004aad]/90 to-[#004aad]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}