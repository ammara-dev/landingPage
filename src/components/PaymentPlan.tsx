import { DollarSign, TrendingUp, Home, CheckCircle2 } from "lucide-react";

const paymentSteps = [
  {
    icon: DollarSign,
    percentage: "10%",
    title: "Downpayment",
    description: "Initial payment to secure your property",
    color: "from-[#1F2937] to-[#374151]"
  },
  {
    icon: TrendingUp,
    percentage: "70%",
    title: "During Construction",
    description: "Flexible payments throughout the build phase",
    color: "from-[#374151] to-[#4B5563]"
  },
  {
    icon: Home,
    percentage: "10%",
    title: "On Handover",
    description: "Final payment upon completion",
    color: "from-[#4B5563] to-[#1F2937]"
  },
];

const benefits = [
  "Easy and flexible payment structure",
  "80/20 payment plan for affordability",
  "Secure your investment with just 10% down",
  "Extended payment period during construction",
];

export default function PaymentPlan() {
  return (
    <section id="payment-plan" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            The Heights Payment Plan
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            The Payment Plan offered for The Heights Country Club by Emaar Properties is an 
            <span className="font-bold text-[#1F2937]"> 80/20 Payment Plan</span>. 
            80% of the total payment is payable during construction and the remaining 20% is payable on project completion.
          </p>
        </div>

        {/* Payment Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {paymentSteps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#1F2937]/20 hover:-translate-y-2">
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-[#1F2937] mb-2">{step.percentage}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
              {index < paymentSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-6 bg-[#1F2937] rounded-full flex items-center justify-center text-white text-xs font-bold">
                    →
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-[#1F2937] via-[#374151] to-[#1F2937] rounded-3xl p-8 md:p-12" data-aos="fade-up" data-aos-delay="300">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Flexible Payment Benefits
              </h3>
              <p className="text-white/80 mb-6">
                With the first release at The Heights just weeks away, the complete schedule of payments 
                with dates and exact percentages is expected to be revealed imminently.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-[#1F2937] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all hover:shadow-xl hover:scale-105"
              >
                Get Full Payment Details
                <DollarSign className="w-4 h-4" />
              </a>
            </div>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notice */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm italic">
            Prospective buyers awaiting this information are encouraged to visit this page in the coming days for full details.
          </p>
        </div>
      </div>
    </section>
  );
}
