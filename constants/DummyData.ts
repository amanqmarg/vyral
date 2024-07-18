const questionsData = [
    {
      "eventName": "Event 1",
      "description": "This is a description of Event 1.",
      "questions": [
        {
          "question": "Company/organization",
          "options": [],
          "answer": 0 
        },
        {
            "question": "Job Title",
            "options": [],
            "answer": 0 
          },
        {
          "question": "Are you currently a student?",
          "options": [
            "Yes",
            "No",
          ],
          "answer": 0
        },
        {
            "question": "Where did you hear about this event?",
            "options": [
              "Linkedin",
              "Instagram",
              "Twitter",
              "Facebook"
            ],
            "answer": 0
          },
      ]
    },
    // {
    //   "eventName": "Event 2",
    //   "description": "This is a description of Event 2.",
    //   "questions": [
    //     {
    //       "question": "What is the largest country in the world?",
    //       "options": [
    //         "Russia",
    //         "Canada",
    //         "China",
    //         "United States"
    //       ],
    //       "answer": 0
    //     },
    //     {
    //       "question": "What is the currency of Japan?",
    //       "options": [
    //         "Yen",
    //         "Yuan",
    //         "Euro",
    //         "Dollar"
    //       ],
    //       "answer": 0
    //     },
    //   ]
    // }
  ];

  const eventDetails={
    eventName:'Art Show',
    eventBy:'Olivia Adams',
    date:'Monday, Nov 13 2024',
    time:'6:00 PM - 10:00 PM',
    place:'Lower Manhattan',
    address:'280 Broome St | Apartment 9',
    ticketsLeft:'78/100 tickets left',
    totalInvited:'100+',
    price:'$10.00 - $50.00',
    eventDesc:`Come join m ein celebrating my 25th birthday! I can't wait to celebrate with all of you, so let's make it a night to remember. See you at the party!`
  }
  export default{
    questionsData,eventDetails
  }
  