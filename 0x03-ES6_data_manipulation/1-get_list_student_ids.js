export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const studentId = arr.map((obj) => obj.id);

  return studentId;
}
