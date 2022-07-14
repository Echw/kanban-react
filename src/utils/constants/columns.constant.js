export const COLUMNS = [
  {
    id: "todo",
    name: "To Do",
    color:
      "linear-gradient(90deg, #7E3535 -3.03%, rgba(201, 27, 27, 0.994792) -3.01%, #FBFF30 102.23%) 1",
    tasks: [
      { title: "Do shopping", id: 1, hashtags: "shop" },
      { title: "Read a book", id: 2, hashtags: "hobby" },
    ],
  },
  {
    id: "inprogress",
    name: "In Progress",
    color: "linear-gradient(90deg, #45D900 -3.03%, #30FFCD 102.23%) 1",
    tasks: [],
  },
  {
    id: "review",
    name: "Review",
    color:
      "linear-gradient(90deg, rgba(27, 190, 201, 0.994792) -3.01%, #6F6CFF 102.23%) 1",
    tasks: [],
  },
  {
    id: "complete",
    name: "Complete",
    color:
      "linear-gradient(90deg, rgba(176, 27, 201, 0.994792) -3.01%, #FF3030 102.23%) 1",
    tasks: [],
  },
];
