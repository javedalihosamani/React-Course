const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
    address: { city: "San Francisco", state: "CA" },
    bank: [
      {
        accNo: 1234,
        bName: "SBI",
        type: "Saving",
      },
      {
        accNo: 4334,
        bName: "HDFC",
        type: "current",
      },
    ],
  },

  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    age: 28,
    address: { city: "Los Angeles", state: "CA" },
    bank: [
      {
        accNo: 2345,
        bName: "ICICI",
        type: "Saving",
      },
      {
        accNo: 5432,
        bName: "PNC",
        type: "current",
      },
    ],
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    age: 35,
    address: { city: "New York", state: "NY" },
    bank: [
      {
        accNo: 3456,
        bName: "BOA",
        type: "Saving",
      },
      {
        accNo: 6543,
        bName: "TD",
        type: "current",
      },
    ],
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    age: 29,
    address: { city: "Chicago", state: "IL" },
    bank: [
      {
        accNo: 4567,
        bName: "Citibank",
        type: "Saving",
      },
      {
        accNo: 7654,
        bName: "Wells Fargo",
        type: "current",
      },
    ],
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david.wilson@example.com",
    age: 32,
    address: { city: "Boston", state: "MA" },
    bank: [
      {
        accNo: 5678,
        bName: "Bank of America",
        type: "Saving",
      },
      {
        accNo: 8765,
        bName: "Capital One",
        type: "current",
      },
    ],
  }
];

export default users;
