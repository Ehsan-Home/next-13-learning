import Link from "next/link";

interface CoursesModel {
  id: number;
  title: string;
  description: string;
  link: string;
  level: string;
}

const Courses = ({ courses }: { courses: CoursesModel[] }) => {
  return (
    <div className="courses">
      {courses.map((course) => (
        <div className="card" key={course.id}>
          <h2>{course.title}</h2>
          <small>Level: {course.level}</small>
          <p>{course.description}</p>
          <Link href={course.link} className="btn" target="_blank">
            Go to Course
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
