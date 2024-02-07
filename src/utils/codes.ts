const codes = {
  info: {
    processing: 102,
  },
  success: {
    ok: 200,
    created: 201,
    accepted: 202,
  },
  server: {
    internal: 500,
    badGateway: 502,
  },
  client: {
    badRequest: 400,
    unAuthorized: 401,
    paymentRequired: 402,
    forbidden: 403,
    alreadyExist: 409,
    notFound: 404,
    unsupportedMediaType: 415,
  },
};

export default codes;
