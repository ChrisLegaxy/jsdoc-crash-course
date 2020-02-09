// @ts-check

/**
 * Student Type
 * @typedef {object} Student
 * @property {string} id - Student ID
 * @property {string} name - Student Name
 * @property {number} [age] - Student Age (Optional)
 * @property {boolean} isActive - Student Status
 * 
 */

/**
 * @type {Student}
 */
const student = {
  id: "10701038",
  name: "Chris",
  age: 21,
  isActive: true
}

/**
 * CGPA Calculating Function
 * @param {array} eachSubjectScores - Each subject score that a student has scored
 * @param {number} totalSubject - All subjects that has been tested
 * @returns {number} - CGPA
 */
function calculateCGPA(eachSubjectScores, totalSubject) {
  let totalScores = 0
  for (const i of eachSubjectScores) {
    totalScores += i
  }
  const cgpa = totalScores/totalSubject
  return cgpa
}
