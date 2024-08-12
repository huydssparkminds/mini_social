import { TypeComment, TypePost } from "@/models/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "@/data/data.json";

type Init = {
  post: TypePost[];
};

const initialState: Init = {
  post: data.posts,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    likePost: (
      state,
      action: PayloadAction<{
        postId: number | string;
        userId: number | string;
      }>
    ) => {
      const { postId, userId } = action.payload;
      const post = state.post.find((item) => item.id === postId);

      if (post) {
        if (!post.likes.users.includes(userId)) {
          post.likes.users.push(userId);
        }
      }
    },

    unlikePost: (
      state,
      action: PayloadAction<{
        postId: number | string;
        userId: number | string;
      }>
    ) => {
      const { postId, userId } = action.payload;
      const post = state.post.find((item) => item.id === postId);

      if (post) {
        const userIndex = post.likes.users.indexOf(userId);
        // Nếu userId đã tồn tại trong danh sách likes, xóa nó
        if (userIndex !== -1) {
          post.likes.users.splice(userIndex, 1);
          post.likes.count -= 1;
        }
      }
    },
    createComment: (
      state,
      action: PayloadAction<{ comment: TypeComment; postId: string | number }>
    ) => {
      const { comment, postId } = action.payload;
      const post = state.post.find((item) => item.id === postId);

      if (post) {
        post.comments.push(comment);
      }
    },
    createPost: (state, action) => {
      state.post.unshift(action.payload);
    },
  },
});

export const { unlikePost, likePost, createComment, createPost } = postSlice.actions;
export default postSlice.reducer;
