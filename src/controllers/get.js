import sqlError from "../helpers/sql-error.js";

/**
 * Controller for the `/get` endpoint.
 * @module create
 */
export default (req, res) => {
    let q = JSON.stringify(req.body.question);

    req.app.get('dbcon').query(`
        SELECT * FROM Questions
        WHERE Question = ${q};
    `, (err, rows) => {
        if (rows.length == 0) {
            res.status(404).json({
                message: "Question does not exist in the database"
            })
        } else sqlError(res, (rows) => {
            res.status(200).json({
                message: "Question fetched successfully",
                data: [rows[0]]
            })
        })(err, rows);
    })
}