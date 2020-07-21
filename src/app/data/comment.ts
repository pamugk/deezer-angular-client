import { User } from "./user";

export class Comment {
    id: number; //The comment's Deezer id
    text: string; //The content of the comment
    date: Date; //The date the comment was posted
    object: object; //Object the comment belongs to, containing: id, type. Type can be "artist", "album" or "playlist"
    author: User; //user object containing : id, name, link, picture, picture_small, picture_medium, picture_big, picture_xl
}
