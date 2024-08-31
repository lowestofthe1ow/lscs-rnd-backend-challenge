import sqlError from "../helpers/sql-error.js";

/**
 * Controller for the `/check-answer` endpoint.
 * @module check-answer
 */
export default (req, res) => {
    let q = JSON.stringify(req.body.question);
    let t = JSON.stringify(req.body.answer);

    req.app.get('dbcon').query(`
        SELECT * FROM Questions
        WHERE Question = ${q};
    `, sqlError(res, (rows) => {
        if (rows.length == 0) {
            res.status(409).json({
                message: "Question does not exist in the database"
            })
        } else {
            let choices = JSON.parse(rows[0].choices);
            let correct = rows[0].correct;

            if (!choices.includes(t)) {
                res.status(409).json({
                    messsage: `Answer is not among the choices for question ${q}`
                })
            } else {
                res.status(200).json({
                    message: "Evaluated successfully",
                    correct: JSON.stringify(choices[correct]) == t
                });
            }
        }
    }))
}