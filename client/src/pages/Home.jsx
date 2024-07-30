import { Link } from "react-router-dom";

const HomePage = () => {
  const posts = [
    {
      id: 1,
      title: `javascript tutorial`,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dicta non quos pariatur quasi nihil, iusto modi eum quae voluptas voluptates eveniet vitae incidunt sunt amet optio mollitia cupiditate eaque dignissimos!",
      image: `https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    },
    {
      id: 2,
      title: `apple macbook`,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dicta non quos pariatur quasi nihil, iusto modi eum quae voluptas voluptates eveniet vitae incidunt sunt amet optio mollitia cupiditate eaque dignissimos!",
      image: `https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    },
    {
      id: 3,
      title: "orange juice",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dicta non quos pariatur quasi nihil, iusto modi eum quae voluptas voluptates eveniet vitae incidunt sunt amet optio mollitia cupiditate eaque dignissimos!",
      image: `https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    },
  ];
  return (
    <div className="Home mx-4">
      <div className="max-w-[65em] mx-auto flex flex-col gap-12">
        {posts.map((e, i) => (
          <div
            key={i}
            className={`${
              i % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } flex gap-10 mb-10`}
          >
            <div
              className={`Img-Content w-[40%] relative after:content-[''] after:absolute after:top-[15px] ${
                i % 2 === 0 ? "after:left-[12px]" : "after:right-[12px]"
              } after:z-[-1] after:w-full after:h-full after:bg-[#eb3d4b]`}
            >
              <Link to={`/post/${e.id}`}>
                <img
                  className="w-full h-[20em] object-cover"
                  src={e.image}
                  alt={`${e.title}`}
                />
              </Link>
            </div>
            <div className="w-[60%]">
              <Link to={`/post/${e.id}`}>
                <h1 className="text-3xl font-bold mb-2">{e.title}</h1>
              </Link>
              <Link to={`/post/${e.id}`}>
                <p>{e.desc}</p>
              </Link>
              <button className="border-2 border-[#eb3d4b] text-[#eb3d4b] hover:bg-[#eb3d4b] hover:text-white py-2 px-3 mt-4 transition-all duration-300">
                <Link to={`/post/${e.id}`}>Read more</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HomePage;
