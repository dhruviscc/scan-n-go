import ScrollReveal from "@/components/ScrollReveal";
import React from "react"; // Import the ScrollReveal component
 
export const metadata = {
 title: "Privacy Policy | Scan N Go",
 description: "Privacy Policy for the Scan N Go application.",
};

export default function PrivacyPolicyPage() {
 return (
   <main
     className="
relative z-10
max-w-full
mx-auto
rounded-[32px]
bg-white/65
backdrop-blur-3xl
border border-slate-200/30
shadow-[0_30px_80px_rgba(15,23,42,0.06)]
p-10 md:p-16
"
   >
     {/* Background */}
     <div className="absolute inset-0 overflow-hidden pointer-events-none">
       {/* Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:70px_70px] opacity-60" />

       {/* Indigo Blob */}
       <div className="absolute top-24 left-[-120px] w-[420px] h-[420px] rounded-full bg-indigo-400/20 blur-[120px] animate-blob" />

       {/* Cyan Blob */}
       <div className="absolute top-[45%] right-[-150px] w-[420px] h-[420px] rounded-full bg-cyan-400/20 blur-[120px] animate-blob animation-delay-2000" />

       {/* Pink Blob */}
       <div className="absolute bottom-[-120px] left-[35%] w-[380px] h-[380px] rounded-full bg-pink-400/20 blur-[120px] animate-blob animation-delay-4000" />
     </div>
     {/* Hero */}
     <section className="w-full px-4 sm:px-6 lg:px-8 mb-[70px]">
       <div className="text-center max-w-3xl mx-auto">
         <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-indigo-600 font-semibold text-sm mb-6">
           Legal Information
         </span>

         <h1 className="text-4xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-5">
      Privacy Policy for Scan n Go: Easy Entry

         </h1>

         <p className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
           We value your privacy and are committed to protecting your personal
           information. This Privacy Policy explains how Scan N Go collects,
           uses, stores, and safeguards your information while using our
           application and services.
         </p>
       </div>
     </section>

     {/* Content */}
     <section className="w-full ">
     
         {/* Section */}
         {[
           {
             title: "1. Introduction",
             body: (
               <div className="space-y-4">
                 {" "}
                 {/* Added space-y-4 for paragraph spacing */}
                 <p>
                   Welcome to Scan n Go: Easy Entry. We are committed to
                   protecting your privacy. This Privacy Policy explains how we
                   collect, use, disclose, and safeguard your information when
                   you use our mobile application Scan n Go. Please read this
                   Privacy Policy carefully. If you do not agree with the terms
                   of this Privacy Policy, please do not use the App.
                 </p>
               </div>
             ),
           },

           {
             title: "2. Information We Collect",
             body: (
               <div className="space-y-2">
                 <ul className="list-disc pl-5">
                   <li>
                     <strong>Personal Information:</strong> We may collect
                     personal information that you provide to us when you
                     register an account, such as your name, email address,
                     phone number, and other contact details.
                   </li>
                   <li>
                     <strong>Usage Data:</strong> We collect information about
                     your use of the App, including your activity on the App,
                     the pages you visit, and other usage patterns.
                   </li>
                 </ul>
               </div>
             ),
           },

           {
             title: "3. How We Use Your Information",
             body: (
               <div className="space-y-2">
                 <p>
                   We use the information we collect in the following ways:
                 </p>
                 <ul className="list-disc pl-5">
                   {" "}
                   {/* Added list-disc and pl-5 for bullet points */}
                   <li>
                     <strong>To Provide and Maintain the App:</strong>{" "}
                     Including creating and managing your account, and
                     providing customer support.
                   </li>
                   <li>
                     <strong>To Improve Our Services:</strong> By analyzing
                     usage patterns to enhance user experience and improve the
                     Apps functionality.
                   </li>
                   <li>
                     <strong>To Communicate with You:</strong> About updates,
                     offers, promotions, and other information related to the
                     App.
                   </li>
                   <li>
                     <strong>To Ensure Security:</strong> By monitoring for
                     fraudulent activity and securing our systems.
                   </li>
                 </ul>
               </div>
             ),
           },

           {
             title: "4. Data Sharing",
             body: (
               <div className="space-y-2">
                 <p>
                   We do not share or disclose your personal information to
                   third parties except in the following circumstances:
                 </p>
                 <ul className="list-disc pl-5">
                   <li>
                     <strong>With Your Consent:</strong> When you have given us
                     explicit permission to share your information.
                   </li>
                   <li>
                     <strong>Service Providers:</strong> We may share
                     information with third-party service providers who perform
                     services on our behalf, such as hosting and data analysis.
                   </li>
                   <li>
                     <strong>Legal Requirements:</strong> If required to do so
                     by law or in response to valid requests by public
                     authorities.
                   </li>
                 </ul>
               </div>
             ),
           },

           {
             title: "5. Data Security",
             body: (
               <div className="space-y-2">
                 <p>
                   We implement appropriate technical and organizational
                   measures to protect your personal information from
                   unauthorized access, use, or disclosure. However, no
                   internet or electronic data transmission is ever fully
                   secure or error-free, so we cannot guarantee absolute
                   security.
                 </p>
               </div>
             ),
           },

           {
             title: "6. Your Rights",
             body: (
               <div className="space-y-2">
                 <p>
                   Depending on your jurisdiction, you may have the following
                   rights regarding your personal information:
                 </p>
                 <ul className="list-disc pl-5">
                   <li>
                     <strong>Access:</strong> You can request access to the
                     personal information we hold about you.
                   </li>
                   <li>
                     <strong>Correction:</strong> You can request correction of
                     any inaccurate or incomplete personal information.
                   </li>
                   <li>
                     <strong>Deletion:</strong> You can request deletion of
                     your personal information.
                   </li>
                   <li>
                     <strong>Restriction:</strong> You can request restriction
                     of the processing of your personal information.
                   </li>
                   <li>
                     <strong>Objection:</strong> You can object to the
                     processing of your personal information.
                   </li>
                   <li>
                     <strong>Portability:</strong> You can request transfer of
                     your personal information to another entity.
                   </li>
                 </ul>
               </div>
             ),
           },

           {
             title: "7. Policy Updates",
             body: (
               <div className="space-y-2">
                 <p>
                   We may update this Privacy Policy from time to time. We will
                   notify you of any changes by posting the new Privacy Policy
                   on this page and updating the effective date. You are
                   advised to review this Privacy Policy periodically for any
                   changes. Your continued use of the App after any
                   modifications indicates your acceptance of the new terms.
                 </p>
               </div>
             ),
           },

           {
             title: "8. Location Services",
             body: (
               <div className="space-y-2">
                 {" "}
                 {/* Ensure consistent spacing for paragraphs */}
                 <p>
                   Our app, Scan n Go: Easy Entry, requires background location
                   access to allow users to share their real-time location with
                   their company while they are on the move or working
                   remotely. This ensures accurate attendance tracking and
                   location-based verification, even when the app is not
                   actively in use.
                 </p>
                 <p>
                   We only request background location when the user explicitly
                   enables location sharing, and users can disable it at any
                   time through the app settings. The location data is used
                   solely for company-related tracking and is not shared with
                   any third parties.
                 </p>
               </div>
             ),
           },

           {
             title: "9. Contact Us",
             body: (
               <div className="space-y-2">
                 <p>
                   If you have any questions about this Privacy Policy, please
                   contact us at:
                 </p>
                 <p>
                   <strong>Email:</strong> Vipul@sccinfotech.com
                 </p>
                 <p>
                   <strong>Address:</strong> surat,395006
                 </p>
               </div>
             ),
           },
         ].map((section, index) => (
           <ScrollReveal key={index} className="mb-12">
             <div>
               <h2 className="text-3xl font-bold text-gray-900 mb-4">
                 {section.title}
               </h2>

               <div className="text-gray-700 text-base leading-relaxed">
                 {section.body}
               </div>
             </div>
           </ScrollReveal>
         ))}
    
     </section>
   </main>
 );
}
