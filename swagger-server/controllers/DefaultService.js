'use strict';

exports.questionsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * page (Integer)
  * status (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "student" : {
    "email_id" : 123456789,
    "account_id" : 123456789,
    "created_at" : "2000-01-23T04:56:07.000+0000",
    "handle" : "aeiou",
    "id" : 123456789
  },
  "id" : 123456789,
  "title" : "aeiou",
  "content" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.questionsIdAnswersGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "teacher" : {
    "account_id" : 123456789,
    "created_at" : "2000-01-23T04:56:07.000+0000",
    "handle" : "aeiou",
    "id" : 123456789
  },
  "updated_at" : "2000-01-23T04:56:07.000+0000",
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "id" : 123456789,
  "question_id" : 123456789,
  "content" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.questionsIdAnswersPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (BigDecimal)
  * answer (Answer)
  **/
    var examples = {};
  examples['application/json'] = {
  "teacher" : {
    "account_id" : 123456789,
    "created_at" : "2000-01-23T04:56:07.000+0000",
    "handle" : "aeiou",
    "id" : 123456789
  },
  "updated_at" : "2000-01-23T04:56:07.000+0000",
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "id" : 123456789,
  "question_id" : 123456789,
  "content" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.questionsIdDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (BigDecimal)
  **/
  // no response value expected for this operation
  res.end();
}

exports.questionsIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = {
  "student" : {
    "email_id" : 123456789,
    "account_id" : 123456789,
    "created_at" : "2000-01-23T04:56:07.000+0000",
    "handle" : "aeiou",
    "id" : 123456789
  },
  "id" : 123456789,
  "title" : "aeiou",
  "content" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.questionsIdPATCH = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (BigDecimal)
  * question (QuestionInformation)
  **/
    var examples = {};
  examples['application/json'] = {
  "student" : {
    "email_id" : 123456789,
    "account_id" : 123456789,
    "created_at" : "2000-01-23T04:56:07.000+0000",
    "handle" : "aeiou",
    "id" : 123456789
  },
  "id" : 123456789,
  "title" : "aeiou",
  "content" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.questionsPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * question (Question)
  **/
    var examples = {};
  examples['application/json'] = {
  "student" : {
    "email_id" : 123456789,
    "account_id" : 123456789,
    "created_at" : "2000-01-23T04:56:07.000+0000",
    "handle" : "aeiou",
    "id" : 123456789
  },
  "id" : 123456789,
  "title" : "aeiou",
  "content" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.questionsQuestionIdAnswersAnswerIdCommentsCommentIdDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * questionId (BigDecimal)
  * answerId (BigDecimal)
  * commentId (BigDecimal)
  **/
  // no response value expected for this operation
  res.end();
}

exports.questionsQuestionIdAnswersAnswerIdCommentsCommentIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * questionId (BigDecimal)
  * answerId (BigDecimal)
  * commentId (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = {
  "account_id" : 123456789,
  "updated_at" : "2000-01-23T04:56:07.000+0000",
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "id" : 123456789,
  "question_id" : 123456789,
  "answer_id" : 123456789,
  "content" : "aeiou",
  "commenter" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.questionsQuestionIdAnswersAnswerIdCommentsCommentIdPATCH = function(args, res, next) {
  /**
   * parameters expected in the args:
  * questionId (BigDecimal)
  * answerId (BigDecimal)
  * commentId (BigDecimal)
  * comment (CommentInformation)
  **/
    var examples = {};
  examples['application/json'] = {
  "account_id" : 123456789,
  "updated_at" : "2000-01-23T04:56:07.000+0000",
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "id" : 123456789,
  "question_id" : 123456789,
  "answer_id" : 123456789,
  "content" : "aeiou",
  "commenter" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.questionsQuestionIdAnswersAnswerIdCommentsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * questionId (BigDecimal)
  * answerId (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "account_id" : 123456789,
  "updated_at" : "2000-01-23T04:56:07.000+0000",
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "id" : 123456789,
  "question_id" : 123456789,
  "answer_id" : 123456789,
  "content" : "aeiou",
  "commenter" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.questionsQuestionIdAnswersAnswerIdCommentsPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * questionId (BigDecimal)
  * answerId (BigDecimal)
  * comment (CommentInformation)
  **/
    var examples = {};
  examples['application/json'] = {
  "account_id" : 123456789,
  "updated_at" : "2000-01-23T04:56:07.000+0000",
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "id" : 123456789,
  "question_id" : 123456789,
  "answer_id" : 123456789,
  "content" : "aeiou",
  "commenter" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.questionsQuestionIdAnswersAnswerIdDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * questionId (BigDecimal)
  * answerId (BigDecimal)
  **/
  // no response value expected for this operation
  res.end();
}

exports.questionsQuestionIdAnswersAnswerIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * questionId (BigDecimal)
  * answerId (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = {
  "teacher" : {
    "account_id" : 123456789,
    "created_at" : "2000-01-23T04:56:07.000+0000",
    "handle" : "aeiou",
    "id" : 123456789
  },
  "updated_at" : "2000-01-23T04:56:07.000+0000",
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "id" : 123456789,
  "question_id" : 123456789,
  "content" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.questionsQuestionIdAnswersAnswerIdPATCH = function(args, res, next) {
  /**
   * parameters expected in the args:
  * questionId (BigDecimal)
  * answerId (BigDecimal)
  * answer (AnswerInformation)
  **/
    var examples = {};
  examples['application/json'] = {
  "teacher" : {
    "account_id" : 123456789,
    "created_at" : "2000-01-23T04:56:07.000+0000",
    "handle" : "aeiou",
    "id" : 123456789
  },
  "updated_at" : "2000-01-23T04:56:07.000+0000",
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "id" : 123456789,
  "question_id" : 123456789,
  "content" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.studentsIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = {
  "email_id" : 123456789,
  "account_id" : 123456789,
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "handle" : "aeiou",
  "id" : 123456789
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.studentsPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * student (StudentInformation)
  **/
    var examples = {};
  examples['application/json'] = {
  "email_id" : 123456789,
  "account_id" : 123456789,
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "handle" : "aeiou",
  "id" : 123456789
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.teachersIdDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (BigDecimal)
  **/
  // no response value expected for this operation
  res.end();
}

exports.teachersIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = {
  "account_id" : 123456789,
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "handle" : "aeiou",
  "id" : 123456789
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.teachersIdPATCH = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (BigDecimal)
  * teacher (TeacherInformation)
  **/
    var examples = {};
  examples['application/json'] = {
  "account_id" : 123456789,
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "handle" : "aeiou",
  "id" : 123456789
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.teachersPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * teacher (FacebookAuthInformation)
  **/
    var examples = {};
  examples['application/json'] = {
  "account_id" : 123456789,
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "handle" : "aeiou",
  "id" : 123456789
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

