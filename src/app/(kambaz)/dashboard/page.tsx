import CourseCard from "./CourseCard";

export default function Dashboard() {
  const courses = [
    {
      id: "cs5010",
      title: "CS5010 Programming Design Paradigms",
      subtitle: "Course with tons of homework",
      image: "/images/husky1.jpg",
    },
    {
      id: "cs5610",
      title: "CS5610 Web Development",
      subtitle: "Need to handcraft HTML",
      image: "/images/husky2.jpg",
    },
    {
      id: "cs5800",
      title: "CS 5800 Algorithms",
      subtitle: "Try to solve complex problems, but biggest problem is understanding the algorithm.",
      image: "/images/husky3.jpg",
    },
    {
      id: "cs6140",
      title: "CS 6140 Machine Learning",
      subtitle: "Sounds like earning a lot of money",
      image: "/images/husky4.jpg",
    },
  ];

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="wd-dashboard-grid">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            subtitle={course.subtitle}
            image={course.image}
          />
        ))}
      </div>
    </div>
  );
}
