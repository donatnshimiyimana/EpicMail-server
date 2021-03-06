import Joi from "joi";
import moment from "moment";
import dummy from "../models/dummy";
import validate from "../middleware/validate";
// import messagee from "../models/message";

const messages = {
  /**
   * Send an email
   * @param {object} req
   * @param {object} res
   */
  sendEmail(req, res) {
    const {
      subject, message, senderId, receiverId, parentMessageId, status,
    } = req.body;
    const { error } = Joi.validate(
      {
        subject, message, senderId, receiverId, parentMessageId, status,
      }, validate.messageSchema,
    );
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const trueSender = dummy.contacts.filter(sender => sender.id === senderId);
    const trueReceiver = dummy.contacts.filter(receiver => receiver.id === receiverId);

    if (trueSender.length === 0) {
      return res.status(404).json({
        status: 404,
        error: "the sender is not registered",
      });
    } if (trueReceiver.length === 0) {
      return res.status(404).json({
        status: 404,
        error: "the receiver is not registered",
      });
    } if (senderId === receiverId) {
      return res.status(400).json({
        status: 400,
        error: "the sender id and receiver id must not be the same",
      });
    }
    const id = dummy.messages.length + 1;
    const createdOn = moment().format("LL");
    const newMessage = {
      id,
      subject,
      message,
      senderId,
      receiverId,
      parentMessageId,
      status,
      createdOn,

    }
    dummy.messages.push(newMessage);

    console.log(newMessage);

    if (status === "sent") {
      return res.status(201).json({
        status: 201, success: "email sent", data:[newMessage],
      });
    } if (status === "draft") {
      return res.status(201).json({
        status: 201, success: "email drafted", data: [newMessage],
      });
    } 

    return res.status(201).json({
        status: 201, success: "email read", data: [newMessage],
      });
    
      
    
  },

  /**
   * Retrieve all emails
   * @param {object} req
   * @param {object} res
   */
  retrieveMails(req, res) {
    if (dummy.messages.length === 0) {
      res.status(404).json({
        status: 404,
        error: "no emails found",
      });
    } else {
      res.status(200).json({
        status: 200,
        success: "received emails retrieved",
        data: dummy.messages,
      });
    }
  },

  /**
   * Retrieve a specific email
   * @param {object} req
   * @param {object} res
   */
  retrieveSpecificEmail(req, res) {
    const emailId = parseInt(req.params.id, 10);
    const { error } = Joi.validate(
      {
        emailId,
      },
      validate.emailParams,
    );
    if (error) {
      res.status(400).json({ error: error.details[0].message });
    } else {
      // eslint-disable-next-line array-callback-return
      dummy.messages.map((email) => {
        if (email.id === emailId) {
          res.status(200).json({
            status: 200,
            success: "email retrieved",
            data: [email],
          });
        }
      });
      res.status(404).json({
        status: 404,
        error: "email not found",
      });
    }
  },

  /**
   * Delete a specific email
   * @param {object} req
   * @param {object} res
   */
  deleteMail(req, res) {
    const emailId = parseInt(req.params.id, 10);
    const { error } = Joi.validate(
      {
        emailId,
      },
      validate.emailParams,
    );
    if (error) {
      res.status(400).json({ error: error.details[0].message });
    } else {
      for (let i = 0; i < dummy.messages.length; i++) {
        if (dummy.messages[i].id === emailId) {
          dummy.messages.splice(i, 1);
          res.status(200).json({
            status: 200,
            success: "email deleted",
          });
        }
      }
      res.status(404).json({
        status: 404,
        error: "email not found",
      });
    }
  },

  /**
   * Retrieve all sent emails
   * @param {object} req
   * @param {object} res
   */
  retrieveSentEmails(req, res) {
    const sentEmails = dummy.messages.filter(email => email.status === "sent");
    if (sentEmails.length === 0) {
      res.status(400).json({
        status: 400,
        success: "no sent emails found",
      });
    } else {
      res.status(200).json({
        status: 200,
        success: "sent emails retrieved",
        data: [sentEmails],
      });
    }
  },

  /**
   * Retrieve all read emails
   * @param {object} req
   * @param {object} res
   */
  retrieveReadEmails(req, res) {
    const readEmails = dummy.messages.filter(email => email.status === "read");
    if (readEmails.length === 0) {
      res.status(400).json({
        status: 400,
        success: "no read emails found",
      });
    } else {
      res.status(200).json({
        status: 200,
        success: "read emails retrieved",
        data: [readEmails],
      });
    }
  },
};

export default messages;
