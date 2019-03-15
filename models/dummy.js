import bcrypt from "bcryptjs";

const users = [
  {
    id: 1,
    email: "donatnshimiyimana@gmail.com",
    firstName: "Donat",
    lastName: "Nshimiyimana",
    password: bcrypt.hashSync("1234", 10),
  },
  {
    id: 2,
    email: "dushimemike@gmail.com",
    firstname: "Mike",
    lastname: "Dushime",
    password: bcrypt.hashSync("1234", 10),
  },
  {
    id: 1,
    email: "iraguharachel@gmail.com",
    firstName: "Iraguha",
    lastName: "Rachel",
    password: bcrypt.hashSync("1234", 10),
  },
];

const messages = [
  {
    id: 1,
    createdOn: "May 10, 2019",
    subject: "What is Lorem Ipsum?",
    message: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature",
    senderId: 2,
    receiverId: 1,
    parentMessageId: 1,
    status: "sent",
  },
  {
    id: 2,
    createdOn: "June 24, 2019",
    subject: "Hi",
    message: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin.",
    senderId: 3,
    receiverId: 2,
    parentMessageId: 2,
    status: "draft",
  },
  {
    id: 3,
    createdOn: "August 08, 2019",
    subject: "Contrary to popular belief",
    message: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
    senderId: 1,
    receiverId: 3,
    parentMessageId: 3,
    status: "read",
  },
];

const contacts = [
  {
    id: 1,
    email: "donatnshimiyimana@gmail.com",
    firstName: "Donat",
    lastName: "Nshimiyimana",
  },
  {
    id: 2,
    firstname: "Mike",
    lastname: "Dushime",
    email: "dushimemike@gmail.com",
  },
  {
    id: 3,
    email: "iraguharachel@gmail.com",
    firstName: "Iraguha",
    lastName: "Rachel",
  },
];

export default
{
  users, messages, contacts,
};
