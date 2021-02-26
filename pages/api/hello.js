// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//Try accessing it at http://localhost:3000/api/hello. You should see {"text":"Hello"}.
export default (req, res) => {
  // req  is an instance of http.IncomingMessage, plus some pre-built middlewares
  //res is an instance of http.ServerResponse, plus some helper functions
  res.status(200).json({ text: 'Hello' });
};
