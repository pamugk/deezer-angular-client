export class User {
    id: number; //The user's Deezer ID
    name: string; //The user's Deezer nickname
    lastname: string; //The user's last name
    firstname: string; //The user's first name
    email: string; //The user's email
    status: number; //The user's status
    birthday: Date; //The user's birthday
    inscription_date: Date; //The user's inscription date
    gender: string; //The user's gender : F or M
    link: URL; //The url of the profil for the user on Deezer
    picture: URL; //The url of the user's profil picture
    picture_small: URL; //The url of the user's profil picture in size small
    picture_medium: URL; //The url of the user's profil picture in size medium
    picture_big: URL; //The url of the user's profil picture in size big
    picture_xl: URL; //The url of the user's profil picture in size xl
    country: string; //The user's country
    lang: string; //The user's language
    is_kid: boolean; //If the user is a kid or not
    explicit_content_level: string; //The user's explicit content level according to his country
    explicit_content_levels_available: Array<String>; //The user's available explicit content levels according to his country. Possible values are: explicit_display, explicit_no_recommendation and explicit_hide
    tracklist: URL; //API Link to the flow of this user
}
