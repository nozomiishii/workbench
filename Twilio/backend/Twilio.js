const twilio = require('twilio');

class Twilio {
  phoneNumber = '+12132604903';
  phoneNumberSid = 'PN5a8496d65ce8a437fa32b79ea40659aa';
  tokenSid = 'SK542aba1e314ab874e4ef3b198663c6ed';
  tokenSecret = 'PjrtdMX55KrBFzqLmlp7Clt73WlhErCh';
  accountSid = 'AC5440eadfc0f5e21046247231036a7886';
  verify = 'VA225a2084ea0064d9d1dd86243d0562da';
  client;
  constructor() {
    this.client = twilio(this.tokenSid, this.tokenSecret, {
      accountSid: this.accountSid,
    });
  }
  getTwilio() {
    this.client;
  }
  async sendVerifyAsync(to, channel) {
    const data = await this.client.verify
      .services(this.verify)
      .verifications.create({
        to,
        channel,
      });
    console.log('Twilio -> sendVerify -> data', data);
    return data;
  }

  async verifyCodeAsync(to, code) {
    const data = await this.client.verify
      .services(this.verify)
      .verificationChecks.create({ to, code });

    console.log('verify code', data);
    return data;
  }
}

const instance = new Twilio();
Object.freeze(instance);

module.exports = instance;
