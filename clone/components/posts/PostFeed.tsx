import usePosts from "@/hooks/usePosts";
import PostItem from "./PostItem";

interface PostFeedPorps{
    userId?: string
}


const PostFeed: React.FC<PostFeedPorps> = ({userId}) => {
    const { data: posts = [] } = usePosts(userId);
    return ( 
        <>
            {posts.map((post: Record<string, any>)=>(
                <PostItem
                    userId={userId}
                    key={post.id}
                    data={post}
                />
            ))}
        </>
     );
}
 
export default PostFeed;