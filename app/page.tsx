"use client";

import { useEffect, useState } from "react";
import CourseSearch from "./components/CourseSearch";
import Courses from "./components/Courses";
import LoadingSpinner from "./loading";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const res = await fetch("/api/courses");
    const courses = await res.json();
    setCourses(courses);
    setLoading(false);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <h1>Welcome to Traversey Media</h1>
      <CourseSearch setCourses={setCourses} />
      <Courses courses={courses} />
    </>
  );
};

export default HomePage;
