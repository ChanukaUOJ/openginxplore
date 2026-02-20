// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import PersonHistoryTimeline from "../components/PersonHistoryTimeline";
// import PersonQualifications from "../components/PersonQualifications";
// import ShareLinkButton from "../../../components/ShareLinkButton";
// import { ChevronLeft, ImageOff } from "lucide-react";
// import InfoTooltip from "../../../components/InfoToolTip";
// import { usePersonProfile } from "../../../hooks/usePersonProfile";

// const PersonProfile = () => {
//   const { personId } = useParams();
//   const imageStorageBaseUrl = window?.configs?.imageStorageBaseUrl ? window.configs.imageStorageBaseUrl : "";
//   const navigate = useNavigate();
//   const location = useLocation();
//   const state = location.state || {};

//   const [activeTab, setActiveTab] = useState("history");
//   const [timelineData, setTimelineData] = useState([]);
//   const presidentRelationDict = useSelector(
//     (state) => state.presidency.presidentRelationDict
//   );
//   const { allPerson } = useSelector((state) => state.allPerson);

//   const selectedPerson = allPerson[personId];

//   const workedMinistries = timelineData.length || 0;
//   const workedAsPresident = Object.values(presidentRelationDict).filter(
//     (rel) => rel.id === selectedPerson?.id
//   ).length

//   // const { data: personProfile, isLoading: isLoadingPersonProfile, error } = usePersonProfile(personId);
//   // console.log(personProfile);

//   const personProfile = {
//     "name": "Michael Carter",
//     "political_party": "Progressive Alliance",
//     "date_of_birth": "1974-02-11",
//     "religion": "Christianity",
//     "profession": "Lawyer",
//     "email": "m.carter@example.org",
//     "phone_number": "2025550147",
//     "education_qualifications": "LLB (Hons)",
//     "professional_qualifications": "Barrister-at-Law",
//     "image_URL": "data/people/images/bimal-rathnayake-npp.jpg",
//     "age": 54
//   }


//   return (
//     <div className="px-3 py-6 md:px-12 md:py-8 lg:px-18 xl:px-24 2xl:px-36 w-full bg-white min-h-screen">
//       {state.from && state.from !== "" ? (
//         <button
//           onClick={() => navigate(state.from, { state: { from: state.callback == true && state.callbackLink } })}
//           className="flex items-center mb-2 text-accent hover:text-accent/80 cursor-pointer transition-colors"
//         >
//           <ChevronLeft className="text-accent" />
//           <p className="text-accent font-medium">Back</p>
//         </button>
//       ) : (
//         <button
//           onClick={() => navigate("/")}
//           className="flex items-center mb-2 text-accent hover:text-accent/80 cursor-pointer transition-colors"
//         >
//           <ChevronLeft className="text-accent" />
//           <p className="text-accent font-medium">Go to OpenGINXplore</p>
//         </button>
//       )}
//       <div className="flex justify-end items-center my-2">
//         <ShareLinkButton />
//       </div>

//       {/* --- Person Card - Master-Detail Layout --- */}
//       <div className="w-full my-6">
//         <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8 rounded-xl border border-gray-200 bg-white shadow-sm p-6 md:p-8">
//           {/* Left Pane - Image */}
//           <div className="flex-shrink-0 flex justify-center md:justify-start">
//             <div className="rounded-full w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 shadow-md border-4 border-accent flex justify-center items-center overflow-hidden bg-gray-50">
//               {personProfile.image_URL != null ? (
//                 <img
//                   className="w-full h-full object-cover"
//                   src={imageStorageBaseUrl + personProfile.image_URL}
//                   alt={personProfile?.name}
//                 />
//               ) : (
//                 <ImageOff className="text-gray-300 w-16 h-16" />
//               )}
//             </div>
//           </div>

//           {/* Right Pane - Details */}
//           <div className="flex-1 flex flex-col gap-4">
//             <h1 className="font-bold text-black text-2xl md:text-3xl mb-2">
//               {personProfile?.name || "Unknown"}
//             </h1>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
//               {/* Date of Birth */}
//               <div className="flex flex-col gap-1">
//                 <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide">
//                   Date of Birth
//                 </p>
//                 <p className="text-sm md:text-base text-black">
//                   {personProfile?.date_of_birth || "Unknown"}
//                 </p>
//               </div>

//               {/* Profession */}
//               <div className="flex flex-col gap-1">
//                 <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide">
//                   Profession
//                 </p>
//                 <p className="text-sm md:text-base text-black">
//                   {personProfile?.profession || "Unknown"}
//                 </p>
//               </div>
              
//               {/* Age */}
//               <div className="flex flex-col gap-1">
//                 <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide">
//                   Age
//                 </p>
//                 <p className="text-sm md:text-base text-black">
//                   {personProfile?.age || "Unknown"}
//                 </p>
//               </div>

//               {/* Religion */}
//               <div className="flex flex-col gap-1">
//                 <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide">
//                   Religion
//                 </p>
//                 <p className="text-sm md:text-base text-black">
//                   {personProfile?.religion || "Unknown"}
//                 </p>
//               </div>

//               {/* Phone Number */}
//               <div className="flex flex-col gap-1">
//                 <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide">
//                   Phone Number
//                 </p>
//                 <p className="text-sm md:text-base text-black">
//                   {personProfile?.phone_number || "Unknown"}
//                 </p>
//               </div>

//               {/* Email */}
//               <div className="flex flex-col gap-1">
//                 <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide">
//                   Email
//                 </p>
//                 <p className="text-sm md:text-base text-black">
//                   {personProfile?.email || "Unknown"}
//                 </p>
//               </div>

//               {/* Ministries Worked At */}
//               <div className="flex flex-col gap-1">
//                 <p className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide">
//                   Ministries Worked At
//                   {workedAsPresident > 0 && (
//                     <InfoTooltip
//                       message="This may include ministers inherited from the previous administration before the president released their own cabinet."
//                       placement="right"
//                       iconColor="#888"
//                       iconSize={14}
//                     />
//                   )}
//                 </p>
//                 <p className="text-sm md:text-base text-black">
//                   {workedMinistries}
//                 </p>
//               </div>

//               {/* Worked as President */}
//               {workedAsPresident > 0 && (
//                 <div className="flex flex-col gap-1">
//                   <p className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide">
//                     Worked as President
//                   </p>
//                   <p className="text-sm md:text-base text-black">
//                     {workedAsPresident}
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Vertical Tab Navigation with Accordion-based Detail View */}
//       <div className="w-full my-8">
//         <div className="flex flex-col md:flex-row gap-4 md:gap-6">
//           {/* Vertical Tabs */}
//           <div className="flex md:flex-col gap-2 md:w-64 flex-shrink-0">
//             <button
//               onClick={() => setActiveTab("history")}
//               className={`px-6 py-3 rounded-lg text-left font-semibold transition-all ${activeTab === "history"
//                 ? "bg-accent text-white shadow-md"
//                 : "bg-white border border-gray-200 text-gray-700 hover:border-accent hover:text-accent"
//                 }`}
//             >
//               Person History
//             </button>
//             <button
//               onClick={() => setActiveTab("qualifications")}
//               className={`px-6 py-3 rounded-lg text-left font-semibold transition-all ${activeTab === "qualifications"
//                 ? "bg-accent text-white shadow-md"
//                 : "bg-white border border-gray-200 text-gray-700 hover:border-accent hover:text-accent"
//                 }`}
//             >
//               Qualifications
//             </button>
//           </div>

//           {/* Accordion Detail View */}
//           <div className="flex-1 rounded-xl border border-gray-200 bg-white shadow-sm p-6 min-h-[600px] max-h-[700px] overflow-y-auto">
//             {activeTab === "history" && (
//               <div>
//                 <PersonHistoryTimeline
//                   selectedPerson={selectedPerson}
//                   onTimelineUpdate={setTimelineData}
//                   presidentRelationDict={presidentRelationDict}
//                 />
//               </div>
//             )}

//             {activeTab === "qualifications" && <PersonQualifications 
//             education={personProfile?.education_qualifications}
//             professionalQualifications={personProfile?.professional_qualifications}
//             />}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PersonProfile;



import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PersonHistoryTimeline from "../components/PersonHistoryTimeline";
import PersonQualifications from "../components/PersonQualifications";
import ShareLinkButton from "../../../components/ShareLinkButton";
import {
  ChevronLeft,
  ImageOff,
  Calendar,
  Briefcase,
  Clock,
  BookOpen,
  Phone,
  Mail,
  Building2,
  Crown,
  Cake
} from "lucide-react";
import InfoTooltip from "../../../components/InfoToolTip";
import { usePersonProfile } from "../../../hooks/usePersonProfile";

const fieldConfig = [
  { key: "date_of_birth", label: "Date of Birth", icon: Cake },
  { key: "profession", label: "Profession", icon: Briefcase },
  { key: "age", label: "Age", icon: Calendar },
  { key: "religion", label: "Religion", icon: BookOpen },
  { key: "phone_number", label: "Phone Number", icon: Phone },
  { key: "email", label: "Email", icon: Mail },
];

const PersonProfile = () => {
  const { personId } = useParams();
  const imageStorageBaseUrl = window?.configs?.imageStorageBaseUrl
    ? window.configs.imageStorageBaseUrl
    : "";
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state || {};

  const [activeTab, setActiveTab] = useState("history");
  const [timelineData, setTimelineData] = useState([]);
  const presidentRelationDict = useSelector(
    (state) => state.presidency.presidentRelationDict
  );
  const { allPerson } = useSelector((state) => state.allPerson);

  const selectedPerson = allPerson[personId];

  const workedMinistries = timelineData.length || 0;
  const workedAsPresident = Object.values(presidentRelationDict).filter(
    (rel) => rel.id === selectedPerson?.id
  ).length;

  const personProfile = {
    name: "Sunil Handunnetti",
    political_party: "National People's Power",
    date_of_birth: "1974-02-11",
    religion: "Christianity",
    profession: "Lawyer",
    email: "m.carter@example.org",
    phone_number: "2025550147",
    education_qualifications: "LLB (Hons)",
    professional_qualifications: "Barrister-at-Law",
    image_URL: "data/people/images/bimal-rathnayake-npp.jpg",
    age: 54,
  };

  return (
    <div className="px-4 py-6 md:px-12 md:py-10 lg:px-20 xl:px-28 2xl:px-40 w-full bg-white min-h-screen">

      {/* Top bar: Back + Share on same line */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() =>
            state.from && state.from !== ""
              ? navigate(state.from, {
                  state: {
                    from: state.callback === true && state.callbackLink,
                  },
                })
              : navigate("/")
          }
          className="flex items-center gap-1 text-accent hover:text-accent/70 cursor-pointer transition-colors"
        >
          <ChevronLeft size={18} />
          <span className="text-sm font-medium">
            {state.from && state.from !== "" ? "Back" : "Go to OpenGINXplore"}
          </span>
        </button>

        <ShareLinkButton />
      </div>

      {/* Person Card */}
      <div className="w-full mb-10">
        <div className="flex flex-col sm:flex-row gap-6 md:gap-10 items-start">

          {/* Avatar — small, clean, no ring */}
         <div className="flex-shrink-0">
            <div className="w-20 h-20 md:w-35 md:h-35 rounded-full bg-gray-100 shadow-sm" style={{ overflow: "hidden", flexShrink: 0 }}>
              {personProfile.image_URL != null ? (
                <img
                  className="block"
                  style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                  src={imageStorageBaseUrl + personProfile.image_URL}
                  alt={personProfile?.name}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <ImageOff className="text-gray-300 w-8 h-8" />
                </div>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-medium text-gray-900 mb-1 tracking-tight">
              {personProfile?.name || "Unknown"}
            </h1>
            {personProfile?.political_party && (
              <p className="text-sm text-gray-400 mb-6">
                {personProfile.political_party}
              </p>
            )}

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
              {fieldConfig.map(({ key, label, icon: Icon }) => (
                <div key={key} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-md bg-gray-50 border border-gray-100 flex items-center justify-center">
                    <Icon size={14} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm text-gray-800">
                      {personProfile?.[key] || "Unknown"}
                    </p>
                  </div>
                </div>
              ))}

              {/* Ministries Worked At */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-md bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <Building2 size={14} className="text-accent" />
                </div>
                <div>
                  <p className="flex items-center gap-1.5 text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-0.5">
                    Ministries Worked At
                    {workedAsPresident > 0 && (
                      <InfoTooltip
                        message="This may include ministers inherited from the previous administration before the president released their own cabinet."
                        placement="right"
                        iconColor="#aaa"
                        iconSize={11}
                      />
                    )}
                  </p>
                  <p className="text-sm text-gray-800">{workedMinistries}</p>
                </div>
              </div>

              {/* Worked as President */}
              {workedAsPresident > 0 && (
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-md bg-gray-50 border border-gray-100 flex items-center justify-center">
                    <Crown size={14} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-0.5">
                      Worked as President
                    </p>
                    <p className="text-sm text-gray-800">{workedAsPresident}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 mb-8" />

      {/* Tabs + Content */}
      <div className="w-full">
        {/* Tab Row */}
        <div className="flex gap-1 mb-6 border-b border-gray-100">
          {["history", "qualifications"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 text-sm font-semibold capitalize transition-all border-b-2 -mb-px ${
                activeTab === tab
                  ? "border-accent text-accent"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab === "history" ? "Political Experience" : "Qualifications"}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px] max-h-[680px] overflow-y-auto">
          {activeTab === "history" && (
            <PersonHistoryTimeline
              selectedPerson={selectedPerson}
              onTimelineUpdate={setTimelineData}
              presidentRelationDict={presidentRelationDict}
            />
          )}
          {activeTab === "qualifications" && (
            <PersonQualifications
              education={personProfile?.education_qualifications}
              professionalQualifications={
                personProfile?.professional_qualifications
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonProfile;
