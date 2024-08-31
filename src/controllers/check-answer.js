import sqlError from "../helpers/sql-error.js";

/**
 * Controller for the `/check-answer` endpoint.
 * @param req Request object
 * @param res Response object
 * @module check-answer
 */
export default (req, res) => {
    let q = JSON.stringify(req.body.question);
    let t = req.body.answer;

    req.app.get("dbcon").query(
        `
        SELECT * FROM Questions
        WHERE question = ${q};
    `,
        sqlError(res, (rows) => {
            if (rows.length == 0) {
                res.status(409).json({
                    message: "Question does not exist in the database",
                });
            } else {
                // Check if answer is correct
                let choices = JSON.parse(rows[0].choices);
                let correct = rows[0].correct;

                if (!choices.includes(t)) {
                    // Declare database conflict if answer is not in the choices
                    res.status(409).json({
                        messsage: `Answer is not among the choices for question ${q}`,
                    });
                } else {
                    res.status(200).json({
                        message: "Evaluated successfully",
                        correct: choices[correct] == t,
                    });
                }
            }
        })
    );
};
