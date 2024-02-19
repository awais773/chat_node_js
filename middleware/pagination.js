// pagination.js

function paginationMiddleware(req, res, next) {
    const page = parseInt(req.query.page) || 1; // Get the page number from the query string, default to 1 if not provided
    const limit = parseInt(req.query.limit) || 10; // Get the limit (number of items per page) from the query string, default to 10 if not provided
  
    // Calculate the offset based on the page and limit
    const offset = (page - 1) * limit;
  
    // Attach pagination information to the request object
    req.pagination = {
      page,
      limit,
      offset,
    };
  
    next(); // Move to the next middleware or route handler
  }
  
  module.exports ={ paginationMiddleware};
  