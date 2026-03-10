const communities = [
  {
    name: "One Gen Away Food Bank",
    address: "320 Premier Ct Suite 218, Franklin, TN 37067",
    email: "Annette@onegenaway.com",
    phone: "(844)-642-4673",
    category: "Food Assistance",
    website: "https://onegenaway.com/",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "GraceWorks Ministries",
    address: "104 Southeast Pkwy, Franklin, TN 37064",
    email: "info@graceworkstn.org",
    phone: "(615)-794-9055",
    category: "Food Assistance",
    website: "https://www.graceworkstn.org/",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "The Well Outreach",
    address: "5306 Main St, Spring Hill, TN 37174",
    email: "info@thewelloutreach.org",
    phone: "615-302-9355",
    category: "Food Assistance",
    website: "https://thewelloutreach.org/",
    rating: 4.2,
    image: "https://www.columbiadailyherald.com/gcdn/presto/2020/10/03/NDHE/095be7e0-939d-4360-b554-a288c31f7fbb-2010-10-18-The-Well-Outreach-Mobile-Food-Pantry-03.jpg"
  },
  {
    name: "Nolensville Food Pantry",
    address: "1668 Sunset Rd, Nolensville, TN 37135",
    email: "info@nolensvillefoodpantry.org",
    phone: "615-283-8197",
    category: "Food Assistance",
    website: "https://www.nolensvillefoodpantry.org/",
    rating: 3.9,
    image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Habitat for Humanity (Williamson-Maury)",
    address: "511 West Meade Blvd, Franklin, TN 37064",
    email: "krandell@hfhwm.org",
    phone: "615-690-8090",
    category: "Housing & Community Development",
    website: "https://www.hfhwm.org/",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Franklin Housing Authority",
    address: "200 Spring Street, Franklin, TN 37064",
    email: null,
    phone: "(615)-794-1247",
    category: "Housing & Community Development",
    website: "https://www.franklinhousingauthority.com/",
    rating: 3.5,
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Housing Development in City of Franklin, TN",
    address: "109 3rd Avenue South, Franklin, TN 37064",
    email: null,
    phone: "615-791-3217",
    category: "Housing & Community Development",
    website: "https://www.franklintn.gov/services/development-building-services/development-building-services/housing-development",
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Franklin First United Methodist Church",
    address: "120 Aldersgate Way, Franklin, TN 37069",
    email: "jtodd@franklinfumc.org",
    phone: "615-794-2734",
    category: "Religious Community Assistance",
    website: "https://franklinfumc.org/",
    rating: 4.6,
    image: "https://ccschouston.org/wp-content/uploads/2023/07/Family-service-day-3.jpg"
  },
  {
    name: "FrankTown Open Hearts",
    address: "320 Main Street, Suite 200, Franklin, TN 37064",
    email: "Chris@franktownopenhearts.com",
    phone: "615-807-0782",
    category: "Religious Community Assistance",
    website: "https://franktownopenhearts.com/",
    rating: 4.8,
    image: "https://bloximages.newyork1.vip.townnews.com/williamsonherald.com/content/tncms/assets/v3/editorial/9/62/9628647c-32c2-4a12-8bf8-fa3337f9bd7d/68f2af65b3260.image.jpg?resize=750%2C500"
  },
  {
    name: "Williamson County Animal Shelter",
    address: "1006 Grigsby Hayes Court Franklin, TN 37064",
    email: "wcras@wilco.org",
    phone: "615-790-5590",
    category: "Animal Welfare",
    website: "https://www.adoptwcac.org/269/Fulfill-Community-Service-Hours",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Williamson County Animal Hospital",
    address: "1126 Murfreesboro Road, Franklin, TN 37064",
    email: "info@wcah.org",
    phone: "(615) 794-7113",
    category: "Animal Welfare",
    website: "https://www.wcah.org/",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Animal Care Center of Brentwood",
    address: "283 Wilson Pike Circle, Brentwood, TN 37027",
    email: "animalcarecenterofbrentwood@comcast.net",
    phone: "(615) 371-1242",
    category: "Animal Welfare",
    website: "https://www.animalcarecenterofbrentwood.com/",
    rating: 3.8,
    image: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Keep Williamson Beautiful",
    address: "Franklin, TN",
    email: "belinda.brooks@williamsoncounty-tn.gov",
    phone: "615-786-0166",
    category: "Environmental & Community Clean-Up",
    website: "https://www.williamsoncounty-tn.gov/1453/Contact-KWB",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Harpeth Conservancy",
    address: "215 Jamestown Park Road, Suite 101, Brentwood, TN 37027",
    email: null,
    phone: "(615) 790-9767",
    category: "Environmental & Community Clean-Up",
    website: "https://harpethconservancy.org/",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1470104240373-bc1812eddc9f?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Cumberland River Compact",
    address: "1320 Adams St #1040, Nashville, TN 37208",
    email: "info@cumberlandrivercompact.org",
    phone: "(615) 837-1151",
    category: "Environmental & Community Clean-Up",
    website: "https://cumberlandrivercompact.org/",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1503197979108-c824168d51a8?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Tennessee Environmental Council (TEC)",
    address: "One Vantage Way, Suite E-250, Nashville, TN 37228",
    email: "tec@tectn.org",
    phone: "615-248-6500",
    category: "Environmental & Community Clean-Up",
    website: "https://www.tectn.org/",
    rating: 4.2,
    image: "https://www.tectn.org/uploads/1/1/9/8/119801148/tec-glengarry-garden-photo_orig.jpg"
  },
  {
    name: "Volunteens TN / Volunteer Tennessee",
    address: "312 Rosa L. Parks Ave, 18th Floor, Nashville, TN 37243",
    email: "volunteer.tennessee@tn.gov",
    phone: "(615) 253-1426",
    category: "Youth Volunteer Programs",
    website: "https://www.tn.gov/volunteer-tennessee.html",
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Williamson County Library Volunteering",
    address: "1314 Columbia Ave, Franklin, TN 37064",
    email: "deborah.reschke@williamsoncounty-tn.gov",
    phone: "615-786-0142",
    category: "Youth Volunteer Programs",
    website: "https://wcpltn.org/306/Volunteer",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "The John P. Holt Brentwood Library Volunteering",
    address: "8109 Concord Rd, Brentwood, TN 37027",
    email: "VolunteerCoordinator@brentwoodtn.gov",
    phone: "(615) 371-0090",
    category: "Youth Volunteer Programs",
    website: "https://library.brentwoodtn.gov/Support/Volunteer",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Hands On Nashville / United Way",
    address: "250 Venture Circle, Nashville, TN 37228",
    email: "hon@unitedwaygn.org",
    phone: "(615) 298-1108",
    category: "Non-Profit Organizations",
    website: "https://handson.unitedwaygreaternashville.org/organization/001A000000mJ3pGIAS?layoutViewMode=tablet",
    rating: 4.8,
    image: "https://mindtrip.ai/cdn-cgi/image/format=webp,w=1200/https://images.mindtrip.ai/attractions/25c1/193c/ec03/0603/fcf3/bc69/d879/e3d1"
  },
  {
    name: "American Red Cross",
    address: "129 W Fowlkes St # 100, Franklin, TN 37064",
    email: "hospitalsupport@redcross.org",
    phone: "800-733-2767",
    category: "Non-Profit Organizations",
    website: "https://www.redcross.org/local/tennessee.html",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "We Care Williamson County",
    address: "104 Southeast Pkwy, Suite 101, Franklin, TN 37064",
    email: "info@wecarewilliamsoncounty.org",
    phone: "(615) 208-5068",
    category: "Non-Profit Organizations",
    website: "https://www.wecarewilliamsoncounty.org/",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "The Refuge Center for Counseling",
    address: "4317 Long Lane, Franklin, TN 37064",
    email: "info@therefugecenter.org",
    phone: "(615) 591-5262",
    category: "Mental Health Services",
    website: "https://refugecenter.org/",
    rating: 4.7,
    image: "https://refugecenter.org/wp-content/uploads/2025/01/IMG_4016-2.jpg"
  },
  {
    name: "Mercy Community Healthcare",
    address: "1113 Murfreesboro Rd, Franklin, TN 37064",
    email: "info@mercytn.org",
    phone: "(615) 790-0567",
    category: "Mental Health Services",
    website: "https://mercytn.org/",
    rating: 4.5,
    image: "https://media.istockphoto.com/id/1468520185/photo/teamwork-planning-and-meeting-with-doctors-and-laptop-for-medical-review-and-healthcare.jpg?s=612x612&w=0&k=20&c=mzMOVtbPz2H-T6T4F4htxsq9YFdiKfllmQOYZnyR9GE="
  },
  {
    name: "Williamson County Mental Health",
    address: "407 N. Monroe St., Suite 220, Marion, IL 62959",
    email: "708board@williamsoncountyil.gov",
    phone: "988",
    category: "Mental Health Services",
    website: "https://williamsoncountymentalhealth.org/services/",
    rating: 3.7,
    image: "https://media.istockphoto.com/id/871778784/photo/adorable-baby-boy-claps-during-medical-exam.jpg?s=612x612&w=0&k=20&c=BHWS0ghGxGLsgrfL303jS-bjkAKVqhNF3IbHtNLtUUE="
  },
  {
    name: "Find Hope Franklin",
    address: "1001 N James M Campbell Blvd, Columbia, TN 38401",
    email: "info@therefugecenter.org",
    phone: "(877) 342-1450",
    category: "Mental Health Services",
    website: "https://findhopefranklin.com/",
    rating: 4.2,
    image: "https://www.careerstaff.com/wp-content/uploads/2024/05/best-healthcare-jobs-mental-health-field-1200x722.png"
  },
  {
    name: "NAMI - Williamson & Maury Counties",
    address: "PO Box 680273, Franklin, TN 37068",
    email: "namiwilliamsontn@gmail.com",
    phone: "615-567-3793",
    category: "Mental Health Services",
    website: "https://www.nami.org/affiliate/tennessee/nami-williamson-and-maury-counties-tn/",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Williamson County Sheriff",
    address: "408 Century Ct, Franklin, TN 37064",
    email: "info@williamsoncountysheriffTN.com",
    phone: "(615) 790-5560",
    category: "Emergency Services",
    website: "https://williamsoncountysherifftn.com/",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Office of Public Safety",
    address: "304 Beasley Drive, Franklin, TN 37064",
    email: null,
    phone: "(615) 790-5757",
    category: "Emergency Services",
    website: "http://www.williamsonready.org/",
    rating: 4.0,
    image: "https://proambri.com/wp-content/uploads/2024/05/Ambulance-On-Street.jpg"
  },
  {
    name: "Mary Lee Bunch Associates",
    address: "7113 Peach Ct, Suite 111, Brentwood, TN 37027",
    email: "info@maryleebunch.com",
    phone: "(615) 377-6370",
    category: "Education & Tutoring",
    website: "https://www.maryleebunch.com/",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Williamson County Public Library Tutoring",
    address: "1314 Columbia Ave, Franklin, TN 37064",
    email: "library.friends@williamsoncounty-tn.gov",
    phone: "(615) 595-1243",
    category: "Education & Tutoring",
    website: "https://wcpltn.org/403/Homework-Help-Test-Prep",
    rating: 4.9,
    image: "https://westportlibrary.org/wp-content/uploads/2023/10/Near-Peer-Tutoring.png"
  },
  {
    name: "Huntington Learning Center",
    address: "95 Seaboard Lane, Suite 106, Brentwood, TN 37027",
    email: null,
    phone: "(615) 376-8000",
    category: "Education & Tutoring",
    website: "https://huntingtonhelps.com/locations/brentwood-tn/llp/tutoring/",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
  }
];