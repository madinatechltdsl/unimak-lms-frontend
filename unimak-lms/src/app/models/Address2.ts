import { District } from "./District";
import { Region } from "./Region";
import { Student } from "./Student";
import { Country } from "./Country";

export class Address2 {
  id: string | undefined;
  address: string | undefined;
  // @ts-ignore
  country: Country = new Country();
  // @ts-ignore
  district: District = new District();
  // @ts-ignore
  region: Region = new Region();
  // @ts-ignore
  student: Student = new Student();
}

