/**
 * Schema for validating the question field
 */
export const questionSchema = {
    question: {
        isString: true,
        escape: true,
        errorMessage: 'Invalid question string',
    }
};

/**
 * Schema for validating the choices and correct answer fields
 */
export const choicesSchema = {
    choices: {
        isArray: true,
        escape: true,
        errorMessage: 'Invalid choices array (must have a length of at least 2)',
        custom: {
            options: (value) => {
                return value.length >= 2;
            }
        }
    },
    correct: {
        isInt: true,
        escape: true,
        errorMessage: 'Invalid correct answer index (must be within bounds of choices array)',
        custom: {
            options: (value, { req }) => {
                let len = req.body.choices.length;
                return value < len;
            }
        }
    }
};

/**
 * Schema for validating the answer field
 */
export const answerSchema = {
    answer: {
        isString: true,
        escape: true,
        errorMessage: 'Invalid answer string',
    }
};