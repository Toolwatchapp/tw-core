import { Watch } from './watch.model';
export declare class User {
    id: number;
    email: string;
    name: string;
    lastname: string;
    country: string;
    registerDate: string;
    key: string;
    watches: Watch[];
    emailPreferences: EmailPreferences;
    constructor(id: number, email: string, name: string, lastname: string, country: string, registerDate: string, key: string, watches: Watch[]);
    upsertWatch(watch: Watch): void;
    toString: () => string;
}
export declare enum EmailPreferences {
    None = 0,
    FirstWatch = 2,
    FirstMeasure = 4,
    DayAccuracy = 8,
    WeekAccuracy = 16,
    Result = 32,
    NewMeasure = 64,
    SecondWatch = 128,
    Comeback = 256,
    WatchStories = 512,
}
