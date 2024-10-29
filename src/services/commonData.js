import { getBYID } from "./API";

export const getAllPartnerData = (id) => {
    getBYID(`get/partner-dashboard?id=`,id)
        .then((response) => {
            const projectList = response.data.data;
            localStorage.setItem("partnerData", JSON.stringify(projectList)); 
        })
        .catch((error) => {
            console.error("Error fetching projects:", error);
        });
};
