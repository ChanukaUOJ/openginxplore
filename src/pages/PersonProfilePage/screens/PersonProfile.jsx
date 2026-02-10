import { useState } from "react";
import { useSelector } from "react-redux";
import utils from "../../../utils/utils";
import personDetails from "../../../assets/personImages.json";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PersonHistoryTimeline from "../components/PersonHistoryTimeline";
import PersonQualifications from "../components/PersonQualifications";
import ShareLinkButton from "../../../components/ShareLinkButton";
import { ChevronLeft, ImageOff, Landmark, UserRound } from "lucide-react";
import InfoTooltip from "../../../components/InfoToolTip";

const PersonProfile = () => {
  const { personId } = useParams();
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

  const personName = utils.extractNameFromProtobuf(
    selectedPerson?.name || "Unknown"
  );

  const matchingPresident = personDetails.find(
    (p) => p.personName === personName
  );

  const imageUrl = matchingPresident ? matchingPresident.imageUrl : null;

  const tabOptions = ["History"];

  return (
    <div className="px-3 py-6 md:px-12 md:py-8 lg:px-18 xl:px-24 2xl:px-36 w-full bg-white min-h-screen">
      {state.from && state.from !== "" ? (
        <button
          onClick={() => navigate(state.from, { state: { from: state.callback == true && state.callbackLink } })}
          className="flex items-center mb-2 text-accent hover:text-accent/80 cursor-pointer transition-colors"
        >
          <ChevronLeft className="text-accent" />
          <p className="text-accent font-medium">Back</p>
        </button>
      ) : (
        <button
          onClick={() => navigate("/")}
          className="flex items-center mb-2 text-accent hover:text-accent/80 cursor-pointer transition-colors"
        >
          <ChevronLeft className="text-accent" />
          <p className="text-accent font-medium">Go to OpenGINXplore</p>
        </button>
      )}
      <div className="flex justify-end items-center my-2">
        <ShareLinkButton />
      </div>

      {/* --- Person Card - Master-Detail Layout --- */}
      <div className="w-full my-6">
        <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8 rounded-xl border border-gray-200 bg-white shadow-sm p-6 md:p-8">
          {/* Left Pane - Image */}
          <div className="flex-shrink-0 flex justify-center md:justify-start">
            <div className="rounded-full w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 shadow-md border-4 border-accent flex justify-center items-center overflow-hidden bg-gray-50">
              {imageUrl != null ? (
                <img
                  className="w-full h-full object-cover"
                  src={imageUrl}
                  alt={selectedPerson?.name}
                />
              ) : (
                <ImageOff className="text-gray-300 w-16 h-16" />
              )}
            </div>
          </div>

          {/* Right Pane - Details */}
          <div className="flex-1 flex flex-col gap-4">
            <h1 className="font-bold text-black text-2xl md:text-3xl mb-2">
              {utils.extractNameFromProtobuf(selectedPerson?.name || "Unknown")}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              {/* Date of Birth */}
              <div className="flex flex-col gap-1">
                <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Date of Birth
                </p>
                <p className="text-sm md:text-base text-black">
                  January 15, 1965
                </p>
              </div>

              {/* Profession */}
              <div className="flex flex-col gap-1">
                <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Profession
                </p>
                <p className="text-sm md:text-base text-black">
                  Politician, Lawyer
                </p>
              </div>

              {/* Religion */}
              <div className="flex flex-col gap-1">
                <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Religion
                </p>
                <p className="text-sm md:text-base text-black">
                  Buddhism
                </p>
              </div>

              {/* Address */}
              <div className="flex flex-col gap-1">
                <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Address
                </p>
                <p className="text-sm md:text-base text-black">
                  123 Parliament Road, Colombo 07, Sri Lanka
                </p>
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-1">
                <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Phone Number
                </p>
                <p className="text-sm md:text-base text-black">
                  +94 11 234 5678
                </p>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Email
                </p>
                <p className="text-sm md:text-base text-black">
                  contact@example.lk
                </p>
              </div>

              {/* Ministries Worked At */}
              <div className="flex flex-col gap-1">
                <p className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Ministries Worked At
                  {workedAsPresident > 0 && (
                    <InfoTooltip
                      message="This may include ministers inherited from the previous administration before the president released their own cabinet."
                      placement="right"
                      iconColor="#888"
                      iconSize={14}
                    />
                  )}
                </p>
                <p className="text-sm md:text-base text-black">
                  {workedMinistries}
                </p>
              </div>

              {/* Worked as President */}
              {workedAsPresident > 0 && (
                <div className="flex flex-col gap-1">
                  <p className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Worked as President
                  </p>
                  <p className="text-sm md:text-base text-black">
                    {workedAsPresident}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Tab Navigation with Accordion-based Detail View */}
      <div className="w-full my-8">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {/* Vertical Tabs */}
          <div className="flex md:flex-col gap-2 md:w-64 flex-shrink-0">
            <button
              onClick={() => setActiveTab("history")}
              className={`px-6 py-3 rounded-lg text-left font-semibold transition-all ${activeTab === "history"
                ? "bg-accent text-white shadow-md"
                : "bg-white border border-gray-200 text-gray-700 hover:border-accent hover:text-accent"
                }`}
            >
              Person History
            </button>
            <button
              onClick={() => setActiveTab("qualifications")}
              className={`px-6 py-3 rounded-lg text-left font-semibold transition-all ${activeTab === "qualifications"
                ? "bg-accent text-white shadow-md"
                : "bg-white border border-gray-200 text-gray-700 hover:border-accent hover:text-accent"
                }`}
            >
              Qualifications
            </button>
          </div>

          {/* Accordion Detail View */}
          <div className="flex-1 rounded-xl border border-gray-200 bg-white shadow-sm p-6 min-h-[600px] max-h-[700px] overflow-y-auto">
            {activeTab === "history" && (
              <div>
                <PersonHistoryTimeline
                  selectedPerson={selectedPerson}
                  onTimelineUpdate={setTimelineData}
                  presidentRelationDict={presidentRelationDict}
                />
              </div>
            )}

            {activeTab === "qualifications" && <PersonQualifications />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonProfile;
