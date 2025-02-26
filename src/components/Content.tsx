import React from 'react';

const Content = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-base font-semibold text-purple-500 uppercase tracking-wide">About Exodus</h2>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Redefining Digital Currency for the Modern Era
            </p>
            
            <div className="mt-6 prose prose-lg text-gray-300 space-y-6">
              <p>
                Exodus represents a paradigm shift in the cryptocurrency landscape, offering a revolutionary approach to digital finance that combines security, speed, and accessibility in one comprehensive platform.
              </p>
              
              <h3 className="text-xl font-bold text-white">The Evolution of Cryptocurrency</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Exodus emerged from the need for a more <strong className="text-purple-400">user-centric cryptocurrency</strong> that addresses the limitations of first-generation digital currencies.</li>
                <li>Built on a <strong className="text-purple-400">proprietary blockchain architecture</strong> that prioritizes transaction speed without compromising security.</li>
                <li>Developed by a team of <strong className="text-purple-400">world-class cryptographers and software engineers</strong> with decades of combined experience in financial technology.</li>
                <li>Implements <strong className="text-purple-400">quantum-resistant encryption protocols</strong> to ensure long-term security against emerging computational threats.</li>
              </ul>
              
              <h3 className="text-xl font-bold text-white">Core Advantages</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Processes transactions at <strong className="text-purple-400">speeds up to 100,000 per second</strong>, far exceeding traditional banking systems and other cryptocurrencies.</li>
                <li>Features <strong className="text-purple-400">dynamic scaling technology</strong> that automatically adjusts to network demand, preventing congestion during peak usage.</li>
                <li>Employs a <strong className="text-purple-400">hybrid consensus mechanism</strong> that balances energy efficiency with decentralized security.</li>
                <li>Offers <strong className="text-purple-400">programmable smart contracts</strong> with intuitive interfaces for developers of all skill levels.</li>
                <li>Maintains <strong className="text-purple-400">cross-chain compatibility</strong> with major cryptocurrencies, facilitating seamless asset transfers.</li>
              </ul>
              
              <h3 className="text-xl font-bold text-white">Real-World Applications</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Enables <strong className="text-purple-400">instant micropayments</strong> for content creators, service providers, and digital marketplaces.</li>
                <li>Powers <strong className="text-purple-400">decentralized finance (DeFi) applications</strong> with lower fees and higher throughput than competing platforms.</li>
                <li>Supports <strong className="text-purple-400">tokenization of real-world assets</strong>, from real estate to intellectual property.</li>
                <li>Facilitates <strong className="text-purple-400">cross-border remittances</strong> without the delays and fees associated with traditional banking channels.</li>
                <li>Provides <strong className="text-purple-400">financial inclusion</strong> for the unbanked and underbanked populations worldwide.</li>
              </ul>
              
              <h3 className="text-xl font-bold text-white">Community and Governance</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Governed through a <strong className="text-purple-400">decentralized autonomous organization (DAO)</strong> that gives token holders voting rights on protocol upgrades.</li>
                <li>Supported by an <strong className="text-purple-400">active global community</strong> of developers, investors, and enthusiasts.</li>
                <li>Maintains <strong className="text-purple-400">transparent development processes</strong> with regular updates and open-source components.</li>
                <li>Allocates <strong className="text-purple-400">5% of all transaction fees</strong> to fund community-driven initiatives and ecosystem growth.</li>
              </ul>
              
              <h3 className="text-xl font-bold text-white">Future Roadmap</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Ongoing development of <strong className="text-purple-400">layer-2 scaling solutions</strong> to further enhance transaction capacity.</li>
                <li>Integration with <strong className="text-purple-400">Internet of Things (IoT) devices</strong> for automated machine-to-machine payments.</li>
                <li>Expansion of <strong className="text-purple-400">privacy features</strong> that balance regulatory compliance with user confidentiality.</li>
                <li>Launch of an <strong className="text-purple-400">educational platform</strong> to promote cryptocurrency literacy and responsible investing.</li>
                <li>Partnerships with <strong className="text-purple-400">major financial institutions</strong> to bridge traditional and decentralized finance.</li>
              </ul>
              
              <p>
                As we move toward a more digitized and decentralized financial ecosystem, Exodus stands at the forefront of innovation, ready to empower individuals and organizations with the tools they need to thrive in the economy of tomorrow.
              </p>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <div className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none overflow-hidden">
                <img 
                  className="w-full lg:w-auto lg:max-w-none" 
                  src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80" 
                  alt="Futuristic cryptocurrency visualization" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;