export interface ResponseFormat {
  data?: any;
  message?: string;
  error?: string;
  isSuccess?: boolean;
}

export class SuccessResponse {
  static success(message: string) {
    let res = {
      message,
      isSuccess: true,
    };

    console.log("success", res);
    console.log(JSON.stringify(res, undefined, 2));
    return res;
  }

  static data(data: any) {
    let res = {
      statusCode: 200,
      data,
      isSuccess: true,
    };

    console.log(JSON.stringify(res));

    return res;
  }
}
export class FailureResponse {
  static failure(error: any) {
    let res = {
      isSuccess: false,
      message: error.message || error || "SERVER ERROR",
    };

    console.log("failure");
    console.log(JSON.stringify(res, undefined, 2));
    return res;
  }
}
