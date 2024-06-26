import { required, minLength, helpers, email } from '@vuelidate/validators'

const validations = {
  emailAddress: {
    required: helpers.withMessage('Необходимо заполнить поле', required),
    email: helpers.withMessage(
      'Значение не является действительным адресом электронной почты',
      email
    ),
    $autoDirty: true
  },
  password: {
    required: helpers.withMessage('Необходимо заполнить поле', required),
    minLength: helpers.withMessage('Это поле должно быть длиной не менее 6 символов', minLength(6)),
    $autoDirty: true
  },
  name: { required: helpers.withMessage('Необходимо заполнить поле', required), $autoDirty: true }
}

export default validations
