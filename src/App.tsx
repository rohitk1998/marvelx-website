// import { CSSProperties } from 'react';

// export default function App() {
//   const containerStyle: CSSProperties = {
//     display: 'flex',
//     flexDirection: 'column',
//     minHeight: '100vh',
//     backgroundColor: '#ffffff',
//     fontFamily:
//       '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//   };

//   const wrapperStyle = {
//     width: '100%',
//     maxWidth: '1152px',
//     padding: '2rem 1rem',
//     margin: '0 auto',
//     display: 'flex',
//     alignItems: 'center',
//     minHeight: '100vh',
//   };

//   const titleStyle: CSSProperties = {
//     fontSize: '2.25rem',
//     fontWeight: '700',
//     textAlign: 'center',
//     marginBottom: '4rem',
//     color: '#111827',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     minHeight: '3rem',
//   };

//   const sectionStyle = {
//     marginBottom: '3rem',
//   };

//   const h2Style = {
//     fontSize: '1.5rem',
//     fontWeight: '500',
//     marginBottom: '1rem',
//     color: '#111827',
//     display: 'flex',
//     alignItems: 'center',
//     minHeight: '2.5rem',
//   };

//   const h3Style = {
//     fontSize: '1.25rem',
//     fontWeight: '500',
//     marginBottom: '1rem',
//     color: '#111827',
//     display: 'flex',
//     alignItems: 'center',
//     minHeight: '2rem',
//   };

//   const h4Style = {
//     fontSize: '1.125rem',
//     fontWeight: '500',
//     marginTop: '1.5rem',
//     marginBottom: '0.5rem',
//     color: '#111827',
//     display: 'flex',
//     alignItems: 'center',
//     minHeight: '1.75rem',
//   };

//   const pStyle = {
//     marginBottom: '1rem',
//     color: '#4b5563',
//     lineHeight: '1.6',
//     // display: 'flex',
//     // alignItems: 'center',
//     minHeight: '1.5rem',
//   };

//   const lastUpdatedStyle = {
//     ...pStyle,
//     color: '#6b7280',
//   };

//   const listStyle = {
//     paddingLeft: '1.5rem',
//     listStyleType: 'disc',
//     marginBottom: '1.5rem',
//   };

//   const listItemStyle = {
//     marginBottom: '1rem',
//     color: '#4b5563',
//     lineHeight: '1.6',
//     display: 'flex',
//     alignItems: 'flex-start',
//     minHeight: '1.5rem',
//   };

//   const boldStyle = {
//     fontWeight: '500',
//     color: '#111827',
//   };

//   const strikethroughStyle = {
//     textDecoration: 'line-through',
//     color: '#9ca3af',
//   };

//   return (
//     <div style={containerStyle}>
//       <style>{`
//         .privacy-policy-list li::marker {
//           color: #6b7280;
//         }
//         .privacy-policy-contact-email:hover {
//           color: #1d4ed8;
//         }
//         html {
//           scroll-behavior: smooth;
//         }
//         @media (max-width: 768px) {
//           .privacy-policy-responsive-wrapper {
//             padding: 1rem !important;
//           }
//           .privacy-policy-responsive-title {
//             font-size: 1.875rem !important;
//             margin-bottom: 2rem !important;
//           }
//           .privacy-policy-responsive-section {
//             margin-bottom: 2rem !important;
//           }
//         }
//       `}</style>

//       <div style={wrapperStyle} className="privacy-policy-responsive-wrapper">
//         <div style={{ width: '100%' }}>
//           <h1 style={titleStyle} className="privacy-policy-responsive-title">
//             Privacy Policy
//           </h1>

//           <div
//             style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
//           >
//             <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
//               <div style={{ flexGrow: 1 }}>
//                 <div
//                   style={sectionStyle}
//                   className="privacy-policy-responsive-section"
//                 >
//                   <h2 style={h2Style}>Privacy Policy</h2>
//                   <p style={lastUpdatedStyle}>Last updated: May 19, 2025</p>

//                   <p style={pStyle}>
//                     MarvelX ("we", "us" or "our") values your privacy. In this
//                     Privacy Policy ("Policy"), we describe how we collect, use,
//                     and disclose information that we obtain about individuals
//                     who use our browser extensions, including the functionality
//                     made available through our Services, and how we use and
//                     disclose that information.
//                   </p>

//                   <p style={pStyle}>
//                     Your use of the Services, and any dispute over privacy, is
//                     subject to this Policy (including any applicable changes),
//                     including its applicable limitations on damages and
//                     provisions for the resolution of disputes.
//                   </p>
//                 </div>

//                 <div
//                   style={sectionStyle}
//                   className="privacy-policy-responsive-section"
//                 >
//                   <h3 style={h3Style}>Overview</h3>
//                   <ul style={listStyle} className="privacy-policy-list">
//                     <li style={listItemStyle}>
//                       Privacy is core to MarvelX's mission and values. We take
//                       appropriate steps to preserve user privacy and aim to be
//                       as transparent as possible with you regarding the
//                       treatment of any data we collect.
//                     </li>
//                     <li style={listItemStyle}>
//                       MarvelX does not require you to provide your name, email
//                       address, tax ID, or phone number to use the Services.
//                     </li>
//                     <li style={listItemStyle}>
//                       MarvelX will never use your IP address for marketing or
//                       advertising purposes and our systems are not designed to
//                       associate your IP address with potentially identifying
//                       information such as your wallet address, username, or
//                       email address.
//                     </li>
//                     <li style={listItemStyle}>
//                       For even more privacy, users have the option to opt-out of
//                       our analytics.
//                     </li>
//                     <li style={listItemStyle}>
//                       This Policy will be updated whenever there are changes to
//                       MarvelX's privacy practices or applicable law.
//                     </li>
//                   </ul>
//                 </div>

//                 <div
//                   id="info-collect"
//                   style={sectionStyle}
//                   className="privacy-policy-responsive-section"
//                 >
//                   <h3 style={h3Style}>The Information We Collect</h3>
//                   <p style={pStyle}>
//                     We collect information about you directly from you and from
//                     third parties, as well as automatically through your use of
//                     our Services.
//                   </p>

//                   <h4 style={h4Style}>
//                     Information We Collect Directly From You
//                   </h4>
//                   <p style={pStyle}>
//                     You may browse the Services without registering with us or
//                     submitting personal information, however certain information
//                     is collected from you as described below and for the
//                     purposes set out below.
//                   </p>
//                   <ul style={listStyle} className="privacy-policy-list">
//                     <li style={listItemStyle}>
//                       Any username, password(stored encrypted in database) or
//                       avatar you choose to create in connection with your
//                       account, including images or media you upload.
//                     </li>
//                     <li style={listItemStyle}>
//                       Your email or other contact information as well as other
//                       data related to your use of the Services (to the extent
//                       you provide it) in connection with survey responses,
//                       customer support queries, promotion entries, or email
//                       newsletter sign-ups.
//                     </li>
//                   </ul>

//                   <h4 style={h4Style}>
//                     Information We Collect from Other Sources
//                   </h4>
//                   <p style={pStyle}>
//                     We may also receive information about you from other
//                     sources. For example, if you create or log into your account
//                     through a third-party platform (such as Google), we will
//                     have access to certain information from that platform, such
//                     as your email address, in accordance with the authorization
//                     procedures determined by that platform.
//                   </p>
//                 </div>

//                 <div
//                   id="how-use"
//                   style={sectionStyle}
//                   className="privacy-policy-responsive-section"
//                 >
//                   <h3 style={h3Style}>How We Use The Information We Collect</h3>
//                   <p style={pStyle}>
//                     We use the information we collect for the following
//                     purposes:
//                   </p>

//                   <ul style={listStyle} className="privacy-policy-list">
//                     <li style={listItemStyle}>
//                       <span style={boldStyle}>Provide our Services:</span> To
//                       provide our Services, communicate with you about your use,
//                       respond to inquiries, fulfill orders, and support
//                       customers.
//                     </li>
//                     <li style={listItemStyle}>
//                       <span style={boldStyle}>
//                         Provide personalized services:
//                       </span>{' '}
//                       To tailor content and information sent or displayed to
//                       you, offer location customization, personalized help and
//                       instructions, and otherwise personalize your experience.
//                     </li>
//                     <li style={listItemStyle}>
//                       <span style={boldStyle}>
//                         Improve and develop our Services:
//                       </span>{' '}
//                       To ensure our Services work as intended, understand usage
//                       on both aggregated and individualized bases, make
//                       improvements, develop new functionality, and conduct
//                       research and analysis.
//                     </li>
//                     <li style={listItemStyle}>
//                       <span style={boldStyle}>Other legal reasons:</span> To
//                       enforce Terms of Service, comply with laws and legal
//                       requests, detect and prevent fraud, comply with law
//                       enforcement or regulatory requests, address security
//                       issues, and protect our legal rights and those of others.
//                     </li>
//                   </ul>
//                 </div>

//                 <div
//                   id="how-share"
//                   style={sectionStyle}
//                   className="privacy-policy-responsive-section"
//                 >
//                   <h3 style={h3Style}>
//                     How We Share The Information We Collect
//                   </h3>
//                   <p style={pStyle}>
//                     We may disclose information about you as follows:
//                   </p>

//                   <ul style={listStyle} className="privacy-policy-list">
//                     <li style={listItemStyle}>
//                       <span style={boldStyle}>Consent:</span> Where you have
//                       provided consent or directed us to disclose your
//                       information (e.g., when transacting with third parties
//                       through our Services).
//                     </li>
//                     <li style={listItemStyle}>
//                       <span style={boldStyle}>Affiliates:</span> Among corporate
//                       affiliates that control, are controlled by, or under
//                       common control with MarvelX.
//                     </li>
//                     <li style={listItemStyle}>
//                       <span style={boldStyle}>
//                         Vendors & Service Providers:
//                       </span>{' '}
//                       To third-party vendors, service providers, contractors, or
//                       agents performing functions on our behalf.
//                     </li>
//                     <li style={listItemStyle}>
//                       <span style={boldStyle}>Business Transfers:</span> In
//                       connection with mergers, acquisitions, bankruptcy, or
//                       asset transfers.
//                     </li>
//                     <li style={listItemStyle}>
//                       <span style={boldStyle}>
//                         In Response to Legal Process:
//                       </span>{' '}
//                       To comply with legal requirements or lawful requests by
//                       authorities.
//                     </li>
//                     <li style={listItemStyle}>
//                       <span style={boldStyle}>To Protect Us and Others:</span>{' '}
//                       To investigate or prevent illegal activities, fraud,
//                       safety threats, violations of Terms, or as evidence in
//                       litigation or investigations.
//                     </li>
//                     <li style={listItemStyle}>
//                       <span style={boldStyle}>
//                         Aggregate and De-Identified Information:
//                       </span>{' '}
//                       We may share non-personally identifiable data for
//                       marketing, research, or similar purposes.
//                     </li>
//                   </ul>

//                   <p style={pStyle}>
//                     We do not sell or share your personal information with third
//                     parties for their direct marketing purposes.
//                   </p>
//                 </div>

//                 <div
//                   id="cookies"
//                   style={sectionStyle}
//                   className="privacy-policy-responsive-section"
//                 >
//                   <h3 style={h3Style}>
//                     Our Use of Cookies and Other Tracking Mechanisms
//                   </h3>
//                   <p style={pStyle}>
//                     We and our service providers use cookies and similar
//                     technologies to track information about your use of our
//                     Services.
//                   </p>

//                   <ul style={listStyle} className="privacy-policy-list">
//                     <li style={listItemStyle}>
//                       <span style={boldStyle}>Cookies:</span> Alphanumeric
//                       identifiers transferred to your device to assist
//                       navigation, faster login, or activity tracking. Session
//                       cookies last only for your browsing session; persistent
//                       cookies remain longer for aggregate tracking.
//                     </li>
//                     <li style={listItemStyle}>
//                       <span style={boldStyle}>Disabling Cookies:</span> Most
//                       browsers accept cookies by default; you can disable them
//                       through browser settings, though some features may be
//                       limited.
//                     </li>
//                   </ul>

//                   <p style={{ ...pStyle, ...strikethroughStyle }}>
//                     Third Party Analytics: We use third-party analytics to
//                     evaluate usage and improve performance. These providers may
//                     use cookies and other tracking tech.
//                   </p>
//                 </div>

//                 <div
//                   id="third-party"
//                   style={sectionStyle}
//                   className="privacy-policy-responsive-section"
//                 >
//                   <h3 style={h3Style}>Third-Party Links</h3>
//                   <p style={pStyle}>
//                     Our Services may include links to third-party websites.
//                     Their privacy policies govern their sites, and we are not
//                     responsible for their practices.
//                   </p>
//                 </div>

//                 <div
//                   id="personal-info"
//                   style={sectionStyle}
//                   className="privacy-policy-responsive-section"
//                 >
//                   <h3 style={h3Style}>Personal Information Choices</h3>

//                   <h4 style={h4Style}>
//                     Your Rights Regarding Personal Information
//                   </h4>
//                   <div>
//                     <p style={pStyle}>
//                       You may request access, correction, or deletion of
//                       personal information collected about you by contacting us
//                       at{' '}
//                       <a
//                         href="https://mail.google.com/mail/?view=cm&fs=1&to=marvelxextension@gmail.com"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         style={{ color: 'blue', textDecoration: 'underline' }}
//                       >
//                         marvelxextension@gmail.com
//                       </a>
//                       . We will comply with such requests as required by law,
//                       though we may retain information to comply with legal
//                       obligations or for legitimate business purposes.
//                     </p>
//                   </div>

//                   <h4 style={h4Style}>Marketing Choices</h4>
//                   <p style={pStyle}>
//                     You may opt out of marketing emails by following the
//                     unsubscribe instructions in those emails. It may take up to
//                     10 business days to process opt-out requests. Non-marketing
//                     emails may still be sent.
//                   </p>
//                 </div>

//                 <div
//                   id="contact"
//                   style={sectionStyle}
//                   className="privacy-policy-responsive-section"
//                 >
//                   <h3 style={h3Style}>Contact Us</h3>
//                   <p style={pStyle}>
//                     For questions about this Privacy Policy or privacy concerns,
//                     please contact us at <a
//                         href="https://mail.google.com/mail/?view=cm&fs=1&to=marvelxextension@gmail.com"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         style={{ color: 'blue', textDecoration: 'underline' }}
//                       >
//                         marvelxextension@gmail.com
//                       </a>.
//                   </p>
//                 </div>

//                 <div
//                   id="changes"
//                   style={sectionStyle}
//                   className="privacy-policy-responsive-section"
//                 >
//                   <h3 style={h3Style}>Changes to this Policy</h3>
//                   <p style={pStyle}>
//                     This Policy is effective as of the date above and may be
//                     updated from time to time. Material changes will be notified
//                     through our Services or via other communication channels.
//                     Please review this Policy regularly.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


const App = ()=> {
  return(
    <div>
      <h1>PROPERTY ON SALE</h1>
    </div>
  )
}

export default App();