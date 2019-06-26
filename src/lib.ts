

export class MyClass {
    id: number;
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    myName () : string
    {
        return this.name;
    }
}

export function ftest(obj: MyClass) {
    console.log(obj);
}