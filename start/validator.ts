/*
|--------------------------------------------------------------------------
| Validator file
|--------------------------------------------------------------------------
|
| The validator file is used for configuring global transforms for VineJS.
| The transform below converts all VineJS date outputs from JavaScript
| Date objects to Luxon DateTime instances, so that validated dates are
| ready to use with Lucid models and other parts of the app that expect
| Luxon DateTime.
|
*/

import { DateTime } from 'luxon'
import vine, { SimpleMessagesProvider, VineDate } from '@vinejs/vine'

declare module '@vinejs/vine/types' {
  interface VineGlobalTransforms {
    date: DateTime
  }
}

VineDate.transform((value) => DateTime.fromJSDate(value))

vine.messagesProvider = new SimpleMessagesProvider({
  'required': 'Ce champ est obligatoire.',
  'string': 'Ce champ est invalide.',
  'email': 'Adresse email invalide.',
  'maxLength': 'Ce champ est trop long.',
  'password.minLength': 'Le mot de passe doit contenir au moins 8 caractères.',
  'password.maxLength': 'Le mot de passe ne doit pas dépasser 32 caractères.',
  'confirmed': 'Les mots de passe ne correspondent pas.',
  'database.unique': 'Cette adresse email est déjà utilisée.',
})
