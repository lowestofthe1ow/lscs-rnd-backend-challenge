import sqlError from "../helpers/sql-error.js";

/**
 * Controller for the `/update` endpoint.
 * @param req Request object
 * @param res Response object
 * @module create
 */
export default (req, res) => {
    let q = JSON.stringify(req.body.question);
    let c = JSON.stringify(JSON.stringify(req.body.choices));
    let a = JSON.stringify(req.body.correct);

    req.app.get("dbcon").query(
        `
        SELECT * FROM Questions
        WHERE question = ${q};
    `,
        sqlError(res, (rows) => {
            if (rows.length == 0) {
                res.status(404).json({
                    message: "Question does not exist in the database",
                });
            } else {
                req.app.get("dbcon").query(
                    `
                UPDATE Questions 
                SET choices = ${c}, correct = ${a}
                WHERE question = ${q}; 
            `,
                    sqlError(res, () => {
                        res.status(200).json({
                            message: "Question updated successfully",
                        });
                    })
                );
            }
        })
    );
};
