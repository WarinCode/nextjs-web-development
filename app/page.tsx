import Hello from "@/components/Hello";
import Counter from "@/components/Counter";
import UserCard from "@/components/UserCard";
import { Todo } from "@/types";

const Home = async () => {
  const response: Response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/3"
  );
  const data: Todo = await response.json();
  console.log("-data-", data);

  return (
    <div>
      <Hello name="Toon" age={18} />
      <h1>Title: {data.title}</h1>
      <p>ID: {data.id}</p>
      <Counter />

      <UserCard name="Toon" role="Sr. Frontend Developer">
        I love my job
      </UserCard>
      <UserCard name="Mo">กำลังศึกษา Next.js</UserCard>
    </div>
  );
};

export default Home;
