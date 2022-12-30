export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const check1 = /^[a-z]+[a-z\-_\d]*[a-z]+$/i.test(this.name);
    const check2 = /(\d){4,}/i.test(this.name);
    return ((check1 === true) && (check2 === false)) ? 'Имя валидно' : 'Имя НЕ валидно!';
  }
}
