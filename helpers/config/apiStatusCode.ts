export const apiStatusCodes = {
    SUCCESS_1: 200,
    SUCCESS_2: 201,
    SUCCESS_4: 204, // success to delete file
    BAD_REQUEST: 400, // wrong parameter / wrong format / wrong key etc
    UNAUTHORIZED: 401, // token expired / user deleted / user doesn't exists / session expired
    ALREADY_EXISTS: 403, // (user / mobile number / email) already exists / Folder name already exists etc
    NOT_FOUND: 404, // user not found (while login) / file not found / etc
    NOT_ACCEPTABLE : 406, // wrong otp etc
    PRECONDITION_FAILED : 412, // validation failed on D0 etc
}