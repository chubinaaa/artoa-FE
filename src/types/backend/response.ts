type HttpErrorCode =
  | "BAD_REQUEST"
  | "UNAUTHORIZED"
  | "NOT_FOUND"
  | "METHOD_NOT_ALLOWED"
  | "NOT_ACCEPTABLE"
  | "REQUEST_TIMEOUT"
  | "CONFLICT"
  | "GONE"
  | "LENGTH_REQUIRED"
  | "PRECONDITION_FAILED"
  | "PAYLOAD_TOO_LARGE"
  | "URI_TOO_LONG"
  | "UNSUPPORTED_MEDIA_TYPE"
  | "RANGE_NOT_SATISFIABLE"
  | "EXPECTATION_FAILED"
  | "TEAPOT";

type BackendErrorCode =
  | "VALIDATION_ERROR"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD";

type ErrorCode = HttpErrorCode | BackendErrorCode | "INTERNAL_ERROR";

export class BackendError extends Error {
  code: ErrorCode;
  details?: unknown;
  constructor(
    code: ErrorCode,
    {
      message,
      details,
    }: {
      message?: string;
      details?: unknown;
    } = {},
  ) {
    super(message ?? getMessageFromErrorCode(code));
    this.code = code;
    this.details = details;
  }
}

export function getMessageFromErrorCode(code: ErrorCode): string {
  switch (code) {
    case "BAD_REQUEST":
      return "The request is invalid.";
    case "VALIDATION_ERROR":
      return "The request contains invalid or missing fields.";
    case "UNAUTHORIZED":
      return "You are not authorized to access this resource.";
    case "NOT_FOUND":
      return "The requested resource was not found.";
    case "USER_NOT_FOUND":
      return "The user was not found.";
    case "INTERNAL_ERROR":
      return "An internal server error occurred.";
    case "CONFLICT":
      return "The request conflicts with the current state of the server.";
    case "INVALID_PASSWORD":
      return "The password is incorrect.";
    default:
      return "An internal server error occurred.";
  }
}
