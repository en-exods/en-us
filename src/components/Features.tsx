import React from 'react';
import { Shield, Zap, Globe, BarChart3, Wallet } from 'lucide-react';

const Features = () => {
  const features = [
    {
      name: 'Advanced Security',
      description: 'Multi-layered security protocols with quantum-resistant encryption to protect your assets.',
      icon: Shield,
      color: 'text-purple-500'
    },
    {
      name: 'Lightning Fast',
      description: 'Process transactions in milliseconds with our next-generation blockchain technology.',
      icon: Zap,
      color: 'text-blue-500'
    },
    {
      name: 'Global Access',
      description: 'Access your funds from anywhere in the world with our decentralized network.',
      icon: Globe,
      color: 'text-green-500'
    },
    {
      name: 'Smart Analytics',
      description: 'AI-powered insights to help you make informed decisions about your investments.',
      icon: BarChart3,
      color: 'text-yellow-500'
    },
    {
      name: 'Multi-Asset Wallet',
      description: 'Store, manage, and exchange multiple cryptocurrencies in one secure location.',
      icon: Wallet,
      color: 'text-red-500'
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-900 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-base font-semibold text-purple-500 uppercase tracking-wide">Revolutionary Technology</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            The Future of Finance in Your Hands
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Exodus combines cutting-edge technology with user-friendly design to create the ultimate cryptocurrency experience.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-gray-800 p-6 rounded-lg shadow-xl h-full flex flex-col">
                  <div>
                    <span className={`inline-flex items-center justify-center p-3 ${feature.color} rounded-md shadow-lg bg-gray-900`}>
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;