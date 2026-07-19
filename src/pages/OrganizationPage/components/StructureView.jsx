import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import MinistryCardGrid from "./MinistryCardGrid";

export const StructureView = () => {
    const { selectedPresident } = useOutletContext();
    const selectedDate = useSelector((state) => state.presidency.selectedDate);

    return (
        <>
            {selectedPresident &&
                <>
                    {selectedDate != null && <MinistryCardGrid />}
                </>}
        </>
    );
};

