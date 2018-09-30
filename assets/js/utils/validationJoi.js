import * as Joi from 'joi-browser';

export const schemaSignUp = {
  username: Joi.string()
    .alphanum()
    .min(4)
    .max(30)
    .required()
    .error(new Error('Merci de renseigner votre pseudo comprenant entre 8 et 30 caractères :)')),
  password: Joi.string()
    .alphanum()
    .min(8)
    .max(60)
    .required()
    .error(new Error('Merci de renseigner votre mot de passe comprenant entre 8 et 60 caractères :)')),
  passwordConfirm: Joi.string()
    .equal(Joi.ref('password'))
    .required()
    .error(new Error('Confirmation invalide :)')),
  email: Joi.string()
    .email()
    // eslint-disable-next-line
    .regex(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
    .required()
    .error(new Error('Merci de renseigner un email conforme :)')),
  gender: Joi.string()
    .equal(['M', 'F', 'MALE', 'FEMALE', 'H', 'Homme', 'homme', 'Femme', 'femme'])
    .required()
    .error(new Error('Merci de renseigner votre genre :)')),
  departments: Joi.string()
    .min(18)
    .max(20)
    .required()
    .error(new Error('Merci de renseigner votre département :)')),
  birthDate: Joi.string()
    .required()
    .error(new Error('Merci de renseigner votre date de naissance :)')),
  role: Joi.string().optional()
};

export const schemaLogin = {
  username: Joi.string()
    .alphanum()
    .min(4)
    .max(30)
    .required()
    .error(new Error('Merci de renseigner votre pseudo comprenant entre 8 et 30 caractères :)')),
  password: Joi.string()
    .alphanum()
    .min(8)
    .max(60)
    .required()
    .error(new Error('Merci de renseigner votre mot de passe comprenant entre 8 et 60 caractères :)'))
};

export const updateProfile = {
  username: Joi.string()
    .alphanum()
    .min(4)
    .max(30)
    .error(new Error('Merci de renseigner votre pseudo comprenant entre 8 et 30 caractères :)')),
  password: Joi.string()
    .alphanum()
    .min(8)
    .max(60)
    .error(new Error('Merci de renseigner votre mot de passe comprenant entre 8 et 60 caractères :)')),
  passwordConfirm: Joi.string()
    .equal(Joi.ref('password'))
    .error(new Error('Confirmation invalide :)')),
  email: Joi.string()
    .email()
    // eslint-disable-next-line
    .regex(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
    .error(new Error('Merci de renseigner un email conforme :)')),
  gender: Joi.string()
    .equal(['M', 'F', 'MALE', 'FEMALE', 'H', 'Homme', 'homme', 'Femme', 'femme'])
    .error(new Error('Merci de renseigner votre genre :)')),
  birthDate: Joi.string()
    .error(new Error('Merci de renseigner votre date de naissance :)')),
  departments: Joi.string()
    .min(18)
    .max(20)
    .error(new Error('Merci de renseigner votre département :)')),
  role: Joi.string().optional()
};

export const schemaPropose = {
  title: Joi.string(),
  prop1: Joi.string(),
  prop2: Joi.string()
};
