export class Hero {
    id: number;
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    myName()
    {
        return this.name;
    }
}

export function ftest(hero: Hero) {
    console.log(hero);
}