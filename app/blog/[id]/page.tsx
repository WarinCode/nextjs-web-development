import { use } from "react";
import { Params } from "@/types";

const BlogDetail = ({ params }: Params) => {
    const { id } = use(params);
    console.log("-id-", id);

    return <h1>Blog: {id}</h1>;
}

export default BlogDetail;