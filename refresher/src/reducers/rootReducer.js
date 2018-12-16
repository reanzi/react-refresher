const initState = {
  posts: [
    {
      id: "1",
      title: "qui est esse",
      body:
        "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      id: "2",
      title: "dolorem dolore est ipsam",
      body:
        "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
    },
    {
      id: "3",
      title: "dolorem eum magni eos aperiam quia",
      body:
        "dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => action.id !== post.id);
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
