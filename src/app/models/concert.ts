
export interface Concert {
    $key: string;
    artist: string;
    genre: string;
    date: Date;
    time: Date;
    city: string;
    venue: string;
    ticketPrice: number;
    ticketAvailability: string;
    imageUrl: string;
}