

const multiplyValue = (value: number, multiplier = 2): number => {
    return value * multiplier;
}



const processInput = (value: string | number | boolean): string | number => {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }

    else {
        return value ? "Active" : "Inactive";
    }
}



const formatCoordinate = (value: readonly [number, number, string]): string => {
    return `Location: ${value[2]} (${value[0]}, ${value[1]})`;
}



const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.flat();
}



interface Course {
    title: string;
    students: number;
    isPublished: boolean
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    return courses.filter(course => course.isPublished && course.students >= minStudents);

}



const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    return items.map(item => item[key]);
}



class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}



async function validateAgeAsync(age: number): Promise<string> {
    if (age < 18) {
        throw new Error("Access Denied: Must be 18 or older");
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return "Access Granted";
}
