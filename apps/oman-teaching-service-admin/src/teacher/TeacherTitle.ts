import { Teacher as TTeacher } from "../api/teacher/Teacher";

export const TEACHER_TITLE_FIELD = "abdullah";

export const TeacherTitle = (record: TTeacher): string => {
  return record.abdullah?.toString() || String(record.id);
};
