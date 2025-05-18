import { useState } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState(null);
  
  const sections = [
    { id: 'info-collect', title: 'The Information We Collect' },
    { id: 'how-use', title: 'How We Use The Information We Collect' },
    { id: 'how-share', title: 'How We Share The Information We Collect' },
    { id: 'cookies', title: 'Our Use Of Cookies and Other Tracking Mechanisms' },
    { id: 'third-party', title: 'Third-Party Links' },
    { id: 'personal-info', title: 'Personal Information Choices' },
    { id: 'contact', title: 'Contact Us' },
    { id: 'changes', title: 'Changes to this Policy' }
  ];
  //done 
  //privacy policies
  
  const handleSectionClick = (id) => {
    setActiveSection(id === activeSection ? null : id);
    
    // Scroll to section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="max-w-6xl mx-auto py-8 px-4 w-[90%] mx-auto"
      style={{
        margin:"auto",
        width:"50%"
      }}
      >
        <h1 className="text-4xl font-bold mb-16 text-center"
        style={{
          textAlign:"center"
        }}
        >Privacy Policy</h1>
        
        <div className="flex flex-col gap-8">
          {/* Table of Contents - Mobile (shown below content on small screens) */}
          {/* <div className="md:hidden w-full mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-sm font-medium text-gray-700 mb-4">Contents</h4>
              <nav>
                <ul className="grid grid-cols-2 gap-3">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button 
                        className={`text-sm hover:text-blue-600 transition-colors duration-200 ${
                          activeSection === section.id ? 'text-blue-600 font-medium' : 'text-gray-700'
                        }`}
                        onClick={() => handleSectionClick(section.id)}
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div> */}
          
          <div className="flex flex-row gap-8">
            {/* Main Content */}
            <div className="flex-grow">
              <div className="mb-12">
                <p className="text-gray-600 mb-4">Last updated: May 19, 2025</p>
                
                <p className="mb-4">
                  MarvelX ("we", "us" or "our") values your privacy. In this Privacy Policy ("Policy"), 
                  we describe how we collect, use, and disclose information that we obtain about 
                  individuals who use our browser extensions, including the functionality made available 
                  through our Services, and how we use and disclose that information.
                </p>
                
                <p className="mb-6">
                  Your use of the Services, and any dispute over privacy, is subject to this Policy 
                  (including any applicable changes), including its applicable limitations on damages 
                  and provisions for the resolution of disputes.
                </p>
              </div>
              
              <div className="mb-12">
                <h3 className="text-xl font-medium mb-4">Overview</h3>
                <ul className="list-disc pl-6 space-y-4">
                  <li>
                    Privacy is core to MarvelX's mission and values. We take appropriate steps to preserve 
                    user privacy and aim to be as transparent as possible with you regarding the treatment 
                    of any data we collect.
                  </li>
                  <li>
                    MarvelX does not require you to provide your name, email address, tax ID, or phone 
                    number to use the Services.
                  </li>
                  <li>
                    MarvelX will never use your IP address for marketing or advertising purposes and our 
                    systems are not designed to associate your IP address with potentially identifying 
                    information such as your wallet address, username, or email address.
                  </li>
                  <li>
                    For even more privacy, users have the option to opt-out of our analytics.
                  </li>
                  <li>
                    This Policy will be updated whenever there are changes to MarvelX's privacy practices 
                    or applicable law.
                  </li>
                </ul>
              </div>
              
              <div id="info-collect" className="mb-12">
                <h3 className="text-xl font-medium mb-4">The Information We Collect</h3>
                <p className="mb-4">
                  We collect information about you directly from you and from third parties, as well as 
                  automatically through your use of our Services.
                </p>
                
                <h4 className="text-lg font-medium mt-6 mb-2">Information We Collect Directly From You</h4>
                <p className="mb-4">
                  You may browse the Services without registering with us or submitting personal information, 
                  however certain information is collected from you as described below and for the purposes set out below.
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>
                    Any username, password(stored encrypted in database) or avatar you choose to create in 
                    connection with your account, including images or media you upload.
                  </li>
                  <li>
                    Your email or other contact information as well as other data related to your use of the 
                    Services (to the extent you provide it) in connection with survey responses, customer support 
                    queries, promotion entries, or email newsletter sign-ups.
                  </li>
                </ul>
                
                <h4 className="text-lg font-medium mt-6 mb-2">Information We Collect from Other Sources</h4>
                <p className="mb-4">
                  We may also receive information about you from other sources. For example, if you create or log 
                  into your account through a third-party platform (such as Google), we will have access to certain 
                  information from that platform, such as your email address, in accordance with the authorization 
                  procedures determined by that platform.
                </p>
              </div>
              
              <div id="how-use" className="mb-12">
                <h3 className="text-xl font-medium mb-4">How We Use The Information We Collect</h3>
                <p className="mb-4">We use the information we collect for the following purposes:</p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-medium">Provide our Services:</span> To provide our Services, communicate 
                    with you about your use, respond to inquiries, fulfill orders, and support customers.
                  </li>
                  <li>
                    <span className="font-medium">Provide personalized services:</span> To tailor content and information 
                    sent or displayed to you, offer location customization, personalized help and instructions, and 
                    otherwise personalize your experience.
                  </li>
                  <li>
                    <span className="font-medium">Improve and develop our Services:</span> To ensure our Services work 
                    as intended, understand usage on both aggregated and individualized bases, make improvements, 
                    develop new functionality, and conduct research and analysis.
                  </li>
                  <li>
                    <span className="font-medium">Other legal reasons:</span> To enforce Terms of Service, comply with 
                    laws and legal requests, detect and prevent fraud, comply with law enforcement or regulatory 
                    requests, address security issues, and protect our legal rights and those of others.
                  </li>
                </ul>
              </div>
              
              <div id="how-share" className="mb-12">
                <h3 className="text-xl font-medium mb-4">How We Share The Information We Collect</h3>
                <p className="mb-4">We may disclose information about you as follows:</p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-medium">Consent:</span> Where you have provided consent or directed us to 
                    disclose your information (e.g., when transacting with third parties through our Services).
                  </li>
                  <li>
                    <span className="font-medium">Affiliates:</span> Among corporate affiliates that control, are 
                    controlled by, or under common control with MarvelX.
                  </li>
                  <li>
                    <span className="font-medium">Vendors & Service Providers:</span> To third-party vendors, service 
                    providers, contractors, or agents performing functions on our behalf.
                  </li>
                  <li>
                    <span className="font-medium">Business Transfers:</span> In connection with mergers, acquisitions, 
                    bankruptcy, or asset transfers.
                  </li>
                  <li>
                    <span className="font-medium">In Response to Legal Process:</span> To comply with legal requirements 
                    or lawful requests by authorities.
                  </li>
                  <li>
                    <span className="font-medium">To Protect Us and Others:</span> To investigate or prevent illegal 
                    activities, fraud, safety threats, violations of Terms, or as evidence in litigation or investigations.
                  </li>
                  <li>
                    <span className="font-medium">Aggregate and De-Identified Information:</span> We may share 
                    non-personally identifiable data for marketing, research, or similar purposes.
                  </li>
                </ul>
                
                <p className="mt-4">
                  We do not sell or share your personal information with third parties for their direct marketing purposes.
                </p>
              </div>
              
              <div id="cookies" className="mb-12">
                <h3 className="text-xl font-medium mb-4">Our Use of Cookies and Other Tracking Mechanisms</h3>
                <p className="mb-4">
                  We and our service providers use cookies and similar technologies to track information 
                  about your use of our Services.
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-medium">Cookies:</span> Alphanumeric identifiers transferred to your device 
                    to assist navigation, faster login, or activity tracking. Session cookies last only for your 
                    browsing session; persistent cookies remain longer for aggregate tracking.
                  </li>
                  <li>
                    <span className="font-medium">Disabling Cookies:</span> Most browsers accept cookies by default; 
                    you can disable them through browser settings, though some features may be limited.
                  </li>
                </ul>
                
                <p className="mt-4 line-through text-gray-500">
                  Third Party Analytics: We use third-party analytics to evaluate usage and improve performance. 
                  These providers may use cookies and other tracking tech.
                </p>
              </div>
              
              <div id="third-party" className="mb-12">
                <h3 className="text-xl font-medium mb-4">Third-Party Links</h3>
                <p className="mb-4">
                  Our Services may include links to third-party websites. Their privacy policies govern their sites, 
                  and we are not responsible for their practices.
                </p>
              </div>
              
              <div id="personal-info" className="mb-12">
                <h3 className="text-xl font-medium mb-4">Personal Information Choices</h3>
                
                <h4 className="text-lg font-medium mt-6 mb-2">Your Rights Regarding Personal Information</h4>
                <p className="mb-4">
                  You may request access, correction, or deletion of personal information collected about you by 
                  contacting us at marvelxextension@gmail.com. We will comply with such requests as required by law, 
                  though we may retain information to comply with legal obligations or for legitimate business purposes.
                </p>
                
                <h4 className="text-lg font-medium mt-6 mb-2">Marketing Choices</h4>
                <p className="mb-4">
                  You may opt out of marketing emails by following the unsubscribe instructions in those emails. 
                  It may take up to 10 business days to process opt-out requests. Non-marketing emails may still be sent.
                </p>
              </div>
              
              <div id="contact" className="mb-12">
                <h3 className="text-xl font-medium mb-4">Contact Us</h3>
                <p className="mb-4">
                  For questions about this Privacy Policy or privacy concerns, please contact us at 
                  marvelxextension@gmail.com.
                </p>
              </div>
              
              <div id="changes" className="mb-12">
                <h3 className="text-xl font-medium mb-4">Changes to this Policy</h3>
                <p className="mb-4">
                  This Policy is effective as of the date above and may be updated from time to time. 
                  Material changes will be notified through our Services or via other communication channels. 
                  Please review this Policy regularly.
                </p>
              </div>
            </div>
            
            {/* Sidebar - Desktop (shown alongside content on larger screens) */}
            {/* <div className="hidden md:block w-64 flex-shrink-0">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
                <h4 className="text-sm font-medium text-gray-700 mb-4">Contents</h4>
                <nav>
                  <ul className="space-y-3">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <button 
                          className={`text-sm hover:text-blue-600 transition-colors duration-200 ${
                            activeSection === section.id ? 'text-blue-600 font-medium' : 'text-gray-700'
                          }`}
                          onClick={() => handleSectionClick(section.id)}
                        >
                          {section.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}