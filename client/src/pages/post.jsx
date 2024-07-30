import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import Button from "../components/util/Button";

const SinglePage = () => {
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
    <div className="max-w-[65em] mx-auto">
      <div className="flex justify-between">
        <div className="min-h-[7em] w-[70%] mb-5">
          <img
            src="https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="post-img"
            className="h-[20em] w-full object-cover mb-2"
          />
          <div className="flex items-center mb-4">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="creater-post-img"
              className="w-[3em] h-[3em] rounded-full object-cover me-3"
            />
            <div>
              <h2 className="font-bold">John de</h2>
              <h4 className="text-sm">posted 2 days ago</h4>
            </div>
            <div className="flex text-2xl gap-1 ms-5">
              <FaEdit className="text-green-300 cursor-pointer" />
              <MdOutlineDelete className="text-red-300 cursor-pointer" />
            </div>
          </div>
          <h1 className="text-xl font-bold mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            quisquam molestias quos nesciunt dolor. Nemo, dolorum, deleniti
            labore deserunt ipsa, officia corrupti accusamus quae quod illum
            amet saepe et iste! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illum quisquam molestias quos nesciunt dolor.
            Nemo, dolorum, deleniti labore deserunt ipsa, officia corrupti
            accusamus quae quod illum amet saepe et iste! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Illum quisquam molestias quos
            nesciunt dolor. Nemo, dolorum, deleniti labore deserunt ipsa,
            officia corrupti accusamus quae quod illum amet saepe et iste!
          </p>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            quisquam molestias quos nesciunt dolor. Nemo, dolorum, deleniti
            labore deserunt ipsa, officia corrupti accusamus quae quod illum
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            quisquam molestias quos nesciunt dolor. Nemo, dolorum, deleniti
            labore deserunt ipsa, officia corrupti accusamus quae quod illum
            amet saepe et iste! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illum quisquam molestias quos nesciunt dolor.
            Nemo, dolorum, deleniti labore deserunt ipsa, officia corrupti
            accusamus quae quod illum amet saepe et iste! amet saepe et iste!
          </p>
        </div>
        <div className="w-[29%]">
          <h1 className="text-2xl font-bold translate-y-[-.3em]">
            Other post you may like
          </h1>
          <div>
            {posts.map((post, i) => (
              <div key={i} className="mb-3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-[14em] w-full object-cover"
                />
                <h3 className="text-lg font-bold">{post.title}</h3>
                <Button type="button" className="px-3">
                  Read More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SinglePage;
