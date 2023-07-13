"use client";

import { Dispatch, FormEvent, SetStateAction, useState } from "react";

const CourseSearch = ({
  setCourses,
}: {
  setCourses: Dispatch<SetStateAction<never[]>>;
}) => {
  const [query, setQuery] = useState("");

  const formClicked = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchUpdateCourses();
  };

  const fetchUpdateCourses = async () => {
    const res = await fetch(`/api/courses/search?q=${query}`);
    const courses = await res.json();
    setCourses(courses);
  };

  return (
    <form onSubmit={formClicked} className="search-form">
      <input
        type="text"
        className="search-input"
        placeholder="Search courses..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default CourseSearch;
