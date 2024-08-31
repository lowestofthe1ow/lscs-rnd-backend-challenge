import sqlError from "../helpers/sql-error.js";

/**
 * Controller for the `/create` endpoint.
 * @module create
 */
export default (req, res) => {
    let q = JSON.stringify(req.body.question);
    let c = JSON.stringify((JSON.stringify(req.body.choices)));
    let a = JSON.stringify(req.body.correct);

    req.app.get('dbcon').query(`
        SELECT * FROM Questions
        WHERE Question = ${q};
    `, sqlError(res, (rows) => {
        if (rows.length > 0) {
            // Declare a database conflict if question already exists
            res.status(409).json({
                message: "Question already exists in the database"
            })
        } else {
            // Attempt to insert question into database
            req.app.get('dbcon').query(`
                INSERT INTO Questions (question, choices, correct) 
                VALUES (${q}, ${c}, ${a});
            `, sqlError(res, () => {
                res.status(200).json({
                    message: "Question created successfully"
                })
            }));
        }
    }))
}