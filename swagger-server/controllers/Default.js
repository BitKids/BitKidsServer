'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.questionsGET = function questionsGET (req, res, next) {
  Default.questionsGET(req.swagger.params, res, next);
};

module.exports.questionsIdAnswersGET = function questionsIdAnswersGET (req, res, next) {
  Default.questionsIdAnswersGET(req.swagger.params, res, next);
};

module.exports.questionsIdAnswersPOST = function questionsIdAnswersPOST (req, res, next) {
  Default.questionsIdAnswersPOST(req.swagger.params, res, next);
};

module.exports.questionsIdDELETE = function questionsIdDELETE (req, res, next) {
  Default.questionsIdDELETE(req.swagger.params, res, next);
};

module.exports.questionsIdGET = function questionsIdGET (req, res, next) {
  Default.questionsIdGET(req.swagger.params, res, next);
};

module.exports.questionsIdPATCH = function questionsIdPATCH (req, res, next) {
  Default.questionsIdPATCH(req.swagger.params, res, next);
};

module.exports.questionsPOST = function questionsPOST (req, res, next) {
  Default.questionsPOST(req.swagger.params, res, next);
};

module.exports.questionsQuestionIdAnswersAnswerIdCommentsCommentIdDELETE = function questionsQuestionIdAnswersAnswerIdCommentsCommentIdDELETE (req, res, next) {
  Default.questionsQuestionIdAnswersAnswerIdCommentsCommentIdDELETE(req.swagger.params, res, next);
};

module.exports.questionsQuestionIdAnswersAnswerIdCommentsCommentIdGET = function questionsQuestionIdAnswersAnswerIdCommentsCommentIdGET (req, res, next) {
  Default.questionsQuestionIdAnswersAnswerIdCommentsCommentIdGET(req.swagger.params, res, next);
};

module.exports.questionsQuestionIdAnswersAnswerIdCommentsCommentIdPATCH = function questionsQuestionIdAnswersAnswerIdCommentsCommentIdPATCH (req, res, next) {
  Default.questionsQuestionIdAnswersAnswerIdCommentsCommentIdPATCH(req.swagger.params, res, next);
};

module.exports.questionsQuestionIdAnswersAnswerIdCommentsGET = function questionsQuestionIdAnswersAnswerIdCommentsGET (req, res, next) {
  Default.questionsQuestionIdAnswersAnswerIdCommentsGET(req.swagger.params, res, next);
};

module.exports.questionsQuestionIdAnswersAnswerIdCommentsPOST = function questionsQuestionIdAnswersAnswerIdCommentsPOST (req, res, next) {
  Default.questionsQuestionIdAnswersAnswerIdCommentsPOST(req.swagger.params, res, next);
};

module.exports.questionsQuestionIdAnswersAnswerIdDELETE = function questionsQuestionIdAnswersAnswerIdDELETE (req, res, next) {
  Default.questionsQuestionIdAnswersAnswerIdDELETE(req.swagger.params, res, next);
};

module.exports.questionsQuestionIdAnswersAnswerIdGET = function questionsQuestionIdAnswersAnswerIdGET (req, res, next) {
  Default.questionsQuestionIdAnswersAnswerIdGET(req.swagger.params, res, next);
};

module.exports.questionsQuestionIdAnswersAnswerIdPATCH = function questionsQuestionIdAnswersAnswerIdPATCH (req, res, next) {
  Default.questionsQuestionIdAnswersAnswerIdPATCH(req.swagger.params, res, next);
};

module.exports.studentsIdGET = function studentsIdGET (req, res, next) {
  Default.studentsIdGET(req.swagger.params, res, next);
};

module.exports.studentsPOST = function studentsPOST (req, res, next) {
  Default.studentsPOST(req.swagger.params, res, next);
};

module.exports.teachersIdDELETE = function teachersIdDELETE (req, res, next) {
  Default.teachersIdDELETE(req.swagger.params, res, next);
};

module.exports.teachersIdGET = function teachersIdGET (req, res, next) {
  Default.teachersIdGET(req.swagger.params, res, next);
};

module.exports.teachersIdPATCH = function teachersIdPATCH (req, res, next) {
  Default.teachersIdPATCH(req.swagger.params, res, next);
};

module.exports.teachersPOST = function teachersPOST (req, res, next) {
  Default.teachersPOST(req.swagger.params, res, next);
};
