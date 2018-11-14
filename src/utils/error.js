const _charDiffErr = (num1, num2, str) => {
  let diff = num1 - num2;

  if (diff > 0) {
    return str + `${diff} char${diff > 1 ? 's' : ''} too many`;
  }

  diff = Math.abs(diff);

  return str + `${diff} char${diff > 1 ? 's' : ''} remaining`;
};

export const form = {
  email: _this => {
    const { email, maxLength, minLength, $params } = _this.$v.email;
    const pre = `email must be between 7 and 32 characters: `;

    const l = _this.password.length;
    const minL = $params.minLength.min;
    const maxL = $params.maxLength.max;

    if (!maxLength) return _charDiffErr(l, maxL, pre);
    if (!minLength) return _charDiffErr(l, minL, pre);
    if (!email) return `please check email format`;
  },
  password: _this => {
    const { maxLength, minLength, $params } = _this.$v.password;
    const pre = `password must be between 8 and 64 characters: `;

    const l = _this.password.length;
    const minL = $params.minLength.min;
    const maxL = $params.maxLength.max;

    if (!maxLength) return _charDiffErr(l, maxL, pre);

    if (!minLength) return _charDiffErr(l, minL, pre);
  },
};
