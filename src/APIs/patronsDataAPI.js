// ========== SIH 2024 ==========

// 1. Patrons and Chief Patrons Data
// 1.1 Patrons Data
const patronsDataAPI = [
  {
    id: 1,
    photo: "./images/community_images/Patrons/2.png",
    name: "Dr. Jyoti Deshmukh",
    bio: "Group Director at SISTec",
    linkedInProfile: "https://www.linkedin.com/in/jyoti-deshmukh-16049a166",
    twitterProfile: "",
    instagramProfile: "",
    facebookProfile: "",
  },

  {
    id: 2,
    photo: "./images/community_images/Patrons/3.png",
    name: "Dr. Manish Billore",
    bio: "Principal of SISTec-E",
    linkedInProfile: "https://www.linkedin.com/in/drmanishbillore",
    twitterProfile: "https://x.com/manishbillore?s=20",
    instagramProfile:
      "https://www.instagram.com/billore.manish?igsh=MjVza21oc2FkbDY5",
    facebookProfile: "https://www.facebook.com/drmanishbillore",
  },
];

// 1.2 Chief Patrons Data
const chiefPatronsDataAPI = [
  {
    id: 1,
    photo: "./images/community_images/Chief Patrons/sudir_agrawal_md.jpeg",
    name: "Mr.Sudhir Kumar Agrawal",
    bio: "Hon'ble Chairman,Sagar Group",
    linkedInProfile: "https://www.linkedin.com/in/sudhir-agarwal-12a959153",
    twitterProfile: "",
    instagramProfile: "",
    facebookProfile: "https://www.facebook.com/sudhirkumar.agrawal.7",
  },
  {
    id: 2,
    photo: "./images/community_images/Patrons/1.jpg",
    name: "Mr. Siddharth Agrawal",
    bio: "MD, Sagar Group",
    linkedInProfile: "https://www.linkedin.com/in/siddharth-agrawal-10499a52",
    twitterProfile: "https://x.com/siddharthmanit?s=20",
    instagramProfile:
      "https://www.instagram.com/siddharth.manit?igsh=dHJwcmlpc3VhMTF6",
    facebookProfile: "https://www.facebook.com/sidd.agrawal",
  },
];

//2.  Advisory Committee Data
const advisoryCommitteeDataAPI = [
    {
    id: 1,
    photo:
      "./images/community_images/Advisory-Committee/Dr. Vineet Kapoor.jpeg",
    name: "Dr. Vineet Kapoor",
    bio: "DCP, Head Quarter Bhopal",
    linkedInProfile: "https://www.linkedin.com/in/dr-vineet-kapoor-33618019",
    twitterProfile: "https://x.com/vinkaps_ind?s=20",
    instagramProfile: "",
    facebookProfile: "https://www.facebook.com/DrVineetKapoor",
  },

  {
    id: 2,
    photo:
      "./images/community_images/Advisory-Committee/Mr. Shailendra Singh Chouhan.jpeg",
    name: "Mr. Shailendra Singh Chouhan",
    bio: "ADCP Crime Branch Bhopal",
    linkedInProfile: "",
    twitterProfile: "https://x.com/shailendra2006?s=20",
    instagramProfile: "",
    facebookProfile: "",
  },
  {
    id: 3,
    photo:
      "./images/community_images/Advisory-Committee/Dr.Sanjeev Sharma.jpeg",
    name: "Dr. Sanjeev Sharma",
    bio: "Deen Faculty RGPV",
    linkedInProfile: "https://www.linkedin.com/in/sanjeev-sharma-1828623",
    twitterProfile: "",
    instagramProfile: "",
    facebookProfile: "https://www.facebook.com/profile.php?id=1439324075",
  },

  {
    id: 4,
    photo: "./images/community_images/Advisory-Committee/Mr.Yogesh Khakre.jpeg",
    name: "Mr. Yogesh Khakre",
    bio: "COO Bhopal Smart City Ltd.",
    linkedInProfile: "https://www.linkedin.com/in/yogesh-khakre",
    twitterProfile: "https://x.com/YogeshKhakre?s=20",
    instagramProfile:
      "https://www.instagram.com/yogeshkhakre?igsh=MTIzOWk3NzJ5ajdxNA==",
    facebookProfile: "https://www.facebook.com/yogesh.khakre",
  },

  {
    id: 5,
    photo: "./images/community_images/Advisory-Committee/Mrs.Anuja Sharma.jpg",
    name: "Mrs. Anuja Sharma",
    bio: "Senior Scientist, ISRO",
    linkedInProfile: "https://www.linkedin.com/in/anuja-sharma-86991913b",
    twitterProfile: "",
    instagramProfile: "",
    facebookProfile: "",
  },

  {
    id: 6,
    photo:
      "./images/community_images/Advisory-Committee/Dr.Shikha Agrawal.jpeg",
    name: "Dr. Shikha Agrawal",
    bio: "UIT, RGPV Bhopal",
    linkedInProfile: "https://www.linkedin.com/in/dr-shikha-agrawal-349626a0",
    twitterProfile: "",
    instagramProfile: "",
    facebookProfile: "",
  },



  {
    id: 7,
    photo: "./images/community_images/Advisory-Committee/Mr. Sudesh More.jpeg",
    name: "Mr. Sudesh Morey",
    bio: "Director DRMZ Tech",
    linkedInProfile: "https://www.linkedin.com/in/sudesh-morey-1007218",
    twitterProfile: "",
    instagramProfile:
      "https://www.instagram.com/sudeshmorey?igsh=MTM2eWR6ZTc1cm5zbg==",
    facebookProfile: "https://www.facebook.com/sudeshmorey",
  },

  {
    id: 8,
    photo: "./images/community_images/Advisory-Committee/Mr. Dwarika Singh.jpg",
    name: "Mr. Dwarika Singh",
    bio: "Founder of ITSC Private Limited",
    linkedInProfile: "https://www.linkedin.com/in/dwarika",
    twitterProfile: "",
    instagramProfile: "",
    facebookProfile: "https://www.facebook.com/dwarikasingh",
  },
   // {
  //   id: 3,
  //   photo:
  //     "./images/community_images/Advisory-Committee/Mr. Shantanu Chakraborty.jpg",
  //   name: "Mr. Shantanu Chakraborty",
  //   bio: "Strategic Consultant at Empower",
  //   linkedInProfile: "https://www.linkedin.com/in/shanchakra",
  //   twitterProfile: "",
  //   instagramProfile: "",
  //   facebookProfile: "",
  // },
];

// 3. Coordinators Data
const coordinatorsDataAPI = [
  {
    id: 1,
    photo:
      "./images/community_images/Coordinators/Dr. Ajit Kumar Shrivastava.jpg",
    name: "Dr. Ajit Kumar Shrivastava",
    bio: "Associate Professor and HOD ",
    linkedInProfile:
      "https://www.linkedin.com/in/ajit-kumar-shrivastava-239274128",
    twitterProfile: "",
    instagramProfile: "",
    facebookProfile: "",
  },

  {
    id: 2,
    photo: "./images/community_images/Coordinators/Mr. Anuj Kumar Pal.jpg",
    name: "Mr. Anuj Kumar Pal",
    bio: "Assistant Professor",
    linkedInProfile: "",
    twitterProfile: "",
    instagramProfile: "",
    facebookProfile: "",
  },

  {
    id: 3,
    photo:
      "./images/community_images/Coordinators/Mrs. Namrata Shrivastava.jpg",
    name: "Ms. Namrata Shrivastava",
    bio: "Assistant Professor",
    linkedInProfile:
      "https://www.linkedin.com/in/namrata-shrivastava-116178274",
    twitterProfile: "",
    instagramProfile: "",
    facebookProfile: "",
  },

  {
    id: 4,
    photo: "./images/community_images/Coordinators/Mr.Rohit Bansal.jpg",
    name: "Mr. Rohit Bansal",
    bio: "Assistant Professor",
    linkedInProfile: "https://www.linkedin.com/in/rohit-bansal-38945462",
    twitterProfile: "",
    instagramProfile: "",
    facebookProfile: "",
  },

  {
    id: 5,
    photo: "./images/community_images/Coordinators/Mr. Himanshu Yadav.jpg",
    name: "Mr. Himanshu Yadav",
    bio: "Assistant Professor",
    linkedInProfile: "",
    twitterProfile: "",
    instagramProfile: "",
    facebookProfile: "",
  },

  {
    id: 6,
    photo: "./images/community_images/Coordinators/Mrs. Vandana Rai.jpg",
    name: "Ms. Vandana Rai",
    bio: "Assistant Professor",
    linkedInProfile: "https://www.linkedin.com/in/vandana-rai-b432b0234",
    twitterProfile: "",
    instagramProfile: "",
    facebookProfile: "",
  },

  {
    id: 7,
    photo: "./images/community_images/Coordinators/Mr. Arvind Kumar Jain.jpg",
    name: "Mr. Arvind Kumar Jain",
    bio: "Assistant Professor",
    linkedInProfile: "https://www.linkedin.com/in/arvind-kumar-jain-22553b84",
    twitterProfile: "",
    instagramProfile: "",
    facebookProfile: "",
  },

  {
    id: 8,
    photo: "./images/community_images/Coordinators/Mr. Amit Kumar Sahu.jpg",
    name: "Mr. Amit Kumar Sahu",
    bio: "Assistant Professor",
    linkedInProfile: "",
    twitterProfile: "",
    instagramProfile: "",
    facebookProfile: "",
  },

  {
    id: 9,
    photo: "./images/community_images/Coordinators/Mrs. Khushboo Bhardwaj.jpg",
    name: "Ms. Khushboo Bhardwaj",
    bio: "Assistant Professor",
    linkedInProfile: "",
    twitterProfile: "",
    instagramProfile:
      "https://www.instagram.com/khushboo_sharma1611?igsh=MWV5cHVrYXB4emJpNA==",
    facebookProfile: "",
  },

  {
    id: 10,
    photo:
      "./images/community_images/Coordinators/Mr. Dharmendra Narayan Jha.jpg",
    name: "Mr. Dharmendra Narayan Jha",
    bio: "Assistant Professor",
    linkedInProfile:
      "https://www.linkedin.com/in/dharmendra-narayan-jha-7a12a93b",
    twitterProfile: "",
    instagramProfile: "",
    facebookProfile: "",
  },

  {
    id: 11,
    photo: "./images/community_images/Coordinators/Mrs. Priyanka Bhatele.jpg",
    name: "Ms. Priyanka Bhatele",
    bio: "Assistant Professor",
    linkedInProfile: "https://www.linkedin.com/in/priyanka-bhatele-8693a9a1",
    twitterProfile: "",
    instagramProfile: "",
    facebookProfile: "",
  },

  {
    id: 12,
    photo: "./images/community_images/Coordinators/Mrs. Martina Martin.jpg",
    name: "Ms. Martina Martin",
    bio: "Assistant Professor",
    linkedInProfile: "https://www.linkedin.com/in/martina-martin-7b1270199",
    twitterProfile: "",
    instagramProfile: "",
    facebookProfile: "",
  },

  {
    id: 13,
    photo: "./images/community_images/Coordinators/Ms. Sadaf Hussaini.jpg",
    name: "Ms. Sadaf Hussaini",
    bio: "Assistant Professor",
    linkedInProfile: "https://www.linkedin.com/in/sadaf-hussaini-a4533298",
    twitterProfile: "",
    instagramProfile: "",
    facebookProfile: "",
  },

  {
    id: 14,
    photo: "./images/community_images/Coordinators/Mrs. Kiran Dehariya.jpg",
    name: "Ms. Kiran Dehariya",
    bio: "Assistant Professor",
    linkedInProfile: "https://www.linkedin.com/in/kiran-dehariya",
    twitterProfile: "",
    instagramProfile: "",
    facebookProfile: "",
  },

  {
    id: 15,
    photo: "./images/community_images/Coordinators/Mrs. G. Sowjanya.jpg",
    name: "Ms. G. Sowjanya",
    bio: "Assistant Professor",
    linkedInProfile: "",
    twitterProfile: "",
    instagramProfile: "",
    facebookProfile: "",
  },

  {
    id: 16,
    photo: "./images/community_images/Coordinators/Mrs. Bhavana Verma.jpg",
    name: "Ms. Bhavana Verma",
    bio: "Assistant Professor",
    linkedInProfile: "",
    twitterProfile: "",
    instagramProfile: "",
    facebookProfile: "",
  },

  {
    id: 17,
    photo: "./images/community_images/Coordinators/Mrs. Anuradha Mangal.jpg",
    name: "Ms. Anuradha Mangal",
    bio: "Assistant Professor",
    linkedInProfile: "",
    twitterProfile: "",
    instagramProfile: "",
    facebookProfile: "",
  },
];

export {
  patronsDataAPI,
  chiefPatronsDataAPI,
  advisoryCommitteeDataAPI,
  coordinatorsDataAPI,
};

// ========== SIH 2023 ==========

// Special Guest of SIH 2023
const specialGuest2k23API = [
  {
    id: 1,
    photo: "./images/community_images/Advisory-Committee/Mr.Yogesh Khakre.jpeg",
    name: "Mr. Yogesh Khakre",
    bio: "COO Bhopal Smart City Ltd.",
    linkedInProfile: "https://www.linkedin.com/in/yogesh-khakre",
    twitterProfile: "https://x.com/YogeshKhakre?s=20",
    instagramProfile:
      "https://www.instagram.com/yogeshkhakre?igsh=MTIzOWk3NzJ5ajdxNA==",
    facebookProfile: "https://www.facebook.com/yogesh.khakre",
  },

  {
    id: 2,
    photo:
      "./images/community_images/Advisory-Committee/Dr.Shikha Agrawal.jpeg",
    name: "Dr. Shikha Agrawal",
    bio: "Director T&P RGPV Bhopal",
    linkedInProfile: "https://www.linkedin.com/in/dr-shikha-agrawal-349626a0",
    twitterProfile: "",
    instagramProfile: "",
    facebookProfile: "",
  },

  {
    id: 3,
    photo: "./images/community_images/Advisory-Committee/Mr. Sudesh More.jpeg",
    name: "Mr. Sudesh Morey",
    bio: "Director DRMZ Tech",
    linkedInProfile: "https://www.linkedin.com/in/sudesh-morey-1007218",
    twitterProfile: "",
    instagramProfile:
      "https://www.instagram.com/sudeshmorey?igsh=MTM2eWR6ZTc1cm5zbg==",
    facebookProfile: "https://www.facebook.com/sudeshmorey",
  },
];

// Guest of Honour SIH 2023
const guestOfHonour2k23API = [
  {
    id: 1,
    photo: "./images/community_images/Advisory-Committee/Mr.Yogesh Khakre.jpeg",
    name: "Mr. Yogesh Khakre",
    bio: "COO Bhopal Smart City Ltd.",
    linkedInProfile: "https://www.linkedin.com/in/yogesh-khakre",
    twitterProfile: "https://x.com/YogeshKhakre?s=20",
    instagramProfile:
      "https://www.instagram.com/yogeshkhakre?igsh=MTIzOWk3NzJ5ajdxNA==",
    facebookProfile: "https://www.facebook.com/yogesh.khakre",
  },

  {
    id: 2,
    photo: "./images/community_images/Advisory-Committee/Mr. Sudesh More.jpeg",
    name: "Mr. Sudesh Morey",
    bio: "Director DRMZ Tech",
    linkedInProfile: "https://www.linkedin.com/in/sudesh-morey-1007218",
    twitterProfile: "",
    instagramProfile:
      "https://www.instagram.com/sudeshmorey?igsh=MTM2eWR6ZTc1cm5zbg==",
    facebookProfile: "https://www.facebook.com/sudeshmorey",
  },
];

export { specialGuest2k23API, guestOfHonour2k23API };
