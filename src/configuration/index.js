const APP_NAVIGATE_SCREEN = {
    LOGIN: 'LOGIN',
    SIGN_UP: 'SIGN_UP',
    MAIN : 'MAIN',
    BUILDING : 'BUILDING',
    HOME : 'HOME',
    CHAT : 'CHAT',
    CASHFLOW:'CASHFLOW',
    MANAGEMENT:'MANAGEMENT'
}
export const NAME_REGEX =
  /^[a-zA-Z ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/;

const Config = {
    APP_NAVIGATE_SCREEN,
    NAME_REGEX
}

export default Config;