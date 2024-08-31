import sqlError from "../helpers/sql-error.js";

/**
 * Controller for the `/get` endpoint.
 * @param req Request object
 * @param res Response object
 * @module create
 */
export default (req, res) => {
    let q = JSON.stringify(req.body.question);

    req.app.get("dbcon").query(
        `
        SELECT * FROM Questions
        WHERE Question = ${q};
    `,
        sqlError(res, (rows) => {
            if (rows.length == 0) {
                // Declare a not-found error if question to delete does not exist
                res.status(404).json({
                    message: "Question does not exist in the database",
                });
            } else {
                res.status(200).json({
                    message: "Question fetched successfully",
                    data: [rows[0]],
                });
            }
        })
    );
};
