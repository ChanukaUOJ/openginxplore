import { useOutletContext } from "react-router-dom";
import LandscapeRequired from "../../../components/landscapeRequired";
import CabinetFlow from "../../cabinetFlowPage/screens/CabinetFlow";

export const ChangesView = () => {
    const { toggleView, selectedPresident, dateRange, multiSelectedDates, handleMinistryNodeClick } = useOutletContext();

    return (
        <LandscapeRequired onBack={() => toggleView("structure")}>
            <CabinetFlow
                key={selectedPresident?.id}
                presidentId={selectedPresident?.id}
                dateRange={dateRange}
                selectedDates={multiSelectedDates}
                onMinistryNodeClick={handleMinistryNodeClick}
            />
        </LandscapeRequired>
    );
};