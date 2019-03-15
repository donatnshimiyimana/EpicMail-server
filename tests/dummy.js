const newUser = {
  firstname: "Sabrina",
  lastname: "Mihigo",
  email: "mihigisabrina@gmail.com",
  password: "1234",
};

const falseNewUser = {
  firstname: "Sabrina",
  lastname: "Mihigo",
  email: "mihigisabrina@.com",
  password: "1234",
};

const falseNewUser2 = {
  firstname: "",
  lastname: "Mihigo",
  email: "mihigisabrina@gmail.",
  password: "1234",
};

const newUserLogIn = {
  email: newUser.email,
  password: newUser.password,
};

const falseUserLogIn = {
  email: "",
  password: newUser.password,
};

const falseEmailLogIn = {
  email: "test@gmail.com",
  password: newUser.password,
};

const falsePasswdLogIn = {
  email: newUser.email,
  password: "123",
};

const sentMessage = {
  subject: "Testing",
  message: "Have you passed!",
  senderId: 1,
  receiverId: 2,
  parentMessageId: 4,
  status: "sent",
};

const readMessage = {
  subject: "Testing",
  message: "Have you passed!",
  senderId: 2,
  receiverId: 1,
  parentMessageId: 5,
  status: "read",
};

const draftMessage = {
  subject: "Testing",
  message: "Have you passed!",
  senderId: 3,
  receiverId: 1,
  parentMessageId: 6,
  status: "draft",
};

const falseReadMessage = {
  subject: "Testing",
  message: "Have you passed!",
  senderId: 1,
  receiverId: 1,
  parentMessageId: 4,
  status: "read",
};

const unregisteredReceiver = {
  subject: "Testing",
  message: "Have you passed!",
  senderId: 1,
  receiverId: 11,
  parentMessageId: 4,
  status: "draft",
};

const unregisteredSender = {
  subject: "Testing",
  message: "Have you passed!",
  senderId: 20,
  receiverId: 1,
  parentMessageId: 4,
  status: "draft",
};

const emptyMessage = {
  subject: "Testing",
  message: "",
  senderId: 1,
  receiverId: 3,
  parentMessageId: 4,
  status: "draft",
};

export {
  newUser, newUserLogIn, sentMessage, readMessage, draftMessage, falseEmailLogIn,
  falsePasswdLogIn, falseNewUser, falseNewUser2, falseUserLogIn, falseReadMessage,
  unregisteredReceiver, unregisteredSender, emptyMessage,
};
