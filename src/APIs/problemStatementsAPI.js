import { API_URL } from "../store/apiurl";

const problemStatementsAPI = async () => {
  const URL = `${API_URL}/api/problemStatements`;

  const getAllProblems = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        // console.log("user data: " + data);
        return data; 
      } else {
        console.error(
          "Failed to fetch problem statements:",
          response.statusText
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const data2 = await getAllProblems(); //it has all json data which required for the problems
  console.log(data2); //here is demo of the data file got from the api use it as per need

  return ([
    {
      id: 1,
      organization: "Organization name",
      problemStatement: "Problem Statement 1",
      category: "Software/Website",
      PSNumber: "PS-1",
      domainBucket: "Theme Name",
    },
    {
      id: 2,
      organization: "Organization name",
      problemStatement: "Problem Statement 2",
      category: "Software/Website",
      PSNumber: "PS-2",
      domainBucket: "Theme Name",
    },
    {
      id: 3,
      organization: "Organization name",
      problemStatement: "Problem Statement 3",
      category: "Software/Website",
      PSNumber: "PS-3",
      domainBucket: "Theme Name",
    },
    {
      id: 4,
      organization: "Organization name",
      problemStatement: "Problem Statement 4",
      category: "Software/Website",
      PSNumber: "PS-4",
      domainBucket: "Theme Name",
    },
    {
      id: 5,
      organization: "Organization name",
      problemStatement: "Problem Statement 5",
      category: "Software/Website",
      PSNumber: "PS-5",
      domainBucket: "Theme Name",
    },
    {
      id: 6,
      organization: "Organization name",
      problemStatement: "Problem Statement 6",
      category: "Software/Website",
      PSNumber: "PS-6",
      domainBucket: "Theme Name",
    },
    {
      id: 7,
      organization: "Organization name",
      problemStatement: "Problem Statement 7",
      category: "Software/Website",
      PSNumber: "PS-7",
      domainBucket: "Theme Name",
    },
    {
      id: 8,
      organization: "Organization name",
      problemStatement: "Problem Statement 8",
      category: "Software/Website",
      PSNumber: "PS-8",
      domainBucket: "Theme Name",
    },
    {
      id: 9,
      organization: "Organization name",
      problemStatement: "Problem Statement 9",
      category: "Software/Website",
      PSNumber: "PS-9",
      domainBucket: "Theme Name",
    },
    {
      id: 10,
      organization: "Organization name",
      problemStatement: "Problem Statement 10",
      category: "Software/Website",
      PSNumber: "PS-10",
      domainBucket: "Theme Name",
    },
  ]);
};

export default problemStatementsAPI;
