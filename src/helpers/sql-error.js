/**
 * Function for handling unexpected SQL errors.
 * @param res The response object
 * @param success Callback function when no SQL errors present
 * @returns Callback function for SQL query
 * @module sql-error
 */
export default function sqlError(res, success) {
    return (err, rows) => {
        // Declare an internal server error. Request body should have been validated by this point
        if (err) {
            res.status(500).json({
                message: "An unexpected error occured while parsing the SQL query"
            });
            throw err;
        } else success(rows);
    }
}