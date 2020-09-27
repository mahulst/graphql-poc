import { useGetUserListNameQuery, usePostsForUserQuery } from '../src/generated/graphql';

const Home = () => {
    const { data } = useGetUserListNameQuery()
    const { data: data2 } = usePostsForUserQuery({ variables: { id: 'aaa' } })

    console.log(data2)
    if (data === undefined) {
        return <div>loading...</div>;
    }
    return (
        <div className="container">
            {data.users.map((user) => {
                return (<div key={user.name}>{user.name}</div>)
            })}
            hello, world!
        </div>
    );
}

export default Home
