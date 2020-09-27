import { CommentObj } from "./comment-obj";
import { User } from "./user";

export class Comment {
    id: number; //The comment's Deezer id
    text: string; //The content of the comment
    date: number; //The date the comment was posted
    object: CommentObj; //Object the comment belongs to, containing: id, type
    author: User; //user object containing : id, name, link, picture, picture_small, picture_medium, picture_big, picture_xl
}
