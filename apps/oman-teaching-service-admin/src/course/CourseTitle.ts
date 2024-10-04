import { Course as TCourse } from "../api/course/Course";

export const COURSE_TITLE_FIELD = "algebra";

export const CourseTitle = (record: TCourse): string => {
  return record.algebra?.toString() || String(record.id);
};
