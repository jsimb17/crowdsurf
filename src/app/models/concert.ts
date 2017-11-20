
export interface Concert {
    $key: string;
    artist: string;
    genre: string;
    date: Date;
    time: Date;
    city: string;
    venue: string;
    ticketPrice: number;
    imageUrl: string;
}