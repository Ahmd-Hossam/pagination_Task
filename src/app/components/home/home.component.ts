import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data:any[]=[]
  totalRecords:string=''
  pageSize:number=10
  page:number=1

  isActive:boolean=false


  //user data
  user_Title:string=''
  user_FirstName:string=''
  user_LastName:string=''

  user_Age:number=0
  user_Date:string=''

  user_Phone:number=0
  user_Picture:string=''

  user_Email:string=''

  user_Country:string=''
  user_City:string=''

  user_PostCode:string=''

  user_StreetNumber:number=0
  user_StreetName:string=''



 
  constructor(private auth_Ser:AuthService, config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = true;
  }

  ngOnInit(): void {
    
    this.auth_Ser.getdata().subscribe(
      res=>{
        this.data=res.results;
        this.totalRecords=res.results.length
        console.log(res);
        
      },
      err=>{
        console.log(err);
      }
    )
  }

  pageChanged(event: any): void {
    this.page=event
  }


  //get all 
  getAll(){
    this.isActive=true
    this.pageSize=this.totalRecords as unknown as number
  }
  //reset 
  Reset(){
    this.isActive=false
    this.pageSize=10
  }

  /* task api
  getTask(){
    this.auth_Ser.taskapi().subscribe(
      res=>{
        console.log(res);
      }
    )
  }
 */

  //open modal and show user details
  showdetails(id:any, content:any){
    console.log(id);
    this.modalService.open(content);

    this.user_Title=id.name.title
    this.user_FirstName=id.name.first
    this.user_LastName=id.name.last

    this.user_Age=id.dob.age
    this.user_Date=id.dob.date 

    this.user_Phone=id.phone
    this.user_Picture=id.picture.large

    this.user_Email=id.email 

    this.user_Country=id.location.country 
    this.user_City=id.location.city 

    this.user_PostCode=id.location.postcode 

    this.user_StreetNumber=id.location.street.number
    this.user_StreetName=id.location.street.name 
  }

  
 

}
