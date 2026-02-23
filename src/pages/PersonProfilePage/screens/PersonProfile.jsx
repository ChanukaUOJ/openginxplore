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
  const imageStorageBaseUrl = window?.configs?.imageStorageBaseUrl ?? "";
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

  // TODO: Uncomment when the API is ready
  // const { data: personProfile, isLoading: isLoadingPersonProfile, error } = usePersonProfile(personId);
  
  // TODO: Remove this mock data when the API is ready
  const personProfile = {
    name: "Anura Kumara Dissanayake",
    political_party: "National People's Power",
    date_of_birth: "1968-11-24",
    religion: "Buddhism",
    profession: "Politician",
    email: null,
    phone_number: null,
    education_qualifications: "Bachelor of Science",
    professional_qualifications: null,
    image_URL: "data/people/images/anura-kumara-dissanayake-npp.jpg",
    age: 57,
  };

  return (
    <div className="px-4 py-6 md:px-12 md:py-10 lg:px-20 xl:px-28 2xl:px-40 w-full bg-background min-h-screen">
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
            <div className="w-28 h-28 md:w-35 md:h-35 rounded-full bg-gray-100 shadow-sm" style={{ overflow: "hidden", flexShrink: 0 }}>
              {personProfile.image_URL != null ? (
                <img
                  className="block"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
            <h1 className="text-2xl md:text-3xl font-medium dark:text-white text-gray-900 mb-1 tracking-tight">
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
                  <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-md bg-gray-50 dark:bg-transparent dark:border-gray-700 border border-gray-100 flex items-center justify-center">
                    <Icon size={14} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm text-gray-800 dark:text-white">
                      {personProfile?.[key] || "Unknown"}
                    </p>
                  </div>
                </div>
              ))}

              {/* Ministries Worked At */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-md bg-gray-50 bg-gray-50 dark:bg-transparent dark:border-gray-700 border border-gray-100 flex items-center justify-center">
                  <Building2 size={14} className="text-accent" />
                </div>
                <div>
                  <p className="flex items-center gap-1.5 text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-0.5 ">
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
                  <p className="text-sm text-gray-800 dark:text-white">{workedMinistries}</p>
                </div>
              </div>

              {/* Worked as President */}
              {workedAsPresident > 0 && (
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-md bg-gray-50 bg-gray-50 dark:bg-transparent dark:border-gray-700 border border-gray-100 flex items-center justify-center">
                    <Crown size={14} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-0.5">
                      Worked as President
                    </p>
                    <p className="text-sm text-gray-800 dark:text-white">{workedAsPresident}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 dark:border-gray-800 mb-8" />

      {/* Tabs + Content */}
      <div className="w-full">
        {/* Tab Row */}
        <div className="flex gap-1 mb-6 border-b border-gray-100 dark:border-gray-800">
                    {[
            { key: "history", label: "Portfolios Held" },
            { key: "qualifications", label: "Qualifications" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2.5 text-sm font-semibold capitalize transition-all border-b-2 -mb-px hover:cursor-pointer ${activeTab === tab.key
                ? "border-accent text-accent"
                : "border-transparent text-gray-400 hover:text-gray-600"
                }`}
            >
              {tab.label}
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
