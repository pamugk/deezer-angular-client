export class Options {
    streaming: boolean; //If the user can stream on the platform
    streaming_duration: number; //The streaming duration of the user
    offline: boolean; //The user can listen to the music in offline mode
    hq: boolean; //The HQ can be activated
    ads_display: boolean; //Displays ads
    ads_audio: boolean; //Activates audio ads
    too_many_devices: boolean; //If the user reached the limit of linked devices
    can_subscribe: boolean; //If the user can subscribe to the service
    radio_skips: number; //The limit of radio skips. 0 = no limit
    lossless: boolean; //Lossless is available
    preview: boolean; //Allows to display the preview of the tracks
    radio: boolean; //Allows to stream the radio
}
