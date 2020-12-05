export default class User {
	Id:Number;
    Name: string;
    UserName: string;
    Email: string;
	Street:string;
	Suite:string;
	City:string;
	Zipcode:string;
	Lat:string;
	Lng:string;
	Phone:string;
	Website:string;
	CompanyName:string;
	CompanyCatchPhrase:string;
	CompanyBs:string;
	
	constructor (
		Id:Number,
		Name: string,
		UserName: string,
		Email: string,
		Street:string,
		Suite:string,
		City:string,
		Zipcode:string,
		Lat:string,
		Lng:string,
		Phone:string,
		Website:string,
		CompanyName:string,
		CompanyCatchPhrase:string,
		CompanyBs:string
	){
		this.Id=Id;
		this.Name= Name;
		this.UserName= UserName;
		this.Email= Email;
		this.Street=Street;
		this.Suite=Suite;
		this.City=City;
		this.Zipcode=Zipcode;
		this.Lat=Lat;
		this.Lng=Lng;
		this.Phone=Phone;
		this.Website=Website;
		this.CompanyName=CompanyName;
		this.CompanyCatchPhrase=CompanyCatchPhrase;
		this.CompanyBs=CompanyBs;
	}
  }